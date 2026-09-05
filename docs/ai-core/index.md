# AI Core · 智能系统地图

**核心概念**: Computing Foundations 解释 AI 跑在什么上面；AI Core 接着回答另一组问题：模型为什么能生成答案，怎样从“会说话”变成“会做事”的 Agent，又怎样让这个系统记得住、协作得起来、跑得够快，同时不越界。三步走：先抓住模型与 Agent 两个支点（Start），再看清智能系统的四块结构（Orient），最后带着具体问题往下深挖（Go Deeper）。

---

## 🚀 Start · 两个支点，按顺序建立骨架

### 01 — Inference

**它为什么能回答？· 先看“脑”在做什么**

大语言模型不是从资料库里把答案捞出来。它让输入流过一张由权重构成的网络，一次预测一个 Token，答案就这样逐步生成。先理解这件事，后面的 Prompt、Context、Transformer 和 Training 才不会变成一堆悬空术语。

→ [Inference 推理系统完全指南](inference-system-guide.md)

### 02 — Agent Architecture

**它怎样从回答走向行动？· 再看“系统”怎样接住这个脑**

模型只能生成输出；Agent 还要感知环境、保存状态、调用工具、执行动作，并根据结果继续下一步。会想不等于会做——给大脑接上手、记事本和门禁卡，才开始像一个能工作的系统。

→ [Agent 系统架构](agent-architecture.md)

---

## 🧭 Orient · 用四个问题看清整个系统

走完 Start，你已经有两个支点：**Model 负责生成，Agent 负责把生成放进“感知 → 决策 → 行动 → 反馈”的循环。** 现在把其他概念放回它们该在的位置：

### 1. 它是怎么学会的？

训练让一堆随机权重逐渐学会语言，再通过微调和人类反馈变得更像一个可用的助手。

→ [Training 训练系统完全指南](training-system-guide.md)

### 2. 它回答时，内部发生了什么？

Transformer 处理 Token 之间的关系，Context 决定这一次它能看见什么，Prompt 则是你主动放进 Context、用来减少猜测空间的那一部分。

→ [Transformer 架构](transformer-architecture.md) · [Context Window](context-window-guide.md) · [Prompt 工程](prompt-engineering-guide.md)

### 3. 它怎样看见、记住并影响外部世界？

多模态给它眼睛和耳朵，Memory 把信息带到未来，Tools / Workflow / Computer Use 让它不只输出文字，还能把任务推进下去。

→ [Multimodal 多模态](multimodal-guide.md) · [Memory 系统](memory-system-guide.md) · [Workflow 编排](workflow-orchestration.md) · [Computer Use](computer-use.md)

### 4. 能力变强以后，怎样不跑偏？

Safety / Alignment 处理“系统会不会造成伤害、目标是否仍符合人的真实意图”；Monitoring 和 Containment 则承认光靠“相信它会听话”不够，还要能看见、能限制、能止损。

→ [AI Safety / Alignment](safety-alignment-guide.md) · [AI Safety 的三层防护框架](safety-three-layer-framework.md)

> 一个有用但不完整的近似：可以先把 **Model** 想成大脑，把 **Memory** 想成记事本，把 **Tools** 想成手，把 **Permissions** 想成门禁卡。这个比喻适合建立方向感；真实系统里，推理、状态、调度和权限会跨越多层，Go Deeper 会逐步把这张简图升级掉。

## 🔬 Go Deeper · 带着问题往下走

### 想搞懂“模型为什么这样回答”

- [Transformer 架构](transformer-architecture.md) —— Attention、FFN、残差连接怎样共同处理信息
- [Context Window](context-window-guide.md) —— 模型这一次究竟看见了什么，为什么会“忘”
- [Prompt 工程](prompt-engineering-guide.md) —— 为什么说清背景、约束和格式真的有效
- [Embeddings](embeddings-guide.md) —— 怎样把“意思相近”变成可以计算的距离
- [Multimodal 多模态](multimodal-guide.md) —— 当输入不只有文字，感知发生了什么变化

### 想搞懂“Agent 为什么有时聪明，却做不成事”

- [Model 能力 ≠ Agent 能力](model-vs-agent-capability.md) —— 有脑不等于有手；Tools、Runtime、Permissions 和 Environment 都可能成为瓶颈
- [Memory 系统](memory-system-guide.md) —— 当下、近期、长期的信息该怎样分工
- [Workflow 编排](workflow-orchestration.md) —— 复杂任务怎样拆步、并行和协调
- [Computer Use](computer-use.md) —— 没有 API 时，AI 怎样通过 GUI 使用软件
- [推理基础设施与 Agent 延迟](inference-infrastructure-and-agent-latency.md) —— 为什么“感觉像实时”也受算力与内存带宽支配

### 想搞懂“Agent 的智能到底来自哪里”

- [Agent Intelligence 三层框架](agent-intelligence-layers.md) —— Model、Memory、Delegation 怎样共同决定系统表现
- [Agent 的“单轴刻度”问题](agent-single-axis-problem.md) —— 为什么自主性、委托和记忆都不能只用一根尺子衡量
- [Agent 时代的系统架构转变](agent-era-work.md) —— 当软件开始同时写给人和 Agent，系统为什么需要重新设计

### 想搞懂”怎样让更强的系统仍然可控”

- [AI Safety / Alignment](safety-alignment-guide.md) —— Safety 和 Alignment 分别在解决什么问题
- [AI Safety 的三层防护框架](safety-three-layer-framework.md) —— Monitoring、Alignment、Containment 为什么缺一不可
- [Agent 集体行为：从 DseWiki 事件到治理框架](agent-collective-behavior.md) —— 多 Agent 不需要意识就能涌现集体行为；五层纵深防御从权限最小化到生态级审计

---

## 📖 完整学习对话记录

正式指南负责给出最短理解路径；下面保留原始对话，适合想看问题怎样一步步长出来的读者：

- [多模态（Multimodal）](../conversations/multimodal.md) —— 正式版见 [Multimodal 完全指南](multimodal-guide.md)
- [Agent Intelligence](../conversations/agent-intelligence.md) —— 正式版见 [Agent Intelligence 三层框架](agent-intelligence-layers.md)
- [Safety 三层防护](../conversations/safety-three-layer-framework.md) —— 正式版见 [AI Safety 的三层防护框架](safety-three-layer-framework.md)
- [Agent 集体行为](../conversations/agent-collective-behavior.md) —— 正式版见 [Agent 集体行为：从 DseWiki 事件到治理框架](agent-collective-behavior.md)

---

**最后更新**: August 30, 2026

**相关**:
- [Computing Foundations · 计算机基础地图](../computing-foundations/index.md) —— AI Core 踩着的物理与计算地基
- [Start Here · AI 最小地图](../../start-here.md) —— 完全没有 AI 背景时，从这里先建立 30–45 分钟的全局方向感
- [AI in Practice](../ai-application/index.md) —— 当你想把这些机制用进真实产品与工作流，下一块领土在这里
