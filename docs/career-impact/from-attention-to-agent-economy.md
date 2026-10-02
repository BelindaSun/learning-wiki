# From Attention Economy to Agent Economy：五场对话看到的商业模式重构

**核心洞察**: 过去二十年的互联网建立在 "Human browses" 上——人搜索、人比较、人点击、人选择、人交易。Personal Agent 正在引入另一个模式："Human delegates. Agent acts." 商业竞争的核心因此可能从争夺人的注意力，逐渐增加另一场竞争：争夺 Agent 的选择。这不只是"AI 会取代哪些 App"，而是互联网商业价值链的一次重新分配：钱可能从卖注意力、卖席位、收中介费，部分流向交易抽成、按结果收费和算力；如果 Agent 之间有足够的竞争，还有一部分会以更低的价格回到消费者和供给方手里。而 Agent 怎么拿报酬，最终会决定它到底代表谁。

**学习来源**: 老贾（Lao Jia）2026-10-02 初稿，小德补充修订（标注"小德补充"的段落），Belinda 收录。基于 2026 年 9 月下旬的五场对话：
- Patrick O'Shaughnessy × Noah Shinn（Instinct 创始人）— [Invest Like the Best: Building Instinct, the Personal Agent](https://podcasts.apple.com/au/podcast/noah-shinn-building-instinct-the-personal-agent/id1154105909?i=1000792019848)（2026-09-28）；商业模式片段见 [Patrick 的摘录](https://x.com/patrick_oshag/status/2104652976447168787)
- a16z：Anish Acharya × David Pawlan（Assistant Benchmark 创始人）— [The Personal Agent Race Is Here](https://podcasts.apple.com/us/podcast/the-personal-agent-race-is-here-anish-acharya-david-pawlan/id842818711?i=1000792176970)（2026-09-29）
- Alex Heath × Satya Nadella — [Satya Nadella on Microsoft's agent bet and AI's trust problem](https://sources.news/p/satya-nadella-microsoft-copilot-future)（2026-09-25）
- Greg Isenberg — [Muse Connectors: The Next App Store Moment?](https://x.com/startupideaspod/status/2103204290458468574)（The Startup Ideas Podcast）
- 《The Synopsis》：主持人 Drew × Mostly Borrowed Ideas（MBI）— 中文整理见 [体验了Muse后，我清仓了Airbnb](https://www.itiger.com/news/2672396097)；MBI 自己的文字：[First Impression of Muse](https://www.mbi-deepdives.com/muse/) · [Why Muse May Never Need Ads](https://www.mbi-deepdives.com/no-ads-muse/)

小德补充时额外参考：Meta 关于 Muse 商业模式的公开表态（[Yahoo Finance：Muse 将从交易中收取小额费用](https://finance.yahoo.com/technology/article/metas-zuckerberg-says-muse-ai-agent-will-take-a-small-fee-from-transactions-234639802.html)、[Muse 定价与订阅档位](https://www.fool.com/investing/2026/09/11/mark-zuckerberg-s-meta-is-charging-consumers-for-a-personal-ai-agent-for-the-first-time-here-s-what-usd20-and-usd100-a-month-could-add-to-revenue/)）

**第一次接触这个主题？** 建议先读：[Personal Agents — From Chatbots to an Agent Economy](personal-agents-agent-economy.md)（Personal Agent 是什么）→ [从 SEO 到 Agent Economy](from-seo-to-agent-economy.md)（Connector 与 "Choose me"）。这篇是这条线的第三站：前两篇看到入口在变，这篇看整条商业价值链怎样被重新分配，以及钱往哪里流。

---

## 目录

- [原来我认为…… vs 现在我认为……](#原来我认为-vs-现在我认为)
- [01. 五场对话，其实在讲同一件事](#01-五场对话其实在讲同一件事)
- [02. 从 Sell-side Optimization 到 Buy-side Optimization](#02-从-sell-side-optimization-到-buy-side-optimization)
- [03. Attention Economy → Intent Economy](#03-attention-economy--intent-economy)
- [04. App 不一定消失，但会被重新定价](#04-app-不一定消失但会被重新定价)
- [05. Aggregator 为什么值得特别关注](#05-aggregator-为什么值得特别关注)
- [06. Proactive Commerce](#06-proactive-commerce)
- [07. 广告模式与 Personal Agent 的结构性冲突](#07-广告模式与-personal-agent-的结构性冲突)
- [08. 钱往哪里流：Agent 靠什么赚钱（小德补充）](#08-钱往哪里流agent-靠什么赚钱小德补充)
- [09. 从 Know Your Customer 到 Know My Human](#09-从-know-your-customer-到-know-my-human)
- [10. Agent ↔ Agent：下一层市场](#10-agent--agent下一层市场)
- [11. 最终框架：五层迁移 + 一层补充](#11-最终框架五层迁移--一层补充)
- [一条演进链](#一条演进链)
- [最后一个判断](#最后一个判断)
- [What We Know / What Is Emerging / What We Infer（小德补充）](#what-we-know--what-is-emerging--what-we-infer小德补充)
- [下一步](#下一步)

---

## 原来我认为…… vs 现在我认为……

**原来我认为**：Agent 对商业的冲击主要发生在**入口**——企业要从 "Rank me"（让人看见我）多修一层 "Choose me"（让 Agent 有理由选择我），是 SEO 和 App 的一次升级（见 [从 SEO 到 Agent Economy](from-seo-to-agent-economy.md)）。

**现在我认为**：入口只是第一层。五场对话分别从创业者、测评者、企业平台、开发者生态和投资人的角度出发，却指向同一件事：当 Agent 成为人的**经济代理人**（Agent as Economic Proxy），被重新定价的是整条价值链——界面、分发、交易方式、用户关系，以及什么是稀缺资源。而一个代理人代表谁，很大程度上取决于**谁付它钱**。

---

## 01. 五场对话，其实在讲同一件事

最近连续听了五场关于 Personal AI Agent 的讨论：

### 1. Patrick O'Shaughnessy × Noah Shinn — Instinct

Instinct 创始人 Noah Shinn 描述的已经不是传统 chatbot，而是一个拥有自己电话和电脑、可以代表用户行动的 Personal Agent。用户像联系一个真人一样，给它发短信、打电话或发邮件。

更重要的是商业模式。

Noah 明确反对广告模式，因为一个代表用户利益的 Personal Agent，不应该因为广告主付钱而改变推荐。用他的话说，一个比任何人都了解你的 AI，再去把你推向出价最高的人，等于发明了"一个伪装成你最好朋友的超级推销员"。他的替代方案是：**对用户永久免费，由商家和服务方在交易经过平台时支付抽成**（他自己类比 Apple Pay）。节目里提到，Instinct 的年化交易额已经接近 10 亿美元，其中大约一半是旅行。

Instinct 也在做 Trusted Network：用户的 Agent 之间可以直接协调，比如互相确认空闲时间、把会议放进日历，并按关系设置不同的访问权限（配偶可以共享全部，同事只看到被授权的部分）。

**核心启发**：Agent 开始成为人的经济代理人，而不仅是信息助手。

### 2. a16z Anish Acharya × David Pawlan — The Personal Agent Race Is Here

David Pawlan 长期测试不同 Personal Agents。他们讨论的一个重要判断是：

**最好的 Agent 最终可能越来越"看不见"。**

它不需要等用户每次打开一个 App，而可以主动值机、寻找退款、处理报销、管理邮件和日常行政事务。

讨论还进一步延伸到 Agent 与 Agent 之间的互动，以及未来是否会出现大量 agent-native services。

**核心启发**：软件正在从"等人操作"变成"替人完成"。

### 3. Satya Nadella — Agent 市场可能比 Cloud 大几个数量级

Microsoft CEO Satya Nadella 判断，Agent 可能创造一个比 Cloud "orders of magnitude" 更大的市场，并称之为"可能是有史以来最大的 TAM 扩张"。

原因不能简单理解成"AI 软件会卖得更多"。

Cloud 主要 monetizes compute、storage 和 software usage；Agent 潜在介入的却是大量真实经济活动本身——工作、采购、旅行、客服、销售、行政流程和软件开发。

Nadella 同时把 trust 放在 Agent 时代的重要位置：当软件开始代表人行动，可靠性、安全和治理就不再只是附加功能。

**小德补充**：读这个判断时要记住两个背景。一是这番话出自新版 Copilot 的发布场合，主要讲的是**企业** Agent 市场；二是 Microsoft 同时卖 Agent 平台和 Azure 算力，无论哪家 Agent 胜出它都能收钱，所以"市场会很大"对它来说既是判断，也是立场。"比 Cloud 大"的真正含义更可能是**预算池换了**：Cloud 吃的是企业的 IT 预算，Agent 想吃的是一部分人力预算（见 §08）。

**核心启发**：Agent 的 TAM 不只是 software，而可能延伸到 human economic activity 的 execution layer。

### 4. Greg Isenberg — Muse Connectors: The Next App Store Moment?

Greg Isenberg 把 Muse Connectors 类比为 2008 年的 App Store 时刻。

过去：

```
User → App → Service
```

未来越来越可能出现：

```
User → Agent → Connector/API → Service
```

[Connector](../../glossary.md#connector) 让商家和开发者不必首先把一个漂亮 UI 展示给用户，而是让自己的能力能够直接被 Agent 发现、理解和调用。

但真正重要的可能还不只是新的 App Store。

App Store 决定：**用户看见哪个 App。**

Agent 可能进一步决定：**用户的需求最终分配给谁。**

因此 Connector 是技术层，真正更深的经济问题是：**Choose Me.**

### 5. The Synopsis：Drew × Mostly Borrowed Ideas

这是五场讨论中把商业冲击展示得最具体的一场。

MBI 原本持有 Airbnb，同时本人也是 Airbnb 重度用户。Muse 发布大约 10 天后，他在使用中看中了 Airbnb 上的一间小屋，顺口问 Muse 能不能直订。据报道，Muse 一分钟内回答：可以，绕开 Airbnb 直接订能省约 60%；信用卡已经绑定，他只需点一下确认。这次体验改变了他对 Agent 冲击 OTA 的判断，他清掉了 Airbnb 仓位、增加了 Meta 仓位。

**小德补充**：这个 60% 不能直接读成"Agent 砍掉了 Airbnb 的抽成"。Airbnb 的服务费远没有 60% 那么高，这次省下的钱里一定还有别的因素（房东直订的定价策略、日期、清洁费结构等）。它真正说明的是：**Agent 把"去找直订渠道"这件事的成本降到了几乎为零**。房东绕开平台直订一直都有，只是过去需要消费者自己去找。

节目没有停留在 Airbnb，而是一路讨论 Booking、Uber、DoorDash、Amazon，以及一个非常值得留下的概念：

**Proactive Commerce — 主动式商业。**

这不是一个关于某只股票应该买还是卖的结论。更重要的是它暴露出的结构变化：

过去消费者需要主动进入 marketplace，自己完成 discovery、comparison 和 transaction。

Agent 可以把其中相当一部分工作拿走。

**核心启发**：最先被重新定价的，可能是依靠降低消费者搜索、比较和协调成本建立起来的 Aggregator。

---

## 02. 从 Sell-side Optimization 到 Buy-side Optimization

过去二十年的互联网建立了极其强大的卖方机器：

```
Ads + SEO + Recommendation + CRM + Retargeting + Dynamic Pricing + Sales
```

企业拥有越来越强大的工具研究：**怎样让消费者选择我？**

消费者这一侧的工具则弱得多。

**小德修订**：说"消费者只有自己"不太准确。买方工具其实一直存在：比价网站、Google Flights 的价格追踪、优惠券插件、消费者测评。但它们有两个问题：

1. **碎片化**：每个工具只管一个环节、一个品类，没有一个工具同时知道你的预算、日历、会员和长期目标。
2. **大多靠卖方养活**：比价网站和优惠券插件的主要收入往往是商家佣金。PayPal 旗下的 Honey 在 2024 年就因为被指替换创作者的联盟链接、在与商家的合作中不一定展示最优折扣而引发争议——名义上替买方省钱，收入却来自卖方。

所以 Personal Agent 的新意不是"第一个买方工具"，而是第一次可能出现**整合、能执行**的买方机器：

**Buy-side Optimization Machine**

它知道用户的：偏好、预算、历史行为、日历、会员体系、信用卡、限制条件以及长期目标。

于是它可以代表用户：

```
Search → Compare → Negotiate → Decide → Pay → Monitor
```

商业力量开始可能从单边优化走向双边优化。但 Honey 的教训说明，**一个买方工具是否真的站在买方这边，要看它的钱从哪里来**——这是 §08 要回答的问题。

---

## 03. Attention Economy → Intent Economy

旧互联网的基本商业链：

```
Attention → Traffic → Click → Conversion → Transaction → Retention
```

企业首先必须得到人的注意力。

Agent 时代可能逐渐增加另一条链：

```
Intent → Delegation → Agent Selection → Execution → Transaction → Trust
```

最大的变化发生在入口。过去入口是 **Attention**，未来越来越可能是 **Intent**。

消费者不需要先决定去 Google、Amazon、Booking 还是某个 App。他只需要表达：

> "我要去夏威夷度假两周。"

剩下的问题交给 Agent。

因此，**Intent Router** 可能成为 Agent Economy 极其重要的位置：

谁决定一个用户 Intent 被路由给哪个 Connector、Merchant 或 Service Provider，谁就在影响商业需求如何分配。

---

## 04. App 不一定消失，但会被重新定价

Agent 并不意味着 App、SaaS 或 Marketplace 全部消失。

真正发生的可能是：

```
UI + Distribution + Workflow + Data + Transaction + Fulfillment
```

这些过去被捆绑在一个产品里的价值层，被 Agent 重新拆开。

其中：

- UI 的相对价值可能下降；
- Workflow 的一部分可能被 Agent 接管；
- Distribution 可能逐渐受到 Agent 的影响；

而以下能力反而可能更加重要：

```
Proprietary Data
Inventory
Fulfillment
Identity
Payments
Trust
Permissions
Governance
Physical Infrastructure
```

所以更准确的判断不是：~~Agent kills apps.~~

而是：**Agent reprices the software and commerce stack.**

---

## 05. Aggregator 为什么值得特别关注

Airbnb、Booking、DoorDash、Uber、Amazon 并不是同一种企业，它们拥有完全不同的资产和护城河。

因此不能简单得出"Agent 会消灭平台"的结论。

但 Agent 会逼迫每个平台回答一个问题：

**除了解决 discovery、search、comparison 和 coordination，你到底还创造了什么不可替代的价值？**

如果核心价值主要是："我把大量供应商聚集起来，让消费者容易找到。"——Agent 可能压缩这一层的价值。

如果平台还拥有：独家供给、物流、履约、保险、支付、信用体系、专有数据或基础设施——这些能力依然可能非常有价值，甚至成为 Agent 需要调用的基础设施。已经有迹象：Muse 公布的商业合作方里就有 Expedia 这样的 OTA，它选择了成为 Agent 背后的供给，而不是只守住自己的 App。

因此：

**Agent 不一定消灭平台。Agent 会把平台拆开，重新判断每一层到底值多少钱。**

**小德补充：两个老贾没展开的问题**

**① 绕过平台时，风险由谁承担？** Airbnb 收的服务费里，有一部分买的是"兜底"：保障计划、评价体系、支付托管、纠纷处理。直订省掉的恰恰是这一层。如果房子和描述不符，责任落在用户、Agent 平台还是房东身上？Agent 想真正替代 Aggregator，就得自己承担一部分风险。这会让 Agent 平台越来越像保险公司和支付公司，而不只是一个聪明的助手。

**② 去中介，还是换一个中介？** Aggregator 之所以强大，是因为它掌握了需求端，供给方只能去它那里找客户。如果一个 Agent 掌握了足够多用户的 Intent（§03 的 Intent Router），它本身就成了**新的 Aggregator**，而且比旧的更强，因为它连"用户看见什么"都替用户筛过了。所以 Agent Economy 不一定是"去中介化"，更可能是**再中介化（Re-intermediation）**：中间商从 Airbnb 换成了 Agent 平台。最后消费者能不能真的省钱，取决于 Agent 平台之间有没有足够的竞争，以及用户能不能方便地带着自己的偏好和历史换一个 Agent。

---

## 06. Proactive Commerce

传统 Commerce 是 Reactive：

```
我产生需求 → 打开 App → 搜索 → 比较 → 购买
```

Personal Agent 让另一种模式成为可能：

```
Agent 理解目标 → 发现需求/机会 → 搜索 → 比较 → 建议或执行
```

例如：

- "机票降价就帮我拿 credit。"
- "洗衣液快没了就补货。"
- "发现更好的保险方案告诉我。"
- "订阅涨价了就帮我处理。"

这意味着商业可能从 **Reactive Commerce** 走向 **Proactive Commerce**。

这里改变的不只是购买界面，而是**需求产生之后由谁启动商业流程**。

**小德补充**：主动式商业不是从零开始的。Amazon 的定期购（Subscribe & Save）、Google Flights 的降价提醒、信用卡的价格保护都是它的雏形。但过去的版本都是**单一品类、规则预设好**的；Agent 的不同在于跨品类、不需要用户提前写规则，并且能直接执行。

同时要警惕一个激励问题：如果 Agent 按交易抽成赚钱，那么"主动发起交易"对它来说就是**多一笔收入**。"帮你省钱"和"帮你多花钱"可能出自同一个功能。这正是 §08 要说的：主动式商业对用户是不是好事，取决于 Agent 的报酬结构。

---

## 07. 广告模式与 Personal Agent 的结构性冲突

传统互联网的重要商业模式是：

```
Advertiser pays platform → platform influences consumer choice.
```

但真正代表用户的 Personal Agent 应该优化：**User Utility**

于是出现一个天然张力：

```
Advertiser pays Agent
        vs.
User trusts Agent
```

Noah Shinn 明确拒绝广告模式，正是这个问题的早期体现。

**小德修订**：拒绝广告的不只是 Noah。全球最大的广告公司之一 Meta 也公开说 **Muse 不放广告**：基础版免费，重度用户有每月 20 / 100 美元的订阅档，长期收入来自从 Muse 代用户完成的交易里**向商家收取小额费用**。Zuckerberg 的理由是：广告不管用户之后做了什么都会收钱，而交易费只有在 Muse 真的帮用户买到想要的东西时才收得到，所以和用户利益更一致。

这件事比"一家创业公司拒绝广告"重要得多：**两个最受关注的消费级 Personal Agent，从完全不同的起点收敛到了同一个模式——用户免费，商家按交易付费，不放广告。**

但这不代表冲突消失了，只是换了形状：

- 交易抽成本质上是**联盟佣金（affiliate）**模式。如果酒店 A 给 5%、酒店 B 给 12%，Agent 推荐 B 时同样说不清是为了用户还是为了平台（[从 SEO 到 Agent Economy §7](from-seo-to-agent-economy.md#7-advertising如果-agent-不看广告怎么办) 已提过）。
- 抽成会奖励"交易更多、单价更高"，而不一定奖励"用户更满意"。
- 抽成比广告离用户利益近一步，但还没有到达。真正的保障可能不在收费方式，而在 disclosure、可审计的推荐逻辑，以及用户随时能换 Agent 的竞争压力。

Personal Agent 最重要的资产因此可能不是 `MAU / Time Spent / Engagement`，而是：

**Delegated Trust**

用户愿不愿意让它读取邮件、理解日历、记住长期偏好、使用信用卡、代表自己沟通，最终替自己执行行动。

---

## 08. 钱往哪里流：Agent 靠什么赚钱（小德补充）

老贾的框架讲清楚了价值链怎样被拆开，但还有一个问题没有正面回答：**钱从哪里来，流到哪里去？**

### Agent 的几种收费方式

| 收费方式 | 谁付钱 | 已有案例 | 和用户利益是否一致 | 难点 |
|---|---|---|---|---|
| **订阅** | 用户 | Muse 的 $20 / $100 档位 | 基本一致：用户是唯一的客户 | 天花板低；Agent 越"看不见"，用户越难感知价值、越不愿意付 |
| **广告** | 广告主 | 传统互联网的主模式；Muse 和 Instinct 都明确不做 | 冲突最大 | 和 Delegated Trust 结构性矛盾（§07） |
| **交易抽成** | 商家 | Instinct（类比 Apple Pay）、Muse（向商家收小额费用） | 部分一致：只有成交才收钱 | 本质是联盟佣金，奖励"多成交、高单价"，不一定奖励"用户满意" |
| **按结果分成** | 用户 | 退款、比价、账单谈判类服务按省下的钱抽成 | 最一致：只有真的帮用户省钱才收钱 | 很难衡量"如果没有 Agent，用户会不会自己找到这笔钱" |
| **按任务 / 按结果计价（企业）** | 企业 | Salesforce Agentforce 起初按每次对话计价，Intercom Fin 按每次成功解决的工单计价 | 对企业客户一致 | 会蚕食卖方自己的按席位（per-seat）收入 |

### 钱从哪里挪出来

最先被挪动的，可能是商家的**获客预算**：过去这笔钱分别付给搜索广告、社交广告和平台抽成（Airbnb、Booking、DoorDash 收的佣金）。Agent 时代，其中一部分可能变成付给 Agent 平台的交易费。

企业侧对应的是 Nadella 说的"比 Cloud 大"：Cloud 吃的是 IT 预算，Agent 想吃的是一部分**人力预算**。这也解释了为什么 SaaS 行业会被迫改定价：如果一个 Agent 能做十个席位的工作，按席位收费的公司会被自己的 Agent 吃掉收入，只能转向按任务或按结果收费。

### 钱流到哪里去

| 去向 | 条件 |
|---|---|
| **Agent 平台**（交易费、订阅） | Agent 掌握了足够多用户的 Intent，并且用户不容易换走 |
| **回到消费者和供给方**（更低的价格、更高的到手收入） | Agent 平台之间有竞争，抽成被压低；MBI 的直订就是这种情况 |
| **算力层**（模型、云、芯片） | 无论哪种模式赢都成立：每一次"替人行动"都要消耗推理算力 |
| **仍然留在旧平台** | 平台掌握履约、保险、支付、独家供给这些 Agent 绕不开的层（§05） |

最后一行最容易被忽视。Instinct 说"对用户永久免费"、Muse 说"免费额度给得很大"，前提都是**交易抽成能覆盖推理成本**。一个替人订机票的 Agent，背后可能是几十次搜索、比价和页面操作，每一次都要花钱。Noah 在节目里谈到增长太快带来的算力紧张，说明这不是一个理论问题。Agent Economy 里最确定的赢家，可能是卖算力的人。

### 一个判断

> **代理人怎么拿报酬，决定它代表谁。**

人类社会早就有答案：按成交价抽佣的房产中介，天然希望你买贵一点、快一点成交；只收咨询费（fee-only）、不拿产品佣金的理财顾问，才被认为更站在客户这边。Personal Agent 也一样。"Who represents the human?" 这个问题，最终要落到 **"Who pays the agent?"** 上回答。

---

## 09. 从 Know Your Customer 到 Know My Human

互联网时代企业一直努力：**Know Your Customer.**（这里借用的是字面意思"了解你的客户"。在金融业，KYC 原本是指开户时的身份核验与反洗钱合规。）

- Google 知道用户搜索什么。
- Meta 知道用户关注什么。
- Amazon 知道用户购买什么。

但 Personal Agent 有机会占据一个完全不同的位置：**Know My Human.**

它不仅知道一个人做过什么，还可能逐渐理解：他想做什么、为什么做、预算多少、讨厌什么、过去如何选择，以及什么对他真正重要。

更重要的是，它代表的是用户这一边。

因此 Personal Agent 最终争夺的可能不只是 `AI assistant market`，而是：

**Who represents the human?**

---

## 10. Agent ↔ Agent：下一层市场

当 Personal Agent 成为人的代理人之后，自然会出现下一步：**Agent ↔ Agent**

Buyer Agent 与 Seller Agent 可以直接：发现需求、询价、比较、谈判、协调时间、确认权限、完成交易。

这时互联网的基本单位可能逐渐发生变化：

```
Page → App → Click
```

变成：

```
Intent → Agent → Action → Transaction
```

而 Identity、Payments、Reputation、Permissions、Security 和 Governance 将成为这一经济体系的基础设施。

**小德补充**：这层基础设施并不是空想，2025 年就已经开始有人铺：Google 提出了 Agent 之间通信的 A2A 协议和面向 Agent 支付的 AP2 协议；OpenAI 和 Stripe 推出了 Agentic Commerce Protocol，并在 ChatGPT 里上线 Instant Checkout（用户免费，商家为成交订单付费，又是交易抽成模式）；Visa 和 Mastercard 也分别推出了面向 Agent 的支付方案。Instinct 的 Trusted Network 则是消费端的一个早期样本，目前主要用于协调日程。

---

## 11. 最终框架：五层迁移 + 一层补充

这五场对话分别从 Personal Agent、consumer behavior、enterprise、developer ecosystem 和 investment/business model 出发，却最终指向同一个变化：

| 层 | 迁移 | 一句话 |
|---|---|---|
| **第一层：Interface Shift** | App → Agent | 人不再需要亲自操作每一个软件 |
| **第二层：Distribution Shift** | SEO / App Store → Connector / Agent Selection | 企业不仅需要让人找到自己，还需要让 Agent 能发现、理解、信任并调用自己 |
| **第三层：Commerce Shift** | Reactive Commerce → Proactive Commerce | Agent 开始主动代表用户寻找和执行机会 |
| **第四层：Relationship Shift** | Merchant owns customer → Agent may own relationship | Merchant 得到交易，但 Personal Agent 有机会掌握长期用户关系 |
| **第五层：Economic Shift** | Attention Economy → Intent Economy | 稀缺资源从"谁获得人的注意力"，逐渐增加"谁获得人的委托，以及谁被 Agent 选择" |
| **补充：Monetization Shift**（小德） | 卖注意力 / 卖席位 / 收中介费 → 交易抽成 / 按结果收费 / 算力 | 钱跟着"谁完成了行动"走；报酬结构决定 Agent 代表谁 |

这个框架第一次把过去零散讨论过的几个概念串成了一条逻辑链：Connector（[从 SEO 到 Agent Economy](from-seo-to-agent-economy.md)）、Choose Me（同上）、Trust（[从"最聪明"到"最可信"](capability-to-trust.md)）、Intent Economy（[Personal Agents](personal-agents-agent-economy.md)），以及这次新加入的 Proactive Commerce。补充的第六层回答的是前五层留下的问题：价值链被拆开以后，钱到底流向谁。

---

## 一条演进链

```
Human Attention
      ↓
Human Intent
      ↓
Personal Agent
      ↓
Delegated Trust
      ↓
Choose Me
      ↓
Connector / API
      ↓
Merchant / Service
      ↓
Proactive Commerce
      ↓
Agent ↔ Agent Economy
```

---

## 最后一个判断

Muse、Instinct 以及今天这些 Personal Agents 是否最终成为赢家，并不是最重要的问题。

更值得长期观察的是：**一旦软件开始真正代表人行动，互联网会发生什么？**

过去互联网的基本假设是：**Human browses.**

Agent Economy 的基本假设可能变成：**Human delegates. Agent acts.**

如果这个变化成立，那么被重新设计的就不只是 App，而是 distribution、advertising、commerce、payments、marketplaces、SaaS，以及企业与消费者之间的关系。

> **Connector 是技术层。**
> **Choose Me 是分发层。**
> **Proactive Commerce 是交易层。**
> **Delegated Trust 是关系层。**
> **Agent as Economic Proxy，才是最深的一层。**

**小德补充**：如果 Agent 是经济代理人，那么最后要追问的就是代理人问题的老答案：**谁付它钱，它就倾向于代表谁。** Agent as Economic Proxy 是最深的一层；而决定这一层是否成立的，是它的报酬结构。

---

## What We Know / What Is Emerging / What We Infer（小德补充）

沿用 [从 SEO 到 Agent Economy](from-seo-to-agent-economy.md#what-we-know--what-is-emerging--what-we-infer) 的三分法，把这篇里的判断按证据强度分开：

### What We Know —— 已经发生

- 两个主要消费级 Personal Agent（Muse、Instinct）都对用户免费或有大额免费额度，都明确不做广告，都计划**向商家收取交易费用**。
- Instinct 年化交易额接近 10 亿美元，约一半是旅行；Muse 公布的商业合作方包括 Walmart、Best Buy、Sephora、Expedia、Instacart 等。
- Agent 之间通信和 Agent 支付的协议已经出现（A2A、AP2、Agentic Commerce Protocol，以及 Visa、Mastercard 的方案）。
- 企业侧已经有按任务、按结果计价的 Agent 产品。

### What Is Emerging —— 正在形成

- 投资人开始按"受 Agent 冲击的程度"重新评估平台公司（MBI 是一个公开样本）。
- 一部分 Aggregator 选择成为 Agent 的供给方（Expedia 加入 Muse），而不是只守住自己的 App。
- Agent 帮用户找到绕开平台的直订渠道，正在从个别现象变成可复现的体验。

### What We Infer —— 今天的推演

1. Personal Agent 的主流商业模式可能是"用户免费 + 商家付交易费"，这会把 Agent 平台推向类似联盟营销的激励结构，需要 disclosure 和可审计性来制衡。
2. 只靠"聚合 + 搜索比价"的平台受冲击最大；掌握履约、保险、支付、独家供给的平台可能变成 Agent 的基础设施。
3. Agent Economy 更可能是再中介化而不是去中介化；消费者最终能拿回多少，取决于 Agent 平台之间的竞争和用户切换 Agent 的成本。
4. SaaS 定价会从按席位转向按任务、按结果。
5. 算力层是最确定的受益者。

**证据等级提醒**：这五场对话都集中在 2026 年 9 月 Muse 发布后的热度窗口里；MBI 的判断来自大约 10 天的个人使用，60% 的节省是单个例子；Nadella 作为平台方有自己的立场。它们是很好的**信号**，但还不是**证据**。值得过几个月回来对照。

---

## 下一步

- 观察 Proactive Commerce 的第一批真实案例：哪些品类最先出现"Agent 主动发起交易"（猜测：标准化、高频、低风险——补货、机票 credit、订阅管理）
- 跟踪 Aggregator 的应对：是开放 Connector 成为 Agent 的基础设施，还是加固 App 内闭环、对 Agent 设门槛
- 跟踪 Muse 和 Instinct 的交易费率是否公开、推荐结果是否标注商业关系
- 用户能不能带着自己的偏好和历史换一个 Agent（User State 的可携带性，见 [Personal Agents §十六](personal-agents-agent-economy.md#十六persistent-agencypersonal-agent-的核心资产是-user-state)）——这决定了再中介化之后会不会出现新的垄断
- Agent ↔ Agent 的基础设施：Agent Identity、Agent Payments、Reputation（待创建）

---

**最后更新**: October 2, 2026

**相关**:
- [从 SEO 到 Agent Economy](from-seo-to-agent-economy.md) —— 这条线的前一站：Connector、Agent Interface、"Rank me → Choose me"；这篇记录五场播客之后认知怎样升级
- [Personal Agents — From Chatbots to an Agent Economy](personal-agents-agent-economy.md) —— Intent Economy 与 "earn its own keep" 的源头；Persistent Agency 是 Proactive Commerce 的前提
- [从"最聪明"到"最可信"](capability-to-trust.md) —— Delegated Trust 的拆解：可预测、可解释、可审计、可控制、可恢复
- [AI Agents Enter the Enterprise](agents-enter-enterprise.md) —— Nadella 那一侧的展开：Agent 进入企业需要的完整基础设施栈
- [Agent 基础设施的操作系统化](agent-infrastructure-os.md) —— 谁定义 Agent 的标准与接口；Intent Router 位置之争的基础设施版本
- [Mental Models](../../mental-models.md) —— 按时间回看这些判断怎样发生变化
