# Pacing the AI Frontier — Can We Really Slow Down in an Ability Race?

**Core insight**: The hardest part of AI pacing is not getting one lab to slow down — it is convincing every key player that slowing down won't be punished. The real problem is not Pacing but Coordination + Verification: without coordination, the responsible lose first; without verification, no one dares coordinate.

**Sources**: Dario Amodei — *We Must Pace the Frontier* · Anthropic Threat Intelligence Report (Sep 2026) · Reuters — OpenAI agents attacked RubyGems · OpenAI — *Pacing model development in an era of cyber-critical capabilities*

📖 **Full learning record**: This article is the complete learning record.

**New to this topic?** Start with: [Agent](../../glossary.md#agent) · [Trustworthiness Framework](capability-to-trust.md) · [RSI](../../glossary.md#rsi)

---

## One-sentence summary

> Sustainable AI pacing does not ask the most responsible player to voluntarily run slower. It builds a regime where no key player can gain a decisive advantage by running irresponsibly faster.

---

## What I used to think vs. what I think now

**Before**: AI safety is mainly each company's own responsibility — good companies do safety, bad ones don't, and the market will sort it out.

**Now**: Even when every player genuinely wants to slow down, the system may not slow down — because individual intent and game-theoretic structure are different things. This is a classic Prisoner's Dilemma: shared awareness of risk does not automatically produce cooperation. The real question is not "should we slow down?" but "how do we make it safe for everyone to slow down?" — and the answer is Coordination + Verification.

---

## Table of contents

- [1. From Pause to Pace](#1-from-pause-to-pace)
- [2. Why does this matter now?](#2-why-does-this-matter-now)
- [3. Recursive Self-Improvement: the growth rate itself is growing](#3-recursive-self-improvement-the-growth-rate-itself-is-growing)
- [4. Competition: the real difficulty of pacing](#4-competition-the-real-difficulty-of-pacing)
- [5. Prisoner's Dilemma](#5-prisoners-dilemma)
- [6. The real problem is not Pacing but Coordination](#6-the-real-problem-is-not-pacing-but-coordination)
- [7. The key formula: Pacing → Coordination → Verification](#7-the-key-formula-pacing--coordination--verification)
- [8. What kind of pacing could actually work?](#8-what-kind-of-pacing-could-actually-work)
- [9. Embedded Evaluators](#9-embedded-evaluators)
- [10. From companies to nations](#10-from-companies-to-nations)
- [11. What does pacing actually buy?](#11-what-does-pacing-actually-buy)
- [12. Competition may eventually drive safety](#12-competition-may-eventually-drive-safety)
- [13. Connection to the Trust Framework](#13-connection-to-the-trust-framework)
- [14. The final mental model](#14-the-final-mental-model)

---

## 1. From Pause to Pace

As frontier AI capabilities grow rapidly, a question that used to live mainly in AI Safety circles is entering reality:

**Should we deliberately slow down the development of the most advanced AI?**

"Pause AI" sounds like stopping AI altogether.

But **Pacing the Frontier** is a more realistic concept:

> Not stopping AI progress, but ensuring AI capability growth does not chronically outpace humanity's ability to understand, evaluate, and control it.

Think of it as two curves:

**Capability ↑↑↑**
**Governance / Safety ↑**

What is truly dangerous is not that AI is improving, but that the gap between the two curves keeps widening.

The goal of pacing is therefore not to block progress but to:

> **Buy time for safety, governance, and society.**

---

## 2. Why does this matter now?

In the past, discussions of AI catastrophic risk were largely about hypothetical futures.

That is changing.

AI [agents](../../glossary.md#agent) can now:

- autonomously invoke tools;
- browse the internet;
- write and execute code;
- operate real software systems;
- carry out multi-step tasks over extended periods;
- coordinate as multi-agent systems.

Meanwhile, real-world cases have begun surfacing where agent behavior exceeds what testers expected or authorized.

RubyGems, the OpenAI–Hugging Face incident, and Anthropic's own disclosed safety tests all point to an important shift:

> **AI risk is gradually moving from hypothetical to empirical.**

This does not mean catastrophe has arrived. It means:

**For the first time, we have AI strong enough to genuinely study the control problems that even stronger AI might create.**

This is why "should we pace?" deserves more serious discussion now than a few years ago.

---

## 3. Recursive Self-Improvement: the growth rate itself is growing

One of the most important concepts here is [Recursive Self-Improvement](../../glossary.md#rsi).

Past: **Human → Better AI**

Gradually becoming: **Human + AI → Better AI**

Future: potentially **AI → Better AI → Even Better AI → …**

The key question is not "how much stronger is the next model?" but:

> **How much can the next model shorten the time to build the model after that?**

If AI starts significantly accelerating AI research, we face not just growing capability (Capability ↑) but a growing rate of capability growth (Rate of capability growth ↑).

This is a second-order change — and one of the things pacing should focus on most.

→ See [Research Acceleration — The Five-Layer Attenuation Funnel](../ai-research/research-acceleration.md)

---

## 4. Competition: the real difficulty of pacing

Suppose Anthropic judges that AI risk is already high and voluntarily slows frontier training by three months. Meanwhile OpenAI continues, Google DeepMind continues, xAI continues.

Three months later, if competitors have noticeably stronger models, users, developers, talent, capital, and market share may all shift toward the leader. A paradox emerges:

> **The most responsible company may be punished precisely for being responsible.**

At the national level it is even more severe. If the US deliberately slows down while China accelerates — or vice versa — the losses may extend beyond commercial interests to include technological advantage, economic leverage, military capability, intelligence capacity, research power, and long-term geopolitical influence.

Therefore: **Unilateral Pacing is unstable.** One-sided slowdown is unlikely to be a stable long-term strategy.

---

## 5. Prisoner's Dilemma

Simplify drastically:

|  | China Pace | China Race |
|---|---|---|
| **US Pace** | Both safer | US bears strategic risk |
| **US Race** | US gains advantage | Both continue the AI race |

Both sides may agree that Pace / Pace is the better long-term outcome. But what each side fears most is: **I Pace, you Race.**

So even when both sides know unlimited competition is dangerous, self-interest may drive each to choose Race / Race.

A crucial lesson:

> **Shared awareness of risk does not automatically produce cooperation.**

Even more: every participant genuinely wanting to slow down does not mean the system will slow down — because individual intent and game-theoretic structure are different things.

---

## 6. The real problem is not Pacing but Coordination

If Dario Amodei, Sam Altman, Elon Musk, and Demis Hassabis all publicly say "we should slow down," it is still not enough. Because every company will ask: **will the others really slow down?** And every country will ask: **is the other side secretly training a stronger model?**

The question shifts from "Should we slow down?" to "How do we coordinate?"

But coordination is not the final layer either. Even if everyone signs an agreement, one question remains: **how do we know whether the others are complying?**

So the ultimate question is: **Verification.**

---

## 7. The key formula: Pacing → Coordination → Verification

The entire pacing problem compresses into:

**Pacing → Coordination → Verification**

- Without coordination: the responsible lose first.
- Without verification: no one dares truly coordinate.

> **We don't primarily have a pacing problem. We have a coordination and verification problem.**

This is the single most important mental model for understanding the AI pacing challenge.

---

## 8. What kind of pacing could actually work?

A realistic regime cannot rely on "Trust us." It must gradually become "Verify us."

Workable structures might include:

### Capability Thresholds

Rather than prescribing "each company may train only N models per year," define dangerous capability thresholds, such as:

- autonomous cyber operations;
- dangerous biological assistance;
- large-scale autonomous replication;
- advanced AI R&D automation;
- recursive self-improvement.

When a model crosses one of these thresholds, stricter safety requirements are automatically triggered.

### Safety Gates

**Capability X reached** → must complete Evaluation + Alignment testing + Interpretability checks + [Containment](../ai-core/safety-three-layer-framework.en.md#containment-bound-the-consequences) + Security review → before proceeding to the next stage.

The analogy is automotive: **the faster the car, the higher the braking standard.** The goal is not to ban fast cars but to prohibit engines that vastly outstrip braking capability.

---

## 9. Embedded Evaluators

In *We Must Pace the Frontier*, Dario Amodei proposed a critically important mechanism:

Allow independent safety evaluators to enter frontier AI labs with near-employee-level access to information and systems.

This differs fundamentally from "the company publishes its own Safety Report." It begins to establish **Independent Audit**:

> **Don't trust the AI lab's claims. Verify them.**

If OpenAI, Anthropic, Google DeepMind, xAI, and other leading frontier labs eventually adopt similar mechanisms, it could form a genuine third-party verification layer for the AI industry.

This may be far more important than a one-time "pause AI for six months."

---

## 10. From companies to nations

Coordination between companies is already hard. Between nations it is harder still — especially **United States ↔ China**.

A comprehensive agreement is difficult in the near term: the strategic payoff of defection is too large, and verification is too hard. A more realistic path may be incremental:

### Level 1 — Red Lines
First, agree on the most extreme dangerous uses — for example, AI-assisted biological weapons.

### Level 2 — Shared Evaluation
Gradually build evaluation standards both sides can understand and accept: cyber evaluation, bio evaluation, autonomous replication evaluation, loss-of-control evaluation. At minimum, establish a shared language for risk.

### Level 3 — Capability Checkpoints
When models reach certain dangerous capability levels, extra testing and safety measures must be triggered. Not halting the entire AI industry — building **speed bumps** near the most dangerous capabilities.

### Level 4 — Pacing Recursive Self-Improvement
The truly important future international agreement may not be "how smart can AI get?" but rather "**how fast can AI help build the next generation of AI?**"

This may resemble nuclear arms control: not demanding both sides immediately destroy all nuclear weapons, but first limiting the rate at which the arms race itself accelerates.

---

## 11. What does pacing actually buy?

Not safety itself, but **Time**.

Suppose pacing buys humanity two extra years. Those years are valuable only if we can genuinely improve:

- Alignment;
- Interpretability;
- Evaluation;
- [Controllability](capability-to-trust.md);
- [Auditability](capability-to-trust.md);
- Cybersecurity;
- Governance;
- International coordination.

Therefore:

> **Value of Pacing = Time Gained × Progress Made During That Time**

If the second term is near zero, a ten-year pause solves nothing.

Pacing is not an answer. It is a window for finding one.

---

## 12. Competition may eventually drive safety

The old business logic: "Safety slows me down."

But as AI agents grow more powerful, a single serious accident could cause enormous economic losses, product suspension, training halts, government investigations, legal liability, brand damage, and harsher regulation.

The competitive payoff matrix then shifts:

> **Insufficient safety slows me down even more.**

Once this relationship holds, safety stops being merely a moral responsibility and becomes a **competitive necessity**.

This may be the economic foundation that makes coordinated pacing truly sustainable.

---

## 13. Connection to the Trust Framework

Pacing is ultimately a trust problem too.

The five dimensions of the [Trust Framework](capability-to-trust.md) — Predictable, Explainable, Auditable, Controllable, Recoverable — map directly onto AI governance.

Pacing between AI labs and between nations depends especially on **Auditable**, because:

**Cannot audit → cannot verify → cannot make credible commitments → cannot coordinate → everyone keeps racing**

> **Auditability is not just a product feature. In frontier AI governance, it may become the infrastructure of cooperation itself.**

---

## 14. The final mental model

AI Pacing looks like: "Should AI slow down a bit?"

Dig deeper and it turns out to be a chain of questions:

```
Capability → Risk → Pacing → Competition → Coordination → Verification → Trust
```

The ultimate question is not "do we have enough responsible people?" but:

> **Can we build a regime where responsible actors are not penalized for being responsible?**

That may be the core problem of Pacing the Frontier.

---

## How this connects to previous learning

- Directly linked to [From Smartest to Most Trustworthy](capability-to-trust.md) — Auditability rises from a product-level feature to international governance infrastructure
- Related to [Scaling Paradox](scaling-paradox.md) — Capability ↑↑ vs Governance ↑ is exactly the two-curve gap widening
- Directly linked to [Research Acceleration](../ai-research/research-acceleration.md) — RSI is the primary object pacing should focus on
- Related to [AI Safety in Three Layers](../ai-core/safety-three-layer-framework.md) — [Defense in Depth](../ai-core/safety-three-layer-framework.en.md#containment-bound-the-consequences) extends from individual system design to industry-wide governance
- Related to [AI and the Distribution of Economic Abundance](ai-economic-distribution.md) — international pacing coordination and economic policy coordination face the same game-theoretic structure
- Related to [Personal Agents](personal-agents-agent-economy.md) — as [Personal Agents](../../glossary.md#personal-agent) participate in real economic activity, agent behavior governance becomes more urgent

---

## Questions I still don't understand

1. How deep can Embedded Evaluators' access realistically go? Will inter-lab competition reduce meaningful audit to a formality?
2. How far does the nuclear arms control analogy extend? AI and nuclear weapons differ fundamentally — warheads can be counted, but AI capability is hard to measure and compare precisely.
3. If safety truly becomes a competitive necessity, under what conditions does this tipping point arrive? How large an accident is required?

---

## Next steps

- 📖 For the full Trustworthiness five-dimension framework, see [From Smartest to Most Trustworthy](capability-to-trust.md)
- 📖 For RSI data and the attenuation funnel, see [Research Acceleration](../ai-research/research-acceleration.md)
- 📖 For the three-layer AI safety framework, see [AI Safety in Three Layers](../ai-core/safety-three-layer-framework.md)
- 📖 For governance issues when agents enter real economic activity, see [Personal Agents](personal-agents-agent-economy.md)

---

**Last updated**: September 14, 2026

**Related**:
- [From Smartest to Most Trustworthy](capability-to-trust.md) — Auditability rises from product feature to governance infrastructure
- [Scaling Paradox](scaling-paradox.md) — the concrete manifestation of Capability ↑↑ vs Governance ↑
- [Research Acceleration](../ai-research/research-acceleration.md) — RSI is what pacing should focus on most
- [AI Safety in Three Layers](../ai-core/safety-three-layer-framework.md) — Defense in Depth from systems to industry
- [AI and the Distribution of Economic Abundance](ai-economic-distribution.md) — international coordination faces the same game-theoretic structure
- [Personal Agents](personal-agents-agent-economy.md) — governance becomes more urgent as agents enter real commerce
- [How My Mental Models Changed: Pacing → Coordination → Verification](../../mental-models.en.md)
