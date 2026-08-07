# 术语表

> 给第一次看这个 Wiki 的人（尤其是不熟悉 AI 术语的朋友）准备的。每个词只给一句话、大白话的解释，不展开论证——想深入了解，点链接去看完整文章。如果你是老读者，直接跳过这页去看具体文章就行。

---

## AI 基础

**LLM（大语言模型）**
被海量文字训练过的 AI 模型，本质是"输入一段文字，预测接下来最可能是什么"。Claude、GPT、Gemini 都是 LLM。

**Token**
LLM 处理文字的最小单位，大致相当于半个词到一个词。计费、上下文长度都按 Token 算。 → [Context Window 完全指南](docs/ai-core/context-window-guide.md)

**Prompt**
你给 AI 的输入指令/问题。写得越清楚具体，AI 的回答质量通常越高。

**Context Window（上下文窗口）**
AI 一次能"看到"的最大信息量（用 Token 衡量），包括你的对话历史、上传的文件、系统设定等。 → [Context Window 完全指南](docs/ai-core/context-window-guide.md)

**Inference（推理）**
AI 生成回答的过程——不是"查找答案"，是把你的输入变成数字，一层层计算，最后一个词一个词预测出来。 → [Inference 推理系统完全指南](docs/ai-core/inference-system-guide.md)

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
不只是"回答问题"，而是能自己感知情况、做决策、采取行动（比如调用工具、执行任务）的 AI 系统。可以理解成"AI 从动嘴变成动手"。 → [Agent 系统架构](docs/ai-core/agent-architecture.md)

**Tool Use / Tool Calling（工具调用）**
Agent 不是所有事都自己"想"出来，而是可以调用外部工具（读文件、查天气、发邮件……）来完成任务，就像人用工具做事一样。

**Orchestrator（编排者）**
在多个 Agent 协作的系统里，负责拆解任务、分配给不同 Agent、汇总结果的"总指挥"角色。 → [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

**Workflow（工作流）**
把一个复杂任务拆成一系列步骤（可以并行、有条件分支、能循环），让多个 Agent 按顺序或同时执行，而不是一次性丢给一个 AI says "帮我搞定"。 → [Workflow 工作流完全指南](docs/ai-application/workflow-design-guide.md)

**Memory System（记忆系统）**
让 AI 能"记住"之前发生的事、你的偏好、长期积累的信息，而不是每次对话都从零开始。 → [Agent 记忆系统完全指南](docs/ai-core/memory-system-guide.md)

---

## AI 应用与工具生态

**Skill**
给 Claude 打包的一套"怎么做某件事"的说明书——把具体任务需要的步骤、规则、格式要求写清楚存起来，以后调用它就不用重新解释一遍。 → [Skills 和商业格局](docs/ai-application/skills-business-landscape.md)

**MCP（Model Context Protocol，模型上下文协议）**
一个让 AI 模型和外部工具/数据"对话"的统一标准接口，类似 USB 统一了各种设备的接口。Skill 是"大脑"（怎么想），MCP 是"手和眼睛"（怎么连接外部世界）。 → [MCP 统一协议指南](docs/ai-application/mcp-protocol-guide.md)

**Harness**
给 AI Agent 定的"入职规则"——规定它能用什么工具、能碰什么文件、能花多少钱、什么情况必须停下来问人，本质是给 Agent 的行为设边界。 → [Harness 系统完全指南](docs/ai-application/harness-system.md)

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

如果这里没有你要找的词，去 [全部概念索引](index-all-concepts.md) 按字母查——那边收录了 100+ 个更细的概念，每个都直接链接到讨论它的具体文章。

---

**最后更新**: August 7, 2026
