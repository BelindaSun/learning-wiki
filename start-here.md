# Start Here

> 完全没有 AI 技术背景？从这里开始。这不是课程，是一张**最小地图**——用 60-90 分钟看完这 7 站，你不会成为专家，但会知道这个 Wiki 里其他文章在讨论什么、彼此怎么连接。看完之后，去 [AI Core](docs/ai-core/index.md)、[心智模型](mental-models.md) 或任何你好奇的地方自由探索就行。
>
> 正文里的深度文章不会因为这张地图而变浅——它们本来就是写给已经理解基础的人看的。这张地图的作用，是帮你先跨过那道门槛。

---

## 01 · AI 到底是什么？

**问题**：AI、LLM、ChatGPT、Model、Product 是不是一回事？

**一句话答案**：不是。它们是四个不同层级的东西，很多人把它们混着用，这是大部分困惑的起点。

**最简单的解释**：
```
AI          —— 一个大概念，泛指"让机器表现出智能行为"的所有技术
  └─ LLM     —— AI 里现在最重要的一类：大语言模型
       └─ Model 家族 —— 具体的模型，比如 GPT、Claude、Gemini
            └─ Product —— 建立在模型之上、给人用的产品，比如 ChatGPT、Claude App
```

模型（Model）是"引擎"，产品（Product）是"装了这个引擎的车"。同一个模型可以装进很多不同的产品里；同一个产品背后也可能换用不同的模型。**模型 ≠ 产品**，这是最容易搞混、也最值得先分清楚的一对概念。

**你真正需要记住的 3 件事**：
1. AI 是大概念，LLM 只是 AI 目前最耀眼的一类，不是全部
2. "模型"和"产品"是两层不同的东西，别混为一谈
3. GPT / Claude / Gemini 这些是模型（或模型家族），ChatGPT / Claude App 是产品

**常见误解**：「ChatGPT 就是 AI」——不对，ChatGPT 是一个产品，背后用的是 GPT 系列模型；AI 是比这个大得多的概念。

**Related concepts**：[AI](glossary.md#ai-基础) · [LLM](glossary.md#ai-基础) · [Model](glossary.md#ai-基础)

**Go Deeper**：这一站没有对应的深度文章——它只是帮你把词汇分层，接下来每一站会陆续展开。

---

## 02 · LLM 为什么会说话？

**问题**：LLM 到底在做什么？它是在"查答案"吗？

**一句话答案**：不是查答案，是在读完你给的所有文字之后，一个 token 一个 token 地预测接下来最可能出现什么（token 可以粗略理解成模型处理文字时用的"小块"，不一定等于一个完整的词——下面马上会展开）。

**最简单的解释**：
```
你的文字
  ↓ 切成
Token（最小单位）
  ↓ 装进
Context（这次能看到的所有信息）
  ↓ 送进
Transformer（模型的核心结构）
  ↓ 算出
每个候选词的概率
  ↓ 选一个
下一个 Token
  ↓ 重复
生成完整的回答
```

这个过程叫 **Inference（推理）**，跟 **Training（训练）** 是两件完全不同的事——训练是"模型怎么学会这套本领"（提前做好、很贵、很慢），推理是"模型现在怎么用这套本领回答你"（每次对话都在发生、相对快）。你平时跟 AI 聊天，看到的都是推理。

**你真正需要记住的 3 件事**：
1. LLM 不是查数据库，是根据上下文"预测"下一个词，一个词一个词生成
2. Training（训练模型）和 Inference（用模型生成回答）是两件不同的事
3. Context（上下文）指模型这一次能"看到"的所有信息，是有限的、可以用完的

**常见误解**：「AI 记得我们所有的聊天记录」——不完全对。默认情况下，AI 只能看到当前对话放进 Context 里的内容，不是无限记忆，这个话题第 5 站会展开。

**Related concepts**：[Token](glossary.md#ai-基础) · [Context](glossary.md#agent-相关) · [Transformer](glossary.md#ai-基础) · [Inference](glossary.md#ai-基础)

**Go Deeper**：[Inference 推理系统完全指南](docs/ai-core/inference-system-guide.md) · [Transformer 架构完全指南](docs/ai-core/transformer-architecture.md)

---

## 03 · 从 Chatbot 到 Agent

**问题**：为什么 2023 年大家主要在聊 Chatbot，现在越来越多人在聊 Agent？

**一句话答案**：Chatbot 只会"回答"，Agent 会自己"做事"——变化不只是 AI 更聪明了，而是"下一步做什么"的决定权开始部分交给 AI。

**最简单的解释**：
```
Chatbot 的循环：
用户问 → 模型答 → 结束

Agent 的循环：
给一个目标
  ↓
模型决定下一步做什么
  ↓
调用工具（读文件、查数据、跑代码……）
  ↓
观察工具返回的结果
  ↓
更新自己的状态
  ↓
再决定下一步 —— 一直循环，直到目标达成
```

Chatbot 是"问了才答"的工具；Agent 是"给了目标就自己想办法干"的数字员工。这也是 Wiki 里反复出现的一个心智模型：**Tool → Worker**——AI 正在从"回答问题"走向"完成任务"。

**你真正需要记住的 3 件事**：
1. Chatbot：一问一答，用户全程主导；Agent：给目标，AI 自己规划并执行多步
2. Agent 的核心循环是"决定 → 行动 → 观察结果 → 再决定"，会反复很多轮，不是一次性的
3. Agent 之所以能"做事"，是因为它能调用外部工具（Tool），不只是生成文字

**常见误解**：「Agent 就是更聪明的 Chatbot」——不对，这不是聪明程度的差异，是工作模式的根本不同：一个只能"说"，一个能"做"。

**Related concepts**：[Agent](glossary.md#agent-相关) · [Tool](glossary.md#agent-相关)

**Go Deeper**：[Agent 系统架构](docs/ai-core/agent-architecture.md) · [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

---

## 04 · Workflow、Agent、Skill、Tool、MCP 到底什么关系？

**问题**：这几个词天天一起出现，到底谁是谁？

**一句话答案**：没有一个全行业统一的标准答案——不同公司、不同产品对这些词的定义并不完全一致，但可以建立一个够用的实用心智地图。

**最简单的解释**：这些词不是一条"越往后越高级"的直线关系，而是几个不同维度的东西组合在一起：

```
                    Model（模型）
                        │
              负责"想"：推理、决策
                        │
        ┌───────────────┼───────────────┐
        │               │               │
     Tools           Skills         Context
   （能调用的        （怎么做某件      （这次能看到
    具体能力）        事的说明书）      的信息）
        │               │
        └───────┬───────┘
                │
            Workflow
        （路径预先定义好多少）
                │
                ↕
              Agent
        （运行时自主决定多少）

MCP  = 连接外部工具/数据的统一协议标准（类似 USB 统一了设备接口）
Harness = 围绕模型搭起来的整套工作环境和运行脚手架
```

**关键不是"谁比谁高级"，是 Workflow 和 Agent 分别强调不同的东西**：Workflow 强调"这条路径有多少是预先设计好的"（先想清楚步骤 1、2、3，再执行）；Agent 强调"运行时 AI 自己决定下一步的空间有多大"（给个目标，走一步看一步）。很多实际系统是两者的混合——预先定好大框架（Workflow），框架里某些环节交给 Agent 自主决定。

Harness 也不只是"划边界"这么简单——它更像是**围绕模型搭起来的整套工作环境**：模型能看到什么（system instructions、context）、能用什么（tools、权限）、怎么获得反馈（execution loop、observability）、哪些地方绝对不能越界。"设边界"只是 Harness 要做的事情之一。

**这些概念在不同产品里的具体实现会有出入，遇到"到底哪个定义对"的问题时，记住：目前业界没有统一定义，看的是"在这个语境下大概指什么"，不用较真找唯一正确答案。**

**你真正需要记住的 3 件事**：
1. Tool（能力）、Skill（怎么用能力做一件具体的事）、Context（这次能看到什么）是模型决策时手边的几种"原料"，不是互相叠加升级的关系
2. Workflow 和 Agent 的核心区别是"路径预先定义了多少" vs "运行时自主决定了多少"，很多系统是两者的混合
3. MCP 是连接工具的协议标准；Harness 是模型运行的整个工作环境（不只是边界），两者不是一回事

**常见误解**：「Tool 升级成 Skill，Skill 升级成 Workflow，Workflow 再升级成 Agent」——不是，它们不是一条层层进阶的直线，而是分工不同、可以按需组合的几个维度。

**Related concepts**：[Skill](glossary.md#ai-应用与工具生态) · [MCP](glossary.md#ai-应用与工具生态) · [Harness](glossary.md#ai-应用与工具生态) · [Workflow](glossary.md#agent-相关)

**Go Deeper**：[Skills 和商业格局](docs/ai-application/skills-business-landscape.md) · [MCP 统一协议指南](docs/ai-application/mcp-protocol-guide.md) · [Harness 系统完全指南](docs/ai-application/harness-system.md) · [Workflow 工作流完全指南](docs/ai-application/workflow-design-guide.md)

---

## 05 · AI 为什么需要 Context、State 和 Memory？

**问题**：为什么 AI 会"忘事"？Context、State、Memory 是不是一回事？

**一句话答案**：不是一回事，它们可能有重叠，但回答的是三个不同的问题。

**最简单的解释**：
```
Context（上下文）
  这一次对话，模型能看到的所有信息——有大小限制，会"装满"

State（状态）
  系统这一刻处于什么情况——比如 Agent 现在执行到第几步、上一步结果是什么

Memory（记忆）
  跨越时间保存下来、以后还能被重新调用的信息——不局限于"这一次对话"
```

一个类比：Context 像你面前摊开的白板，装得下的东西有限；State 像你现在手里正在做的事进行到哪一步；Memory 像抽屉里存好的笔记，这次用不上也不会消失，下次要用还能翻出来。三者经常配合工作，但混着用会让"AI 为什么记得/不记得某件事"这种问题变得很难讨论清楚。

**你真正需要记住的 3 件事**：
1. Context 是"这一次能看到什么"，有容量上限，用完了旧信息可能被挤掉
2. State 是"系统现在处于什么情况"，State 不等于 Memory
3. Memory 是"跨对话、跨时间还能被找回的信息"，需要专门的机制去保存和检索

**常见误解**：「Context Window 越大，AI 就等于有了无限记忆」——不对，大 Context Window 只是让"这一次"能看到的信息变多，跟"AI 会不会在下次对话里记得你"是两件事，后者要靠 Memory 机制。

**Related concepts**：[Context](glossary.md#agent-相关) · [State](glossary.md#agent-相关) · [Memory](glossary.md#agent-相关)

**Go Deeper**：[Context Window 完全指南](docs/ai-core/context-window-guide.md) · [Agent 记忆系统完全指南](docs/ai-core/memory-system-guide.md)

---

## 06 · 为什么 Coding Agent 最先爆发？

**问题**：这么多领域，为什么"写代码"是 Agent 第一个真正做起来的场景？

**一句话答案**：不是巧合，是代码这个领域刚好同时满足了几个 Agent 最需要的条件。

**最简单的解释**：三个关键因素——

- **可验证（Verifiability）**：代码能跑、能测试、能编译，"对不对"可以自动判断，不用每次都靠人眼判断
- **工具链天然数字化（Tool-rich environment）**：终端、编辑器、Git、测试框架全是数字原生的，Agent 不需要"翻译"就能直接操作
- **失败可逆、成本低**：写错了 `git revert`，改坏了测试会告诉你，试错代价很小

这几条合在一起，让 Agent 可以形成"规划 → 写代码 → 运行 → 看到错误 → 修改 → 再运行"的完整自主闭环，不需要每一步都问人。其他领域（医疗、法律、创意）往往在某一条上做不到——比如医疗错误不可逆、创意好坏很主观——所以进展会慢一些。

**你真正需要记住的 3 件事**：
1. Coding Agent 先爆发，核心原因是代码任务"容易验证对错"，不是因为编程本身更简单
2. 完整的 Agent 可行性评估看六个维度（可验证、工具链标准化、失败可逆、反馈密集、任务可分解、训练数据充足），代码领域几乎满分
3. 这套标准可以用来判断"AI 什么时候能在别的领域也做到这么好"

**常见误解**：「Coding Agent 强只是因为代码训练数据多」——数据量是原因之一，但不是全部；即使数据一样多，如果代码任务不能自动验证对错，Agent 也很难形成有效的自主闭环。

**Related concepts**：[Agent](glossary.md#agent-相关) · [MoE](glossary.md#ai-基础)

**Go Deeper**：[Coding Agent 与 Agent 基础设施的操作系统化](docs/career-impact/agent-infrastructure-os.md)

---

## 07 · AI 真正改变的是什么？

到这里，技术层面的地图已经搭完了。最后一站不讲技术，讲这个 Wiki 里最重要的一件事：**学 AI，最有价值的不是记住越来越多术语，而是不断升级自己理解这个世界的方式。**

这是这个 Wiki 作者自己走过的几个认知转折，每一条都是真实发生过的"原来以为 X，后来发现是 Y"：

- **Model → System**：AI 公司之间比的不再是谁的模型更聪明，而是谁的系统架构、工作流、生态更完整
- **Chatbot → Agent**：AI 从"回答问题"走向"完成任务"——"下一步做什么"的决定权开始部分交给 AI
- **Capability → Trust**：模型能力商品化之后，真正的护城河变成"谁最值得把工作交给它"
- **Execution → Judgment**：AI 拿走了"会执行"，真正稀缺的变成了"懂判断"

完整的转折时间线在 [心智模型变迁史](mental-models.md) 里，每条都链接回完整的论证文章。

**你现在有了这张地图。接下来，自由探索就好。**

推荐去处：
- 想系统学技术基础 → [AI Core](docs/ai-core/index.md)
- 想看行业里发生了什么、怎么应用 → [AI 应用](docs/ai-application/index.md)
- 想看这对职业和个人意味着什么 → [职业与影响](docs/career-impact/index.md)
- 想看作者最近又学了什么 → [查看完整更新日志](CHANGELOG.md)
- 忘了某个词是什么意思 → [术语表](glossary.md)

---

**最后更新**: August 7, 2026
