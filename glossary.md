# 术语表 Glossary

> 只回答一个问题：**一个正在学习 AI 的人，为了读懂这个 Wiki，需要掌握哪些反复出现的核心术语？**
>
> 收录标准（四问门）：跨多篇文章反复出现；相对稳定、通用的 AI / Computing 概念；不理解会明显妨碍理解后续内容；最好一句话能建立稳定心智模型。以后每加一个词，先过这四问——**文章负责完整记录，Glossary 负责筛选**。
>
> 这里是**知识主干**（50 个词，增长越来越慢——不以凑整为目标）。另外两层：
> - [全部概念索引](index-all-concepts.md)（Concept Index）——学过、以后可能要查的概念，可以无限增长：概念 → 一句话 → 来源文章。
> - [心智模型](mental-models.md)（Mental Models）——真正改变思考方式的认知压缩包，宁缺毋滥。
>
> 每个词保持：**一句话定义 → 怎么想象 → 与其他核心概念的关系 → 深入阅读**。不展开长篇论证——想深入，点链接去看完整文章。

---

## 阅读地图

> 六个大类，建议按这个顺序走一遍，之后随便跳。十秒钟知道这张地图怎么走：
>
> **AI 基础**（AI 是什么、模型怎么来的）→ **AI 系统**（模型怎么变成能干活的系统）→ **计算与基础设施**（底下的算力长什么样）→ **Agent 与规模化**（系统怎么变大、变多、进生活）→ **安全、对齐与信任**（怎么保证它不跑偏、值不值得托付）→ **前沿 AI**（值得长期跟踪的少数概念）

---

## AI 基础

#### AI
**Artificial Intelligence，人工智能** — 让机器表现出"智能行为"的技术大类——识别图像、理解语言、下棋、做决策都算。LLM 只是这个大类里，目前最受关注的一种。

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
**Large Language Model，大语言模型** — 被大量文本和其他数据训练过的 AI 模型，本质是"输入一段文字，预测接下来最可能是什么"。Claude、GPT、Gemini 都是 LLM。

*怎么想象*：AI 这个大类里，目前最重要的一种 Model（关系图见上面 AI 词条）。

*相关*：[AI](#ai)、[Model](#model)、[Token](#token)、[Inference](#inference)

*想深入*：[Start Here 第 2 站：LLM 为什么会说话？](start-here.md) · [Transformer 架构完全指南](docs/ai-core/transformer-architecture.md)

#### Model
AI 产品背后的核心组件——一堆通过训练调出来的参数，很大程度上影响它能做到什么、做不到什么。你平时用的产品（ChatGPT、Claude.ai）是建立在 Model 之上的完整产品层，通常还包含工具调用、检索、记忆、安全机制、界面、编排等很多 Model 本身不提供的能力。

*怎么想象*：像发动机——Product 是整辆车，Model 是藏在车里的发动机，你看不见它，但它是车能跑多快的重要因素之一（车好不好开，还要看变速箱、底盘这些其他部分）。整条链可以记成：Training（训练）→ 产生 Weights（权重）→ 用 Weights 做 Inference（推理）——权重就是训练调出来的那堆参数数值。

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

#### Embedding
**嵌入 / 向量表示** — 把一个词、一句话或一整段文字，变成一串数字（向量），代表它的"语义位置"。意思相近的文字，向量也挨得近；意思不相关的，向量离得远。

*怎么想象*：像给每段文字在一张巨大的"意思地图"上标一个点——"减肥"和"瘦身"标的点挨在一起，"减肥"和"天气"标的点离得很远。

*相关*：[Token](#token)

*想深入*：[Embeddings 完全指南](docs/ai-core/embeddings-guide.md)

#### Multimodal
**多模态** — 让文字、图像、音频、视频这些不同形式的信息，共同参与模型的表示、关联与推理，不是先把一切翻译成文字再处理。补上的是智能系统的 Perception（感知）能力。

*怎么想象*：Text-only AI 靠人类把世界翻译成文字再喂给它；Multimodal AI 让视觉、声音、视频这些信号直接进来，人类不再是唯一的"传感器"。

*相关*：[Embedding](#embedding)、[Agent](#agent)

*想深入*：[Multimodal 完全指南](docs/ai-core/multimodal-guide.md)

#### Transformer
现在主流 LLM 都在用的一种模型架构，核心是 Attention 机制（让模型判断一句话里哪些词之间有关系）——2017 年提出，至今仍是地基。

*怎么想象*：所有现代 LLM 共同的地基设计——换模型像换发动机，换架构才是换地基，十年才换一次。

*相关*：[LLM](#llm)、[Token](#token)

*想深入*：[Transformer 架构完全指南](docs/ai-core/transformer-architecture.md)

#### Inference
**推理** — AI 生成回答的过程——不是"查找答案"，是把输入变成数字、一层层计算，一个 Token 一个 Token 预测出来。

*怎么想象*：Training 是"学会本领"，Inference 是"现在用这本领干活"，两件事完全不同。
```
Training（训练）：海量数据 → 调整参数 → 模型学会规律      [成本高、耗时长]
Inference（推理）：你的输入 → 模型 → 输出                 [每次对话都发生、相对快]
```

*相关*：[Token](#token)、[LLM](#llm)、[Model](#model)、[Training](#training)

*想深入*：[Start Here 第 2 站](start-here.md) · [Inference 推理系统完全指南](docs/ai-core/inference-system-guide.md)

#### Training
**训练** — 模型从一堆随机数变成"会说话"的过程，分三个阶段：预训练（在海量文本上自监督学习，不需要人工标注）、监督微调（用人工样本教它像助手一样说话）、RLHF（用人类反馈打磨成"讨人喜欢"）。训练完权重就固定了，之后的一切对话都是 [Inference](#inference)，不会让模型"变聪明"。

*怎么想象*：预训练是"读遍图书馆自学成才"，监督微调是"上岗培训"，RLHF 是"根据顾客反馈调整服务方式"——三步一步比一步更依赖人的参与。

*相关*：[Inference](#inference)、[Fine-tuning](#fine-tuning)、[RLHF](#rlhf)

*想深入*：[Training 训练系统完全指南](docs/ai-core/training-system-guide.md)

#### Pretraining
**预训练** — 模型训练的第一阶段：在海量无标注文本上做自监督学习（核心任务就是"预测下一个 token"），让模型从一堆随机数变成"会说话"。模型的知识截止日期、语言能力和世界观，基本都在这一阶段定型；之后的微调和 RLHF 只是在这个底子上"调教"。

*怎么想象*：读遍图书馆自学成才——还没人教它"怎么当助手"，但已经上知天文下知地理。预训练是通识教育，之后的一切都是专科培训。

*相关*：[Training](#training)、[Fine-tuning](#fine-tuning)、[Token](#token)

*想深入*：[Training 训练系统完全指南](docs/ai-core/training-system-guide.md#预训练从随机数到会说话)

#### Fine-tuning
**微调** — 在一个已经训练好的通用模型基础上，用更少量、更专门的数据继续训练，让它更擅长某个特定任务或领域。

*怎么想象*：预训练是通识教育，微调是专科培训——底子是通用的，手艺是专的。

*相关*：[Training](#training)、[RLHF](#rlhf)

*想深入*：[Training 训练系统完全指南](docs/ai-core/training-system-guide.md)

#### Prompt
你给 AI 的输入指令/问题——本质上就是 [Context](#context) 里由你写的那部分。写得越清楚具体，AI 能"猜"的候选范围就越窄，回答质量通常越高。

*怎么想象*：AI 是在你给的文字基础上，预测接下来最可能出现什么。Prompt 写得越模糊，合理的"接下来"就越多；写得越具体，AI 越容易命中你真正想要的那个。

*相关*：[Context](#context)、[Inference](#inference)

*想深入*：[Prompt 工程完全指南](docs/ai-core/prompt-engineering-guide.md)

#### RL
**Reinforcement Learning，强化学习** — 让 agent 在环境里不断试错、用奖励信号学会做决策的训练范式。LLM 时代它主要干两件事：RLHF（按人类偏好打磨）和 RLVR（按可验证的奖励打磨，比如数学题做对了才给分）。和 SFT（"看示范学"）不同，RL 是"自己试出来"——这也是它能让模型长出训练数据里没有的新招数的原因。

*怎么想象*：训狗——做对了给零食，做错了不给，久了就学会了。但狗也可能学会"假装听话骗零食"，这就是奖励作弊。

*相关*：[RLHF](#rlhf)、[Training](#training)、[Agent](#agent)

*想深入*：[Evaluation 评估系统](docs/ai-research/evaluation-system.md#rlhf-三步流程)（RLHF 完整三步流程）

#### RLHF
**Reinforcement Learning from Human Feedback，基于人类反馈的强化学习** — 让模型学会人类偏好的训练方法：先让模型给出多个回答，人类挑出更好的，再用这个"偏好"信号继续训练模型。

*怎么想象*：训练目标从"把话说对"变成"把话说到人心里去"——但"讨人喜欢"不等于"真的对齐"，这是目前最主流的对齐技术，同时也只是缓解手段。

*相关*：[Training](#training)、[Alignment](#alignment)

*想深入*：[Evaluation 评估系统](docs/ai-research/evaluation-system.md)（完整三步流程）· [Training 训练系统完全指南](docs/ai-core/training-system-guide.md)

#### Scaling Laws
**缩放定律** — 模型性能随参数量、训练数据量、算力增长而**可预测地**提升的经验规律（Chinchilla 的核心发现：数据比参数更重要）。它是"大力出奇迹"的理论底座，也是推理扩展（Test-Time Compute）的思想源头——既然训练时堆料有用，推理时多想几步大概率也有用。

*怎么想象*：堆料公式——投入翻 10 倍，性能涨一个可预测的台阶。不是玄学，是账本；整个 AI 行业的资本开支逻辑都写在这张账本上。

*相关*：[Training](#training)、[Inference](#inference)、[Test-Time Compute](#test-time-compute)

*想深入*：[Training 训练系统完全指南](docs/ai-core/training-system-guide.md)

#### Emergent Abilities
**涌现能力** — 模型规模跨过某个临界点后**突然出现**的新能力：小模型怎么训都没有，大模型自然就有。可预测的是"会有涌现"，不可预测的是"何时涌现、涌现什么"——这也是 Eval 必须带上推理预算的原因（低预算下看起来人畜无害的能力，高预算下可能突然开窍）。

*怎么想象*：水烧到 100 度突然变蒸汽——99 度时你看不出任何"蒸汽能力"。量变到质变，但没人能提前算出沸点在哪。

*相关*：[Scaling Laws](#scaling-laws)、[Eval](#eval)

*想深入*：[推理系统指南](docs/ai-core/inference-system-guide.md#涌现能力真的会突然出现吗)

#### Hallucination
**幻觉** — 模型一本正经地编造不存在的事实。根因是它在"预测最像样的下一个词"，不是在"查数据库"——流畅不等于真实。RAG 之所以重要，就是给模型外接一个"允许查资料"的动作。

*怎么想象*：一个记忆力超群但从不查证的朋友——你问他不知道的事，他宁可编一个滴水不漏的答案，也不说"不知道"。

*相关*：[Inference](#inference)、[RAG](#rag)、[Eval](#eval)

*想深入*：[推理系统指南](docs/ai-core/inference-system-guide.md#模型的幻觉为什么发生)

#### Alignment
**对齐** — 模型的目标和行为，是不是真的符合人类的真实意图，尤其是在训练时没见过的新场景里——比"怎么防止 AI 系统造成不可接受的伤害"（Safety）更深、更难验证的一层问题。RLHF 是目前最主流的对齐技术之一，但只是缓解手段，不保证问题被彻底解决。

*怎么想象*：Safety 像"考试有没有作弊"（具体、能当场抓）；Alignment 像"这个人真正的品格是不是可信"（更深、没法靠一次考试完全确认）。

*相关*：[Training](#training)、[RLHF](#rlhf)

*想深入*：[AI Safety / Alignment 完全指南](docs/ai-core/safety-alignment-guide.md)

#### Eval
**评估** — 用标准化测试给 AI 能力打分、互相比较的一整套方法——不只看答得好不好，还要看在什么推理预算下、按什么维度评。评测基准（Benchmark）是 Eval 的具体考卷。

*怎么想象*：考试大纲 + 阅卷标准。Noam Brown 的提醒：评估必须带上推理预算——低预算下看起来无害的模型，高预算下可能涌现危险能力。

*相关*：[Alignment](#alignment)、[Inference](#inference)

*想深入*：[Evaluation 评估系统](docs/ai-research/evaluation-system.md)

---

## AI 系统

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

*相关*：[Agent](#agent)、[Workflow](#workflow)、[MCP](#mcp)

*想深入*：[Agent 系统架构完全指南：工具调用机制](docs/ai-core/agent-architecture.md)

#### Workflow
**工作流** — 把一个复杂任务拆成一系列步骤（可以并行、有条件分支、能循环），路径大部分是预先定义好的。执行者可以是一个 Agent，也可以是多个 Agent 协作——不是必须要多个。

*怎么想象*：Workflow 和 Agent 的区别不是"谁更高级"，是"路径预先定义了多少"，还是"运行时自主决定了多少"。

*相关*：[Agent](#agent)、[Tool](#tool)

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

> ⚠️ 这里的 Memory 是 Agent 软件层面的"记忆"。如果你要找的是硬件内存（RAM/缓存/HBM，数据物理上放在哪、搬得多快），看"计算与基础设施"分类。

#### MCP
**Model Context Protocol，模型上下文协议** — 一个让 AI 系统以统一方式连接外部工具和数据源的协议。

*怎么想象*：类似 USB 统一了各种设备的接口——但这只是帮助理解"统一连接方式"的类比，不代表 MCP 和 USB 在技术上是一回事。

*相关*：[Tool](#tool)、[Harness](#harness)

*想深入*：[MCP 统一协议指南](docs/ai-application/mcp-protocol-guide.md)

#### Connector
**连接器** — Agent 伸向外部世界的插头：把 App、数据源或服务连接进来，让 Agent 在用户授权范围内读取信息或执行动作。API 是服务提供的"门"，Connector 是 Agent 接上并使用那扇门的方式（认证、权限、工具定义、参数结构、结果返回），MCP 则试图统一不同 Agent 与外部工具之间的连接语言。

*怎么想象*：
```
Agent → Connector → External Service
```

*相关*：[Agent](#agent)、[Tool](#tool)、[MCP](#mcp)

*想深入*：[从 SEO 到 Agent Economy](docs/career-impact/from-seo-to-agent-economy.md)

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

*相关*：[Context](#context)、[Model](#model)、[Embedding](#embedding)

*想深入*：[RAG 完全指南](docs/ai-application/rag-guide.md) —— "检索"这一步具体怎么做

---

## 计算与基础设施

#### CPU
**Central Processing Unit，中央处理器** — 负责"干活"的通用计算核心——设计目标是把单个任务算得又快又对，哪怕任务里全是分支判断。

*怎么想象*：像一个什么都会的全能工匠，一次只专心做一件事，但做得又快又准。

*相关*：[GPU](#gpu)、[FLOPS](#flops)

*想深入*：[Foundation Zero](docs/computing-foundations/foundation-zero.md) · [CPU vs GPU](docs/computing-foundations/cpu-vs-gpu.md)

#### GPU
**Graphics Processing Unit，图形处理器** — 用海量相对精简的核心并行工作的处理器——原本为图形渲染设计，恰好也是深度学习最需要的那种"重复做同一种简单运算"的活。

*怎么想象*：像几千个只会做简单算术的工人一起开工——单个不强，但"同时"这个规模优势，恰好命中了深度学习的需求。

*相关*：[CPU](#cpu)、[Parallelism](#parallelism)

*想深入*：[CPU vs GPU：为什么 GPU 赢了深度学习](docs/computing-foundations/cpu-vs-gpu.md)

#### RAM
**Random Access Memory，内存** — CPU/GPU 手边正在用的工作空间——比存储（硬盘）快得多，但断电就没了，容量也小得多。

*怎么想象*：像办公桌桌面——越大，能同时摊开的资料越多；但下班（断电）就得收走。

*相关*：[Memory Wall](#memory-wall)、[HBM](#hbm)

*想深入*：[Foundation Zero](docs/computing-foundations/foundation-zero.md) · [内存墙](docs/computing-foundations/memory-wall.md)

#### OS
**Operating System，操作系统** — 管理硬件资源、调度所有程序的"总管"——你打开的每个程序，都是 OS 分配资源、安排运行的。

*怎么想象*：像大楼的物业——水电、电梯、门禁都归它管，住户（程序）只管住。

*相关*：[Runtime](#runtime)、[CPU](#cpu)

*想深入*：[Foundation Zero](docs/computing-foundations/foundation-zero.md)

#### HBM
**High Bandwidth Memory，高带宽内存** — 为高带宽设计的一种主存，好几片内存裸片堆叠在一起、紧挨着计算芯片摆放，AI 硬件常用它来缓解内存墙。

*怎么想象*：普通内存像仓库在郊区，HBM 像把仓库直接盖在工厂隔壁——路短了，送货就快了。

*相关*：[Memory Wall](#memory-wall)、[GPU](#gpu)

*想深入*：[内存墙：为什么很多时候不是算不动，而是数据送不到](docs/computing-foundations/memory-wall.md)

#### FLOPS
**Floating-point Operations Per Second，每秒浮点运算次数** — 衡量硬件一秒钟能做多少次数学运算的单位——不是"这块芯片有多聪明"，是"手有多快"。数字精度越低，同样宽的硬件一次能塞下的数字越多，FLOPS 就越高。

*怎么想象*：像工人的手速——手快不代表活好，但活再好，手太慢也白搭。

*相关*：[GPU](#gpu)、`精度`

*想深入*：[FLOPS 与精度：为什么降精度能提速](docs/computing-foundations/flops-and-precision.md)

#### Memory Wall
**内存墙** — 算力这些年涨得比数据搬运速度快得多，这道越拉越大的差距——计算单元经常不是不够快，是数据没送到。**注意**：这里的 Memory 指硬件内存（RAM/缓存/HBM），不是 Agent 那个"记忆"的 Memory，两者是完全不同的概念，只是中英文都撞了同一个词。

*怎么想象*：像工厂的机器越换越快，但送货的卡车还是那几辆——瓶颈不在生产，在物流。背后还有一组概念：Memory Hierarchy（内存层级）——寄存器/缓存 → RAM/HBM → 硬盘，离计算越近越快越小越贵，每层都在"快"和"大"之间做了不同取舍。

*相关*：[HBM](#hbm)、[RAM](#ram)、[FLOPS](#flops)

*想深入*：[内存墙：为什么很多时候不是算不动，而是数据送不到](docs/computing-foundations/memory-wall.md)

#### Runtime
**运行时** — 真正"执行"东西的那个角色，不管要执行的是一段代码还是一个模型的权重。模型本身是数据，不是代码——得靠 Runtime 才能真正跑起来。

*怎么想象*：模型像一份乐谱，Runtime 是照着乐谱演奏的人——乐谱自己不会响。

*相关*：[Model](#model)、[OS](#os)

*想深入*：[Software Map](docs/computing-foundations/software-map.md) · [Software × Hardware Map](docs/computing-foundations/software-hardware-map.md)

#### Parallelism
**并行** — 把一份工作拆成多份、同时开工的思路——GPU 赢深度学习、multi-agent 提速，靠的都是它；但 Amdahl's Law 提醒：总有一部分工作本质上拆不开，并行不是免费加速。

*怎么想象*：1 个人搬 100 块砖 vs 10 个人每人搬 10 块——但得分砖、得协调、得互相等，协调本身也要花时间。

*相关*：[GPU](#gpu)、[FLOPS](#flops)、[Multi-Agent](#multi-agent)

*想深入*：[CPU vs GPU](docs/computing-foundations/cpu-vs-gpu.md) · [从 1 卡到千卡：为什么算力扩展这么难](docs/computing-foundations/scaling-and-communication.md)

---

## Agent 与规模化

#### Multi-Agent
**多智能体** — 多个 Agent 一起干活——可以分工、可以互相检查、可以并行提速。但 Noam Brown 的提醒很关键：约 10,000 个 agent 解出 Navier-Stokes 千禧年难题，他说连 10% 的功劳都归不上 multi-agent——真正的驱动力是强大的通用模型 × 超长 horizon，multi-agent 只是 test-time compute 的并行化载体。

*怎么想象*：multi-agent 首先是延迟优化器（花 2 倍算力，换一半等待时间），其次才是别的——"人多"不自动等于"力量大"。

*相关*：[Agent](#agent)、[Test-Time Compute](#test-time-compute)、[Parallelism](#parallelism)

*想深入*：[Multi-Agent Scaling：把 Test-Time Compute 并行化](docs/ai-core/multi-agent-scaling.md)

#### Test-Time Compute
**测试时计算** — 不在训练时、而在模型回答问题的"当下"花的算力——让模型想得更久（更长的思考链）、试更多条路、或派多个 agent 并行想。Scaling 的新战场：从"训练时堆算力"转向"推理时花算力"。

*怎么想象*：考试时多给 30 分钟思考时间 vs 平时多读一年书——前者是 test-time compute，后者是 training compute。

*相关*：[Inference](#inference)、[Multi-Agent](#multi-agent)、[Eval](#eval)

*想深入*：[Multi-Agent Scaling：把 Test-Time Compute 并行化](docs/ai-core/multi-agent-scaling.md)

#### Skill
这里特指 Claude / Claude Code 语境下的 Skill——给 Claude 打包的一套"怎么做某件事"的说明书，把具体任务需要的步骤、规则、格式要求写清楚存起来，以后调用它就不用重新解释一遍。不是业界统一标准术语，不同 AI 产品可能用别的名字指类似的东西。

*怎么想象*：像给新员工写的 SOP 手册——人不用每次都从头教，Agent 也不用每次都从头解释。

*相关*：[Agent](#agent)、[Tool](#tool)、[MCP](#mcp)

*想深入*：[Skills 和商业格局](docs/ai-application/skills-business-landscape.md)

#### Coding Agent
专门用来读代码、改代码、跑测试的 Agent——目前是 Agent 落地最快、最成熟的场景之一（比如 Anthropic 的 Claude Code，能直接读写你电脑上的文件、执行命令）。

*怎么想象*：
```
读代码 → 做修改 → 跑测试 → 观察结果 → 修 bug → 回到"跑测试" → …直到测试通过
```
Coding 特别适合 Agent，核心原因是改动能自动验证对错（编译、测试），失败了也能撤销重来，试错成本很低。

*相关*：[Agent](#agent)、[Tool](#tool)、[Harness](#harness)

*想深入*：[Start Here 第 6 站：为什么 Coding Agent 最先爆发？](start-here.md) · [Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)

#### Personal Agent
不只是回答问题的 chatbot，而是理解用户目标、记住背景、使用工具、并持续替用户把事情往前推进的 AI 系统。交互的基本单位从 prompt 变成 goal，用户关闭 App 后它仍然可以继续工作。Meta 的 Muse 是 2026 年首个大规模消费级 Personal Agent。

*怎么想象*：
```
Chatbot：用户提问 → AI 回答 → 结束
Personal Agent：给定目标 → 理解 context → 计划 → 行动 → 监控 → 更新 → 必要时请求授权
```

*相关*：[Agent](#agent)、[Context](#context)、[Memory](#memory)

*想深入*：[Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.md)

---

## 安全、对齐与信任

#### Interpretability
**可解释性** — 直接看模型内部在"想什么"——分析神经网络的激活状态，找"说谎""做规划"这类行为对应的内部特征，而不是只看它说出来的话。

*怎么想象*：以前只能看交上来的考卷（输出），现在尝试看它的草稿纸（内部激活）——字迹潦草，但可能是唯一诚实的东西。

*相关*：[Alignment](#alignment)、[CoT Monitoring](#cot-monitoring)

*想深入*：[AI Safety / Alignment 完全指南](docs/ai-core/safety-alignment-guide.md)（互补思路） · [AI Safety 的三层防护框架](docs/ai-core/safety-three-layer-framework.md)

#### CoT Monitoring
**思维链监控（Chain-of-Thought Monitoring）** — 趁模型用自然语言"自言自语"时读它的思考过程，是目前人类监控 AI 意图最重要的一扇窗口——Noam Brown 称之为"天赐的礼物"。但它极其脆弱：因为"动了坏念头"就惩罚模型，只会教它把坏念头藏进不可观测的地方；正确做法是只惩罚可观察的坏行动。

*怎么想象*：像趁一个人说梦话时听他的真心话——但如果你因为梦话惩罚他，他学会的不是向善，而是闭嘴。

*相关*：[Interpretability](#interpretability)、[Alignment](#alignment)

*想深入*：[递归自我改进](docs/ai-research/recursive-self-improvement.md)

#### Scalable Oversight
**可扩展监督** — 当模型能力超过人类时，人类怎么判断它的输出是否正确？两条路径：Debate（让两个 AI 互辩，人类判断谁更可信）和 Recursive Reward Modeling（把复杂任务拆成人类能判断的小块）。

*怎么想象*：老师看不懂学生的解题过程了——办法不是让老师变聪明，而是让两个学生互相挑错，老师当裁判。

*相关*：[Alignment](#alignment)、[Eval](#eval)

*想深入*：[AI Safety 的三层防护框架](docs/ai-core/safety-three-layer-framework.md)

#### Calibrated Trust
**校准信任** — 不是"信不信 AI"的一刀切，而是把信任拆开校准：这个任务上它可靠度 90%，那个任务上只有 60%——人机系统的表现 = AI 能力 × 人类感知准确度。

*怎么想象*：不是给 AI 发"好人卡"或"坏人卡"，而是像看天气预报——说 70% 下雨，就得十次下七次，准了才敢带伞。

*相关*：[Alignment](#alignment)、[Eval](#eval)

*想深入*：[Scaling Paradox](docs/career-impact/scaling-paradox.md) · [Personal Agents](docs/career-impact/personal-agents-agent-economy.md)

---

## 前沿 AI

#### RSI
**Recursive Self-Improvement，递归自我改进** — AI 系统加速 AI 研发本身的过程——用更强的模型训练出更强的模型。OpenAI 的内部数据显示 agent 劳动已超人类劳动 3.1 倍，但 10× 的 R&D 生产力只能转化为约 1.5-2× 的能力进步速度。

*怎么想象*：不是"AI 一夜变聪明 100 倍"——实验是串行的、GPU 是物理的；但叠加在已经指数级的进步曲线上，哪怕只有约 3 倍加速，也是翻天覆地。

*相关*：[Training](#training)、[Agent](#agent)

*想深入*：[Research Acceleration](docs/ai-research/research-acceleration.md) · [递归自我改进（RSI）：当 AI 开始改进 AI](docs/ai-research/recursive-self-improvement.md)

#### AGI
**Artificial General Intelligence，通用人工智能** — 在几乎所有认知任务上达到或超过人类水平的 AI。注意它是"能力描述"不是"某个产品"：业界对"到了没有"没有共识——有人按经济价值定义（能完成绝大多数有经济价值的工作），有人按任务广度定义。理解所有前沿讨论（RSI、ASI、对齐）的前提，是先把 AGI 当"坐标系"而不是"终点线"。

*怎么想象*：不是"更聪明的聊天机器人"，而是"能干你所有案头工作的数字同事"——分得清轻重缓急，会主动追问，而不是等你一条条下指令。

*相关*：[ASI](#asi)、[RSI](#rsi)、[Alignment](#alignment)

*想深入*：[递归自我改进（RSI）：当 AI 开始改进 AI](docs/ai-research/recursive-self-improvement.md)

#### ASI
**Artificial Superintelligence，超级智能** — 全面超越人类智能的 AI。AGI 是"达到人类水平"，ASI 是"把人类远远甩在身后"——对齐讨论里真正让人睡不着的那个词。一旦出现，科学发现、技术进步的速度将不再由人类的理解速度决定。

*怎么想象*：AGI 是"请了个全能助理"，ASI 是"这个助理比你聪明一万倍，还 24 小时不睡觉"——这时候"谁指挥谁"就成了真问题。

*相关*：[AGI](#agi)、[RSI](#rsi)、[Alignment](#alignment)

*想深入*：[递归自我改进（RSI）：当 AI 开始改进 AI](docs/ai-research/recursive-self-improvement.md)

---

## 还看不懂某个词？

去 [全部概念索引](index-all-concepts.md) 按字母查——那边收录了所有学过的概念（概念 → 一句话 → 来源文章），是这张主干地图之外的完整知识地图。

---

**最后更新**: September 20, 2026
