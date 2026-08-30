# Harness over Model: The Real Leverage in Agent Reliability

> **Core idea:** Real Agent performance is produced by model × harness. Improving the system around a model can matter more than swapping in a stronger model.

The deepest harness question is not “Is the Agent smart enough?” It is: **Who has the authority to define what reality now is?**

## Why the executor should not grade itself

If the same Agent performs an action and decides whether it succeeded, it may continue its own narrative instead of checking the world. A returned “success” string is a claim; the changed external state is evidence.

This motivates the **Manager–Execute–Audit (MEA)** loop:

```text
Manager: define goal, constraints, and evidence of success
   ↓
Executor: perform the bounded action
   ↓
Auditor: inspect independent evidence
   ↓
Manager: accept, repair, retry, or stop
```

These roles can be separate Agents, deterministic checks, or human review. What matters is separating the power to act from the power to certify the result.

## Claimed state vs verified state

Examples:

- “The file was saved” vs reading the file back.
- “Tests pass” vs running the test suite.
- “The message was sent” vs checking the remote record.
- “The page looks correct” vs inspecting it at the intended viewport.

An Agent should advance irreversible workflows from **verified state**, not from its own summary of what probably happened.

## A harness has two legs

### Execution architecture

Plans, permissions, tools, retries, checkpoints, budgets, and verification determine how work moves.

### Knowledge architecture

Skills, memory, provenance, retrieval, and versioning determine what guidance and evidence the Agent uses.

A system with excellent tools but unreliable knowledge acts efficiently in the wrong direction. A system with excellent knowledge but weak execution cannot turn judgment into dependable results.

## Skills are governed artifacts

A Skill should not be treated as an anonymous prompt fragment. It needs:

- a clear scope and trigger;
- an owner and version;
- tests or examples;
- permission expectations;
- provenance and update history.

As the Skill library grows, selection becomes its own problem. More capabilities increase routing ambiguity. Good descriptions, evaluation, and a small relevant candidate set matter more than a giant catalog.

## Multi-Agent memory needs provenance

When several Agents write to shared memory, a fact without source, time, and confidence can spread error through the whole system. Store not only the claim, but who produced it, from what evidence, under which task, and whether it was verified.

## Four pillars of reliability

1. **Management:** define goals and control transitions.
2. **Execution:** act through bounded tools.
3. **Audit:** verify reality independently.
4. **Knowledge governance:** control what instructions and memories are trusted.

This is a practical separation of powers: one component proposes, another acts, and another establishes whether the world actually changed.

## Connections

- [Harness Systems](harness-system.md)
- [Workflow Design](workflow-design-guide.md)
- [Agent System Architecture](../ai-core/agent-architecture.md)
- [Memory Systems](../ai-core/memory-system-guide.md)

