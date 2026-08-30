# Agent Intelligence: Model, Memory, and Delegation

> **Core idea:** An Agent becomes stronger not only when its model becomes smarter, but when the system preserves, allocates, and manages intelligence well.

## A benchmark score is missing its units

Agent performance depends on more than model weights:

```text
result = f(model × harness × reasoning effort × tools × budget)
```

The useful question is shifting from “Which model has the highest score?” to “What is the best result available at each cost and latency budget?” That is a **price-performance frontier**, not a leaderboard point.

## The reconstruction tax

In a long task, a reasoning model may produce an internal scratchpad for one step, then lose it before the next API call. It must reconstruct why earlier choices were made from their visible results.

Small reconstruction errors compound: a constraint disappears, an assumption shifts, and the task quietly drifts. The tax is largest in work that must preserve an exact state over many dependent steps.

**Retained reasoning** reduces this tax by carrying the recent scratchpad forward. It is not long-term memory:

- retained reasoning = do not throw away the current scratchpad;
- external memory = write durable, retrievable notes for later sessions.

Keeping everything forever would overflow the context and create noise. A useful upgrade is **compaction**: retain recent reasoning verbatim, but distill older history into decisions, facts, and unresolved constraints.

## Move deterministic work outside attention

With programmatic tool calling, a model can generate code that calls tools, filters results, and aggregates data outside the model context. The model spends attention on judgment; deterministic machinery handles sorting, counting, and transport.

## The three layers

### 1. Model Intelligence

Judgment inside the current context: reasoning, trade-offs, and decisions without a fixed answer. It is the foundation because every delegation chain eventually reaches a model that must decide.

### 2. Memory Intelligence

Model Intelligence applied across **time**: what to retain, compress, discard, or retrieve—and when.

### 3. Delegation Intelligence

Model Intelligence applied across **space**: what to do directly and what to hand off.

- **Tool-level delegation:** one bounded step goes to a deterministic function.
- **Agent-level delegation:** a complex task is decomposed, scheduled, and recombined.

Knowing when **not** to delegate is part of the skill. Parallel work helps when components are loosely coupled; tightly coupled decisions may cost more to reconcile than to solve together.

## Think of an Agent as a small company

- Model Intelligence is executive judgment—it cannot be outsourced completely.
- Memory Intelligence is records management.
- Delegation Intelligence is knowing which work belongs to a calculator, a junior worker, a specialist, or the decision-maker.

Production systems often turn this metaphor into routing: cheap models handle routine work; expensive models receive only difficult or high-consequence cases. “One Agent” may therefore be an organization of several models, not one model used everywhere.

## What changed in the mental model

Tools and orchestration first look like separate capabilities. A cleaner model treats them as different granularities of the same decision: **do this here, or delegate it and use the result?**

## Open questions

- How should task coupling be measured before parallelizing?
- What signal should trigger escalation to a stronger model?
- Which retained-reasoning details are guaranteed by an API, and which are reconstructed from public descriptions?

## Connections

- [The Agent Single-Axis Problem](agent-single-axis-problem.md)
- [Memory Systems](memory-system-guide.md)
- [Context Windows](context-window-guide.md)
- [Workflow Orchestration](workflow-orchestration.md)

