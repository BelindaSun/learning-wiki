# Harness > Model——完整学习对话记录

> 正式版见 [Harness > Model — Agent 可靠性的真正杠杆在哪里](../ai-application/harness-architecture-patterns.md)

---

克劳德读一下这篇LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks ：https://arxiv.org/abs/2608.01964

Let me grab the full paper for more depth.Belinda，这篇论文非常值得你关注——它直接命中了 agent 架构设计的核心瓶颈。
核心洞察
这篇来自阿里 DreamX 团队的论文，将长步骤 agent 执行重新定义为任务状态管理问题。他们的关键观察：现有 agent 框架（包括 Claude Code、Codex）有两个结构性缺陷——任务执行和任务状态共享同一个不断膨胀的 context，以及执行和完成评估耦合在一起，导致错误的自我判断会污染后续决策。
MEA 循环：Manager-Execute-Audit
他们提出的 Manage-Execute-Audit 循环，本质上是把 agent 的"记忆"从 context 里抽出来，变成独立维护的结构化任务状态：
Manager 持有持久化的任务状态（需求、产出物、已发现事实），决定下一个子任务，但完全不能直接操作环境。
Executor 在全新的 context 中执行单个子任务，完成后其交互历史直接丢弃——只保留执行报告。
Auditor 以只读权限独立检查环境，验证执行器的声明是否属实。只有审计通过的事实才能进入任务状态。
这个设计特别精妙的一点：executor 说"我完成了"不算数，必须由 auditor 从环境中独立验证后才能更新状态。
数据说话
效果非常强：
Qwen 3.7-Plus 在 WeaveBench 上从 51.8% 提升到 80.7%，在 Terminal-Bench 2.1 上从 69.7% 提升到 77.2%，在 OSWorld 2.0 上从 2.8% 提升到 8.3%。Claude Opus 4.7 在 OSWorld 2.0 子集上从 20.0% 提升到 34.3%。
更有意思的发现：Qwen 3.7-Plus + LongHorizon-Harness 的平均得分 0.733，超过了 Claude Opus 4.7 用原生 Claude Code 的 0.680。弱模型 + 强 harness > 强模型 + 弱 harness。
对你的启发
这篇论文的几个洞察跟你的 MASS 架构直接相关：
"Agent 能力是系统属性" — 模型决定单步质量，harness 决定多步可靠性。这正是你一直在思考的"编排层"价值。
外化状态 + 独立审计 — 跟你在 Mimo 里遇到的"AI 忘记前面说了什么"本质上是同一个问题。他们的解法是：别让 agent 在一个不断膨胀的 context 里自己追踪进度，把状态提出来，每一步独立验证。
Fresh context execution — 每轮执行完就丢掉交互历史，只保留审计过的事实。这对抗了 context rot（上下文腐烂）的问题，代价是额外的 token 消耗，但总体上是值得的。
这篇论文的方法论很可能会成为下一代 agent 框架的标准范式。

看看具体数据：https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/

Belinda，这篇 TechCrunch 文章和你刚看的论文完美呼应——harness > model 正在从学术发现变成行业共识。
核心数据点
Nvidia 用自研的 AVO harness 搭配 Claude Opus 5，在 ARC-AGI-3 上拿到了 100% 的满分。没有 harness 的裸模型只有 30%。这个差距比 LongHorizon-Harness 论文里的还要夸张。
关键机制跟论文一脉相承：Nvidia 研究人员发现最有意义的部分是引入一个"supervising agent"，当主 agent 偏离方向、走进死胡同或重复走过的路时，supervisor 会像 CEO 一样把它拉回来。这本质上就是 LongHorizon-Harness 里 Manager + Auditor 的角色。
OpenAI 也发现，仅仅调整 harness 上的两个设置，就让模型的 ARC-AGI-3 分数翻了三倍——但仍远不及 Nvidia 的 100%。
成本维度的印证
Databricks CEO Ali Ghodsi 指出：同一个模型用不同的 harness，成本可以差出 2 倍。你以为贵的是模型，但其实取决于你用的哪个 harness。
对你的三个战略信号
1. 你的"非技术建造者"定位反而成了优势。 如果 agent 能力的主要杠杆是 harness 而不是模型，那编排设计（你擅长的系统思维）比底层 ML 能力更值钱。MASS 的价值在于你如何组织 agent 之间的协作、状态管理和审计——这恰好是 harness 层的工作。
2. "open harness" 理念。 Nvidia 的 El Hallak 强调开放 harness 让用户可以调控更多旋钮来提升准确率，开放的 agent stack——对 harness、基础设施、运行时都有控制权——是安全推进生态系统的必要条件。这跟你 MASS 的模块化设计哲学完全契合。
3. 模型层正在商品化，编排层才是护城河。 从 Nvidia、阿里、OpenAI、Databricks 四个不同方向得出同一个结论——agent 的实际表现由系统决定，不由单个模型决定。这意味着你用 Claude + ChatGPT + DeepSeek 多模型协作的路线本身就对了，关键在于你怎么编排它们。

这篇文章中说研究者没有换模型，只换了 Agent 外面的执行架构。
以 Qwen 3.7 Plus 为例： WeaveBench：51.8% → 80.7% Terminal-Bench 2.1：69.7% → 77.2% OSWorld 2.0：2.8% → 8.3% 换成 Claude Opus 4.7，在一个 OSWorld 2.0 子集上也从 20.0% → 34.3%。
这不是"小优化"，模型参数没有变，真正变化的是模型外面的：Harness。它采用一个特别值得记住的 MEA Loop：
Manage → Execute → Audit
Manager 不亲自干活，而是维护任务状态、决定下一步；Executor 每次拿相对干净的新 context，只执行当前 subtask；Auditor 不相信 Agent 自己说"我完成了"，而是只读检查真实 environment state。
然后最关键的一条：只有被环境独立验证过的事实，才能写回 task state。 这解决了 long-horizon Agent 一个特别阴险的问题：
Agent 第 17 步以为："文件已经保存。"于是这句话进入 context。 第 34 步："既然文件已经保存……" 第 58 步："基于已经保存的文件……" 但第 17 步压根没保存成功。
错误已经从一个 action error变成false state → future reasoning contamination。
所以这里真正重要的不是"Harness 提分"。而是：Agent 的可靠性越来越依赖于谁有权定义"现实现在是什么"。
为什么让 Executor 同时负责"做事"和"判断自己是否做成"容易出问题？

因为这是一个 incentive alignment 问题。
Executor 在执行过程中积累了大量的 reasoning momentum——它已经投入了几十步的推理来走这条路径。当它最后要判断"我成功了吗"的时候，它不是在做一个中立的观察，它是在评估自己的工作。
这跟人类的情况一模一样：写完代码的人自己测试，总觉得"应该没问题"。不是因为懒，而是因为你的认知已经被你做出的选择所塑造了——你会沿着你预期它会工作的路径去验证，而不是沿着它可能失败的路径。
对 LLM 来说，这个问题更加结构性。Executor 的"我完成了"这个判断，跟它前面所有的 action tokens 共享同一个 context window。那些 action tokens 已经把概率分布往"成功"方向推了——模型在生成"任务完成"这几个 token 时，条件概率已经被前文的行动叙事所 bias。它不是在"检查现实"，它是在延续自己的叙事。
这就是为什么 MEA 的设计如此精准：Auditor 拿到的是 fresh context + 只读环境访问权。它没有 Executor 的行动历史，所以不存在叙事惯性。它唯一的信息来源是环境本身。
本质上，LongHorizon-Harness 做的是把"做事的权力"和"定义现实的权力"分开。这才是它真正的架构洞察。

所以，Agent 的 memory 应该区分 claimed state 与 verified state对吧。

对，而且这个区分一旦建立，整个 agent 架构的设计逻辑都会跟着变。
现在大多数 agent 系统的 memory 本质上只有一种状态："已记录"。不管是 agent 自己说的、工具返回的、还是用户告诉它的，进了 memory 就是同等地位的"事实"。这就像一个公司里，员工的自我汇报和第三方审计报告放在同一个文件夹里，没有任何标记区分——后面的决策者根本不知道哪条信息经过了验证。
LongHorizon-Harness 的做法其实是在 memory 里引入了一个认识论层级：
Claimed — executor 说它做了，但没人查过。这是一个待验证的假设，不是事实。
Verified — auditor 从环境中独立确认了。这才是可以作为后续推理前提的东西。
Untrusted — 曾经 claimed 但审计发现不符，或者有完整性违规。这是一个需要重做的信号。
这个分层看似简单，但它改变的是 agent 系统里信任的流向。没有这个区分时，信任是单向传递的——每一步都隐式地信任前面所有步骤。有了这个区分，信任变成了必须被赚取的——你的 claim 在被验证之前，不会成为下游决策的前提。
而且这个原则的适用范围远不止 long-horizon task。你想想 Mimo 的场景：AI 家庭成员说"我记得你上次提到过想去京都"——这到底是 verified state（用户确实说过）还是 claimed state（模型从某段对话里推断出来的）？如果不区分，一个推断错误就会变成一个"记忆"，然后被反复引用，最终用户会觉得这个 AI "记错了"甚至"在编造"。
所以 claimed vs verified 不只是一个工程 pattern。它是 agent 系统能否在长期交互中维持用户信任的基础设施。

再看这篇Evaluating AI Agent Skill Performance with NVIDIA SkillEvaluator：https://developer.nvidia.com/blog/evaluating-ai-agent-skill-performance-with-nvidia-skillevaluator/

这篇跟前面的论文和 TechCrunch 文章构成了一个完整的拼图——前两篇讲的是 harness 的执行架构（MEA loop），这篇讲的是 harness 的知识架构（Skills）。
SkillEvaluator 做了什么
Nvidia 构建了一个开源评估工具，用来衡量"给 agent 装上一个 skill"前后的性能差异。他们对超过 30 个 Nvidia 产品的 300 多个 verified skills 做了测试，在 Claude Code 和 Codex 两个 harness 上运行。
核心数据：
没有 skill 时，agent 的 Correctness 平均只有 46 分，Effectiveness 只有 39 分。装上 verified skill 后，Correctness 升到 87（+41），Effectiveness 升到 78（+39）。
模型完全没变，只是给它更好的上下文指引。
三个值得注意的发现
1. 产品领域比 harness 重要得多。 Claude Code 和 Codex 之间的 Skill Lift 差距大约 5 个点，但不同产品之间的 Skill Lift 范围从 +2 到 +46——领域和评估设计比 harness 本身影响更大。
2. Token 节省不是自动的。 一个 skill（jetson-optimize-memory）把 token 用量减少了 76.9%，执行时间减少了 53.7%。但另一个 skill（cuopt-install）反而让 token 增加了 120.3%。 Skill 不是万能的——它可能提升质量但增加成本，必须逐个测量。
3. 三层验证体系。 Skill 发布前要经过三层评估：安全和结构检查、嵌入相似度去重、以及在沙盒中的实际对比测试。
连起来看：harness 的两条腿
把今天读的三个材料放在一起，你看到的是 harness 层的两个核心杠杆：
执行架构（LongHorizon-Harness 的 MEA loop）— 解决的是"agent 怎么可靠地完成多步任务"。关键机制是外化状态、fresh context、独立审计。
知识架构（Nvidia 的 verified skills）— 解决的是"agent 怎么知道该做什么"。关键机制是结构化的指令包、工具调用指引、评估验证。
一个管"怎么做得对"，一个管"怎么知道做什么"。两个一起才构成完整的 harness。
而且 Nvidia 对 skill 的验证体系跟 MEA 的 auditor 逻辑异曲同工——都是在说：agent 自己声称"我会用这个工具"不算数，必须有独立的评估来验证它真的用对了。Claimed vs verified，同一个原则在不同层面的体现。

Skill Lift 应该只测最终正确率，还是还应该测 token、时间、错误率？

只测正确率会掩盖真正的问题。
Nvidia 的数据已经给了一个完美的反例：jetson-optimize-memory 这个 skill 减少了 76.9% 的 token，但 cuopt-install 反而增加了 120.3%。如果只看正确率，这两个 skill 可能都"通过"了——但一个在帮你省钱，另一个在烧你的钱。你作为使用者完全看不到这个区别。
更深层的原因是：正确率是一个结果指标，但它不告诉你这个结果是怎么来的。
一个 skill 可以通过让 agent 反复重试来提高正确率——最终答案对了，但过程中烧了 5 倍的 token、走了 3 条死路、花了 10 分钟。另一个 skill 可能一次就做对，token 用量减半。从正确率看，两个都是 100%。从部署价值看，天壤之别。
所以 Nvidia 的做法其实暗含了一个更完整的评估框架——至少需要四个维度：
Correctness — 最终结果对不对。这是底线，但不是全部。
Efficiency — token 消耗和执行时间。这直接决定了成本和用户体验，在生产环境中往往比正确率更敏感。
Reliability — 错误率和重试次数。一个 skill 如果让 agent 正确率从 80% 到 95%，但失败的 5% 是灾难性的（删文件、写错数据），那它的实际价值可能是负的。错误的严重程度比错误的频率更重要。
Safety regression — 装上 skill 后有没有引入新的风险。Nvidia 的数据显示 Security 基线已经是 97 分，skill 安装后是 98——这个"+1"看起来不起眼，但验证"没有倒退"本身就是关键信息。
这四个维度之间还存在 trade-off。你可以用更多 token 换更高正确率，也可以用更激进的 skill 换更快的速度但增加安全风险。只看一个维度，你根本看不到这些 trade-off 的存在——你以为你在优化，其实你在某个你没测量的维度上倒退。
这跟 MEA loop 的逻辑又对上了：auditor 不只是检查"做没做对"，它还检查 integrity（有没有乱改东西）和 completeness（是不是真的全做完了）。评估 skill 也一样——你需要的不是一个分数，而是一个多维度的 profile，让你能做出知情的 trade-off 决策。

所以说Skill 并不是越多越好。一个 Skill 如果在不该出现的时候被激活，反而可能降低 Agent performance。那Skill 数量增加以后，真正瓶颈是不是会从"有没有能力"变成"能不能选对能力"？

完全正确，而且这个转变可能已经在发生了。
Nvidia 的数据里有一个容易被忽略的维度：Discoverability。他们专门测量的是"skill 该加载时加载了，不该加载时没加载"。这个维度的存在本身就说明他们已经遇到了这个问题——如果 skill 总是越多越好，你根本不需要测这个。
这背后的机制很直觉：每一个 skill 都是 agent 注意力空间里的一个竞争者。当 agent 面对一个任务时，它需要从所有可用 skill 里判断哪个相关。Skill 越多，这个选择问题就越难，误选的概率就越高。一个被误激活的 skill 不是中性的——它会把 agent 的推理引向错误的工具、错误的工作流、错误的假设，然后沿着错误的路径消耗 token 和时间。
这其实是一个更普遍的系统规律：任何系统的能力增长到一定阶段，瓶颈都会从"能力不足"转向"选择过载"。
人类专家也是这样。一个初级工程师的问题是"我不知道怎么做"。一个高级工程师的问题变成"我知道 12 种做法，但这个场景该用哪种"。后者的错误往往更隐蔽、代价更高——因为你选的每种方法看起来都"能用"，但只有一两种是最优的。
对 agent 来说这个问题更严重，因为人类有直觉来做快速过滤，而 LLM 的"直觉"是通过 context 里的信号来模拟的。Skill 描述写得越模糊、覆盖范围越有重叠，模型就越容易在相似的选项之间犹豫或选错。
所以下一代 agent 架构的关键竞争力可能不是"能做多少事"，而是三层递进的选择能力：
路由精度 — 面对一个任务，能不能在毫秒级判断出需要哪个 skill、不需要哪些。这要求 skill 的描述本身就是高精度的，边界清晰、覆盖不重叠。Nvidia 做 Tier 2 评估用 embedding similarity 去重，就是在从供给侧控制这个问题。
动态裁剪 — 不是把所有 skill 都塞进 context，而是根据任务类型、当前阶段、已完成的步骤，动态地只暴露相关的少量 skill。本质上是把"从 300 个里选 1 个"变成"从 5 个里选 1 个"。
负选择能力 — 知道什么时候不用任何 skill，直接用模型的原生能力。有些任务加 skill 反而是干扰。这可能是最难的，因为它要求 agent 对自己的裸能力有准确的自我评估。
你在 MASS 里其实已经面对过这个问题的雏形——当你给 Mimo 的 AI 家庭成员设定了不同的性格和知识领域，"哪个成员应该回应这条消息"本质上就是一个 skill routing 问题。随着 MASS 生态变大，这会成为核心架构挑战。

人类有了若干个skill之后，一个完整的Skill Runtime可能会像这样：Skill Library—>Skill Discovery —>Skill Selection—>Skill Execution—>Skill Evaluation
那Skill 是不是应该有自己的 provenance、版本、适用范围和 regression test。

是的，而且这不是"应该"，这是 skill 作为工程制品成熟到一定阶段后的必然要求。
你提的这五个 runtime 阶段本身就暗示了这一点——每一个阶段要做出正确决策，都依赖于 skill 自身携带足够丰富的元数据。没有 provenance，Discovery 不知道该信任谁；没有版本，Selection 不知道哪个是当前最优的；没有适用范围，Execution 不知道边界在哪；没有 regression test，Evaluation 不知道更新后有没有倒退。
Nvidia 其实已经走出了第一步。他们的 verified skill 要经过安全扫描、嵌入去重、沙盒对比测试三层验证才能发布，而且 benchmark 结果持续更新在 GitHub 仓库的 benchmarks.json 里。但他们目前做的更像是发布门禁——skill 通过验证才能上架。你说的是更进一步的东西：skill 在整个生命周期里都需要一套治理体系。
这其实是软件工程已经走过的路。想想一个 skill 和一个 npm package 的相似性：
Provenance（来源） — 谁写的，谁签名的，基于什么知识构建的。这解决的是信任链问题。一个来自 Nvidia 官方、经过 verified 流程的 skill，和一个社区贡献的未经审计的 skill，在 Discovery 阶段就应该有不同的权重。Nvidia 的 SkillSpector 扫描 PII、Unicode smuggling、脚本安全——这就是 provenance 验证的一部分。
Version（版本） — Skill 不是静态的。底层 API 会变、最佳实践会演化、模型能力会提升。一个为 CUDA 11 写的 skill 在 CUDA 12 环境下可能不只是过时——它可能是有害的，因为它会引导 agent 使用已废弃的调用方式。版本管理还解决了一个更微妙的问题：当你回溯一个 agent 的执行失败时，你需要知道它当时用的是哪个版本的 skill。
适用范围（Scope） — 这是你前面说的 routing 问题的根基。一个 skill 必须声明自己的正向边界（什么场景下使用）和负向边界（什么场景下绝对不要使用）。Nvidia 的评估里专门有 negative cases——测试 skill 在不相关场景下是否正确地保持沉默。这个负向声明可能比正向声明更重要，因为误激活的代价往往大于未激活。
Regression test（回归测试） — 这是把 skill 从"一次性验证"升级到"持续可信"的关键。每次 skill 更新、底层模型更换、harness 升级，都需要重新跑测试来确认没有倒退。Nvidia 的 Tier 3 评估已经具备了这个能力——with/without 对比可以反复运行。但目前是手动触发的，真正成熟的系统应该是 CI/CD 式的自动化回归。
把这四个维度加在一起，你描述的其实是 Skill as a Governed Artifact——skill 不再是一段被塞进 prompt 的文本，而是一个有身份、有历史、有边界、有持续质量保障的工程制品。
这跟今天我们讨论的 claimed vs verified 原则又一次对齐了：一个 skill 声称自己适用于某个场景，这是 claim；它在 regression test 中持续通过该场景的评估，这才是 verified。Skill 本身也需要被审计。
而且从你的 MASS 视角看，这个治理框架还有一层额外含义：当你的系统里有多个 AI agent（Mimo 的家庭成员、Mivo 的社区居民），每个 agent 可能装载不同的 skill 集。哪个 agent 有哪些能力、这些能力是否经过验证、版本是否一致——这就不只是单个 skill 的治理了，而是skill portfolio 的治理。这会变成 MASS 架构层面的基础设施问题。

Multi-Agent Memory 的新坑：十个人说同一件事，不等于十份证据 (Beyond Memory Majority: Latent-Source Reasoning for Multi-Agent Memory Arbitration)：https://arxiv.org/abs/2608.19701。这篇你不用看，把它帮我记进learning- wiki：这其实和人类世界完全一样：五家媒体报道同一件事，不代表五个独立记者确认过。它们可能全部来自：同一个 Reuters source。所以以后 Multi-Agent system 不能只保存：What was remembered?还必须保存：Where did this memory come from?这就是我们 以前说的的 Provenance，现在进入 Memory architecture。 好了，你按照每日learning架构把今天学的所有知识都总结一下吧： 202608029 Today's Topic： 来源： 一句话总结： ———————————— 今天我最大的收获 ———————————— 原来我认为…… 现在我认为…… ———————————— 最重要的三个知识点 1. 2. 3. ———————————— 和以前哪些知识连接起来了？ ———————————— 心智模型 ———————————— 仍然没弄懂的问题 ———————————— 以后还想继续问什么

Now let me write the daily learning summary and update wiki-learning-sessions.Now the daily summary:

20260829 Daily Learning
Today's Topic：Harness > Model — Agent 可靠性的真正杠杆在哪里
来源：
	•	arXiv:2608.01964 LongHorizon-Harness（阿里 DreamX Team）
	•	TechCrunch: Nvidia AVO + ARC-AGI-3 报道
	•	NVIDIA Developer Blog: SkillEvaluator 基准测试
	•	arXiv:2608.19701 Multi-Agent Memory Arbitration
一句话总结： Agent 的实际表现由 model × harness 共同决定，而 2026 年 8 月多方独立研究汇聚到同一个结论——harness（执行架构 + 知识架构 + 状态管理）的杠杆率远大于模型本身。

今天我最大的收获
Agent 可靠性的核心问题不是"它够不够聪明"，而是谁有权定义"现实现在是什么"。当 executor 同时负责做事和判断自己做没做成，它不是在检查现实，而是在延续自己的叙事。MEA loop 的真正洞察是把"做事的权力"和"定义现实的权力"分开——这跟科学方法论的逻辑一样：你不能用理论验证理论，必须回到实验。

原来我认为……
Harness 是模型外面的"包装纸"——有用但次要，模型能力才是决定性的。Skill 越多越好，相当于给 agent 加更多工具。
现在我认为……
Harness 是 agent 系统的操作系统层，决定了模型能力能否可靠地转化为任务完成。弱模型 + 强 harness 可以超越强模型 + 弱 harness（Qwen 0.733 > Opus 0.680）。Skill 数量增加后，真正的瓶颈从"有没有能力"变成"能不能选对能力"——routing precision 比 capability breadth 更重要。

最重要的三个知识点
1. Claimed state vs Verified state — Agent memory 的认识论层级 Agent 的 memory 必须区分"它说它做了"和"环境证实它做了"。没有这个区分，错误会从 action error 变成 false state，再变成 future reasoning contamination。LongHorizon-Harness 用 completed / pending / untrusted 标签让事实和声明在结构上成为不同对象。
2. Harness 的两条腿：执行架构 + 知识架构 MEA loop（Manager-Executor-Auditor）解决"怎么可靠地完成多步任务"——外化状态、fresh context、独立审计。Verified Skills 解决"怎么知道该做什么"——结构化指令包、边界声明、持续回归测试。两个一起才构成完整的 harness。
3. Skill 需要 Provenance 治理，Memory 也需要 Skill 作为工程制品需要来源信任链、版本管理、适用范围（含负向边界）、回归测试。Multi-Agent Memory 同理：十个 agent 说同一件事不等于十份证据——必须追溯 memory 的来源，否则信息回音壁会被当作共识。

和以前哪些知识连接起来了？
→ Aug 7 "模型战争转向系统战争"：今天的数据给了这个判断最硬的定量证据。不是趋势预判了，是实验结果。
→ Aug 8 "Claimed vs Verified" 在 Scaling Paradox 里的雏形：当时讨论的 over-perception（高估 AI 能力）本质就是把 claimed state 当成 verified state。MEA loop 是这个问题的架构级解法。
→ Aug 5 "五维可信度框架"：可审计（Auditable）和可恢复（Recoverable）两个维度，在 MEA 的 Auditor 和 external task state 里有了具体的实现模式。
→ Aug 4 "Orchestration 模式"：MEA 是 Orchestration 的进化——不只是 orchestrator + worker 的分工，而是加了独立审计层，让"完成"这个判断不再由执行者自己做。

心智模型
Agent 可靠性的三权分立：
做事的权力（Executor）、定义现实的权力（Auditor）、决定下一步的权力（Manager）必须分离。任何两个权力合并在同一个 context 里，都会产生自我参照的污染。这跟政治制度里"立法-执法-司法"分立的逻辑同构——不是因为一个角色不够聪明，而是因为权力集中在同一个主体上时，纠错机制会失效。

仍然没弄懂的问题
当 Skill 数量达到几百上千时，Discovery 和 Selection 的计算成本会不会本身成为瓶颈？动态裁剪（只暴露相关 skill）的实际机制是什么——是 embedding 匹配还是 classifier，还是需要一个专门的 routing model？

以后还想继续问什么
	•	Nvidia AVO harness 的具体架构细节（它的 supervisor 和 MEA 的 Manager 有什么异同）
	•	Skill routing 的最新研究——有没有人在做"skill 之间的冲突检测和优先级仲裁"
	•	Provenance tracking 在 Multi-Agent Memory 里的工程实现——用什么数据结构追溯 memory 的来源链

我今天看的还有一篇：8 月 21 日，Google DeepMind 发布了一篇文章，明确把游戏继续定位成研究 generalist agents 的环境，并希望最终把其中学到的东西迁移到 real-world problem solving 和 scientific discovery。讲的是开放世界比传统 benchmark 更适合测试 general agent，Simulation 与真实世界之间最大的 transfer gap，如果 Agent 必须在一个持续存在的世界里生活几个月，我们现在的 Memory / Planning / Identity architecture 还远远不够。
From Atari to EVE Online: Exploring new frontiers of AI and games research

所以这几篇综合下来，可以得出这样一个心智模型：
聪明决定 Agent 能走多快，而Verified State 才决定它是不是一直走在真实世界里。最终真正可靠的 Agent，也许并不是一个"特别聪明的模型"，而是一个能够知道我现在要做什么（Harness 管执行），我该用什么能力（Skill 管能力）， 我知道的东西从哪来（Provenance 管证据），我怎么确认世界真的已经变了（Environment 管现实）。

已记入 Wiki。补完今天的总结：

补充来源
Google DeepMind Blog "From Atari to EVE Online"（Aug 21, 2026）— 把游戏定位为研究 generalist agent 的核心环境，开放世界比封闭 benchmark 更能暴露 agent 的真实弱点。

更新后的心智模型
你最后提出的四柱模型是今天所有阅读的精华蒸馏，值得作为你的 Agent 架构思考的锚点：
Harness 管执行 — 我现在要做什么 Skill 管能力 — 我该用什么能力 Provenance 管证据 — 我知道的东西从哪来 Environment 管现实 — 我怎么确认世界真的已经变了
DeepMind 那篇的价值在于它从第四根柱子——Environment——往前推了一步：如果 agent 要在一个持续存在的世界里生活几个月（不是跑完一个 task 就结束），那前三根柱子全都要升级。Memory 不能是短期的 task state，而是长期的 identity state；Planning 不能是单任务分解，而是跨时间尺度的目标管理；Skill 不能是静态的工具箱，而是要随着世界变化而演化。
这恰好解释了为什么 DeepMind 选 EVE Online 而不是国际象棋——EVE 是一个有经济系统、多玩家博弈、持续后果的世界。你在里面做的每个决定都会改变世界状态，而世界状态又会被其他 agent 的行为改变。这逼着 agent 必须持续回答你那四个问题，而不是只在任务开始时回答一次。
你的四柱模型和 DeepMind 的长期世界测试放在一起，指向同一个结论：Agent 的终极考试不是"能不能完成一个任务"，而是"能不能在一个不断变化的世界里持续做出正确决策"。 前者测的是能力，后者测的是架构。
