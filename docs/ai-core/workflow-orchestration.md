# Workflow 工作流完全指南

**核心概念**: Workflow 是给 AI 建流水线。把复杂任务拆成步骤，交给多个 Agent 按顺序或并行自动执行，包工头（Orchestrator）指挥工人（Worker）各司其职。

**学习来源**: 亲眼观察 Claude Code 运行 16 个并行 Agent + Anthropic 官方 Agent View 文档  
**最大收获**: 终于搞清楚了"好消息，文件找到啦"这条消息背后的架构——那是 Orchestrator 在主线程留下的实时通知。

📖 **完整学习对话记录**：[Workflow](../conversations/workflow.md)

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [Tool](../../glossary.md#tool)

---

## 目录

1. [Workflow 的本质](#workflow-的本质)
2. [两种基本形态](#两种基本形态)
3. [Orchestrator + Worker 分工](#orchestrator--worker-分工)
4. [Session 线程和 Agent View](#session-线程和-agent-view)
5. [概念串联](#概念串联)
6. [常见问题](#常见问题)

---

## Workflow 的本质

### 定义

Workflow 不是新概念，而是把**复杂任务分解成步骤**，然后让**多个 [Agent](../../glossary.md#agent) 自动执行**的系统。

**对比**：

```
不用 Workflow 的方式：
  用户 → Claude（做完 A）→ 用户 → Claude（做 B）→ ...
  效率：低（每步都要用户输入）

用 Workflow 的方式：
  用户 → [自动流程] → 结果
  （内部：Orchestrator 分配 → Worker 1 做 A → Worker 2 做 B → ...)
  效率：高（自动执行，用户只在关键点介入）
```

### 核心优势

1. **自动化**：任务自动执行，用户不用每步都输入
2. **并行**：多个任务同时跑，快速完成
3. **成本优化**：贵模型做指挥，便宜模型做执行，省 40-60%
4. **可靠性**：可配置重试、错误处理、人工介入

---

## 两种基本形态

### 形态 1：顺序型 Workflow（Sequence）

**特点**：A 做完 → B 做完 → C 做完

**适用场景**：有明确的先后依赖

**例子**：
```
任务：生成市场分析报告

步骤：
  1. Worker 1: 搜索竞争对手信息（20 分钟）
       ↓
  2. Worker 2: 从信息中筛选关键数据（10 分钟）
       ↓
  3. Worker 3: 根据筛选结果写报告（15 分钟）
       ↓
  完成

总耗时：20 + 10 + 15 = 45 分钟
```

**架构**：
```
Orchestrator（主线程）
  ├─ "Worker 1，开始搜索"
  │   Worker 1 运行在线程 1
  │   ...（干活）...
  │   Worker 1: "搜索完了，结果在这"
  │
  ├─ "Worker 2，开始筛选"
  │   Worker 2 运行在线程 2
  │   ...（干活）...
  │   Worker 2: "筛选完了，数据在这"
  │
  └─ "Worker 3，开始写作"
      Worker 3 运行在线程 3
      ...（干活）...
      Worker 3: "报告写好了"
```

### 形态 2：并行型 Workflow（Parallel）

**特点**：A、B、C 同时做 → 汇总

**适用场景**：任务互相独立，没有依赖关系

**例子**（Belinda 看过的真实案例）：
```
任务：转换 16 个视频

步骤：
  1. Worker 1: 转换视频 1（并行运行）
  2. Worker 2: 转换视频 2（并行运行）
  ...
  16. Worker 16: 转换视频 16（并行运行）
       ↓
  汇总：所有视频都转换完了

总耗时：max(所有视频转换时间) ≈ 单个视频的时间
```

**时间对比**：
```
顺序：视频 1 (20 分钟) + 视频 2 (20 分钟) + ... = 320 分钟
并行：max(20, 20, ..., 20) = 20 分钟

加速倍数：16 倍！
```

**架构**：
```
Orchestrator（主线程）
  ├─ "Worker 1，转换视频 1" (线程 1)
  ├─ "Worker 2，转换视频 2" (线程 2)
  ├─ "Worker 3，转换视频 3" (线程 3)
  ...
  └─ "Worker 16，转换视频 16" (线程 16)

[所有 Worker 同时干活]

Worker 1: "我完成了！"（在线程 1 里）
Worker 3: "我也完成了！"（在线程 3 里）
...

Orchestrator: "都完成了吗？"
  → 检查 16 个线程的状态
  → "是的，全部完成"
  → 汇总结果
```

### 选择规则

| 特性 | 顺序型 | 并行型 |
|------|-------|-------|
| **速度** | 慢（阶梯式） | 快（1 倍或更快） |
| **复杂度** | 低 | 高（需要协调） |
| **适用** | 有依赖关系 | 互相独立 |
| **例子** | 搜索→筛选→写作 | 16 个视频并行转换 |

---

## Orchestrator + Worker 分工

### 角色定义

**Orchestrator（包工头/指挥官）**：
- 在**主线程**运行
- 职责：
  - 理解任务（用户要什么？）
  - 分解任务（拆成哪些子任务？）
  - 分配工作（哪个 Worker 做什么？）
  - 实时追踪[状态](../../glossary.md#state)（谁完成了？谁失败了？）
  - 收集结果（所有结果都到了吗？）
  - 判断下一步（继续还是汇总？）

**Worker（工人/执行者）**：
- 在**独立线程**运行（每个 Worker 一条线程）
- 职责：
  - 只管做好自己那一件事
  - 完成后把结果扔回**共享频道**
  - 其他事不用管

### 成本优化

**关键洞察**：
```
Orchestrator 需要聪明（用好模型）
Worker 只需要能执行（用便宜模型）
```

**例子**：
```
任务：分析 100 个客户反馈，每个生成总结

传统方式：
  用 Claude 3.5 Sonnet（贵模型）处理所有 100 个
  成本：$100

用 Workflow 的方式：
  Orchestrator: Claude 3.5 Sonnet（分工、决策）
  Worker: Claude 3.5 Haiku（每个反馈 1 个便宜 Worker）
  成本：$40

省钱：60%
```

### 三层结构（复杂任务）

当任务非常复杂时，可能需要三层：

```
Orchestrator（包工头）
  ├─ Sub-orchestrator A（小队长）
  │  ├─ Worker A1
  │  ├─ Worker A2
  │  └─ Worker A3
  │
  └─ Sub-orchestrator B（小队长）
     ├─ Worker B1
     ├─ Worker B2
     └─ Worker B3
```

**例子**：
```
任务：处理 1000 个用户的完整档案

Orchestrator：分成 10 组，每组 100 个用户
  ├─ Sub-Orch 1：处理用户 1-100
  │  ├─ Worker: 处理用户 1-10
  │  ├─ Worker: 处理用户 11-20
  │  └─ ...
  │
  ├─ Sub-Orch 2：处理用户 101-200
  │  └─ ...
  │
  └─ ...

小队长负责自己这 100 个，大队长负责协调 10 个小队
```

---

## Session 线程和 Agent View

### Session 线程的隔离性

**关键原理**：每个 Agent 都有自己独立的**后台线程**和**[Context](../../glossary.md#context) Window**。

```
主线程（用户看得到）:
  Orchestrator 运行
  显示：状态更新、结果汇总

后台线程（用户看不到）:
  线程 1: Worker 1（自己的 Context Window）
    - 自己的对话历史
    - 自己调用的工具
    - 自己的中间结果

  线程 2: Worker 2（自己的 Context Window）
    - 自己的对话历史
    - 自己调用的工具
    - 自己的中间结果

  线程 16: Worker 16（自己的 Context Window）
    ...
```

**优势**：
- 主线程的 Context Window **不会被塞满**
- 每个 Worker 专注自己的任务
- 互相隔离，互不干扰

### Agent View（2026 年 5 月 Anthropic 推出）

**问题**：用户平时看不到后台线程在干什么。

**解决方案**：Agent View ——一个 CLI 仪表板。

**显示内容**：
```
Agent View 仪表板
├─ 整个任务的层级结构
├─ 每个 Sub-agent 的实时状态
│  ├─ Worker 1: [##########] 90% 完成（搜索竞争对手...）
│  ├─ Worker 2: [#######   ] 70% 完成（筛选数据...）
│  └─ Worker 3: [#        ] 10% 完成（准备写作...）
│
├─ 每个 Worker 的实时日志
│  └─ Worker 1:
│      ├─ 14:23:45 "开始搜索 Google Trends"
│      ├─ 14:24:12 "找到 45 个相关数据"
│      └─ 14:25:30 "搜索完成！"
│
└─ 允许直接介入
   └─ 可以直接给某个 Worker 发消息（"你搜 LinkedIn 试试"）
```

**Belinda 观察到的**：
> "好消息，文件找到啦"

这条消息就是 Orchestrator 在主线程留下的通知——表示某个 Worker 完成了一个里程碑。

---

## 概念串联

现在五个核心概念全部串起来了：

### 1. Agent（是谁干）

```
Orchestrator: 聪明的 Agent，负责指挥
Worker: 能执行的 Agent，负责干活
```

### 2. Skill（怎么干）

```
Worker 加载自己的 Skill
  - Worker 1 加载 SearchSkill
  - Worker 2 加载 FilterSkill
  - Worker 3 加载 WritingSkill

各司其职，专注自己的领域
```

### 3. MCP（去哪干）

```
不同 Worker 可以连接不同的 MCP
  - Worker 1 连 Google MCP（搜索）
  - Worker 2 连 DataBase MCP（筛选）
  - Worker 3 连 FileSystem MCP（写入）

比单个 Agent 更灵活
```

### 4. Memory（经验）

```
Worker 完成任务后：
  结果 → 共享频道 → Orchestrator 读取
  
这本质上是跨 Agent 的短期 Memory

比如：
  Worker 1 搜索完："找到 50 条数据"
  → 存进共享频道
  Worker 2 读取："好的，我从这 50 条里筛选"
```

### 5. Workflow（按什么顺序干）

```
Workflow 定义了整个流程的编排
  - 顺序型：A→B→C
  - 并行型：A//B//C
  - 条件型：A→if(条件)→B or C
  - 循环型：repeat{A}until(完成)
```

### 完整图景

```
用户的需求
  ↓
Workflow（按什么顺序干）
  ├─ Orchestrator（是谁干 - 聪明的 Agent）
  │  └─ 分析：需要分成几个子任务？并行还是顺序？
  │
  ├─ Worker 1（能执行的 Agent）
  │  ├─ Skill: SearchSkill（怎么干）
  │  ├─ MCP: Google API（去哪干）
  │  └─ Session 线程 1（独立的 Context Window）
  │      └─ Memory: 搜索结果存进共享频道
  │
  ├─ Worker 2
  │  ├─ Skill: FilterSkill
  │  ├─ MCP: Database API
  │  └─ Session 线程 2
  │      └─ Memory: 筛选结果存进共享频道
  │
  └─ Worker 3
     ├─ Skill: WritingSkill
     ├─ MCP: FileSystem API
     └─ Session 线程 3
         └─ Memory: 最终报告

全部完成
  ↓
用户获得结果
```

---

## 常见问题

### Q1: 顺序型 Workflow 里，如果中间某个 Worker 失败了，怎么处理？

**答案**：取决于任务性质和系统设置。

**可配置方案**：

1. **重试**（默认）：
   ```
   Worker 失败 → Orchestrator 发现 → 自动重试（3 次）
   适合：网络超时、临时错误
   ```

2. **跳过**：
   ```
   Worker 失败 → Orchestrator 发现 → 跳过，继续下一步
   适合：某些步骤非必需
   例子：搜索失败，但还可以用已缓存的数据
   ```

3. **上报用户**：
   ```
   Worker 失败 → Orchestrator 发现 → 问用户怎么办
   适合：高风险任务（删除文件、修改配置）
   例子："删除失败了，确认重试吗？"
   ```

4. **回滚**：
   ```
   Worker 3 失败 → Orchestrator 回滚 Worker 2 和 1 的结果
   适合：任务有副作用
   例子：转账失败，撤销所有已转账
   ```

**Orchestrator 的智能**：
```
if Worker 失败:
  if 重试 < max_retries:
    重试()
  elif 可跳过:
    跳过()
  elif 用户需介入:
    上报用户()
  else:
    整个流程失败()
```

**灵活性**才是正确设计的关键。

### Q2: Agent View 怎么用？

**答案**：在命令行运行 Claude Code 时加参数。

```bash
# 启用 Agent View
claude-code --agent-view

# 或者在运行中按 V 键切换到 Agent View
```

**Belinda 可以下次试试**：
- 在 Mac 上用 Claude Code 运行一个有多个 Worker 的任务
- 按照 Agent View 的提示，看实时的层级结构和状态
- "偷窥"后台 Worker 在干什么

---

## 关键洞察

### Orchestrator 的价值

```
不是"更聪明"，而是"更会分工"

Orchestrator 的核心能力：
1. 理解复杂问题（需要聪明）
2. 拆成子问题（需要经验）
3. 分配资源（需要判断）
4. 实时追踪（需要监控）
5. 调整策略（需要适应）

这是系统战争的本质——不是单个 AI 有多聪明，
而是整个系统怎样协调多个 AI 高效工作。
```

### 成本-效率权衡

```
用 1 个贵模型处理 100 个任务：
  成本高，但可能更准确

用 1 个贵模型（Orchestrator）+ 100 个便宜模型（Worker）：
  成本低（40-60%），准确度有保证

Orchestrator 的决策力 > Worker 的执行力
这就是为什么 Orchestrator 要用好模型
```

---

## 下一步学习

- 🔧 [Workflow 高级模式](../ai-application/workflow-design-guide.md)（条件分支、循环、嵌套）
- 💰 成本优化策略（待创建）
- 🛡️ 错误处理和恢复（待创建）

---

**最后更新**: August 4, 2026（基于 Aug 1 学习）  
**相关**:
- [Agent 架构](agent-architecture.md)
- [Harness 系统](../ai-application/harness-system.md)
- [工作流设计（之前的版本）](../ai-application/workflow-design-guide.md)
- [Agent 时代的系统架构转变](agent-era-work.md)
- [Agent 的"单轴刻度"问题](agent-single-axis-problem.md) —— "多 Agent 编排更强/更省"不能无条件套用：前瞻记忆任务里简单心跳反而更优
- [Agent Intelligence 三层框架](agent-intelligence-layers.md) —— orchestration 不是独立的"新智能"，是"委托"决策加了一层分解与调度；还有"什么时候不该拆"
- [心智模型变迁史：Prompt → Workflow](../../mental-models.md)
