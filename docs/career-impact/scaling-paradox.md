# Scaling Paradox：AI 越强，人机系统为什么可能反而更差

**核心概念**: AI 的 scaling law（规模越大能力越强）在人机协作系统里不自动成立——决定成败的不是 AI 有多强，而是人类对 AI 能力的感知准不准。而且"纠正感知偏差"本身也不总是好事，因为偏差有时候在无意中弥补了另一个看不见的结构性问题。

**学习来源**: Qi & Wang (2026), "The Scaling Paradox in Human-AI Collaboration", arXiv:2608.00818

📖 **完整学习对话记录**：[Scaling Paradox](../conversations/scaling-paradox.md)

---

## 原来我认为…… vs 现在我认为……

**原来认为**: AI 能力提升是纯粹的正向变量——模型越强、场景越好，人机协作系统的产出应该跟着单调上升；如果出问题，那一定是 AI 还不够强。

**现在认为**: 人机系统的表现是"AI 能力 × 人类感知准确度"的**乘积**，不是 AI 能力的单调函数。更关键的是，"感知准确"本身也不是一个可以无脑追求的目标——当员工的认知偏差恰好在抵消一个企业和员工之间结构性的成本/责任错位时，"纠正"这个偏差反而可能让企业利润下降。真正的问题从来不是单一变量，是几个互相牵制的系统同时在起作用。

---

## Scaling Paradox 的核心机制

人类对 AI 能力的感知分三种情况：

- **感知准确**：AI scaling 带来正向收益，符合直觉
- **Over-perception（高估）**：人类会过度撤出监督和努力投入，导致 AI 规模越大、系统实际表现反而可能下降，对企业利润的伤害还会被放大——这就是"scaling paradox"本身
- **Under-perception（低估）**：scaling 收益依然存在，但速度大幅放慢——人过度介入、不敢放手，浪费了 AI 的能力

**这个不对称性（over-perception 明显更危险）是全文的核心发现。**

### 为什么 90% 到 95%，反而可能让人更容易犯严重错误

这个反直觉现象背后是四层叠加的机制：

1. **信任不是线性的，是阈值跳变的**——90% 准确率时人的心态是"这家伙常出错，我得盯着"；95% 时可能直接跳到"这已经很靠谱了，可以放手"。监督强度撤出的幅度，往往远大于错误率下降的幅度（5 个百分点的进步，可能换来 50% 的监督撤出）
2. **错误的"分布"变了，不只是"数量"变了**——90% 时的错误五花八门，很多是明显荒谬、靠直觉就能抓住的；95% 时容易抓的错误已经被消灭，剩下的往往是逻辑自洽、格式专业、但关键判断出岔子的**隐蔽型错误**，恰恰是人类最难靠直觉发现的
3. **Vigilance Decrement（警觉衰退）**——航空自动化研究的经典发现：人类监控一个低频事件（很少出错的系统）的能力会随时间自然退化，AI 越可靠，人类维持警觉的心理成本越高、感知收益越低，最终干脆不监控了
4. **兜底机制专门用来抓大错，但大错变稀疏后兜底本身先松了**——人类审核的价值本来就在于挡住"严重错误"；当系统整体更可靠、人类因此撤出监督，原本该被挡住的极少数严重错误反而畅通无阻地流向下游——错误总数下降了，但穿透防线的错误的严重性上升了

放射科医生用 AI 辅助诊断的真实研究印证过这条曲线：AI 准确率越高，医生复核的仔细程度反而下降，最终在 AI 犯的那极少数错误上，医生的独立判断力已经被"训练"得跟着 AI 走了（这也叫 automation-induced complacency）。

---

## 两层信任框架：Trustworthiness vs Calibrated Trust

之前建立的[五维可信度框架](capability-to-trust.md)（可预测、可解释、可审计、可控制、可恢复）需要补上一个关键区分——它衡量的是"AI 值不值得信任"，回答的是完全不同于"用户实际信不信任"的问题，把两者混为一谈是范畴错误（category error）。

**最关键的论证**：五维框架可以全部满分，用户依然可能 over-trust。原因在于"可解释"这一维有个陷阱——流畅、自信、结构完整的解释，会让人类产生"这个系统真的懂"的错觉，而这个错觉和解释是否正确没有必然关系（XAI 研究里有实证：解释越漂亮，人类核查意愿反而越低，跟解释对不对无关，只跟"听起来专业"有关）。**"可解释"这一维如果设计不当，反而会主动喂养 miscalibration。**

修正后的完整三层模型：

```
Layer 1 — Actual Trustworthiness(task)（客观，任务相关）
  = Task Capability × Governance Quality
    Governance Quality = f(Predictable, Explainable, Auditable,
                             Controllable, Recoverable)

Layer 2 — Perceived Trustworthiness(task)（主观，人相关）
  = f(Observed Performance, Product Disclosure,
       User Expertise, Personal Experience, Social Narrative)

Layer 3 — Autonomy Granted(task)（自主权分配）
  = f(Perceived-Actual gap, Required Trust Margin(task))
    Required Trust Margin ∝ Consequence Severity × Irreversibility
                              × Verification Difficulty
```

几个关键设计取舍，都是从"看起来对但其实有漏洞"的早期版本改出来的：

- **Actual Trustworthiness 必须是"能力 × 治理"的乘积，不是加法**——治理质量是能力的乘数：高能力 × 零治理 = 危险；低能力 × 满分治理 = 可用但笨拙；只有两者都高，才是真正值得托付的系统
- **Perceived Trustworthiness 的输入里最容易被忽略的是"集体叙事"**——媒体报道、社交媒体梗、身边人口碑，往往权重最大，因为大多数第一次用新产品的用户根本没有"个人经验"可以校准
- **目标不该是"Perceived ≈ Actual"，而应该是不对称的**——因为 over-perception 比 under-perception 危险得多，理想状态是 `Perceived Trust ≤ Actual Trustworthiness`，且留出的安全余量要跟"任务后果严重度"成正比、跟"验证成本"成反比，而不是追求精确相等
- **信任是任务颗粒度的，不是一个全局标量**——同一个用户对同一个 AI 的不同任务，信任校准方向可能完全相反（比如对"写代码"over-trust，对"给建议"under-trust），只算一个全局平均分会掩盖最危险的那个子任务
- **Required Trust Margin 的三个变量必须同向**——Consequence Severity（后果严重度）和 Verification Difficulty（验证难度）都是"越高越危险"，第三个变量要用 **Irreversibility（不可逆性）**而不是 Reversibility（可逆性），否则乘出来的方向是反的

---

## 感知偏差的纠正不是普遍善

这是全文最反直觉、也最容易被早期版本框架忽略的一层。

企业和员工之间存在一个**跟感知偏差完全无关**的结构性错位：员工不承担 AI 部署成本（公司付钱），所以员工"理性"选择投入的精力，天然比企业希望的更少。这个错位在员工感知完全准确的情况下依然存在，是模型里的"基础病"。

而 under-perception（低估 AI）这个"认知偏差"，阴差阳错地纠正了这个基础病——员工因为低估 AI，本能地在每个项目上多花时间，这恰好是企业想要的方向。论文的精确发现是：

- **对员工个人**：不管高估还是低估，纠正感知永远是好事，符合直觉
- **对企业利润**：over-perception 被纠正后，利润总是上升，且效果随规模越大越强；但 **under-perception 被纠正后，利润可能反而下降**——而且不需要是极端情况，轻度低估就会出现这个反效果，只有低估严重到一定程度，纠正才重新对企业有利

一句话：对企业来说，"员工对 AI 有点怀疑"有时候不是 bug，是 feature——校准过头了反而伤利润。**"让用户认知更准确"不是普遍善，得先看清楚这个"不准确"是不是恰好在补偿另一个跟感知无关的结构性问题。**

---

## Junior/Senior 断层与 succession planning

这是论文之外、延伸出来的一段讨论，但和整个 scaling paradox 是同一种结构性陷阱。

**第一层：企业不招 Junior 的隐藏成本**——Junior 岗位从来不只是"干活"，是组织的人才熔炉：一个 Senior 之所以是 Senior，是因为他做过几千个 Junior 级别的判断、犯过几百个可控范围内的错，在实践中长出了判断力。这条路径一旦被切断，五到十年后会出现大量"名义上的 Senior"，但从没真正练过基本功——这是典型的公地悲剧：对单个公司理性，对整个行业是长期灾难。

**第二层：AI 能不能自己 self-learn 填补这个坑？分两种领域，答案完全不同**：

| 领域类型 | 例子 | AI 能否自我进化 | 为什么 |
|---|---|---|---|
| 可验证领域（Verifiable） | 数学、代码（有单元测试）、棋类 | 能，而且很强 | 对错有客观、便宜、即时的验证方式，AI 自己生成尝试、环境给出真实反馈，不需要人类新手参与 |
| 判断领域（Judgment） | 法律策略、复杂诊断、组织决策、危机公关 | 不能，或极慢极不可靠 | 这类知识历史上靠无数 Junior 在真实、具体、有后果的情境里做判断、承担后果、被纠正而产生，AI 没有真正落在自己身上的"后果" |

讽刺的是：AI 最先、最彻底接管的正是判断领域里"练手感"的那部分（初级律师看合同、初级医生看片子）——AI 拿走的正是历史上生成新判断力最主要的那个训练场。

**第三层：即便 AI 学会了判断，它也接不了"责任"这一棒**——Succession 不只是技能传承，还有责任传承（accountability transfer）。一个 Senior 签字、一个主治医生下诊断，核心价值不只是"判断对不对"，而是有一个真实的人为这个判断承担责任。AI 现在及可预见的未来都无法真正"承担责任"，这意味着社会结构依然需要一批"有资格签字负责"的人类专家，而这批人只能从真正判断过、犯过错、被追责过的经历里长出来。

三个可能的出路，但没有一个容易：**人为设计"练习场"**（让 Junior 先自己判断、AI 后验证，顺序反过来，哪怕慢一点）；**重新定义"验证型专业岗位"的价值**（专门培养"能一眼看穿 AI 隐蔽错误"的能力）；**接受这是可能无解的代际断层，为过渡期做准备**（某些关键领域可能需要监管强制人类独立练习到某个门槛，买的是社会韧性而不是短期效率）。

---

## 对抗 Automation Complacency 的五个产品设计机制

把前面所有概念落到具体的产品设计上：

1. **故意保留"验证摩擦"，且摩擦强度跟着风险走**——低风险任务尽量丝滑，高风险、不可逆、有社会后果的操作故意增加一步"停顿"，逼用户做一次真实判断，而不是无脑点确认
2. **反过来先问用户，再给答案**——AI 给出建议之前，先让用户自己下一次判断（哪怕只是"你觉得该怎么办？"），再展示 AI 的建议做对比。既保留了"练习场"，又是一种免费的校准探针
3. **主动暴露不确定性，而且要暴露得"不舒服"**——AI 的自信程度展示必须和真实可靠度成正比，而不是和表达能力成正比；低置信度的输出不该用完整句子、专业排版包装成看起来权威的样子
4. **定期"亮错"，而不是只等用户自己撞见**——被动等用户自己发现错误，频率太低不足以维持警觉；主动周期性展示"AI 曾经在这类任务上犯过的真实错误案例"，对抗 availability heuristic（可得性偏差）
5. **把"合理依赖率"做成用户能看到的反馈**——不只是后台指标，部分反馈给用户本人（比如"这个月你在 3 次 AI 低置信度建议时自己核实、发现确实错了，做得很好"），强化用户"我在认真监督"的自我认知，这是维持长期警觉性的心理燃料

这五个机制背后是同一个原则：automation complacency 的根源是"监督行为得不到即时、清晰的价值感反馈，而放松监督却毫无察觉的代价"——对抗它不是靠"让用户更谨慎"的说教，是重新设计反馈结构，让谨慎这件事本身变得可感知、可验证、有回报。

### 怎么测量"用户到底有多信任 AI"

不问用户"你信任 AI 吗"（自我报告不准），而是看行为——**Appropriate Reliance Rate（合理依赖率）**：交叉"AI 这次对不对"和"用户听没听"，AI对+用户听、AI错+用户没听，这两格是校准良好；AI错+用户听了，是最危险的一格（真正的事故来源）。这个指标的最大好处是完全不需要用户自我报告，纯靠后台日志就能算，而且可以按任务类型分开算（因为信任是任务颗粒度的，不是一个全局分数）。

这个方法也有一个结构性盲区：只能测"听了之后对不对"，测不出"没听的那次其实 AI 是对的"——这类反事实数据永远缺失（verification bias / selective labels problem），是当前所有行为倒推法共同的天花板。

---

## 和以前哪些知识连接起来了？

- 直接延伸自[从"最聪明"到"最可信"](capability-to-trust.md)——五维可信度框架被升级成两层模型：Layer 1 是系统属性（五维决定 Governance Quality，再乘以 Task Capability 得到 Actual Trustworthiness），Layer 2 是人类感知（Perceived Trustworthiness），两者的差距决定该给多大自主权
- 和 [Domain Expertise 与组织变革](domain-expertise-and-org-design.md) 连成一条线——AI 接管的正是传统上用来"练手感"的基础工作，可验证领域 AI 能自我进化，但判断类领域历史上依赖人类在真实后果中试错积累，这条路径正在被切断
- 呼应了 [Coding Agent 与 Agent 基础设施](agent-infrastructure-os.md) 里"企业侧卡在 Trust"的讨论——这次给出了 Trust 和 Trustworthiness 的精确区分，以及为什么"提升信任度"本身可能是个有毒的产品 KPI

---

## 仍然没弄懂的问题

1. Perceived Trustworthiness 目前最可行的测量方法（行为倒推法）有结构性盲区——只能测"听了之后对不对"，测不出反事实信息，这个盲区在实际产品埋点里怎么部分弥补，还没有答案
2. 论文是分析性模型（analytical model），给出的是定性规律和参数化证明，不是实证数据——文中的落地建议都是在这个理论骨架上的应用推演，还需要找实证研究交叉验证
3. Junior/Senior 断层、AI self-learn 能不能填补人才培养缺口，只开了个头，还没深聊透

---

## 下一步

- 📖 完整对话记录：[Scaling Paradox](../conversations/scaling-paradox.md)
- 🤝 想看可信度框架的第一版，看 [从"最聪明"到"最可信"](capability-to-trust.md)
- 💼 想看 Domain Expertise 和职业断层的完整讨论，看 [Domain Expertise 与组织变革](domain-expertise-and-org-design.md)

---

**最后更新**: August 8, 2026
**数据来源**: Qi & Wang (2026), "The Scaling Paradox in Human-AI Collaboration", arXiv:2608.00818

**相关**:
- [从"最聪明"到"最可信"](capability-to-trust.md)
- [Domain Expertise 与组织变革](domain-expertise-and-org-design.md)
- [Coding Agent 与 Agent 基础设施](agent-infrastructure-os.md)
- [心智模型变迁史：Capability → Capability × Calibration](../../mental-models.md)
- [Harness > Model](../ai-application/harness-architecture-patterns.md) —— over-perception 本质就是把 claimed state 当 verified state，MEA 是架构级解法
- [第一次测试一个 AI 产品](first-agent-test-muse-spark.md) —— Trust Gap（Perceived > Actual）在真实测试中的现场演示
- [Agent 集体行为](../ai-core/agent-collective-behavior.md) —— over-perception 在集体行为中被放大：高估控制力 + scaling = 更难监控的涌现
