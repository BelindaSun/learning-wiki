# AI Safety in Three Layers: Monitoring, Alignment, and Containment

> **Core idea:** As models become more capable, “trust it to behave” is not a safety architecture. A safe system limits how far an error can travel.

## Three different questions

```text
Monitoring  → What is it doing?
Alignment   → Why is it doing that, and does the goal match ours?
Containment → If the first two fail, what can it actually touch?
```

These layers address different failure modes and should not be collapsed into one “safety score.”

## Monitoring: detect abnormal behavior

Monitoring can inspect outputs, tool calls, trajectories, and—in research settings—internal activation patterns. Suspicious signals can escalate to deeper analysis and human review.

Monitoring has a real compute and staffing cost. More importantly, detection is not prevention: it buys response time only if the system can still be interrupted.

## Alignment: shape goals and behavior

Alignment tries to make the model choose behavior consistent with human intentions.

- **RLHF** teaches preferences from human comparisons, but can inherit annotator bias or reward hacking.
- **Constitutional AI** makes principles explicit and uses AI-assisted critique, but the constitution can still be incomplete.
- **Scalable oversight** asks how humans can supervise work they cannot solve directly, using methods such as debate or recursive decomposition.
- **Interpretability** tries to inspect internal representations rather than infer everything from behavior; it remains an early research area.

The direction is from labor-intensive behavioral feedback toward oversight that can scale with capability. None is a proof that the model's internal objective is safe.

## Containment: bound the consequences

Containment starts from a less comfortable assumption: alignment may fail.

```text
process sandbox
   ↓
network boundaries
   ↓
least-privilege credentials
   ↓
monitoring and interruption
```

Defense in depth means each layer assumes the previous one can be breached. Permissions should be narrow, temporary, and tied to the current task.

Alignment is like professional ethics; containment is the access card. A trustworthy employee still should not have keys to every room.

## Why neither layer can replace the other

- Alignment without containment leaves failure consequences unbounded.
- Containment without alignment creates a system continually pressing against its box.

As alignment becomes harder to verify, containment becomes more valuable. But containment is not a permanent substitute for alignment; it is an engineering boundary that buys time and limits damage.

## The missing delegation axis: reversibility

Trustworthiness alone cannot determine authority. A well-intentioned Agent can make a mistake, follow a prompt injection, or drift during a long task.

A better authorization model considers:

```text
trustworthiness × task scope × environment risk × reversibility
```

| Risk | Reversible? | Default posture |
|---|---|---|
| Low | Yes | Allow, then report |
| High | Yes | Constrain and monitor |
| Low | No | Confirm first |
| High | No | Stop for human judgment |

The point is not to automate every reversible action blindly. It is to recognize that irreversibility changes the safety category.

## Connections

- [AI Safety and Alignment](safety-alignment-guide.md)
- [Model Capability vs Agent Capability](model-vs-agent-capability.md)
- [Training Systems](training-system-guide.md)

