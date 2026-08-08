# 术语表

> 给第一次看这个 Wiki 的人（尤其是不熟悉 AI 术语的朋友）准备的。每个词至少给一句话、大白话的解释；其中 15 个最核心的词（AI、LLM、Model、Token、Inference、Agent、Tool、Workflow、Context、State、Memory、MCP、Harness、RAG、Coding Agent）额外配了"怎么想象它"和简单的关系图——这是一次试点升级，看完这批之后决定要不要把其余词条也改成这个格式。不展开长篇论证——想深入了解，点链接去看完整文章。如果你是老读者，直接跳过这页去看具体文章就行。

---

## AI 基础

**AI（人工智能）**
让机器表现出"智能行为"的技术大类——识别图像、理解语言、下棋、做决策都算。LLM 只是这个大类里，目前最受关注的一种。

*怎么想象*：一层套一层的包含关系，越往里越具体。
```
AI（大类）
 └─ LLM（其中一种重要模型：大语言模型）
     └─ Model（能力核心：参数与权重，你看不见它）
         └─ Product（把 Model 包装成人能直接用的东西，比如 ChatGPT、Claude.ai）
```

*相关*：`LLM`、`Model`、`Product`

*想深入*：[Start Here 第 1 站：AI 到底是什么？](start-here.md)

**LLM（大语言模型）**
被海量文字训练过的 AI 模型，本质是"输入一段文字，预测接下来最可能是什么"。Claude、GPT、Gemini 都是 LLM。

*怎么想象*：AI 这个大类里，目前最重要的一种 Model（关系图见上面 AI 词条）。

*相关*：`AI`、`Model`、`Token`、`Inference`

*想深入*：[Start Here 第 2 站：LLM 为什么会说话？](start-here.md) · [Transformer 架构完全指南](docs/ai-core/transformer-architecture.md)

**Model**
AI 产品背后真正"思考"的那部分——一堆通过训练调出来的参数，决定了它的能力上限。你平时用的产品（ChatGPT、Claude.ai）只是包在 Model 外面的那层壳。

*怎么想象*：像发动机——Product 是整辆车，Model 是藏在车里的发动机，你看不见它，但车能跑多快由它决定。

*相关*：`AI`、`LLM`、`Product`

*想深入*：[Start Here 第 1 站](start-here.md) · [Models 深挖](docs/ai-research/models-deep-dive.md)

**Token**
LLM 处理文字的最小单位，大致相当于半个词到一个词。计费、上下文长度都按 Token 算。

*怎么想象*：文字被切成一小块一小块，模型一块接一块地往下猜。
```
文本 → 切成 Token → 预测下一个 Token → 拼接到已有文本 → 重复 → 生成回答
```

*相关*：`LLM`、`Inference`、`Context`

*想深入*：[Context Window 完全指南](docs/ai-core/context-window-guide.md)

**Inference（推理）**
AI 生成回答的过程——不是"查找答案"，是把输入变成数字、一层层计算，一个 Token 一个 Token 预测出来。

*怎么想象*：Training 是"学会本领"，Inference 是"现在用这本领干活"，两件事完全不同。
```
Training（训练）：海量数据 → 调整参数 → 模型学会规律      [一次性、很贵、很慢]
Inference（推理）：你的输入 → 模型 → 输出                 [每次对话都发生、相对快]
```

*相关*：`Token`、`LLM`、`Model`

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
把模型参数从高精度数字压缩成低精度数字，牺牲一点点准确率换取更小的体积和更快的速度。 → [Models 深挖](docs/ai-research/models-deep-dive.md)

**RLHF（Reinforcement Learning from Human Feedback，基于人类反馈的强化学习）**
让模型学会人类偏好的训练方法：先让模型给出多个回答，人类挑出更好的，再用这个"偏好"信号继续训练模型。 → [Evaluation 评估系统](docs/ai-research/evaluation-system.md)

**Benchmark（评测基准）**
用来给 AI 模型打分、互相比较能力的标准化测试集。 → [Evaluation 评估系统](docs/ai-research/evaluation-system.md)

---

## Agent 相关

**Agent（智能体）**
不只是"回答问题"，而是能围绕一个目标决定下一步、调用工具、根据结果继续行动的 AI 系统。

*怎么想象*：像给了目标就自己想办法的员工，而不是问一句答一句的客服。
```
Chatbot：用户提问 → AI 回答 → 结束
Agent  ：给定目标 → 决策 → 行动 → 观察结果 → 再决策 → …（循环直到完成）
```

*相关*：`Tool`、`Workflow`、`State`、`Memory`、`Harness`

*想深入*：[Start Here 第 3 站：从 Chatbot 到 Agent](start-here.md) · [Agent 系统架构完全指南](docs/ai-core/agent-architecture.md)

**Tool（工具调用）**
Agent 不是所有事都自己"想"出来，而是可以调用外部工具（读文件、查天气、发邮件……）来完成任务，就像人用工具做事一样。

*怎么想象*：Agent 每一步"该用哪个工具"，本质上是概率驱动的选择，不是写死的 if-else 判断。

*相关*：`Agent`、`Skill`、`Workflow`、`MCP`

*想深入*：[Agent 系统架构完全指南：工具调用机制](docs/ai-core/agent-architecture.md)

**Orchestrator（编排者）**
在多个 Agent 协作的系统里，负责拆解任务、分配给不同 Agent、汇总结果的"总指挥"角色。 → [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

**Workflow（工作流）**
把一个复杂任务拆成一系列步骤（可以并行、有条件分支、能循环），路径大部分是预先定义好的，让多个 Agent 按顺序或同时执行。

*怎么想象*：Workflow 和 Agent 的区别不是"谁更高级"，是"路径预先定义了多少"，还是"运行时自主决定了多少"。

*相关*：`Agent`、`Tool`、`Orchestrator`

*想深入*：[Start Here 第 4 站：Workflow、Agent、Skill、Tool、MCP 到底什么关系？](start-here.md) · [Workflow 工作流完全指南](docs/ai-application/workflow-design-guide.md)

**Context（上下文）**
AI 当下这次对话/任务里能"看到"的所有信息——你的输入、对话历史、上传的文件、系统设定，用 Token 衡量总量。

*怎么想象*：Context、State、Memory 经常被搞混，但回答的问题不一样。
```
Context（上下文）：这次对话桌面上摊开的信息——现在能看到什么
State（状态）    ：事情当前进行到哪一步——任务/进度的快照
Memory（记忆）   ：抽屉里存着、以后还能取出来的信息——跨对话保留
```

*相关*：`Token`、`State`、`Memory`、`Harness`

*想深入*：[Start Here 第 5 站：AI 为什么需要 Context、State 和 Memory？](start-here.md) · [Context Window 完全指南](docs/ai-core/context-window-guide.md)

**State（状态）**
事情当前进行到哪一步的快照——不是"看到了什么"，是"做到哪了"。（三者对比图见上面 Context 词条）

*怎么想象*：像任务清单上打钩打到第几项，决定了下一步该干什么。

*相关*：`Context`、`Memory`、`Agent`

*想深入*：[Start Here 第 5 站](start-here.md) · [Agent 系统架构完全指南](docs/ai-core/agent-architecture.md)

**Memory（记忆）**
存起来、以后（包括跨对话）还能取出来的信息，不随这次对话结束而消失。（三者对比图见上面 Context 词条）

*怎么想象*：像抽屉——平时不摊在桌面上，但需要时能打开取出来，跟"这次对话桌面上摊开的信息"（Context）是两回事。

*相关*：`Context`、`State`、`Agent`

*想深入*：[Start Here 第 5 站](start-here.md) · [Agent 记忆系统完全指南](docs/ai-core/memory-system-guide.md)

---

## AI 应用与工具生态

**Skill**
给 Claude 打包的一套"怎么做某件事"的说明书——把具体任务需要的步骤、规则、格式要求写清楚存起来，以后调用它就不用重新解释一遍。 → [Skills 和商业格局](docs/ai-application/skills-business-landscape.md)

**MCP（Model Context Protocol，模型上下文协议）**
一个让 AI 系统以统一方式连接外部工具和数据源的协议。

*怎么想象*：类似 USB 统一了各种设备的接口——但这只是帮助理解"统一连接方式"的类比，不代表 MCP 和 USB 在技术上是一回事。Skill 是"大脑"（怎么想），MCP 是"手和眼睛"（怎么连接外部世界）。

*相关*：`Tool`、`Skill`、`Harness`

*想深入*：[MCP 统一协议指南](docs/ai-application/mcp-protocol-guide.md)

**Harness**
围绕模型/Agent 搭起来的整套工作环境和运行脚手架——决定它能看见什么（Context）、能用什么（Tool、权限）、怎么获得反馈（execution loop），以及哪些地方绝对不能越界。

*怎么想象*：像给一个聪明员工配置办公室、工具、权限、规则和反馈系统——"划边界"只是这套配置里的一部分，不是全部。

*相关*：`Agent`、`Tool`、`MCP`、`Context`

*想深入*：[Harness 系统完全指南](docs/ai-application/harness-system.md)

**RAG（Retrieval-Augmented Generation，检索增强生成）**
模型自己不知道某个外部信息时，先去检索相关资料，再把资料放进 Context，然后基于资料回答，而不是凭训练时记住的内容硬答。

*怎么想象*：像开卷考试——不是死记硬背，是先翻资料再答题。
```
问题 → 检索相关资料 → 把资料放进 Context → 模型基于资料回答
```

*相关*：`Context`、`Model`

*想深入*：这个 Wiki 目前还没有 RAG 的独立深入文章（待创建）——想先了解 Context 怎么被"填进去"的，可以看 [Context Window 完全指南](docs/ai-core/context-window-guide.md)。

**Coding Agent**
专门用来读代码、改代码、跑测试的 Agent——目前是 Agent 落地最快、最成熟的场景。

*怎么想象*：
```
读代码 → 做修改 → 跑测试 → 观察结果 → 修 bug → 回到"跑测试" → …直到测试通过
```
Coding 特别适合 Agent，核心原因是改动能自动验证对错（编译、测试），失败了也能撤销重来，试错成本很低。

*相关*：`Agent`、`Tool`、`Harness`

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

## 还看不懂某个词？

如果这里没有你要找的词，去 [全部概念索引](index-all-concepts.md) 按字母查——那边收录了 76 个更细的概念，每个都直接链接到讨论它的具体文章。

---

**最后更新**: August 8, 2026
