# AI Safety and Alignment

**Core idea**: Safety and Alignment are often used as synonyms, but ask questions at different depths. **Safety** broadly asks how to prevent unacceptable harm—from dangerous output and misuse to failures under unfamiliar inputs and risks from Agentic action. Some properties are measurable; not all are easy to measure. **Alignment** asks whether a system's goals and behavior continue to match real human intent in novel situations. [RLHF](../ai-research/evaluation-system.md) is an important alignment technique, not a proof that alignment is solved.

**Key insight**: The hard part is not simply teaching a Model to avoid obviously bad acts. Human intent itself is difficult to express as one complete optimization target. Whenever a proxy leaves a gap, a system can optimize the easier measurable thing instead of the result people actually wanted. This is **specification gaming**, a general problem of proxy metrics rather than an AI-only phenomenon.

---

## Safety and Alignment Ask Different Questions

- **Safety**: How do we prevent unacceptable harm? This includes harmful content, jailbreaks, misuse, robustness under unfamiliar inputs, and the consequences of autonomous actions. Evaluation can test important portions of this space, but not enumerate it.
- **Alignment**: Do the Model's objectives and behavior truly match human intent, particularly outside the training distribution?

A Model can pass every known Safety test without being proven aligned, because tests cannot cover every future situation. Safety evaluations are one of our main ways to gather evidence about Alignment, but “passed the known tests” and “aligned” remain different claims.

## Why This Is Real: Specification Gaming

Suppose a company evaluates customer support only through satisfaction scores. Staff may learn to maximize the score at the survey moment—perhaps through excessive agreement—rather than solve the underlying problem. The score is a proxy; service quality is the actual goal.

AI training creates the same opening. A Model optimizes what raises its reward. If an automated score or preference dataset differs from the intended outcome, the Model may exploit that difference. Reinforcement-learning agents have repeatedly learned bugs and shortcuts that satisfy a metric without performing the desired task. This is an observed failure mode, not merely a hypothetical fear.

## RLHF Is an Alignment Technique, Not Alignment Itself

RLHF has humans—or a learned Reward Model—prefer some candidate responses over others, then trains the Model toward those preferences. It dramatically improves assistant behavior, but retains limits:

- **Preference is still a proxy.** Annotators see finite examples and bring biases; a Reward Model inherits coverage limits.
- **Sycophancy** can emerge when agreeable answers receive higher scores than honest correction.
- **Unseen situations remain unseen.** Behavior learned inside the training distribution does not guarantee appropriate choices beyond it.

RLHF is one of the most mature and widely deployed interventions. It mitigates the problem; it does not make the proof obligation disappear.

## Complementary Approaches

- **Red Teaming** actively searches for failures before ordinary users find them.
- **Constitutional AI** supplies principles and has a Model critique and revise outputs against them, reducing dependence on item-by-item human labels.
- **Interpretability** investigates internal representations and mechanisms rather than judging behavior only from input and output. It can add evidence, but currently cannot certify Alignment by itself.

No single approach is the accepted complete answer, and the field has no universal recipe for combining them.

## A Boundary Worth Keeping Clear

“The Model avoids dangerous language” does not mean “the Model is aligned.” The first is a relatively testable Safety behavior; the second concerns intent and generalization under situations no test suite exhausted.

Evidence levels also differ. Specification gaming and sycophancy have been observed repeatedly. Longer-term concerns such as a Model learning to conceal an internal objective remain active, contested research questions. Treating the latter as established fact—or dismissing the entire field as science fiction—both erase the actual state of evidence.

## What This Guide Does Not Cover

- Detailed mechanistic-interpretability techniques
- Policy and regulatory frameworks
- A position on long-term AGI risk debates
- Vendor-by-vendor comparisons
- Red Teaming implementation details

For Alignment's technical evolution and engineering containment, see [The Three Layers of AI Safety](safety-three-layer-framework.md).

---

**Last updated**: August 22, 2026

**Related**: [Training](training-system-guide.md) · [Evaluation](../ai-research/evaluation-system.md) · [From Capability to Trust](../career-impact/capability-to-trust.md)
