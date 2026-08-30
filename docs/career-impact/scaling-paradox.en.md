# The Scaling Paradox: Why Better AI Can Produce a Worse Human–AI System

> **Core idea:** Improving the model does not automatically improve the combined system. Outcomes depend on whether human trust is calibrated to the model's real capability.

## Three trust states

- **Calibrated perception:** supervision changes appropriately as capability changes.
- **Over-perception:** people trust the system more than its reliability warrants and withdraw too much effort.
- **Under-perception:** people distrust useful capability and duplicate too much work.

Over-perception is often more dangerous because it can remove the very defense intended to catch rare severe errors.

## Why 95% can feel worse than 90%

The error rate falls, but the human response may change discontinuously.

1. **Trust has thresholds.** A five-point improvement may trigger a much larger drop in supervision.
2. **Remaining errors are harder.** Obvious mistakes disappear first; rare errors may be fluent and internally consistent.
3. **Vigilance declines.** Humans are poor monitors of low-frequency failure.
4. **The safety net weakens.** Review becomes ceremonial precisely when the remaining mistakes require independent judgment.

Fewer errors can therefore produce more undetected high-consequence errors.

## Trustworthiness vs calibrated trust

- **Trustworthiness** is a property of the system: how reliable, controllable, auditable, and recoverable it is.
- **Calibrated trust** is a relationship: whether a particular user relies on it appropriately in a particular situation.

Improving the first helps but does not guarantee the second. Interfaces, incentives, training, and feedback shape human reliance.

## Correcting perception is not always enough

An inaccurate belief may be compensating for another structural problem. An employee who distrusts automation may provide extra review that the organization's incentives fail to fund. Simply “correcting” the employee's belief can remove that hidden safeguard.

The system must align capability, responsibility, cost, and incentives—not just display a confidence score.

## Product mechanisms against automation complacency

- require independent judgment before revealing the AI recommendation in critical cases;
- vary review depth by consequence, not only predicted confidence;
- sample apparently easy cases for audit;
- surface evidence and uncertainty, not a single authoritative answer;
- preserve manual practice and periodically test unaided performance.

Measure trust behaviorally: when do users accept, override, verify, or stop paying attention? Surveys alone miss the gap between stated trust and actual reliance.

## The organizational consequence

If juniors delegate formative work while seniors rely on expertise built before Agents, a succession gap can emerge. Productivity today may quietly consume the expertise pipeline needed tomorrow.

## The durable model

```text
human–AI outcome ≠ AI capability alone
human–AI outcome = capability × calibrated reliance × system incentives
```

## Connections

- [From Smartest to Most Trustworthy](capability-to-trust.md)
- [Domain Expertise and Organizational Change](domain-expertise-and-org-design.md)
- [AI Safety in Three Layers](../ai-core/safety-three-layer-framework.md)

