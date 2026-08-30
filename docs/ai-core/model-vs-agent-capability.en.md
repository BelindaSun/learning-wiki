# Model Capability ≠ Agent Capability: A Brain Without Hands

**Core idea**: A Model determines whether an AI can reason about a task. Tools, Runtime, Permissions, and Environment determine whether it can perform the task. Model Capability therefore does not equal Agent Capability.

**Key insight**: A useful mental model is:

```
Agent Capability ≈ Model × Harness/Runtime × Tools × Permissions × Environment
```

The multiplication sign is not a literal formula. It emphasizes that a factor near zero can collapse practical capability.

---

## A Real Case: Publishing a WeChat Moments Post

On August 20, 2026, a small experiment asked AI to publish a Moments post in the WeChat Mac application.

One Claude Code environment completed the path:

```
Screenshot → understand UI → locate control → click
→ choose image → type Chinese text → publish
```

The Codex environment available during that experiment failed at the same task. It did not lack the conceptual plan. It knew to open WeChat, navigate to Moments, select a photo, type, and publish. It lacked an execution channel capable of carrying out and verifying those actions.

> This describes the product environments on 2026-08-20, not a permanent comparison. Tools and permissions change quickly; the Model → Runtime → Tools → Permissions → Environment framework is more durable.

## Model Is the Brain

An LLM can understand the request, reason, plan, generate text or code, and select a next step. But knowing where to click is not the same as clicking.

A Model can possess intelligence without sufficient agency.

## Harness and Runtime Are the Working Environment

The same Model can behave very differently inside a chat interface, Coding Agent, CLI, IDE, browser Agent, desktop Agent, sandbox, or cloud VM. The environment determines what the Model can observe and invoke.

```
Model             the brain
Harness / Runtime the body and equipped workplace
```

“Which Model?” is no longer enough. Ask, “Where is it running?”

## Tools Are the Hands

Tools convert decisions into action:

```
Shell · Filesystem · Browser · Search · API · MCP
Screenshot · Mouse · Keyboard · Database · Email · Calendar
```

With Computer Use, an Agent can loop:

```
observe screen → decide → act → observe again → verify → continue
```

## MCP Can Attach New Hands

[MCP](../ai-application/mcp-protocol-guide.md) connects external Tools and data. A Computer Use MCP Server may expose screenshot, click, type, key, scroll, and wait operations:

```
Agent → Computer Use MCP → macOS → WeChat
```

The Model did not learn a private WeChat API. It acquired a more general route through a human interface.

## Permissions Are the Access Badge

Owning a Tool does not mean the operating system permits it to act. Screen capture and input control may require separate permissions.

```
Tool + Permission → authority to act
```

A pointer-control Tool is useless when its process cannot control another application. Harness design therefore includes both capability and boundaries.

## Environment Is the Real World the Agent Meets

The target environment includes the OS, browser, files, website, desktop application, and enterprise systems. Some applications draw custom interfaces that expose no semantic controls. An Agent may then require:

```
Screenshot → Vision → Coordinates → Click
```

Compatibility with the actual environment is a capability in its own right.

## Why One Environment Succeeded and the Other Failed

The observation was not “one Model is smarter.” It was:

```
Successful stack:
Model → Runtime → Computer Use Tools → OS permissions → WeChat → verified action

Unsuccessful stack at that time:
Model → Runtime → no equivalent full-screen execution channel
→ unable to perform and verify real GUI action
```

Failure occurred in the Agent Stack, not necessarily the Model.

## Capability vs. Authority

| | Question | Example |
|---|---|---|
| **Capability** | Can the system do this? | Does it know how to operate WeChat? |
| **Authority** | May this environment do this? | Can it read the display, click, and type? |

High capability with low authority knows what to do but cannot act. High capability with high authority can be extremely useful and correspondingly risky.

## Why Computer Use Matters

Traditional integration follows Software → API → Software. [Computer Use](computer-use.md) adds AI → GUI → Software, reaching legacy and desktop applications that offer no structured interface. It is one of the steps from speaking to doing.

## Why Not Grant Unlimited Permission?

Greater agency increases the radius of mistakes. Today's button may be Post; tomorrow's may be Delete, Send, Transfer, or Erase.

The hard product question is not only how to make AI act, but how to keep misunderstanding, error, and overreach bounded. Useful controls include:

- Sandboxing and least privilege
- Human approval before consequential action
- Audit logs and independent verification
- Reversible operations and recovery paths

**Capability and Governance must grow together.** Model Alignment and Agent authority are different layers of the same broader Safety problem.

## How Comparison Changes in the Agent Era

Model benchmarks remain relevant, but the practical question becomes: **What can this system actually complete?**

```
Model × Context × Harness/Runtime × Tools × Permissions
× Memory × Environment × Reliability × Governance
```

The strongest Model does not automatically create the most useful Agent.

## Final Mental Model

| Component | Analogy |
|---|---|
| Model | Intelligence of the worker |
| Harness / Runtime | Workplace and operating environment |
| Tools | Equipment on the desk |
| Permissions | Keys and access badges |
| Environment | The real world outside the room |

```
Model → Harness/Runtime → Tools → Permissions
→ Environment → Actions → Results
```

**Intelligence is not Agency.** A smart Model knows what to do. A capable Agent can actually do it.

## Next

- [Agent Architecture](agent-architecture.md)
- [Computer Use](computer-use.md)
- [MCP](../ai-application/mcp-protocol-guide.md)
- [Harness](../ai-application/harness-system.md)
- [AI Safety and Alignment](safety-alignment-guide.md)

---

**Last updated**: August 20, 2026

**Related**: [Three Layers of Agent Intelligence](agent-intelligence-layers.md) · [The Agent Single-Axis Problem](agent-single-axis-problem.md) · [Mental Models](../../mental-models.md)
