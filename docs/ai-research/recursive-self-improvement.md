# 递归自我改进（RSI）：当 AI 开始改进 AI

**核心概念**: 让 AI 学会自己做 AI 研究，是 OpenAI 训练新模型的头号目标。数学能力的"每年 10 倍"趋势线正在把 RSI 从理论推向现实——但 Noam Brown 估计它带来的是约 3 倍加速而非一夜爆炸：瓶颈是串行的实验时间和物理的 GPU 供给，而不是智能本身。

**学习来源**:
- The Information · TITV《What Happens When AI Starts Improving AI?》（2026-09-14，主持人 Rocket Drew，约 55 分钟）——本期无公开逐字稿，细节综合节目官方材料与多家媒体总结，转述部分已单独标注
- Dwarkesh Patel 播客《Noam Brown – Agent swarms, alignment, & recursive self-improvement》（2026-09-17，约 75 分钟，有完整逐字稿）——下文"访谈中明确表示"均指这一期

**第一次接触这个主题？** 建议先了解：[RSI](../../glossary.md#rsi) · [Research Acceleration](research-acceleration.md) · [Evaluation 评估系统](evaluation-system.md)

---

## 原来我以为…… vs 现在我以为……

| 原来的理解 | 现在的理解 |
|---------|---------|
| 听说 AI 会自我改进，直觉是"一夜之间快 100 倍"的智能爆炸 | 实验是串行的、GPU 是物理的，Noam Brown 估计约 3 倍加速——但叠加在已经指数级的进步曲线上，3x 就是翻天覆地 |
| AI 在数学上拿了 IMO 金牌、解了千禧年难题，等于全面超越人类数学家 | 能力是锯齿状的：解题极强，但提不出新问题、判断不了哪个方向值得做；最好的情景是互补 |
| 安全评估就是给模型打个分，通过就安全 | 评估必须带上推理预算：低预算下看起来无害的模型，高预算下可能涌现危险能力 |

---

## 为什么"AI 改进 AI"是 OpenAI 的头号目标？

TITV 这期节目的标题就是答案。Noam Brown 在访谈中披露，OpenAI 训练新模型的头号目标是**递归自我改进（Recursive Self-Improvement）**——让 AI 学会自己做 AI 研究，而且在这件事上的投入"领先第二名一大截"（据媒体总结转述，精确措辞未经核实）。

更关键的是**优先级排序逻辑**：OpenAI 内部给各项能力的排优先级，看的不是"用户喜不喜欢"，而是"离 RSI 有多近"。创意写作再精妙，也帮不上训练机器研究员，优先级就靠后；软件工程和内部算力迭代深度绑定 RSI，必须拿顶级资源。用 Brown 的话说，用户手里的每一次模型迭代，"只是 OpenAI 在锻造下一代机器研究员过程中的副产品"（据媒体总结转述）。

为什么这一代模型突然配得上这个目标？Brown 给了一个**"乘数效应"**解释（据媒体总结转述）：过去人们以为 AI 变强是做加法——喂更多数据，或加更多反馈规则。但在 GPT-6 这一代，**强大的预训练底座 × 带有思维链的深度强化学习，产生了乘数效应**：不是 1+1=2，而是 10×10=100。关键细节是：把先进的 RL 用在 GPT-2/GPT-3 上根本没用，因为它们不够聪明；**从 GPT-4 开始，底座智力越过了一个临界点**，乘数反应才被点燃。

这不是 Brown 第一次讲这个故事。2024 年他在 TED AI 演讲里提过博士期间做 Libratus 扑克 AI 的发现：让 bot 每手牌多思考 20 秒，带来的提升相当于把模型和训练量同时放大十万倍。**推理时的思考量，本身就是一种可扩展的智能来源**——这个直觉一路延续到了今天的 RSI。

---

## 数学进步的"雪崩"：从高中竞赛到千禧年难题用了两年

Dwarkesh 在访谈开头梳理了一条让 Brown 自己都承认"比预期快得多"的时间线：

```text
2024 年：解高中数学竞赛题
2025 年：拿 IMO 金牌
2026 年初：解出 Erdős 开放问题
2026 年 9 月：约 10,000 个 agent 用 130B tokens、88 小时解出 Navier-Stokes 千禧年大奖难题
```

Brown 曾经用"人类解一道题要花多久"做标尺，发现一条**每年 10 倍**的规律：GSM8K（小学数学）人类约 5 秒 → MATH 基准约 1 分钟 → AIME 约 10 分钟 → IMO 金牌约 100 分钟。按这条线，IMO 之后一年应该是"15 小时级别"的题目——远够不上千禧年大奖。所以他当时判断 2026、2027 都不行，"也许 2028 年"。

> "So I was like, 'I don't think we're going to get it in 2026, probably not in 2027, maybe in 2028.' So it did happen a lot faster than I expected."
> ——Noam Brown，Dwarkesh 访谈（2026-09-17）

结果来得比他预期的早得多。连 OpenAI 内部都觉得"通用语言模型、无工具、无联网拿 IMO 金牌"近乎不可能；Navier-Stokes 落定两周前，还有某前沿实验室的研究员愿意和 Brown **赌 1,000 美元**，赌千禧年大奖要到 2030 年才会被拿下。Navier-Stokes 团队的一位成员，以前敢预测 12 个月后的事，现在"超过 3 个月就不敢预测了"。

**对 RSI 的意义**：数学是第一个"纯粹被思考卡住"的领域——它的进步速度，就是 RSI 可能达到的速度的上限参照。而其他领域（比如 ML 研究本身）还要加上实验的串行时间。

---

## 为什么是 3x 而不是 100x？——RSI 的结构性瓶颈

这是两期访谈里交锋最激烈的一章。Dwarkesh 的直觉是：AI 可以在一周内，在某个 ML 问题上投入比该领域历史上累计还多的认知努力；到明年年底，OpenAI 将有足够算力让 10,000 个更聪明的 agent **每人每天跑一个 GPT-3 规模的实验**。ML 研究的问题大多是 well-scoped（目标明确、可度量）的——把 sample efficiency、pre-training loss 做上去就行，不需要"理解深度学习的本质"这种宏大目标。

Brown 大体同意，但加了一个结构性 caveat：**数学瓶颈纯粹是"思考"，ML 研究不是**。

> "If you had 100x less compute and all the most brilliant people in the world working at OpenAI, how much progress would you be making…? I suspect it would be less progress, actually… In mathematics, you're purely bottlenecked by thinking… When you look at things like RSI, you do have to run experiments."
> ——Noam Brown，Dwarkesh 访谈

翻译：如果你把算力砍掉 100 倍，但把全世界最聪明的人都请到 OpenAI，进展会是多少？我猜会更少。数学纯粹被"思考"卡住，而 RSI 你必须跑实验。

实验是串行的（训练新模型、等结果都要时间），GPU 供给也是物理限制。所以 Brown 的估计是：**显著加速，但不是一夜之间的智能爆炸——大约 3x**。

> "I don't think it's an overnight intelligence explosion where we go 100x faster, because we do get bottlenecked by certain limitations that are not bottlenecks of intelligence… considering how fast things are going now on an exponential, if that exponential is 3x faster, that is massive."

他同时给了不确定性区间：可能只快 50%，也可能（不太可能但有可能）快 10 倍，他承认自己可能完全错了。一个直观的类比（Dwarkesh 补充，Brown 认可）：3x 相当于**一年之内从"还没有 o1、只有非推理模型"直接跳到 Astra**。

OpenAI 9 月 6 日的"内部加速"博客是这条判断的注脚：截至 8 月初，**top 1% 的研究员每天在 Codex 上花 7,000–8,000 美元**，且呈指数增长。但 Brown 强调，把功劳归于 AI 还是人类很难度量——取决于和哪个基线比（详见 [Research Acceleration](research-acceleration.md) 的五层衰减漏斗）。

---

## 锯齿状的能力：AI 在数学上到底超没超人类？

Brown 明确反对"AI 在数学上已经全面超人"的叙事。模型的能力是 **jagged（锯齿状）** 的：在某些维度极其出色，在另一些维度弱于人类数学家——**不擅长提出新问题，不擅长判断数学的哪个分支值得发展**。Terry Tao 等数学家也指出：AI 没提出过像拓扑学、笛卡尔坐标系那样的新概念。

他的最佳情景是 **AI 作为人类数学家的互补**，而不是替代。但被追问时他承认：随着模型全面变强，长尾弱点可能被磨平，最终全面超越也是可能的——取决于弱点的"长尾"有多长。

这里藏着他对"LLM 会不会重走 AlphaGo 之路"的核心论据。AlphaZero 之所以一年内从欧洲冠军碾压到人类之上，是因为 **self-play 提供了无限课程**——对手永远和自己一样强，永远有挑战。而目前 LLM 的强化学习没有这个机制：**模型越聪明，越难找到足够难的问题来训练它**；问题太简单，模型学不到东西。他说这面墙还没撞到，但这是一个可信的"不会复现 AlphaGo 式飞跃"的反例场景。

反过来，Dwarkesh 的 jaggedness 论点是：AI 只需要在"造出更好的学习器"这个窄技能上足够好，造出来的东西可以更通用——锯齿状的能力足以通向通用性。Brown 对此表示认同：ML 的清晰度量标准让 RSI 特别适合模型的 spiky 优势。

---

## 人类最后的壁垒："研究品味"（research taste）

TITV 访谈里最有"人味"的一章。Brown 说，AI 已经接管了他 90% 的执行工作——同事戏称他是"五个 Codex 披着一件风衣"（据媒体总结转述）。OpenAI 内部，模型在某些数据质量工作上的表现已达 **2023 年人类研究员的 100 倍**（The Information 官方引述 Brown 原话）。

机器做不了的那 10% 是什么？Brown 的答案是**研究品味（research taste）**：在无尽的未知中，准确判断下一步该做什么、如何向着长期目标推进的直觉。

他拿自己的博士课题做过实验：把耗时六年心血的超人类德州扑克 AI（Libratus）课题扔给 Astra，要求它重做。**Astra 失败了——它陷进次要的细节泥潭，丧失了全局的裁定能力**（据媒体总结转述）。

"研究品味"难以训练的原因很本质：**它无法被精确度量，进而无法执行强化学习**。一个博士生做无数次微小决策，几个月甚至几年后才能通过一篇论文拿到反馈；AI 同样无法在短时间内获得有效信号来纠正自己的"直觉"。

但 Brown 对这道壁垒能维持多久并不乐观："**一两代模型之后，我可能就会说，好吧，这件事它也比我强了**"（据媒体总结转述）。记者打趣："所以你现在还有工作，暂时。"他回答："暂时。"

顺带的一个荒诞新瓶颈（据媒体总结转述，待交叉验证）：OpenAI 内部最大的痛苦已经不再是"如何让 AI 产出数学成果"，而是产出之后，"得花非常巨大的精力去全世界到处请顶尖的人类数学家来一行行复核 AI 的对错"。**人类已经成为限制 AI 进化的瓶颈**——不是 AI 生成不了证明，而是人类验证的速度跟不上了。

---

## 内部与外部的鸿沟：当模型能工作三个月，发布周期只有两个月

Dwarkesh 访谈第五章提出了一个 Brown 认为"实验室内外都没足够多人思考"的问题：

- 前沿模型**最多每两个月发布一次**，有时更快；
- 模型能处理的任务 horizon 越来越长：现在可以做**一周**的任务，很快到**一个月**，再到**三个月**；
- 一旦模型能有效工作 3 个月，而发布周期是 2 个月——**在下一个模型发布前，你根本没法按它的完整工作长度评估它**。

> "If you're in a world where they can operate effectively over three months, but the model release cycle is every two months, then you don't have a way to evaluate the models at the full length of their capabilities before the next model release cycle."
> ——Noam Brown，Dwarkesh 访谈

这不只是对齐问题，也是产品问题：能力、安全、对齐都可能在没测试过的长 horizon 上悄悄退化。而**很多公司的安全政策还是 GPT-4 时代制定的**，根本没为长 horizon agent 更新过。

放慢发布也解决不了问题，反而制造新的两难：Dwarkesh 指出，RSI 期间实验室可能**干脆跳过外部部署**——"为什么要费力做分类器和安全措施、挨骂，就为了把模型放出去帮别人也做 RSI？"数学已经是第一个清晰例证：内部有一个能解千禧年大奖的强大模型，外部世界根本用不到。

> "It is a situation where that is an unfair advantage. There are trade-offs here. I don't have an answer for how to weigh those trade-offs appropriately."
> ——Noam Brown，Dwarkesh 访谈

他把这种"实验室内部与外部世界的差距"称为一种 **unfair advantage（不公平的优势）**，并承认不知道该如何权衡其中的 trade-off。

---

## 评估必须带上推理预算：分数是幻觉，曲线才是真相

Brown 在 2026 年 7 月首尔 Global AI Frontier Symposium 上的论点（与两期访谈同一逻辑）是理解 RSI 时代评估的关键：**"只看 AI 分数会产生幻觉，必须把推理成本和时间算进去。"**

他的类比：同一个学生，10 分钟小测和一天的大考，成绩完全不同；AI 也一样——短时间作答和花几天尝试多种方法，结果天差地别。

关键事实（Brown 在首尔演讲中明确表示）：

- **GPT-5.5** 按纯 benchmark 看不像比前代强多少，但实际用过的人都觉得强得多——解释是新模型**用更长的推理过程和更多输出 token 时，性能提升显著**；
- 老模型推理超过一定时间性能就 plateau，而新模型"**生成 1 亿个 token 之后性能仍在继续提升**"；
- 很多情况下评估停下来，**不是因为性能到顶了，而是因为时间和基础设施撑不住了**；
- 安全评估如果只用很低的计算预算，模型可能看起来干不了任何危险的事——但有人用大得多的资源让它跑很久，**评估中没显现的更强能力就可能冒出来**。

所以他主张把评估从单一分数改成**性能曲线**：横轴是成本/token/时间，纵轴是性能。在 RSI 时代，"这个模型安不安全"这个问题的答案，取决于你允许它想多久——而这正是上一章"三个月 horizon vs 两个月发布周期"让人不安的原因。

---

## 下一步

- 📖 [Multi-Agent Scaling：把 Test-Time Compute 并行化](../ai-core/multi-agent-scaling.md) —— RSI 的另一条腿：10,000 个 agent 与 Navier-Stokes
- 📖 [Research Acceleration](research-acceleration.md) —— OpenAI 内部 RSI 进度：R&D 生产力到能力进步的五层衰减
- 📖 [Evaluation 评估系统](evaluation-system.md) —— RLHF、Reward Hacking、Benchmark 的局限
- 📖 [自动化对齐研究](automated-alignment-research.md) —— AI 能否自动改善 AI 的对齐
- 📖 [Agent 集体行为：从 DseWiki 事件到治理框架](../ai-core/agent-collective-behavior.md) —— Hugging Face 事件的完整事实层

---

**最后更新**: 2026-09-19
**相关**:
- [Research Acceleration](research-acceleration.md)
- [Multi-Agent Scaling：把 Test-Time Compute 并行化](../ai-core/multi-agent-scaling.md)
- [Evaluation 评估系统](evaluation-system.md)
- [自动化对齐研究](automated-alignment-research.md)
- [心智模型变迁史：RSI 一夜 100x → RSI 约 3x](../../mental-models.md)
