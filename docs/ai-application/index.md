# AI in Practice · AI 系统实践地图

**核心概念**: AI Core 解释模型和 Agent 为什么能工作；AI in Practice 继续追问：怎样把这些能力接进真实任务，让系统拿得到正确资料、用得了外部工具、跑得完多步流程，而且做完之后能证明自己真的做成了。三步走：先学会给 Agent 设边界、给任务画流程（Start），再把知识、连接、方法和验证放回系统中的正确位置（Orient），最后带着实际瓶颈深挖（Go Deeper）。

---

## 🚀 Start · 先把“能做什么”和“怎么做”说清楚

### 01 — Harness

**它能在哪里工作？· 先搭工作环境和护栏**

Agent 不会因为模型够聪明就自动拥有工具、文件权限和预算。Harness 决定它能碰什么、能花多少、什么时候必须停下来问人——像入职第一天拿到的工具箱、工位规则和门禁权限。

→ [Harness 系统——给 Claude Code 定义边界](harness-system.md)

### 02 — Workflow Design

**复杂目标怎样变成可执行步骤？· 再画工作路线**

真实任务很少一步完成。Workflow 把目标拆成顺序、并行、分支、循环和人工介入点，让“帮我完成这件事”从一句愿望变成一条能运行、能检查的路径。

→ [工作流设计完全指南](workflow-design-guide.md)

---

## 🧭 Orient · 一个可用的 AI 系统需要四样东西

走完 Start，你已经有了 **运行边界（Harness）** 和 **任务结构（Workflow）**。但 Agent 要真正进入工作，还会遇到四个问题：

### 1. 它怎样拿到模型之外的知识？

模型的训练知识会过期，Context 又装不下所有资料。RAG 先从外部知识库里找出相关内容，再把真正需要的部分交给模型。

→ [RAG 完全指南](rag-guide.md)

### 2. 它怎样连接外部工具和数据？

MCP 提供统一的连接协议，让 Agent 能发现并调用外部能力；但“能调用”不等于“可以随便调用”，读、写和高风险动作需要不同的控制方式。

→ [MCP 统一协议指南](mcp-protocol-guide.md)

### 3. 它怎样复用一套做事方法？

Skill 把领域知识、步骤和判断标准组织成 Agent 可重复使用的方法。它不是新工具，而是告诉 Agent 何时、为何、怎样使用已有能力。

→ [Skills 和商业格局](skills-business-landscape.md)

### 4. 它怎样证明工作真的完成了？

执行者说“好了”只是一项声明，不是现实本身。可靠 Harness 要把执行与验证分开，用外部证据确认结果，并保留状态、来源和失败边界。

→ [Harness > Model — Agent 可靠性的真正杠杆](harness-architecture-patterns.md)

> 一个有用但不完整的近似：可以先把 **Workflow** 想成路线图、**Skill** 想成操作手册、**MCP** 想成通用插座、**Harness** 想成工作环境。真实系统里它们会互相重叠：Workflow 会规定工具调用，Skill 会携带验证标准，Harness 也会管理状态。先分开看清职责，再在具体架构里把它们接起来。

## 🔬 Go Deeper · 先找出你的系统卡在哪里

### “模型不知道我的最新资料”

- [RAG 完全指南](rag-guide.md) —— 为什么需要检索、Embedding 怎样找到相关内容、RAG 在哪里会失效
- [Context Window 完全指南](../ai-core/context-window-guide.md) —— 为什么“把全部资料都塞进去”通常不是答案

### “Agent 知道该做什么，却碰不到外部世界”

- [MCP 统一协议指南](mcp-protocol-guide.md) —— MCP、API、Tool 和 Skill 各自在连接链上负责什么
- [Model 能力 ≠ Agent 能力](../ai-core/model-vs-agent-capability.md) —— Tools、Permissions、Runtime 和 Environment 为什么都可能让能力归零

### “一次能做成，但无法稳定重复”

- [工作流设计完全指南](workflow-design-guide.md) —— 怎样设计分支、循环、并行与人工介入
- [Skills 和商业格局](skills-business-landscape.md) —— 怎样把隐性的做事方法变成可复用能力

### “Demo 很聪明，生产环境却不可靠”

- [Harness 系统](harness-system.md) —— 先明确工具、权限、预算和停止条件
- [Harness > Model](harness-architecture-patterns.md) —— 再升级到执行与审计分离、状态验证和知识治理

---

## 📖 完整学习对话记录

正式指南负责提炼可复用结构；原始对话保留了这些结构怎样从真实问题里长出来：

- [Workflow](../conversations/workflow.md) —— 正式版见 [工作流设计完全指南](workflow-design-guide.md)
- [Harness](../conversations/harness.md) —— 正式版见 [Harness 系统](harness-system.md)
- [Harness > Model](../conversations/harness-gt-model.md) —— 正式版见 [Harness > Model](harness-architecture-patterns.md)

---

**最后更新**: August 30, 2026

**相关**:
- [AI Core · 智能系统地图](../ai-core/index.md) —— Model、Agent、Memory 与 Safety 的概念地基
- [Computing Foundations · 计算机基础地图](../computing-foundations/index.md) —— 系统最终运行其上的软硬件地基
- [Industry & Impact](../career-impact/index.md) —— 当这些系统进入公司与产业，竞争和组织怎样改变
