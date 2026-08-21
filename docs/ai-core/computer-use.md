# Computer Use

**核心概念**: Computer Use 让 AI 通过观察屏幕并操作鼠标、键盘等方式使用软件，使其能够操作原本只为人类设计的 GUI——不需要目标软件提供 API。

**关键洞察**: 传统的 AI-Software 连接依赖 API（Software → API → Software）；Computer Use 增加了一条路径（AI → GUI → Software），让 Agent 理论上可以操作任何人类能用的软件。这是连接 Model → Agent → Tool → MCP → Operating System → Real-world Action 的一块关键拼图。

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [Tool](../../glossary.md#tool) · [MCP](../../glossary.md#mcp) · [Harness](../../glossary.md#harness)

---

## 目录

1. [Computer Use 是什么](#computer-use-是什么)
2. [为什么需要 Computer Use](#为什么需要-computer-use)
3. [工作原理](#工作原理)
4. [Computer Use 和 MCP 的关系](#computer-use-和-mcp-的关系)
5. [Computer Use 和 API 的区别](#computer-use-和-api-的区别)
6. [权限和风险](#权限和风险)
7. [局限性](#局限性)

---

## Computer Use 是什么

Computer Use 是一类让 AI 以人类用户相同的方式操作电脑的能力——看屏幕、移动鼠标、点击按钮、输入文字、滚动页面。

```
人类操作电脑：眼睛看屏幕 → 大脑理解界面 → 手移到按钮 → 点击
AI Computer Use：截屏 → Vision 模型理解界面 → 计算坐标 → 注入点击事件
```

这不是一个特定产品，而是一种能力模式。不同产品可能用不同的方式实现它（比如通过 MCP Server、浏览器扩展、操作系统级别的 Accessibility API 等）。

---

## 为什么需要 Computer Use

现实世界里大量软件没有为 AI 提供 API：

- 桌面应用（微信、Photoshop、Excel）
- 老旧的企业内部系统
- 只有 Web UI 没有公开 API 的 SaaS 产品
- 操作系统本身的设置和管理界面

在 Computer Use 出现之前，AI 只能操作那些专门为它开放了 API 或 [MCP Server](../ai-application/mcp-protocol-guide.md) 的软件。Computer Use 把 Agent 的潜在操作范围从"有 API 的软件"扩展到了"有 GUI 的软件"——后者几乎覆盖所有人类日常使用的软件。

---

## 工作原理

Computer Use 的核心是一个 **Observe → Reason → Act → Observe** 的循环：

```
1. Screenshot（截取当前屏幕）
    ↓
2. Vision（用多模态模型理解截图内容——识别按钮、文字、布局）
    ↓
3. Decide（模型决定下一步动作：点哪里、输入什么）
    ↓
4. Act（执行动作：点击、输入、滚动……）
    ↓
5. Screenshot（再次截屏，检查动作是否成功）
    ↓
6. 回到 2，继续下一步
```

### 典型可用动作

| 动作 | 说明 |
|------|------|
| `screenshot` | 截取当前屏幕 |
| `left_click` | 在指定坐标点击 |
| `right_click` | 右键点击 |
| `double_click` | 双击 |
| `type` | 输入文字 |
| `key` | 按特定按键（Enter、Escape 等） |
| `scroll` | 滚动页面 |
| `wait` | 等待界面变化 |

这些动作组合起来，就能完成大部分人类在 GUI 上的操作。

---

## Computer Use 和 MCP 的关系

Computer Use 能力通常通过 [MCP](../ai-application/mcp-protocol-guide.md) 来提供给 Agent。

```
Agent（Claude Code 等）
  ↓
Computer Use MCP Server
  ↓
操作系统（macOS / Windows / Linux）
  ↓
目标应用（微信、浏览器、任意 GUI 软件）
```

MCP 在这里扮演的角色是：把"截屏、点击、输入"这些底层操作包装成 Agent 能调用的标准 [Tool](../../glossary.md#tool)。Agent 不需要知道底层实现细节，只需要调用 `screenshot`、`left_click(x, y)` 这样的工具。

---

## Computer Use 和 API 的区别

两种 AI-Software 连接方式各有适用场景：

| | API 方式 | Computer Use 方式 |
|---|---|---|
| **连接方式** | 软件提供结构化接口 | AI 直接操作 GUI |
| **前提条件** | 目标软件需要提供 API | 目标软件只需要有 GUI |
| **覆盖范围** | 只能操作有 API 的软件 | 理论上可操作任何有 GUI 的软件 |
| **速度** | 快（直接数据传输） | 慢（截屏 → 识别 → 操作 → 再截屏） |
| **可靠性** | 高（结构化数据，确定性操作） | 相对低（依赖视觉识别，可能误判） |
| **精确度** | 高（精确调用指定功能） | 依赖视觉识别，可能受 UI 变化影响 |
| **适用场景** | 需要高效、可靠的自动化 | 没有 API 的软件、一次性操作、通用场景 |

**不是替代关系，是互补关系**：有 API 的软件优先用 API（更快更可靠），没有 API 的软件才走 Computer Use。

---

## 权限和风险

Computer Use 需要操作系统授予的特殊权限：

- **Screen Recording**：允许 AI 读取屏幕内容
- **Accessibility**：允许 AI 注入鼠标和键盘事件

这意味着：

```
有 Computer Use Tool ≠ Computer Use 可以工作
还需要：Tool + 操作系统 Permission
```

### 风险

Computer Use 赋予 Agent 的能力非常强大——它可以做人类在电脑上能做的几乎所有事情。这也意味着：

- **误操作风险**：AI 可能点错按钮、在错误的位置输入
- **不可逆操作**：Delete、Send、Transfer 这类操作一旦执行就无法撤回
- **权限范围过大**：一旦获得 Screen Recording + Accessibility 权限，理论上可以看到和操作屏幕上的所有内容

因此，负责任的 Computer Use 实现通常包含：

- 分级权限（只读 vs 可点击 vs 可输入）
- 高风险操作前的人工确认
- 操作日志和审计
- 最小权限原则

这跟 [Harness 系统](../ai-application/harness-system.md) 设计的核心关切是一致的：**Capability 和 Governance 必须一起增长。**

---

## 局限性

Computer Use 不是万能的：

- **速度慢**：每一步都要截屏、识别、操作、再截屏，比 API 调用慢得多
- **依赖视觉识别**：自绘 UI、非标准控件、动态内容可能导致识别失败
- **脆弱性**：UI 改版、分辨率变化、弹窗打断都可能让操作中断
- **语言和文化**：不同语言的 UI、不同地区的界面布局可能影响识别准确率
- **无法操作所有内容**：某些安全性高的界面（密码输入、支付确认）可能有额外保护机制

Computer Use 目前更适合：

- 没有 API 替代方案的场景
- 一次性或低频操作
- 人类在旁边可以随时介入的环境

高频、高可靠性要求的场景仍然应该优先使用 API 或 MCP。

---

## 下一步

- 📖 想了解 Model 和 Agent 能力的区别，看 [Model 能力 ≠ Agent 能力](model-vs-agent-capability.md)
- 🔌 想了解 MCP 如何给 Agent 连接工具，看 [MCP 统一协议指南](../ai-application/mcp-protocol-guide.md)
- 🛡️ 想了解 Agent 的边界和权限设计，看 [Harness 系统](../ai-application/harness-system.md)
- 🤖 想了解 Agent 的核心架构，看 [Agent 系统架构](agent-architecture.md)
- 👁️ 想了解 AI 如何理解图像和屏幕，看 [Multimodal 完全指南](multimodal-guide.md)

---

**最后更新**: August 20, 2026

**相关**:
- [Model 能力 ≠ Agent 能力](model-vs-agent-capability.md)
- [Agent 系统架构](agent-architecture.md)
- [MCP 统一协议指南](../ai-application/mcp-protocol-guide.md)
- [Harness 系统](../ai-application/harness-system.md)
- [Multimodal 完全指南](multimodal-guide.md)
- [AI Safety / Alignment](safety-alignment-guide.md)
- [Coding Agent 与 Agent 基础设施](../career-impact/agent-infrastructure-os.md)
- [Workflow 编排](workflow-orchestration.md)
