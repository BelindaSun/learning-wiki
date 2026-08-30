# Workflow Design: Turning a Goal into a Reliable Process

> **The central question:** How do you design a multi-step process that remains understandable when it branches, loops, fails, or needs a human?

An Agent decides what to do. A **workflow** makes the structure of the work explicit: tasks, dependencies, conditions, approvals, and recovery.

## The basic node types

### Sequential

Run B after A when B depends on A's result.

```text
collect → analyze → write
```

### Parallel

Run independent work together, then join it.

```text
          ┌→ research A ─┐
request ──┼→ research B ─┼→ synthesize
          └→ research C ─┘
```

### Conditional

Choose a path from evidence, not intuition hidden in the diagram.

```text
if confidence < threshold → human review
else                       → continue
```

### Human approval

Pause before a consequential or irreversible transition. Present the decision, evidence, expected effect, and alternatives—not a vague “Continue?” button.

### Loop

Repeat until an explicit condition is met. Every loop needs a maximum iteration or budget and a failure exit.

### Error handler

Define whether to retry, fall back, compensate, preserve partial work, or escalate.

## Three reusable patterns

### Fan-out, then fan-in

Split independent evidence gathering across workers, then synthesize once all required evidence arrives.

### Quality loop

Produce → evaluate against a rubric → revise. Keep the evaluator meaningfully independent, and cap the loop.

### Human bottleneck by design

Automate preparation and verification, but place approval immediately before the action whose consequences justify human judgment.

## A minimal specification

A workflow representation—YAML, code, or a visual graph—should make these fields inspectable:

```yaml
name: publish_report
inputs: [topic]
steps:
  - id: research
    run: gather_evidence
  - id: draft
    needs: [research]
    run: write_report
  - id: approve
    needs: [draft]
    type: human_approval
  - id: publish
    needs: [approve]
    run: publish_report
on_error: preserve_and_notify
```

The format matters less than the explicit contracts: what each step receives, produces, and proves.

## Design rules

- Start from the outcome and evidence of completion.
- Parallelize only independent work.
- Keep state transitions explicit.
- Make retries safe or idempotent where possible.
- Separate “the executor claims success” from verification.
- Put human attention at high-consequence decisions, not every trivial step.
- Set limits for loops, cost, and time.
- Preserve provenance so the final answer can be traced to evidence.

## Common mistakes

A brittle workflow hides decisions inside prompts, has no failure path, passes giant contexts between every node, or creates many Agents without a reason. Complexity should be earned by a real dependency or risk.

## Connections

- [Workflow Orchestration](../ai-core/workflow-orchestration.md)
- [Harness Architecture Patterns](harness-architecture-patterns.md)
- [Agent System Architecture](../ai-core/agent-architecture.md)

