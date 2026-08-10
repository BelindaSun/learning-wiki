# 术语表

> 给第一次看这个 Wiki 的人（尤其是不熟悉 AI 术语的朋友）准备的。每个词至少给一句话、大白话的解释；其中 15 个最核心的词（AI、LLM、Model、Token、Inference、Agent、Tool、Workflow、Context、State、Memory、MCP、Harness、RAG、Coding Agent）额外配了"怎么想象它"、简单的关系图，以及稳定的英文锚点（比如 `#agent`、`#memory`）——在正文里遇到不熟悉的核心术语，点一下就能回到这里快速查看。不展开长篇论证——想深入了解，点链接去看完整文章。如果你是老读者，直接跳过这页去看具体文章就行。

---

## 核心概念地图

> 下面这条线是**建议的阅读顺序**，不是层级或依赖关系——不代表"前面的词比后面的词更基础/更重要"，只是"按这个顺序看，理解起来比较顺"。可以跳着看，不需要按顺序打卡。

```
AI → LLM → Model → Token → Inference
  （AI 是什么大类，LLM/Model 怎么分工，文字怎么被处理、怎么被生成）

→ Agent → Tool → Workflow
  （从"只能回答"到"能自己决定行动"，怎么用工具、按什么路径执行）

→ Context → State → Memory → Harness
  （Agent 这一刻看得到什么、做到哪一步了、记不记得、在什么环境里运行）

→ MCP → RAG → Coding Agent
  （怎么连外部工具和数据、怎么现查资料再回答、放到具体场景里长什么样）
```

---

## AI 基础

#### AI
**人工智能** — 让机器表现出"智能行为"的技术大类——识别图像、理解语言、下棋、做决策都算。LLM 只是这个大类里，目前最受关注的一种。

*怎么想象*：两层不同的关系，别混在一起。第一层是"属于哪一类"：
```
AI（大类）
 ⊃ LLM（其中一种重要模型：大语言模型）
```
第二层是"怎么变成你能用的东西"，跟上面的分类关系是两回事：
```
Model（能力核心） → 包装、加上界面和产品设计 → Product（比如 ChatGPT、Claude.ai）
```

*相关*：[LLM](#llm)、[Model](#model)、`Product`

*想深入*：[Start Here 第 1 站：AI 到底是什么？](start-here.md)

#### LLM
**大语言模型** — 被大量文本和其他数据训练过的 AI 模型，本质是"输入一段文字，预测接下来最可能是什么"。Claude、GPT、Gemini 都是 LLM。

*怎么想象*：AI 这个大类里，目前最重要的一种 Model（关系图见上面 AI 词条）。

*相关*：[AI](#ai)、[Model](#model)、[Token](#token)、[Inference](#inference)

*想深入*：[Start Here 第 2 站：LLM 为什么会说话？](start-here.md) · [Transformer 架构完全指南](docs/ai-core/transformer-architecture.md)

#### Model
AI 产品背后的核心组件——一堆通过训练调出来的参数，很大程度上影响它能做到什么、做不到什么。你平时用的产品（ChatGPT、Claude.ai）是建立在 Model 之上的完整产品层，通常还包含工具调用、检索、记忆、安全机制、界面、编排等很多 Model 本身不提供的能力。

*怎么想象*：像发动机——Product 是整辆车，Model 是藏在车里的发动机，你看不见它，但它是车能跑多快的重要因素之一（车好不好开，还要看变速箱、底盘这些其他部分）。

*相关*：[AI](#ai)、[LLM](#llm)、`Product`

*想深入*：[Start Here 第 1 站](start-here.md) · [Models 深挖](docs/ai-research/models-deep-dive.md)

#### Token
LLM 处理文字时切出来的最小单位——一段文字会被切成一个个 Token，不一定等于一个完整的词，可能是半个词、一个词根，也可能是一个标点。计费、上下文长度都按 Token 算。

*怎么想象*：文字被切成一小块一小块，模型一块接一块地往下猜。
```
文本 → 切成 Token → 预测下一个 Token → 拼接到已有文本 → 重复 → 生成回答
```

*相关*：[LLM](#llm)、[Inference](#inference)、[Context](#context)

*想深入*：[Context Window 完全指南](docs/ai-core/context-window-guide.md)

#### Inference
**推理** — AI 生成回答的过程——不是"查找答案"，是把输入变成数字、一层层计算，一个 Token 一个 Token 预测出来。

*怎么想象*：Training 是"学会本领"，Inference 是"现在用这本领干活"，两件事完全不同。
```
Training（训练）：海量数据 → 调整参数 → 模型学会规律      [成本高、耗时长]
Inference（推理）：你的输入 → 模型 → 输出                 [每次对话都发生、相对快]
```

*相关*：[Token](#token)、[LLM](#llm)、[Model](#model)

*想深入*：[Start Here 第 2 站](start-here.md) · [Inference 推理系统完全指南](docs/ai-core/inference-system-guide.md)

**Prompt**
你给 AI 的输入指令/问题。写得越清楚具体，AI 的回答质量通常越高。

**Transformer**
现在主流 LLM 都在用的一种模型架构，核心是 Attention 机制（让模型判断一句话里哪些词之间有关系）。 → [Transformer 架构完全指南](docs/ai-core/transformer-architecture.md)

**Fine-tuning（微调）**
在一个已经训练好的通用模型基础上，用更少量、更专门的数据继续训练，让它更擅长某个特定任务或领域。

**MoE（Mixture of Experts，混合专家模型）**
一种让模型变得很大、但每次只激活一部分参数的架构设计，用来在"知识容量"和"计算成本"之间找平衡。 → [Models 深挖](docs/ai-research/models-deep-dive.md)

**Quantization（量化）**
把模型参数从高精度数字压缩成低精度数字，牺牲一点点准确率换取更小的体积和更快的速度。 → [Models 深挖](docs/ai-research/models-deep-dive.md)（准确率角度）· [FLOPS 与精度](docs/computing-foundations/flops-and-precision.md)（为什么能提速）

**RLHF（Reinforcement Learning from Human Feedback，基于人类反馈的强化学习）**
让模型学会人类偏好的训练方法：先让模型给出多个回答，人类挑出更好的，再用这个"偏好"信号继续训练模型。 → [Evaluation 评估系统](docs/ai-research/evaluation-system.md)

**Benchmark（评测基准）**
用来给 AI 模型打分、互相比较能力的标准化测试集。 → [Evaluation 评估系统](docs/ai-research/evaluation-system.md)

---

## Agent 相关

#### Agent
**智能体** — 不只是"回答问题"，而是能围绕一个目标决定下一步、调用工具、根据结果继续行动的 AI 系统。

*怎么想象*：像给了目标就自己想办法的员工，而不是问一句答一句的客服。
```
Chatbot：用户提问 → AI 回答 → 结束
Agent  ：给定目标 → 决策 → 行动 → 观察结果 → 再决策 → …（循环直到完成）
```

*相关*：[Tool](#tool)、[Workflow](#workflow)、[State](#state)、[Memory](#memory)、[Harness](#harness)

*想深入*：[Start Here 第 3 站：从 Chatbot 到 Agent](start-here.md) · [Agent 系统架构完全指南](docs/ai-core/agent-architecture.md)

#### Tool
**工具调用** — Agent 不是所有事都自己"想"出来，而是可以调用外部工具（读文件、查天气、发邮件……）来完成任务，就像人用工具做事一样。

*怎么想象*：Agent 每一步"该用哪个工具"是怎么决定的，不同实现方式不一样——有的靠模型自己判断，有的会加规则或路由逻辑，没有一种是唯一标准做法。

*相关*：[Agent](#agent)、`Skill`、[Workflow](#workflow)、[MCP](#mcp)

*想深入*：[Agent 系统架构完全指南：工具调用机制](docs/ai-core/agent-architecture.md)

**Orchestrator（编排者）**
负责拆解任务、协调资源、汇总结果的"总指挥"角色——协调的对象不一定是多个 Agent，也可以是模型调用、工具调用、工作流步骤之间的协调。多 Agent 协作是 Orchestrator 常见的一种场景，不是唯一场景。 → [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

#### Workflow
**工作流** — 把一个复杂任务拆成一系列步骤（可以并行、有条件分支、能循环），路径大部分是预先定义好的。执行者可以是一个 Agent，也可以是多个 Agent 协作——不是必须要多个。

*怎么想象*：Workflow 和 Agent 的区别不是"谁更高级"，是"路径预先定义了多少"，还是"运行时自主决定了多少"。

*相关*：[Agent](#agent)、[Tool](#tool)、`Orchestrator`

*想深入*：[Start Here 第 4 站：Workflow、Agent、Skill、Tool、MCP 到底什么关系？](start-here.md) · [Workflow 工作流完全指南](docs/ai-application/workflow-design-guide.md)

#### Context
**上下文** — AI 当下这次对话/任务里能"看到"的所有信息——你的输入、对话历史、上传的文件、系统设定，用 Token 衡量总量。

*怎么想象*：Context、State、Memory 经常被搞混，但回答的问题不一样。
```
Context（上下文）：这次对话桌面上摊开的信息——现在能看到什么
State（状态）    ：事情当前进行到哪一步——任务/进度的快照
Memory（记忆）   ：抽屉里存着、以后还能取出来的信息——不是当下桌面上的东西
```

*相关*：[Token](#token)、[State](#state)、[Memory](#memory)、[Harness](#harness)

*想深入*：[Start Here 第 5 站：AI 为什么需要 Context、State 和 Memory？](start-here.md) · [Context Window 完全指南](docs/ai-core/context-window-guide.md)

#### State
**状态** — 事情当前进行到哪一步的快照——不是"看到了什么"，是"做到哪了"。（三者对比图见上面 Context 词条）

*怎么想象*：像任务清单上打钩打到第几项，决定了下一步该干什么。

*相关*：[Context](#context)、[Memory](#memory)、[Agent](#agent)

*想深入*：[Start Here 第 5 站](start-here.md) · [Agent 系统架构完全指南](docs/ai-core/agent-architecture.md)

#### Memory
**记忆** — 存起来、以后还能取出来的信息——不是当下这次对话摊开在桌面上的东西（那是 Context）。存多久、要不要跨对话保留，取决于具体系统怎么设计，不是所有 Memory 都必须跨对话持久化。（三者对比图见上面 Context 词条）

*怎么想象*：像抽屉——平时不摊在桌面上，需要时能打开取出来，跟"这次对话桌面上摊开的信息"（Context）是两回事。

*相关*：[Context](#context)、[State](#state)、[Agent](#agent)

*想深入*：[Start Here 第 5 站](start-here.md) · [Agent 记忆系统完全指南](docs/ai-core/memory-system-guide.md)

> ⚠️ 这里的 Memory 是 Agent 软件层面的"记忆"。如果你要找的是硬件内存（RAM/缓存/HBM，数据物理上放在哪、搬得多快），看下面"计算基础"分类里的 Memory Wall。

---

## AI 应用与工具生态

**Skill**
这里特指 Claude / Claude Code 语境下的 Skill——给 Claude 打包的一套"怎么做某件事"的说明书，把具体任务需要的步骤、规则、格式要求写清楚存起来，以后调用它就不用重新解释一遍。不是业界统一标准术语，不同 AI 产品可能用别的名字指类似的东西。 → [Skills 和商业格局](docs/ai-application/skills-business-landscape.md)

#### MCP
**Model Context Protocol，模型上下文协议** — 一个让 AI 系统以统一方式连接外部工具和数据源的协议。

*怎么想象*：类似 USB 统一了各种设备的接口——但这只是帮助理解"统一连接方式"的类比，不代表 MCP 和 USB 在技术上是一回事。

*相关*：[Tool](#tool)、`Skill`、[Harness](#harness)

*想深入*：[MCP 统一协议指南](docs/ai-application/mcp-protocol-guide.md)

#### Harness
围绕模型/Agent 搭起来的整套工作环境和运行脚手架——决定它能看见什么（Context）、能用什么（Tool、权限）、怎么获得反馈（execution loop），以及哪些地方绝对不能越界。

*怎么想象*：像给一个聪明员工配置办公室、工具、权限、规则和反馈系统——"划边界"只是这套配置里的一部分，不是全部。

*相关*：[Agent](#agent)、[Tool](#tool)、[MCP](#mcp)、[Context](#context)

*想深入*：[Harness 系统完全指南](docs/ai-application/harness-system.md)

#### RAG
**Retrieval-Augmented Generation，检索增强生成** — 先根据问题检索相关资料，把检索到的内容放进 Context，再让模型基于这些资料生成回答——检索（Retrieve）→ 放入上下文（Context）→ 生成（Generate）这三步合起来就是 RAG。

*怎么想象*：像开卷考试——不是死记硬背，是先翻资料再答题。
```
问题 → 检索相关资料 → 把资料放进 Context → 模型基于资料回答
```

*相关*：[Context](#context)、[Model](#model)

*想深入*：这个 Wiki 目前还没有 RAG 的独立深入文章（待创建）——想先了解 Context 怎么被"填进去"的，可以看 [Context Window 完全指南](docs/ai-core/context-window-guide.md)。

#### Coding Agent
专门用来读代码、改代码、跑测试的 Agent——目前是 Agent 落地最快、最成熟的场景之一。

*怎么想象*：
```
读代码 → 做修改 → 跑测试 → 观察结果 → 修 bug → 回到"跑测试" → …直到测试通过
```
Coding 特别适合 Agent，核心原因是改动能自动验证对错（编译、测试），失败了也能撤销重来，试错成本很低。

*相关*：[Agent](#agent)、[Tool](#tool)、[Harness](#harness)

*想深入*：[Start Here 第 6 站：为什么 Coding Agent 最先爆发？](start-here.md) · [Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)

**API（Application Programming Interface）**
一套让不同软件系统互相通信的标准接口。调用 AI 模型的 API，就是用代码的方式向模型发请求、拿回答，而不是在聊天窗口里手动打字。

**Claude Code**
Anthropic 出的一个命令行 AI 编程助手/Agent 工具，能直接读写你电脑上的文件、执行命令，这个 Wiki 的很多内容更新都是通过它完成的。

---

## AI 时代的竞争与信任

**System of Record（记录系统）**
把重要信息结构化、可查询地存下来（比如存成 Markdown 文件、数据库），而不是散落在聊天记录、Slack、脑子里——这样 Agent 才能"看到"并使用这些信息。 → [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

**Agent Legibility（Agent 可理解性）**
系统架构是否清晰到让 Agent 能"看懂"该做什么、边界在哪——不是代码写得好不好看，是 Agent 能不能理解。 → [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

**Trustworthiness（可信度）**
AI 系统是否值得把真正的工作交给它，拆成五个维度：可预测、可解释、可审计、可控制、可恢复。 → [从"最聪明"到"最可信"](docs/career-impact/capability-to-trust.md)

**Domain Expertise（领域专长）**
在 AI 能自己"执行"之后，人还剩下什么价值——知道什么值得做、什么算做好了、什么时候会出问题，这些无法言语化、很难被 AI 学走的判断力。 → [Domain Expertise 与组织变革](docs/career-impact/domain-expertise-and-org-design.md)

**Personal Data Moat（个人数据护城河）**
你自己的决策历史、工作模式、成功失败案例——别人用同样的 AI 也无法在短时间内复制，是 AI 时代少数几个真正难被替代的东西。 → [从工具到产业](docs/career-impact/industry-competition-shift.md)

---

## 计算基础

#### Runtime
**运行时** — 真正"执行"东西的那个角色，不管要执行的是一段代码还是一个模型的权重。模型本身是数据，不是代码——得靠 Runtime 才能真正跑起来。

*怎么想象*：模型像一份乐谱，Runtime 是照着乐谱演奏的人——乐谱自己不会响。

*相关*：`Compiler`、`Kernel`

*想深入*：[Software Map](docs/computing-foundations/software-map.md) · [Software × Hardware Map](docs/computing-foundations/software-hardware-map.md)

**Compiler（编译器）**
把用编程语言表达出来的工作，翻译成硬件能直接执行的指令。 → [Software × Hardware Map](docs/computing-foundations/software-hardware-map.md) · [CUDA 护城河](docs/computing-foundations/cuda-moat.md)

**Kernel（内核）**
针对某一种硬件、某一种具体运算，写到极致快的小程序——比如专门做矩阵乘法。CUDA 是这类生态里最有名的例子，但"kernel"是概念，CUDA 只是其中一个实现。 → [Software × Hardware Map](docs/computing-foundations/software-hardware-map.md) · [CUDA 护城河](docs/computing-foundations/cuda-moat.md)

**Precision（精度）**
数字用多"精确"的方式表示——精度越高越准，但也越慢越占内存；精度越低换来更快更省，代价是可能损失一点准确率（对应 AI 基础里的 `Quantization` 就是"降精度"的一种做法）。 → [FLOPS 与精度：为什么降精度能提速](docs/computing-foundations/flops-and-precision.md)

**FLOPS（Floating-point Operations Per Second，每秒浮点运算次数）**
衡量硬件一秒钟能做多少次数学运算的单位——不是"这块芯片有多聪明"，是"手有多快"。数字精度越低，同样宽的硬件一次能塞下的数字越多，FLOPS 就越高。 → [FLOPS 与精度：为什么降精度能提速](docs/computing-foundations/flops-and-precision.md)

**Memory Wall（内存墙）**
算力这些年涨得比数据搬运速度快得多，这道越拉越大的差距——计算单元经常不是不够快，是数据没送到。**注意**：这里的 Memory 指硬件内存（RAM/缓存/HBM），不是 Agent 那个"记忆"的 Memory，两者是完全不同的概念，只是中英文都撞了同一个词。 → [内存墙：为什么很多时候不是算不动，而是数据送不到](docs/computing-foundations/memory-wall.md)

**Memory Hierarchy（内存层级）**
离计算单元越近的存储越快越小越贵，越远的越慢越大越便宜——寄存器/缓存 → 主存（RAM，GPU 旁常见的是为高带宽设计的 HBM，同一层级）→ 硬盘，一层套一层，不是哪层"更好"，是每层都在"快"和"大"之间做了不同取舍。 → [内存墙：为什么很多时候不是算不动，而是数据送不到](docs/computing-foundations/memory-wall.md)

**Bandwidth vs Capacity（带宽 vs 容量）**
容量是"能装多少"，带宽是"单位时间能搬多少"——两个独立的维度，容易被当成一件事。HBM 被 AI 硬件看重，主要是因为带宽高，不是因为装得多。 → [内存墙：为什么很多时候不是算不动，而是数据送不到](docs/computing-foundations/memory-wall.md)

**Arithmetic Intensity（算术强度）**
每从内存搬一份数据，能换来多少次运算——比例高，瓶颈在算力（compute-bound）；比例低，瓶颈在搬运（memory-bound）。 → [内存墙：为什么很多时候不是算不动，而是数据送不到](docs/computing-foundations/memory-wall.md)

**Batching（批处理）**
把多个请求凑在一起、一次性交给硬件处理，比一个一个处理更划算——你的请求有时候"等一下"，可能就是在等凑一批。 → [Software × Hardware Map](docs/computing-foundations/software-hardware-map.md)

**Interconnect（互连）**
东西之间怎么互相"说话"的统称——芯片内部有片内总线，服务器内有 NVLink/PCIe，服务器之间有网络/InfiniBand。同一个概念，在不同尺度上换了不同的名字。 → [Hardware Map](docs/computing-foundations/hardware-map.md)

**Accelerator（加速器）**
专门为某一类计算而设计的处理器，GPU 是最常见的一种，TPU 是另一种——都是"给算力设计"这个问题的不同答案，不是互相升级的关系。 → [Hardware Map](docs/computing-foundations/hardware-map.md)

**Amdahl's Law（阿姆达尔定律）**
一件工作里，总有一部分没法拆开来分给多人同时做（必须按顺序完成，或者是协调/通信开销）——这部分"没法并行"的比例，决定了不管加多少人手/多少台机器，能拿到的加速倍数都有一个上限。 → [从 1 卡到千卡：为什么算力扩展这么难](docs/computing-foundations/scaling-and-communication.md)

**Yield（良率）**
一片晶圆切出来的裸片里，能正常工作的比例——制程越先进，出瑕疵的概率往往越高，良率越低，同样一片晶圆能卖出去的合格芯片就越少。 → [良率与代工：为什么芯片产能约束 AI](docs/computing-foundations/yield-and-foundry.md)

**Foundry（代工）**
设计芯片和制造芯片，通常是两家不同的公司——像 NVIDIA 这样的公司设计芯片，把制造交给专门的代工厂（比如台积电 TSMC）。全世界能造最先进芯片的代工厂只有极少数几家，是产能受限的直接原因。 → [良率与代工：为什么芯片产能约束 AI](docs/computing-foundations/yield-and-foundry.md)

**EUV（极紫外光刻）**
制造最先进芯片所需的光刻设备——全世界只有荷兰的 ASML 一家能生产。不需要懂它的物理原理，只需要知道：芯片产能的上游，卡在一家公司手上。 → [良率与代工：为什么芯片产能约束 AI](docs/computing-foundations/yield-and-foundry.md)

---

## 还看不懂某个词？

如果这里没有你要找的词，去 [全部概念索引](index-all-concepts.md) 按字母查——那边收录了 107 个更细的概念，每个都直接链接到讨论它的具体文章。

---

**最后更新**: August 9, 2026
