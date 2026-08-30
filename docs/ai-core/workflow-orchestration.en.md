# Workflow Orchestration

> **The central question:** Once a task has several steps, who decides what runs when—and what happens when one step fails?

## What a workflow is

A **workflow** is an explicit arrangement of tasks, dependencies, inputs, outputs, and recovery rules. It converts “do this complex job” into an inspectable execution graph.

The advantage is not sophistication. It is predictability: we can see what should happen next and why.

## Two basic shapes

### Sequential

```text
A → B → C
```

Use a sequence when B needs A's output or when later work would be wasted if an earlier gate fails.

### Parallel

```text
      ┌→ B ─┐
A ────┼→ C ─┼→ E
      └→ D ─┘
```

Use parallel work when branches are independent and can be combined through a clear contract.

The rule is simple: **dependencies decide order; independence permits concurrency.**

## Orchestrator and workers

The orchestrator owns the whole task: decomposition, routing, dependency tracking, recovery, and integration. Workers own bounded subtasks.

This enables cost-aware routing. A strong model can make a difficult plan while cheaper models or deterministic tools perform routine extraction and transformation.

For complex systems, think in three layers:

1. **Goal layer:** what outcome and constraints matter?
2. **Coordination layer:** how is work decomposed and scheduled?
3. **Execution layer:** which worker or tool performs each step?

## Sessions and views

Each worker needs enough isolated context to solve its task without inheriting irrelevant history. The orchestrator needs a compact view of worker status, outputs, errors, and dependencies—not every token each worker produced.

Interfaces sometimes call this an Agent view: a way to inspect several active branches while preserving their separate sessions. The product label may change; the architectural need does not.

## How the pieces fit

- **Agent:** who decides and acts.
- **Skill:** a reusable way to perform a kind of work.
- **Tool or MCP connection:** where the action happens.
- **Memory:** what survives across time.
- **Workflow:** in what order work happens.

```text
Agent uses a skill
      ↓
workflow schedules steps
      ↓
tools act on external systems
      ↓
memory preserves useful state
```

## Failure is part of the design

For each step, decide in advance:

- Can it be retried safely?
- Is the operation idempotent?
- Can another branch continue?
- Must completed work be rolled back or compensated?
- Should a human approve the next step?

A workflow that describes only the happy path is a diagram, not an operating system for work.

## The leverage point

The orchestrator's value is not “doing everything.” It is spending expensive judgment only where judgment changes the outcome, while making execution observable and recoverable.

## Connections

- [Agent System Architecture](agent-architecture.md)
- [Agent Intelligence](agent-intelligence-layers.md)
- [Memory Systems](memory-system-guide.md)

