# 更新日志

记录 Wiki 的所有更新。最新的在上面。

## [v4.4] - August 9, 2026

### 📝 Daily Update - Memory Spine 第一块内容：内存墙

**新增页面**：`docs/computing-foundations/memory-wall.md` —— 回答内存脊骨架页承诺的"为什么更快的算术 ≠ 更快推理"。从 Foundation Zero 已认识的"内存 vs 存储"原子出发，走到内存层级（越近越快越小越贵）→ 容量 vs 带宽（两个独立维度）→ 算术强度 / compute-bound vs memory-bound，跟已经写好的 [推理基础设施与 Agent 延迟](docs/ai-core/inference-infrastructure-and-agent-latency.md)（Prefill/Decode、GEMM/GEMV）双向链接，作为这套硬件逻辑的真实案例。

**新增概念**：Memory Wall（内存墙）、Memory Hierarchy（内存层级）、Bandwidth vs Capacity（带宽 vs 容量）、Arithmetic Intensity（算术强度）

**术语消歧**：`glossary.md` 里 Agent 的 Memory（记忆）词条和硬件的 Memory Wall 词条互相加了消歧提示——中英文撞了同一个词，但指的是完全不同的东西。

**索引更新**: `index-all-concepts.md` 新增 4 个概念条目（99 → 103）。

## [v4.3] - August 9, 2026

### 📝 Daily Update - Wiki V2 架构迁移 + Computing Foundations Three Maps + Compute Spine 第二块内容

**V2 架构迁移**：Computing Foundations 从"嵌在 AI Core 下"提升为顶层领土、导航排第一；AI 应用 → AI in Practice、职业与影响 → Industry & Impact 改名；Mental Models 从领土重新归类为 Explore 门（横切透镜）；Glossary + 全部概念索引合并进 Look Up 门；首页改为三扇门（Learn/Look Up/Explore）+ 依赖排序的领土堆叠（倒三角，地基最宽）；Start Here 按动机顺序重排为 8 站，插入"好奇它到底跑在什么上面"一站，链接下钻 Computing Foundations。Growth Rules 写入 `CLAUDE.md`。

**Computing Foundations 内部层级**：landing page 重构为 **Start**（Foundation Zero → From Silicon to AI）→ **Orient**（Three Maps）→ **Go Deeper**（五主脊），CPU vs GPU 从与五主脊平级的文章，改为嵌在算力脊之下的子页面。

**新增 Three Maps**（Orient 层，只回答"是什么、大概长在哪"，不讲"为什么"）：
- `docs/computing-foundations/software-map.md` —— 应用代码 + 模型（权重，不是代码）汇入 Runtime
- `docs/computing-foundations/hardware-map.md` —— 算力/内存/互连三个维度，在芯片/服务器/集群三个尺度重复出现的网格
- `docs/computing-foundations/software-hardware-map.md` —— Compiler → Kernel/Library → Runtime →｛Scheduling/Batching/Precision/Memory management｝的桥

**新增概念**：Runtime、Compiler、Kernel、Precision、Batching、Interconnect、Accelerator、FLOPS

**Compute Spine 第二块内容**：
- `docs/computing-foundations/flops-and-precision.md` —— 回答"为什么降精度能提速"（算力脊骨架页承诺的第二个问题），与 [Models 深挖](docs/ai-research/models-deep-dive.md) 的量化准确率角度互补、双向链接

**索引更新**: `index-all-concepts.md` 新增 11 个概念条目（88 → 99），"计算基础"主题分类改按 Start/Orient/Go Deeper 分组；`glossary.md` 新增"计算基础"分类。

## [v4.2] - August 9, 2026

### 🖥️ 新增第 6 个顶层分支：Computing Foundations（Phase 0）

**范围**：Computing Foundations 坐在 AI Core 之下，是"读懂 AI 时代所需的最小计算基础"这一层地基。Phase 0 只交付结构和骨架，不写任何概念详情页——那是 Phase 1+ 的事。

**新增页面**：
- `docs/computing-foundations/index.md` - 分支首页，嵌入 "From Silicon to AI" 主定向图（硅/晶体管 → 芯片 → 处理器/计算系统 → 服务器 → 集群 → 数据中心 → 训练/推理 → AI 产品，左轨半导体供应链、右轨软件栈）
- `docs/computing-foundations/foundation-zero.md` - 地基第 0 层：5 组最基本的"原子"（硬件/软件、CPU/内存/存储、代码/程序/进程/OS、客户端/服务器/网络/API、核/并行/GPU），每组一句话 + 一个心智图像
- `docs/computing-foundations/compute-spine.md`、`memory-spine.md`、`scale-spine.md`、`bridge-spine.md`、`semiconductor-spine.md` - 5 主脊骨架页，各自只放脊图（概念链）+ 一句要回答的问题
- `docs/computing-foundations/assets/from-silicon-to-ai.svg`、`foundation-zero.svg` - 两张视觉资源

**新增概念**：Computing Foundations、Foundation Zero、Compute Spine（算力脊）、Memory Spine（内存脊）、Scale Spine（规模脊）、Bridge Spine（软硬桥脊）、Semiconductor Spine（半导体脊）

**交叉链接示范**（Phase 0 只接骨架级，其余留 Phase 1+）：
- [推理基础设施与 Agent 延迟](docs/ai-core/inference-infrastructure-and-agent-latency.md)（解构式推理）↔ [内存脊](docs/computing-foundations/memory-spine.md)，双向
- [Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)（模型下沉为 CPU 的类比）↔ [算力脊](docs/computing-foundations/compute-spine.md)，双向

**设计要点**：Foundation Zero 第 5 组卡片（核/并行/GPU）不高亮——五组是同级原子；主图黄色框把"处理器 + 内存 + 互连"包在一起表示一个计算系统（算力 = 处理器的能力，不是另生成的一层）。Phase 1 写 CPU vs GPU 详情页时，必须主动纠正这里"中央厨房"比喻的近似（GPU 不只是核更多，而是整体架构偏高吞吐、大规模并行）。

**索引更新**: `index-all-concepts.md` 新增 7 个概念条目（81 → 88），新增"计算基础"主题分类；README.md 结构树、快速导航、"最新更新"表同步更新。

## [v4.1] - August 9, 2026

### 📝 Daily Update - 推理基础设施与 Agent 延迟

**新增页面**:
- `docs/ai-core/inference-infrastructure-and-agent-latency.md` - Prefill（compute-bound）与 Decode（memory-bandwidth-bound）为什么是两种数学结构完全不同的运算、为什么训练时代的 GPU 优势不能平移到推理、Agent 多步任务里 latency/tokens-$/吞吐量/tokens-watt 四个指标的优先级排序、Workload 形状（输入输出比例 × SLA 容忍度 × 请求到达模式）如何决定"最优硬件"没有单一答案、AI 基础设施从同构走向异构的产业格局判断（含"为时过早"的限定）
- `docs/conversations/inference-infrastructure-and-agent-latency.md` - 完整学习对话记录

**新增概念**:
- Disaggregated Inference（解构式推理）、Prefill、Decode、Compute-bound vs Memory-bandwidth-bound、Workload（Workload 形状）

**来源**: Cerebras Blog "The GPU Is Being Split in Half"、AMD × Cerebras 合作新闻稿（2026年7月）、arXiv:2604.10852 "The xPU-athalon"（Golden, Wu, Wei, Brooks，Harvard/Meta FAIR，ISPASS 2026）

**心智模型**: 新增 [万能芯片 → Workload 匹配](mental-models.md)（Aug 9）

**相关**: 延伸自 [Inference 推理系统完全指南](docs/ai-core/inference-system-guide.md)（单次推理内部机制 → 服务大量请求时的硬件拆分），与 [Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md) 相连（Agent OS 的软件层逻辑之下，补上了硬件物理约束这一层），双向链接已建立

**编辑处理**: 原始对话里提到的 Mimo/Mivo 具体产品案例，在正式指南页面里泛化成"Agent 系统/Agent 开发者"，保留在 `docs/conversations/` 的完整记录里——延续既有的个人产品信息处理约定。厂商自己给出的性能倍数声称（AMD/Cerebras 的"5 倍能效提升"）在正文里明确标注为"厂商自己给出的数字，还没有独立第三方验证"，不作为既定事实呈现。

**索引更新**: `index-all-concepts.md` 新增 5 个概念条目（76 → 81），`docs/ai-core/index.md`、README.md"最新更新"表同步更新。

## [v4.0] - August 8, 2026

### 🔗 Phase 3 全站推广 Batch B（收尾）+ 两处顺手修正

**范围**：Batch A 过审后，把剩下的 8 篇文章（ai-research 2 篇 + career-impact 6 篇）走完，Phase 3 到此覆盖全部 21 篇正式指南文章。

**8 篇**：
- [Evaluation 评估系统](docs/ai-research/evaluation-system.md) — 正文 0 链接，Before Reading: Model · Inference
- [Models 深挖](docs/ai-research/models-deep-dive.md) — 正文 0 链接，Before Reading: Model · Token
- [从"最聪明"到"最可信"](docs/career-impact/capability-to-trust.md) — 正文 0 链接（Agent 反复出现但只是对比对象，按规则不因为"出现了"就链接），Before Reading: Agent · Harness
- [Domain Expertise 与组织变革](docs/career-impact/domain-expertise-and-org-design.md) — 正文 2 链接（Workflow、Tool），Before Reading: Agent · Harness
- [Google AI 领导层重组](docs/career-impact/google-agi-org-restructuring.md) — 正文 3 链接（Tool、Context、Workflow，同一句话里），**跳过 Before Reading**——文章是组织战略分析，不需要先懂 Agent 机制才能跟上论证
- [从工具到产业](docs/career-impact/industry-competition-shift.md) — 正文 2 链接（Harness、MCP），Before Reading: Agent · Harness · MCP
- [模型战争 vs 系统战争](docs/career-impact/model-to-system-war.md) — 正文 4 链接（LLM、Workflow、Tool、MCP），**跳过 Before Reading**——正文本身就在按顺序带读者认识这几个词，重复一次没必要
- [Scaling Paradox](docs/career-impact/scaling-paradox.md) — **正文 0 链接，跳过 Before Reading**——自成体系的分析型文章，唯一一处"模型"是统计/分析模型的意思（三层模型框架），不是 AI Model，链接了就是范畴错误

**顺手修的两处小问题**（Belinda 指出）：
- `glossary.md` 开头引导语"正文里第一次出现这些词时可以直接点链接跳过来"，容易让人以为是"往前跳"，改成"在正文里遇到不熟悉的核心术语，点一下就能回到这里快速查看"，更准确地描述这是"回来查"不是"跳过去"
- "Skills 是大脑，MCP 是手和眼睛"这个类比在 Phase 2 时已经从 `glossary.md` 里软化过，但同样的断言式写法还留在另外两处：`mcp-protocol-guide.md` 自己的核心概念高亮行（直接改写，去掉这个类比）、`memory-system-guide.md` 里"Skills/MCP/Memory"三件套比喻（保留比喻但加了"打个比方，不是技术上的严格对应"的限定语，改成"像"大脑/像"手和眼睛"而不是断言"是"）

**验证**：全仓库链接扫描 0 死链；本地跑 Astro dev server 抽查了 `model-to-system-war` 和 `glossary` 两个页面，锚点全部正确解析到 `/glossary#slug`。

**状态**：Phase 3（Navigation Layer）全部完成——15 个稳定 Glossary 锚点、21 篇文章的首次出现链接与 Before Reading 判断、全仓库 0 死链。

## [v3.9] - August 8, 2026

### 🔗 Phase 3 全站推广 Batch A：7 篇高密度技术/应用文章

**范围**：CTO 批准 Phase 3.1 死链清理后，按"两批走"的节奏，先做 6-8 篇 ai-core/ai-application 里概念密度最高的文章，做完停下来等 review，Batch B（其余文章）等这批过审后再继续。

**7 篇**（全部复用试点定下的规则，凭判断决定链接数量，不是硬性配额）：
- [MCP 统一协议指南](docs/ai-application/mcp-protocol-guide.md) — 正文 0 链接（MCP/Skill 是这篇自己要讲的主题，正文又几乎全是代码框），Before Reading: Agent · Tool
- [Skills 和商业格局](docs/ai-application/skills-business-landscape.md) — 正文 2 链接（Workflow、Tool），**跳过 Before Reading**——这篇自己已经有"如果你不知道 Skill 是什么"的内嵌背景说明，再加一个会重复
- [工作流设计完全指南](docs/ai-application/workflow-design-guide.md) — 正文 1 链接（Agent，在 Workflow vs Agent 对比表里），Before Reading: Agent · Tool
- [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md) — 正文 3 链接（Memory、Context、State），Before Reading: Agent · Workflow
- [Inference 推理系统完全指南](docs/ai-core/inference-system-guide.md) — 正文 0 链接（Inference 是主题，Token 全在代码框里没有安全插入点），Before Reading: LLM · Token
- [Transformer 架构完全指南](docs/ai-core/transformer-architecture.md) — 正文 0 链接（同上，正文几乎全是代码框），Before Reading: Token · Inference
- [Workflow 工作流完全指南](docs/ai-core/workflow-orchestration.md) — 正文 3 链接（Agent、State、Context），Before Reading: Agent · Tool

**没做**：没有为了凑数在代码框里插链接、没有改动任何标题或 TOC 锚点、没有碰高亮框那两行（网站的高亮框用单独的渲染器，不会重写相对链接，链接放进去会失效）。全仓库链接检查 0 死链。

**状态**：Batch A 完成，等 CTO/Belinda review，通过后做 Batch B（剩下的 ai-research + career-impact 文章）。

## [v3.8] - August 8, 2026

### 🧹 Phase 3.1：清理 ~45 处历史遗留死链

**背景**：Phase 3 试点验收时顺手做的全仓库链接检查，发现 13 篇文章的"下一步"/"相关"部分累积了大概 45 处指向从未创建过的占位文件的死链——不是 Phase 3 引入的问题，是更早期写文章时留下的。CTO 给了五分类处理框架，没有用"全部改成待创建"这种一刀切。

**处理结果**（13 篇文章，40 处链接）：
- 有几处是"其实别的文章已经讲过这个内容"，改成指向真实存在的文章（比如 `transformer-architecture.md` 的"模型评估标准"指向了 [Evaluation 评估系统](docs/ai-research/evaluation-system.md)）
- 有一处判断为过时，整条移除（`workflow-orchestration.md` 的"Agent View 完全指南"）
- 剩下大多数确认是"确实还没写"，改成纯文字 +"（待创建）"，跟仓库已有的正确写法保持一致
- 没有新建任何空白页面去凑链接

**状态**：CTO 已批准并关闭这一项。

## [v3.7] - August 8, 2026

### 🔗 Phase 3 试点：Navigation Layer（稳定锚点 + 正文首次出现链接 + Before Reading）

**范围**：只做 CTO 定义的三件事，只在 5 篇代表性文章试点，不推广全站，等 CTO review。

**1. Stable Glossary Slugs**：`glossary.md` 里 15 个试点词条从 `**Term（中文）**` 加粗段落改成 `#### Term` 英文 ATX 标题（比如 `#### Agent`、`#### Coding Agent`），生成稳定、可预测的锚点（`#agent`、`#coding-agent`……），不依赖中文标题自动生成。

**验证结果**（真实跑了 Astro dev server + 打开 github.com 现场测）：
- ✅ 展示网站（Vercel/Astro，用的是 `rehype-slug` + `github-slugger`，跟 GitHub 同一个库）：新导航、跨文章点击、浏览器 back 全部正常，back 后精确恢复原滚动位置
- ⚠️ **GitHub 网页有个真实限制**：GitHub 把标题锚点渲染成 `id="user-content-agent"` 而不是 `id="agent"`，靠 GitHub 自己的前端 JS 做 `#agent → user-content-agent` 的映射。这个映射只在用户在 GitHub 页面内真实点击链接时触发，**直接用带 `#agent` 的 URL 打开页面（比如跨文件链接、书签）不会自动滚动到目标位置**——链接本身没坏，就是不会自动跳过去，读者需要自己往下翻或用 Ctrl+F。这是 GitHub 渲染器的固有行为，不是这次改动引入的问题。按 CTO 的预案（"如果 renderer 对 explicit anchor 支持不稳定，不要强行 hack，可以先只在网站层实现"），这个不对称先如实记录，不做任何 hack

**2. First-occurrence Glossary Links**（5 篇试点文章，每篇 ≤5 个，同一词只链接首次出现，不碰任何标题/TOC 锚点）：
- [Agent 系统架构](docs/ai-core/agent-architecture.md)：Context、Tool、State、Memory（4 个）
- [Context Window 完全指南](docs/ai-core/context-window-guide.md)：**0 个**——正文几乎全是代码框里的示意图，找不到安全的、不用改动原文的插入点，Context/Token 本身又是这篇文章自己在讲的主题，所以刻意不链接
- [Agent 记忆系统完全指南](docs/ai-core/memory-system-guide.md)：Context、State（2 个）
- [Harness 系统](docs/ai-application/harness-system.md)：Tool、Workflow（2 个）
- [Coding Agent 与 Agent 基础设施](docs/career-impact/agent-infrastructure-os.md)：Workflow、Tool、MCP（3 个）

**3. Before Reading**（4/5 篇文章加了，Context Window 那篇跳过——它已经从零开始定义了自己的核心概念，不需要）：
- Agent 系统架构 → LLM · Token · Inference
- Agent 记忆系统完全指南 → Agent · Context
- Harness 系统 → Agent · Tool · Context
- Coding Agent 与 Agent 基础设施 → Agent · Tool · MCP

**没做**（按 CTO 的 Do Not Do）：没有自动把全文术语都链接化、没有引入 tooltip/hover card/知识图谱、没有改动任何作者原文表达或标题结构、没有推广到试点 5 篇以外。

**状态**：试点完成，等 CTO/Belinda 人工检查（页面是否变太"蓝"、链接是否真的有用、mobile 是否清晰、点进 Glossary 后好不好返回）通过后再决定是否扩展全站。

## [v3.6] - August 8, 2026

### ✅ 术语表 V2 定版：15 个试点词条冻结为参考样本

CTO 最后一轮精修，4 处小改动，改完这批就定版：

- **LLM**："被海量文字训练过" → "被大量文本和其他数据训练过"（给多模态模型留余地，不再暗示只训练文字）
- **Model**："包在 Model 外面的那层壳" → "建立在 Model 之上的完整产品层"，并补充产品层通常还包含工具调用、检索、记忆、安全机制、界面、编排等能力——"壳"这个说法容易让人低估产品层的工作量
- **Skill**：补充"这里特指 Claude / Claude Code 语境下的 Skill……不是业界统一标准术语"，避免新人以为这是通用行业术语
- **Orchestrator**：协调对象从"多个 Agent"放宽成"模型调用、工具调用、工作流步骤"，多 Agent 协作只是常见场景之一，不是定义本身

**状态**：这 15 个核心词条（AI、LLM、Model、Token、Inference、Agent、Tool、Workflow、Context、State、Memory、MCP、Harness、RAG、Coding Agent）正式冻结为 Glossary V2 的参考样本——以后新增或迁移词条按这套解释颗粒度和结构（一句话 + 怎么想象 + 相关概念 + 想深入，部分配简单关系图）执行，不再继续扩写这 15 条本身。

**Related Concepts 可点击化**：明确推迟到下一阶段（Phase 3，正文术语链接）一起做统一的稳定 slug 设计，不为这个单独折腾 Glossary 结构。现在继续保持纯文字。

## [v3.5] - August 8, 2026

### ✏️ 术语表 V2 试点：CTO 审阅后的准确性修正

**背景**：v3.3 的 15 词试点提交给 CTO 审阅后，指出了 10 处具体的过度简化/绝对化问题，逐条修正：

- **AI**：AI⊃LLM 的分类关系和 Model→Product 的包装关系不再画成一棵嵌套树，拆成两张独立的小图，避免暗示这是同一种"层级"
- **Model**：去掉"真正思考"的拟人化说法，"决定能力上限"软化成"很大程度上影响"
- **Token**：去掉"大致相当于半个词到一个词"的具体换算，改成"不一定等于一个完整的词"
- **Inference**：训练流程图去掉"一次性"标签（模型是会被重新训练/更新的）
- **Tool**：去掉"工具选择本质上是概率驱动、不是 if-else"这个普遍化断言——不同 Agent 实现方式不同，没有唯一标准做法
- **Workflow**：去掉"让多个 Agent 执行"的隐含前提，Workflow 可以只由一个 Agent 执行
- **MCP**：保留 USB 类比，去掉"Skill 是大脑、MCP 是手和眼睛"这个没有必要的额外类比
- **Memory**：去掉"跨对话保留"的绝对化表述，保留多久、要不要跨对话取决于具体系统设计
- **RAG**：定义顺序改成"检索→放入 Context→生成"这三步机制本身，不再用"模型自己不知道"来定义
- **Coding Agent**："最成熟的场景" → "最成熟的场景之一"

**新增**：`glossary.md` 里加了"核心概念地图"——15 个试点词条的建议阅读顺序（AI→LLM→Model→Token→Inference→Agent→Tool→Workflow→Context→State→Memory→Harness→MCP→RAG→Coding Agent），明确标注"这是学习路径，不是层级关系"。

**未做**：Related concepts 暂时保持纯文字（不做可点击链接）——CTO 建议以后要做的话用稳定的英文 slug（`#agent`、`#memory` 这类），不要依赖中文标题自动生成的锚点，需要先在 GitHub 和展示网站两边验证锚点渲染结果一致，再决定要不要为此做结构调整。

**下一步**：这次修正过审后，会把这 15 个词条的格式作为模板，逐步迁移术语表里剩下的词条。

## [v3.3] - August 8, 2026

### 📖 术语表 V2 试点：结构化 Glossary（Phase 2，第一批 15 词）

**背景**：Phase 1 一致性审计做完后，CTO 给了 Structured Glossary V2 的详细规格——每个词条不只给一句话，还要有"怎么想象它"的心智画面、3-5 个相关概念、1-2 个深入链接，部分词条配简单关系图（一图一个意思，ASCII 文本图，不用 Mermaid/HTML，跟现有 Wiki 风格保持一致）。

**试点范围**（15 个核心词，其余词条格式不变，等确认风格后再扩展全站）：
AI、LLM、Model、Token、Inference、Agent、Tool、Workflow、Context、State、Memory、MCP、Harness、RAG、Coding Agent

**新增**:
- `glossary.md` 里新增 AI、Model、State、RAG、Coding Agent 5 个此前没有的词条
- 原有的 Context Window → 重构为 Context（挪到 Agent 相关分类，跟 State、Memory 并列，三者共享一张对比图）；Memory System → Memory；Tool Use / Tool Calling → Tool
- 配了 8 张 ASCII 关系图：AI/LLM/Model/Product 包含关系、Token 处理流程、Training vs Inference、Agent 决策循环、Chatbot vs Agent 对比、Context/State/Memory 三者对比、RAG 流程、Coding Agent Loop

**修正**:
- `index-all-concepts.md` 开头引导语里还有一处遗漏的 "60+" 没改成准确数字（Phase 1 审计漏改的一处），这次一并修成 76
- `start-here.md` 里几处 Related concepts 的词条名和锚点同步更新，匹配术语表里的新名字和新分类位置

**没做的**：RAG 词条的"想深入"暂时写了"待创建"，Wiki 里还没有独立的 RAG 深入文章。

## [v3.2] - August 8, 2026

### 📝 Daily Update - Scaling Paradox in Human-AI Collaboration

**新增页面**:
- `docs/career-impact/scaling-paradox.md` - AI scaling law 为什么在人机协作系统里不自动成立、90%→95% 反而更危险的四层机制、可信度框架升级成 Trustworthiness + Calibrated Trust 两层模型、感知偏差纠正为什么不是普遍善（firm-worker 结构性错位）、Junior/Senior 断层与 succession planning、对抗 automation complacency 的五个产品设计机制

**新增概念**:
- Calibrated Trust（校准信任）、Scaling Paradox、Appropriate Reliance Rate（合理依赖率）

**来源**: Qi & Wang (2026), "The Scaling Paradox in Human-AI Collaboration", arXiv:2608.00818

**心智模型**: 新增 [Capability → Capability × Calibration](mental-models.md)（Aug 8）

**相关**: 直接延伸自 [从"最聪明"到"最可信"](docs/career-impact/capability-to-trust.md) 的五维可信度框架，与 [Domain Expertise 与组织变革](docs/career-impact/domain-expertise-and-org-design.md) 的 Junior/Senior 讨论连成一条线

## [v3.1] - August 7, 2026

### ✏️ Start Here 内容修正（根据二次 CTO 审阅）

**修正**:
- 第 4 站的 Workflow/Agent/Skill/Tool/MCP 关系图，原来画成一条"越往后越高级"的直线（容易让人以为 Tool 升级成 Skill、Skill 升级成 Workflow……），改成组合图：Tool/Skill/Context 是模型决策的几种"原料"，Workflow 和 Agent 的区别是"路径预先定义了多少" vs "运行时自主决定了多少"，不是层级关系
- Harness 的定义太窄了（原来只说"给 Agent 设边界"），改成"围绕模型搭起来的整套工作环境和运行脚手架"——边界只是它做的事情之一，`glossary.md` 里的 Harness 词条同步更新
- "这是能力升级，更是主体性的转移"这句话在 `start-here.md` 和 `mental-models.md` 里都出现过，"主体性"容易让新手联想到 agency/意识这类没必要的大坑，改成"下一步做什么"的决定权开始部分交给 AI"
- LLM 那站"一个词一个词地猜"改成"一个 token 一个 token 地预测"，避免从第一天就让新人以为 token = 完整的词

**结构调整**: 网站首页的心智模型/全部概念索引/术语表三张卡片，副标题原来太接近（都在说"索引/查找"），改成各自强调不同的用途，一眼看出不是重复页面

## [v3.0] - August 7, 2026

### 🗺️ 新增 Start Here：给新读者的最小地图

**背景**：请 CTO 朋友看了网站雏形，第一条建议是"陌生人第一次进来找不到路"——术语表存在但没有清晰入口，深度文章之间也没有给新手的过渡。

**新增**:
- `start-here.md`（根目录）——7 站最小地图：AI 是什么 → LLM 怎么工作 → Chatbot 到 Agent → Workflow/Skill/MCP 关系 → Context/State/Memory → 为什么 Coding Agent 先爆发 → AI 真正改变了什么。每站控制在"5-10 分钟导览页"的量级，不重写深度内容，全部链接回现有文章
- README.md 把 Start Here 放到最显眼的位置（结构图顶部、快速导航第一条、建议阅读第一步）

**修正**: `docs/ai-core/agent-architecture.md` 里"conversation_history 就是 Agent 的整个状态"这句话过度绝对化了（只在最简单的实现里成立），改成区分"最简单情况"和"更复杂系统"

**约定**: `CLAUDE.md` 记录了 Start Here 的写作原则（不做课程感、不重写深度内容）和"避免过度绝对化表述"的写作规则

## [v2.9] - August 7, 2026

### 📖 新增术语表，修补 Skills 文章的基础概念缺口

**问题**：读者反馈"Skills 和商业格局"这篇直接跳进商业分析，从没解释过 Skill 本身是什么，新手看不懂。

**新增**:
- `glossary.md`（根目录，术语表）——25 个核心名词的一句话解释，给完全没背景的新手用，跟 `index-all-concepts.md`（假设已懂背景、直接链接深入文章）互补
- `docs/ai-application/skills-business-landscape.md` 开头补了"Skill 是什么（基础概念）"小节

**结构调整**: README.md 快速导航和建议阅读顺序都把术语表放到第一位；`CLAUDE.md` 记录了这个约定，以后新文章如果用到从没解释过的核心名词，要先补基础定义

## [v2.8] - August 7, 2026

### 🌐 上线展示网站

Wiki 现在除了 GitHub 仓库本身，也有一个独立的展示网站：[learning-wiki-site.vercel.app](https://learning-wiki-site.vercel.app)。

- 网站是完全独立的项目（`BelindaSun/learning-wiki-site`），构建时读取这个仓库的 Markdown 内容渲染成页面——本仓库不需要 front matter，也不需要为了网站改任何写作习惯
- 每次 push 到这个仓库的 `main` 分支，`.github/workflows/notify-site.yml` 会自动通知 Vercel 重新构建，网站几分钟内自动同步最新内容，不需要手动部署

## [v2.7] - August 7, 2026

### 📝 Daily Update - Google AI 领导层重组

**新增页面**:
- `docs/career-impact/google-agi-org-restructuring.md` - Google 的"时间尺度分离"组织设计（Demis 管长期科学，Koray 管中短期执行）、Research→Product execution gap、"天花板 × 到达能力"心智模型

**新增概念**:
- Time-Scale Separation（时间尺度分离）、Ceiling × Reach（天花板 × 到达能力）

**来源**: Google 官方公告 + 24 小时内相关报道

**心智模型**: 新增 [天花板 × 到达能力](mental-models.md)（Aug 7）

**相关**: 延伸自 [模型战争 vs 系统战争](docs/career-impact/model-to-system-war.md)、[从"最聪明"到"最可信"](docs/career-impact/capability-to-trust.md)、[Coding Agent 与 Agent 基础设施](docs/career-impact/agent-infrastructure-os.md)

**备注**: 这篇只有总结文件，没有配套的完整对话记录，因此没有 `docs/conversations/` 条目。

## [v2.6] - August 7, 2026

### 📝 Daily Update - Coding Agent 与 Agent 基础设施的操作系统化

**新增页面**:
- `docs/career-impact/agent-infrastructure-os.md` - Agent 可行性六条标准、可形式化光谱（Agent 向其他行业扩散的路径）、竞争四阶段演进（模型→工具生态→工作流→执行环境）、Agent 基础设施与传统操作系统的功能等价表、五大巨头差异化赌注、企业 Trust 鸿沟与消费者产品哲学鸿沟、Meta Muse Code 架构案例分析

**新增概念**:
- Agent Feasibility Criteria（Agent 可行性六条标准）、Formalizability Spectrum（可形式化光谱）、Agent OS 等价定理

**来源**: Meta Muse Code 发布报道、OpenAI "ChatGPT Work"、OpenAI "Scientific Computing in the Age of Agentic AI"、arXiv 2606.26959、OpenAI "How Agents Are Transforming Work"

**心智模型**: 新增 [Model → Infrastructure](mental-models.md)（Aug 7，含"可形式化光谱"与"Agent OS 等价定理"两个子框架）

**相关**: 延伸自 [从工具到产业](docs/career-impact/industry-competition-shift.md)、[从"最聪明"到"最可信"](docs/career-impact/capability-to-trust.md)、[Domain Expertise 与组织变革](docs/career-impact/domain-expertise-and-org-design.md)，并深化了 [MCP 统一协议指南](docs/ai-application/mcp-protocol-guide.md) 里 MCP 作为"Agent 操作系统设备驱动层"的定位

## [v2.5] - August 6, 2026

### 📝 Daily Update - Domain Expertise 重估与组织变革

**新增页面**:
- `docs/career-impact/domain-expertise-and-org-design.md` - know-what/how/why 贬值、七层新增值框架（know-what-matters 等）、人 70% planning / Agent 80% execution 分工、个人生产力 ≠ 组织生产力的四个原因、管理 Agent 的四层能力、10 个 Agent 会怎样重塑组织结构

**新增概念**:
- Domain Expertise（七层重排框架）、Managing Agents（管理 Agent 的四层能力）

**来源**: OpenAI "How agents are transforming work" + Anthropic "Agentic coding and persistent returns to expertise"

**心智模型**: 新增 [Execution → Judgment](mental-models.md)（Aug 6）

**相关**: 延伸自 [Agent 系统架构](docs/ai-core/agent-architecture.md)、[Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)、[从工具到产业](docs/career-impact/industry-competition-shift.md)

## [v2.4] - August 5, 2026

### 🧠 结构调整：新增 mental-models.md

**新增**:
- 根目录 `mental-models.md` —— 跨分类的"心智模型变迁"时间线索引（不是新的内容分类，只是把已有文章里"原来 vs 现在"这层单独提炼出来做导航）
- 首批 5 条：Prompt → Workflow、Tool → Worker、Model → System、"+" → "×"、Capability → Trust，均链接回各自的完整文章
- README.md 结构图和快速导航加了入口，6 篇相关文章的"相关"里也都加了反向链接

## [v2.3] - August 5, 2026

### 📝 Daily Update - 从"最聪明"到"最可信"

**新增页面**:
- `docs/career-impact/capability-to-trust.md` - 可信度五维框架（可预测、可解释、可审计、可控制、可恢复）、权限从 ChatGPT 时代的"可选"变成 Agent 时代的"必须"、AI 安全框架的政治经济学、Evaluation vs Safety 的区别

**新增概念**:
- Trustworthiness（可信度五维框架）、Evaluation vs Safety

**来源**: 与 Claude 关于 Trump AI 政策信号、企业采购标准、AI 安全框架权力分析的深度对话

**相关**: 延伸自 [模型战争 vs 系统战争](docs/career-impact/model-to-system-war.md)、[从工具到产业](docs/career-impact/industry-competition-shift.md)，权限设计部分交叉链接到 [Harness 系统](docs/ai-application/harness-system.md)

## [v2.2] - August 5, 2026

### 📝 Daily Update - 从工具到产业：AI 时代的竞争本质

**新增页面**:
- `docs/career-impact/industry-competition-shift.md` - 模型商品化、护城河从模型→系统→生态→垂直深度→个人数据的迁移路径、"+"变"×"的乘法效应

**新增概念**:
- Personal Data Moat（个人数据护城河）、Multiplication Effect（乘法效应）

**来源**: Disney 多模型策略报道 + OpenAI Codex 报告 + 14 篇 AI Weekly Reads 汇总分析

**相关**: 延伸自 [模型战争 vs 系统战争](docs/career-impact/model-to-system-war.md) 和 [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

## [v2.1] - August 4, 2026

### 📝 Daily Update - Agent 时代的系统架构转变

**新增页面**:
- `docs/ai-core/agent-era-work.md` - Agent 时代的系统架构转变（System of Record、Agent Legibility、Orchestrator 模式、工作层次三分法）

**新增概念**:
- System of Record、Agent Legibility、工作的最小单位、机械/专业/战略三层工作模型

**来源**: OpenAI "How Agents Are Transforming Work" + "Harness Engineering" + 多 Agent 协作研究

**结构调整**:
- 也在 `docs/conversations/` 下新建了两批完整对话记录：14 篇早期学习对话（Harness、Memory、Context、MCP、Inference、Attention、Transformer、Models、Evaluation、多模态、垂直 vs 全能 Agent 等），以及这次的 Agent 时代对话，都从对应指南页面加了"📖 完整学习对话记录"反向链接

## [v2.0] - August 4, 2026 (Final Big Release)

### 🚀 大版本更新：完整 AI 系统知识库

**新增 8 篇核心页面**:
- `docs/ai-core/inference-system-guide.md` - Inference 推理系统完全指南
- `docs/ai-core/transformer-architecture.md` - Transformer 架构完全指南
- `docs/ai-application/mcp-protocol-guide.md` - MCP 统一协议指南
- `docs/ai-application/skills-business-landscape.md` - Skills 和商业格局
- `docs/ai-research/models-deep-dive.md` - Models 深挖（MoE + 压缩）
- `docs/ai-research/evaluation-system.md` - Evaluation 评估系统

**核心内容统计**:
- 总 Markdown 文件: 21 个
- 总行数: 8,500+ 行
- 核心概念: 60+ 个
- 学习跨度: July 28 - Aug 4（8 天深度学习）

**新增概念（40+ 个）**:
- 推理系统：Inference、Transformer、Weights、Attention、Temperature、Top-p、Top-k、涌现临界点
- Transformer 架构：Multi-Head Attention、FFN、残差连接、Layer Norm、RoPE、Causal Mask
- 模型优化：MoE、KV Cache、量化、剪枝、蒸馏
- 评估系统：RLHF、Benchmark、困惑度、准确率、对齐度
- 商业格局：Skill、垂直 Agent、护城河、三层生态
- Memory：情节记忆、语义记忆、五层架构
- 窗口管理：Lost in the Middle、Prompt Caching、Project Knowledge

**完整的学习回顾**:
- July 28: Skills 和商业格局（"模型公司吃智能的钱"）
- July 29: MCP 协议（"只读 vs 读写"）
- July 30: Memory 系统（"热暖冷三温"）
- July 31: Context Window（"白板管理"）
- Aug 1-2: Inference + Transformer（"涌现临界点"）
- Aug 2: Models 深挖（"MoE 的权衡"）
- Aug 3: Evaluation（"RLHF 的本质"）
- Aug 4: Commit 整个系统！

**文件结构**:
```
learning-wiki/
├─ docs/
│  ├─ ai-core/
│  │  ├─ agent-architecture.md
│  │  ├─ workflow-orchestration.md
│  │  ├─ memory-system-guide.md
│  │  ├─ context-window-guide.md
│  │  ├─ inference-system-guide.md
│  │  └─ transformer-architecture.md
│  ├─ ai-application/
│  │  ├─ workflow-design-guide.md
│  │  ├─ harness-system.md
│  │  ├─ mcp-protocol-guide.md
│  │  └─ skills-business-landscape.md
│  ├─ ai-research/
│  │  ├─ models-deep-dive.md
│  │  └─ evaluation-system.md
│  └─ career-impact/
│     └─ model-to-system-war.md
├─ index-all-concepts.md (60+ 概念索引)
├─ CHANGELOG.md (这个)
├─ README.md
├─ QUICKSTART.md
├─ CONTRIBUTE.md
└─ LEARNING_QUESTIONS.md
```

**技术亮点**:
- 实战案例为主（Mimo、AI2030、投资系统）
- 系统思维（从单个概念到完整生态）
- 深度学习（不止是概念，包括原理和应用）
- 持续更新（为日增量而设计）

---

## [v1.6] - August 4, 2026 (Midnight)

### 📝 Daily Update - Inference 推理系统

**新增页面**:
- `docs/ai-core/inference-system-guide.md` - Inference 推理系统完全指南

**核心内容**:
- 权重的本质：几千亿个数字，分散编码知识，不是某处存储
- 推理完整过程：Tokenization → Embedding → 正向传播 → Attention → 层层深化 → 概率分布 → 采样选词 → 一词一词生成
- Transformer 架构：Multi-Head Attention + 残差连接 + Layer Norm + Feed Forward
- Causal Attention：生成模型用单向 Attention，每词只看前面
- 采样参数：温度（形状）、Top-p（累积概率）、Top-k（数量）
- 涌现临界点：参数量+数据量+计算量共同作用，最直接触发器是训练损失值
- Thinking 模式：在草稿纸上用更多 Token 推理，再输出答案

**来源**: Claude 对话学习 (Aug 1-2)

**关键洞察**:
- Inference 不是查找，是信号流过权重网络的正向传播
- 涌现不是线性增长，而是"突然会了"的跃变
- 幻觉是必然的，不是 bug——优化"流畅"而非"真实"
- Thinking 模式是"更多推理轮次"的产物

**Wiki 最终统计**:
- 总文件数: 15 个 Markdown 文件
- 代码行数: 6,500+ 行
- 核心概念: 50+ 个
- 学习跨度: July 29 - Aug 2（5 天深度学习）

---

## [v1.5] - August 4, 2026 (Final Update)

### 📝 Daily Update - Context Window 管理

**新增页面**:
- `docs/ai-core/context-window-guide.md` - Context Window 完全指南

**核心内容**:
- Context Window 定义与 Token 衡量（100 万 Token 的白板）
- 白板上看不见的东西：系统提示词、工具定义、记忆文件、工具结果
- 窗口满了的处理：硬截断 vs Compaction（压缩）
- Project 和持久记忆：数据文件 + 行为规则
- Prompt Caching 原理：自动复用相同前缀，节省 90% 的缓存成本
- Lost in the Middle：前面清晰，中间模糊，后面相对恢复
- 实战管理：三个原则（只放值得的、重要内容位置优化、Project + Caching 是王道）

**来源**: Claude 对话学习

**关键洞察**:
- 从"上传文件省 Token"到"理解 Caching"的认知升级
- Lost in the Middle 的视觉化：不是简单的线性衰减
- Project 不是"放文件的地方"，而是"持久记忆的专属工作间"
- Memory 和 Context 互补不竞争：Memory 管跨对话，Context 管单次对话

**完成统计**:
- 总文件数: 14 个 Markdown 文件
- 核心概念: 40+ 个
- 总字数: 约 50,000 字
- 涵盖日期: July 29 - Aug 4（7 天深度学习）

---

## [v1.4] - August 4, 2026 (Very Late Night)

### 📝 Daily Update - Agent 记忆系统

**新增页面**:
- `docs/ai-core/memory-system-guide.md` - Agent 记忆系统完全指南

**核心内容**:
- 两种失忆场景：对话中途（Context 爆满）vs 跨对话（无持久化）
- 记忆的三种温度：热（Context）、暖（摘要）、冷（长期）
- 情节记忆 vs 语义记忆：具体事件 vs 通用知识
- Mimo 的五层架构：聊天 → 摘要 → 事实库 → 今日状态 → 运行时权重
- 向量数据库原理：向量相似度 vs 传统精确匹配
- 何时需要向量数据库：数据量 × 查询模糊度 > 阈值

**来源**: Claude 对话 + Mimo 真实案例 + Jupiter Dreaming 研究

**关键洞察**:
- Memory 是 Agent 的心脏（Skills 是大脑，MCP 是手眼睛）
- Mimo 的第 4 层"今日状态"是独创——让 AI 有自己的生活
- localStorage vs 服务器的分工：不是比较好坏，而是责任分工

---

## [v1.3] - August 4, 2026 (Late Night)

### 📝 Daily Update - MCP 统一协议

**新增页面**:
- `docs/ai-application/mcp-protocol-guide.md` - MCP 统一协议完全指南

**核心内容**:
- MCP 的本质：统一标准协议（像 USB 统一充电口）
- Skills vs MCP：大脑 vs 手眼睛，缺一不可
- 只读 vs 读写：安全机制设计（查天气只读，订机票读写+人确认）
- MCP Server 谁来做：大平台主动做、第三方开发、企业自己做
- MCP vs API：API 是原材料，MCP 是标准化包装

**来源**: 对话学习 + 真实案例分析（Mimo 天气、Brief 数据源问题）

**关键洞察**:
- "数据进不去才是壁垒"的深层理解：MCP 可以让数据流动，但不是所有数据都愿意开放
- 集成商的新价值：从接 API → 接 MCP + 管理安全 + 优化流程

---

## [v1.2] - August 4, 2026 (Night)

### 📝 Daily Update - Workflow Orchestration 多 Agent 协作

**新增页面**:
- `docs/ai-core/workflow-orchestration.md` - Workflow 工作流完全指南

**核心内容**:
- Workflow 两种形态：顺序型（A→B→C）和并行型（A//B//C）
- Orchestrator（包工头）+ Worker（工人）的分工模式
- Session 线程隔离——每个 Agent 独立的 Context Window
- Agent View（2026 年 5 月新功能）——CLI 仪表板查看后台运行
- 成本优化：贵模型做 Orchestrator，便宜模型做 Worker，省 40-60%
- 三层结构（Orchestrator→Sub-Orchestrator→Worker）用于复杂任务

**来源**: 亲眼观察 Claude Code 运行 16 个并行 Agent + Agent View 文档学习

**关键收获**:
- 理解了"好消息，文件找到啦"这条消息的来源——Orchestrator 的实时通知
- 明白了 Context Window 不会被塞满的原因——Worker 各自独立
- 看到了五个概念的完整串联（Agent、Skill、MCP、Memory、Workflow）

---

## [v1.1] - August 4, 2026 (Evening)

### 📝 Daily Update - Harness 系统

**新增页面**:
- `docs/ai-application/harness-system.md` - Harness 系统完全指南

**概念**:
- Harness 的四个维度（工具、文件、Token、人工介入）
- 三层配置系统（CLAUDE.md → settings.json → 命令行）
- settings.json vs settings.local.json 的区别
- 被动积累 vs 主动设计的对比

**来源**: Belinda 对 Claude Code 日常使用的反思 + 真实的 settings.local.json 案例

---

## [v1.0] - August 4, 2026

### 🎯 初始发布

**新增页面**:

#### 📚 AI Core
- `agent-architecture.md` - Agent 系统架构完全指南
  - Agent 生命周期（6 个阶段）
  - 状态机与上下文窗口
  - 工具调用机制
  - 多 Agent 协调

#### 🛠️ AI Application
- `workflow-design-guide.md` - 工作流设计完全指南
  - 6 种节点类型（顺序、并行、条件、人工、循环、错误处理）
  - 关键设计模式（Fan-out/Fan-in、质量循环、人工瓶颈）
  - YAML 规范
  - 实战例子（日报生成、反馈循环）

#### 💼 Career Impact
- `model-to-system-war.md` - 从模型战争到系统战争
  - 两个时代的对比
  - 为什么转向系统竞争
  - 系统竞争的 4 个维度
  - 职业影响分析
  - 个人应对策略

#### 📖 Meta
- `index-all-concepts.md` - 概念快速索引
- `CONTRIBUTE.md` - 贡献指南
- `CHANGELOG.md` - 更新日志
- `README.md` - Wiki 主页

**概念总数**: 15+

**目标达成**:
- ✅ 建立基础架构
- ✅ 涵盖核心 AI 概念
- ✅ 分析职业影响
- ✅ 支持日增量更新

### 📊 统计

| 指标 | 数值 |
|------|------|
| 文件数 | 7 |
| 字数 | ~8,000 |
| 页面数 | 4 |
| 概念数 | 15+ |

### 🔮 下次计划（Aug 5-6）

待创建的页面：
- [ ] Skill 设计与实现
- [ ] 职业转变详细分析
- [ ] 个人能力路线图
- [ ] MCP 基础
- [ ] 工作流实战配置

---

## 如何使用这个日志

**每天新增内容后**:
```
## [v1.X] - August X, 2026

### 📝 Daily Update - [主题]

**新增**:
- [概念名]: [描述]

**更新**:
- [概念名]: [改进内容]
```

---

## 版本说明

### v1.0 (初版)
- 核心概念框架
- Agent 和工作流基础
- 职业影响分析

### v1.1+ (计划中)
- 实战应用例子
- 工具集成指南
- 团队协作最佳实践

---

## 贡献者

| 贡献者 | 角色 | 首次贡献 |
|--------|------|--------|
| Belinda Sun | 创始人 & 维护者 | Aug 4, 2026 |
| Claude | 内容生成 & 编辑 | Aug 4, 2026 |

---

**格式说明**:
- 📚 = 学习资源
- 🛠️ = 实战工具
- 💼 = 职业相关
- 📖 = Meta/维护
- 📝 = 日常更新
- ✨ = 特色/亮点
- 🐛 = Bug 修复

---

**最后更新**: August 4, 2026
