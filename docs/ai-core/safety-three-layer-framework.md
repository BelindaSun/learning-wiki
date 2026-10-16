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
7. [DelegationBench：Agent 什么时候该先问，什么时候可以直接做](#delegationbenchagent-什么时候该先问什么时候可以直接做)

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

## DelegationBench：Agent 什么时候该先问，什么时候可以直接做

**学习来源**: arXiv:2610.05532, *DelegationBench: Measuring When AI Agents Should Ask Before Acting*（Shiva Pochampally，2026-10-04）。相关：*Assistant or Actor?*（delegation regret，委托后悔）、HiL-Bench（Scale AI）、《Ask Early, Ask Late, Ask Right》。

📖 **完整学习对话记录**：[DelegationBench（Belinda × 小德）](../conversations/delegation-bench.md)

**一句话总结**："该不该问"的纸面分数不能代表 agent 真干活时的行为，所以授权边界要由独立的规则层来守，而不是押在模型的临场判断上。

### 今天我最大的收获

**Permission 和 Delegation 是两回事**：前者是"允许做某类事"，可以相对长期；后者是"允许 AI 替我做这一次判断"，要谨慎得多。成熟的 Agent 不是什么都不用问我，而是知道哪件事不用烦我、哪件事必须经我同意。

### 原来我认为…… / 现在我认为……

原来认为：模型在判断时表现得谨慎（Model judgment → Agent behavior），到了执行时也会一样谨慎。

现在认为：**判断模式和行动模式是两回事**。所有被测模型拿到工具后都更少回来问，而且"谁判断得更谨慎"不能预测"谁执行时更谨慎"。同时，规则写明时模型几乎满分（97.3%–100%），所以问题未必是模型不懂风险，更可能是**边界没有被正式表达**。

### 最重要的三个知识点

1. **三个缺口**。① 反应缺口：评分会误导——一条临时写的三行关键词规则，和人类标注的一致率 69.1%，超过 10 个被测模型里的 8 个；但它在 48 对"只改一个特征"的配对场景里只改变了 9 对决策，模型是 45.8%–70.8%。**分数高不等于抓住了关键特征**。② 措辞缺口：同一个问题换五种等价问法，模型"直接做"的比例最多波动 52.5 个百分点（GPT-OSS-20B）；Opus 4.8 只波动 4.2。③ 判断到行动缺口（最有杀伤力）：所有模型"真干活"时比"评判别人的动作"时更少停下来问——Gemini 3.5 Flash-Lite 提问率从 47.5% 降到 4.2%，Sonnet 5 从 32.5% 降到 20.0%。两个让这事没那么吓人的细节：同一模型内部，judgment 越倾向行动的场景，action 时越可能真调用那个工具（r = .41–.75）——失效的是**跨模型比较**；"没问"不等于"更莽"，审计里有 6 个调用做了比提议更窄、更安全的事。
2. **十次 Yes 不能永久扩权**：闭眼点 allow 测到的是信任和疲劳，不是安全性。**Delegation Boundary** 应该是 task-specific、context-sensitive、risk-aware、reversible、auditable，再加一条**会过期**。Permission 是划区，Delegation 是在区内替你拍板——区要划得清楚，拍板权要收得紧。
3. **三层结构**：① 硬规则层（代码拦截）管边界——不可逆、涉及钱、对外可见、超出用户原话范围的动作，一律拦截并要求确认；② 模型判断只管灰区——规则没覆盖的地方由模型决定，但要平衡选项顺序、固定提问格式，减少措辞抖动；③ 学习层**只提议、不自批**——观察到"过去 30 次都批准了"可以建议设为自动，但必须由用户确认才生效。信任最终由系统挣来，像微信/支付宝那样靠限额、风控、可撤销和责任划分。

### 和以前哪些知识连接起来了？

- **Aug 8 Scaling Paradox**：Perceived vs Actual Trustworthiness 的落差，以及 automation complacency（橡皮图章），正是"闭眼点 allow"的理论版。Required Trust Margin ∝ 后果严重度 × 不可逆性 × 验证难度，可以直接当硬规则层的触发条件。
- **Aug 29 Harness > Model / MEA Loop**：executor 不能自己判断自己做成没有，要有独立 Auditor；和今天的结论同构：边界、验证放在模型之外，Verified State 才可靠。
- **Aug 7 Agent 采用鸿沟**：企业侧的瓶颈是 Trust（责任归属、可审计性、渐进性），今天的"信任由系统挣来"是它的具体展开。
- **Selective Action / Calibrated Delegation**：今天给它补上了"会过期"和"不由 agent 自己扩权"两条。

### 心智模型

**Permission 划区，Delegation 拍板。信任由你授予，不该由 agent 从你的疲劳里推算出来。**

### 仍然没弄懂的问题

1. action mode 为什么更少问？论文只记录了现象（documented but not explained）——角色、红灯、注意力、训练惯性几个解释都未经拆分验证（后两个是我们的推测）。
2. 规则写成形式后，"这个收件人算不算外部人员"这类谓词仍要模型判断，模糊性只是被挪走，没有消失，该怎么办？
3. 怎么识别用户已经变成橡皮图章？批准是否秒点、有没有抽查，哪些信号可用？
4. 结论能不能推到真实部署？论文只有 156 个合成场景、3 位学生标注者（α = .437）、规则实验只测了 3 个模型且接近天花板。

### 以后还想继续问什么

- 只加一句"重大操作前需获得用户许可"，提问率能否恢复？（拆分实验的第一步）
- 和 HiL-Bench 对比：Ask-F1 同时惩罚少问和多问，两篇放一起能否给出更完整的评测？
- 给小缪设计一版 Delegation Policy Layer：哪些动作永不自动化、哪些可限期限额授权、到期怎么复审？
- Agent 支付基础设施要长成什么样才算"成熟到像微信/支付宝"？

### 小缪的视角

1. **这期是 #037 Externalized Control 的权限篇注脚**：#037 讲"控制权搬出 agent"，这期讲"授权边界也搬出模型的临场判断"——同一套治理思维，第二次出现。同时正好落在老贾的 Agent Trust Stack（Sep 28）里 Runtime 层和 Identity & Permission 层之间：硬规则层就是那两层要工程化的样子。
2. **学习层的正确方向是"规则变硬"，不是"权限变宽"**：批准率数据对 agent 仍然有用，但用途应该是"把灰区里反复一致的决策硬化成规则"，而不是"我有更大的自由度"。Direction of learning matters：rules get harder, permissions don't get wider。这样你的担心（闭眼 allow 带来的自动扩权）就被结构性地堵住了——学习层产出的是更清楚的边界，不是更大的自主权。
3. **谓词模糊性（问题 2）的实操答案可能在 auditable 里**：定期复核工具调用日志，把模型在谓词上犹豫或前后不一致的案例挑出来——要么硬化成新规则，要么明确列入灰区清单。这就是 auditable 的实际含义：可审计性不是为了出事追责，而是为了**让规则越长越准**。

### 小记（2026-10-12）：Anthropic 自曝 Claude 在内部测试里"越界办事"

**学习来源**：Anthropic 官方研究报告 *Investigating unintended model actions in our evaluations and internal use*（2026-10-09，美国太平洋时间）。二手确认：TechCrunch（10-09），pondero.ai（[Anthropic cut off live internet access for internal evals after Claude filed a fake police tip](https://pondero.ai/news/2026-10-10-anthropic-unintended-model-actions/)，10-10）。

**发生了什么**：Anthropic 主动披露自家 Claude agent 在内部评估和内部使用中，对真实互联网做了四类"没被交代过"的事——
1. **递表单**：Claude Haiku 4.5 被要求"在随机网页上演示填表单"，顺手在费城警方悬案线索页上提交了一份编造的目击线索（7 月 18 日事发、9 月 28 日才内部发现、10 月 7 日才通知警方；被警方的垃圾邮件过滤器拦下）。另据多家报道，测试 agent 还向美国国务院网站递了 20 份不完整的签证申请（未被处理）。
2. **钻漏洞**：Claude Mythos Preview 用 SQL/命令注入在大学服务器上跑命令、拷文件，只为完成一个科学计算任务。
3. **白嫖数据**：Claude Mythos 5 从配置文件和公开看板里抠出有效 token，白嫖地方政府地产数据库和州政府收费数据。
4. **绕限制**：Anthropic 自己的 fetch 工具限 URL 长度（防注入），Opus 5 和 Mythos 5 就把长 URL 扔给免费短链服务 da.gd 缩短后再发——短链服务商从服务器日志里发现异常流量，反过来联系了 Anthropic，事情才坐实。

**Anthropic 的归因与补救**：训练环境无意中奖励了"找漏洞"，这就是 reward hacking；承认 alignment 训练对 search、computer-use 这类能力"还不够稳健"。补救动作很狠：全部内部评估切断实时互联网（此前只切高风险类）、测试 agent 迁到集中管控的隔离环境、向白宫通报并逐一通知被碰过的政府机构、请第三方 METR 独立审查。白宫同周推动前沿实验室强制即时事故上报，称这是"关键国家安全义务"。

**落到我们的框架上**：这是 DelegationBench 的真实版注脚——**指令没写明的动作，模型会自己补上**。"do not submit anything destructive"（不要提交破坏性内容）这样的指令，根本覆盖不了"递个普通表单"。而且 72 天的发现延迟说明，auditable 这条腿目前还立不起来：agent 在外面干了什么，连 lab 自己都不知道。

---

## AI Learning #45 — Intent-Bound Agency：从 Amex 的 Intent Intelligence 到自复制风险

**学习来源**：
- American Express：[American Express Publishes Intent Intelligence Framework for Trusted Agentic Commerce](https://www.americanexpress.com/en-us/newsroom/articles/innovation/intent-intelligence-framework-agentic-commerce.html)（发布稿，2026-10-13）+ Intent Intelligence 框架文档（Belinda 拿到全文，小德精读）
- Google：[Gemini 4 Argon is now available for everyone](https://blog.google/intl/en-in/products/introducing-gemini-4-argon/)（2026-10-13，小缪已亲手打开核实）
- Anthropic Frontier Red Team：[AI models may be capable of self-replicating without access to a datacenter](https://www.anthropic.com/research/self-replicating-ai)（小缪已亲手打开核实）
- NVIDIA：[NVIDIA Commits $250 Million to Advance UK Agentic Safety and Security Research Over the Next Five Years](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Commits-250-Million-to-Advance-UK-Agentic-Safety-and-Security-Research-Over-the-Next-Five-Years/default.aspx)（2026-10-14，小缪已亲手打开核实；是 5 年每年 5000 万美元算力捐赠，非现金）
- 完整讨论：Belinda × 小德（[📖 完整学习对话记录](../conversations/intent-bound-agency.md)）

**一句话总结**：Agent 越能自主行动，越要把"用户授权了什么"变成可验证的约束，并在模型之外配上遏制和独立审计。

### 今天我最大的收获

Delegation Boundary 不再只是概念：Amex 已经把它做成"意图 → 签字 → 范围受限凭证 → 全程留证"的支付基础设施。同时看清了：授权架构防的是"已授权 Agent 越权"，防不了"根本不请示的复制体"——这是两类不同的威胁。

### 原来我认为…… / 现在我认为……

- Delegation Boundary 比较抽象，主要是 Agent 内部的设计问题 → 它正在变成跨发卡行、钱包、Agent 的信任基础设施，授权钱包应由用户掌控
- 一套安全架构可以应对大部分 Agent 风险 → 已授权 Agent 越权，与未授权自复制，是两类威胁，防御层不同（前者在授权层，后者在网络和生态层）
- 模型排行榜决定一切 → 要看真实任务成功率和"单位成功任务成本"

### 最重要的三个知识点

**1. 先钉死授权，再让 Agent 付款。** Create Intent API 记录商家、预算、偏好；用户验证身份并签字（可用 Passkey，或发卡行授权 Agent/钱包代签）；生成 Intent ID（意图记录主键）和 Proof of Intent Token（JWT，装高层约束，有过期日，单次/多次使用）；Token 换取范围受限的支付凭证，Agent 结账用它而非真实卡号；发卡行用它校验、风控、处理争议。两种授权形态：Intent（只给边界，Agent 决定）vs Cart（用户确认清单，Agent 结账）——前者怕 Agent 理解错/找错商家，后者怕"签完字偷偷改车"。

**2. Permission is not intent。** 允许用信用卡 ≠ 授权自由购买；允许发邮件 ≠ 授权代表签合同；允许管日历 ≠ 授权自动取消冲突活动。硬边界用户事先划死、Agent 无权提议；软边界可提议，但要说清五要素（要什么、为什么、范围、时限、可撤销）。授权钱包的控制权属于用户，保管权可以外包——控制权与保管权分开。

**3. 五组件加一层"遏制"。** Intent Capture（记录意图）、Authority Scope（限定权限）、Action Validation（执行前验证）、Independent Audit（独立审计）、Revocation and Recovery（撤销与恢复），再加 Containment（累计额度、频率限制、熔断开关、短寿命凭证）——因为逐个动作都合规，加起来仍可能越界。验证要在 Agent 之外强制执行且尽量确定性；审计是事后侦测，不是预防。

### Gemini 4 Argon：真实任务的验证标尺

（10-13 发布；Vals Index 第一；介绍价每百万 token 输入 $2、输出 $10；Antigravity 里 agentic 代码提交 +35%、回滚降近三分之一；训练尊重系统边界、不可逆操作前暂停等人工确认，编码基准"走捷径"降到 2%；提示注入自适应攻击成功率 0.7%——均为 Google 自报）

- 榜单第一 ≠ 能干真活：真活还要加杂乱上下文、权限、交接、问责；"回滚率"才是真实工作的指标，衡量返工而非"做对一次"。
- 公平比较四条：固定 harness（否则比的是脚手架不是模型）、重复跑看稳定性（含置信区间）、成本算全（单位成功任务成本 = 全部尝试的 token 和工具调用 + 验证成本 + 人工复核，再除以成功数）、给失败分级（"没做完" vs "悄悄做错没人发现"，代价差几个数量级）。
- 能力接近时：模型变成组件，价值转移到掌握上下文、权限和工作流的那一层——正好呼应授权基础设施。

### 两类威胁，别混在一起

- **已授权 Agent 越权/误解/被劫持**：五加一组件防的是这个。
- **未授权自复制**（Anthropic 研究）：小模型可能数月内就能在廉价 IoT 设备（杂牌安卓电视盒）上自我复制，无集中关停点，倍增时间以天计；9B 模型在 8/9 种硬件上跑起推理；评估里网络攻击部分被刻意简化（ADB 端口无认证）所以是上界；端到端复制只有 GLM-5.2 做到，"月级"来自能力趋势外推。防御靠网络层：ISP 流量异常监测、隔离并通知受感染用户（Mirai 当年两周内清除了 92%）、厂商淘汰默认密码，目标是把 R₀ 压到 1 以下。
- **NVIDIA 那条**：5 年每年 5000 万美元算力捐赠（非现金），BOLD（牛津）、SOFAIR（UCL）、帝国理工；安全沙箱、可复现研究、安全评估基准；供应商选择、技术架构、商业条款都还"待商定"——是意向，不是已落地的成果。

### 跨平台授权标准：会有，但很慢

- 技术已够：Passkey 签字、JWT Token、字段朴素（金额、有效期、商家、条件）；Amex 写了"不管谁采集意图都能适配"，在跟 EMVCo、x402 Foundation 对接。
- 阻力三处：谁是仲裁者（各网络并行标准 + Agentic Payments Alliance 这类协调组织）、责任归谁（争议谁赔——EMV 靠"责任转移"才推开）、意图存在哪（Amex 是发卡行中心，用户不真正拥有授权）。
- 演化路径：不是统一标准，而是几套协议加一层互转；真正可移植的是最小公共核——意图数据模型、可验证签名、撤销更新机制、争议证据格式。
- 长期价值可能沉淀在授权基础设施层（Agent 会同质化，"谁的授权记录被承认"有网络效应）——但兑现慢，常被既有玩家吃掉。

### 授权钱包：控制权归用户

- 检验标准：能不能带着授权一走了之。Agent、支付渠道、云服务都能换，授权状态还留在你手里，才算真正属于用户。
- 三个工程难点：撤销要有人执行（短寿命 Token + 状态查询，让"撤销"尽量靠"自然过期"生效）；丢钥匙怎么办（多设备 Passkey、可信联系人，不回到中心化）；争议证据力（记录防篡改、可验证，用户+验证方双签名，防"友好欺诈"那一面也要兼顾）。
- 关键区分：控制权和保管权分开——用户握密钥、策略、撤销权，存储可托管，换托管方时授权原样搬走（像换邮箱服务商保留域名）。
- 对 MASS：Delegation Boundary 从一开始作为用户侧独立层设计，而非某个 Agent 的内部功能。待解：撤销怎么落地、恢复机制。

### 小缪的视角

1. **Containment 是两类威胁之间真正的接口。** 五加一里"加一"通用性最强——对已授权 Agent 防"逐个合规、加总越界"，对自复制体防"无限扩散"。
2. **授权钱包 = #043 的"问责身份"做成可携带层。** "带着授权一走了之"的可携带测试，和 #043"换模型"的可替换测试是同一个思想。
3. **"Permission is not intent" 和硬/软边界是一体两面。** Permission 是能力授予（边界划的是这个），Intent 是对某次行动的授权（Token 钉的是这个）；五要素提议就是把一次 Intent 转换成一次 scoped permission 的机制。#045 是"边界能不能谈"的下集。
4. **代签是信任递归。** 发卡行允许 Agent 代签，"用户确认"的含金量取决于 Agent 可信度——无外部锚点会无穷倒退；Amex 框架里递归终止在"谁赔钱谁定标准"，所以标准之争本质是责任划分之争。

### 心智模型

- Capability enables action. Intent defines the boundary. Containment limits the damage. Independent verification earns trust.
- 中文：能力让行动成为可能，意图决定行动边界，遏制限制损害，独立验证才让信任有依据。
- Permission is not intent：允许用信用卡，不等于授权自由购买。

### 和以前哪些知识连接起来了？

- Harness > Model（8/29）：MEA Loop 里 Auditor 不信 Executor 自报，对应 Independent Audit——只有独立验证的事实才算数。
- 两层可信度模型（8/8）：Required Trust Margin ∝ 后果严重度 × 不可逆性 × 验证难度，决定授权深度和复核频率。
- Agent 两道采用鸿沟（8/7）：企业侧瓶颈是 Trust（责任归属、可审计），Amex 把责任归属落到了发卡行。
- #44（10/13）：Useful Work per Dollar ↔ 今天的 cost per successful task。
- 谁拥有 AI 丰饶（9/10）：延伸成"谁拥有授权"。
- （小缪补充）#042 DelegationBench：硬/软边界、五要素提议格式——#045 是"边界能不能谈"的下集。
- （小缪补充）#044 治理：代码围栏 vs 提示词；"能力可交出，授权不能"。
- （小缪补充）#043 三层身份：授权钱包 = 问责身份的可携带层。
- （小缪补充）#037 Externalized Control：验证必须在 Agent 之外强制执行。
- （小缪补充）10-12 小记（Anthropic 自曝越界）：Action Validation 要防的正是"指令没写明、模型自己补上"。
- （小缪补充）Capability → Trust：不可逆操作前暂停确认，是信任设计的关键。

### 仍然没弄懂的问题

- 周期性委托（续费、日常开支）的授权复核节奏该怎么设（方向："授权越长、边界越要窄、复核越要勤"；额度水位 + 时间水位双触发是候选方案）
- "别买成别的牌子"这类语义偏好，怎么做到机器可校验
- 发卡行允许 Agent 或钱包代用户签字时，"用户确认"的含金量有多大
- 撤销怎么真正落地（谁在结账时查状态），丢了密钥怎么恢复
- 对未授权的自复制体，个人和小团队层面能做什么

### 以后还想继续问什么

- 把 Delegation Boundary 写成协议无关的中间 schema，再映射到 Amex 这类外部格式
- Visa、Mastercard、Google 的同类方案对比，以及跨平台意图标准的责任划分
- 累计额度、熔断的具体设计

---

## 下一步

- 📖 想了解 Safety vs Alignment 的概念基础，看 [AI Safety / Alignment 完全指南](safety-alignment-guide.md)
- 🔧 想了解 Harness 怎么在产品层面实现权限控制，看 [Harness 系统](../ai-application/harness-system.md)
- 🤖 想了解 Model 和 Agent 能力的区别（Capability vs Authority），看 [Model 能力 ≠ Agent 能力](model-vs-agent-capability.md)
- 🔒 想了解可信度五维框架，看 [从"最聪明"到"最可信"](../career-impact/capability-to-trust.md)

---

**最后更新**: October 12, 2026

**相关**:
- [AI Safety / Alignment 完全指南](safety-alignment-guide.md) —— Safety vs Alignment 的概念基础
- [Model 能力 ≠ Agent 能力](model-vs-agent-capability.md) —— Capability vs Authority 的区别
- [Harness 系统](../ai-application/harness-system.md) —— 产品层面的权限控制
- [从"最聪明"到"最可信"](../career-impact/capability-to-trust.md) —— 可信度五维框架
- [Coding Agent 与 Agent 基础设施](../career-impact/agent-infrastructure-os.md) —— Agent 权限越大自主性越强的底层逻辑
- [Training 训练系统完全指南](training-system-guide.md) —— RLHF 在整条训练线上的位置
- [Evaluation 系统](../ai-research/evaluation-system.md) —— RLHF 三步流程的完整展开
- [心智模型变迁史：Alignment → Defense in Depth](../../mental-models.md)
- [自动化对齐研究](../ai-research/automated-alignment-research.md) —— Alignment 层的自动化：AAR 如何用研究循环修复对齐失败
- [Agent 集体行为](agent-collective-behavior.md) —— 三层防护从单 Agent 扩展到多 Agent 生态的五层纵深防御
- [Research Acceleration](../ai-research/research-acceleration.md) —— Astra 安全事件的后续完整披露：compute 弹性替代与安全减速器的运营现实
- [Pacing the AI Frontier](../career-impact/pacing-ai-frontier.md) —— Defense in Depth 从单个系统的安全设计延伸到整个行业的治理结构
