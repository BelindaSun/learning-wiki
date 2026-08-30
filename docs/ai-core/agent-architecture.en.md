# Agent System Architecture

> **The central question:** What turns a language model from an answer generator into a system that can pursue a goal?

An Agent is not one magical component. It is a loop around a model.

## The lifecycle

```text
message arrives
   ↓
understand state and plan
   ↓
choose tool → execute → observe result
   ↑                         ↓
   └──── continue or revise ─┘
   ↓
return result, wait, or ask for approval
```

### Stage 0: Receive

The runtime combines the user message with system rules, available tools, permissions, and relevant prior state.

### Stage 1: Understand and plan

The model identifies the goal, constraints, unknowns, and a plausible next action. A plan is a working hypothesis, not a ceremony; it should change when evidence changes.

### Stage 2: Enter the tool loop

The model selects a tool and supplies structured arguments. The runtime—not the model—executes the call. The result returns as a new observation, and the model decides again.

### Stage 3: Verify

A tool's success response proves only that the call ran. The Agent should inspect the resulting state: read the changed file, run a test, or query the external record.

### Stage 4: Interact with the user

The Agent may finish, report progress, or request authority for a consequential action. New user input changes the state and may change the plan.

## Why this is a state machine

At any moment the system is in a state such as planning, waiting for a tool, waiting for approval, verifying, or complete. Events trigger transitions.

This model matters because an Agent can be interrupted, retried, or resumed. A plain chat transcript is not enough to represent pending calls, permissions, artifacts, and failure recovery.

## What counts as memory?

Do not call all stored state “memory.” Separate:

- **context:** information currently visible to the model;
- **working state:** plan, pending operations, and intermediate results;
- **durable memory:** selected information saved across sessions;
- **system of record:** authoritative external facts.

The context window is finite. Good architecture retrieves what is relevant instead of continually appending everything.

## Tool contracts

A useful tool definition answers three questions:

1. When should this tool be used?
2. What exact arguments does it require?
3. What result or failure can return?

Tools should have narrow permissions, clear schemas, explicit side effects, and idempotency where practical. The model chooses; the runtime validates and enforces.

## Multi-Agent coordination

Multiple Agents help when work is decomposable, parallel, or needs isolated contexts. Two common patterns are:

- **Orchestrator–worker:** one Agent decomposes, delegates, and integrates.
- **Peer collaboration:** Agents exchange findings without one permanent controller.

More Agents do not guarantee more intelligence. Communication overhead, duplicated work, and conflicting assumptions can exceed the benefit.

## Example: a market analysis task

An orchestrator may send data collection, customer evidence, and competitor research to separate workers. Those tasks can run in parallel. Final positioning should wait until their evidence is available, because it depends on all three.

This is the core scheduling rule:

> Parallelize independent evidence gathering; serialize decisions that depend on shared evidence.

## Failure and interruption

When a user changes the request mid-run, the system should not blindly continue the old plan. It should preserve completed evidence, cancel or disregard obsolete work when safe, and rebuild the remaining path from the new goal.

## Connections

- [Workflow Orchestration](workflow-orchestration.md)
- [Memory Systems](memory-system-guide.md)
- [Model Capability vs Agent Capability](model-vs-agent-capability.md)
- [AI Safety in Three Layers](safety-three-layer-framework.md)

