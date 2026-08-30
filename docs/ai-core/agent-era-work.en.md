# How System Architecture Changes in the Agent Era

> **The central question:** What must change when software stops merely storing work and begins performing it?

## Three shifts

### 1. Keep a system of record—and make it legible to Agents

Agents do not remove the need for reliable source data. They increase it. An Agent needs to know which object is authoritative, what changed, who approved it, and what actions are allowed.

Traditional products optimize information for screens and human navigation. **Agent legibility** adds machine-readable structure: explicit states, stable identifiers, documented actions, provenance, and permission boundaries.

```text
System of Record: What is true?
Agent Legibility: Can the Agent read and act on that truth safely?
```

Without the first, an Agent acts on unreliable state. Without the second, it must guess from interfaces designed only for people.

### 2. Orchestration becomes a system responsibility

A capable model is not automatically a capable organization. Complex work needs an orchestrator that can:

1. turn a goal into bounded tasks;
2. identify dependencies;
3. choose sequential or parallel execution;
4. route tasks to suitable models, tools, or Agents;
5. verify and combine results.

Parallelism helps only when tasks are sufficiently independent. Otherwise it creates contradictory local answers and an expensive merge.

### 3. Human work moves up one level

The valuable unit of work shifts from executing every step to designing the environment in which steps can be executed well:

- define success and constraints;
- expose trustworthy data and tools;
- decide where human approval belongs;
- evaluate outcomes and improve the loop.

This does not eliminate domain expertise. It makes domain experts responsible for turning tacit judgment into inspectable rules, examples, and review points.

## A reusable architecture

```text
human intent
    ↓
orchestrator → plan and route
    ↓
workers / tools → bounded execution
    ↓
verification → evidence, tests, approval
    ↓
system of record → durable state and audit trail
```

Memory connects runs across time; permissions bound action; observability lets humans reconstruct what happened.

## What changes in product design

The evolution is not simply “add a chatbot”:

```text
interface to records
→ assistant that recommends
→ Agent that acts through tools
→ orchestrated system that coordinates work
```

Each step increases leverage and also expands the failure surface. Authority should grow only as verification, containment, and reversibility improve.

## Open questions

- Which facts belong in the system of record, and which belong in Agent memory?
- How much hidden organizational knowledge must become explicit before an Agent can work reliably?
- When should several Agents share state, and when should isolation be preserved?

## Connections

- [Agent System Architecture](agent-architecture.md)
- [Workflow Orchestration](workflow-orchestration.md)
- [Agent Intelligence](agent-intelligence-layers.md)

