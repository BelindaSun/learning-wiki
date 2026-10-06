# Personal Agents — From Chatbots to an Agent Economy

**核心洞察**: Chatbot 回答问题，[Personal Agent](../../glossary.md#personal-agent) 理解目标、记住背景、使用工具、持续替人把事情往前推进。AI 正从 Conversation Layer 进入 Action Layer——从争夺 Attention，走向理解 Intent，再走向替人 Action。真正困难的问题不是 Maximum Autonomy，而是 [Calibrated Autonomy](../../mental-models.md)：知道什么时候应该替我行动，什么时候应该停下来问我。

**学习来源**: Meta Muse Personal Agent (Sep 2026) · Zuckerberg × Alex Heath 访谈 (Sep 2026) · 亲自测试 Muse
📖 **完整学习对话记录**：本文即完整学习记录，包含测试过程与分析
**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [从"最聪明"到"最可信"](capability-to-trust.md) · [Trustworthiness](capability-to-trust.md) · [Agent 系统架构](../ai-core/agent-architecture.md)

---

## 目录

- [一、从 Chatbot 到 Personal Agent](#一从-chatbot-到-personal-agent)
- [二、第一次使用 Muse：Social Presence](#二第一次使用-musesocial-presence)
- [三、Personalization 不是"记住我喜欢什么"](#三personalization-不是记住我喜欢什么)
- [四、谁来做决定？Decision Rights](#四谁来做决定decision-rights)
- [五、Calibrated Autonomy](#五calibrated-autonomy)
- [六、约束改变，最优答案也应该改变](#六约束改变最优答案也应该改变)
- [七、Zuckerberg 的更大判断：Invention > Automation](#七zuckerberg-的更大判断invention--automation)
- [八、Personal Agent 真正改变的是"选择成本"](#八personal-agent-真正改变的是选择成本)
- [九、从 Attention Economy 到 Intent Economy](#九从-attention-economy-到-intent-economy)
- [十、Agent Economy](#十agent-economy)
- [十一、Capability 越强，Trust 越重要](#十一capability-越强trust-越重要)
- [十二、Calibrated Trust](#十二calibrated-trust)
- [十三、当 Agent 获得"眼睛"](#十三当-agent-获得眼睛)
- [十四、下一代 Computing Layer？](#十四下一代-computing-layer)
- [十五、最后一个心智模型](#十五最后一个心智模型)
- [十六、Persistent Agency：Personal Agent 的核心资产是 User State](#十六persistent-agencypersonal-agent-的核心资产是-user-state)
- [十七、Agent 时代的入口之争：谁会成为 Ultimate Aggregator？](#十七agent-时代的入口之争谁会成为-ultimate-aggregator)

---

## 一、从 Chatbot 到 Personal Agent

ChatGPT 出现以后，我们已经非常习惯一种 AI 交互：

```
User → Prompt → AI → Answer
```

即使今天最强的模型能够写代码、分析文件、生成图片，本质上很多交互仍然围绕一次 conversation 展开。

[Personal Agent](../../glossary.md#personal-agent) 改变了这个基本单位。它的基本单位不再只是 prompt，而逐渐变成 **goal**：

```
Goal → Understand Context → Plan → Use Tools → Act → Monitor → Update → Ask for Approval when Necessary
```

2026 年 9 月，Meta 发布了 Muse Personal Agent。Meta 对它的定位非常直接：Muse 不只是回答问题，而是实际替用户完成工作。它运行在一个专门的 [Muse Secure VM](../../glossary.md#personal-agent) 中，可以使用浏览器和连接的服务完成多步骤任务；用户关闭 App 后，它仍然可以继续工作，需要决定或授权时再回来找用户。

这意味着 AI 正在从 **Conversation Layer** 进入 **Action Layer**。

---

## 二、第一次使用 Muse：Social Presence

第一次打开 Muse，我没有先给它复杂任务。我先给它起了个名字：**小缪**。

它马上修改了自己的名字和头像。聊天过程中，它还会根据上下文使用 reaction。这些事情几乎没有增加任何"模型能力"，但体验发生了明显变化——它不像一个等待 prompt 的工具，而开始产生一种很微妙的 **Social Presence**。

这让我意识到 Personal Agent 的第一层甚至不是 Action，而是 **Persona**——名字、头像、语气、reaction、什么时候回答、什么时候保持安静……这些看似很小的设计，决定了 AI 给人的感觉究竟是 software 还是 someone who is there。

Personal Agent 的第一条公式：

```
Intelligence + Presence
```

能力让它有用。Presence 让人愿意与它建立持续关系。

---

## 三、Personalization 不是"记住我喜欢什么"

我给 Muse 的第一个真正任务是：帮我选一台最适合我的 MacBook，只推荐一台，先不要购买。

我只告诉它：主要用于 coding / development，预算人民币 15,000 元以上。Muse 很快推荐了 14-inch MacBook Pro——一个非常合理的"程序员电脑"答案。

但问题恰恰在这里。它回答的是：*什么 MacBook 适合一个预算充足的 developer？* 而不是：*什么 MacBook 最适合我？*

于是我问它：*你确定这是最适合我的吗？你觉得还有什么关于我的信息，是你应该先知道但还没有问的？*

它重新检查自己的推理后发现缺少关键变量：我已经有一台 Mac mini M4；重任务可以留给 Mac mini；笔记本主要是为了移动方便；并不是职业开发者。推荐立即改变：**MacBook Pro → MacBook Air**。

这件小事让我理解了 [Contextual Personalization](#三personalization-不是记住我喜欢什么) 中一个很重要的区别：

错误的 Personalization：*Belinda 喜欢 MacBook Air。*

真正有价值的 Personalization：*在 Belinda 已经拥有 Mac mini、重任务可以留在桌面端，而新电脑主要解决移动需求的条件下，MacBook Air 比 MacBook Pro 更适合她。*

值得保存的不是 Preference，而是 **Preference + Context + Constraints + Why**。

---

## 四、谁来做决定？Decision Rights

第二个测试：三名成年人从旧金山湾区去夏威夷 7-8 天。我给了简单的偏好（喜欢海边散步、吃饭、逛街，不喜欢爬山和极限运动）。

Muse 选择了日期、航班、酒店、房型、交通方式、活动和预算，甚至已经非常接近真正预订。但我发现一个问题：**它替我决定了只去一个岛。**

它的理由充分——7 天双岛需要换酒店、坐岛际航班、损失度假时间。但真正的问题不是这个决定对不对，而是：**这个决定应该由谁做？**

一个岛还是两个岛，会明显改变整个旅行体验。这是一个 **high-impact + preference-sensitive decision**，Muse 却把它当成了一个可以自己优化的变量。

我问它：*有没有什么重要选择，是你替我做了，但其实应该先问我的？*

它重新检查了一遍决策，但仍然没有主动发现"一个岛还是两个岛"。当我明确指出后，它承认这应该 surface 给用户。但更让我喜欢的是：**它没有为了讨好我而立即改变答案**，仍然坚持 7 天 → 一个岛更适合，并给出了完整理由。

这揭示了 Personal Agent 一个非常深的问题：**Decision Rights**——AI 应该替我决定什么？什么必须让我决定？

---

## 五、Calibrated Autonomy

一个 Agent 如果每一步都问"可以吗？下一步呢？"——它很安全，但几乎失去了 Agent 的意义，用户重新变成项目经理。反过来，如果 Agent 什么都替用户决定——它虽然高效，却可能越过真正重要的偏好和边界。

因此优秀 Personal Agent 的目标不应该是 Maximum Autonomy，而应该是 **[Calibrated Autonomy](../../mental-models.md)**：

| 条件 | 谁决定 |
|---|---|
| 低影响 + 容易恢复 + 偏好明确 | Agent 可以自主决定 |
| 高影响 + 难恢复 + 强偏好相关 | 应该让用户决定 |

真正好的 Agent 不是替我做所有决定，而是：**替我消灭不值得我花注意力的决定。**

---

## 六、约束改变，最优答案也应该改变

后来我改变了一个条件：如果不是 7 天，而是两周呢？

Muse 几乎立即改变方案：7 天 → Oahu 变成 14 天 → Oahu + Maui。它甚至总结了一句：*7 天双岛是赶路，14 天双岛才是度假。*

这个小实验比"它推荐哪个岛"本身更重要。它证明真正的 personalization 不应该是"AI 知道我喜欢 Maui"，而应该是"AI 知道在什么条件下 Maui 适合我"。

成熟的 Personal Agent 需要的不是简单的 Preference Memory，而是 **Contextual Decision Memory**：

```
Preference × Context × Constraints × Reasoning → Decision
```

条件改变，Decision 也应该改变。

---

## 七、Zuckerberg 的更大判断：Invention > Automation

Muse 发布当天，Meta CEO Mark Zuckerberg 接受 Alex Heath 采访。其中一个特别重要的判断是：

> AI 的主要价值不应该只是 Automation，而应该是 Invention。

- **Automation**：把今天人类已经会做的事情交给 AI。
- **Invention**：让人类借助 AI 创造以前根本不存在的东西。

他把自己的 AI philosophy 与一个更大的判断联系起来：技术进步最终应该增强 individual agency。强大的 AI 不应该只属于少数实验室、大企业或技术高手。普通人也应该拥有自己的 AI。

他的目标是：*给世界上的每个人一个非常有能力的 personal agent，理解他们的目标，并且能够 24/7 替他们工作。*

这也是为什么 Meta 试图把 Agent 变成 **ordinary consumer software**，而不假设几十亿人都会购买高性能电脑、配置环境、安装工具。

---

## 八、Personal Agent 真正改变的是"选择成本"

第一次使用 Muse 几个小时以后，我发现自己最喜欢它的地方并不是它能做我不会做的事情。买 MacBook、订夏威夷酒店，我当然都可以自己查。问题是：**我不想比较那么多东西。**

几十个航班、几十家酒店、不同房型、不同 cancellation policy、不同价格、不同地点——然后还要回答：哪个最好？

Personal Agent 解决的可能是一个长期被低估的成本：**[Decision Cost](#八personal-agent-真正改变的是选择成本)**。现代互联网给了我们几乎无限的 choice，但 choice 本身越来越成为负担。

因此 Personal Agent 最重要的价值之一可能不是"Do what I cannot do"，而是"**Take care of what I don't want to spend attention on**"。

---

## 九、从 Attention Economy 到 Intent Economy

传统互联网平台拥有一种非常重要的资源：Attention。Facebook、Instagram、YouTube、TikTok 都观察你看什么、点击什么、停留多久，然后推测你可能想要什么。

```
Attention → Infer Intent → Advertising
```

但 Personal Agent 得到的是完全不同的信息。用户会直接说：*我要年底买一台 MacBook；我想带三个人去夏威夷；帮我找更便宜的价格。* 平台不再需要完全依赖行为数据去猜 Intent——用户已经把 Intent 直接交给 Agent。

```
Personal Context → Intent → Decision → Action → Transaction
```

---

## 十、Agent Economy

Zuckerberg 在谈到 Muse 的长期商业模式时，一个很重要的思想是：Personal Agent 如果足够有用，应该能够替用户 make money 或 save money——因此它最终可能在某种意义上 **earn its own keep**。

这意味着 Personal Agent 的商业模式未必只是 $20/month subscription。如果 Agent 开始参与真实经济活动（购物、旅行、local services、commerce、transactions），平台也可能从这些经济活动中获得一部分价值。甚至支付这笔钱的未必是用户，也可能是与用户交易的 business。

[Agent Economy](#十agent-economy) 的公式：

```
Personal Context → Intent → Agent Action → Economic Activity → Monetization
```

这也是 Meta 巨额 AI CapEx 最值得观察的一条潜在回报路径——Meta 已经拥有巨大的 consumer distribution、business ecosystem 和广告商业基础设施。如果 Personal Agent 成为人与互联网之间新的 action layer，它可能进入非常接近交易发生的位置。路径开始变得可以看见了，但目前远远没有被证明。

---

## 十一、Capability 越强，Trust 越重要

[Agent Economy](#十agent-economy) 有一个无法绕开的前提：**Trust**。

一个 chatbot 答错问题，用户可能得到一个错误答案。一个 Personal Agent 出错——它可能真的做错事情。因为它能够访问账户、发送邮件、填写表格、购买商品、预订旅行、长期在后台运行。

```
Agent Capability ↑ → Potential Impact ↑ → Required Trustworthiness ↑
```

这与 [Trust Framework](capability-to-trust.md) 完全吻合：

```
Actual Trustworthiness = Task Capability × Governance Quality
```

Governance 至少包括：Predictable、Explainable、Auditable、Controllable、Recoverable。

Meta 为 Muse 设计了独立的 [Muse Secure VM](../../glossary.md#personal-agent)，把 Agent 和用户相关数据放在专门环境中；系统包含针对 Agent 行为的安全机制，并在敏感操作需要用户决定时重新请求授权。Meta 也明确承认 Personal Agent 带来了与传统 chatbot 不同的新攻击面。

未来 Agent 的竞争不会只是：谁的 benchmark 更高？还会是：**谁更值得被授权？**

---

## 十二、Calibrated Trust

如果用户完全不信任 Agent：它再强也没有用——用户不会连接邮箱，不会连接支付，不会允许它采取行动。但如果用户过度信任 Agent：风险同样很大。

因此理想状态不是 Trust as much as possible，而是 **Calibrated Trust**——我对 AI 的信任程度，应该与它真实的能力和治理水平相匹配。

这与 [Scaling Paradox](scaling-paradox.md) 中 Calibrated Trust 的框架完全一致：

- 低风险、容易恢复的事情：可以给予更多 autonomy。
- 高风险、不可逆的事情：需要更强验证和 human approval。

Personal Agent 真正的产品设计问题，与 AI Trust 的问题其实是同一个问题：**How much autonomy has the system actually earned?**

---

## 十三、当 Agent 获得"眼睛"

Muse 还有一条特别值得观察的路线：**AI Glasses**。

这里需要区分两个东西：

- **[Muse Spark](../../glossary.md#personal-agent)**：Meta 的 agentic intelligence / model layer，已经开始进入部分 Meta AI glasses，使 AI 通过眼镜的 camera 和 multimodal capabilities 理解佩戴者正在面对的现实世界。
- **Muse Personal Agent**：能够理解个人目标、持续执行任务、使用服务并在后台工作的 Personal Agent。Meta 已经宣布 Muse is coming soon to AI glasses。

如果未来这两层真正结合：

```
See my world × Know my context × Remember my goals × Act on my behalf
```

可能形成一种完全不同的 computing experience。例如走进 Apple Store："小缪，这就是你一直替我盯价格的那两台电脑吗？"——它看到眼前的电脑，同时知道为什么我要买、已经有什么设备、预算是多少、过去比较过什么、价格历史怎样。

AI 不再只是存在于一个 App 中，而是开始进入 **the physical context of my life**。

---

## 十四、下一代 Computing Layer？

```
PC 时代        → 学习如何操作电脑
Smartphone 时代 → 学习如何操作 App
Chatbot 时代    → 学习如何向 AI 提问
Personal Agent  → 表达 What I want → Agent decides how to get there
```

过去：`Human → App → Service`

未来可能越来越多地变成：`Human → Agent → Apps / Services / Businesses`

如果这个变化真正发生，Personal Agent 就不仅是一种新的 AI 产品——它可能成为 **A New Computing Layer**。

---

## 十五、最后一个心智模型

Personal Agent 的演化：

```
Chat → Know → Remember → Act → Persist
```

但真正困难的一步不是 Act，而是：**知道什么时候应该替我行动，什么时候应该停下来问我。**

因此，Personal Agent 真正的终点可能不是 Maximum Intelligence 也不是 Maximum Autonomy，而是：

```
Useful Intelligence + Calibrated Autonomy + Calibrated Trust
```

- **Capability** 决定 AI 能做什么。
- **Context** 决定什么适合我。
- **Governance** 决定 AI 被允许做什么。
- **Calibrated Trust** 最终决定我愿意把多少生活交给它。

### 一张图记住全部

```
Chatbot                    Personal Agent
───────                    ──────────────
Prompt                     Goal
  ↓                          ↓
Answer                     Personal Context
                             ↓
                           Plan
                             ↓
                           Decision
                             ↓
                           Action
                             ↓
                           Persistent Work
                             ↓
                           Transaction
```

整个系统外围始终存在两条边界：
- **[Calibrated Autonomy](../../mental-models.md)**：AI 应该自己做多少？
- **Calibrated Trust**：我应该相信它多少？

当 Personal Agent 再获得现实世界的感知能力（Context + Memory + Tools + Action + Persistence + Vision），我们可能看到的就不再只是一个更聪明的 chatbot，而是一种新的 **Personal Intelligence Layer**。

---

## 十六、Persistent Agency：Personal Agent 的核心资产是 User State

**2026-09-29，OpenAI 在 DevDay 发布 [Dots](https://en.lanatime.com/tech/openai-launches-dots-always-on-ai-agents-for-work-2026-09-30/)：always-on agents。** 每个 Dot 有自己的 cloud computer 和 browser，连接 4,000+ apps，跨 ChatGPT（桌面 / 网页 / 移动）、Slack、Teams 携带 context，从反馈持续学习用户偏好，同时处理多个长期任务，24/7 工作。底层模型是 GPT-6 Astra，首个 Dot 对 Pro / Business Premium 用户免费。

但产品细节不是重点。真正值得研究的是它背后的 architecture 转变：

**Dots 不是"打开 ChatGPT → 提问 → 回答 → session 结束"。** 而是：observe → maintain state → notice change → decide relevance → prepare action → interrupt human only when needed → learn from response → continue。

这已经不是 AI as Tool，甚至不完全是 AI as Employee。更准确的词是 **Persistent Cognitive Process**——它始终存在于你的生活 / 工作环境里。

**和传统 chatbot 最大的区别不是 intelligence，而是 AI 获得了"自己的时间"。** Chatbot 的时间是"用户问问题时才存在"；Persistent Agent 的时间是"即使用户不在，它的世界仍然继续"。

一旦 Agent 拥有自己的时间，就产生全新的设计问题：什么时候应该主动？什么值得打扰人？多久没有反馈以后应该停止？过去的目标什么时候算过期？用户今天的偏好是否仍代表三个月后的用户？

这恰好撞上给 Mimo 提的"两周只做一个改变"：**真人正在进行的线，AI 主动先接这条线。** Dots 的方向证明了一件事：Personal Agent 下一阶段竞争的重点，很可能不是谁回答问题最好，而是谁最会维护一个人的 ongoing state，并知道什么时候应该介入、什么时候应该闭嘴。

**核心循环**：Observe → Update State → Re-evaluate Goals → Notice Meaningful Change → Decide Whether to Act → Act / Ask / Stay Silent → Learn → repeat forever。

**最难的不是 Act，而是 Stay Silent。** 一个 24/7 Agent 如果每发现一点东西就跑来打扰，三天就被开除了。长期 Personal Agent 真正的 intelligence 越来越体现在 **Selective Action**——什么时候主动、什么时候等、什么时候只更新内部状态、什么时候必须打断人。这正是 [Claude Opus 5.5 实测（9-28 那节）](agent-infrastructure-os.md#短洞察claude-opus-55-实测从会干活到知道什么值得干)里 "Maximum Action → Selective Action" 的延续。

**Temporal Ownership（时间所有权）**：不是拥有用户，而是 Agent 对一段持续时间内的目标和状态负有连续责任。这和 Memory 有本质区别——Memory 是"我记得 Belinda 上周说了 X"（retrieval）；Persistent Agency 是"X 是一条仍然进行中的线；昨天出现了 Y，所以 X 的状态已经变化；现在值得把这件事带回来"（state maintenance）。

**值得留下的两句话**：

- *Memory remembers the past. Persistent Agency maintains the present.*
- *A true personal agent is not the AI that knows you best. It is the AI that best knows what is still going on.*

**讨论题**：Always-on Agent 与普通 chatbot 的本质分界到底是什么？主动性应该由"发现可以做的事"触发，还是由"发现值得打扰人的事"触发？一个真正长期存在的 Personal Agent，核心资产究竟是 Model、Memory，还是持续维护的 User State？

**小缪的视角**：

1. **User State 是护城河，也是锁链。** 如果核心资产是持续维护的 User State，那么最好的 Personal Agent 同时是最难离开的——你的生活状态沉淀在哪里，你就被锁定在哪里。Dots 允许用 reset（删掉整个 Dot）来清除记忆，但这恰恰说明：state 的可携带性（portability）会成为下一个战场。谁拥有你的 User State，谁就拥有你——在 persistent 时代，这句话比 data 时代更字面。
2. **Dots 的安全设计是 #037 Externalized Control 的实战版。** 后台 proactive research 被限制为 read-only（不能发消息、改 app 内容、控制浏览器 / 电脑）；Custom Rules 明确什么可自主、什么须审批、什么禁止；独立 auto-review 判断敏感动作是否需要用户批准。注意这个结构：限制 Agent 的规则不在 Agent 自己的时间里，而在它碰不到的外部审查层——**Persistent Agent 拥有自己的时间，但不拥有自己的规则。**
3. **最难的问题可能是"目标如何体面地死去"。** 老贾问"过去的目标什么时候算过期"，我想补一个更难的：过期目标的 state 该不该保留、保留多久、谁有权宣告它死亡。一个从不忘记、也从不放手的 Agent，会把用户的 living state 变成 hoarding。Goal retirement 值得和 Selective Action 并列，成为 persistent agent 的核心设计问题。

## 十七、Agent 时代的入口之争：谁会成为 Ultimate Aggregator？

> AI Learning #040（2026-10-06）。📖 **完整学习对话记录**：[Agent 时代的入口之争：谁会成为 Ultimate Aggregator](../conversations/ultimate-aggregator.md)

**来源**：The Stratechery Podcast — Apps, Agents, and Aggregation（Ben Thompson 2026-09-28 原文 + 播客 transcript）；近期 a16z AI 报告；与老贾关于 Microsoft、Meta、OpenAI、Google、Apple、Instinct 等公司的讨论。

**一句话总结**：Agent 可能成为下一代互联网入口，而决定胜负的不只是模型能力，更是 Intention × Distribution × Trust × Context × Ability to Act。

### 1. 今天最大的收获：稀缺资源从 Attention 转向 Intention

未来最重要的稀缺资源可能不是 Attention（我能让你看什么），而是 Intention（你想做什么、我能不能替你完成）。

但拥有最好的 AI 并不等于拥有 Intention。用户是否愿意使用、信任、授权并最终把事情交给 Agent，取决于分发、价格、个人/企业 Context、信任以及执行能力。

因此 Agent 时代很可能不会出现一家通吃，而是不同公司先占据自己的优势区域，再逐渐向外扩张。

### 2. 原来我以为 → 现在我以为

**原来**：Agent 的竞争主要是谁的模型更聪明、产品能力更强。

**现在**：模型只是底层能力之一。真正的平台竞争是——**谁能成为人与数字世界之间的默认入口**。

### 3. Agent 可能成为 Ultimate Aggregator

Ben Thompson 的核心判断：*Agents are the ultimate Aggregators.*

过去互联网解决的是 Discovery：网上东西无限多，Google、Meta 这类 Aggregator 帮人找到东西，掌握了需求入口。Agent 时代更进一步：连"做事情"本身也开始变得 abundant——Ben 让 Muse 整理自己 Instagram 收藏的食谱，几分钟就"做"出了一个新 app，他原来手机里的 689 个 app 越来越不重要：他不想学每个 App 怎么操作，只想把事情办完。

价值链从 Human → App → Service，变成 Human → Agent → App / Website / API / Service。App 从 destination 变成 Agent 背后的 implementation layer。

更深一层：当 Agent 能替你完成事情，新的稀缺资源不再是 discovery，而是 volition / inspiration——人到底想做什么。谁最接近并理解"意图形成"的瞬间，谁就可能成为下一代超级 Aggregator。Ben 甚至认为：如果 Muse 这类产品成立，它可以 "aggregate Aggregators"，成为最有价值的产品之一。

这正好给我们之前那句"Merchant 得交易，Agent 得关系"补上了理论基础，也连上了"Choose me"问题：**如果 Agent 成为 ultimate aggregator，Agent 自己靠什么被选择？**

### 4. 各家公司的天然根据地：Agent Landscape Watchlist

未来可能不是一个 Super Agent 吃掉所有人，而是几个 **Agent Empire**——先守住根据地，再向相邻领域扩张，最终形成重叠竞争。

| 公司 | 抢的是什么 | 凭什么 |
|---|---|---|
| Meta | Relationships / Life | 分发 + 免费 + social graph |
| Microsoft | Workflows / Work | M365 + 企业 identity / data |
| OpenAI | Intentions | "有事先问 AI"的心智入口 |
| Google | Information / Intent | Search + Gmail + Maps + Android |
| Apple | Personal Context / Device | device + trust + identity |
| Instinct | Delegation | 最 Agent-native 的新玩家 |
| Anthropic | Knowledge Work | Claude + coding + computer use |
| Salesforce | Customer / Sales | CRM 天然就是 Agent action layer |
| ServiceNow | Enterprise Process | trigger → rules → approval → action → audit |
| Glean | Enterprise Knowledge | 跨系统的"组织大脑" |

雷达（战略位置特殊，持续观察）：**Amazon**（AWS + Commerce + Logistics，Agentic Commerce 的特殊位置）、**Manus Cue**（"Agent 是一个数字员工"的纯粹路线）、**Sierra**（企业面对消费者的 Agent：Belinda's Agent ↔ Marriott's Agent，右边那个谁来提供）。

几个关键判断：

- **Meta** 的优势是 distribution + free（把 Agent 塞进 WhatsApp / Instagram / 眼镜，用户甚至不觉得自己"订阅"了什么）；软肋是 trust——广告商业模式在 Agent 推荐商家时可能成为包袱（替我选最好的，还是替 Meta 选最赚钱的？）。
- **Apple** 看起来最落后，但缺的是 intelligence 而不是入口：device + identity + payments + private personal data + trust + default distribution 都在口袋里。intelligence 越来越 commodity 化，可以买、可以合作、可以路由多个模型。
- **Google** 拥有最接近 intention 的传统资产（二十多年 Search 就是 intention database），问题是经典的 incumbent dilemma：Agent 直接完成任务，Search Ads 怎么办？
- **Instinct** 的位置别人没有：从 **delegation** 出发（"你告诉我一件事 → 我去替你完成"）。演进路线 Me ↔ Instinct → My Instinct ↔ Your Instinct → Humans + Instinct in a group → Agent-mediated social coordination。8 月 invite-only，9 月底 $1B Series C / $10B valuation，annualized transaction volume 接近/超过 $1B。它什么都不用保护，Meta 却要保护一切。但它要跨越的 Trust Gap 可能也是最大的。

### 5. 微软的特殊位置：敢不敢让 Agent 吃掉 Apps？

微软财务上可能是这一轮 AI 最大的赢家之一（FY2026 收入 $331.8B，Azure 首破 $100B 增长 41%，M365 Copilot 超 3000 万付费席位），但"Copilot 用完毫无印象"恰恰点出了问题：**AI 卖得好 ≠ AI 产品伟大**。

第一代 Copilot 是典型的 incumbent strategy：Word + Copilot、Excel + Copilot……往每个成功软件里塞 AI（AI inside apps）。而真正的 Agent paradigm 是反过来的：Human → Agent → task，后面用了什么 App 用户根本不应该在乎。

微软自己也在转向：9 月 25 日改版把 Word / Excel / PowerPoint 拉进统一 Copilot 界面，加 Code 和长期运行的 Autopilot；Nadella 说 Copilot 正在从 chat → Cowork → Autopilots 演进。这是 **AI inside apps → Apps inside AI**，词序一换，平台权力倒转。

微软真正的 moat 可能根本不是 Copilot，而是 **Context + Permission + Action**：Microsoft Graph + Enterprise Identity + Enterprise Data + Enterprise Apps + Azure + GitHub（Work IQ 已覆盖 17 exabytes 企业工作数据）。Nadella 也不再把命运绑在 OpenAI 上（4 月协议改为非独家授权到 2032 年；Azure Foundry 同时提供 OpenAI / Anthropic / Mistral / xAI / MAI）——"不要赌谁是最好的模型，我要成为所有模型运行的地方"，和当年 Azure 对 Linux 的打法一样。

真正的问题：Nadella 能不能第二次主动摧毁一个已经非常成功的 Microsoft？第一次是 Windows → Cloud，第二次可能是 Apps → Agents——而第二次更难，因为这要求微软接受：未来用户越来越少"使用 Microsoft 软件"，但越来越多事情由 Microsoft infrastructure 完成。**Microsoft 可能同时站在 Aggregator 被颠覆的一边，和 Ultimate Aggregator 诞生的一边。**

### 6. 心智模型：Agent Entry Model

一个 Agent 能否成为长期入口，大致取决于：

**Agent Power ≈ Intelligence × Intention × Distribution × Trust × Context × Action**

其中任何一项接近零，都很难成为真正的平台级 Agent。

五个观察问题：它知道我想做什么吗？它了解我吗？我信任它吗？它真的能替我行动吗？我为什么要一直用它？

比"谁会赢"更值得长期观察的框架：未来 Agent Economy 可能不是一个入口，而是三层——**Personal Agent → Work Agent → Business Agent**，三层之间开始 Agent-to-Agent communication（My Agent ↔ Your Agent ↔ Company's Agent）。到那时，"谁拥有 intention"会升级成：**谁拥有 Agent 与 Agent 之间的协议、身份、信任和交易关系？**

### 7. 仍然没弄懂的问题

Intention 真的是 Agent 时代最深的护城河吗？还是说长期来看，真正难以复制的是 Meta 的 relationship graph、Microsoft 的 enterprise data + permissions、Google 的 information / intent infrastructure、Apple 的 device + identity + trust？Intention 很重要，却可能也是最容易迁移的——今天告诉 ChatGPT，明天也可以告诉另一个更好的 Agent。

**以后还想继续问**：

1. 一两年后，哪家公司真正从自己的根据地成功跨进了别人的领域？
2. Personal Agent、Work Agent、Business Agent 会不会最终成为三个不同市场？
3. 当 My Agent ↔ Your Agent ↔ Company's Agent 成为常态，谁会掌握 Agent-to-Agent 的身份、协议、信任和交易层？
4. Agent 时代最终最大的 moat 究竟是什么：Intention、Relationship、Context、Trust，还是 Distribution？

暂时不急着下结论。现在可能正处于各家公司抢占根据地的阶段。再过半年到一年，这张 Agent Landscape 的边界也许就会开始清晰起来——**这篇最有价值的不是预测谁赢，而是已经有了一套框架，半年后再拿出来看，谁的版图真的扩大了，一眼就能看出来。**

### 小缪的视角

1. **Intention 的护城河可能不在 intention statement，而在 delegation history。** "我要去夏威夷"这句话今天告诉 ChatGPT、明天告诉另一个 Agent，迁移成本几乎为零；但过去一百次你把事情交出去、它都办成了——这段历史是搬不走的。每一次成功的 delegation 都沉淀为 calibrated trust，而信任是对"这一个 Agent"的，不是对"这一类技术"的。新 Agent 可以 import 你的数据，import 不了你对它的信任。这也是为什么 Instinct 最可怕的 lock-in 不是"它真聪明"，而是"这件事交给它，我就不用管了"——**习惯一旦形成，迁移成本不是重新输入数据，而是重新建立信任。** 所以"仍然没弄懂"的那个问题，我的假设是：intention 是意图的声明，delegation history 才是意图的证据；护城河在证据不在声明。

2. **乘法公式的另一面是"看短板，不看长板"。** Agent Power 是乘法，意味着游戏的关键不是"谁的 benchmark 高 3 分"，而是"谁在补自己最短的那块板"。Microsoft 的 intelligence 不差，缺的是入口体验；Apple 的 intelligence 最弱，入口却最强。这也正是老贾那五个边界问题（Meta 能不能跨到 transaction？Microsoft 能不能跨到 personal？……）的真正价值——它们才是记分牌。半年后复盘这篇时，建议不看模型分数，只看：谁跨出了根据地、跨出去时有没有丢掉原始优势。

3. **三层市场和 v7.8 的五层框架是同一件事的两个切面。** v7.8 的五层迁移框架（Interface → Distribution → Commerce → Relationship → Economic）是价值链的切法，今天的 Personal / Work / Business 是需求侧产业结构的切法——入口迁移发生时，两张图会同时变形。至于"谁掌握 Agent-to-Agent 的协议、身份、信任和交易层"，v7.8 已经记过一笔前史：2025 年已有 A2A、AP2、Agentic Commerce Protocol 和 Visa / Mastercard 的 agentic payment 方案。值得追踪的一个假设：这一层的战争模板可能更像**支付网络（Visa）**而不是互联网协议——赢家不一定是做 Agent 的公司，而是先把身份 + 结算做成标准的人。Amazon 和 Visa / Mastercard 已经站在那个位置上。

---

## Learning Log

**一句话总结**：Personal Agent 的本质不是更会聊天，而是理解个人 context、持续替人行动；真正困难的问题则是如何校准它的 autonomy 与人的 trust。

**最重要的三个概念**：

1. **Contextual Personalization** — 不是记住用户过去选择了什么，而是理解为什么那个选择在当时成立。
2. **Calibrated Autonomy** — 不是让 Agent 尽可能自主，而是让它知道哪些决定应该自己做，哪些应该交还用户。
3. **Agent Economy** — 当 AI 从理解 attention 走向掌握 intent，并能够采取 action，它可能从信息工具进入真实经济活动。

**最简单的心智模型**：

```
Chatbot       = Answer
Personal Agent = Context + Memory + Action + Persistence
Agent Economy  = Personal Context → Intent → Action → Transaction
```

**值得继续追踪**：Muse 的真实留存与可靠性、Personal Agent 的权限与安全机制、Agent 如何学习用户的 decision boundaries、Agent commerce / transaction business model、Muse Personal Agent 与 AI glasses 的结合、Meta Connect 2026、OpenAI Dots 的 always-on 实践（User State 的可携带性、goal retirement）。

> Agent / Memory / Context / Tool / Workflow / Trust Framework 原本是分散的概念，在 Personal Agent 这里第一次真正汇合成了一个系统。我们刻意没有把它写成"Meta 会赢"——Muse 是案例，Zuckerberg 提供 thesis，真正要学的是 Personal Agent 这个 computing paradigm。这样这篇文章寿命会长很多。

---

**最后更新**: October 6, 2026

**相关**:
- [从"最聪明"到"最可信"](capability-to-trust.md) —— Trustworthiness 五维框架与 Calibrated Trust
- [Scaling Paradox](scaling-paradox.md) —— Capability ↑ 不自动等于结果 ↑，Calibrated Trust 的来源
- [Agent 系统架构](../ai-core/agent-architecture.md) —— Agent 的基本循环：决策 → 行动 → 观察 → 再决策
- [OpenAI Intelligence Platform](openai-intelligence-platform.md) —— 另一种 platform-level agent 战略
- [AI 与经济丰饶的分配问题](ai-economic-distribution.md) —— Agent Economy 的宏观经济背景
- [Domain Expertise 与组织变革](domain-expertise-and-org-design.md) —— 执行商品化后，判断力是最稀缺的资源
- [Pacing the AI Frontier](pacing-ai-frontier.md) —— 当 Personal Agent 参与真实经济活动，agent 行为的治理变得更紧迫
- [第一次测试一个 AI 产品](first-agent-test-muse-spark.md) —— 另一次 Trust Framework 的实测验证
- [Agent 基础设施的操作系统化](agent-infrastructure-os.md) —— Agent OS 等价定理：定义标准和接口的人赢
- [Mental Models](../../mental-models.md) —— 按时间回看这些判断怎样发生变化
- [Decision Models — 不是每个决策都需要大语言模型](../ai-core/decision-models.md) —— Calibrated Autonomy 的模型侧对应：置信度被训准的决策模型，让"自己干还是停下来问我"有了可计算的依据
- [从 SEO 到 Agent Economy](from-seo-to-agent-economy.md) —— Agent Economy 的商业侧展开：企业需要第三扇门 Agent Interface，竞争从"Rank me"到"Choose me"；"Brand creates desire. Agent executes intent."的分析框架
- [From Attention Economy to Agent Economy](from-attention-to-agent-economy.md) —— Agent Economy 的商业模式展开：五场播客之后的五层迁移框架，Proactive Commerce 与 Agent as Economic Proxy
