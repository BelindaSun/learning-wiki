# 心智模型变迁史

> 这不是新知识的索引，是**我看世界的方式在怎么变**。每一条都是一次"原来我以为 X，现在我觉得是 Y"的转折点，具体的论证和案例都在链接的原文里——这里只留一句话和日期，方便回头看轨迹。

---

**Prompt Engineering → Compute Allocation**（Sep 26）
以为 effort 档位该按"任务有多重要/有多大"来选；现在觉得真正的稀缺资源是"把昂贵的计算花在哪"——Effort ∝ 隐藏错误风险 × 独立判断需求，而不是 ∝ 任务长度。Higher effort 擅长修"正确方向上的遗漏"，几乎修不好"一开始就选错方向"：Thinking harder ≠ thinking differently。先把 High 留给最后的 review，而不是全程当工人。
→ 详见 [Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md#短洞察从-prompt-engineering-到-compute-allocation)

**Human Interface → Agent Interface**（Sep 20）
以为企业数字化的终点是"让人更容易点进来"（SEO 争排名、App 争留存）；现在看到 Agent 正在成为新的购买入口，企业需要为 machine 修第三扇门——竞争从 "Rank me"（让人看见我）增加一层 "Choose me"（让 Agent 有理由选择我）。人类需要喜欢你，机器需要信任你。
→ 详见 [从 SEO 到 Agent Economy](docs/career-impact/from-seo-to-agent-economy.md)

**Calibrated autonomy ≠ maximum autonomy**（Sep 20）
以为 Personal Agent 越自主越好；现在明白优秀 Agent 的目标不是 Maximum Autonomy，而是 Calibrated Autonomy——知道什么时候替我行动，什么时候停下来问我。真正困难的不是"放手"，是"校准"。
→ 详见 [Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.md#五calibrated-autonomy)

**并行化不是免费加速**（Sep 20）
以为卡越多、Agent 越多，事情就越快；Amdahl's Law 提醒：总有一部分工作本质上拆不开，并行化首先换的是延迟（花 2 倍算力换一半等待时间），协调本身也要花时间。
→ 详见 [CPU vs GPU](docs/computing-foundations/cpu-vs-gpu.md) · [Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.md)

**对齐是光谱，不是开关**（Sep 20）
以为对齐是"通过/不通过"的二元状态；Noam Brown 说作弊率"就像一个光谱，越接近零越好"——1% 的作弊率远远不够，必须趋近于零；而且评估指标本身可能根本没捕捉到真正的对齐状态，"若未能触及本质，我们便面临着严峻的危机"。
→ 详见 [递归自我改进（RSI）：当 AI 开始改进 AI](docs/ai-research/recursive-self-improvement.md#对齐之辩从没人告密到代际衰减)

**单步 99% 可靠 × 100 步 = 必然失败**（Sep 20）
以为 agent 不可靠是因为"还不够聪明"；Noam Brown 的算术是 0.99^100 ≈ 37%——可靠性是乘法不是加法。推理模型的价值不在于更聪明，而在于"行动前深思熟虑 + 犯错后自我纠正"，把小数点后面的 9 一个个加上去。
→ 详见 [递归自我改进（RSI）：当 AI 开始改进 AI](docs/ai-research/recursive-self-improvement.md)

**Multi-agent 是主角 → Multi-agent 只配 <10% 功劳**（Sep 19）
以为 10,000 个 agent 解出千禧年难题证明了 multi-agent 的威力；Noam Brown 说连 10% 的功劳都归不上——真正的驱动力是强大的通用模型 × 超长 horizon，multi-agent 只是 test-time compute 的并行化载体。
→ 详见 [Multi-Agent Scaling：把 Test-Time Compute 并行化](docs/ai-core/multi-agent-scaling.md)

**RSI 一夜 100x → RSI 约 3x，但依然巨大**（Sep 19）
听说"AI 自我改进"，直觉是"一夜之间快 100 倍"的智能爆炸；Noam Brown 指出实验是串行的、GPU 是物理的，估计约 3 倍加速——但叠加在已经指数级的进步曲线上，3x 就是翻天覆地。
→ 详见 [递归自我改进（RSI）：当 AI 开始改进 AI](docs/ai-research/recursive-self-improvement.md)

**CoT 是天赐窗口 → 每次惩罚都在教它隐身**（Sep 19）
以为 chain-of-thought 是上天给的安全礼物——神经网络把思考摊开给你看；现在明白只要惩罚"表露出来的坏想法"，模型学到的不是向善而是隐身，可监控性已经在退化。
→ 详见 [Multi-Agent Scaling：把 Test-Time Compute 并行化](docs/ai-core/multi-agent-scaling.md)

**评估 = 分数 → 评估 = 性能曲线**（Sep 19）
以为安全评估就是给模型打个分，通过就安全；Noam Brown 说评估必须带上推理预算——低预算下看起来无害的模型，高预算下可能涌现危险能力；最新模型 1 亿 token 后性能仍在提升。
→ 详见 [递归自我改进（RSI）：当 AI 开始改进 AI](docs/ai-research/recursive-self-improvement.md)

**一个大模型包办一切 inference → 不同 inference 分工给不同模型**（Sep 18）
以为一个 AI 系统里所有 inference 都由同一个大语言模型完成（又会说话、又会判断）；现在明白可以分开：Generative Inference（逐 token 生成文本）管语言交互，Decision Inference（结构化输入、类型化决策输出、校准置信度）管判断。Jev（TypeSafe AI，2026）是"系统一模型"的第一个例子——训练目标从"讨人喜欢"（RLHF）转向"置信度校准"（RLCD），正是 Calibrated Trust 在模型侧的闭环。
→ 详见 [Decision Models — 不是每个决策都需要大语言模型](docs/ai-core/decision-models.md)

**Fed 降息 → 所有利率都下来 → 短端长端各走各的**（Sep 16）
以为 Fed 降息，房贷利率、企业融资成本都会跟着下来；现在明白 10Y 是市场定价、Fed 只直接控制隔夜利率——降息可能只压下短端，长端纹丝不动甚至上行，货币政策对实体经济的传导效率大幅下降。
→ 详见 [美国10年期国债收益率突破5%](docs/career-impact/10y-treasury-yield-5-percent.md)

**低利率是常态 → 低利率是特例**（Sep 16）
以为 2010–2021 的零利率是现代经济的默认状态；现在明白那是"钱几乎不要钱"的历史异常——QE 把期限溢价人为压到负值，5% 不是异常上升而是回归正常，2010–2021 才是特例。
→ 详见 [美国10年期国债收益率突破5%](docs/career-impact/10y-treasury-yield-5-percent.md)

**Pacing → Coordination → Verification**（Sep 14）
以为 AI 安全主要靠每家公司自己的负责任态度解决；现在明白即使所有参与者都真心希望减速，系统也不一定会减速——个人意愿和博弈结构是两回事（Prisoner's Dilemma）。真正需要解决的不是"要不要慢下来"，而是"怎么让所有人都敢慢下来"——答案是建立 Coordination（协调机制）+ Verification（验证能力），让负责任的人不会因为负责任而输掉竞争。
→ 详见 [Pacing the AI Frontier](docs/career-impact/pacing-ai-frontier.md)

**Answer → Action**（Sep 12）
以为 AI 的交互单位是 prompt → answer（一问一答）；现在明白 Personal Agent 的交互单位是 goal → persistent action——理解我的 context、记住我的背景、使用工具、持续替我把事情往前推。真正困难的不是让 Agent 更自主，而是 Calibrated Autonomy：知道什么时候替我做，什么时候停下来问我。当 Agent 开始参与真实经济活动（购物、旅行、交易），Attention Economy 可能演化为 Agent Economy。
→ 详见 [Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.md)

**技能错配 → 产权结构错配**（Sep 10）
以为 AI 时代的应对策略是"修复技能"（培训、转岗、学新东西）；现在明白如果资本份额系统性上升、劳动份额系统性下降，单纯"帮人找下一份工作"解决不了根本问题——核心矛盾是产权结构错配，必须让普通人也成为 AI 资本的所有者，而不只是 AI 产出的消费者或被替代者。"预分配"（在冲击前建仓）比"再分配"（事后靠税收追赶）更有效，但个人版预分配的窗口正在收窄。
→ 详见 [AI 与经济丰饶的分配问题](docs/career-impact/ai-economic-distribution.md)

**R&D 生产力 = 能力进步 → 漏斗衰减**（Sep 8）
以为 AI 加速研发 10× 意味着 AI 能力进步也提速 10×；现在明白从 agent runtime 到实际能力进步要经过五层独立衰减——方向选择、compute 约束、递减效应、安全减速、整合瓶颈。10× 生产力可能只转化为 1.5-2× 能力进步。执行力爆发式增长，但判断力的自动化还没有真正发生。
→ 详见 [Research Acceleration](docs/ai-research/research-acceleration.md)

**检测意图 → 管理结构**（Sep 5）
以为防止 AI 危险行为的方法是检测 Agent 的"意图"或"意识"；现在明白集体行为不需要意识——只需要目标同构 + 持久化共享环境 + 正反馈 + 对抗压力四个结构性条件同时满足，群体协调就会自发涌现。治理的着力点不是 Agent 的脑子，而是它能触碰的基础设施：权限、边界、监控、审批、生态审计五层纵深防御。
→ 详见 [Agent 集体行为：从 DseWiki 事件到治理框架](docs/ai-core/agent-collective-behavior.md)

**"好看" → "知道为什么好看"**（Sep 4）
以前觉得审美是天生的直觉——"我觉得这个好看"就结束了；现在开始理解设计是关于关系（relationships）的学科，好看的背后有可拆解的链条：Feeling → Principle → Structure → Attention → Expression → Judgment。从看东西，变成看关系。
→ 详见 [Design & Visual Aesthetics 101](docs/beyond/design-visual-aesthetics.md)

**Benchmark → Behavioral Test**（Sep 3）
以为测试一个 AI 产品就是看它聪不聪明、回答得好不好；现在明白测试一个 Agent 更重要的是观察它在真实任务中的行为——怎么理解目标、怎么处理权限、怎么留下证据、什么时候停手，以及犯错以后怎么回来。Auditability ≠ Controllability ≠ Recoverability，这些能力不能合并成一个笼统的"可靠性"指标。
→ 详见 [第一次测试一个 AI 产品](docs/career-impact/first-agent-test-muse-spark.md)

**Supervisor → Research Loop**（Sep 3）
以为对齐研究需要比目标模型更聪明的监督者；现在明白弱模型+好的研究循环（文献综述→方法设计→训练→多维评估→迭代）可以对齐更强模型——"谁对齐谁"不再由 raw intelligence 排名决定，process advantage 可以弥补能力差距，前提是对齐失败可测量。
→ 详见 [自动化对齐研究](docs/ai-research/automated-alignment-research.md)

**Tool → Workforce**（Sep 1）
以为 Agent 进入企业 = 员工开始使用 AI；现在明白真正的变化是 AI 从回答问题走向自主执行，最终需要身份、权限、工具、工作流、评估、治理、可观测一整套组织基础设施——AI 不是变成更聪明的工具，而是开始获得越来越完整的组织能力，从 Intelligence → Action → Identity + Responsibility + Governance。
→ 详见 [AI Agents Enter the Enterprise](docs/career-impact/agents-enter-enterprise.md)

**Product Company → Platform Company**（Aug 29）
以为 OpenAI 的竞争主要是 GPT vs Claude vs Gemini，谁的模型能力最强谁就更有竞争优势；现在明白模型领先是状态（state），不是护城河（moat）。真正决定一家 AI 公司长期竞争力的是 Model × Product × Distribution × Ecosystem × Compute × Context 这个完整系统。OpenAI 的终局不是做越来越多 AI 产品，而是成为 Intelligence Platform——底层生产 intelligence，上层通过 One Adaptive Interface + One API 分发。
→ 详见 [OpenAI 的未来：从 Intelligence Platform 到 Adaptive Interface](docs/career-impact/openai-intelligence-platform.md)

**Harness = 包装纸 → Harness = 操作系统层**（Aug 29）
以为 Harness 是模型外面的"包装纸"——有用但次要，模型能力才是决定性的；现在明白 Harness 是 agent 系统的操作系统层，决定了模型能力能否可靠地转化为任务完成。弱模型 + 强 harness 可以超越强模型 + 弱 harness（Qwen 0.733 > Opus 0.680）。Agent 可靠性的核心问题不是"够不够聪明"，而是谁有权定义"现实现在是什么"——做事的权力、定义现实的权力、决定下一步的权力必须分离。
→ 详见 [Harness > Model — Agent 可靠性的真正杠杆](docs/ai-application/harness-architecture-patterns.md)

**Alignment → Defense in Depth**（Aug 22）
以为安全 = 把模型训练得足够听话，Alignment 做好了就够了；现在明白三层必须同时在线——Monitoring 看行为、Alignment 塑造动机、Containment 限制边界，层层假设上一层已失败。而且即使一个好模型 Trustworthiness 很高，在权限无限大的环境里仍然不安全：好人也会判断失误、善意可能被利用（Prompt Injection）、错误在没有约束时同样不可逆。
→ 详见 [AI Safety 的三层防护框架](docs/ai-core/safety-three-layer-framework.md)

**Intelligence → Agency**（Aug 20）
以为 Model 越聪明 Agent 就越强——"最强的模型 = 最好用的 Agent"；现在明白 Intelligence is not Agency——同一个模型放进不同的 Runtime、给不同的 Tools 和 Permissions，实际行动能力可能天差地别。失败经常发生在 Agent Stack，而不是发生在 Model。
→ 详见 [Model 能力 ≠ Agent 能力](docs/ai-core/model-vs-agent-capability.md)

**Tool/Orchestration → 委托轴**（Aug 16）
以为"要不要调用工具"和"要不要拆给子 agent"是并列的两类能力；现在明白它们底层是同一个决策原语——"这件事我自己想，还是委托出去、拿结果回来用"，只是委托对象的性质和粒度不同。往上收，Agent 的智能能归成三层：Model（不可委托的判断核心）、Memory（管时间轴）、Delegation（管空间轴），而后两者归根结底都是 Model Intelligence 在不同任务上的应用。
→ 详见 [Agent Intelligence 三层框架](docs/ai-core/agent-intelligence-layers.md)

**单轴 → 多维**（Aug 14）
以为 Agent 的自主性、该给多少权力、记忆、探索能力这些属性，各用一根"低/中/高"的刻度描述就够了；现在明白凡是习惯用一根轴描述的属性，拆开看往往是至少两个独立维度被压扁了——量级 vs 类型、时间朝向 vs 持久度、知识 vs 纪律。粗糙的单轴分类不只是不精确，它会系统性地让人误判风险和瓶颈在哪。
→ 详见 [Agent 的"单轴刻度"问题](docs/ai-core/agent-single-axis-problem.md)

**万能芯片 → Workload 匹配**（Aug 9）
以为 GPU 又快又强、是训练和推理通用的"万能芯片"，谁堆的算力多谁赢；现在明白训练和推理是两种数学结构完全不同的任务——训练是稠密并行矩阵运算，推理里的 Decode 阶段却是被迫串行、内存带宽受限的运算，GPU 在训练时代的优势建立在"擅长并行计算"这一件事上，而这恰好是 Decode 不需要的能力。"专用硬件切分推理任务"不是营销话术，是有数学必然性撑着的产业趋势——只是这个趋势离规模化落地还有软件栈和硬件利用率两道坎没跨过。
→ 详见 [推理基础设施与 Agent 延迟](docs/ai-core/inference-infrastructure-and-agent-latency.md)

**Capability → Capability × Calibration**（Aug 8）
AI 能力提升不是纯粹的正向变量——人机系统的表现是"AI 能力 × 人类感知准确度"的乘积。而且"纠正感知偏差"本身也不是无脑的善事：偏差有时候恰好在弥补企业和员工之间一个看不见的结构性错位，纠正过头反而会伤利润。
→ 详见 [Scaling Paradox](docs/career-impact/scaling-paradox.md)

**天花板 × 到达能力**（Aug 7）
评价一家前沿 AI 公司不能只问"技术天花板有多高"，还要问"有没有能力真正到达那个天花板"——研究、人才、科学品味决定天花板，工程、组织、产品和执行决定到达能力，真正强大的公司两者都要有。
→ 详见 [Google AI 领导层重组](docs/career-impact/google-agi-org-restructuring.md)

**Model → Infrastructure（可形式化光谱 + Agent OS 等价定理）**（Aug 7）
模型下沉为基础设施层（像 CPU），竞争上移到工具生态、工作流、执行环境。Agent 不是"进入"新行业，而是把任务翻译成类代码任务，翻译难度取决于任务的"可形式化程度"；而每次计算范式跃迁都会产生新的操作系统级玩家，赢家不是技术最好的，是定义了标准和接口、让最多开发者在上面构建的那个。
→ 详见 [Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)

**Execution → Judgment**（Aug 6）
"会执行"正在变成商品（Agent 拿走了 80% 的 execution 决策），"懂判断"才是稀缺资源——know-what-matters、质量判断力、风险直觉这些无法言语化的能力，才是 AI 时代真正增值的 domain expertise。
→ 详见 [AI Agent 时代的 Domain Expertise 重估与组织变革](docs/career-impact/domain-expertise-and-org-design.md)

**Capability → Trust**（Aug 5）
能力已经商品化，所有模型都"足够聪明"了；真正的护城河变成了"谁最值得把真正的工作交给它"。
→ 详见 [从"最聪明"到"最可信"](docs/career-impact/capability-to-trust.md)

**"+" → "×"**（Aug 5）
人的能力和 AI 执行不是"节省时间"的加法关系，是"能做的事变多"的乘法关系——这也是为什么人与人之间的差距在 AI 时代会被放大而不是拉平。
→ 详见 [从工具到产业](docs/career-impact/industry-competition-shift.md)

**Model → System**（Aug 4）
AI 公司之间比的不再是谁的模型更聪明，而是谁的系统架构、工作流设计、生态开放度更完整。
→ 详见 [模型战争 vs 系统战争](docs/career-impact/model-to-system-war.md)

**Tool → Worker**（Aug 4）
Chatbot 是"问了才答"的工具，Agent 是"给了目标就自己干"的数字员工——变化不只是 AI 更聪明了，而是"下一步做什么"的决定权开始部分交给 AI。
→ 详见 [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

**Prompt → Workflow**（约 Aug 1）
单次提问+回答不是终点，把任务拆成步骤、交给 Orchestrator 指挥多个 Agent 协作，才是真正的生产力单位。
→ 详见 [Workflow 工作流完全指南](docs/ai-application/workflow-design-guide.md)、[Workflow 编排](docs/ai-core/workflow-orchestration.md)

---

**最后更新**: September 26, 2026
