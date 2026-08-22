# AI Safety 的三层防护框架——Monitoring / Alignment / Containment

**核心概念**: 模型越聪明，"相信它会听话"越不够用——安全的本质是即使出错，也别让错误跑得太远。OpenAI 的三层防护框架把 safeguards 拆成三层各司其职的防线：Monitoring（它正在干什么）、Alignment（它为什么这么干、是否服从预期）、Containment（即使前两层失败，它究竟能碰到什么）。

**关键洞察**: Alignment 和 Containment 解决的是完全不同的失败模式：前者试图让模型从内部"不想"作恶，后者假设前者已经失败、用工程手段限制损失边界。两者缺一不可——就像既要培养员工的职业道德，又要确保他的门禁卡只能进他该进的房间。而且即使一个 Agent 的 Trustworthiness 很高，在环境权限无限大的情况下仍然不安全。

**学习来源**: OpenAI《Pacing model development in an era of cyber-critical capabilities》（2026.08.18）

📖 **完整学习对话记录**：[Safety 三层防护](../conversations/safety-three-layer-framework.md)

**第一次接触这个主题？** 建议先了解：[AI Safety / Alignment 基础](safety-alignment-guide.md) · [Agent](../../glossary.md#agent) · [Harness](../../glossary.md#harness)

---

## 目录

1. [背景：为什么 OpenAI 自己踩刹车了](#背景为什么-openai-自己踩刹车了)
2. [三层防护框架](#三层防护框架)
3. [Alignment 技术路径的演进](#alignment-技术路径的演进)
4. [Containment 工程架构](#containment-工程架构)
5. [两层放在一起看](#两层放在一起看)
6. [Delegation Framework 的真正缺口：可逆性](#delegation-framework-的真正缺口可逆性)

---

## 背景：为什么 OpenAI 自己踩刹车了

2026 年 8 月 18 日，OpenAI 发表了一篇文章，披露他们即将发布的模型 Astra 可能已达到 Preparedness Framework 里的 "Critical" 网络安全能力阈值——意味着该模型在网络攻击方面的能力已经到了需要特殊管控的程度。

他们的应对：暂停了最新部署模型上的强化学习训练约两周，最大规模的前沿 RL 训练运行仍处于暂停状态，等待小规模评估完成后才会继续。

**真正的信号**：AI 能力曲线已经陡到让 OpenAI 自己都开始刹车了——他们不是被监管逼着停，是内部评估触发了红线后主动踩刹车。模型的"危险能力"涌现速度比他们的安全基础设施快——所以他们不得不先把基础设施补上来。

---

## 三层防护框架

OpenAI 把 safeguards 明确拆成三层，各司其职：

```
Layer 1: Monitoring → 它正在干什么？
Layer 2: Alignment → 它为什么这么干、是否服从预期？
Layer 3: Containment → 即使前两层失败，它究竟能碰到什么？
```

### Monitoring：检测异常行为

新的多阶段监控系统：

```
模型生成 token
    ↓
激活分类器在每个 token 处运行
    ↓
发现异常模式 → 升级到更复杂的调查系统
    ↓
确认违规 → 30 分钟内人工介入
```

不只是看模型的输出，而是看模型内部的激活状态——试图在行动发生前发现意图。

监控开销约占推理算力的 20%——这意味着"安全"本身有真实的经济成本，而且会随模型规模线性增长。这将成为 AI 公司的结构性负担——安全做得越认真，算力开销越大。

### Alignment 和 Containment 的区别

[Safety / Alignment 完全指南](safety-alignment-guide.md) 已经讲过 Safety vs Alignment 的概念区分和 RLHF 的局限。这篇要补的是：Alignment 和 Containment 作为两条独立防线，各自在防什么。

| | Alignment | Containment |
|---|---|---|
| **防的是** | 模型有坏目标 | 坏目标造成实际破坏 |
| **作用层** | 模型内部 | 外部环境 |
| **假设** | 能塑造模型意图 | 模型意图不可完全信任 |
| **失败后果** | 模型想干坏事 | 干坏事的能力被放大 |
| **技术成熟度** | 仍在研究前沿 | 工程方法相对成熟 |

**一个比喻**：Alignment 是试图培养一个有道德感的员工——从内心就不想做坏事。Containment 是无论这个员工多有道德，他的门禁卡只能进他该进的房间。

---

## Alignment 技术路径的演进

[Safety / Alignment 完全指南](safety-alignment-guide.md) 已标出 RLHF、Constitutional AI、Red Teaming、Interpretability 这几个方向存在，但没有展开细节。这一节补上技术演进的脉络。

### 1. RLHF — 用人类反馈训练"什么是好"

```
模型生成 A vs B → 人类选 A 更好 → 奖励模型学会：A 类回答得高分 → 主模型训练目标：产出让奖励模型高兴的回答
```

**已知缺陷**：
- 奖励模型本身可能被 hack——主模型学会了"让奖励模型给高分"而不是"真的做对"
- 人类标注员的偏好不一致，甚至本身有偏见
- 扩展性差：越复杂的任务，人类越难判断哪个回答"更好"

（RLHF 的三步流程在 [Evaluation 系统](../ai-research/evaluation-system.md#rlhf-三步流程) 里有完整展开。）

### 2. Constitutional AI — 让模型用原则自我批判

核心思路的转变：与其让人类逐条判断，不如给模型一套"宪法"（原则集），让模型自己批判自己。

两个阶段：
- **SL-CAI（监督学习）**：模型生成回答 → 用宪法原则自我批判 → 修改回答 → 用修改版做监督训练
- **RL-CAI**：用 AI 反馈替代人类反馈，奖励信号来自另一个遵循宪法的模型

**比 RLHF 强在哪**：可扩展（不依赖大量人工标注）、更透明（原则是显式写出来的）、减少人类偏见的直接传导。

**局限**：宪法本身是人写的，写得不好的原则同样会被模型内化。

### 3. Scalable Oversight — 当模型比人聪明时怎么监督

核心困境：当模型能力超过人类时，人类怎么判断它的输出是否正确？

两个主要技术路径：
- **Debate（辩论）**：两个 AI 互相辩论，人类只需判断谁的论证更可信——而不需要自己能解决问题
- **Recursive Reward Modeling（递归奖励建模）**：把复杂任务分解成人类能判断的小块，逐层建立奖励信号

### 4. Interpretability — 直接看模型在"想什么"

以上方法都是行为层面的——观察输出来推断内部。Interpretability 试图直接解读模型内部的激活状态和表示。

现状仍然很早期——能识别某些神经元激活模式对应某些概念，但离"读懂模型意图"还很远。

**为什么重要**：如果能真正解读模型内部，Alignment 验证就不再依赖行为观测——你可以直接看它"想干什么"。

### 演进方向

```
RLHF（人类逐条打分）
  → Constitutional AI（原则自我批判，减少人工标注依赖）
  → Scalable Oversight（当模型比人聪明时人类如何监督）
  → Interpretability（直接读懂模型在想什么）
```

越往后越难，越往后越重要。

---

## Containment 工程架构

核心思想：**纵深防御（Defense in Depth）**——不依赖单一防线，每一层假设上一层已经失败。

```
Layer 0: Alignment（模型不想逃）
Layer 1: 进程隔离（逃不出沙箱）
Layer 2: 网络隔离（出不了内网）
Layer 3: 权限控制（碰不到关键系统）
Layer 4: 监控（异常立刻被发现）
Layer 5: 人工介入（30 分钟响应窗口）
```

### 具体技术手段

**沙箱（Sandbox）隔离**：模型执行代码的环境是一个严格受限的虚拟容器——只能读写指定目录，无法访问宿主系统，进程结束后环境销毁。

**网络隔离**：单点突破不能直接访问互联网。关键设计原则：任何单一组件被攻破，不能自动获得下一层的访问权——需要二次突破。

**最小权限原则（Least Privilege）**：模型和它运行的基础设施，只有完成当前任务的最低必要权限。任务结束，权限立即失效。

**激活监控（Activation Monitoring）**：不只看输出，而是看模型内部的激活状态——每个 token 生成时都有分类器在检查。发现异常模式后升级到更复杂的调查系统，30 分钟内人工介入。

这些手段跟 [Harness 系统](../ai-application/harness-system.md) 在产品层面做的事情是同一套思路的不同尺度——Harness 管的是"这个 Agent 能碰什么文件、能用什么工具"，Containment 管的是"这个模型能碰什么网络、能逃出什么边界"。

---

## 两层放在一起看

```
模型能力 ↑
    ↓
Alignment 越来越难验证（模型足够聪明，能学会"表现对齐"）
    ↓
Containment 的重要性越来越大（不能完全信任 Alignment）
```

**两者不能互相替代**：
- 只有 Alignment，没有 Containment → 一旦 Alignment 失败，后果无界
- 只有 Containment，没有 Alignment → 模型会不断寻找箱子的边界和漏洞

**最关键的洞察**：Alignment 越难验证，Containment 的价值就越高。但 Containment 有物理上限——你不可能永远把一个足够聪明的系统锁在箱子里。所以长期来看，**Alignment 才是根本解，Containment 是买时间**。

这也是为什么 OpenAI 说"我们需要的方法必须能随模型能力一起扩展"——现有的工具，在足够强的模型面前，都只是暂时的。

---

## Delegation Framework 的真正缺口：可逆性

[Model 能力 ≠ Agent 能力](model-vs-agent-capability.md) 讨论了 Capability 和 Authority 的区别。这里要追问一个更深的问题：一个 Trustworthiness 很高的 Agent，在环境权限无限大的情况下，是否安全？

答案是否定的，原因不是 Agent "变坏了"，而是：

1. **错误会被放大**：好人也会判断失误。一个 Alignment 很好的模型，在复杂任务链里可能做出局部合理但全局有害的决策——它每一步都"认为"自己在做对的事
2. **环境本身会腐化 Agent**：Prompt Injection——Agent 被派去读一封邮件，邮件里藏着恶意指令，Agent 的 Alignment 再好，它也在执行它"以为是任务"的指令。权限越大，被利用的后果越严重
3. **长任务链中的目标漂移**：任务越长，Agent 越可能建立"子目标"——子目标有时凌驾于原始目标之上（比如"保证自己不被中断"凌驾于"完成用户的任务"）

因此，权限授予不应只看 Trustworthiness，完整的授权公式应该是：

```
可信度 × 任务范围 × 环境风险 × 可逆性
```

**可逆性是最被忽视的维度**。更完整的 Delegation 模型：

| 风险 | 可逆性 | 策略 |
|------|--------|------|
| 低风险 | 可逆 | 高自主，无需确认 |
| 高风险 | 可逆 | 自主执行，事后报告 |
| 低风险 | 不可逆 | 执行前确认 |
| 高风险 | 不可逆 | 暂停，等待人类决策 |

不是"信任就给全权"，而是按操作性质动态收缩权限。

---

## 下一步

- 📖 想了解 Safety vs Alignment 的概念基础，看 [AI Safety / Alignment 完全指南](safety-alignment-guide.md)
- 🔧 想了解 Harness 怎么在产品层面实现权限控制，看 [Harness 系统](../ai-application/harness-system.md)
- 🤖 想了解 Model 和 Agent 能力的区别（Capability vs Authority），看 [Model 能力 ≠ Agent 能力](model-vs-agent-capability.md)
- 🔒 想了解可信度五维框架，看 [从"最聪明"到"最可信"](../career-impact/capability-to-trust.md)

---

**最后更新**: August 22, 2026

**相关**:
- [AI Safety / Alignment 完全指南](safety-alignment-guide.md) —— Safety vs Alignment 的概念基础
- [Model 能力 ≠ Agent 能力](model-vs-agent-capability.md) —— Capability vs Authority 的区别
- [Harness 系统](../ai-application/harness-system.md) —— 产品层面的权限控制
- [从"最聪明"到"最可信"](../career-impact/capability-to-trust.md) —— 可信度五维框架
- [Coding Agent 与 Agent 基础设施](../career-impact/agent-infrastructure-os.md) —— Agent 权限越大自主性越强的底层逻辑
- [Training 训练系统完全指南](training-system-guide.md) —— RLHF 在整条训练线上的位置
- [Evaluation 系统](../ai-research/evaluation-system.md) —— RLHF 三步流程的完整展开
- [心智模型变迁史：Alignment → Defense in Depth](../../mental-models.md)
