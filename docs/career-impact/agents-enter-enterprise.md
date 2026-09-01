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

**最后更新**: September 1, 2026
**数据来源**:
- Uber Engineering — Running a Software Factory Efficiently at Uber Scale
- McKinsey — The State of AI in 2026
- Deloitte — The Path to Agentic Transformation

**相关**:
- [Agent 基础设施的操作系统化](agent-infrastructure-os.md) —— Agent 基础设施怎样争夺操作系统级位置
- [从"最聪明"到"最可信"](capability-to-trust.md) —— Capability ≠ Permission 在可信度框架里的根源
- [Domain Expertise 重估与组织变革](domain-expertise-and-org-design.md) —— 人从 Operator 变成 Goal Setter 的另一面
- [Scaling Paradox](scaling-paradox.md) —— Agent 越强，组织结果为什么不自动变好
- [Agent 架构](../ai-core/agent-architecture.md) —— Agent 的技术基础
- [Harness > Model](../ai-application/harness-architecture-patterns.md) —— Agent 可靠性的真正杠杆
- [MCP 统一协议指南](../ai-application/mcp-protocol-guide.md) —— Uber 1000+ MCP servers 背后的协议
- [心智模型变迁史：Tool → Workforce](../../mental-models.md)
