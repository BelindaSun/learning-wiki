# 心智模型变迁史

> 这不是新知识的索引，是**我看世界的方式在怎么变**。每一条都是一次"原来我以为 X，现在我觉得是 Y"的转折点，具体的论证和案例都在链接的原文里——这里只留一句话和日期，方便回头看轨迹。

---

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

**最后更新**: September 5, 2026
