# Agent Intelligence 三层框架：Model / Memory / Delegation

**核心洞察**: Agent 变强，越来越靠"怎么组织、委托、管理智能"，而不只是"模型本身多聪明"——这跟一家公司怎么用人、怎么分工是同一套逻辑。一个 Agent 系统的"聪明程度"，说到底是**同一个判断引擎（Model Intelligence）在不同任务上判断得准不准**，Memory 和 Delegation 只是它被用在"时间轴"和"空间轴"上的两种应用。

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [Tool](../../glossary.md#tool) · [Context](../../glossary.md#context) · [Memory](../../glossary.md#memory)

**学习来源**：
- OpenAI《The builder's guide to GPT-5.6》
- Google《Introducing Gemini 3.7 Flash》

📖 **完整学习对话记录**：[Agent Intelligence](../conversations/agent-intelligence.md)

> ⚠️ 关于 retained reasoning 在 API 层面的具体实现，本文是根据两篇公开博客的**架构描述重建（Reconstructed Trace）**，不是 OpenAI 后台的实测日志。刻意标注出来，避免把"合理推断"当成"确证事实"。

> 🔭 什么时候看这篇：看智能由哪三层构成（Model / Memory / Delegation）；看执行流程去 [Agent 系统架构](agent-architecture.md)，看可靠性杠杆去 [Harness > Model](../ai-application/harness-architecture-patterns.md)。

---

## 目录

1. [行业趋势：性价比前沿正在取代单点分数](#行业趋势性价比前沿正在取代单点分数)
2. [重建税：为什么模型不变，分数能差 3 倍](#重建税为什么模型不变分数能差-3-倍)
3. [retained reasoning 不是 memory](#retained-reasoning-不是-memory)
4. [Programmatic Tool Calling：把确定性工作移出 context](#programmatic-tool-calling把确定性工作移出-context)
5. [三层框架：Model / Memory / Delegation Intelligence](#三层框架model--memory--delegation-intelligence)
6. [心智模型：把 Agent 想象成一家小公司](#心智模型把-agent-想象成一家小公司)
7. [落地：cascading/routing 与"一个 Agent 跑五六个模型"](#落地cascadingrouting-与一个-agent-跑五六个模型)
8. [原来我以为 / 现在我认为](#原来我以为--现在我认为)
9. [和以前哪些知识连起来了](#和以前哪些知识连起来了)
10. [仍然没弄懂的问题](#仍然没弄懂的问题)

---

## 行业趋势：性价比前沿正在取代单点分数

两篇发布博客（GPT-5.6 / Gemini 3.7 Flash）指向同一个趋势：**过去做长任务必须用最贵的旗舰模型，现在不用了。**

几个例子：

| 场景 | 对比 | 结论 |
|------|------|------|
| BrowseComp | 5.5 跑 84.36 分花 $33.27；5.6 Luna 跑 84.04 分只花 **$1.33** | 分数几乎一样，成本差 **25 倍** |
| 浏览器任务（某创业公司） | Luna 78% 完成率要 $14；当时 SOTA 80% 要 $235 | 差 2 个百分点，成本差一个数量级 |
| Gemini 3.7 Flash vs 3.6 | FrontierCode 34.4%→43.6%、AutomationBench 17.0%→30.4%，**价格只有一半** | 更强 + 更便宜同时发生 |

**为什么"单独一个分数"越来越不够用**：分数从来是一个多变量函数的输出——

```
分数 = f(模型权重 × harness 配置 × reasoning effort × 工具可用性 × 成本)
```

过去大家默认把后面几个变量固定或忽略，只报最后那个标量。但现在这些变量本身开始剧烈波动、还成了厂商主推的卖点（"低推理成本也能跑赢"）。同一个模型 GPT-5.6 Sol，standard harness 下 ARC-AGI-3 只有 13.3%，开了 retained reasoning + compaction 后是 38.3%——**同一个模型，分数差近 3 倍**。这时只报一个数字，等于把决策真正需要的维度压缩丢了。

真正在发生的转变：**单点 benchmark 分数正在被 price-performance frontier（性价比前沿曲线）取代**——不是"这模型多少分"，而是"在每个成本/延迟预算下，能拿到的最高分是多少"，一整条曲线，而不是一个点。

> 实战提醒：下次看到"某模型跑分 xx"，下意识多问一句——**在什么 harness、什么 reasoning effort、花了多少钱**的条件下测出来的？不知道这三个变量，这个分数基本是个没有单位的数字。

---

## 重建税：为什么模型不变，分数能差 3 倍

先看没有 retained reasoning 时，模型下一轮**能看到什么、看不到什么**：

- ✅ 看得到：最初用户的问题、每轮对话的**结果**、最近几轮的推理
- ❌ 看不到：**自己之前的推理过程**（那段内部的"思考草稿纸")

像 GPT-5.6、Claude 这类 reasoning 模型，在"想"的过程中会产生一大段内部推理 token（可以理解成真正的草稿纸）。默认情况下，**这段草稿纸在这一轮结束后就被系统丢弃了**——下一次 API 调用时，开发者的代码只把"最终答案文本"塞回去，草稿纸从没被送回来过。

所以模型每一轮都得先花 token 跟自己解释一遍"现在是什么情况、之前为什么这么做"——本质是在**重新推导已经推导过的东西**。这就是**重建税（reconstruction tax）**。

### 关键：这个损失会"复利"

草稿纸的比喻再往前推一步——不是丢一次草稿纸，而是**每做完一步就把草稿纸烧掉，只留答案，然后要求你从这个答案继续做下一步**：

- 第 1 步：还能大致猜回当时的思路，重建得八九不离十
- 第 5 步、第 10 步：每次重建都走样一点点——漏看一个约束条件，或对"当时为什么选这条路"的理解偏一点
- 第 20 步：这些小偏差不归零，会**累积、会漂移**，你实际在做的事可能已经悄悄偏离最初的计划，而自己完全没意识到

这就是为什么 **ARC-AGI-3**（需要在网格谜题里连续做很多步、每步都依赖前面状态）效果提升特别夸张（13.3%→38.3%）——它正是那种"必须精确维持同一套状态、一步都不能走样"的长链条任务。而 token 数暴跌 6 倍，是因为没了 retention，每轮都得重新论证一遍，这部分 token 是纯浪费；有了 retention，直接接着想就行。

**重建税对哪类任务影响最大**：不是每轮基本独立、互不依赖的任务（客服一问一答），而是那种**必须一直守住同一个复杂状态、步步累积推进**的任务（解谜、多步代码重构）。这条判断，和 [Agent 的单轴刻度问题](agent-single-axis-problem.md)里"探索纪律"的讨论是同一类：瓶颈不在模型"想得够不够深"，而在系统怎么组织它的工作。

---

## retained reasoning 不是 memory

一个容易混淆的框架性错误：把 retained reasoning 当成"记忆"。它跟你脑子里"长期记忆 / 临时记忆"那套（比如用 embedding 检索式的 [Memory 系统](memory-system-guide.md)）是**两个不同的机制**，而且简单粗暴得多。

- **retained reasoning = 不丢草稿纸**：API 把那段推理 token（原样或加密封装）作为一个对象返回，开发者原封不动塞回下一轮请求。模型下一轮看到的不是"别人转述的结论"，而是"自己上一轮真实的思考过程"，可以直接从那里接着想。**这不叫记忆，这叫没有中断。**
- **外部 memory（如 Mimo 的记忆文件）= 主动记笔记存起来**：外部化、可检索、持久化，为的是"跨天记住用户偏好"。目的和存储位置都和 retained reasoning 不一样。

### compaction：近期靠不丢，远期靠提炼

如果每轮草稿纸都原样保留、一轮轮往上叠，几十轮后 context 会爆——超预算、变贵，还会 **context rot**（太多陈旧细节稀释了真正有用的信息，和 [Lost in the Middle](context-window-guide.md#lost-in-the-middle) 是相关但不同的现象）。

这时系统做一次 **compaction（压缩）**：把早前的推理 + 对话历史提炼成更精简的状态摘要，扔掉逐字草稿纸，只留因果链条上真正重要的决定和事实。

> 准确说法：**近期靠"不丢弃"（retention），远期靠"提炼"（compaction）**——两个一起，才实现了"模型不必每一步重新想一遍过去发生了什么"。

---

## Programmatic Tool Calling：把确定性工作移出 context

**Programmatic Tool Calling（PTC）**：模型**自己写一段代码**（相当于临时生成一个小程序）去编排工具调用、过滤和聚合结果——这些"筛选、排序、聚合"之类的**确定性工作**在 context 之外由代码执行完成。

关键在于：**代码的执行过程和中间结果不进入模型的 context、不消耗 reasoning token**，模型只保留需要判断力的那部分。

这跟 [Agent 架构里的 tool selection 机制](agent-architecture.md#工具调用机制)是**同一个思路的另一种实现**——都是在回答"这一步我自己想，还是交给外面处理、拿结果回来用"。区别只是 PTC 把"交出去"的对象做成了一段确定性代码，把体力活彻底挡在模型注意力之外。

---

## 三层框架：Model / Memory / Delegation Intelligence

一个很自然的四分法直觉是：Model / Memory / **Tool** / **Orchestration** Intelligence。但 Tool 和 Orchestration 其实不是并列的两类——它们**底层用的是同一个决策原语**：

> "这件事我自己用权重直接想，还是交出去、拿结果回来用？"

两者的区别不在决策机制本身，而在**委托对象的性质和粒度**：

- **Tool**：委托给一个确定性的、边界清楚的外部功能（搜索、计算器、代码解释器）——单步、单次、结果可预期
- **Orchestration**：委托给另一个**会思考的 agent**——而且往往不是委托单件事，而是先把一个模糊复杂的任务**拆解**成好几件，再决定谁做哪块、顺序还是并行、最后怎么把结果拼回去

所以 orchestration 不是一种独立的"新智能"，而是"要不要委托"这个决策**加了一层分解与调度的判断**在上面。于是四分法收敛成更干净的三层：

```
Model Intelligence（地基，不可再分）
   权重本身的判断力——当下 context 里能直接想明白、需要权衡、没有标准答案时的"直觉+推理"。
   不可委托，因为它就是"委托"这个动作最终要交给谁的那个"谁"。递归到底，总有一层得 model 自己扛。
        │
        ├─ 用在「时间轴」上 → Memory Intelligence
        │     什么该留、什么该压缩、什么该丢、什么时候该去检索。
        │     是资源管理智能，不是推理内容智能。判断动作本身还是 Model Intelligence 在做。
        │
        └─ 用在「空间轴」上 → Delegation Intelligence
              这件事的边界在哪、哪部分自己想、哪部分扔出去。往下再分两个粒度：
              · tool-level：单步委托给死板功能
              · agent-level / orchestration：先拆解任务，再多次委托给活的子 agent，最后综合
```

### 反直觉的一层：知道"什么时候不该委托"

Delegation Intelligence 里最容易被忽略的能力，是**知道什么时候不该拆**。

"六个 spec 同时扔给一个模型并行做"之所以成功，是因为这六件事**耦合度低、拆开互不干扰**；但如果任务本身高度纠缠（一个决定牵动另一个），硬拆成子 agent 并行，最后合并结果时反而要花**更多** Model Intelligence 去处理冲突、修补裂缝——这时"不拆、自己扛"才是更聪明的判断。

这一点和 [Agent 的单轴刻度问题](agent-single-axis-problem.md)是同一个母题：Tool 和 Orchestration**不是并列的两类，而是同一根"委托轴"上的两个刻度**——委托的复杂度和委托对象的"智能程度"不一样而已。又一次，"用一根轴描述的东西，拆开看是多个维度"。

**刨到最后**：这三层是同一个东西的三种应用场景，不是三个独立的智力模块。Model Intelligence 是唯一真正做判断的引擎；Memory 是它被用在"管理自己的时间维度"上；Delegation 是它被用在"管理自己的空间边界"上。架构上的三分法是给工程师看的（好设计系统），不是给智能本身看的（智能没分那么细）。

---

## 心智模型：把 Agent 想象成一家小公司

- **Model Intelligence** = 核心决策者的判断力（**不能外包**）
- **Memory Intelligence** = 档案管理员，决定什么留在桌面、什么归档、什么直接扔
- **Delegation Intelligence** = 管理者的用人智慧——知道什么活该交给工具（死板但便宜的员工）、什么活该拆给团队并行干、什么时候干脆自己上

而"这家公司多能干"这个分数，**脱离了"预算多少、配置怎样"就没有意义**。

这也呼应一个更大的判断：一个人本身的能力固然重要，但在 AI 时代，他**善不善用 AI**同样直接影响工作成果——这正是 Delegation Intelligence 在个人层面的投影。（延伸见 [Domain Expertise 与组织变革](../career-impact/domain-expertise-and-org-design.md)。）

---

## 落地：cascading/routing 与"一个 Agent 跑五六个模型"

**为什么 Agent 的 cost-performance 比聊天模型更重要**：聊天是"人问一句、模型答一句"，成本被人的思考速度限制，天然线性。Agent 场景里，一个用户请求背后模型可能自己跟自己对话几十上百轮，中间没人踩刹车；再叠上 multi-agent orchestration，调用次数指数级上去。所以**单次调用的价格从"背景参数"变成了决定产品能不能规模化跑起来的第一位设计变量**。

**95 分 $1 vs 97 分 $20，生产环境选谁**：没有固定答案，但有固定的问法——这 2 分差距在你的具体任务里值不值 20 倍的钱？拆两件事看：

1. **量级**：每天调一百万次，20 倍成本乘一百万是巨大差距；一年做几次的低频关键决策，20 倍单价可能无所谓
2. **错误后果**：2% 错误率如果只是摘要偶尔漏细节，可接受；如果是医疗诊断或资金转账，可能不可承受

但最成熟的答案是——**多数情况这根本不是单选题**。生产架构会用 **cascading/routing**：默认全走便宜模型，只有当便宜模型自己"没把握"（置信度低、复杂度触发某个阈值）时，才把这一小撮升级给贵模型。你花的不是"20 倍单价 × 全部调用"，而是"20 倍单价 × 那一小撮真正需要的调用"。**这正是 Delegation Intelligence 在系统架构层面的落地**：不是选一个模型，而是设计"什么情况该委托给谁"这套决策逻辑本身。

**一个 Agent 会不会同时跑五六个不同大小的模型**：会，而且已经在发生。大模型（如 Sol）当 orchestrator 做判断和拆解，小模型（Luna/Terra）干提取、检索这类重复体力活。用同一个最贵最强的模型处理所有粒度的工作，本身就是资源错配——就像不会让公司最资深的人去做数据录入。往后看，"一个 Agent"更像**一个由不同成本/能力层级模型组成的小型组织**，顶层 orchestrator 的核心能力恰恰是判断"这一步该找谁干"的**路由智能**——它判断得准不准，很可能成为衡量一个 agent 系统好坏的关键指标之一，重要性不亚于底层模型有多聪明。

---

## 原来我以为 / 现在我认为

**原来我以为**：Tool 调用和 Multi-agent orchestration 是两类不同的能力——一个是"要不要用工具"，一个是"要不要拆给子 agent"，是并列的两件事。

**现在我认为**：它们是**同一根决策轴上的不同粒度**——本质都是"这件事我自己想，还是委托出去、拿结果回来用"，区别只在委托对象是死板功能（tool）还是会思考的 agent（orchestration，多一层任务拆解）。往上收，Agent 的智能可以归成三层：Model / Memory / Delegation Intelligence，而后两者归根结底都是 Model Intelligence 在不同任务上的应用，不是独立的智力模块。

---

## 和以前哪些知识连起来了

- **和 [Agent 的单轴刻度问题](agent-single-axis-problem.md) 是同一母题的再次出现**：Tool vs Orchestration 不是并列两类，是"委托轴"上的两个刻度——又一次"看似一根轴，拆开是多个维度"。
- **和 [Agent 架构的 tool selection / 决策机制](agent-architecture.md#工具调用机制) 是同一条线的延伸**：Programmatic Tool Calling 是"把确定性工作移出 context"的另一种实现。
- **和 [Memory 系统](memory-system-guide.md) 划清了边界**：retained reasoning ≠ 外部 memory，一个是"不丢草稿纸"、一个是"主动记笔记"。
- **和 [Context Window 管理](context-window-guide.md) 对接**：compaction、context rot、prompt caching TTL 都是 context 这一层的资源管理。
- **和 [Domain Expertise 与组织变革](../career-impact/domain-expertise-and-org-design.md) 呼应**："善用 AI"是 Delegation Intelligence 在个人层面的投影，"公司管理"是它最好的类比。

---

## 仍然没弄懂的问题

- retained reasoning 在 API 层面具体是怎么"传回去"的——原始 token 原样返回，还是加密封装的黑盒对象？今天的解释是 Reconstructed Trace，没有实测细节。
- Delegation Intelligence 里"什么时候不该拆"的判断标准能不能更具体化（比如任务耦合度怎么量化）？
- cascading/routing 在实际工程里是怎么设计"升级触发阈值"的？

---

**最后更新**: August 16, 2026  
**相关**:
- [Agent 的"单轴刻度"问题](agent-single-axis-problem.md) —— Tool vs Orchestration 是"委托轴"上的两个刻度，同一个母题
- [Agent 系统架构](agent-architecture.md) —— tool selection / 决策机制的基础，PTC 是它的延伸
- [Agent 记忆系统完全指南](memory-system-guide.md) —— retained reasoning 与外部 memory 的边界
- [Context Window 完全指南](context-window-guide.md) —— compaction、context rot、prompt caching
- [Workflow 编排](workflow-orchestration.md) —— orchestration / Orchestrator-Worker 分工
- [Domain Expertise 与组织变革](../career-impact/domain-expertise-and-org-design.md) —— "善用 AI"与公司管理类比
- [心智模型变迁史：Tool/Orchestration → 委托轴](../../mental-models.md)
- 📖 [完整对话记录：Agent Intelligence](../conversations/agent-intelligence.md)
