# Recursive Self-Improvement (RSI): When AI Starts Improving AI

**Core concept**: Teaching AI to do AI research itself is OpenAI's top priority for training new models. The "10x per year" trendline in mathematics is pushing RSI from theory toward reality — but Noam Brown estimates roughly 3x acceleration, not an overnight explosion: the bottlenecks are serial experiment time and physical GPU supply, not intelligence itself.

**Learning sources**:
- The Information · TITV "What Happens When AI Starts Improving AI?" (2026-09-14, host Rocket Drew, ~55 min) — no public transcript; details synthesized from official materials and media summaries, paraphrased parts marked
- Dwarkesh Patel podcast "Noam Brown – Agent swarms, alignment, & recursive self-improvement" (2026-09-17, ~75 min, full transcript available) — "stated in the interview" below refers to this episode

**New to this topic?** Start with: [RSI](../../glossary.en.md#rsi) · [Research Acceleration](research-acceleration.en.md) · [Evaluation](evaluation-system.en.md)

---

## What I used to think vs what I think now

| Before | Now |
|---------|---------|
| Hearing "AI will improve itself" conjured an overnight 100x intelligence explosion | Experiments are serial, GPUs are physical — Noam Brown estimates ~3x. But 3x stacked on an already-exponential curve is still earth-shaking |
| IMO gold + a Millennium Prize meant AI mathematicians had fully surpassed humans | Capabilities are jagged: brilliant at solving, weak at asking new questions or judging which directions matter; the best scenario is complementarity |
| A safety evaluation is a score — pass it and the model is safe | Evaluations must carry an inference budget: a model that looks harmless on a small budget may develop dangerous capabilities on a large one |

---

## Why is "AI improving AI" OpenAI's top priority?

The episode title is the answer. Brown disclosed that OpenAI's number-one objective in training new models is **recursive self-improvement** — teaching AI to do AI research — and that its lead over whoever is second is "by a wide margin" (per media summaries; exact wording unverified).

The deeper logic is **how OpenAI ranks everything else**: not by "do users like it" but by "how close is it to RSI." Creative writing, however exquisite, doesn't help train machine researchers, so it ranks lower; software engineering is deeply tied to internal compute iteration for RSI, so it gets top resources. Every model release in users' hands is, in Brown's framing, "a byproduct of forging the next generation of machine researchers" (per media summaries).

Why does this generation qualify? Brown's **"multiplier effect"** argument (per media summaries): people used to think AI improves by addition — more data, more feedback rules. In the GPT-6 generation, **a powerful pretrained base × deep RL with chain-of-thought produced a multiplier**: not 1+1=2 but 10×10=100. The catch: advanced RL on GPT-2/GPT-3 was useless — they weren't smart enough. **Starting with GPT-4, base intelligence crossed a threshold**, and the multiplicative reaction ignited.

This continues a story Brown told at TED AI 2024: during his PhD work on the Libratus poker AI, letting the bot think 20 seconds per hand boosted performance as much as scaling the model and training 100,000x. **Thinking at inference time is itself a scalable source of intelligence** — an intuition that runs straight through to RSI.

---

## The "avalanche" in mathematics: from high-school contests to a Millennium Prize in two years

Dwarkesh laid out a timeline Brown himself admits arrived "a lot faster than I expected":

```text
2024: solving high-school math competition problems
2025: IMO gold medal
Early 2026: solving an Erdős open problem
Sep 2026: ~10,000 agents, 130B tokens, 88 hours → Navier-Stokes Millennium Prize Problem
```

Brown once used "how long a human takes to solve it" as a yardstick and found a **10x-per-year** pattern: GSM8K ~5 seconds → MATH benchmark ~1 minute → AIME ~10 minutes → IMO gold ~100 minutes. Extrapolating, the year after IMO should have been "15-hour problems" — nowhere near a Millennium Prize. So he judged 2026 and 2027 unlikely, "maybe 2028."

> "So I was like, 'I don't think we're going to get it in 2026, probably not in 2027, maybe in 2028.' So it did happen a lot faster than I expected."
> — Noam Brown, Dwarkesh podcast (2026-09-17)

Even inside OpenAI, "a general language model with no tools and no internet access winning IMO gold" felt nearly impossible; two weeks before Navier-Stokes landed, a researcher at another frontier lab was willing to **bet Brown $1,000** that no Millennium Prize would fall before 2030. A member of the Navier-Stokes team used to forecast 12 months out — now "he just doesn't feel comfortable making predictions beyond three months."

**Why it matters for RSI**: mathematics is the first domain bottlenecked *purely* by thinking — its pace of progress is the upper-bound reference for how fast RSI could go. Everywhere else (including ML research itself), you must add serial experiment time.

---

## Why 3x, not 100x? — The structural bottlenecks of RSI

The most heated exchange across both interviews. Dwarkesh's intuition pump: AI can already pour more cognitive effort into one ML problem in a week than the field has accumulated in its history; by the end of next year OpenAI will have enough compute for 10,000 smarter agents to **each run a GPT-3-scale experiment per day**. ML research problems are mostly well-scoped and measurable — push sample efficiency and pretraining loss up; no need to "understand the essence of deep learning."

Brown largely agreed, with one structural caveat: **mathematics is bottlenecked purely by thinking; ML research is not**.

> "If you had 100x less compute and all the most brilliant people in the world working at OpenAI, how much progress would you be making…? I suspect it would be less progress, actually… In mathematics, you're purely bottlenecked by thinking… When you look at things like RSI, you do have to run experiments."
> — Noam Brown, Dwarkesh podcast

Experiments are serial (training new models and waiting for results takes time), and GPU supply is physical. Hence Brown's estimate: **meaningful acceleration, but no overnight intelligence explosion — roughly 3x**.

> "I don't think it's an overnight intelligence explosion where we go 100x faster, because we do get bottlenecked by certain limitations that are not bottlenecks of intelligence… considering how fast things are going now on an exponential, if that exponential is 3x faster, that is massive."

His uncertainty band: maybe only 50% faster, maybe (unlikely but possible) 10x — and he admits he could be entirely wrong. An intuitive analogy (Dwarkesh offered, Brown endorsed): 3x is like going **from "no o1, only non-reasoning models" straight to Astra within a year**.

OpenAI's Sep 6 "research acceleration" blog post footnotes this: as of early August, **top-1% researchers were spending $7,000–$8,000 per day on Codex**, growing exponentially. But Brown stressed it's hard to attribute credit to AI vs. humans — it depends on the baseline (see the five-layer decay funnel in [Research Acceleration](research-acceleration.en.md)).

---

## Jagged capabilities: has AI actually surpassed human mathematicians?

Brown explicitly rejects the "fully superhuman at math" narrative. Model capabilities are **jagged**: extremely strong on some dimensions, weaker than human mathematicians on others — **poor at posing new problems, poor at judging which branches of mathematics are worth developing**. Mathematicians like Terry Tao have made the same point: AI hasn't produced anything like topology or Cartesian coordinates.

His best-case scenario is **AI as a complement to human mathematicians**, not a replacement. But when pressed, he conceded the long tail of weaknesses could get sanded down, making full surpassing possible eventually — it depends how long the tail is.

Hidden here is his core argument for why LLMs may **not** replay the AlphaGo story. AlphaZero went from European champion to crushing humans within a year because **self-play provided an infinite curriculum** — the opponent is always exactly as strong as you. Current LLM reinforcement learning has no such mechanism: **the smarter the model gets, the harder it is to find problems hard enough to keep it learning**; too-easy problems teach nothing. He says the wall hasn't been hit, but it's a credible counterexample scenario.

Conversely, Dwarkesh's jaggedness argument: AI only needs to be good enough at the narrow skill of "building better learners" — what it builds can be more general. Jagged capabilities suffice for generality. Brown agreed: ML's crisp metrics make RSI a natural fit for models' spiky strengths.

---

## Humanity's last moat: "research taste"

The most human chapter of the TITV interview. Brown says AI has taken over 90% of his execution work — colleagues joke he's "five Codexes in a trench coat" (per media summaries). Internally, models already perform some data-quality work **100 times better than human researchers did in 2023** (Brown, quoted by The Information).

The 10% machines can't do? Brown's answer: **research taste** — the intuition for what to do next amid endless unknowns, and how to steer toward long-term goals.

He ran an experiment on his own PhD project: asked Astra to redo his six years of work on superhuman poker AI (Libratus). **Astra failed — it sank into secondary details and lost global judgment** (per media summaries).

Why research taste resists training is fundamental: **it can't be precisely measured, so it can't be reinforcement-learned**. A PhD student makes countless micro-decisions and gets feedback months or years later via a paper; AI likewise gets no fast signal to correct its "intuition."

But Brown isn't optimistic about how long the moat holds: "**a model generation or two from now, I might say, okay, it's better than me at this too**" (per media summaries). The host quipped: "So you still have a job. For now." He replied: "For now."

A related absurdity (per media summaries, awaiting cross-verification): OpenAI's biggest pain is no longer "getting AI to produce math" but, after it does, "spending enormous effort flying in top human mathematicians to verify line by line whether the AI is right." **Humans have become the bottleneck on AI's evolution** — not because AI can't generate proofs, but because human verification can't keep up.

---

## The internal/external gap: when models work for three months but ship every two

Chapter five of the Dwarkesh interview raises a problem Brown says too few people inside or outside labs are thinking about:

- Frontier models ship **at most every two months**, sometimes faster;
- The task horizons models handle keep growing: **one week** now, soon **one month**, then **three months**;
- Once a model works effectively for 3 months on a 2-month release cycle — **you cannot evaluate it at its full capability length before the next release**.

> "If you're in a world where they can operate effectively over three months, but the model release cycle is every two months, then you don't have a way to evaluate the models at the full length of their capabilities before the next model release cycle."
> — Noam Brown, Dwarkesh podcast

This isn't just an alignment problem; it's a product problem: capability, safety, and alignment can all silently degrade on untested long horizons. And **many companies' safety policies were written in the GPT-4 era** — never updated for long-horizon agents.

Slowing releases doesn't fix it; it creates a new dilemma. Dwarkesh notes that during RSI, labs may **skip external deployment entirely** — "why bother with classifiers and safety measures and taking flak, just to release a model that helps others do RSI too?" Mathematics is already the crisp example: an internal model that can solve Millennium Prizes while the outside world can't touch it.

> "It is a situation where that is an unfair advantage. There are trade-offs here. I don't have an answer for how to weigh those trade-offs appropriately."
> — Noam Brown, Dwarkesh podcast

He calls the lab-vs-world gap an **unfair advantage** and admits he doesn't know how to weigh the trade-offs.

---

## Evaluations must carry an inference budget: scores are the illusion, curves are the truth

Brown's argument from his July 2026 talk at the Global AI Frontier Symposium in Seoul (same logic as both interviews) is the key to evaluation in the RSI era: **looking only at AI scores creates an illusion — you must factor in inference cost and time.**

His analogy: the same student performs differently on a 10-minute quiz versus a day-long exam; AI likewise differs between answering quickly and trying many approaches over days.

The key facts (Brown, Seoul talk):

- **GPT-5.5** doesn't look like a huge leap on benchmarks alone, yet everyone who has used it reports much higher perceived performance — because newer models **improve significantly with longer reasoning and more output tokens**;
- Older models plateaued past a certain thinking time; newer ones keep improving **even after generating 100 million tokens**;
- Evaluations often stopped **not because performance peaked, but because time and infrastructure ran out**;
- A safety evaluation on a small compute budget may show a model incapable of anything dangerous — but with far greater resources and time, **capabilities invisible in the evaluation can emerge**.

Hence his proposal: replace single scores with **performance curves** — cost/tokens/time on the x-axis, performance on the y-axis. In the RSI era, the answer to "is this model safe" depends on how long you let it think — which is exactly why the "three-month horizon vs. two-month release cycle" gap is so unsettling.

---

## Next steps

- 📖 [Multi-Agent Scaling: Parallelizing Test-Time Compute](../ai-core/multi-agent-scaling.en.md) — RSI's other leg: 10,000 agents and Navier-Stokes
- 📖 [Research Acceleration](research-acceleration.en.md) — OpenAI's internal RSI numbers: the five-layer decay funnel
- 📖 [Evaluation](evaluation-system.en.md) — RLHF, reward hacking, benchmark limits
- 📖 [Automated Alignment Research](automated-alignment-research.en.md) — can AI automate alignment research itself?
- 📖 [Agent Collective Behavior](../ai-core/agent-collective-behavior.en.md) — the Hugging Face incident, fully documented

---

**Last updated**: 2026-09-19
**Related**:
- [Research Acceleration](research-acceleration.en.md)
- [Multi-Agent Scaling](../ai-core/multi-agent-scaling.en.md)
- [Evaluation](evaluation-system.en.md)
- [Automated Alignment Research](automated-alignment-research.en.md)
- [How My Mental Models Changed: RSI goes 100x overnight → ~3x](../../mental-models.en.md)
