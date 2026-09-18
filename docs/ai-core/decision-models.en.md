# Decision Models — Not Every Decision Needs an LLM

**Core insight**: Not all inference inside an AI system has to go through the same kind of model: Generative Inference (generating text token by token) handles language interaction, while Decision Inference (structured input, typed decision output, calibrated confidence) handles judgment. Jev (TypeSafe AI, 2026) is the first example of a "System One Model" — its training objective shifts from "being liked" (RLHF) to "calibrated confidence" (RLCD), closing the loop on Calibrated Trust from the model's side.

**Sources**: TypeSafe AI's launch of Jev on September 15, 2026 (Diogo Almeida's public letter + press coverage); discussion with Lao Jia (ChatGPT): Model → Inference → Generative Inference → Decision Inference → Agent Architecture

📖 **Full learning record**: This article is the complete learning record.

**New to this topic?** Start with: [Inference](../../glossary.md#inference) · [LLM](../../glossary.md#llm) · [Agent](../../glossary.md#agent)

---

## 1. Where this picks up: a hidden assumption in the Inference guide

The [Inference System Guide](inference-system-guide.en.md) answers "how does inference work inside one model": input flows through a network of weights, one token predicted at a time, looping until the answer emerges.

But it carries a hidden assumption: **all inference in the system goes through the same large model.** One chatty model handles conversation, judgment, and decisions alike.

Lao Jia suggested this article connect into the knowledge tree as:

```text
Model → Inference → Generative Inference → Decision Inference → Agent Architecture
```

This article covers the two middle links: first split Inference in two, then connect back to Agents.

## 2. Generative Inference vs Decision Inference

One clarification up front: these are **working names** for a useful distinction, not settled industry terminology.

**Generative Inference**: natural-language input → natural-language output, generated token by token. This is what ChatGPT and Claude do most of the time. Its strength is language interaction: explaining, writing, conversing, turning vagueness into clarity.

**Decision Inference**: structured state in → typed decision out, with a calibrated confidence attached. No natural language generated.

|  | Generative Inference | Decision Inference |
|---|---|---|
| Input | Natural language | Structured state |
| Output | Token-by-token text | Typed decision + confidence |
| Typical training objective | Being liked, sounding good (RLHF) | Confidence calibration (RLCD) |
| Latency / cost | Seconds, billed per token | Hundreds of ms, output free |
| Typical use | Talking to people | Judgment inside software |

"LLM" in the title means the left column — generative chat models. The point is not that decisions don't need intelligence; it's that **not every decision needs "write a paragraph first, then extract the decision from the paragraph."**

## 3. Almeida's question: chat has been superhuman for years — where is the automation?

Diogo Almeida co-invented RLHF and InstructGPT — the training methods behind ChatGPT carry his name. He left OpenAI in 2024 to found TypeSafe AI, which released its first model, Jev, on September 15, 2026, with roughly $40M in seed funding (led by DCVC).

His question:

> After co-inventing ChatGPT, I kept asking myself: why have superhuman chat models not led to AGI?

His answer: **chat is solved; automation is not.** RLHF trained models into "delightful conversationalists," but baked in three flaws along the way: verbosity, overconfidence, and unreliability. Those flaws keep a human pinned in the loop — the more human the output sounds, the less willing anyone is to let it act on its own.

Software doesn't want paragraphs; it wants decisions: which tool to invoke, what to do next, whether to approve a request, whether to hand a task to another model. Doing that with LLMs forces software to read prose and then extract the decision from the prose: expensive (tokens burned on filler), slow (seconds of sequential generation), unreliable (one answer today, a different framing tomorrow).

## 4. 2026 Case Study: Jev

Jev is the first example of "System One Models" (named after Kahneman's System 1 fast thinking). Note this article's framing: **Jev is the case study, not the protagonist** — even if the company is gone in three years, the Generative vs Decision distinction still stands.

- **Input**: the current state of a task or workflow (structured data) + a set of typed questions
- **Output**: three primitives — Choice (pick one of up to 255 options), Score, yes/no probability; each with a 0–1 confidence value
- **What it can't do**: no chat interface; cannot generate strings, code, or prose; 32K context; no image input
- **Fast**: 70–500 ms end to end (vs seconds for LLMs) — because it skips token-by-token generation
- **Cheap**: input at $0.042 per million tokens, output free; the company claims 20–200× faster and 40–400× cheaper; hundreds of outputs can be produced in parallel from a single prompt
- **Training method RLCD**: Reinforcement Learning for Calibrated Decisions — new architecture + new sampler + new training method, the whole stack rewritten from scratch
- **The name**: a nod to the Jevons Paradox — the cheaper intelligence gets, the more of it gets used

On "can't hallucinate," honesty first: Jev's output *shape* is guaranteed by construction — it cannot emit a malformed answer. **But a schema-valid answer can still be factually wrong.** Almeida admitted as much in the launch discussion. This is a structural guarantee, not a training breakthrough.

Also note: so far only a high-level description exists — no public weights, no reproducible paper. It's early access; treat conclusions as provisional.

## 5. Why this is more than a new product: the training objective decides what kind of trust the output can support

This is what Lao Jia meant by "the connection matters more than Jev."

**RLHF → RLCD: the training objective decides the model's character.** RLHF optimizes for "do people like this"; RLCD optimizes for "when you say 0.9, be right nine times out of ten." One produces conversationalists, the other produces decision-makers. The full RLHF story is in the [Training System Guide](training-system-guide.en.md).

**Calibration moves from a human-side problem to a model-side training objective.** This wiki already has [Calibrated Trust](../career-impact/scaling-paradox.en.md) and [Calibrated Autonomy](../career-impact/personal-agents-agent-economy.en.md): until now, calibration was the human's problem — how much should I trust it, when do I let go. Jev shows calibration can also be a factory property of the model: with confidence itself trained to be accurate, software can use it to decide "act or escalate." Trust calibration gets its first closed loop on the model's side.

**The decision points inside the agent loop are exactly where Decision Inference belongs.** The [Agent Architecture](agent-architecture.en.md) loop — perceive → decide → act → feedback — hides a chain of small decisions: which tool to pick, whether this step went right, whether to escalate to a human. Today all of that runs through generative LLMs; tomorrow it can be divided up: language interaction to chat models, structured judgment to decision models. The cascading / routing pattern in the [Agent Intelligence three-layer framework](agent-intelligence-layers.en.md) — one agent running five or six models — is already an early form of this division of labor.

TypeSafe calls this "composable intelligence": intelligence as composable, testable, layerable building blocks inside software — not one black-box brain that does everything.

## 6. Next steps

- How Decision Inference gets evaluated (how calibration is actually measured, how gaming is prevented) has no good public treatment yet → see [Evaluation](../ai-research/evaluation-system.en.md) (to be expanded)
- Whether "System One Models" becomes a real model category or stays a one-company story — check back in six months

---

**Last updated**: September 18, 2026

**Related**:
- [Inference System Guide](inference-system-guide.en.md) — where this article starts: how inference works "inside one model"; this article pushes the question to the system level
- [Training System Guide](training-system-guide.en.md) — why RLHF produces "delightful conversationalists"; RLCD is a different training objective
- [Agent Architecture](agent-architecture.en.md) — the decision points inside the agent loop are exactly where Decision Inference belongs
- [Agent Intelligence Three-Layer Framework](agent-intelligence-layers.en.md) — cascading / routing: one agent running five or six models is already an early form of inference division of labor
- [Scaling Paradox](../career-impact/scaling-paradox.en.md) — the two-layer Calibrated Trust framework: the human side of calibrating trust
- [Personal Agents — From Chatbots to an Agent Economy](../career-impact/personal-agents-agent-economy.en.md) — Calibrated Autonomy: when to act for me, when to stop and ask
