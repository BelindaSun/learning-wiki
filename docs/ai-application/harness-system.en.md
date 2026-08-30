# Harness Systems: Giving an Agent Boundaries

> **The central question:** A model can propose an action—but who decides what it may actually do?

A **harness** is the operating environment around an Agent. It supplies tools and context, enforces permissions and budgets, manages state, and decides when the Agent must stop for a human.

Think of it as onboarding rules for a highly capable new colleague.

## Four dimensions

### 1. Tool permissions

Which capabilities may the Agent call: file operations, code execution, browsers, databases, or external services? A tool should be exposed only when the task needs it.

### 2. Resource boundaries

What files, records, accounts, networks, and environments may those tools reach? “Can use a file tool” and “can edit every file” are very different permissions.

### 3. Budgets

How much time, computation, money, and how many calls may the task consume? Budgets convert an open-ended loop into a bounded system.

### 4. Human checkpoints

Which actions require approval? Consequence and reversibility matter more than technical difficulty. Reading a report and sending a payment should not share the same default.

## Three ways rules become real

Harness rules often appear at three levels:

1. **Natural-language project instructions** express goals, conventions, and judgment calls.
2. **Machine-enforced configuration** defines exact allowlists, denylists, paths, and tool permissions.
3. **Run-specific settings** temporarily narrow or expand behavior for one task.

Natural-language rules guide decisions; enforcement must live in the runtime. A prompt saying “do not delete files” is not equivalent to removing delete permission.

## Passive accumulation vs deliberate design

Permission files often grow one approval at a time. Each line tells a story, but the collection may no longer form a coherent policy.

A deliberate review asks:

- Is this permission still needed?
- Is its scope narrower than the task requires?
- Is the action reversible?
- How will success be verified?
- What happens when the Agent is interrupted?

## Harness, Skill, and MCP

- **Harness:** defines the environment and boundaries.
- **Skill:** teaches a reusable way to perform a task.
- **MCP:** standardizes access to external tools and data.

A Skill may recommend calling a tool; MCP may expose it; the harness still decides whether the call is allowed here and now.

## The durable principle

Model capability and Agent authority are separate. A more capable model may justify better work, but it does not automatically justify broader permissions.

## Connections

- [Harness Architecture Patterns](harness-architecture-patterns.md)
- [MCP](mcp-protocol-guide.md)
- [Model Capability vs Agent Capability](../ai-core/model-vs-agent-capability.md)
- [AI Safety in Three Layers](../ai-core/safety-three-layer-framework.md)

