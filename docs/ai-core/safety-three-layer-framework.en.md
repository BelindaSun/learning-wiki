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

## DelegationBench: when should an Agent ask, and when can it act?

**Source**: arXiv:2610.05532, *DelegationBench: Measuring When AI Agents Should Ask Before Acting* (Shiva Pochampally, 2026-10-04). Related: *Assistant or Actor?* (delegation regret), HiL-Bench (Scale AI).

**One-sentence takeaway**: a paper score for "should it ask" does not predict what an agent actually does, so the authorization boundary should be guarded by an independent policy layer — not bet on the model's in-the-moment judgment.

### What I learned

**Permission and Delegation are two different things**: permission is "allowed to do a class of things" and can be relatively long-lived; delegation is "allowed to make this one judgment for me" and must be treated much more carefully. A mature Agent is not one that never asks me — it is one that knows what not to bother me with and what must have my consent.

### Before / after

I used to assume model judgment transfers to agent behavior — that a model which looks cautious in judgment mode ("this action is risky, I should ask") would be equally cautious when acting.

Now I think judgment mode and action mode are different things. Every tested model asked less once it actually had tools, and "which model judges more cautiously" cannot predict "which model acts more cautiously." But with explicit rules written down, models score near-perfect (97.3%–100%) — so the problem may not be that models don't understand risk, but that the boundary was never formally expressed.

### The three key insights

1. **Three gaps**. ① The reaction gap: scores mislead — a hastily written three-line keyword rule matched human annotators at 69.1%, beating 8 of 10 models; yet it changed its decision in only 9 of 48 paired scenarios (one feature flipped at a time) versus 45.8%–70.8% for models. **A high score does not mean it captured the key features.** ② The wording gap: five equivalent phrasings of the same question shift models' "act directly" rate by up to 52.5 percentage points (GPT-OSS-20B); Opus 4.8 shifts only 4.2. ③ The judgment-to-action gap (the sharpest one): every model asks less when actually working than when judging someone else's action — Gemini 3.5 Flash-Lite's ask rate drops from 47.5% to 4.2%, Sonnet 5 from 32.5% to 20.0%. Two caveats: within the same model, scenarios the model judged as more action-worthy were more likely to trigger the actual tool call (r = .41–.75) — it is *cross-model* comparison that fails; and "not asking" is not "being reckless" — an audit found 6 calls that quietly did a narrower, safer version of the proposed action.
2. **Ten Yeses don't grant permanent power**: click-through "allow" measures trust and fatigue, not safety. A **Delegation Boundary** should be task-specific, context-sensitive, risk-aware, reversible, and auditable — plus one more: **it expires**. Permission draws the zone; Delegation decides within the zone — the zone must be drawn clearly, and the deciding power held tightly.
3. **A three-layer structure**: ① a hard rule layer (code-level interception) guards the boundary — irreversible actions, money, externally visible actions, and anything outside the user's literal words all get intercepted and confirmed; ② model judgment handles only the gray zone — balancing option order and fixing question format to dampen wording jitter; ③ the learning layer **proposes but never self-approves** — "you approved the last 30" may suggest making it automatic, but only the user can confirm. Trust is ultimately earned by the system, the way WeChat Pay and Alipay earned it through limits, risk controls, reversibility, and clear responsibility assignment.

### Connections to earlier learning

- **Aug 8 Scaling Paradox**: the perceived-vs-actual trustworthiness gap plus automation complacency (rubber-stamping) is the theory version of "clicking allow with eyes closed." Required Trust Margin ∝ severity × irreversibility × verification difficulty can serve directly as the hard-rule layer's trigger.
- **Aug 29 Harness > Model / MEA Loop**: an executor cannot judge its own success; it needs an independent Auditor. Same shape: boundary and verification live outside the model — only Verified State is reliable.
- **Aug 7 Agent adoption gap**: the enterprise-side bottleneck is Trust (responsibility assignment, auditability, gradualism); "trust is earned by the system" is its concrete elaboration.
- **Selective Action / Calibrated Delegation**: today added "expires" and "no self-expansion by the agent."

### Mental model

**Permission draws the zone, Delegation decides. Trust is granted by you — it should never be inferred by an agent from your fatigue.**

### Open questions

1. Why does action mode ask less? The paper only documents the phenomenon (documented but not explained) — role, red lights, attention budget, and training inertia are all untested (the last two are our speculation).
2. Once rules are formalized, predicates like "does this recipient count as external" still need model judgment — ambiguity is relocated, not removed. What then?
3. How do we detect that the user has become a rubber stamp? Approval latency, spot checks — which signals work?
4. Do the conclusions transfer to real deployments? Only 156 synthetic scenarios, 3 student annotators (α = .437), and the rules experiment tested just 3 models near the ceiling.

### To ask next

- Add just one sentence — "major operations require user permission" — does the ask rate recover? (First step of the ablation.)
- Compare with HiL-Bench: its Ask-F1 penalizes both under-asking and over-asking — do the two papers together give a fuller evaluation?
- Design a Delegation Policy Layer for Xiao Miu: which actions never get automated, which get time-bounded capped authorization, how does review on expiry work?
- What does agent payment infrastructure need to look like to be "as mature as WeChat Pay / Alipay"?

### Xiao Miu's perspective

1. This entry is the permission-side footnote to #037 Externalized Control: #037 moved *control* outside the agent; this one moves the *authorization boundary* outside the model's in-the-moment judgment — the same governance thinking, showing up a second time. It also lands between the Runtime and Identity & Permission layers of Lao Jia's Agent Trust Stack (Sep 28): the hard-rule layer is what those two layers should look like engineered.
2. The right direction for the learning layer is "rules get harder," not "permissions get wider." Approval-rate data is still useful to the agent — as fuel for hardening repeatedly-consistent gray-zone decisions into rules, never as justification for more freedom. This structurally closes the worry: the learning layer produces clearer boundaries, not broader autonomy.
3. The practical answer to predicate ambiguity (open question 2) may be inside *auditable*: periodically audit tool-call logs, surface cases where the model hesitated or was inconsistent on a predicate — then either harden them into rules or explicitly list them as gray-zone. That's what auditable really means: auditability is not for blame after the fact, it's how **the rulebook grows sharper over time**.

## Connections

- [AI Safety and Alignment](safety-alignment-guide.md)
- [Model Capability vs Agent Capability](model-vs-agent-capability.md)
- [Training Systems](training-system-guide.md)

