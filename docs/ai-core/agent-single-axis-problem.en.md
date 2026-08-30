# The Agent Single-Axis Problem

> **The central question:** Why do labels such as “more autonomous,” “better memory,” and “more exploratory” create bad design decisions?

Because each compresses several independent dimensions into one convenient—but misleading—scale.

## 1. Autonomy is at least four-dimensional

- **Autonomy:** how often the system decides without asking.
- **Efficacy:** how much each decision can affect.
- **Goal complexity:** how many constraints and subgoals it must manage.
- **Generality:** how broad a range of situations it can handle.

This reveals two different risk shapes:

- **High autonomy, low efficacy:** many small choices can accumulate into drift. Use trend monitoring and audit logs.
- **Low autonomy, high efficacy:** one rare action can have a large consequence. Add approval friction at the decisive point.

The second pattern also has a human-factors problem: if almost every approval is routine, attention decays before the important one arrives.

## 2. Delegation has an amount and a type

“How much authority?” is only one axis. We must also ask **what kind of authority**: recommending, writing, spending, publishing, deleting, or controlling physical systems.

Two Agents with the same delegation level may therefore need completely different safeguards. A reversible draft and an irreversible bank transfer do not belong in the same risk bucket.

## 3. Memory needs two clocks

Memory is often described only by persistence: short-term or long-term. Agents also need a **time direction**:

- **Past:** what happened and what was learned.
- **Present:** what is true in the current task.
- **Future:** what must be remembered and acted on later—prospective memory.

PM-Bench results suggest the hard part is not merely collecting more monitoring evidence. Multi-Agent monitoring can perform worse while issuing far more queries. The bottleneck is often knowing when to stop monitoring and turn evidence into action, especially across days or when facts change.

## 4. Openness is not disciplined exploration

An Agent can sound curious while repeatedly converging on the same familiar approach. InferenceBench found strong convergence on default frameworks and very little non-default parameter exploration; conventional black-box optimizers could outperform frontier Agents.

One explanation is training pressure: polished closure is rewarded, while uncertain branching is costly. Autoregressive generation also creates path dependence—the first plausible route makes alternatives less likely.

Useful **epistemic curiosity** is therefore not a personality adjective. It needs a stopping rule:

```text
continue exploring while expected value of more information > cost of search
```

## The upgraded model

Whenever a capability appears as one slider, look for the hidden second axis:

| Compressed label | Split it into |
|---|---|
| Autonomy | frequency × impact |
| Delegation | amount × type |
| Memory | persistence × time direction |
| Exploration | openness × search discipline |

The first approximation is useful for orientation. The upgrade prevents systematic mistakes.

## Connections

- [Agent Intelligence: Model, Memory, and Delegation](agent-intelligence-layers.md)
- [Memory Systems](memory-system-guide.md)
- [AI Safety and Alignment](safety-alignment-guide.md)

