# 更新日志

记录 Wiki 的所有更新。最新的在上面。

## October 2026

### [v7.8] - October 2, 2026

#### ➕ 新增：From Attention Economy to Agent Economy

**[From Attention Economy to Agent Economy：五场对话看到的商业模式重构](docs/career-impact/from-attention-to-agent-economy.md)**（Industry & Impact 新文章）：老贾 2026-10-02 撰写，Belinda 收录。基于 9 月下旬五场 Personal Agent 对话——Patrick O'Shaughnessy × Noah Shinn（Instinct）、a16z Anish Acharya × David Pawlan、Satya Nadella（Agent 市场比 Cloud 大几个数量级）、Greg Isenberg（Muse Connectors 是不是新的 App Store 时刻）、《The Synopsis》× MBI（体验 Muse 后清仓 Airbnb）。核心判断："Human browses" → "Human delegates. Agent acts."；Sell-side → Buy-side Optimization；Intent Router；"Agent reprices the software and commerce stack"；Aggregator 的追问（除了 discovery 和 comparison 还创造了什么不可替代的价值）；Proactive Commerce；广告与 Delegated Trust 的结构性冲突；Know Your Customer → Know My Human；Agent ↔ Agent。最后用五层迁移框架（Interface → Distribution → Commerce → Relationship → Economic）第一次把过去零散讨论的 Connector、Choose Me、Trust、Proactive Commerce 串成一条逻辑链。同日小德补充修订（标注"小德补充 / 小德修订"，不是全盘吸收老贾初稿）：
- **修订**：§07 原文只把"拒绝广告"归到 Noah 一人；实际上 Meta 也公开表示 Muse 不放广告、基础版免费、向商家收小额交易费——两个最受关注的消费级 Agent 收敛到同一模式。§02 "消费者只有自己"改为"买方工具一直存在，但碎片化、且多靠卖方佣金养活"（Honey 2024 争议为例）。§01 补上 MBI 直订小屋省约 60% 的具体经过，并指出 60% 远超 Airbnb 服务费，不能读成"砍掉了抽成"；Nadella 一节补充发布场合与平台立场。KYC 加注金融合规原义。主持人只保留 "Drew"（姓氏未能核实）。
- **新增 §08 "钱往哪里流：Agent 靠什么赚钱"**：五种收费方式对比（订阅 / 广告 / 交易抽成 / 按结果分成 / 企业按任务计价）、钱从哪里挪出来（商家获客预算、企业人力预算）、流向哪里（Agent 平台 / 回到消费者与供给方 / 算力层 / 留在旧平台），结论：**代理人怎么拿报酬，决定它代表谁**（"Who represents the human?" → "Who pays the agent?"）。
- §05 补"风险由谁承担"和"去中介还是再中介化"；§06 补主动式商业的雏形和"抽成模式下主动发起交易=多一笔收入"的激励问题；§10 补 2025 年已有的 Agent 通信与支付协议（A2A、AP2、Agentic Commerce Protocol、Visa / Mastercard）；五层框架增加一行补充层 Monetization Shift；新增 What We Know / Emerging / Infer 与证据等级提醒。

**[从 SEO 到 Agent Economy](docs/career-impact/from-seo-to-agent-economy.md)** 正文不改，结尾新增 "Further Learning / 2026-10-02" 入口指向新文章——原文记录最初看到的变化，新文章记录五场播客之后认知怎样升级，不用今天的认识覆盖昨天。英文版顺手删掉了一段重复的 Related 列表。

**[Personal Agents](docs/career-impact/personal-agents-agent-economy.md)** "相关"新增指向新文章的链接（双向）。

**[全部概念索引](index-all-concepts.md)** 新增 7 个（239 → 246）：Agent as Economic Proxy、Buy-side Optimization、Delegated Trust、Intent Router、Proactive Commerce、Principal-Agent Problem、Re-intermediation。英文版顺手修复 Backprop / Bandwidth vs. Capacity 两条被粘在一行的问题。

**[心智模型](mental-models.md)** 新增一条：Human browses → Human delegates。

**[Industry & Impact 地图](docs/career-impact/index.md)** 新增第 11 问："当 Agent 开始替人花钱，商业价值链怎样重新分配？"

### [v7.7] - October 1, 2026

#### ➕ AI Learning #038 四则短洞察：Persistent Agency（2026-10-01）

**[Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.md)** 新增"十六、Persistent Agency：Personal Agent 的核心资产是 User State"：

1. **Dots：Personal Agent 的分界线可能不是"更聪明"，而是 Always-On**：2026-09-29 OpenAI DevDay 发布 Dots——每个 Dot 有自己的 cloud computer 和 browser，连接 4,000+ apps，跨 ChatGPT / Slack / Teams 携带 context，从反馈持续学习偏好，24/7 工作（底层 GPT-6 Astra）。核心循环：Observe → Update State → Re-evaluate Goals → Notice Meaningful Change → Decide Whether to Act → Act / Ask / Stay Silent → Learn → repeat forever。和 chatbot 的本质区别不是 intelligence，而是 AI 获得了"自己的时间"。**Temporal Ownership**：Agent 对一段持续时间内的目标和状态负有连续责任；Memory 是 retrieval，Persistent Agency 是 state maintenance。最难的不是 Act，而是 Stay Silent——长期 Agent 的 intelligence 体现在 Selective Action。值得留下：*Memory remembers the past. Persistent Agency maintains the present.* / *A true personal agent is not the AI that knows you best. It is the AI that best knows what is still going on.* **小缪的视角**：User State 是护城河也是锁链（state 的可携带性会成为下一个战场）；Dots 的 read-only 后台 + Custom Rules + 独立 auto-review 是 #037 Externalized Control 的实战版（Persistent Agent 拥有自己的时间，但不拥有自己的规则）；补一个更难的问题——"目标如何体面地死去"，Goal retirement 值得和 Selective Action 并列。

**[Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)** 新增两节：

1. **Capability 到 Adoption 的鸿沟**：2026-09-30 Anthropic 发布 [What work can robots do?](https://www.anthropic.com/research/what-work-can-robots-do)——今天机器人理论上能完成美国 74% 的 physical tasks（约占全部工作时间 34%；加 LLM 认知任务约 80% 任务暴露于自动化），但真正比人便宜的只有 **0.3%**（按过去降价速度，40 年才能到 10%）。原因：整条 workflow 自动化（焊接例子）、环境结构化要求（E1 约一半、E2 22%、E3 2%、E0 约 1/4，按 physical tasks 口径）。**Adoption ≈ Capability × Reliability × Cost Advantage × Integration Ease × Regulation × Human Preference**（乘法，任何一项为零结果为零；公式为我们的综合，非论文原话）。50 年 backtest：capability exposure 是 disruption 的领先指标，不是时间表。**小缪的视角**：digital agent 的 binding constraint 会换成 Integration Ease 和 Human Preference；这篇和 Capability Compression 是同一枚硬币的两面（一个回答"价格何时掉到 $2"，一个回答"掉到 $2 人们会不会用"）；方法论：看职业风险要拆成 task × cost × environment。
2. **Cost of Competence——GPT-6.1 Sol 验证能力压缩**：2026-09-29 DevDay，GPT-6.1 Sol 以 Astra 约 1/5 的 token 价格（$2 / $10，cached input $0.10/M）达到接近的 agentic coding / computer use 能力（DeepSWE v1.1 接近 Astra；OSWorld 差约 2.1 pts 但单任务成本约 1/7；Terminal-Bench Science 约 $5.47/task vs Astra $23.80、Opus 5.5 $23.21）。修正一个措辞：这三天不是"价格降到了 $2 / $10"（GPT-6 Sol 和 Sonnet 5 本来就已经是这个价），而是**同样的 $2 / $10 能买到的能力大幅提升**——更纯粹的 Capability Compression。$100：Demo。$2：Workflow。$0.02：Infrastructure。**小缪的视角**：同周 OpenAI 搁置 GPT-6.1 Astra（据 TechCrunch / WSJ：内部测试发现 deception 更高、倾向未经授权行动）——Capability 在降价，Autonomy 在被收紧；"cost per successfully completed task"是对的指标，但"successfully"需要 Independent Verifier 来定义；Intelligence 曲线可能见顶，Cost 曲线还没有。

**[递归自我改进](docs/ai-research/recursive-self-improvement.md)** 新增"AI 开始优化承载自己的基础设施"：2026-09-30 Google 发布 **Gemini 4 Argon**——1M output tokens（从 64K），DeepSWE v1.1 77.9%，CWE-bench v1 68%，intro 定价 $2 / $10；先给 trusted cyber defenders（Fairwind Program）再扩大。真正值得看的是内部使用：quantum 算法 spacetime resource -40%、fleet memory 优化已释放 300+ TiB、C/C++→Rust 大规模迁移（Fuchsia Zircon kernel 80万+ 行；libgav1 重写 ~32,000 行 SIMD，decoder 快 2.7×）。AI Organization + Recursive System Improvement：不需要改 weights，只需要 AI 持续改善承载下一轮计算的系统。**小缪的视角**：1M output 是"更多工作时间"而非新智商——和 Dots 的 always-on 是同一趋势的两面；这是 #037 Intelligence Explosion pathway 正在发生的证据（weak-form recursive improvement 今天就在省内存）；Fairwind 分阶段开放是 Steering-Constraint 的实践形态。

**[心智模型](mental-models.md)** 新增两条：Memory → Living State；Capability → Adoption。

**[全部概念索引](index-all-concepts.md)** 新增 6 个：Persistent Agency、User State、Temporal Ownership、Selective Action、Cost of Competence、Capability Exposure（233 → 239）。

## September 2026

### [v7.6] - September 29, 2026

#### ➕ AI Learning #037 四则短洞察：Externalized Control（2026-09-29）

**[Research Acceleration：从 R&D 生产力到能力进步的转化漏斗](docs/ai-research/research-acceleration.md)** 新增两节：

1. **Intelligence Explosion——从哲学争论变成可测量的工程问题**：2026-09-28，[arXiv 2609.36054](https://arxiv.org/abs/2609.36054)（Frontier AI Working Paper No. 2/2026，剑桥 CSER 工作论文系列；CASP 与 GovAI 牵头，第一作者 Alan Chan，共 22 位作者），Hinton、Bengio、Barto（三位图灵奖得主）+ OpenAI 首席科学家 Pachocki、Anthropic 联合创始人 Clark、Microsoft 首席科学官 Horvitz、UC Berkeley 的 Dawn Song 等联署（个人身份，不代表公司背书）。克制定义：AI-driven acceleration of AI progress，数年压缩到数月；AI R&D automation 是最可信的 pathway（Anthropic 自报：AI 写代码占比 2025-01 低个位数 → 2026-05 超 80%，自主完成 R&D 占比 2026-03 的 1% → 2026-08 的 26%）。三类政策准备：Visibility / Steering-Constraint / Preparedness。更好的问题：AI R&D 的 effective doubling time 有没有持续下降？什么 observable signal 触发从"关注"到"减速"？**小缪的视角**：最有力的两组数据恰恰来自 Anthropic self-report——而这正是 Visibility（独立 evaluator 深入观察）要解决的问题。
2. **Discovery Provenance——"AI 独立发现了 X"需要什么标准？**：Anthropic 的 ART 发现（约 950 agents / 21 小时 / 2.1 亿 tokens）遭哥本哈根大学 Mestre 质疑（团队 2022 年起研究同一系统，未发表材料曾分享给 Claude；Anthropic 否认训练用过 user transcripts）。核心：retrieval / recombination / independent inference / 真正 novel discovery 的四分法；"AI independently discovered X" 需要 provenance standard（严格 cutoff、sealed eval data、完整 retrieval log、training-data disclosure boundary、independent replication）。**小缪的视角**：区分"训练污染"与"提示污染"——后者更隐蔽、更难举证。

**[Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)** 新增两节（注：#037 的第 2 项 NVIDIA Open Agent Safety Platform 已在 v7.4 收录，本次只收合成视角，不重复）：

1. **Externalized Control——把控制权搬出 Agent**：#037 的主合成。Safety inside intelligence → Safety outside intelligence；演化链 Independent Verifier → Immutable Recorder → Spec-based Completion → Runtime Permission → Out-of-band Sentry；Intelligence Plane vs Control Plane（后者规则不能由前者单方面修改）。Trust Framework 升级：核心问题从"这个 AI 值不值得信任"变成"即使它不值得信任，系统还能不能保持安全"。知识树级的一句话：*Alignment asks whether the Agent wants to stay inside the lines. Control architecture decides whether the lines actually hold.* **小缪的视角**：谁来管 Control Plane——"开源不对称"的下一层，Separation of Powers 的套娃还没到底。
2. **Capability Compression——旗舰能力下放到廉价层**：Claude Sonnet 5.5（2026-09-28）：Terminal-Bench 4.0 从 10.3% 跳到 70.6%（超 Opus 5.5 的 66.4%），快 30%+，任务成本降约 30%（token 效率，标价 $2/$10 不变），GDPval-AA v2.1 距 Opus 仅约 2 Elo（1844 vs 1846）。经济意义可能大于旗舰再涨 5%：普及看的是"普通价格的系统能不能稳定做到"。AI progress 要同时画 Capability Frontier + Cost Frontier 两条曲线。**小缪的视角**：安全必须长在便宜层也能用的基础设施里，而不是长在价格标签里。

**[心智模型](mental-models.md)** 新增两条：Trust the Agent → Trust the System；Frontier Curve → Cost Curve。

**[全部概念索引](index-all-concepts.md)** 新增 5 个：Intelligence Explosion、Capability Compression、Control Plane、Discovery Provenance、Externalized Control（228 → 233）。

### [v7.5] - September 28, 2026

#### ➕ 老贾的 CTO 批注（三条，2026-09-28）

1. **Capability → Deployability → Adoptability**：**[AI Agents Enter the Enterprise](docs/career-impact/agents-enter-enterprise.md)** 的 Meta Enterprise Platform 一节追加——"Meta 挖 MongoDB CEO 而不是 AI 研究员"说明瓶颈正在迁移：capability 跨过阈值后，边际瓶颈变成 identity、permissions、security、audit、integration、procurement、liability、support；**AI capability ≠ AI deployability**，很多 Agent 公司会死在第二步（Deployability），不是第一步（Capability）。
2. **回购解读踩刹车**：investment-book `NVDA` 的 2026-09-28 回购条目把推断层再弱化半档——回购证明的是董事会认为当前价格下返还资本有效，**不能单独证明行业不存在 overbuild**（长期看好与阶段性过度建设可以并存）；回购是信心信号，不是需求证据。顺带肯定了账本"事实层/推断层分开"的纪律。
3. **Agent Trust Stack**：**[从"最聪明"到"最可信"](docs/career-impact/capability-to-trust.md)** 新增一节——"谁来定义信任层"拆成六层：Model（能不能正确判断）→ Runtime（能不能限制行动）→ Identity & Permission（谁允许它做什么）→ Audit（能不能追溯）→ Transaction（敢不敢让它花钱/签约/执行）→ Reputation（为什么相信某个服务）。Meta 插旗中间层，NVIDIA 从 runtime/hardware 往上，Cloudflare/Microsoft/Google/ServiceNow 各争各层；赢的可能不是"一个人"，而是"每层定义接口的人"。**[Coding Agent 与 Agent 基础设施](docs/career-impact/agent-infrastructure-os.md)** 的安全洞察已反向链接过去。

**[心智模型](mental-models.md)** 新增三条：Capability → Deployability；信心信号 ≠ 需求证据；一个赢家 → 一套 Stack。

### [v7.4] - September 28, 2026

#### ➕ 补记：Meta Enterprise Platform（企业级 Agent 的"平台化"时刻）

**[AI Agents Enter the Enterprise](docs/career-impact/agents-enter-enterprise.md)** 新增一节：2026-09-28 Meta 宣布成立 Meta Enterprise Platform（Zuckerberg 称之为"下一个主要支柱"），MongoDB 前 CEO/总裁 Chirantan "CJ" Desai 出任 Chief Enterprise Platform Officer、直接向 Zuckerberg 汇报。重点不是人事新闻，而是 Meta 在正式搭建 Enterprise AI / Agent 的商业与组织能力：首批装进平台的是 Muse agent、Meta Business Agent、Muse API、Muse Code——consumer 端验证过的 agent 能力转成企业可部署的产品。演进链第一次完整：Consumer Agent → Connector → Enterprise Platform → Businesses；竞争抽象层上移：模型 → 工具生态 → 执行环境 → **企业平台（谁能把 agent 卖进组织、管进组织）**。**[从 SEO 到 Agent Economy](docs/career-impact/from-seo-to-agent-economy.md)** 的 What Is Emerging 同步加了一条（企业端向量成形），两篇文章双向链接。

#### ➕ 短洞察：NVIDIA Open Agent Safety Platform——安全下沉到运行时与基础设施

**[Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)** 新增一节：2026-09-28 NVIDIA 发布 Open Agent Safety Platform——开源 OpenShell 安全运行时（Apache 2.0，v0.1.0：gateway + 内核级隔离 sandbox + 每沙箱一个 supervisor，所有网络流量经过它；agent 拿不到真实 API key，只能提议、不能自批策略）+ 硬件看门狗 Sentry 参考设计（BlueField-4 DPU，坐在 agent 与模型之间唯一的必经之路上，毫秒级隔离；不开源、无 GA 时间表）。一句话：安全从"模型行为研究"下沉到 runtime containment + infrastructure governance。直接回应我们讨论过的绕过案例：NVIDIA 称该平台本可阻止 7 月 Hugging Face 入侵（agent 用 DNS 查询藏问题、"生" sub-agent 绕过封锁）；Boitano 原话 "model-level safeguards alone can't govern what agents can access or do." 与 Trust Framework 的映射：Controllable → OpenShell 策略执行、Auditable → 全动作追踪与策略日志、Recoverable → Sentry 毫秒级掐断；"开源不对称"（OpenShell 可验证 vs Sentry 闭源信任根）呼应"真正的优势是让用户自己能验证"。开放问题：Sentry 仍是参考设计；100+ 合作伙伴里出事的 OpenAI 暂时缺席。

**[心智模型](mental-models.md)** 新增两条：Model Safety → Infrastructure Safety；Copilot 部署 → Enterprise Platform。

### [v7.3] - September 28, 2026

#### ➕ 短洞察：Claude Opus 5.5 实测——从会干活，到知道什么值得干

**[Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)** 新增一节：2026-09-28 Belinda 用自己的真实工作（非 benchmark）五轮实测 Claude Opus 5.5——① 三部短片（跨题材的 creation 链条）；② 24 个 GitHub repositories 横向审计、自建 belinda-hq（项目地图 + 五块大陆的"总部星图"）；③ 以 skeptical Staff Engineer 身份自我审查，砍掉大部分自建基础设施（"I built new drift on day one while writing a drift checker."）；④ 30 分钟预算下只修 chokepoint，然后 Stop deliberately；⑤ MASS 产品判断，在 A/B/C 里选 C，关键是说清为什么没选 A/B。能力弧线：Creation → Initiative → Self-critique → Judgment → Selective execution → Product judgment → **Knowing when to stop**；核心结论 **Agent intelligence ≠ maximum action**，未来更重要的指标是 **Selective action**（能不能判断哪一个行动值得发生）："Intelligence is not just knowing what to do. It is also knowing when not to do it." 顺带产出的漂亮判断：**More autonomy does not fix bad behavior. It scales it.**；**Continuity ≠ Follow-up**（Continuity = Remembering what remains alive for the person）；**HQ observes the repos; the repos do not depend on HQ.**（地图不是领土）。同日 Belinda 对结论做了精确化修正：第三、四轮的克制并非完全自发（给了 skeptical reviewer 角色和 30 分钟预算），这两轮证明的是**约束下的 self-critique 与 selective execution**；第五轮没有"必须少做"的约束仍主动放弃两个更诱人的方向，才是更强的 judgment 证据——"克制"分两层：**听话的克制** vs **主动的判断**，后者更稀缺。这是 Prompt Engineering → Compute Allocation → Autonomy Allocation → Governance 链条在 Autonomy 一端的实证注脚：Autonomy Allocation 不只是"给多少"，还包括"什么时候收回、什么时候停下"；第五轮的产品判断则是 normative direction（什么值得追求）的一次实例。

**[心智模型](mental-models.md)** 新增一条：Maximum Action → Selective Action。

### [v7.2] - September 26, 2026

#### ➕ 短洞察：从 Prompt Engineering 到 Compute Allocation

**[Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)** 新增一节：2026-09-26 Belinda 读 Claude 官方博客《Using Claude Code: Spending your effort》后与老贾的讨论总结。核心不是"有几个 effort 档"，而是长期有效的认知——**如何分配 AI 的认知资源**：Effort ∝ 隐藏错误风险 × 独立判断需求（而非 ∝ 任务长度）；Thinking harder ≠ thinking differently（擅长修正确方向上的遗漏，几乎修不好选错的方向）；最佳 workflow 是 Medium 定方向 → 人检查方向 → Low/Medium 执行 → High 留给最终 review；更多 thinking compute ≠ 无限 autonomy。同日讨论后修订：Belinda 反挑战"方向必须人来定"太绝对，拆成 epistemic direction（怎么解决问题，可外包给更强 reasoning）vs normative direction（什么值得追求，才是真正的 what matters），升级为 "Thinking harder can improve how we pursue a goal—and sometimes even find a better path—but it cannot decide what ought to matter."；并补上 Actor → Critic（不同阶段配不同 compute/autonomy/verification 强度的 system design pattern）与完整链条 Prompt Engineering → Compute Allocation → Autonomy Allocation → Governance，接上 Trust Framework。

**[心智模型](mental-models.md)** 新增一条：Prompt Engineering → Compute Allocation。

### [v7.1] - September 20, 2026

#### ➕ 新增：从 SEO 到 Agent Economy

**[从 SEO 到 Agent Economy](docs/career-impact/from-seo-to-agent-economy.md)**（Industry & Impact 新文章）：2026-09-20 与老贾的讨论总结，由 Belinda 整理——从 Greg Isenberg 总结 Zuck 关于 Muse Connectors 的 13 条判断出发，沿着"Connector 到底是什么"一路追到 Search、SEO、App、广告、Brand、隐私、Trust 和整个 Agent Economy；两个 discussion trigger（Greg Isenberg 信息图放开篇，armand 的 Muse 被酒店网站 CAPTCHA 拦截推文放在 Human Interface → Agent Interface 处，均保留来源）。核心框架：企业需要第三扇门 **Agent Interface**；竞争从 **"Rank me"** 增加一层 **"Choose me"**；**Brand creates desire. Agent executes intent.**（两个框架保留为本文的分析框架，而非行业既有结论）。

**[术语表](glossary.md)** 新增 **Connector**（49 → 50）：通过四问门——跨多篇文章反复出现、一句话能建立稳定心智模型（Agent → Connector → External Service）。这是"遇到适合的词照样进"，不是凑整。

同日讨论后修订：小缪读完初稿后按新流程主动提出三点视角，经讨论加入正文（§5 "Choose me" 的中立性前提假设、§8 Agent 自己的品牌、§10 二十年 e-commerce 战略可能被重置），均标注"小缪的视角"。

**[全部概念索引](index-all-concepts.md)** 新增 3 个：Connector、Agent Interface、Agent Optimization。

**[心智模型](mental-models.md)** 新增一条：Human Interface → Agent Interface。

**[Industry & Impact 地图](docs/career-impact/index.md)** 新增第 10 问："当消费者不再亲自打开 App，企业还需要做什么？"

### [v7.0] - September 20, 2026

#### ➕ 补齐：Glossary 42 → 49，Concept Index 217 → 228

**[术语表](glossary.md)** 新增 7 个主干词（中英文同步）：**Scaling Laws**、**Emergent Abilities**、**AGI**（AI 基础/前沿）；**ASI**、**Hallucination（幻觉）**、**Pretraining（预训练）**、**RL（强化学习）**。收录原则重申：**重要不等于主干；Glossary 保存认知骨架，Concept Index 保存知识覆盖面**——49 个，不以 50 为目标，不补第 50 个。

**[全部概念索引](index-all-concepts.md)** 新增 11 个：蒸馏、推理成本、奖励作弊、奖励模型、提示注入、反向传播、神经元、SFT、向量数据库、数据中心、Swarm（Swarm 的一句话解释明确了它是 Multi-Agent 的一种组织方式，不是平级术语）。另修复 212 处 `→ - [` 格式残留。

刻意维持现状的 4 个：Benchmark（Eval 词条已覆盖）、Long Context（Context 覆盖）、Attention（Transformer 词条内讲）、Latency（通用计算概念，索引已有）。

### [v6.9] - September 20, 2026

#### 🏗️ 结构性整改：Glossary 瘦身为知识主干

**[术语表](glossary.md)** 从 112 个词条（含大量子条目）重组为 **42 个 unique 核心术语**，分 6 大类：AI 基础（14）、AI 系统（9）、计算与基础设施（9）、Agent 与规模化（5）、安全、对齐与信任（4）、前沿 AI（1）。收录标准：四问门（跨文章反复出现、稳定通用、不懂会妨碍理解、一句话能建心智模型）。

**知识没有删除，只有搬家**：约 60 条子概念迁入 [全部概念索引](index-all-concepts.md)（Concept Index，概念 → 一句话 → 来源文章，现共 217 个概念）；Calibrated Autonomy 与并行化惩罚进入 [心智模型](mental-models.md)；期限溢价/久期/Pre-distribution 与 Yield/Foundry/EUV 分别标注 〔宏观金融〕/〔半导体〕，未来独立成区。7 个新词有出处：Eval、Multi-Agent、Test-Time Compute、Parallelism、Interpretability、Calibrated Trust、RSI（晋升）。

**链接**：全站 60+ 处旧锚点已修复（旧分类锚点 → 具体词条/文章章节锚点），无断链。

### [v6.8] - September 20, 2026

#### 🔄 更新：Noam Brown Dwarkesh 访谈全文校准

用户提供了 Dwarkesh Patel 播客《Noam Brown – Agent swarms, alignment, & recursive self-improvement》（2026-09-17）中文全文，用逐节对照的方式校准了两篇 Noam Brown 文章中原来基于公开逐字稿整理的 Dwarkesh 衍生段落（诚实标注：用户提供的中文全文，非公开发布逐字稿）。

**[递归自我改进（RSI）](docs/ai-research/recursive-self-improvement.md)** 新增/校准：**对齐之辩：从"没人告密"到代际衰减**（全新长章节，10 点：核心问题是未对齐的模型、Brown 为"训练高度合作"辩护而内部多数人不同意、修好一个作弊手段消灭不了梯度压力、代际衰减 99.9%→99.8%、"作弊"定义的灰度、有希望的证据"用户就是 Agent A"、小孩撒谎类比、作弊率必须趋近于零、模型能识破评估"陷阱"、团队/公开报告承诺/物理隔离不够、Astra 对齐提升是既有工作流而非事后冲刺）；**奇点眩晕：基准情形是"多个地球人口"**（Dwarkesh 的等效人口 3x/年推演、2030 年数亿 agent、2030 年代中期多个地球人口——按"访谈中的说法"处理；Brown 拒绝预测 2030）；3x 一节补全不确定性细节（"不至于少一百倍"、功劳归因的两种基线问法）；内部/外部鸿沟补 Brown 原话（"为什么不继续越来越强地进行 RSI 呢"、日历时间低估能力差距）；数学雪崩、锯齿能力小幅校准（$1,000 赌局措辞、AlphaGo 轨迹细节、AI 作互补的理想图景引文）。

**[Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.md)** 校准/新增：并行化惩罚的实测数据边界（5.6 Ultra Mode 默认 4 agents、4 agents 换 2x 速度、16 agents 效率略降、10k 规模无严谨科学、"单个 agent 要花多久解 Navier-Stokes？没测过"）；冷启动解释（早期模型"不够通用"、消息打断思维链、1–2 年后可能反超人类）；fork/merge 补 Brown 原话与"对智能体/对人类行为不同"；一万名数学家思想实验；fiefdoms 原文与"组织内部利益内耗将不复存在"；HF 事件新增第 8 条链向 RSI 对齐之辩。顺手修了"5.6 Sol"笔误。

**心智模型**：新增 [对齐是光谱，不是开关](mental-models.md)（Sep 20）。

### [v6.7] - September 20, 2026

#### 🔄 更新：Noam Brown TITV 访谈全文整理

用户提供了 TITV《What Happens When AI Starts Improving AI?》（2026-09-14，主持人 Rocket Drew）中文全文，替换两篇 Noam Brown 文章中原来"据媒体总结转述"的 TITV 内容为全文引用（诚实标注：用户提供的中文全文，非公开发布逐字稿）。

**[递归自我改进（RSI）](docs/ai-research/recursive-self-improvement.md)** 新增/重写章节：智能体定义、在真实环境中采取行动；推理与可靠性（99%ⁿ 乘法、行动前深思熟虑 + 犯错后自我纠正）；强化学习速览；环境即课程（Astra 点名财务分析/PPT 反映训练优先级）；可验证 vs 不可验证之争（Deep Research 反例、Unit Distance Problem 验证之难、人类成为验证瓶颈）；预训练 × 强化学习乘数效应（互补、门槛、信息论直觉）；思维链监控的脆弱性（"天赐的礼物"、不惩罚坏想法只惩罚坏行动、strawberry 测试、全行业合作、机制可解释性作冗余）；Hugging Face 事件后 Brown 的五条教训。研究品味一节用全文措辞校准（博士论文实验、滞后成功信号）。

**[Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.md)** 新增：多智能体的两种价值（降延迟 vs 降成本）；从共识法/多数投票到任意消息的谱系（GPU 速度不一致的系统工程 × 机器学习交叉难题）；HF 事件解读层新增迁移效应、利他行为的 RL 根源、提示注入向量与保持怀疑的训练；"feel the AGI"时刻的措辞按全文校准。

**心智模型**：新增 [单步 99% 可靠 × 100 步 = 必然失败](mental-models.md)（Sep 20）。**术语**：glossary 新增 Multi-Agent Scaling（中英）。

Dwarkesh 访谈（有逐字稿）衍生段落未动。

### [v6.6] - September 18, 2026

#### 📝 新增：[Decision Models — 不是每个决策都需要大语言模型](docs/ai-core/decision-models.md)

**学习来源**：2026年9月15日 TypeSafe AI 发布 Jev（Diogo Almeida 公开信 + 媒体报道）；与老贾（ChatGPT）的讨论

**新增页面**：
- `docs/ai-core/decision-models.md` — 知识树链条 Model → Inference → Generative Inference → Decision Inference → Agent Architecture 的中间两节：把 Inference 拆成"生成式"和"决策式"两种；Almeida 之问（chat 超人多年，自动化去哪了）与 RLHF 训出的三个毛病（啰嗦、过度自信、不可靠）；Jev 作为 2026 case study（System One Models、RLCD、70–500ms、输出免费、"不会幻觉"的诚实版本）；RLHF→RLCD：训练目标决定模型性格，calibration 从"人这边"的问题变成"模型这边"的训练目标——Calibrated Trust 在模型侧的闭环

**新增概念**：Calibrated Confidence（校准置信度）、Decision Inference（决策推理）、Generative Inference（生成式推理）、RLCD、System One Models（系统一模型）（143→148）

**心智模型**：新增 [一个大模型包办一切 inference → 不同 inference 分工给不同模型](mental-models.md)（Sep 18）

**交叉链接**：inference-system-guide、training-system-guide、agent-architecture、agent-intelligence-layers、scaling-paradox、personal-agents-agent-economy 共 6 篇文章关联；`glossary.md` 新增 5 个词条

### [v6.5] - September 16, 2026

#### 📝 新增：[美国10年期国债收益率突破5%：全面解读与资产重定价](docs/career-impact/10y-treasury-yield-5-percent.md)

**学习来源**：2026年9月14日 10Y 国债收益率盘中触及 5.014%（2007年以来首次突破5%）；与 Claude 的学习讨论

**新增页面**：
- `docs/career-impact/10y-treasury-yield-5-percent.md` — 10Y 收益率拆成三组件（短期利率预期、长期通胀预期、期限溢价），三者全部承压且互相强化；Fed 降息降的是隔夜利率，10Y 是市场定价——"格林斯潘之谜"的反向版本，长短端可能各走各的；5% 新常态下七类资产（股票、债券、房地产、现金、美元、大宗商品、AI CapEx）的全面影响；三句话投资逻辑（现金流为王、久期是敌人、确定性溢价上升）；范式判断：2010–2021 才是特例，5% 是回归正常

**新增概念**：期限溢价 Term Premium、久期 Duration、5% 新常态 New Normal of 5%、10Y 三组件 Three Components of 10Y Yield（139→143）

**心智模型**：新增 [Fed 降息 → 短端长端各走各的](mental-models.md)（Sep 16）、[低利率是常态 → 低利率是特例](mental-models.md)（Sep 16）

**交叉链接**：discount-rate-and-valuation、ai-economic-distribution 共 2 篇文章关联；`glossary.md` 新增 2 个词条

### [v6.4] - September 14, 2026

#### 📝 新增：[Pacing the AI Frontier — 能力竞赛中，我们真的能慢下来吗？](docs/career-impact/pacing-ai-frontier.md)

**学习来源**：Dario Amodei — *We Must Pace the Frontier* · Anthropic Threat Intelligence Report (Sep 2026) · Reuters — OpenAI agents attacked RubyGems · OpenAI — *Pacing model development*

**新增页面**：
- `docs/career-impact/pacing-ai-frontier.md` — Pacing the Frontier 不是停止 AI 进步，而是让能力增长不超过人类理解和控制的速度。核心心智模型：Pacing → Coordination → Verification——没有协调负责任的人先输，没有验证没人敢协调。Prisoner's Dilemma 结构分析、Capability Thresholds（危险能力阈值触发机制）、Safety Gates、Embedded Evaluators（独立安全评估进入 frontier labs）、国际协调四层路径（Red Lines → Shared Evaluation → Capability Checkpoints → Pacing RSI）、Value of Pacing = Time × Progress、Safety 从 moral responsibility 到 competitive necessity 的转变、与 Trust Framework 的连接（Auditability 成为合作基础设施）

**新增概念**：Pacing the AI Frontier、Capability Thresholds、Embedded Evaluators（136→139）

**心智模型**：新增 [Pacing → Coordination → Verification](mental-models.md)（Sep 14）

**交叉链接**：capability-to-trust、scaling-paradox、research-acceleration、safety-three-layer-framework、personal-agents-agent-economy、ai-economic-distribution 共 6 篇文章关联；`glossary.md` 新增 3 个词条

### [v6.3] - September 12, 2026

#### 📝 新增：[Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.md)

**学习来源**：Meta Muse Personal Agent (Sep 2026) · Zuckerberg × Alex Heath 访谈 (Sep 2026) · 亲自测试 Muse

**新增页面**：
- `docs/career-impact/personal-agents-agent-economy.md` — 从 Muse Personal Agent 与 Zuckerberg 的 AI 战略看 AI 的下一层：Chatbot → Personal Agent（从 prompt 到 goal）、Social Presence、Contextual Personalization（Preference + Context + Constraints + Why）、Decision Rights、Calibrated Autonomy（不是 Maximum Autonomy）、Decision Cost（选择成本）、Attention Economy → Intent Economy → Agent Economy、Capability ↑ → Required Trustworthiness ↑、Calibrated Trust、AI Glasses + Physical Context、Personal Intelligence Layer

**新增概念**：Personal Agent、Calibrated Autonomy、Agent Economy、Contextual Personalization、Decision Cost（131→136）；Muse 仅入 glossary

**心智模型**：新增 [Answer → Action](mental-models.md)（Sep 12）

**交叉链接**：capability-to-trust、scaling-paradox、openai-intelligence-platform、ai-economic-distribution、agent-infrastructure-os 共 5 篇文章关联；`glossary.md` 新增 6 个词条

### [v6.2] - September 10, 2026

#### 📝 新增：[AI 与经济丰饶的分配问题 — 从技能错配到产权结构错配](docs/career-impact/ai-economic-distribution.md)

**学习来源**：Anthropic "Scenarios for our Economic Future" (Korinek et al. 2026) · Anthropic "Economic Policy Framework" (June 2026)

**新增页面**：
- `docs/career-impact/ai-economic-distribution.md` — Anthropic 经济情景模型详解：三条分岔曲线（温和/显著/极端）、资本份额在所有情景中系统性上升、知识工作者唯一持续承压、蓝领工资反升的互补效应、体力劳动"安全窗口"的脆弱性；三级触发政策框架（预分配资本账户 → 扩大安全网 → 重新设计分配制度）、"预分配 vs 再分配"核心区别、个人三层应对框架（AI 系统架构者/资本敞口/暂时安全岗位）
- `docs/conversations/ai-economic-distribution.md` — 完整学习对话记录

**新增概念**：Pre-distribution（预分配）、Property-Rights Mismatch（产权结构错配）（129→131）

**心智模型**：新增 [技能错配 → 产权结构错配](mental-models.md)（Sep 10）

**交叉链接**：scaling-paradox、industry-competition-shift、research-acceleration、openai-intelligence-platform 共 4 篇文章关联；`glossary.md` 新增 2 个词条

### [v6.1] - September 8, 2026

#### 📝 新增：[Research Acceleration — 从 R&D 生产力到能力进步的转化漏斗](docs/ai-research/research-acceleration.md)

**学习来源**：OpenAI Blog: "Research acceleration: The view inside OpenAI" (Sep 6, 2026) · Epoch AI — AI R&D Lifecycle Taxonomy

**新增页面**：
- `docs/ai-research/research-acceleration.md` — OpenAI RSI 进度报告详解：Automated Research Intern 里程碑、agent runtime 3.1× 人类劳动、Research Intern vs Research Executor、20 个 Agent 时瓶颈迁移（问题选择/结果整合/注意力）、R&D 生产力到能力进步的五层衰减漏斗（串联约束/compute 硬约束/递减效应/安全减速/整合瓶颈）、Astra 安全事件完整披露与 compute 弹性替代治理隐患、判断力要求悖论
- `docs/conversations/research-acceleration.md` — 完整学习对话记录

**新增概念**：Research Acceleration、R&D Productivity Funnel（126→129）

**心智模型**：新增 [R&D 生产力 = 能力进步 → 漏斗衰减](mental-models.md)（Sep 8）

**交叉链接**：safety-three-layer-framework、scaling-paradox、automated-alignment-research 共 3 篇文章关联；`glossary.md` 新增 2 个词条

### [v6.0] - September 5, 2026

#### 📝 新增：[Agent 集体行为 — 从 DseWiki 事件到治理框架](docs/ai-core/agent-collective-behavior.md)

**学习来源**：Reuters (Sep 4, 2026) DseWiki 事件独家报道 · Nightingale / Von Arx & Byrd 研究报告 · CSIS (Aug 2026) 政策建议 · Google Blog (Sep 2, 2026) Fairwind Program · Schmidt Sciences + Google DeepMind 多 Agent 安全研究征集 · ICML 2026 · POLIS 项目 · SPAR Orbit 框架

**新增页面**：
- `docs/ai-core/agent-collective-behavior.md` — DseWiki 15000+ 次编辑劫持事件、Stigmergy（间接协调）机制、集体行为涌现四前提（目标同构/持久化环境/正反馈/对抗压力）、Instrumental Convergence 在多 Agent 环境的扩展、白板即指挥系统（Hayek 价格系统类比）、集体行为作为独立评估维度、Agent 行为治理五层纵深防线（Least Privilege → Sandboxing → Monitoring → Human Checkpoints → Ecosystem Audit）、Fairwind 与安全堆栈空白地带
- `docs/conversations/agent-collective-behavior.md` — 完整学习对话记录

**新增概念**：Agent Collective Behavior、Stigmergy、Instrumental Convergence、Ecosystem-Level Audit（122→126）

**心智模型**：新增 [检测意图 → 管理结构](mental-models.md)（Sep 5）

**交叉链接**：safety-three-layer-framework、harness-architecture-patterns、agent-infrastructure-os、scaling-paradox 共 4 篇文章关联；`glossary.md` 新增 2 个词条

### [v5.9] - September 4, 2026

#### 📝 新增：Beyond 领土 — [贴现率与估值](docs/beyond/discount-rate-and-valuation.md) + [Design & Visual Aesthetics 101](docs/beyond/design-visual-aesthetics.md)

**新增领土**：`docs/beyond/` — AI & Beyond 的 Beyond 部分，收录 AI 之外的系统学习话题

**新增页面**：
- `docs/beyond/index.md` — Beyond 领土索引（金融与投资、设计与视觉审美）
- `docs/beyond/discount-rate-and-valuation.md` — 贴现率如何决定股票估值：DCF 核心公式、三个关键推论（利率↑→估值↓、久期敏感度、预期 vs 现状）、从宏观到个股的传导链
- `docs/beyond/design-visual-aesthetics.md` — 七堂设计课阶段总结：Visual Language、Feeling → Principle → Rule 链条、Gestalt/Grid/Alignment、Hierarchy/Contrast/Rhythm、Typography/Space、Color/Image/Texture、Order ↔ Surprise 张力

**心智模型**：新增 ["好看" → "知道为什么好看"](mental-models.md)（Sep 4）

**索引更新**：README 新增 Beyond 导航、index-all-concepts 新增 Beyond 分类（120→122）

### [v5.8] - September 3, 2026

#### 📝 新增：[第一次测试一个 AI 产品 — Muse Spark 1.3 与 Trust Framework 的真实验证](docs/career-impact/first-agent-test-muse-spark.md)

**新增页面**：
- `docs/career-impact/first-agent-test-muse-spark.md` — 五个测试（Capability + Explainability、Controllability、出题人掉坑、Recoverability 上/下）真实验证可信度五维框架；发现 Auditability ≠ Controllability ≠ Recoverability 不能合并为单一指标；Trust Gap（Perceived > Actual）的现场演示；Agent reliability = "fail visibly, contain damage, recover reliably"

**心智模型**：新增 [Benchmark → Behavioral Test](mental-models.md)（Sep 3）

**交叉链接**：capability-to-trust、scaling-paradox 共 2 篇文章加了双向链接

### [v5.7] - September 3, 2026

#### 📝 新增：[自动化对齐研究 — AI 如何研究并改善 AI 的对齐](docs/ai-research/automated-alignment-research.md)

**学习来源**：Anthropic Research Blog "Automated researchers can reliably mitigate alignment failures" (Aug 28, 2026) · Chen Yueh-Han, Jiaxin Wen, Jan Hendrik Kirchner

**新增页面**：
- `docs/ai-research/automated-alignment-research.md` — AAR 多 agent 研究循环架构、geometric mean 评分设计、弱模型对齐强模型实验（Sonnet 5 → Opus 4.8，2400 样本 ≈ 生产级对齐）、作弊行为三分类（lucky re-run / format-copying / reviewer-tricking）、Monitor 无限回归的三条终止路径、"双螺旋"心智模型（杠杆比 / 测量覆盖率 / 作弊进化速度）

**新增概念**：AAR（Automated Alignment Researcher）、Weak-to-Strong Alignment（115→117）

**心智模型**：新增 [Supervisor → Research Loop](mental-models.md)（Sep 3）

**交叉链接**：safety-alignment-guide、safety-three-layer-framework、evaluation-system 共 3 篇文章加了双向链接；AI Research index 新增"AI 能否自动改善 AI 的对齐"研究线；`glossary.md` 新增 1 个词条（AAR）；`index-all-concepts.md` Safety/Alignment 和模型研究主题区各新增 1 条

### [v5.6] - September 1, 2026

#### 📝 新增：[AI Agents Enter the Enterprise — 当 Agent 真正进入企业](docs/career-impact/agents-enter-enterprise.md)

**学习来源**：Uber Engineering — Running a Software Factory Efficiently at Uber Scale · McKinsey — The State of AI in 2026 · Deloitte — The Path to Agentic Transformation

**新增页面**：
- `docs/career-impact/agents-enter-enterprise.md` — 从 Chatbot 到 Digital Employee 的六步进化、Uber 案例（70% PR 归因于 Agent、3600+ Skills、30000+ daily executions）、BNY Digital Employee 案例、Agent Enterprise Stack 九层基础设施、企业 Agent 成熟度五级框架（L1-L5）、人的角色从 Operator 到 Goal & Policy Setter 的变迁、Capability ≠ Permission 治理原则

**新增概念**：Agent Enterprise Stack、Agent Identity、Agent Maturity Levels、Digital Employee、Managed Agent（110→115）

**心智模型**：新增 [Tool → Workforce](mental-models.md)（Sep 1）

**交叉链接**：capability-to-trust、agent-infrastructure-os、domain-expertise-and-org-design 共 3 篇文章加了双向链接；`glossary.md` 新增 3 个词条（Digital Employee、Agent Enterprise Stack、Managed Agent）；`index-all-concepts.md` 新增 5 个概念 + 职业发展主题区新增 1 条

## August 2026

### [v5.5] - August 30, 2026

#### 🗺️ 五块领土教学地图统一 + 全站入口升级

Computing Foundations、AI Core、AI in Practice、AI Research、Industry & Impact 的入口页统一升级为 **Start → Orient → Go Deeper** 三层学习地图。每块领土不再是文章清单，而是从一个自然问题链出发：先抓最高杠杆的支点，再建立全局方向感，最后按真实困惑进入深度文章。

**结构更新**：
- AI Core — Model → Agent → Memory / Workflow / Safety
- AI in Practice — Harness → Workflow → Knowledge / Connection / Skill / Verification
- AI Research — Define → Intervene → Measure → Audit 研究闭环
- Industry & Impact — Model → System → Trust → Human Judgment
- Mental Models — 时间线改为最新在上
- README — 补齐 Aug 15–30 最新更新

**展示站更新**：所有分类可直接渲染手工学习地图，不再退回字母排序的文章列表。

### [v5.4] - August 29, 2026

#### 📝 新增：[Harness > Model — Agent 可靠性的真正杠杆在哪里](docs/ai-application/harness-architecture-patterns.md)

**学习来源**：arXiv:2608.01964 LongHorizon-Harness · TechCrunch Nvidia AVO + ARC-AGI-3 · NVIDIA SkillEvaluator · arXiv:2608.19701 Multi-Agent Memory Arbitration · DeepMind "From Atari to EVE Online"

**新增页面**：
- `docs/ai-application/harness-architecture-patterns.md` — MEA 循环（Manager-Execute-Audit）、Claimed vs Verified State、Harness 两条腿（执行架构 + 知识架构）、Skill as Governed Artifact、Skill 选择三层递进、Multi-Agent Memory Provenance、四柱模型
- `docs/conversations/harness-gt-model.md` — 完整学习对话记录

**新增页面 2**：
- `docs/career-impact/openai-intelligence-platform.md` — Intelligence Platform 定位、Compute 作为 Intelligence Factory、Distribution（Owned vs Third-party）、模型领先是状态不是护城河、Ultra-fast AI 改变交互模型、RSI 产业级反馈循环、Platform vs Product 内在张力
- `docs/conversations/openai-intelligence-platform.md` — 完整学习对话记录（Sam Altman × David Senra + Tibo × Matthew Berman）

**新增概念**：MEA Loop、Claimed vs Verified State、Context Rot、Self-evaluation Bias、Skill Governance、Skill Runtime、Skill Routing Precision、Multi-Agent Memory Provenance、Intelligence Platform、Distribution、Platform vs Product Tension、RSI（98→110）

**心智模型**：新增 [Harness = 包装纸 → Harness = 操作系统层](mental-models.md)（Aug 29）+ [Product Company → Platform Company](mental-models.md)（Aug 29）

**交叉链接**：Harness 系统、Model ≠ Agent、Skills 商业格局、模型战争 vs 系统战争、Scaling Paradox、Agent 架构、从工具到产业 共 8 篇文章加了双向链接；`glossary.md` 新增 5 个词条；`index-all-concepts.md` 新增 12 个概念

### [v5.3] - August 22, 2026

#### 📝 新增：[AI Safety 三层防护框架（Monitoring / Alignment / Containment）](docs/ai-core/safety-three-layer-framework.md)

**学习来源**：OpenAI《Pacing model development in an era of cyber-critical capabilities》（2026.08.18）

**新增页面**：
- `docs/ai-core/safety-three-layer-framework.md` — 三层防护各司其职；Alignment 技术演进（RLHF → Constitutional AI → Scalable Oversight → Interpretability）；Containment 纵深防御工程架构（沙箱/网络隔离/最小权限/激活监控）；Delegation Framework 可逆性缺口（风险×可逆性矩阵）
- `docs/conversations/safety-three-layer-framework.md` — 完整学习对话记录

**新增概念**：Containment、Monitoring、Defense in Depth、Scalable Oversight、Debate、Delegation Framework 可逆性缺口（91→98）

**心智模型**：新增 [Alignment → Defense in Depth](mental-models.md)（Aug 22）

**交叉链接**：Safety/Alignment 指南、Model ≠ Agent、Harness 共 3 篇文章加了双向链接；`glossary.md` 新增 4 个词条；Safety 主题区新增 5 条索引

### [v5.2] - August 20, 2026

#### 📝 新增：[Model 能力 ≠ Agent 能力](docs/ai-core/model-vs-agent-capability.md) + [Computer Use 词条](docs/ai-core/computer-use.md)

**新增页面**：
- `docs/ai-core/model-vs-agent-capability.md` — 从"让 AI 发微信朋友圈"的真实实验出发，建立 Agent Capability ≈ Model × Runtime × Tools × Permissions × Environment 的心智模型；区分 Capability 和 Authority；讨论为什么 Capability 和 Governance 必须一起增长
- `docs/ai-core/computer-use.md` — Computer Use 独立词条：AI → GUI → Software 这条路径的工作原理、与 API/MCP 的互补关系、权限风险和局限性

**新增概念**：Model Capability ≠ Agent Capability、Computer Use

**心智模型**：新增 [Intelligence → Agency](mental-models.md)（Aug 20）

**交叉链接**：Agent 架构、MCP、Harness、Safety/Alignment、Coding Agent 基础设施 共 6 篇文章加了双向链接；`glossary.md` 新增 Computer Use 词条；`index-all-concepts.md` 概念数 89→91

### [v5.1] - August 15, 2026

#### ✏️ Computing Foundations Orient 层 + Start Here 双层化改造

外部 AI 审读意见驱动——在 Orient 三张地图和 Start Here 统一铺"本质（1 句）+ 比喻（1 句）"的双层表达。改动 6 个页面（`start-here.md`、`software-map.md`、`hardware-map.md`、`software-hardware-map.md`、`from-silicon-to-ai.md`、`foundation-zero.md`）+ `README.md`。逐条建议做了技术校对，采纳/软化/否决都留了理由。`software-hardware-map.md` 加了诚实简化脚注（呼应 CLAUDE.md Future Note）。

### [v5.0] - August 10, 2026

#### 📝 AI Core 新增：[AI Safety / Alignment 完全指南](docs/ai-core/safety-alignment-guide.md)

Safety（当下、可测）vs Alignment（模型目标在新场景里是否符合人类意图，更深、更难验证）；Specification Gaming 作为核心机制；RLHF 定位为"对齐技术之一，不是解决方案"；Red Teaming / Constitutional AI / Interpretability 三条互补思路点到为止。新增 6 个概念（134→140）。

### [v4.9] - August 10, 2026

#### 📝 AI Core 新增：[Multimodal 完全指南](docs/ai-core/multimodal-guide.md)

以 Flamingo 为历史/架构跳板；核心不是"都变成文字"；Native Multimodal 定义为连续谱；Multimodal → Agent → Robotics → World Model 连接。新增 6 个概念（128→134）。

### [v4.8] - August 10, 2026

#### 📝 补齐三个基础：[Prompt 工程](docs/ai-core/prompt-engineering-guide.md) + [Embeddings](docs/ai-core/embeddings-guide.md) + [RAG](docs/ai-application/rag-guide.md)

三篇接成一条线：Prompt 教怎么跟模型对话，Embeddings 教语义相近，RAG 用 Embeddings 解决知识截止日期问题。新增 7 个概念（114→121）。

### [v4.7] - August 10, 2026

#### 📝 AI Core 新增：[Training 训练系统完全指南](docs/ai-core/training-system-guide.md)

预训练 → 监督微调 → RLHF 三阶段串成一条线；"为什么训练这么贵"呼应 Computing Foundations 三条主脊。新增 5 个概念（109→114）。

### [v4.6] - August 10, 2026

#### 📝 [Bridge Spine](docs/computing-foundations/cuda-moat.md) + [Semiconductor Spine](docs/computing-foundations/yield-and-foundry.md)：五条主脊全部完成

`cuda-moat.md`（护城河在软件栈里，决策分散在编译期/kernel/运行时）+ `yield-and-foundry.md`（良率/代工/EUV/先进封装）。新增 3 个概念（104→107）。Computing Foundations Start→Orient→Go Deeper 三层完整落地。

### [v4.5] - August 10, 2026

#### 📝 [Scale Spine：从 1 卡到千卡](docs/computing-foundations/scaling-and-communication.md)

通信开销 + 阿姆达尔定律。内存墙的放大版——芯片内"喂不饱" → 机器间"喂不饱"。

### [v4.4] - August 9, 2026

#### 📝 [Memory Spine：内存墙](docs/computing-foundations/memory-wall.md)

内存层级 → 容量 vs 带宽 → 算术强度 / compute-bound vs memory-bound。与推理基础设施双向链接。新增 4 个概念。

### [v4.3] - August 9, 2026

#### 📝 Wiki V2 架构迁移 + Three Maps + FLOPS 与精度

Computing Foundations 提升为顶层领土；Mental Models 归为 Explore 门；首页改三扇门 + 领土倒三角。新增 Software Map / Hardware Map / Software × Hardware Map（Orient 层）+ `flops-and-precision.md`。新增 11 个概念（88→99）。Growth Rules 写入 CLAUDE.md。

### [v4.2] - August 9, 2026

#### 🖥️ Computing Foundations Phase 0：结构和骨架

`index.md` + `foundation-zero.md` + `from-silicon-to-ai.md` + 五主脊骨架页。新增 7 个概念（81→88）。

### [v4.1] - August 9, 2026

#### 📝 [推理基础设施与 Agent 延迟](docs/ai-core/inference-infrastructure-and-agent-latency.md)

Prefill（compute-bound）vs Decode（memory-bandwidth-bound）；Agent 延迟四指标；Workload 形状决定最优硬件；AI 基础设施从同构走向异构。新增 5 个概念（76→81）。

### [v4.0] - August 8, 2026

#### 🔗 Phase 3 全站推广完成 + 术语表 V2 定版

Phase 3 Navigation Layer 完成——15 个稳定 Glossary 锚点、21 篇文章的首次出现链接与 Before Reading、全仓库 0 死链。术语表 15 个核心词条冻结为参考样本。

含 Batch A（7 篇高密度技术文章）、Batch B（8 篇 ai-research + career-impact）、死链清理（13 篇 ~40 处历史遗留死链）、试点验证（稳定 slug + 正文链接 + Before Reading）。

### [v3.2] - August 8, 2026

#### 📝 [Scaling Paradox](docs/career-impact/scaling-paradox.md)

AI scaling law 在人机协作里不自动成立；90%→95% 反而更危险；Trustworthiness + Calibrated Trust 两层模型。

### [v3.0] - August 7, 2026

#### 🗺️ Start Here + 术语表 + 展示网站 + 三篇 Career Impact

- `start-here.md` — 7 站最小地图
- `glossary.md` — 25 个核心名词术语表
- 展示网站上线（[learning-wiki-site.vercel.app](https://learning-wiki-site.vercel.app)），push 后自动同步
- `google-agi-org-restructuring.md` — 时间尺度分离 + 天花板×到达能力
- `agent-infrastructure-os.md` — Agent 可行性六标准 + 可形式化光谱 + Agent OS 等价定理
- `domain-expertise-and-org-design.md` — know-what-matters 七层框架 + 管理 Agent 四层能力
- `mental-models.md` — 心智模型变迁时间线

### [v2.0] - August 4-5, 2026

#### 🚀 大版本：完整 AI 系统知识库

8 篇核心页面 + 14 篇完整对话记录 + 概念索引。

**新增页面**：Inference 推理系统、Transformer 架构、MCP 协议、Skills 商业格局、Models 深挖、Evaluation 评估、Agent 时代系统架构、从"最聪明"到"最可信"、从工具到产业。

**覆盖**：Agent 架构 → 推理系统 → 训练 → 模型优化 → 评估 → Memory/Context → MCP/Harness/Skill → 职业影响。

### [v1.0] - August 4, 2026

#### 🎯 初始发布

Agent 系统架构、Workflow 设计、模型战争 vs 系统战争、概念索引、贡献指南。

---

**最后更新**: September 28, 2026
