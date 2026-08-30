# Computer Use

**Core idea**: Computer Use lets AI operate software by observing a screen and using mouse and keyboard actions. It reaches interfaces designed only for humans without requiring the target application to expose an API.

**Key insight**: Traditional integration follows Software → API → Software. Computer Use adds AI → GUI → Software, potentially extending Agents to almost any application a person can operate. It is a bridge from Model through Agent, Tools, and operating system to real-world action.

---

## What Is Computer Use?

Computer Use is a capability pattern in which AI interacts with a computer as a user would: observe a display, move a pointer, click, type, and scroll.

```
Human: eyes → understand interface → move hand → click
AI: screenshot → Vision model → choose coordinates/action → inject event
```

It is not one product. Implementations may use an MCP Server, browser extension, operating-system accessibility interface, or direct event injection.

## Why Is It Needed?

Much software has no suitable AI-facing API:

- Desktop applications such as WeChat, Photoshop, or Excel
- Legacy internal systems
- SaaS products with a web interface but no public API
- Operating-system settings and administration

Without Computer Use, an Agent is limited to software that deliberately exposes an API or [MCP Server](../ai-application/mcp-protocol-guide.md). A GUI is a far more common interface.

## How It Works

The core loop is **Observe → Reason → Act → Observe**:

```
1. Capture the current screen
2. Interpret text, controls, and layout
3. Decide the next action
4. Click, type, press a key, or scroll
5. Capture the screen again and verify the result
6. Repeat
```

Typical primitives include screenshot, left/right/double click, type, key presses, scroll, and wait. Their combination can express most ordinary GUI work.

## Computer Use and MCP

Computer Use is often exposed to an Agent through MCP:

```
Agent
  ↓
Computer Use MCP Server
  ↓
Operating System
  ↓
Target Application
```

MCP packages screenshot, click, and typing operations as standard Tools. The Agent calls a tool such as `left_click(x, y)` without implementing the low-level event itself.

## Computer Use vs. API

| | API | Computer Use |
|---|---|---|
| Interface | Structured software endpoint | Human-facing GUI |
| Requirement | Application provides an API | Application has an operable GUI |
| Coverage | API-enabled functions | Potentially any visible function |
| Speed | Fast | Slower observe–act loop |
| Reliability | Usually higher and deterministic | Sensitive to perception and UI state |
| Best use | Frequent, precise automation | Missing APIs, one-off and general tasks |

They complement one another. Prefer an API when it exists and fits; use Computer Use when the interface is the only practical route.

## Permissions and Risk

Operating systems commonly require:

- **Screen Recording** to read the display.
- **Accessibility or input permissions** to control pointer and keyboard.

```
Tool ≠ usable Tool
Tool + Permission + compatible Environment → possible action
```

The capability is powerful because it can perform nearly anything a user can. That creates risks:

- Clicking or typing in the wrong place
- Consequential and irreversible actions such as Delete, Send, or Transfer
- Broad visibility into sensitive on-screen information

Responsible designs add graded access, confirmation before consequential actions, audit logs, recoverability, and least privilege. **Capability and Governance must grow together.**

## Limitations

- Every step requires observation and feedback, making it slower than an API.
- Custom-drawn interfaces and nonstandard controls may be invisible to accessibility tooling.
- Layout, resolution, pop-ups, and redesigns make coordinate actions brittle.
- Languages and regional layouts can affect recognition.
- Password, payment, and other protected interfaces may deliberately block automation.

Computer Use currently fits low-frequency work without a better interface and environments where a person can intervene. High-volume, high-reliability automation should still favor APIs or structured MCP Tools.

## Next

- [Model Capability ≠ Agent Capability](model-vs-agent-capability.md)
- [MCP](../ai-application/mcp-protocol-guide.md)
- [Harness](../ai-application/harness-system.md)
- [Agent Architecture](agent-architecture.md)
- [Multimodality](multimodal-guide.md)

---

**Last updated**: August 20, 2026
