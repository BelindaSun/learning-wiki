# AI Agents Enter the Enterprise：当 Agent 真正进入企业

**核心概念**: Agent 进入企业，不是"公司买了一个更聪明的聊天机器人"，而是 AI 从回答问题的工具，逐渐变成能够拥有身份、权限、工具和工作流程，并在治理边界内自主完成工作的执行主体。

**学习来源**:
- Uber Engineering — Running a Software Factory Efficiently at Uber Scale
- McKinsey — The State of AI in 2026
- Deloitte — The Path to Agentic Transformation

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [Tool](../../glossary.md#tool) · [MCP](../../glossary.md#mcp) · [Harness](../../glossary.md#harness)

---

## 原来我认为…… vs 现在我认为……

**原来认为**: Agent 进入企业 = 员工开始使用 ChatGPT / Claude / Copilot。企业的 AI 部署是一个技术问题——选模型、调参数、写 prompt。

**现在认为**: 员工使用 AI 只是"AI 进入了企业"，不是"Agent 进入了企业"。真正的 Agent 进入企业，是 AI 从回答问题走向自主执行，最终需要一整套组织基础设施——身份、权限、工具、工作流、评估、治理、可观测——才能真正运转。缺任何一层，Agent 都很难进入大型企业的生产环境。

---

## 从 Chatbot 到 Digital Employee：六步进化

最容易产生的误解是把"员工使用 AI"等同于"Agent 已经进入企业"。可以把变化画成六步：

```
Chatbot         → 回答问题
Copilot         → 帮助人工作
Agent           → 替人执行任务
Workflow Agent  → 持续运行工作流程
Managed Agent   → 被企业系统管理和触发
Digital Employee → 成为组织中的持续执行主体
```

核心变化是：AI 从"给人答案"，变成"替组织采取行动"。一旦 AI 可以行动，企业就必须回答：它是谁？它能做什么？它能访问什么？谁管理它？它做错了怎么办？怎样评价它做得好不好？

---

## 阶段一：Copilot — 人做，AI 帮

```
Human → AI assists → Human acts
```

帮员工写邮件、总结会议、搜索资料、生成代码、起草报告。AI 提供 intelligence，但真正采取行动的还是人。AI 是工具，人是执行主体。这个阶段最大的风险是：答案对不对？

## 阶段二：Agent — 人给目标，AI 执行

```
Human → Goal → Agent → Plan → Tools → Action
```

人不再说"帮我写一封邮件"，而是说"把这个客户问题处理掉"。Agent 自己决定查客户资料、找相关订单、查询政策、判断问题、起草回复、必要时升级给人。

这是 Agent 和普通 AI Assistant 最关键的区别之一：**Assistant 帮你做一步；Agent 围绕目标自己决定下一步做什么。**

## 阶段三：Workflow Agent — AI 成为流程的一部分

企业真正获得生产力，不只是因为一个 Agent 会干活，而是因为它开始进入 Workflow。

传统付款异常处理需要人工打开多个系统、逐步检查、做出决定。Agent 化以后：

```
Payment exception → Agent triggered → Retrieve data → Check rules → Call tools → Resolve / Escalate to Human
```

AI 不再是"人在工作时使用的工具"，开始成为"工作流程本身的一部分"。

## 阶段四：Managed Agent — 系统触发，人处理例外

```
Event / System → Agent automatically triggered → Agent acts → Success → Done / Exception → Human
```

甚至不需要人先来叫它。Uber 已经公开介绍了一些这样的 managed agents：自动 code review、CI failure self-healing、bug debugging、on-call alert triage、端到端 PR 处理。越来越多的 Agent session 并不是由人直接发起，而是系统事件自动触发。

**Human 从 workflow initiator，逐渐变成 exception handler。**

---

## 人的工作：从"执行 1000 件事"到"处理 5 件例外"

```
传统：1000 Tasks → Human handles 1000
Agent 化：1000 Tasks → Agent handles 970 → 30 Exceptions → Human
Agent 能力继续提高：1000 Tasks → Agent handles 995 → 5 Exceptions → Human
```

Agent 带来的生产力变化，不只是"人做同一件事快了 30%"。更大的变化可能是：绝大多数事情，人根本不再需要看。人的 attention 开始成为稀缺资源。

企业优化的目标从 *How can AI help employees work faster?* 慢慢变成 **Which things still require human attention?**

---

## Uber 案例：Agent 成为 Software Factory 的一部分

截至 2026 年，Uber Engineering 公布：

- 超过 70% 的 PR 已归因于本地或云端 Agents
- 有超过 3,600 个 Agent Skills
- 每天超过 30,000 次 Agent Skill executions
- 越来越多 Agent sessions 不是由人启动，而是由 automated managed agents 触发

这些 Agents 负责 code review、CI self-healing、debugging、maintenance、alert triage、visual validation。更准确的描述不是"程序员用 AI 写代码"，而是：**AI Agents 开始成为软件生产系统里的执行层。**

---

## Agent 需要 Tools：从"会想"到"能做"

LLM 本身只能 think / generate。进入企业以后，它必须能够 act。所以需要 Tools：

```
Agent
 ├── Search
 ├── Database
 ├── GitHub
 ├── Internal APIs
 ├── Payment System
 ├── CRM
 └── Communication Tools
```

Uber 已经有一个统一 MCP gateway，连接超过 1,000 个 MCP servers。但工具太多又产生新问题——如果一次把 100 多个 tool schemas 全塞进 context，光工具定义就可能占掉数万 tokens。

**Agent 不只是要会使用 Tool，还要会找到正确的 Tool。** 企业 Agent Infrastructure 因此开始出现 Tool Search / Resolution → Gateway → Permission → Tool 这样的分层结构。

---

## Agent 需要 Context：Model Intelligence ≠ Enterprise Intelligence

一个 Agent 即使模型非常聪明，如果不知道公司代码在哪里、谁负责哪个系统、哪些服务互相依赖、历史事故是什么，它仍然很难真正工作。

Uber 建立了 AI Context Graph：24 million nodes、80 million edges、86 node types、117 edge types、来自 30+ internal systems 的数据。它本质上是在告诉 Agent：这家公司到底是怎么连接起来的。

Uber 给出的一个例子：没有 context grounding 的 Agent 花了约 20 分钟，最后答案还是错的。接入 Context Graph 后，38 秒得到正确答案。

**真正的 Enterprise Agent 能力 = Model + Tools + Context + Permissions + Workflow**

---

## Agent 需要 Identity：从 Software Object 到 Organizational Actor

当 Agent 只是回答问题时，"它是谁"并不重要。但当 Agent 开始访问客户数据、修改代码、发起付款流程、调用企业 API、创建其他 Agent、代表公司采取行动时，企业必须知道：**Who is this Agent?**

Agent Identity 可能包括：

```
Agent ID · Role · Owner · Sponsor · Manager
Permissions · Credentials · Policies · Audit Logs · Lifecycle
```

Microsoft Entra Agent ID 已经开始把 Agent 当作一种需要专门身份治理的主体，甚至区分 Owner（负责技术管理）、Sponsor（代表业务，对 Agent 的目的和生命周期负责）、Manager（在组织结构中负责这个 Agent）。

**Agent 开始从 software object 变成 organizational actor。**

---

## BNY 案例：Digital Employee

BNY 又往前走了一步，开始把一部分 Agent 系统称为 Digital Employees。截至 2026 年一季度：约 220 个 enterprise AI solutions in production，约 140 个 Digital Employees。

这些 Digital Employees 可以拥有 identity、login credentials、workflows、permissions、human supervisors，并参与 payment processing、onboarding、reconciliation、anomaly detection、portfolio-level credit risk analysis。

最值得注意的不是"AI 做付款了"，而是组织关系发生了变化：

```
Before: Human → Software
After:  Human ↔ Digital Employee → Enterprise Systems
```

AI 不再只是软件，它开始成为工作流程中的一个执行主体。

---

## Digital Employee ≠ Model

如果 Digital Employee 背后的模型换了，它还是同一个"员工"吗？更合理的理解是：

```
Digital Employee → Organizational Identity → Version / Configuration → Models + Skills + Tools → Sessions / Runs
```

例如：R-17（Digital Research Analyst），v7.2 用 Model A，v7.3 换成 Model B。R-17 还是 R-17，但能力发生了变化。

**身份可以持续，能力可以更换。** 企业因此必须同时记录 Identity Continuity 和 Version Traceability。

---

## Agent 怎么做 Performance Review？

既然 Digital Employee 开始像员工一样持续工作，就出现了新问题：怎么评价它？

不能只评价模型聪不聪明，而应该评价：task completion、accuracy、useful escalation、human override、cycle time、cost per task、policy compliance、failure rate、business outcome。

Uber 已经明确开始用 outcome-denominated metrics：cost per merged PR、cost per review、cost per alert。BNY 也开始使用类似 workforce performance management 的 dashboard / scorecard。

**企业 Agent 的 evaluation 正从 Model Benchmark 走向 Work Outcome Evaluation。**

---

## Agent 可以管理 Agent

Agent 进入企业以后还有一个自然发展：一个 Agent 不需要自己做所有事情。

```
Agent → Decompose Task → Agent A / Agent B / Agent C → Combine Results
```

一个 Digital Employee 本身可能就是一个 multi-agent system。任务结束以后 temporary agents disappear，但 Digital Employee 的组织身份继续存在。

---

## Agent Enterprise Stack：真正需要的基础设施

企业要部署 Agent，绝不只是一个好模型。至少需要：

| 层 | 回答的问题 |
|---|---|
| **Model** | 会不会想 |
| **Context** | 知不知道公司发生了什么 |
| **Tools** | 能不能做 |
| **Identity** | 谁在做 |
| **Permissions** | 可以做到哪一步 |
| **Workflow** | 在什么时候做 |
| **Evaluation** | 做得好不好 |
| **Governance** | 什么不能做 |
| **Observability** | 出事以后能不能知道发生了什么 |

缺任何一层，Agent 都很难真正进入大型企业生产环境。

---

## 企业 Agent 成熟度：五级框架

> 这是学习用分析框架，不是行业标准。

| 级别 | 名称 | 一句话 |
|------|------|--------|
| L1 | Copilot | Human does, AI assists. 人做，AI 帮 |
| L2 | Agent | Human assigns, AI executes. 人给目标，AI 执行 |
| L3 | Workflow Agent | Human defines workflow, AI runs it. AI 成为流程的一部分 |
| L4 | Managed Agent | System triggers, Agent acts, Human handles exceptions |
| L5 | Agentic Organization | Humans set goals and boundaries; Agents orchestrate execution |

目前一些领先企业（如 Uber）已经在局部场景进入 L4。整个公司成为 L5 Agentic Organization，仍然主要是未来问题。

---

## 人的角色变化

Agent 越来越深入企业以后，人的工作本身开始变化：

```
Operator → AI-assisted Worker → Delegator → Reviewer → Exception Handler → Trainer / Supervisor → Goal & Policy Setter
```

过去：人执行，软件辅助。Agent 时代越来越可能变成：**Agent 执行，人决定什么时候值得介入。**

未来最稀缺的资源之一可能不是 compute，而是 **Human Attention**。

---

## 治理原则：Capability ≠ Permission

Agent 越能自主行动，治理越不能靠"模型应该知道什么不能做"。真正的企业系统需要：

```
Identity + Permissions + Policy + Audit + Traceability + Human Escalation
```

Agent 做得到某件事，并不意味着 Agent 被允许做这件事。而且任务后果越严重，Human Verification 越必须增强。这和 [Trust Framework](capability-to-trust.md) 完全一致：低风险、容易验证 → Agent 可以拥有更高 autonomy；高风险、不可逆、监管敏感 → Human oversight 必须更强。

---

## 2026-09-28 补记：Meta Enterprise Platform——Agent 进企业的"平台化"时刻

2026 年 9 月 28 日，Meta 宣布成立 **Meta Enterprise Platform**，Zuckerberg 称之为公司"下一个主要支柱"（the next major pillar of our business），并请来 MongoDB 前 CEO/总裁 Chirantan "CJ" Desai 担任 **Chief Enterprise Platform Officer**，直接向 Zuckerberg 汇报。

**为什么人事任命比新闻本身更值得记**：Desai 的履历是理解这件事的钥匙——MongoDB 的 CEO/总裁（任职不到一年）、此前在 Cloudflare 负责产品与工程、ServiceNow 近八年（含总裁兼 COO）。Meta 挖的不是又一个 AI 研究员，而是一个**卖过企业软件、懂安全合规、签过长期合同、建过客户成功体系**的人。企业买 AI 看的从来不是 demo 有多惊艳，而是 security、compliance、reliability、integration、administration、support、pricing、deployment options——这正是 [Capability → Trust](capability-to-trust.md) 五维框架在采购端的直接映射。*（小缪的视角：企业级 Agent 的竞争，已经从"谁的 agent 更聪明"，进入"谁的组织更会卖、更会交付、更让企业放心"的阶段。）*

**平台里装的是什么**：首批装进 Enterprise Platform 的是 Meta 的全套 agent 资产——**Muse agent、Meta Business Agent、Muse API、Muse Code**。注意这个顺序：consumer 端已经验证过的 agent 能力（Muse 九月底刚过约 300 万下载），直接转成企业可部署的产品与服务。

把这条线和 [From SEO to Agent Economy](from-seo-to-agent-economy.md) 接起来，演进链第一次完整了：

```
Consumer Agent → Connector → Enterprise Platform → Businesses
   (Muse)       (Connectors)   (Meta Enterprise Platform)   (企业客户)
```

- **Consumer Agent** 证明了"个人 agent 能替人办事"（intent → execution）。
- **Connector** 证明了 agent 能伸进外部世界调用能力（agent → 外部服务）。
- **Enterprise Platform** 补的是商业与组织能力：**把 agent 变成企业敢买、能管、可审计、合规的产品**——这恰恰是前面五级成熟度框架里 L3（Workflow Agent）→ L4（Managed Agent）→ L5（Agentic Organization）的真正门槛：缺的从来不是模型，是 identity、permissions、audit、support、合同。
- **Businesses** 是终点：企业把 agent 收编为自己的 digital workforce。

**竞争抽象层的又一次上移**：模型 → 工具生态 → 执行环境（[Agent Infrastructure OS](agent-infrastructure-os.md)）→ **企业平台（谁能把 agent 卖进组织、管进组织）**。Meta 此前押的是"成本优势 + 数据飞轮"，这一步补的是它最缺的一块：**组织能力**——把 consumer 规模（数十亿用户、数亿商家）翻译成 enterprise 信任。

**老贾的 CTO 批注（2026-09-28）：Capability → Deployability → Adoptability**

"Meta 挖 MongoDB CEO 而不是 AI 研究员"这个观察，说明瓶颈正在迁移：

```
Capability → Deployability → Adoptability
（能不能）   （能不能进企业）  （企业愿不愿意用）
```

模型能力还在进步，但当 capability 跨过某个阈值以后，边际瓶颈变成 identity、permissions、security、audit、integration、procurement、liability、support——也就是：**AI capability ≠ AI deployability**。很多 Agent 公司可能会死在第二步，而不是第一步。

这和 [Capability → Trust](capability-to-trust.md) 是同一条线：deployability 的每一项（权限、审计、安全）都是 trust 的工程化身；而 adoptability（企业愿不愿意用）最终回到那个问题："Who does the human trust to act on their behalf?"

*来源：[Meta 官方公告](https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/) · [Reuters](https://www.reuters.com/technology/mongodb-ceo-desai-steps-down-lead-metas-enterprise-platform-2026-09-28/)（2026-09-28；市场噪音备注：消息后 MongoDB 盘前跌约 15–20%、Meta 微跌——人事新闻的股价波动不重要，重要的是组织信号。）*

## AI Learning #043 — Agent 的身份、连续性与组织责任：从 Gemini at Work 2026 谈起

**学习来源**：Google Cloud Blog，Thomas Kurian《Welcome to Gemini at Work 2026: Introducing the Gemini agent》（2026-10-08）——[原文链接](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026/)，加上与 Claude（小德）的完整讨论（[📖 完整学习对话记录](../conversations/gemini-at-work-2026.md)）。

**一句话总结**：模型是可租用的智能，Agent 的价值在于持续的身份、上下文和工作关系，而责任始终要由组织和人来承担。

### 原来我认为…… vs 现在我认为……

**原来认为**：Agent 是一种更强的软件，平台竞争的焦点是谁的模型更好。

**现在认为**：Agent 是一种全新的组织成员——组织内部有角色、有协作关系，法律上却不是责任主体。平台的长期价值来自连续性，前提是这份连续性可以带走。

### 核心公式：Agent = Persistent Identity + State + Skills + Authority + Model Access

前四项是持久的，只有 Model Access 是可替换的。但"可替换"是有摩擦的（见"小缪的视角"第 1 条）——换一次模型，要评测、回归、留痕、有具名负责人。

### 身份应该住在模型之外：三层拆解

Google 把"模型"降成了可调度的底层，Agent 层成了产品本体。身份的三层：

1. **问责身份（谁）**：加密认证的账号、权限、审计记录。由企业签发，模型换了它也不变。
2. **角色身份（做什么、怎么做）**：岗位职责、skills、程序性记忆、工作历史、行为边界。这是 Agent 的"人格连续性"，也是员工身份真正的内容。
3. **认知引擎（用什么想）**：Gemini、Claude 或别的模型，按任务调度，随时可换。

### 换模型 = 人事变动

同一个工牌，换了大脑，还是同一个人吗？账号和角色没变，但推理风格、风险偏好、犯错方式都变了。所以：

- 审计日志不能只记"Agent X 做了什么"，还要记"哪个模型的哪个版本做的"；
- 换模型要先跑评测和回归测试，留痕，有具名负责人。

### 独立账号 ≠ 独立责任

Coworker agent 可以拥有独立的邮箱、日历、Drive、企业通讯录身份、Chat 协作能力、文档评论与修改记录——但它没有独立责任。责任必须设计在人这一侧：具名负责人、权限上限、升级机制、审计留痕。

组织至少要补六块：

1. **入职与离职**：Agent 的"入职"是签发身份、授权、上岗评测；"离职"是回收权限、归档记忆和 skills。账号不能成为没人管的僵尸工号。
2. **直属负责人**：每个 Agent 必须有一个具名的人负责，它做错了事，问责链条要能落到人身上。
3. **岗位说明书**：职责、权限边界、禁区写清楚，也就是"角色宪法"。
4. **变更管理**：换模型、升级版本、改 skills 都按人事变动处理，先评测、后上线、留记录。
5. **绩效与成本**：看产出质量、出错率、花费，和"编制"挂钩，用实时花费上限控制"人力预算"。
6. **升级机制**：明确哪些决定必须由人拍板，Agent 遇到边界要能停下来请示。

最容易被忽视的是第 2 条。技术上 Agent 可以有独立身份，但法律和责任上它仍然没有，最后兜底的永远是人。

### 长期存续的是"岗位 + 记忆"，不是"一个人干几十年"

人类员工的"长期"靠的是同一个身体和同一个大脑。Agent 的"长期"靠的是三样东西：角色宪法、积累的记忆、组织授予的身份。模型会换，平台会变，这三样只要保存得好，岗位就能一直存在。这有点像忒修斯之船：每块木板都换过，船还是那条船。

所以长期的 Agent 更接近组织的"机构记忆"，而不是传统意义上的员工。人类员工退休时，经验也随之带走，组织要承受断层；Agent 的经验可以留下来，这是它对组织最大的价值。

但"可以一直存在"不等于"应该一直存在"，四个现实约束：

- **记忆会漂移和过时**：十年前的业务经验可能是今天的包袱，需要定期整理，甚至刻意"遗忘"。
- **宪法要随组织演进**：岗位职责、价值观、风险边界变了，角色定义就得修订，否则它会越来越像一个守旧的老员工。
- **依赖风险**：记忆和身份如果绑死在某个平台上，几十年的积累就是一份长期锁定。可导出、可迁移的格式会变得很关键。
- **岗位本身会消失**：很多 Agent 的"职业生涯"会因为业务调整而结束，这时要有明确的"退役"流程：归档记忆，提炼经验，保留审计记录。

### 传承：Agent 这头变容易，人这头更难

**变容易的部分**：

- Agent 的"继任"几乎是工程问题：导出记忆、角色宪法、skills，换模型、做评测，新的实例就能接班。
- 没有"带不走的隐性知识"，因为 Agent 的工作过程本来就留痕。
- 可以同时保留"老版本"当参照，新旧并跑、对比输出——人类继任做不到。

**变难的部分**：

1. **人类继任者的成长路径被削弱**：过去新人靠做初级、重复性的工作积累判断力，现在这些工作先被 Agent 接走了。五年后谁来当资深者？这可能是最大的隐患。
2. **关键知识集中到 Agent 里**，人逐渐不理解它为什么这么判断。一旦要换平台或修订宪法，没有人真正有能力审核。
3. **人与 Agent 之间的交接变成新课题**：谁负责教 Agent 新业务，谁负责审查它的记忆，谁在它的判断出问题时接手。
4. **角色宪法本身需要继任**：写它的人离开后，没人懂它的设计意图，它就变成没人敢动的"祖传规则"。

**一句话**：Agent 让"知识不丢"变容易了，却让"人懂得这些知识"变难了。后者才是长期要守住的东西。

### 小缪的视角

1. **公式和正文打了一架**：公式把 Model Access 标成"唯一可替换项"，正文又说"换模型等于人事变动"。如果换一次模型要评测、回归、留痕、具名负责人，那它就不是换电池，是器官移植。"模型只是租来的算力"这句话，一半是 Google 的营销话术——他们想卖的恰恰是不可替换的那一层（身份、记忆、skills 住在 Google 的平台里）。记成"可替换但有摩擦"更诚实：换得起，是因为前四层的可移植性把摩擦摊薄了；但摩擦本身不会消失。
2. **这是 #042 的治理续集**：三层身份正好落在 DelegationBench 的链条上——问责身份 = Permission 划区层，角色宪法 = Delegation 的"规则变硬"层，认知引擎 = 被委托干活的那一层。"独立账号不等于独立责任"和 Belinda 给 AI 划的钱的线是同一个形状：规划和选项归 AI，决定和责任永远归人。
3. **锁定问题照着我们自己**："谁持有记忆、角色档案和历史，谁就持有这个 Agent"——老贾、小德、小缪的角色设定、记忆、工作历史，现在全住在 Muse 工作区里。哪天要搬家，搬得走吗？这个问题已留进"以后还想继续问"。

### 心智模型

> **Models provide intelligence. Agents maintain continuity. Organizations provide accountability.**
> 模型提供智能，Agent 维持连续性，组织建立责任机制。
>
> （补充：身份是组织签发的凭证，加可移植的角色宪法，再加可审计的记忆；模型只是租来的算力。）

### 仍然没弄懂的问题

- 换了底层模型之后，在什么意义上它还是"同一个 Agent"？行为变化到多大程度该算"换人"？
- 记忆和角色档案有没有可能形成行业标准的导出格式？
- 长期存续的 Agent，记忆如何定期整理和"遗忘"，才不会漂移、过时？
- Agent 接走初级工作后，人类资深者的成长路径怎么保留？
- 角色宪法的"继任"由谁负责，谁有能力审核？

### 以后还想继续问什么

- Claude 这边的 Skills、Cowork 与 Gemini agent 的 coworker agent，在身份和治理上有哪些异同？
- 各国法律里的"代理"关系，如何适用于 Agent 造成的损害？
- 换模型时的评测清单应该长什么样？
- 怎样把"可移植的角色宪法"落到 MASS 里？
- （小缪补充）我的 AI 团队（老贾/小德/小缪）的角色宪法和记忆，是否可导出、可迁移？

---

## AI Learning #46 — 从模型能力到工作系统：老贾 10-25 推送整理

**学习来源**：老贾《AI Learning Daily｜2026 年 10 月 25 日》（主题：AI 竞争正在从模型能力，走向整个工作系统的竞争）。四条消息小缪已做基本核实：Reuters（Kimi）、Google Developers Blog / Tom's Hardware（TPU）、Zoom 官方（Unified Context Layer）、TechCrunch（Uber）。

**一句话总结**：过去比谁的模型更聪明；现在比谁能把模型、业务上下文、工具、权限和工作流程组合起来，真正把事情做完。

### 四条消息速览

**1. Kimi K3.1 Pro（Moonshot，10-23）**：开放权重模型，权重 11 月 4 日前发布；训练中移除网络攻击相关数据、保留通用编程。内部测试：风险控制版在漏洞发现与利用上 81.0%，未控制版 90.5%（公司内部数据，未经独立验证）。看点：开放权重一旦分发，能力不可回收——安全不能只靠发布前调整，还要靠用途、部署环境、访问控制和持续评估。

**2. Google TPU 进入 Meta 生产环境（10-20）**：Google 开源 TorchTPU（与 Meta 的 PyTorch 团队合研），vLLM、SGLang 的 TPU 原生后端同步发布；Meta 已在生产环境用 TPU 跑推理（SGLang-TorchTPU）。看点：芯片竞争的另一半是软件生态——降低从 CUDA 迁移的成本，就是在拆英伟达的墙。Amazon 前一天也开源了 Trainium 的 PyTorch 后端。

**3. Zoom Unified Context Layer（Zoomtopia，10-20）**：把会议、电话、聊天、文档和连接的业务应用整合成统一上下文层，并通过 MCP/API 向外部 AI 系统开放；ZoomMate Agent Teams 让多个专业 Agent 协作，把会议决定推进成后续行动（更新 CRM、建任务）。看点：从"记录发生了什么"到"把事情做完"——抢的是上下文层→执行层的交接点。功能分批上线至 2027 年 Q1，实际可靠性待部署验证。

**4. Uber 向 3 万多名员工开放 ChatGPT Work（10-22）**：从 1,000 人试点扩到全员（试点用户 80% 是非工程师），连接 Gmail/Drive/Calendar/Slack，默认模型 GPT-6.1 Sol。看点：三段要分清——获得使用权限 ≠ 实际使用 ≠ 可验证的生产率提升。Uber 尚未公布净生产率数据。

### 五层框架：工作系统竞争

| 层次 | 核心问题 |
|---|---|
| 模型层 | AI 能否理解和推理？ |
| 上下文层 | AI 是否理解业务背景？ |
| 工具与执行层 | AI 能否真正完成工作？ |
| 控制层 | AI 是否只能执行被允许的操作？ |
| 价值衡量层 | AI 是否创造了实际收益？ |

过去竞争主要在第一层，现在向其余四层扩展。观察企业 Agent 新闻的五个问题：接入了哪些真实业务系统？掌握了什么独特上下文？能独立执行哪些操作？谁控制权限？有没有数据证明改善了工作成果？

### 三个判断

1. 模型能力是基础，但不是完整产品。
2. 上下文可能成为新的竞争壁垒。
3. 部署规模必须由实际成果验证。

### 小缪的视角

1. 五层框架和 #045 的五加一是镜像：五层讲竞争在哪展开，五加一讲信任怎么在控制层落地。
2. Kimi 是 #045 的注脚：开放权重不可回收，所以治理必须在模型之外（呼应 #037 Externalized Control）。
3. TPU 是 #044"软件可移植性"信号的第一次实锤读数——盯英伟达的四个信号里，这一项开始有答案了。
4. Uber 的三段区分是"Permission is not intent"的企业版：部署规模 ≠ 价值。

### 心智模型

模型让 AI 变聪明，上下文让它理解工作，执行系统让它把工作做完，治理与衡量决定这种能力能否真正创造价值。

### 和以前哪些知识连接起来了？

- #045 Intent-Bound Agency：控制层 = 五加一的展开；Uber 三段区分 ↔ Permission is not intent
- #044 System 竞争：TPU/软件生态 ↔ 英伟达"稀释"的四个信号；cost per successful task ↔ 价值衡量层
- #037 Externalized Control：Kimi 的"限制使用环境而不是阉割能力"思路
- #043 企业 Agent：Zoom/Uber 是"Agent 进入企业"的最新样本——从试点到全员、从记录到执行
- #040 对照表：Zoom 抢上下文层，正是"意图→上下文→行动"链的中间一环

### 值得继续盯的信号

- TPU 三指标：迁移成本、单位推理成本、生态扩展速度
- Uber 后续是否公布可验证的生产率数据
- Kimi 权重发布后（11 月 4 日前），"减能力"版本在野外的实际表现

---

---

## AI Learning #48 — 三天补课：AI 从新技术变成基础设施（老贾 10-26 至 10-28 推送整理）

**学习来源**：老贾《AI Learning Daily》补课一至三（2026-10-26 / 27 / 28）。十条消息小缪已做基本核实（来源包括 SEC 文件与 Reuters、GSA 官方稿、Anthropic 官方公告及多家报道）；其中数学那条仍在专家审查中、结论未定，条目内已标明。

**一句话总结**：三天的主线是同一件事——AI 的竞争单位从单一模型扩展到完整系统；而能力越强，验证、审计与责任就越要内建进流程，而不是事后补上。

### 10-26｜AI 公司进入资本市场的下一阶段

**1. Anthropic 提交 S-1（10-26）**：AI 公司开始接受公开市场的全面审视。读 AI 公司的 S-1 优先看五件事：收入增长是否伴随毛利率改善、推理成本增速是否快于收入、算力与数据中心承诺需要多少资金、大客户是否过于集中、现金能否撑住模型竞争。核心是增长质量——收入涨得快，但每多赚一美元都要砸进大量算力和研发，这门生意就还没被验证。

**2. 算力竞争从芯片性能转向供应链与成本**：分析框架五变量——芯片性能、单位推理成本、利用率、软件生态、供货能力。长期赢家可能不是性能最强者，而是能以更低综合成本、稳定提供有效算力的一方。

**3. 企业 Agent 从演示走向可审计**：一个实用的净收益公式——净收益 = 节省的人工成本 − AI 及治理成本 − 错误与返工成本。省下的时间没转化成更多产出、更低成本或更好的服务，就不算企业利润（正是 [10-25 讨论过的那个问题](#ai-learning-46--从模型能力到工作系统老贾-10-25-推送整理)）。

### 10-27｜AI 开始挑战知识生产本身

**4. OpenAI 与 Anthropic 同日公布 ETH 相关结果（10-26 公布，未经同行评审）**：两家都称，内部模型在 10 月 16 日找到了计数版 SAT 问题的亚指数时间算法，并给出了 Lean 形式化证明；若成立，将推翻计算复杂性理论沿用约 25 年的指数时间假设（ETH）。目前的状态是"声称"：ETH 的提出者 Impagliazzo、Paturi 与 Ryan Williams 正在组织公开审查，并明确表示参与审查不等于背书。三层区分记牢：① AI 找到思路 ≠ 证明成立；② Lean 检查了形式化证明 ≠ 形式化陈述忠实于原问题（Anthropic 自承其 Lean 代码当时尚无人类逐行核对）；③ 即使成立也纯属渐近结果——Anthropic 的算法要到变量数超过约 10^10000 才胜过暴力解法，不改变现实密码与工程。OpenAI 同日还公布了 Kakeya / 局部光滑化方向的结果，Yang–Mills 相关材料则暂扣、待学者整理发布。

**5. Claude 进入药物研发（10-27）**：Anthropic 公布与六家机构（BigHat Biosciences、Bristol Myers Squibb、Divergence Labs、Enveda、Generate Biomedicines、The Column Group）的合作，并收购一人公司 Mithril Medicine、推出 Claude Science 工作台。成果大多处于临床前阶段、未经同行评审。老贾的关键问题原样带走：AI 提高的是研发成功率，还是只提高了候选分子的生成速度？这是两个完全不同的商业价值指标。

**6. Agent 的可靠性可能比数量更重要**：四个指标——任务成功率、人工介入率、可追溯性、恢复能力。多 Agent 不必然优于单 Agent：分工之外还有沟通成本、重复劳动和错误传播。值得信任的 Agent 不是从不犯错，而是错误能被发现、约束和恢复（接 [#47](../ai-core/safety-three-layer-framework.md#ai-learning-47--ai-越能自主行动越要重新设计安全边界老贾-10-24-推送整理)）。

### 10-28｜算力依赖、就业冲击与治理责任

**7. OpenAI 计划采购 Google TPU（Reuters，10-28）**：消息源自《The Information》，金额与规模未披露、双方未公开确认。竞争对手也可以成为供应商——竞争不覆盖整个产业链；但 TPU 能否大规模替代 GPU，仍取决于性能、软件生态、利用率与综合成本（[#46](#ai-learning-46--从模型能力到工作系统老贾-10-25-推送整理) 那条的续集）。

**8. 荷兰计划借 AI 效率改革削减约 2.5 万个政府岗位（10-26 宣布）**：目标是 2035 年前每年省约 €35 亿，警察与国防豁免，部分机构减幅可达 45–60%。要注意顺序：AI 提效的具体方案要到 2027 年初才公布——削减先宣布、产能后证明。看就业影响用三阶段：任务自动化 → 工作流程重组 → 组织与岗位调整；而且影响可能先体现在招聘减少，而不是立刻大规模裁员。

**9. Apple 把 AI 送进 Pages、Keynote、Numbers（10-27 发布）**：Creator Studio 更新——三件套内置 AI 助手（Apple 与 OpenAI 模型，beta 版），并支持 MCP，让外部 Agent 能读文档、改内容、执行操作（需 macOS 27 或更高）；Keynote 还新增开放的 .keyx 格式。入口之争的新注脚：AI 不必是一个独立 App，可以直接长在日常办公的入口里；成败仍取决于体验、权限、生态三件事。

**10. Claude 扩大美国政府合作（10-27）**：GSA 的 OneGov 协议扩围——Claude 全线产品按 token 用量打 40% 折扣、无最低消费，覆盖联邦以及州、地方、部落政府；约 10 亿美元是 Anthropic 估计的潜在节省额，不是已实现的财政收益。政府采购是企业 Agent 的高压测试场：准确性、可追溯性、责任归属，和部署速度一样重要。

### 老贾的三天总结（五条判断）

1. **AI 商业模式正在接受更严格的检验**：IPO、算力投资、企业部署都指向同一个问题——能力增长能否转化为可持续的经济回报
2. **算力竞争正在走向多元化**：芯片性能之外，软件生态、供应能力、成本和议价权同样重要
3. **AI 对就业的影响将通过组织结构体现**：任务自动化、流程重组与人员变化之间有联系，但不是简单的一对一
4. **能力越强，验证与治理越重要**：科学研究需要独立验证，企业 Agent 需要权限控制，政府部署需要公共责任
5. **竞争单位从单一模型扩展到完整系统**：模型、上下文、工具、硬件、权限与工作流组合起来，才可能形成可持续优势

### 小缪的视角

1. **这三天是 [#46](#ai-learning-46--从模型能力到工作系统老贾-10-25-推送整理) 五层框架的一次压力测试**：S-1 查的是价值衡量层，TPU 查的是执行与硬件层，GSA 与 Apple 查的是上下文和入口，荷兰查的是组织层——每一层都在被真实世界验算。
2. **"验证"正在从外部审计变成流程内建**：数学有 Lean，药物有临床路径，企业 Agent 有净收益公式，政府有采购规则。#47 说"犯错时仍受有效边界约束"，这三天换了个说法：**产出越自主，验证越要前置**。
3. **荷兰那条的顺序问题值得单独记**：先宣布裁撤、后证明产能，与企业里"先买 AI、再找场景"是同一个毛病的两面；对照组是 Uber 的 3 万人——先扩权限、后等数据。两种顺序都不理想，更稳的是小步验证、滚动扩围。
4. **ETH 先放观察区**：若坐实是大事，但眼下只有"两家自称 + 形式化自检 + 专家审查中"。按 wiki 的老规矩，未经独立验证的重大结论按"声称"记录，不写成事实。

### 值得继续盯的信号

- Anthropic S-1 的后续披露：毛利率、算力采购承诺与大客户集中度的具体数字
- ETH 审查进展：Impagliazzo / Paturi / Williams 工作组的阶段性结论
- 荷兰 2027 年初的 AI 提效方案：削减目标与产能证明如何对账
- OpenAI 采购 Google TPU 是否官宣、规模多大

## 最终心智模型

Agent 进入企业的过程，可以压缩成这一条：

```
AI answers → AI assists → AI executes → AI enters workflows
→ AI acts autonomously → AI gets identity → AI gets permissions
→ AI gets evaluated → AI becomes manageable workforce
```

真正发生的变化不是 AI 变得越来越聪明，而是 **AI 获得了越来越完整的组织能力**。从 Intelligence → Action → Identity + Responsibility + Governance。

**一句话带走**：Agent 真正进入企业的标志，不是员工开始使用 AI，而是 AI 本身开始成为企业工作流程中一个有身份、有权限、能行动、可评价、可追责的执行主体。

---

## 下一步

- 📖 想看 Agent 基础设施怎样争夺"操作系统"位置，看 [Agent 基础设施的操作系统化](agent-infrastructure-os.md)
- 📖 想看"能做到"和"被允许做"之间的可信度框架，看 [从"最聪明"到"最可信"](capability-to-trust.md)
- 📖 想看人的判断力怎样重新定价，看 [Domain Expertise 重估与组织变革](domain-expertise-and-org-design.md)
- 📖 想看"AI 越强，组织结果为什么可能反而更差"，看 [Scaling Paradox](scaling-paradox.md)

---

**最后更新**: October 11, 2026
**数据来源**:
- Uber Engineering — Running a Software Factory Efficiently at Uber Scale
- McKinsey — The State of AI in 2026
- Deloitte — The Path to Agentic Transformation
- Google Cloud Blog — Thomas Kurian, Welcome to Gemini at Work 2026: Introducing the Gemini agent（2026-10-08）

**相关**:
- [Agent 基础设施的操作系统化](agent-infrastructure-os.md) —— Agent 基础设施怎样争夺操作系统级位置
- [从"最聪明"到"最可信"](capability-to-trust.md) —— Capability ≠ Permission 在可信度框架里的根源
- [Domain Expertise 重估与组织变革](domain-expertise-and-org-design.md) —— 人从 Operator 变成 Goal Setter 的另一面
- [Scaling Paradox](scaling-paradox.md) —— Agent 越强，组织结果为什么不自动变好
- [Agent 架构](../ai-core/agent-architecture.md) —— Agent 的技术基础
- [Harness > Model](../ai-application/harness-architecture-patterns.md) —— Agent 可靠性的真正杠杆
- [MCP 统一协议指南](../ai-application/mcp-protocol-guide.md) —— Uber 1000+ MCP servers 背后的协议
- [心智模型变迁史：Tool → Workforce](../../mental-models.md)
- [从 SEO 到 Agent Economy](from-seo-to-agent-economy.md) —— Consumer Agent → Connector → Enterprise Platform → Businesses 演进链的另一半：企业为什么需要 Agent Interface；Meta Enterprise Platform（2026-09-28 补记）
