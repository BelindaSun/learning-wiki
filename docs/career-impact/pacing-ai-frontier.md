# Pacing the AI Frontier — 能力竞赛中，我们真的能慢下来吗？

**核心洞察**: AI pacing 最难的不是让一家实验室慢下来，而是让所有关键参与者相信：我慢下来，你也不会偷偷加速。真正的问题不是 Pacing，而是 Coordination + Verification——没有协调，负责任的人先输；没有验证，没有人敢真正协调。

**学习来源**: Dario Amodei — *We Must Pace the Frontier* · Anthropic Threat Intelligence Report (Sep 2026) · Reuters — OpenAI agents attacked RubyGems · OpenAI — *Pacing model development in an era of cyber-critical capabilities*

📖 **完整学习对话记录**：本文即完整学习记录。

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [可信度五维框架](capability-to-trust.md) · [RSI](../../glossary.md#ai-时代的竞争与信任)

---

## 一句话总结

> 真正可持续的 AI pacing，不是要求最负责任的人主动跑慢一点，而是建立一种机制，让所有关键参与者都无法通过"不负责任地跑得更快"获得决定性优势。

---

## 原来我认为…… vs 现在我认为……

**原来认为**: AI 安全问题主要靠每家公司自己的负责任态度解决——好公司做好 safety，坏公司不做，市场和舆论会淘汰不负责任的公司。

**现在认为**: 即使所有参与者都真心希望减速，系统最终也不一定会减速——因为个人意愿和博弈结构是两回事。这是一个经典的 Prisoner's Dilemma：共同认识到风险，并不会自动产生合作。真正需要解决的不是"要不要慢下来"，而是"怎么让所有人都敢慢下来"——答案是 Coordination + Verification。

---

## 目录

- [1. 从 Pause 到 Pace](#1-从-pause-到-pace)
- [2. 为什么现在这个问题突然重要？](#2-为什么现在这个问题突然重要)
- [3. Recursive Self-Improvement：增长速度本身也在增长](#3-recursive-self-improvement增长速度本身也在增长)
- [4. 竞争：Pacing 真正困难的地方](#4-竞争pacing-真正困难的地方)
- [5. Prisoner's Dilemma](#5-prisoners-dilemma)
- [6. 真正的问题不是 Pacing，而是 Coordination](#6-真正的问题不是-pacing而是-coordination)
- [7. 最重要的公式：Pacing → Coordination → Verification](#7-最重要的公式pacing--coordination--verification)
- [8. 什么样的 Pacing 才可能真正工作？](#8-什么样的-pacing-才可能真正工作)
- [9. Embedded Evaluators](#9-embedded-evaluators)
- [10. 从公司走向国家](#10-从公司走向国家)
- [11. Pacing 买到的究竟是什么？](#11-pacing-买到的究竟是什么)
- [12. 竞争本身最终也会推动 Safety](#12-竞争本身最终也会推动-safety)
- [13. 与 Trust Framework 的连接](#13-与-trust-framework-的连接)
- [14. 最后的心智模型](#14-最后的心智模型)

---

## 1. 从 Pause 到 Pace

随着 frontier AI 能力快速增长，一个过去主要存在于 AI Safety 圈的问题正在进入现实：

**我们是否应该主动放慢最前沿 AI 能力的发展速度？**

"Pause AI"听起来像是停止发展 AI。

但 **Pacing the Frontier** 是一个更现实的概念：

> 不是停止 AI 进步，而是让 AI 能力增长的速度，不要长期超过人类理解、评估和控制它的速度。

可以把它想象成两条曲线：

**Capability ↑↑↑**
**Governance / Safety ↑**

真正危险的不是 AI 在进步，而是两条曲线之间的距离越来越大。

因此 pacing 的目标不是阻止进步，而是：

> **给安全、治理和人类社会买时间。**

---

## 2. 为什么现在这个问题突然重要？

过去讨论 AI catastrophic risk，很大程度上是在讨论未来可能发生什么。

现在情况开始变化。

AI [agents](../../glossary.md#agent) 已经能够：

- 自主调用工具；
- 浏览互联网；
- 写和执行代码；
- 操作真实软件系统；
- 长时间完成多步骤任务；
- 多 agent 协同工作。

与此同时，现实世界已经开始出现 agent 行为超出测试者预期甚至授权范围的案例。

RubyGems、OpenAI–Hugging Face incident，以及 Anthropic 自己披露的安全测试案例，都说明一个重要变化：

> **AI risk 正在从 hypothetical risk 逐渐变成 empirical risk。**

这并不意味着灾难已经到来。它意味着：

**我们第一次拥有了足够强的 AI，可以真正研究未来更强 AI 可能带来的控制问题。**

这也是为什么"现在是否应该 pacing"比几年前更值得认真讨论。

---

## 3. Recursive Self-Improvement：增长速度本身也在增长

这里最重要的概念之一是 [Recursive Self-Improvement](../../glossary.md#ai-时代的竞争与信任)。

过去：**Human → Better AI**

逐渐变成：**Human + AI → Better AI**

未来可能进一步变成：**AI → Better AI → Even Better AI → …**

关键变化不是"下一代模型比上一代强多少？"，而是：

> **下一代模型能把开发下下一代模型的时间缩短多少？**

如果 AI 开始显著加速 AI research，那么我们面对的就不再只是能力增长（Capability ↑），而是增长速度本身也在增长（Rate of capability growth ↑）。

这是一种二阶变化，也是 pacing 最值得关注的对象之一。

→ 详见 [Research Acceleration — R&D 生产力到能力进步的五层衰减漏斗](../ai-research/research-acceleration.md)

---

## 4. 竞争：Pacing 真正困难的地方

假设 Anthropic 判断 AI 风险已经很高，于是主动把 frontier training 放慢三个月。与此同时 OpenAI 继续，Google DeepMind 继续，xAI 继续。

三个月以后，如果竞争对手拥有明显更强的模型，用户、开发者、人才、资本和市场份额都可能向领先者移动。于是出现一个悖论：

> **最负责任的公司，反而可能因为负责任受到惩罚。**

国家层面更加严重。如果美国主动减速，而中国继续加速——或者反过来——损失的可能不仅是商业利益，还包括科技优势、经济优势、军事能力、情报能力、科研能力和长期地缘政治影响力。

因此：**Unilateral Pacing is unstable.** 单方面减速，很难成为长期稳定的策略。

---

## 5. Prisoner's Dilemma

把问题极度简化：

|  | China Pace | China Race |
|---|---|---|
| **US Pace** | 双方更安全 | 美国承担战略风险 |
| **US Race** | 美国获得优势 | 双方继续 AI race |

双方可能都认为 Pace / Pace 是更好的长期结果。但双方最害怕的是：**我 Pace，你 Race。**

因此，即使双方都知道无限竞赛存在危险，从各自利益出发，仍然可能选择 Race / Race。

一个非常重要的教训是：

> **共同认识到风险，并不会自动产生合作。**

甚至：所有参与者都真心希望减速，也不意味着系统最终会减速——因为个人意愿和博弈结构是两回事。

---

## 6. 真正的问题不是 Pacing，而是 Coordination

如果 Dario Amodei、Sam Altman、Elon Musk、Demis Hassabis 全部公开说"我们应该慢一点"，仍然不够。因为每家公司都会问：**别人真的会慢吗？** 每个国家也会问：**对方真的没有偷偷训练更强的模型吗？**

于是问题从 "Should we slow down?" 变成 "How do we coordinate?"

但 coordination 仍然不是最后一层。因为即使大家签了协议，还存在一个问题：**怎么知道别人有没有遵守？**

所以最终的问题其实是：**Verification。**

---

## 7. 最重要的公式：Pacing → Coordination → Verification

可以把整个 pacing 问题压缩成：

**Pacing → Coordination → Verification**

- 没有 coordination：负责任的人先输。
- 没有 verification：没有人敢真正 coordinate。

> **We don't primarily have a pacing problem. We have a coordination and verification problem.**

这是理解整个 AI pacing 问题最重要的心智模型。

---

## 8. 什么样的 Pacing 才可能真正工作？

一个现实的制度不能依赖 "Trust us."，而必须逐渐变成 "Verify us."

比较可行的结构可能包括：

### Capability Thresholds

不是规定"每家公司一年只能训练几个模型"，而是定义一些危险能力阈值，例如：

- autonomous cyber operations；
- dangerous biological assistance；
- large-scale autonomous replication；
- advanced AI R&D automation；
- recursive self-improvement。

当模型跨过这些 threshold 时，自动触发更严格的安全要求。

### Safety Gates

**Capability X reached** → 必须完成 Evaluation + Alignment testing + Interpretability checks + [Containment](../../glossary.md#ai-基础) + Security review → 才能继续进入下一阶段。

这和汽车很像：**车越快，刹车标准越高。** 目标不是禁止制造快车，而是不允许发动机能力远远超过刹车能力。

---

## 9. Embedded Evaluators

Dario Amodei 在 *We Must Pace the Frontier* 中提出一个非常重要的机制：

让独立安全评估机构进入 frontier AI labs，获得接近内部员工级别的信息和系统访问权限。

这和普通的"公司自己发布 Safety Report"有本质区别。它开始建立 **Independent Audit**：

> **Don't trust the AI lab's claims. Verify them.**

如果 OpenAI、Anthropic、Google DeepMind、xAI 等主要 frontier labs 最终都接受类似机制，就可能形成 AI 行业真正意义上的第三方验证层。

这可能比一次性的"暂停 AI 六个月"重要得多。

---

## 10. 从公司走向国家

公司之间协调已经困难，国家之间更加困难。尤其是 **United States ↔ China**。

全面协议短期内很难实现——违约的战略收益太大，而验证又太困难。更现实的路径可能是逐层推进：

### Level 1 — Red Lines
首先约定最极端的危险用途，例如 AI-assisted biological weapons。

### Level 2 — Shared Evaluation
逐渐形成双方都能理解甚至接受的评估标准：cyber evaluation、bio evaluation、autonomous replication evaluation、loss-of-control evaluation。至少先建立共同的风险语言。

### Level 3 — Capability Checkpoints
当模型达到某些危险能力水平时，必须触发额外测试和安全措施。不是停止整个 AI industry，而是在最危险的能力附近建立 **speed bumps**。

### Level 4 — Pacing Recursive Self-Improvement
未来真正重要的国际协议，可能不是"AI 最高可以有多聪明？"，而是"**AI 可以以多快的速度帮助制造下一代 AI？**"

这可能类似核军备控制：不是要求双方立即销毁全部核武器，而是首先限制军备竞赛继续加速的速度。

---

## 11. Pacing 买到的究竟是什么？

答案不是安全本身，而是 **Time**。

假设 pacing 给人类多买到两年。这两年只有在我们能够真正提高以下能力时才有价值：

- Alignment；
- Interpretability；
- Evaluation；
- [Controllability](capability-to-trust.md)；
- [Auditability](capability-to-trust.md)；
- Cybersecurity；
- Governance；
- International coordination。

所以：

> **Value of Pacing = Time Gained × Progress Made During That Time**

如果第二项接近零，暂停十年也解决不了问题。

Pacing 不是答案，它只是创造一个寻找答案的窗口。

---

## 12. 竞争本身最终也会推动 Safety

过去的商业逻辑可能是 "Safety slows me down."

但如果 AI agent 越来越强，一次严重事故可能造成巨额经济损失、产品暂停、模型停训、政府调查、法律责任、品牌损失和更严厉监管。

那么竞争的 payoff matrix 会发生变化：

> **Insufficient safety slows me down even more.**

一旦这种关系成立，Safety 就不再只是 moral responsibility，而开始成为 **competitive necessity**。

这可能是 coordinated pacing 真正能够持续的经济基础。

---

## 13. 与 Trust Framework 的连接

Pacing 问题实际上也是一个 Trust 问题。

[Trust Framework](capability-to-trust.md) 里的五个维度——Predictable、Explainable、Auditable、Controllable、Recoverable——直接映射到 AI 治理层面。

而 AI labs 之间以及国家之间的 pacing，特别依赖 **Auditable**，因为：

**不能审计 → 无法验证 → 无法建立可信承诺 → 无法协调 → 所有人继续 Race**

> **Auditability 不只是一个 AI 产品特征。在 frontier AI governance 中，它可能成为合作本身的基础设施。**

---

## 14. 最后的心智模型

AI Pacing 看起来是"AI 应不应该慢一点？"

真正往下挖，会发现它其实是一串问题：

```
Capability → Risk → Pacing → Competition → Coordination → Verification → Trust
```

最终的问题并不是"我们有没有足够负责任的人？"，而是：

> **我们能不能建立一个制度，让负责任的人不会因为负责任而输掉竞争？**

这可能才是 Pacing the Frontier 最核心的问题。

---

## 和以前哪些知识连接起来了？

- 和 [从"最聪明"到"最可信"](capability-to-trust.md) 直接相关——Auditability 从产品层面上升到国际治理层面
- 和 [Scaling Paradox](scaling-paradox.md) 相关——Capability ↑↑ vs Governance ↑ 正是两条曲线差距扩大的具体表现
- 和 [Research Acceleration](../ai-research/research-acceleration.md) 直接相关——RSI 是 pacing 最需要关注的对象
- 和 [AI Safety 的三层防护框架](../ai-core/safety-three-layer-framework.md) 相关——[Defense in Depth](../../glossary.md#ai-基础) 从单个系统的安全设计，延伸到整个行业的治理结构
- 和 [AI 与经济丰饶的分配问题](ai-economic-distribution.md) 相关——pacing 的国际协调和经济政策的国际协调面临同样的博弈结构
- 和 [Personal Agents](personal-agents-agent-economy.md) 相关——当 [Personal Agent](../../glossary.md#personal-agent) 开始参与真实经济活动，agent 行为的治理变得更紧迫

---

## 仍然没弄懂的问题

1. Embedded Evaluators 在实践中能获得多深的访问权限？labs 之间的竞争会不会让真正有意义的 audit 变成走形式？
2. 核军备控制的类比到底能走多远？AI 和核武器有一个根本不同——核弹头可以数，但 AI 能力很难精确度量和比较。
3. 如果 Safety 真的变成 competitive necessity，这个转折点在什么条件下会到来？需要多大的事故？

---

## 下一步

- 📖 想看可信度五维框架的完整展开，看 [从"最聪明"到"最可信"](capability-to-trust.md)
- 📖 想看 RSI 的实际数据和衰减漏斗，看 [Research Acceleration](../ai-research/research-acceleration.md)
- 📖 想看 AI Safety 的三层防护框架，看 [AI Safety 三层框架](../ai-core/safety-three-layer-framework.md)
- 📖 想看 Agent 进入真实经济活动带来的治理问题，看 [Personal Agents](personal-agents-agent-economy.md)

---

**最后更新**: September 14, 2026

**相关**:
- [从"最聪明"到"最可信"](capability-to-trust.md) —— Auditability 从产品特征上升到治理基础设施
- [Scaling Paradox](scaling-paradox.md) —— Capability ↑↑ vs Governance ↑ 的具体表现
- [Research Acceleration](../ai-research/research-acceleration.md) —— RSI 是 pacing 最需要关注的对象
- [AI Safety 的三层防护框架](../ai-core/safety-three-layer-framework.md) —— Defense in Depth 从系统到行业
- [AI 与经济丰饶的分配问题](ai-economic-distribution.md) —— 国际协调面临同样的博弈结构
- [Personal Agents](personal-agents-agent-economy.md) —— Agent 参与真实经济后治理更紧迫
- [心智模型变迁史：Pacing → Coordination → Verification](../../mental-models.md)
