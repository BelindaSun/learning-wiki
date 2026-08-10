# Agent 系统架构

**核心概念**: Agent 是一个能够感知环境、进行决策、采取行动的自主系统。在 AI 时代，Agent 特指由大语言模型驱动、能够调用工具、进行多步推理的系统。

**关键洞察**: Agent 不是"更聪明的 ChatGPT"，而是**一个完整的系统架构**——包括感知、决策、行动和反馈循环。

**第一次接触这个主题？** 建议先了解：[LLM](../../glossary.md#llm) · [Token](../../glossary.md#token) · [Inference](../../glossary.md#inference)

---

## 目录

1. [Agent 生命周期](#agent-生命周期)
2. [状态机与上下文窗口](#状态机与上下文窗口)
3. [工具调用机制](#工具调用机制)
4. [多 Agent 协调](#多-agent-协调)
5. [实战例子](#实战例子)

---

## Agent 生命周期

### 六个关键阶段

```
Stage 0: 消息到达
   ↓
Stage 1: 理解与规划
   ↓
Stage 2: 工具调用循环
   ↓
Stage 3: 结果收集
   ↓
Stage 4: 用户反馈
   ↓
Stage 5: 调整与继续
   ↓
结束
```

### Stage 0: 消息到达

**输入**: 用户的请求（可能包含文件、[上下文](../../glossary.md#context)、指令）

**系统做的事**:
- 解析用户消息
- 检索文件（如果有）
- 加载当前的 `conversation_history`
- 准备[工具](../../glossary.md#tool)列表

**示例**:
```
用户: "这是上周的竞争对手定价数据（上传 Excel）。
       帮我分析一下，对比我们的定价策略。"

系统加载:
- conversation_history (空或包含之前的对话)
- tools: [read_file, analyze_data, create_chart, write_file]
- 上传的 Excel 文件内容
```

### Stage 1: 理解与规划

**LLM 的任务**: 理解这是一个什么样的请求，需要多少步骤。

**决策点**:
- 这需要一个 Agent 吗？（vs 简单的文本回答）
- 需要调用哪些工具？
- 执行顺序是什么？

**输出**: Claude 生成的第一个响应——可能包含：
- 文本解释（"我来帮你分析..."）
- **Tool Use Block**（第一个工具调用）

**关键**:
```
这个"计划"不是显式写的，而是隐含在 LLM 的 logits 中。
Claude 的模型权重编码了"看到数据 + 分析请求 → 先读文件"这个模式。
```

### Stage 2: 工具调用循环

这是 Agent 的核心。循环可以重复多次：

**第 N 次迭代**:

1. **Claude 生成工具调用**:
   ```json
   {
     "type": "tool_use",
     "id": "toolu_01ARZ3NdrlSvHqzsmqwsk5n",
     "name": "read_file",
     "input": {
       "file_path": "[Excel 文件]"
     }
   }
   ```

2. **系统执行工具**:
   ```
   系统调用 read_file 函数
   获得结果: CSV 数据，150 行，包含竞争对手价格信息
   ```

3. **结果返回给 Claude**:
   ```json
   {
     "type": "tool_result",
     "tool_use_id": "toolu_01ARZ3NdrlSvHqzsmqwsk5n",
     "content": "[文件数据...]"
   }
   ```

4. **Claude 看到结果，决定下一步**:
   - 需要更多数据吗？
   - 需要计算什么？
   - 可以生成最终答案了吗？

5. **循环继续** ↑

**重要**:
- 每个工具调用都被记录在 `conversation_history` 里
- Claude 能"看到"所有之前的步骤
- 这个循环会一直进行，直到 Claude 决定停止

### Stage 3: 结果收集

当 Claude 认为有足够的信息生成最终答案时：

**Claude 停止调用工具，开始生成文本**:
```
根据分析，我发现：
- 在产品 A 上，我们有 15% 的价格优势
- 在产品 B 上，被压制了 8%
- 建议：[...]
```

这个文本是 Agent 的最终输出。

### Stage 4: 用户反馈

用户看到结果，可以：
- ✅ 接受
- ❌ 拒绝
- 🔄 修改（"改一下，产品 B 的分析不对"）

如果用户给反馈，**新的用户消息被加入 `conversation_history`**，然后回到 Stage 1。

### Stage 5: 调整与继续

Claude 看到用户的反馈，重新理解任务，可能：
- 重新计算（重新调用分析工具）
- 返回编辑（让用户确认改动）
- 继续（展开到新的分析）

---

## 状态机与上下文窗口

### 什么是 Agent 的"记忆"？

**在最简单的情况下**：像 Claude Code 这样的对话式 Agent，`conversation_history` 可以承担大部分 [working state](../../glossary.md#state)——这是最容易理解、也是下面示例展示的实现方式。更复杂的 Agent 系统通常还会维护额外的 task state、tool state、environment state，甚至用外部数据库、文件系统或 checkpoint 来存长期[记忆](../../glossary.md#memory)，不是所有 Agent 都只靠一条 conversation_history 撑起全部状态。

```python
# 这是系统在维持的数据结构
conversation_history = [
  {
    "role": "user",
    "content": "分析这个 Excel...（原始请求）"
  },
  {
    "role": "assistant",
    "content": "我来帮你分析。首先读取文件...",
    "tool_use": [
      {
        "id": "toolu_01...",
        "name": "read_file",
        "input": {...}
      }
    ]
  },
  {
    "role": "user",  # 工具结果作为"用户"消息返回
    "content": [
      {
        "type": "tool_result",
        "tool_use_id": "toolu_01...",
        "content": "[文件数据...]"
      }
    ]
  },
  # ... 继续...
]
```

### 为什么是"状态机"？

因为每次 Claude 被调用时：
1. 完整的 `conversation_history` 被发送给模型
2. Claude 读完历史，理解当前状态
3. Claude 生成下一步
4. 新的交互被追加到历史

**在这种最简单的实现里，没有额外的数据库或显式"记忆存储"——历史本身就是状态。** 但这是一种常见的简单实现，不是 Agent 架构的普遍定义；参考 [Agent 记忆系统完全指南](memory-system-guide.md) 了解更复杂的记忆架构长什么样。

### 上下文窗口的限制

```
Claude 的上下文窗口: 200K tokens
├─ 已用历史: 150K tokens
└─ 剩余可用: 50K tokens

问题: 如果 conversation_history 超过 200K tokens？
答案: Agent 无法继续工作（或需要"归档"老的历史）
```

**实战影响**:
- 长时间运行的 Agent 需要定期"总结"历史
- 这叫做 **Context Compression** 或 **Conversation Summarization**

---

## 工具调用机制

### 三个关键问题

**Q1: Claude 怎样"决定"调用哪个工具？**

**A**: 不是显式的 if-else。而是:
1. 系统指令说："当你看到数据分析请求，优先使用可用工具"
2. 工具列表包含：`[read_file, analyze, create_chart, ...]`
3. Claude 的 logits（每个 token 的概率）会对"tool_use"这个 token 给高分
4. 采样器选择这个 token，形成 tool_use block
5. Claude 继续生成，选择最可能的工具名

**这本质上是概率驱动的，而不是显式的 if-else 逻辑判断**——虽然系统指令、工具描述这些设计手段，本质上是在"引导"这个概率分布，让它更倾向于做出你想要的选择。

**Q2: 为什么有时候 Agent 选错工具？**

**A**: 因为:
- 指令不够清晰
- 工具定义不明确
- 用户请求模糊
- LLM 的训练数据有偏差

**解决方案**: 更好的指令设计、更清晰的工具定义。

**Q3: 怎样控制 Agent 用哪个工具？**

**A**: 四个层级的控制：

| 层级 | 控制方式 | 示例 |
|------|--------|------|
| 系统指令 | 明确告诉 LLM 优先级 | "优先用 Skill，次选 MCP，最后写代码" |
| 工具定义 | 在工具列表里的工具，才能被看到 | 只暴露 3 个相关工具，隐藏其他 |
| 请求指令 | 在用户请求里明确说 | "用 GoogleDrive API 来读这个文件" |
| 示例（Few-shot） | 给 Agent 看几个例子 | "比如上次你是这样做的..." |

**最强大的是"工具定义"——你没有暴露的工具，Agent 根本看不到。**

### Tool Definition 的最佳实践

```json
{
  "name": "analyze_csv",
  "description": "分析 CSV 文件。输入是已读的 CSV 内容，输出是分析结果。",
  "parameters": {
    "type": "object",
    "properties": {
      "csv_content": {
        "type": "string",
        "description": "CSV 文件的完整内容"
      },
      "analysis_type": {
        "type": "string",
        "enum": ["summary", "trend", "anomaly"],
        "description": "分析类型。只支持这三种。"
      }
    },
    "required": ["csv_content", "analysis_type"]
  }
}
```

**设计原则**:
- ✅ 清晰的描述（Agent 通过这个决定用不用）
- ✅ 明确的参数定义（哪些必需？什么类型？）
- ✅ 约束条件（enum 限制选项）
- ❌ 模糊描述
- ❌ 过多参数

---

## 多 Agent 协调

### 为什么需要多 Agent？

当任务太复杂时，一个 Agent 可能：
- 进行太多步骤（token 花费大）
- 在多个不相关的任务间切换（效率低）
- 需要不同的工具集或权限

**解决方案**: 多个 Agent，每个专注一个子任务。

### 两种架构

**架构 1: 并行 Agent（User 同时管理）**

```
用户 Sarah
  ├─ 窗口 1: Agent A (竞争对手分析)
  ├─ 窗口 2: Agent B (用户反馈分析)
  └─ 窗口 3: Agent C (报告生成)

Sarah 在三个窗口间切换，监督进度。
```

**这是现在最常见的方式**（你也在这样做）。

**架构 2: 编排 Agent（自动协调）**

```
用户请求: "给我一份完整的市场分析"
  ↓
编排 Agent (Orchestrator)
  ├─ 分析分解: 这需要 3 个子任务
  ├─ 任务 1 → Agent A
  ├─ 任务 2 → Agent B
  ├─ 任务 3 → Agent C
  ├─ 等待所有完成
  ├─ 综合结果
  └─ 返回用户
```

**这需要更复杂的系统（Workflow Orchestration）**。

---

## 实战例子

### 例 1: Sarah 的营销分析（简化版）

**用户请求**:
```
"这个 CSV 里是上个月的营销数据。
 帮我：
 1. 算出每个渠道的 ROI
 2. 找出效果最好的 3 个活动
 3. 生成一个简短的总结"
```

**Agent 生命周期追踪**:

```
Stage 1: 理解
  → 这是数据分析任务，需要 read_file → calculate → summarize

Stage 2: 工具循环 #1
  tool_use: read_csv
  ↓
  tool_result: [CSV 数据，200 行]

Stage 2: 工具循环 #2
  tool_use: execute_python
  code: |
    df = pd.read_csv(...)
    roi = df.groupby('channel').apply(calculate_roi)
    top_3 = roi.nlargest(3)
  ↓
  tool_result: [结果数据]

Stage 2: 工具循环 #3
  tool_use: write_summary
  ↓
  tool_result: [总结文本]

Stage 3: 生成最终答案
  "根据分析..."
```

### 例 2: Agent 被用户打断

**初始状态**: Agent 在执行一个复杂分析

**用户中途**: "等等，这个数据源有问题，忽略 A 列"

**系统**:
1. 新消息被加入 `conversation_history`
2. Claude 被重新调用
3. Claude 看到完整历史 + 新反馈
4. Claude 理解: "哦，用户说 A 列有问题"
5. Claude 决定: "我需要重新计算，排除 A 列"
6. 循环重新开始

**关键**: 无需"取消"或"重启" Agent。只需要新的用户消息，Agent 自动调整。

---

## 关键术语

| 术语 | 定义 |
|------|------|
| **Conversation History** | 完整的对话记录，包括所有工具调用和结果 |
| **Tool Use Block** | LLM 生成的调用工具的指令 |
| **Tool Result** | 工具执行后返回的结果 |
| **Context Window** | LLM 能处理的最大 token 数 |
| **Logits** | 模型对每个 token 的概率评分 |
| **State Machine** | 通过历史维持状态的系统 |
| **Orchestration** | 多个 Agent 的协调 |

---

## 下一步

- 📖 理解了架构后，看 工具调用深度解析（待创建）
- 🛠️ 想实现 Agent，看 [Skill 设计](../ai-application/skills-business-landscape.md)
- 🔄 想设计复杂流程，看 工作流模式（待创建）

---

**最后更新**: August 4, 2026  
**相关**:
- 工具选择机制（待创建）
- 状态管理（待创建）
- 工作流模式（待创建）
- [Agent 时代的系统架构转变](agent-era-work.md)
- [Domain Expertise 与组织变革](../career-impact/domain-expertise-and-org-design.md)
- [Coding Agent 与 Agent 基础设施](../career-impact/agent-infrastructure-os.md)
- [Prompt 工程完全指南](prompt-engineering-guide.md) —— System Prompt、工具调用背后怎么把话说清楚，这篇讲
- [Multimodal 完全指南](multimodal-guide.md) —— "感知环境"这一半，Multimodal 补的是这个
