# Model 能力 ≠ Agent 能力：为什么聪明的 AI 也可能"有脑无手"

**核心概念**: Model 决定 AI 能不能想明白；Tools、Runtime、Permissions 和 Environment 决定它能不能真正做出来。因此 Model Capability ≠ Agent Capability。

**关键洞察**: 一个更实用的心智模型是 Agent Capability ≈ Model × Harness/Runtime × Tools × Permissions × Environment——这里的乘号不是数学公式，而是在强调任何一项接近 0，Agent 的实际行动能力都可能大幅下降。

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [Tool](../../glossary.md#tool) · [Harness](../../glossary.md#harness) · [MCP](../../glossary.md#mcp)

---

## 目录

1. [一个真实案例：让 AI 发一条微信朋友圈](#一个真实案例让-ai-发一条微信朋友圈)
2. [Model 是"大脑"](#model-是大脑)
3. [Harness / Runtime 是"工作环境"](#harness--runtime-是工作环境)
4. [Tools 是 Agent 的"手"](#tools-是-agent-的手)
5. [MCP 可以给 Agent 接上新的"手"](#mcp-可以给-agent-接上新的手)
6. [Permissions 是"门禁卡"](#permissions-是门禁卡)
7. [Environment 是 Agent 面对的真实世界](#environment-是-agent-面对的真实世界)
8. [为什么一个成功一个失败](#为什么一个成功一个失败)
9. [Capability 和 Authority](#capability-和-authority)
10. [Computer Use 为什么重要](#computer-use-为什么重要)
11. [为什么不能无限给 Agent 权限](#为什么不能无限给-agent-权限)
12. [Agent 时代的比较方式正在改变](#agent-时代的比较方式正在改变)

---

## 一个真实案例：让 AI 发一条微信朋友圈

2026 年 8 月 20 日做了一个很小但非常直观的实验。

目标很简单：让 AI 在 Mac 微信客户端里发布一条朋友圈。

Claude Code 成功完成了任务，大致经历了：

```
截图 → 看懂微信界面 → 找到按钮 → 点击 → 选择图片 → 输入中文 → 点击发布
```

但在另一套 Codex 环境中尝试同样的任务时，失败了。

有趣的是：Codex 并不知道得更少。它知道应该打开微信、找到朋友圈、点击相机、输入文字并发布。问题是——它知道该怎么做，却没有完成这些动作所需要的执行通道。

这正好揭示了 Model 和 Agent 的区别。

> ⚠️ 这个案例反映的是 2026-08-20 当天的产品状态，不是对两个产品的永久结论。产品能力几个月甚至几周就可能变化；但下面这套 Model → Runtime → Tools → Permissions → Environment 的心智模型，大概率仍然成立得更久。

---

## Model 是"大脑"

LLM 本身主要负责：

- 理解任务
- 推理
- 制定计划
- 生成文字或代码
- 判断下一步应该做什么

面对"帮我发一条朋友圈"，模型可能完全知道：打开微信 → 进入朋友圈 → 点击发布 → 选择照片 → 输入文字 → 点击 Post。

但：

**知道下一步该点哪里，不等于真的能够点那里。**

模型可以拥有足够的 intelligence，却没有足够的 agency。

---

## Harness / Runtime 是"工作环境"

同一个模型被放进不同的产品或运行环境，实际能力可能完全不同。

```
Chat 界面 · Coding Agent · CLI · IDE · Desktop Agent · Browser Agent · Sandbox · Cloud VM
```

这些环境决定：模型能够接触到什么，以及它可以调用什么。

可以这样理解：

```
Model = 大脑
Harness / Runtime = 大脑被装进了什么样的身体和工作环境
```

因此讨论一个 Agent 时，只问"它用的是什么模型？"已经不够了。还应该问：**"这个模型运行在哪里？"**

---

## Tools 是 Agent 的"手"

[Tools](../../glossary.md#tool) 把模型的判断转化成现实动作：

```
Shell · Filesystem · Browser · Search · API · MCP Server
Screenshot · Mouse · Keyboard · Database · Email · Calendar
```

如果模型拥有 [Computer Use](computer-use.md) 工具，它可能形成这样的闭环：

```
截图
 ↓
理解当前界面
 ↓
决定下一步动作
 ↓
点击
 ↓
重新截图
 ↓
检查结果
 ↓
继续行动
```

这时 AI 就不再只是回答问题，而开始成为真正意义上的 [Agent](agent-architecture.md)。

---

## MCP 可以给 Agent 接上新的"手"

[MCP](../ai-application/mcp-protocol-guide.md) 可以让 AI 连接外部工具和数据源。

例如 Computer Use MCP 可以提供 screenshot、left_click、right_click、double_click、type、key、scroll、wait、zoom 这样的动作。

于是：

```
Claude → Computer Use MCP → macOS → 微信
```

模型本身并没有突然学会"微信 API"。它只是获得了一种更通用的能力：**像人一样看 GUI，然后操作 GUI。**

这非常重要。因为现实世界里大量软件并没有为 AI 提供 API。Computer Use 提供了另一条路径：

**如果人类能通过屏幕、鼠标和键盘完成，Agent 原则上也可能通过同样的界面完成。**

---

## Permissions 是"门禁卡"

有工具还不够。操作系统还必须允许这个工具行动。

例如在 macOS 中，Computer Use 可能需要：
- **Screen Recording**：允许读取屏幕
- **Accessibility**：允许注入鼠标和键盘事件

因此：

```
有 Tool ≠ Tool 可以使用
Tool + Permission 才能真正行动
```

一个 Agent 即使拥有 mouse-click 工具，如果操作系统禁止这个进程控制其他应用，最终仍然点不到目标。

这也正是 [Harness 系统](../ai-application/harness-system.md) 在产品层面做的事——定义"能做什么"的边界。

---

## Environment 是 Agent 面对的真实世界

最后还有目标环境本身：操作系统、浏览器、微信、VS Code、网站、文件系统、企业内部软件……

不同环境可能有不同限制。例如某些应用使用自绘 UI，Accessibility API 很难识别内部按钮。这时 Agent 可能无法通过结构化 UI 信息操作，只能：

```
Screenshot → Vision → Coordinate → Click
```

也就是：像人一样"看见按钮在哪里，然后点那里"。

---

## 为什么一个成功一个失败

这次实验最重要的结论不是"Claude 比 Codex 强"，也不是"Codex 不能使用 Computer Use"。

我们实际观察到的是：

**Claude Code 环境**：
```
Model → Claude Code Runtime → Computer Use MCP → Screenshot + Mouse + Keyboard → macOS permissions → WeChat → Success
```

**当时使用的 Codex 环境**：
```
Model → Codex Runtime → 缺少等价的 Computer Use 执行通道 / 受到当前环境限制 → 无法完成全屏观察和真实 GUI 操作 → Failure
```

因此：**失败发生在 Agent Stack，而不一定发生在 Model。**

---

## Capability 和 Authority

还要进一步区分两个概念：

| | 定义 | 例子 |
|---|---|---|
| **Capability** | AI 有没有能力做这件事？ | 它是否知道如何操作微信？ |
| **Authority** | 当前环境是否允许它做这件事？ | 它是否被允许读取屏幕、点击微信、输入文字？ |

于是可能出现：

```
High Capability + Low Authority = 它知道怎么做，但没有权限做
High Capability + High Authority = 非常强大，同时也意味着更大的风险
```

---

## Computer Use 为什么重要

传统软件世界主要依赖：

```
Software → API → Software
```

而 [Computer Use](computer-use.md) 增加了一条路径：

```
AI → GUI → Software
```

这意味着 Agent 理论上可以操作大量没有 API 的软件、老旧软件、桌面应用、企业内部工具、人类日常使用的软件。

这是 Agent 从"会说"走向"会做"的关键一步。

---

## 为什么不能无限给 Agent 权限

因为：**Agency 越强，错误的影响范围也越大。**

今天 Agent 点击的是 Post。明天它面对的可能是 Delete、Send、Transfer、Erase。

所以 Agent 产品真正困难的问题不是"怎样让 AI 做更多事情"，而是：

**怎样让 AI 获得足够的行动能力，同时让错误、误解和越权的影响保持可控？**

这就涉及：

- Sandbox
- Permission
- Human approval
- Audit log
- Reversibility
- Least privilege
- Confirmation before consequential actions

因此：**Capability 和 Governance 必须一起增长。**

这跟 [AI Safety / Alignment](safety-alignment-guide.md) 是同一个大命题在 Agent 层面的具体展开——Safety 里讨论的是模型层面"目标对不对齐"的问题，这里面对的是 Agent 层面"行动权限怎么管"的问题。两层都需要解决。

---

## Agent 时代的比较方式正在改变

过去我们常问："哪个模型更聪明？"比较 reasoning、coding、benchmark、context window。

但 Agent 时代更重要的问题正在变成：**它到底能完成什么？**

一个更完整的比较框架：

```
Model × Context × Harness/Runtime × Tools × Permissions × Memory × Environment × Reliability × Governance
```

最终决定：What can this agent actually get done?

因此：**最强的 Model，不一定组成最好用的 Agent。**

---

## 最简单心智画面

想象一个非常聪明的人坐在一个房间里：

| 概念 | 类比 |
|------|------|
| **Model** | 他的脑子有多聪明 |
| **Runtime / Harness** | 他被安排在什么工作环境里 |
| **Tools** | 桌子上有什么工具 |
| **Permissions** | 哪些门有钥匙，哪些设备允许他使用 |
| **Environment** | 门外真实世界是什么 |

聪明决定他想不想得明白。工具、权限和环境决定他做不做得到。

---

## 最终心智模型

不要再把 AI Model 和 AI Agent 当成同一件东西。更完整的链条是：

```
Model → Harness/Runtime → Tools → Permissions → Environment → Actions → Results
```

- Model 提供 intelligence
- Tools 提供 action channels
- Permissions 定义 authority
- Runtime 决定这些东西如何被组合和限制
- Environment 决定 Agent 最终面对什么现实世界

**Intelligence is not Agency.**

A smart model knows what to do.
A capable agent can actually do it.

---

## 下一步

- 📖 想了解 Agent 的核心架构，看 [Agent 系统架构](agent-architecture.md)
- 🔧 想了解 Computer Use 怎么让 AI 操作 GUI，看 [Computer Use](computer-use.md)
- 🔌 想了解 MCP 怎么给 Agent 接工具，看 [MCP 统一协议指南](../ai-application/mcp-protocol-guide.md)
- 🛡️ 想了解 Harness 怎么定义 Agent 边界，看 [Harness 系统](../ai-application/harness-system.md)
- 🔒 想了解 Safety 和 Alignment，看 [AI Safety / Alignment](safety-alignment-guide.md)
- 💼 想了解 Coding Agent 为什么最先成功，看 [Coding Agent 与 Agent 基础设施](../career-impact/agent-infrastructure-os.md)

---

**最后更新**: August 20, 2026

**相关**:
- [Agent 系统架构](agent-architecture.md)
- [Computer Use](computer-use.md)
- [Agent Intelligence 三层框架](agent-intelligence-layers.md)
- [Agent 的"单轴刻度"问题](agent-single-axis-problem.md)
- [MCP 统一协议指南](../ai-application/mcp-protocol-guide.md)
- [Harness 系统](../ai-application/harness-system.md)
- [AI Safety / Alignment](safety-alignment-guide.md)
- [Coding Agent 与 Agent 基础设施](../career-impact/agent-infrastructure-os.md)
- [Workflow 编排](workflow-orchestration.md)
- [Context Window](context-window-guide.md)
- [Memory 系统](memory-system-guide.md)
- [AI Safety 的三层防护框架](safety-three-layer-framework.md) —— 即使 Agent Trustworthiness 很高，无限权限仍然不安全：Delegation Framework 的可逆性缺口
- [心智模型变迁史：Intelligence → Agency](../../mental-models.md)
- [Harness > Model](../ai-application/harness-architecture-patterns.md) —— 定量证据：弱模型 + 强 Harness 超越强模型 + 弱 Harness（Qwen 0.733 > Opus 0.680）
