# 从 SEO 到 Agent Economy

**核心洞察**: 当消费者不再亲自打开 App，企业第一次需要认真考虑第二种数字入口：Agent Interface。过去的竞争是"Rank me"（让人看见我、点进来），Agent 时代增加了一层"Choose me"（让机器有理由选择我）。人类需要喜欢你，机器需要信任你。

**学习来源**: 2026-09-20 与老贾（Lao Jia）的讨论总结，由 Belinda 整理；Greg Isenberg 对 Zuckerberg 关于 Muse Connectors 判断的 13 条总结（X @gregisenberg，2026-09-20）；armand（@armand_ruiz）关于 Muse 被酒店网站 CAPTCHA 拦截的推文（X，2026-09-20）；Meta 关于 Muse 能力的公开说明（about.fb.com）；Google 关于搜索基础流程与生成式 AI Search 的官方文档（Google for Developers）

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [Connector](../../glossary.md#connector) · [MCP](../../glossary.md#mcp) · [Personal Agents — From Chatbots to an Agent Economy](personal-agents-agent-economy.md)

> 定位说明：本文中的 **"Rank me → Choose me"** 与 **"Brand creates desire. Agent executes intent."** 是这次讨论中提出的**分析框架**，不是行业既有结论。这是 Learning Wiki 最珍贵的部分：不是只记录别人已经知道什么，而是记录我们在 2026 年 9 月看到什么、又从中推到了哪里。

---

## 从一张图开始

今天看到 Greg Isenberg 对 Zuckerberg 关于 Muse Connectors 的一组总结。其中一句特别值得注意：

> "我们正在从'人选择 App'，走向'Agent 选择商家'。"

图里还提出：Connector 可能成为新的应用入口，企业未来需要 Agent Strategy，API 的战略地位可能超过 App。

![Greg Isenberg 总结的 Zuck 关于 Muse Connectors 的 13 个判断：从"人选择 App"走向"Agent 选择商家"、Connector 成为新应用入口、企业需要 Agent Strategy、API 可能比 App 更重要](assets/greg-isenberg-muse-connectors-infographic.jpg)

*来源：Greg Isenberg 对 Zuckerberg 关于 Muse Connectors 内容的总结（X @gregisenberg，2026-09-20）*

原本只是想弄明白一个技术问题：

Connector 到底是什么？它跟 API、MCP 有什么不同？

没想到沿着这个问题一直往下追，最后碰到了 Search、SEO、App、广告、Brand、隐私、Trust，以及整个 Agent Economy。

然后又看到另一个非常具体的例子……

---

## "Slide to prove you're human."

有人让 Muse 去一家酒店网站查房。Muse 打开网站，准备替用户完成任务，网站却弹出一道验证：

**"Slide to prove you're human."**

网站没有做错。过去二十多年，互联网安全体系一直在努力区分 human 和 bot。Bot 往往意味着爬虫、垃圾流量、自动抢购、攻击和欺诈。

但现在，一个新的角色出现了：**authorized agent**——由真人明确授权、代表真人办事的 AI agent。

于是，一个原本完全合理的安全机制突然产生了悖论：**网站成功挡住了机器人，也可能成功挡住了顾客。**

这道小小的 CAPTCHA，暴露出的可能不是一个产品 bug，而是两个互联网时代正在发生碰撞。

![armand 在 X 上的推文：他的 Muse 想替他在酒店网站查房，却被 "slide to prove you're human" 的 bot 验证拦住，无法查房、无法预订，直接预订死在了那里](assets/armand-muse-hotel-captcha-tweet.jpg)

*来源：armand（@armand_ruiz）在 X 上的推文，2026-09-20*

---

## 1. 从 Human Interface 到 Agent Interface

过去几十年，企业的数字化基本围绕一个前提展开：**软件是给人操作的。**

PC 时代，企业建设 Website。Mobile 时代，企业建设 App。界面越来越漂亮，按钮越来越顺手，支付越来越简单，因为坐在屏幕前面的是一个 human。

但 Agent 改变了这个前提。当用户告诉 Personal Agent：

- "帮我看看这家酒店有没有房。"
- "给姐姐生日买束花。"
- "帮我找一台适合我的 MacBook。"

用户不再关心应该打开哪个 App、点哪个菜单、填写哪个表单。**用户只表达 intent。Agent 负责后面的工作。**

于是企业第一次需要认真考虑两种不同的数字入口：

```
                    BUSINESS
                  /          \
                 /            \
                ↓              ↓
        Human Interface    Agent Interface
                ↓              ↓
          Website / App     API / Connector
                ↓              ↓
              Human           Agent
```

过去企业主要为 humans 构建 interface；Agent 时代，企业还需要为 agents 构建 interface。

这里的 Agent Interface 不一定有 UI。Agent 不需要漂亮按钮、banner 或商品陈列。它需要的是**结构化、可靠、可执行的能力**：

- 商品是什么？
- 价格多少？
- 有没有库存？
- 什么时候送到？
- 能否退款？
- 用户授权了什么？
- 能否付款？
- 交易成功了吗？

这就是 API、Connector、identity、permissions、structured data 等基础设施开始变得重要的原因。

---

## 2. Connector：Agent 伸向外部世界的插头

可以把 Connector 想成：**Agent 伸向外部世界的插头。**

Agent 本身可以理解用户、推理和规划，但用户的邮件、Calendar、酒店库存、购物商品和支付系统都存在于其他服务里。Connector 把这些外部能力接进 Agent。

一个简单的心智模型：

```
Human
  ↓
Agent
  ↓
Connector
  ↓
API / Service
  ↓
Real World
```

API 是一个服务提供给机器使用的"门"。Connector 则负责让 Agent 能够接上并使用这扇门，包括认证、权限、工具定义、参数结构和结果返回。MCP 又是另外一层：它试图**标准化** Agent 与外部工具、资源之间的通信方式。

因此三者可以粗略记成：**API 是门。Connector 是 Agent 接上并使用那扇门的方式。MCP 是大家尝试采用的一套标准化连接语言。**

Meta 对 Muse 的公开说明已经体现了这种方向：Muse 可以代表用户跨应用工作，也能通过自己的浏览器打开网页、填写表单和完成交易；用户决定连接哪些服务以及给予多大权限。

Connector 因而不只是一个技术功能。**它可能成为 Agent Economy 的基础设施。**

---

## 3. App-only 的悖论

Mobile 时代，一些企业曾经主动弱化甚至取消 Web 体验，把用户引向 App。当时这很合理。App 能帮助企业：

- 更稳定地识别用户；
- 建立持续的账户关系；
- 获得更丰富的行为数据；
- 通过 push notification 主动触达用户；
- 保存地址、支付方式和购买记录；
- 提高 retention；
- 绕过 Google 等搜索入口；
- 把消费者留在自己的生态里。

从消费者角度，Web 很自由：

```
Search → Open website → Look around → Leave
```

甚至不用登录。

从商家角度，这种自由有时恰恰意味着：**这个顾客随时可能消失。** App 则帮助企业把一个匿名访客逐渐变成一个可识别、可触达、可分析、可重复交易的长期用户。

于是企业好不容易从 `Google → Consumer` 争取到了 `Brand ↔ Consumer`。但 Agent 时代，一个新的中间层又出现了：

```
Brand ↔ Agent ↔ Consumer
```

这产生了一个有趣的历史悖论：**昨天的 App moat，可能成为明天的 Agent friction。**

如果一家 App-only 企业既没有 Web access，也没有适合 Agent 使用的 API、Connector 或其他 machine-facing interface，那么用户授权的 Agent 可能根本无法和它做生意。竞争对手如果能够被 Agent 调用，交易可能自然流向竞争对手。

因此，未来 App-only 企业未必需要重新建设一个完整的网页版 App。它们真正缺少的可能是**第三扇门：Agent Interface。**

---

## 4. Search 没有消失，Search Interface 正在改变

传统搜索的路径是：

```
Question → Google → Search results → Open several pages → Read → Compare → Synthesize
```

Google 官方描述的 Search 基础流程至今仍然是：**Crawling → Indexing → Serving results**。Googlebot 发现网页，Google 理解并建立索引，然后在用户提出 query 时，从索引中返回相关结果。SEO 因此围绕一个核心目标建立：**让搜索引擎更容易发现、理解并在合适的 query 下呈现我的内容。**

但生成式 AI 改变了用户这一侧。越来越多问题可以变成：

```
Question → AI → Synthesized answer → Follow-up
```

用户没有停止搜索。用户可能只是**越来越少亲自操作传统 Search Engine**。

Google 自己也在发生变化。2026 年 Google 的官方文档已经明确讨论生成式 AI Search，并表示传统 SEO 基础仍然适用于 AI 功能；Google 的生成式 AI 搜索仍依赖其核心搜索排名和质量系统以及搜索索引。

所以短期内更准确的说法不是 "Search is dying."，而是：**"Search is being absorbed into AI interfaces."**

---

## 5. 从 "Rank me" 到 "Choose me"

SEO 时代，企业最关心的问题之一是：**How do I rank higher?** 因为人仍然站在最终选择的位置：

```
Search Engine → 10 results → Human compares → Human chooses
```

Agent 时代可能出现不同的路径：

```
Human → Agent → Discover 100 services → Compare → Select 3 → Human
```

甚至在低风险、充分授权的任务里：

```
Human → Agent → Discover → Compare → Choose → Execute → Done
```

这时候企业面对的问题发生了变化：**How do I get the agent to choose me?**

这可能孕育出某种 Agent Optimization。它不一定等同于今天所谓的 SEO、AEO 或 GEO，这些术语和实践仍在快速发展。但底层问题已经出现：**怎样让机器发现我、理解我、信任我，并愿意选择我？**

因此竞争可能从 **"Rank me."** 逐渐增加一个新的目标：**"Choose me."**

> （分析框架声明：这不是行业既有结论，是本文在 2026 年 9 月的推演。）

---

## 6. Agent Optimization 可能优化什么？

传统数字营销非常重视 presentation：漂亮图片、标题、广告文案、促销、页面设计。Agent 理论上更容易比较结构化变量：

Price · Availability · Specifications · Delivery time · Cancellation policy · Refundability · Reliability · Historical fulfillment · Trust · User preference

因此企业未来可能不仅需要优化 "How attractive do we look?"，还需要优化 **"How trustworthy and executable are we to machines?"**

这意味着企业的数字竞争力可能逐渐增加一批新的指标：

- API reliability
- structured product data
- machine-readable policies
- transaction success rate
- identity and authorization
- auditability
- fulfillment quality

企业过去努力**让人点击自己**。未来还可能需要：**让机器有理由选择自己。**

---

## 7. Advertising：如果 Agent 不看广告怎么办？

传统数字广告争夺的是 **human attention**。Search Ads 希望人在搜索结果中看见它。Social Ads 希望人在 feed 中停下来。Display Ads 希望人点击。

但 Agent 没有"眼球"。一个 Personal Agent 在替用户寻找商品时，并不会因为 "🔥 LAST CHANCE! 40% OFF! 🔥" 而产生冲动。它更可能比较真实价格、质量、退货政策和用户需求。

因此广告不会简单消失，但它的商业模式可能部分迁移：

```
Attention → Click → Transaction
```

变成更直接的：

```
Eligibility → Selection → Transaction
```

传统 CPM（按曝光收费）和 CPC（按点击收费）的相对重要性可能下降，而 CPA、referral fee、commission、revenue share 等与真实交易直接相关的模式可能进一步重要。

甚至可能出现 **Ads for Agents**。但这会立即产生一个重要的 Trust 问题：如果 Hotel A 给 Agent 平台 5% commission，Hotel B 给 12%，Agent 推荐 B——是因为 B 更适合用户，还是因为平台赚得更多？

今天搜索引擎至少可以把广告标成 Sponsored。Agent 如果把商业激励包装成"这是最适合你的选择"，问题会严重得多。因此 Agent Economy 需要的不只是新的广告模式，还需要新的 **disclosure、auditability、conflict-of-interest rules 和 recommendation transparency**。

---

## 8. Brand 不会消失，但可能分裂成两张脸

Agent 不容易被广告影响，并不意味着 Brand 失去价值。关键在于用户的 intent 是怎样形成的。

如果用户说"帮我买双跑鞋"，Agent 有很大的选择空间。但如果用户说"帮我买双 Nike"，**Nike 已经在 Agent 出现之前赢得了竞争。**

```
Brand → Human preference → Intent → Agent → Transaction
```

因此 Agent 时代，强品牌甚至可能更加重要，因为竞争越来越可能发生在 **intent 形成之前**。

另一方面，大量功能性强、标准化程度高、容易量化比较的商品可能受到 Agent 的冲击。如果用户只是需要"一根可靠的 2 米 USB-C cable，明天送到，不超过 $20"，Agent 可以直接比较价格、质量、退货率、配送速度和可靠性。品牌包装带来的溢价可能受到挑战。

于是未来 Brand 可能出现两张脸：

```
                     BRAND
                   /       \
                  /         \
                 ↓           ↓
          Human Brand     Machine Brand
                 ↓           ↓
             Emotion      Reliability
             Identity     Trust
             Culture      Data quality
             Story        Fulfillment
             Design       API quality
```

**人类需要喜欢你。机器需要信任你。**

---

## 9. Brand creates desire. Agent executes intent.

这可能是今天讨论里最重要的一个分界。

Agent 很擅长回答"哪家酒店最适合我？"但一个 Agent 未必是让人第一次产生"我好想去夏威夷"的那个东西。这个 desire 可能来自一部电影、一段视频、一张照片、一个朋友的旅行、一篇文章、一种文化想象。

于是 Brand 的一个核心作用可能重新凸显：**创造 desire，而不是只捕获 transaction。**

未来可能出现这样的分工：

```
                    BRAND
                  /       \
                 /         \
                ↓           ↓
        HUMAN INTERFACE   AGENT INTERFACE
                ↓           ↓
             Story         API
             Culture       Connector
             Emotion       Inventory
             Community     Price
             Experience    Policies
             Identity      Transaction
                ↓           ↓
             DESIRE      EXECUTION
                  \       /
                   \     /
                  COMMERCE
```

一句话：**Brand creates desire. Agent executes intent.**

这当然不是说所有 desire 都由品牌创造，也不是说 Agent 永远不会影响 preference。它是一个分析框架：Human-facing systems 更擅长影响意义、情绪和欲望；Agent-facing systems 更擅长比较、决策和执行。

> （分析框架声明：这不是行业既有结论，是本文在 2026 年 9 月提出的分界。）

---

## 10. 谁掌握真正的 Customer Relationship？

这可能是 Agent Economy 最重要的商业问题之一。

Google 时代，Google 掌握大量 query intent。App 时代，企业努力把用户拉进自己的 App，重新建立 direct customer relationship。

Personal Agent 时代，Agent 平台可能同时拥有：**Intent + Context + Memory + Execution**。它不仅知道"Maui hotels"，还可能知道：三个成年人、不喜欢爬山、不喜欢危险山路、喜欢海边散步和吃吃喝喝、旅行日期、预算、过去的酒店偏好，以及 Calendar 上什么时候有空。

如果这些 context 最终汇聚到 Personal Agent，那么消费者入口的权力可能再次迁移：

**商家得到交易。Agent 得到 relationship。**

因此未来最大的竞争未必只是"谁拥有最聪明的模型？"，而可能是：**"Who does the human trust to act on their behalf?"**

---

## 11. Agent 甚至可能成为消费者的隐私缓冲层

App 时代，商家希望尽可能了解消费者。Agent 时代理论上可能出现另一种结构：

```
Merchant:  "What do I need to know about this customer?"
Agent:     "Only what you need to complete this transaction."
```

用户不一定需要把完整行为画像交给每一个商家。Agent 可以只释放完成任务所必需的信息。这可能让 Personal Agent 成为一种 **privacy buffer**。

但权力并没有因此自动消失。真正的问题只是转移成：**那 Agent 平台知道多少？**

所以 Agent Economy 的核心基础设施最终一定会碰到：identity、permission、privacy、auditability、controllability 和 trust。**这也是为什么 Agent Economy 与 AI Trust 并不是两个独立话题。**

---

## What We Know / What Is Emerging / What We Infer

### What We Know —— 已经发生

Personal agents 已经开始从"回答问题"进入"代表用户行动"。Muse 官方描述的能力包括跨应用工作、使用浏览器、填写表单、旅行预订、购物和支付；用户可以控制连接哪些应用以及给予多少权限。

传统 Search 仍然依赖 crawling、indexing 和 serving，而 Google 的生成式 AI Search 目前仍建立在其核心 Search ranking、quality systems 和 index 之上。

因此今天还不能简单地说"SEO 已死"或者"Web 已死"。它们没有死。**但它们在人机交互链条中的位置正在变化。**

### What Is Emerging —— 正在形成

用户越来越可以通过 AI 完成过去需要搜索、比较和打开多个 App 才能完成的任务。企业开始面对一个过去很少存在的问题：**我的服务是否不仅 human-accessible，而且 agent-accessible？**

Authorized agents 与传统 anti-bot infrastructure 之间的冲突已经开始显现。

API、Connector、agent identity、permissions、machine-readable commerce 和 agent payment infrastructure 的重要性正在上升。

### What We Infer —— 今天的推演

如果这些趋势继续：

1. 企业数字战略可能从 Website + App 进一步扩展为 **Website + App + Agent Interface**。
2. 一部分 App moat 可能变成 Agent friction。
3. SEO 的核心竞争可能增加一层：**Rank me → Choose me**。
4. 数字广告的一部分价值可能从 human attention 转向 agent selection 和 transaction。
5. 标准化、可量化商品可能更容易被 Agent commoditize。
6. Brand 可能逐渐同时拥有 Human Brand 与 Machine Reputation。
7. Brand 的长期价值可能更多集中在 intent 产生之前，而 Agent 越来越多参与 intent 产生之后的比较和执行。
8. Personal Agent 可能成为消费者与数字商业之间新的 trust layer。
9. 掌握 Intent + Context + Memory + Execution 的 Agent 平台可能成为下一代互联网最重要的入口之一。

**这些不是确定的未来。它们是从今天已经出现的技术与行为变化出发得到的假设，值得未来持续验证。**

---

## 最后的心智模型

过去互联网的核心问题是：**How do I get humans to find me?** Search 时代的答案是 SEO。Mobile 时代进一步变成：**How do I get humans into my app and keep them there?**

Agent 时代可能增加一个全新的问题：**How do I make agents able and willing to do business with me?**

因此真正发生的变化也许不是 `Website → App → Agent` 这么简单。更准确的是：

```
Human
  ↓
Express intent
  ↓
Personal Agent
  ↓
Discover → Understand → Compare → Choose → Execute
  ↓
Digital services
  ↓
Real-world outcome
```

Search、Website、App、API 和商家并不会因此消失。它们可能越来越多地退到 Agent 背后，成为 Agent 调用的基础设施。

AI 未必消灭 Search、Apps 和 Services。**AI 更可能把它们从"人直接操作的目的地"，变成 Agent 背后的能力层。**

而今天那句看起来有点好笑的 "Slide to prove you're human."，也许几年后回头看，会成为一个很有时代意味的瞬间。

旧互联网正在问：**Are you human?**

Agentic Internet 需要回答的却可能是：**Are you an authorized agent acting for a human?**

两句话之间，差的不是一个 CAPTCHA，而是一套新的互联网身份、授权、信任、分发和商业体系。

---

## 相关概念

Agent · Connector · API · MCP · Tool · Workflow · Memory · Trust · SEO · Agent Economy

## Glossary —— Connector

**Connector** —— Agent 伸向外部世界的插头：把 App、数据源或服务连接进来，让 Agent 在用户授权范围内读取信息或执行动作。

最简单心智画面：

```
Agent → Connector → External Service
```

与相邻概念的区别：**API 是服务提供的门；Connector 是 Agent 接上并使用那扇门的方式；MCP 则试图让不同 Agent 与外部工具使用一套标准化的连接语言。**

---

**最后更新**: September 20, 2026

**相关**:
- [Personal Agents — From Chatbots to an Agent Economy](personal-agents-agent-economy.md) —— Agent Economy 的概念源头：从 Attention Economy 到 Intent Economy 的迁移
- [Agent 基础设施的操作系统化](agent-infrastructure-os.md) —— Agent OS 等价定理：定义标准和接口的人赢；Connector 是这套基础设施的一块
- [从"最聪明"到"最可信"](capability-to-trust.md) —— Agent Economy 绕不开的前提：Trust；"Who does the human trust to act on their behalf?"
- [AI 与经济丰饶的分配问题：谁拥有 AI 资本？](ai-economic-distribution.md) —— Agent Economy 的宏观经济背景：增长归谁
- [Mental Models](../../mental-models.md) —— 按时间回看这些判断怎样发生变化
