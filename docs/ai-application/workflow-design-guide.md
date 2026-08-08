# 工作流设计完全指南

**核心概念**: 工作流是一系列任务的有序组合，可以包含**并行、分支、循环、人工干预**。一个好的工作流能让多个 Agent 协调工作，完成复杂目标。

**学习来源**: 设计"Belinda 的学习 Wiki 增量系统"时的实战反思。

📖 **完整学习对话记录**：[Workflow](../conversations/workflow.md)

---

## 目录

1. [基本概念](#基本概念)
2. [节点类型](#节点类型)
3. [关键设计模式](#关键设计模式)
4. [YAML 规范](#yaml-规范)
5. [实战例子](#实战例子)

---

## 基本概念

### 什么是工作流？

**定义**: 一个结构化的任务执行计划，定义了:
- **任务是什么** (What)
- **执行顺序** (When)
- **任务之间的依赖** (How they relate)
- **条件分支** (If-then logic)
- **人工介入点** (Where humans say yes/no)

### 为什么需要工作流？

**不用工作流**:
```
用户的大脑 → 手动执行任务 A → 等等 → 手动执行任务 B → ...
时间: 1 小时
效率: 低
```

**用工作流**:
```
用户说: "执行这个工作流"
  ↓
任务 A、B、C 并行进行
  ↓
自动检查质量
  ↓
用户只在关键点审核
时间: 20 分钟
效率: 高
```

### 工作流 vs Agent

| 特性 | Agent | 工作流 |
|------|-------|--------|
| 适用场景 | 单个复杂任务 | 多个任务的组合 |
| 谁决策 | Agent 自己 | 工作流预定义 |
| 灵活性 | 高（可以随机应变） | 中等（按规则执行）|
| 可复用性 | 低 | 高 |
| 示例 | "分析这个数据" | "每天自动生成 Wiki" |

---

## 节点类型

### 1. Sequential Node（顺序节点）

**定义**: 一个接一个执行任务。任务 B 必须等任务 A 完成。

```yaml
workflow:
  - step_id: step_1
    type: sequential
    agent: AgentA
    # 这一步完成后，才会进入下一步
  
  - step_id: step_2
    type: sequential
    depends_on: step_1
    agent: AgentB
```

**何时用**: 
- 任务有强依赖关系
- 后面的任务需要前面的输出
- 例: 读文件 → 分析 → 生成报告

**性能**: 慢（总时间 = 所有任务时间之和）

### 2. Parallel Node（并行节点）

**定义**: 多个任务同时进行，等所有完成后再继续。

```yaml
- step_id: fetch_data
  type: parallel
  agents:
    - agent: FetcherA  # 同时开始
    - agent: FetcherB  # 同时开始
    - agent: FetcherC  # 同时开始
  timeout: 300  # 最多等 5 分钟
  on_failure: skip  # 某个失败，继续
```

**何时用**:
- 任务之间没有依赖
- 想加快速度
- 例: 从 3 个数据源同时抓数据

**性能**: 快（总时间 = 最长的那个任务的时间）

**实战效果**:
```
串联: 100s + 100s + 100s = 300s
并行: max(100s, 100s, 100s) = 100s
加速: 3 倍！
```

### 3. Conditional Node（条件节点）

**定义**: 根据条件，选择不同的执行路径。

```yaml
- step_id: check_quality
  type: conditional
  condition: "output.score > 70"
  
  then:
    # 如果成立
    - step_id: publish
      agent: Publisher
  
  else:
    # 如果不成立
    - step_id: improve
      agent: Improver
```

**何时用**:
- 有多个可能的路径
- 需要基于中间结果做决策
- 例: 分数高就发布，分数低就返工

**条件语法**:
```yaml
condition: "output.score > 70"
condition: "data.type == 'urgent'"
condition: "count(errors) == 0"
condition: "and(score > 70, no_errors)"
```

### 4. Human Approval Node（人工审核节点）

**定义**: 暂停工作流，等待人的决策。

```yaml
- step_id: human_review
  type: human_approval
  timeout: 3600  # 1 小时内必须审核
  
  message: |
    请查看生成的报告:
    [预览内容]
    
    是否发布？
  
  options:
    - approve: "✅ 发布"
    - reject: "❌ 改进"
    - edit: "✏️ 编辑后发布"
  
  on_approve:
    - step: publish
  
  on_reject:
    - step: improve_agent
  
  on_edit:
    - step: handle_feedback
    - loop_back_to: human_review  # 返回审核
```

**何时用**:
- 结果需要人工验证
- 需要收集人的意见
- 高风险决策
- 例: 发布前的最终确认

**等待超时**:
- 如果 1 小时没人审核，自动转入 `on_timeout` 分支

### 5. Loop Node（循环节点）

**定义**: 重复执行某些步骤，直到条件满足。

```yaml
- step_id: improve_loop
  type: loop
  
  do:
    - agent: Improver
      action: "improve based on feedback"
  
  until: "quality_score > 80"
  max_iterations: 5  # 防止无限循环
```

**何时用**:
- 需要多轮迭代
- 有反馈循环
- 例: 改进报告 → 审核 → 如果不好，再改进

**防护**:
- 必须设置 `max_iterations`，防止无限循环
- 必须有明确的终止条件

### 6. Error Handler Node（错误处理）

**定义**: 当某个步骤失败时的应对方式。

```yaml
- step_id: fetch_data
  type: parallel
  agents:
    - agent: FetcherA
  
  error_handling:
    retry: 3  # 失败后重试 3 次
    backoff: exponential  # 指数退避
    fallback: use_cached_data  # 最终用缓存
    notify: admin@example.com  # 通知管理员
```

---

## 关键设计模式

### 模式 1: Fan-out → Fan-in

**场景**: 一个任务分成多个并行子任务，然后合并结果。

```
        ┌─→ Task A ─┐
        │           │
Start ──┼─→ Task B ─┼→ Merge → End
        │           │
        └─→ Task C ─┘
```

**YAML**:
```yaml
- step: fan_out
  type: parallel
  agents: [AgentA, AgentB, AgentC]

- step: merge
  type: sequential
  depends_on: fan_out
  agent: Merger
```

**用途**: 数据收集、多源分析、并行处理

### 模式 2: 质量检查循环

**场景**: 生成 → 检查 → 如果不好就改进 → 再检查

```
┌─ Generate ─┐
│            ↓
│         Check Quality
│            │
│        High ✓ / Low ✗
│            │
└─← Improve ←┘
```

**YAML**:
```yaml
- step: generate
  agent: Generator

- step: check
  agent: QualityChecker
  output: quality_score

- step: decide
  type: conditional
  condition: "quality_score > 80"
  
  then:
    - publish
  
  else:
    - improve  # 返回生成
    - loop_back_to: check
```

### 模式 3: 人工瓶颈

**场景**: 大多数自动，但关键点需要人确认。

```
Fetch Data → Process → Generate → Human Review → Publish
(自动)      (自动)    (自动)      (需要人)      (自动)
```

**设计原则**:
- ✅ 自动化非关键步骤
- ✅ 在高风险点设置人工审核
- ✅ 提供清晰的审核信息

---

## YAML 规范

### 完整的工作流 YAML 结构

```yaml
name: WorkflowName
version: 1.0
description: 这个工作流做什么

# 可选：定义变量
variables:
  min_quality_score: 70
  max_retries: 3

# 可选：定义工作流的输入
input:
  format: |
    Define what input this workflow expects

# 主要的工作流定义
workflow:
  - step_id: unique_step_name
    type: sequential|parallel|conditional|human_approval|loop
    
    # Sequential 特有
    depends_on: previous_step_id
    agent: AgentName
    params:
      param1: value1
    
    # Parallel 特有
    agents:
      - agent: Agent1
      - agent: Agent2
    timeout: 300
    on_failure: skip|fail|retry
    
    # Conditional 特有
    condition: "output.score > 70"
    then:
      - step: next_step_if_true
    else:
      - step: next_step_if_false
    
    # Human Approval 特有
    message: "请审核..."
    timeout: 3600
    on_approve: [publish]
    on_reject: [improve]
    on_timeout: [notify_admin]
    
    # Loop 特有
    do:
      - agent: Improver
    until: "condition"
    max_iterations: 5
    
    # 所有步骤可用
    output:
      format: json|markdown|text
      store: memory|file
      filename: "output.md"

# 错误处理（全局）
error_handling:
  default_retry: 3
  default_backoff: exponential
  notify_on_failure: admin@example.com

# 监控和日志
monitoring:
  log_level: info|debug|warning|error
  track_metrics:
    - step_duration
    - success_rate
    - tool_usage
```

### 最小化示例

```yaml
name: SimpleWorkflow
version: 1.0

workflow:
  - step_id: do_something
    type: sequential
    agent: MyAgent
    params:
      input: "user request"
```

---

## 实战例子

### 例 1: 日报生成工作流（简化）

```yaml
name: DailyBriefGenerator
version: 1.0
description: 每天自动生成学习 Wiki 的日报

trigger: manual  # 你手动触发

workflow:
  # 步骤 1: 并行抓取数据
  - step_id: fetch_content
    type: parallel
    timeout: 300
    on_failure: skip
    agents:
      - agent: ArxivFetcher
        params:
          query: "AI, LLM, Agent"
          limit: 50
      - agent: NewsFeeder
        params:
          sources: ["TechCrunch", "MIT News"]
      - agent: TwitterTrends
        params:
          hashtags: ["#AI", "#LLM"]
  
  # 步骤 2: 分类
  - step_id: classify
    type: sequential
    depends_on: fetch_content
    agent: ContentClassifier
    params:
      categories: ["Research", "Industry", "Policy"]
  
  # 步骤 3: 生成
  - step_id: generate_report
    type: sequential
    depends_on: classify
    agent: ReportWriter
    params:
      format: markdown
  
  # 步骤 4: 质量检查
  - step_id: quality_check
    type: sequential
    depends_on: generate_report
    agent: QualityChecker
    output: quality_score
  
  # 步骤 5: 决策
  - step_id: decide
    type: conditional
    condition: "output.quality_score > 70"
    
    then:
      - step_id: human_review
        type: human_approval
        message: "报告已生成，是否发布？"
        timeout: 1800
        on_approve:
          - step_id: publish
            agent: Publisher
        on_reject:
          - step_id: archive_draft
            note: "已存档待改进版本"
    
    else:
      - step_id: notify_improvement_needed
        note: "质量分数太低，需要改进"
```

### 例 2: 用户反馈循环

```yaml
- step_id: collect_feedback
  type: human_approval
  timeout: 3600
  message: |
    您的报告已生成：
    
    [报告内容预览]
    
    请选择:
    ✅ 发布
    ❌ 不发
    ✏️ 给我反馈让我改进
  
  on_approve:
    - step: final_publish
  
  on_reject:
    - step: archive
  
  on_edit:
    - step: collect_specific_feedback
      type: human_input
      prompt: "请告诉我怎样改进？"
      output: user_feedback
    
    - step: improve_based_on_feedback
      agent: Improver
      params:
        original: previous_report
        feedback: user_feedback
    
    - step: generate_improved_version
      agent: ReportWriter
    
    - loop_back_to: collect_feedback  # 重新审核
```

---

## 最佳实践

### ✅ 设计好的工作流

```yaml
# 1. 清晰的名字
step_id: fetch_data_from_sources  # ✅ 清楚
step_id: step1                     # ❌ 模糊

# 2. 明确的条件
condition: "output.score > 70"  # ✅ 清楚
condition: "result is good"     # ❌ 模糊

# 3. 合理的超时
timeout: 300  # ✅ 5 分钟（数据抓取）
timeout: 86400  # ❌ 24 小时（太长）

# 4. 有备选方案
on_failure: retry  # ✅ 失败重试
on_failure: fail   # ❌ 直接失败

# 5. 人工在关键点
type: human_approval  # ✅ 在发布前
type: human_approval  # ❌ 在每一步
```

### ❌ 常见错误

| 错误 | 后果 | 改进 |
|------|------|------|
| 工作流太长 | 难以维护 | 拆成多个小工作流 |
| 没有超时 | 可能永久卡住 | 总是设置 timeout |
| 没有错误处理 | 失败导致全部停止 | 用 retry、fallback |
| 人工干预太多 | 失去自动化的意义 | 只在关键点审核 |
| 条件太复杂 | 难以理解和调试 | 简化条件逻辑 |

---

## 下一步

- 🎯 想看实战配置，查看 Daily Wiki 工作流完整配置（待创建）
- 🔧 想调试工作流，看 工作流调试指南（待创建）
- 📊 想监控工作流，看 监控和日志（待创建）

---

**最后更新**: August 4, 2026  
**相关**:
- [Agent 架构](../ai-core/agent-architecture.md)
- [Skill 设计](skills-business-landscape.md)
- 错误处理（待创建）
- [心智模型变迁史：Prompt → Workflow](../../mental-models.md)
