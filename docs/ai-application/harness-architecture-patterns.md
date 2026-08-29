# Harness > Model — Agent 可靠性的真正杠杆在哪里

**核心概念**: Agent 的实际表现由 model × harness 共同决定，而 2026 年 8 月多方独立研究汇聚到同一个结论——harness（执行架构 + 知识架构 + 状态管理）的杠杆率远大于模型本身。弱模型 + 强 harness 可以超越强模型 + 弱 harness。

**关键洞察**: Agent 可靠性的核心问题不是"它够不够聪明"，而是**谁有权定义"现实现在是什么"**。当 executor 同时负责做事和判断自己做没做成，它不是在检查现实，而是在延续自己的叙事。把"做事的权力"和"定义现实的权力"分开——这是 harness 架构真正的设计原则。

**学习来源**:
- arXiv:2608.01964 LongHorizon-Harness（阿里 DreamX Team）
- TechCrunch: Nvidia AVO + ARC-AGI-3 报道（2026.08.21）
- NVIDIA Developer Blog: SkillEvaluator 基准测试
- arXiv:2608.19701 Multi-Agent Memory Arbitration
- Google DeepMind Blog: From Atari to EVE Online（2026.08.21）

📖 **完整学习对话记录**：[Harness > Model](../conversations/harness-gt-model.md)

**第一次接触这个主题？** 建议先了解：[Harness 系统](harness-system.md) · [Agent](../../glossary.md#agent) · [Model 能力 ≠ Agent 能力](../ai-core/model-vs-agent-capability.md)

---

## 目录

1. [数据：Harness 的杠杆率有多大](#数据harness-的杠杆率有多大)
2. [MEA 循环：Manager-Execute-Audit](#mea-循环manager-execute-audit)
3. [Claimed State vs Verified State](#claimed-state-vs-verified-state)
4. [Harness 的两条腿：执行架构 + 知识架构](#harness-的两条腿执行架构--知识架构)
5. [Skill as Governed Artifact](#skill-as-governed-artifact)
6. [Skill 选择：能力越多，选择越难](#skill-选择能力越多选择越难)
7. [Multi-Agent Memory 的 Provenance 问题](#multi-agent-memory-的-provenance-问题)
8. [四柱模型：Agent 可靠性的完整架构](#四柱模型agent-可靠性的完整架构)

---

## 数据：Harness 的杠杆率有多大

2026 年 8 月，多个独立团队从不同方向得出了同一个结论：

**LongHorizon-Harness（阿里 DreamX）**——模型参数没有变，只换了外面的执行架构：

| Benchmark | 原始 | + LongHorizon-Harness |
|---|---|---|
| WeaveBench（Qwen 3.7-Plus） | 51.8% | **80.7%** |
| Terminal-Bench 2.1（Qwen 3.7-Plus） | 69.7% | **77.2%** |
| OSWorld 2.0（Qwen 3.7-Plus） | 2.8% | **8.3%** |
| OSWorld 2.0 子集（Claude Opus 4.7） | 20.0% | **34.3%** |

更关键的交叉对比：**Qwen 3.7-Plus + LongHorizon-Harness 平均得分 0.733，超过了 Claude Opus 4.7 用原生 Claude Code 的 0.680**。弱模型 + 强 harness > 强模型 + 弱 harness。

**Nvidia AVO harness**——搭配 Claude Opus 5，在 ARC-AGI-3 上拿到 100% 满分。没有 harness 的裸模型只有 30%。

**Nvidia SkillEvaluator**——模型完全没变，只给 agent 装上 verified skill：Correctness 从 46 分升到 87（+41），Effectiveness 从 39 升到 78（+39）。

三组数据指向同一个结论：**模型层正在商品化，编排层才是护城河。**

---

## MEA 循环：Manager-Execute-Audit

LongHorizon-Harness 的核心设计是 Manage-Execute-Audit 循环，本质上是把 agent 的"记忆"从 context 里抽出来，变成独立维护的结构化任务状态：

```
Manager → 持有持久化任务状态（需求、产出物、已发现事实）
          决定下一个子任务
          完全不能直接操作环境

Executor → 在全新的 context 中执行单个子任务
           完成后交互历史直接丢弃
           只保留执行报告

Auditor → 以只读权限独立检查环境
          验证 executor 的声明是否属实
          只有审计通过的事实才能进入任务状态
```

这个设计解决了长步骤 agent 执行的两个结构性缺陷：

1. **Context rot（上下文腐烂）**：任务执行和任务状态共享同一个不断膨胀的 context → 用 fresh context execution 对抗，每轮执行完就丢掉交互历史，只保留审计过的事实
2. **Self-evaluation bias（自我评估偏差）**：执行和完成评估耦合在一起 → 用独立 Auditor 分离

### 为什么 Executor 不能自我判断

这是一个 incentive alignment 问题。Executor 在执行过程中积累了大量的 reasoning momentum——它已经投入了几十步的推理来走这条路径。当它判断"我成功了吗"时，不是在做中立的观察，而是在评估自己的工作。

对 LLM 来说更加结构性：Executor 的"我完成了"这个判断，跟它前面所有的 action tokens 共享同一个 context window。那些 action tokens 已经把概率分布往"成功"方向推了——模型在生成"任务完成"这几个 token 时，条件概率已经被前文的行动叙事所 bias。

**本质上，MEA 做的是把"做事的权力"和"定义现实的权力"分开。**

Nvidia 的 AVO harness 也有类似机制——引入一个 supervising agent，当主 agent 偏离方向、走进死胡同或重复走过的路时，supervisor 会把它拉回来。这和 MEA 的 Manager + Auditor 逻辑一脉相承。

---

## Claimed State vs Verified State

Agent 的 memory 必须区分"它说它做了"和"环境证实它做了"。

现在大多数 agent 系统的 memory 只有一种状态："已记录"。不管是 agent 自己说的、工具返回的、还是用户告诉它的，进了 memory 就是同等地位的"事实"。就像一个公司里，员工的自我汇报和第三方审计报告放在同一个文件夹里，后面的决策者根本不知道哪条信息经过了验证。

LongHorizon-Harness 在 memory 里引入了认识论层级：

| 状态 | 含义 | 能否作为推理前提 |
|------|------|------------------|
| **Claimed** | Executor 说它做了，但没人查过 | 待验证的假设，不是事实 |
| **Verified** | Auditor 从环境中独立确认 | 可以作为后续推理前提 |
| **Untrusted** | 审计发现不符，或有完整性违规 | 需要重做的信号 |

### 没有这个区分会怎样

```
Agent 第 17 步以为："文件已经保存。"→ 进入 context
第 34 步："既然文件已经保存……"
第 58 步："基于已经保存的文件……"
但第 17 步压根没保存成功。
```

错误从 action error → false state → future reasoning contamination。这不是"小 bug"，是长步骤 agent 系统性失败的核心机制。

没有 claimed vs verified 区分时，信任是单向传递的——每一步都隐式信任前面所有步骤。有了这个区分，信任变成了必须被赚取的——你的 claim 在被验证之前，不会成为下游决策的前提。

---

## Harness 的两条腿：执行架构 + 知识架构

把 LongHorizon-Harness 论文和 Nvidia SkillEvaluator 放在一起，看到的是 harness 层的两个核心杠杆：

| | 执行架构 | 知识架构 |
|---|---|---|
| **代表** | LongHorizon-Harness 的 MEA loop | Nvidia 的 verified skills |
| **解决的问题** | Agent 怎么可靠地完成多步任务 | Agent 怎么知道该做什么 |
| **关键机制** | 外化状态、fresh context、独立审计 | 结构化指令包、工具调用指引、评估验证 |

一个管"怎么做得对"，一个管"怎么知道做什么"。两个一起才构成完整的 harness。

而且两者共享同一个原则：agent 自己声称"我会用这个工具"不算数，必须有独立的评估来验证它真的用对了。**Claimed vs verified，同一个原则在不同层面的体现。**

---

## Skill as Governed Artifact

Skill 不再是一段被塞进 prompt 的文本，而是一个有身份、有历史、有边界、有持续质量保障的工程制品。

一个完整的 Skill Runtime：

```
Skill Library → Skill Discovery → Skill Selection → Skill Execution → Skill Evaluation
```

每一个阶段要做出正确决策，都依赖于 skill 自身携带足够丰富的元数据：

| 维度 | 解决什么 | 没有会怎样 |
|------|----------|------------|
| **Provenance（来源）** | 谁写的，基于什么知识 | Discovery 不知道该信任谁 |
| **Version（版本）** | 当前哪个版本最优 | 为旧 API 写的 skill 可能引导 agent 用已废弃的调用 |
| **Scope（适用范围）** | 什么场景该用、什么场景不该用 | 误激活的代价往往大于未激活 |
| **Regression test（回归测试）** | 更新后有没有倒退 | "一次性验证"不等于"持续可信" |

Nvidia 已经走出了第一步：verified skill 要经过安全扫描、嵌入去重、沙盒对比测试三层验证才能发布。但这更像是发布门禁——skill 在整个生命周期里都需要 CI/CD 式的自动化回归。

### Skill 评估的四个维度

只测正确率会掩盖真正的问题。Nvidia 数据里的反例：jetson-optimize-memory 减少了 76.9% 的 token，但 cuopt-install 反而增加了 120.3%。

完整的评估框架至少需要四个维度：
- **Correctness** — 最终结果对不对（底线，但不是全部）
- **Efficiency** — token 消耗和执行时间（直接决定成本和用户体验）
- **Reliability** — 错误率和重试次数（错误的严重程度比频率更重要）
- **Safety regression** — 装上 skill 后有没有引入新的风险

---

## Skill 选择：能力越多，选择越难

Skill 数量增加后，真正的瓶颈从"有没有能力"变成"能不能选对能力"。

Nvidia 专门测量 Discoverability——"skill 该加载时加载了，不该加载时没加载"。这个维度的存在本身就说明他们已经遇到了这个问题。

每一个 skill 都是 agent 注意力空间里的一个竞争者。一个被误激活的 skill 不是中性的——它会把 agent 的推理引向错误的工具、错误的工作流、错误的假设。

这是一个更普遍的系统规律：**任何系统的能力增长到一定阶段，瓶颈都会从"能力不足"转向"选择过载"。** 人类专家也一样——初级工程师的问题是"我不知道怎么做"，高级工程师的问题是"我知道 12 种做法，但这个场景该用哪种"。

下一代 agent 架构的关键竞争力是三层递进的选择能力：

1. **路由精度** — 毫秒级判断需要哪个 skill。要求 skill 的描述本身就是高精度的，边界清晰、覆盖不重叠
2. **动态裁剪** — 根据任务类型、当前阶段动态只暴露相关的少量 skill。把"从 300 个里选 1 个"变成"从 5 个里选 1 个"
3. **负选择能力** — 知道什么时候不用任何 skill，直接用模型的原生能力。可能是最难的，因为要求 agent 对自己的裸能力有准确的自我评估

---

## Multi-Agent Memory 的 Provenance 问题

这跟人类世界完全一样：五家媒体报道同一件事，不代表五个独立记者确认过——它们可能全部来自同一个 Reuters source。

Multi-Agent 系统不能只保存 What was remembered，还必须保存 Where did this memory come from。十个 agent 说同一件事，不等于十份证据——必须追溯 memory 的来源，否则信息回音壁会被当作共识。

这就是 Provenance（来源追溯），它从 Skill 治理进入了 Memory 架构。

---

## 四柱模型：Agent 可靠性的完整架构

综合今天所有材料，Agent 可靠性的完整架构是四根柱子：

```
Harness 管执行 — 我现在要做什么
Skill 管能力   — 我该用什么能力
Provenance 管证据 — 我知道的东西从哪来
Environment 管现实 — 我怎么确认世界真的已经变了
```

Google DeepMind 选 EVE Online 而不是国际象棋作为 generalist agent 测试环境，正是因为 EVE 是一个有经济系统、多玩家博弈、持续后果的世界——逼着 agent 必须持续回答这四个问题，而不是只在任务开始时回答一次。

如果 Agent 必须在一个持续存在的世界里生活几个月：
- Memory 不能是短期的 task state，而是长期的 identity state
- Planning 不能是单任务分解，而是跨时间尺度的目标管理
- Skill 不能是静态的工具箱，而是要随着世界变化而演化

**Agent 的终极考试不是"能不能完成一个任务"，而是"能不能在一个不断变化的世界里持续做出正确决策"。前者测的是能力，后者测的是架构。**

### Agent 可靠性的"三权分立"

做事的权力（Executor）、定义现实的权力（Auditor）、决定下一步的权力（Manager）必须分离。任何两个权力合并在同一个 context 里，都会产生自我参照的污染。

这跟政治制度里"立法-执法-司法"分立的逻辑同构——不是因为一个角色不够聪明，而是因为权力集中在同一个主体上时，纠错机制会失效。

---

## 下一步

- 🔧 想了解 Harness 的基础概念和四个维度，看 [Harness 系统](harness-system.md)
- 🤖 想了解 Model 和 Agent 能力的区别，看 [Model 能力 ≠ Agent 能力](../ai-core/model-vs-agent-capability.md)
- 📋 想了解 Skill 的商业格局，看 [Skills 商业格局](skills-business-landscape.md)
- 🛡️ 想了解 Containment 纵深防御（同样是"不信任单一防线"的思路），看 [AI Safety 的三层防护框架](../ai-core/safety-three-layer-framework.md)
- 📖 想了解 Agent 架构基础，看 [Agent 系统架构](../ai-core/agent-architecture.md)
- 💼 想了解模型战争转向系统战争，看 [模型战争 vs 系统战争](../career-impact/model-to-system-war.md)

---

**最后更新**: August 29, 2026

**相关**:
- [Harness 系统](harness-system.md) —— Harness 基础概念和四个维度
- [Skills 商业格局](skills-business-landscape.md) —— Skill 的产品形态和市场格局
- [Model 能力 ≠ Agent 能力](../ai-core/model-vs-agent-capability.md) —— Intelligence is not Agency
- [Agent 系统架构](../ai-core/agent-architecture.md) —— Agent 的核心循环和工具调用
- [Agent Intelligence 三层框架](../ai-core/agent-intelligence-layers.md) —— Model / Memory / Delegation 三层分工
- [AI Safety 的三层防护框架](../ai-core/safety-three-layer-framework.md) —— Containment 纵深防御，同源思路
- [模型战争 vs 系统战争](../career-impact/model-to-system-war.md) —— 竞争从模型转向系统架构
- [Scaling Paradox](../career-impact/scaling-paradox.md) —— over-perception 本质就是把 claimed state 当 verified state
- [Evaluation 系统](../ai-research/evaluation-system.md) —— 评估框架的多维度设计
- [心智模型变迁史：Harness > Model](../../mental-models.md)
