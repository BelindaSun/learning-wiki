# Glossary

> This page answers one question: **which recurring core terms does someone learning AI need in order to read this wiki?**
>
> The inclusion bar (four questions): does the term recur across many articles? Is it a relatively stable, general AI / computing concept? Would missing it clearly block understanding what follows? Can it build a stable mental model in one sentence? Every future addition must pass these four questions first — **articles record fully; the Glossary filters.**
>
> This is the **knowledge trunk** (42 terms, and it should grow ever more slowly). Two other layers:
> - [All Concepts](index-all-concepts.md) (Concept Index) — concepts you've learned and may want to look up later; it can grow without bound: concept → one-liner → source article.
> - [Mental Models](mental-models.md) — cognitive compressions that truly changed how we think; few and precious.
>
> Each term keeps the same structure: **one-sentence definition → a mental image → its relations to other core concepts → deeper reading**. No long arguments here — follow the links for the full guides.

---

## Reading Map

> Six categories. Walk through them once in this order, then jump around freely. Ten seconds to see how this map works:
>
> **AI Foundations** (what AI is, how models come to be) → **AI Systems** (how a model becomes a working system) → **Compute & Infrastructure** (what the compute underneath looks like) → **Agents & Scaling** (how systems get bigger, more numerous, and enter everyday life) → **Safety, Alignment & Trust** (keeping it on track, and whether it is worth entrusting) → **Frontier AI** (a few concepts worth tracking for the long term)

---

## AI Foundations

#### AI

**Artificial Intelligence** — the broad family of technologies that let machines display intelligent behavior: recognizing images, understanding language, playing games, and making decisions. LLMs are one prominent current branch.

*Imagine it*: two different relationships — don't mix them. First, which family it belongs to:
```
AI ⊃ LLM
```
Second, how it becomes something you can use — a different relationship entirely:
```
Model — capability core → interface and product design → Product (e.g. ChatGPT, Claude.ai)
```

Think of a Model as an engine and a Product as the complete vehicle.

*Related*: [LLM](#llm) · [Model](#model) · `Product`

*Deeper*: [Start Here](start-here.en.md)

#### LLM

**Large Language Model** — an AI model trained on large amounts of text and other data. At its core, it receives a sequence and predicts what is likely to come next. Claude, GPT, and Gemini are model families containing LLMs.

*Related*: [AI](#ai) · [Model](#model) · [Token](#token) · [Inference](#inference)

*Deeper*: [Start Here](start-here.en.md) · [Transformer](docs/ai-core/transformer-architecture.en.md)

#### Model

The capability core inside an AI product: an architecture plus learned parameters. ChatGPT and Claude.ai add tools, retrieval, memory, safety, orchestration, and interfaces that the Model alone does not provide.

*Imagine it*: the engine matters, but the transmission, chassis, controls, and driver determine whether the complete car works well. Remember the chain: Training → Weights → Inference — the weights are the tuned parameters themselves.

*Related*: [AI](#ai) · [LLM](#llm) · `Product`

*Deeper*: [Start Here](start-here.en.md) · [Models Deep Dive](docs/ai-research/models-deep-dive.en.md)

#### Token

A unit into which an LLM divides text. It may be a word, part of a word, or punctuation. Context limits and usage are commonly measured in Tokens.

```
Text → Tokens → predict next Token → append → repeat
```

*Related*: [LLM](#llm) · [Inference](#inference) · [Context](#context)

*Deeper*: [Context Window](docs/ai-core/context-window-guide.en.md)

#### Embedding

A numerical vector representing the semantic position of a word, sentence, or passage. Similar meanings tend to produce nearby vectors.

*Imagine it*: place every passage on a vast map of meaning; "lose weight" and "slim down" land nearby.

*Related*: [Token](#token)

*Deeper*: [Embeddings](docs/ai-core/embeddings-guide.en.md)

#### Multimodal

An approach that lets text, images, audio, and video jointly participate in representation and reasoning instead of first translating everything into prose. It adds perception to an intelligent system.

*Imagine it*: humans no longer have to serve as the Model's only sensor.

*Related*: [Embedding](#embedding) · [Agent](#agent)

*Deeper*: [Multimodality](docs/ai-core/multimodal-guide.en.md)

#### Transformer

The dominant LLM architecture, centered on Attention — the mechanism that lets a model judge which words in a sentence relate to each other. Introduced in 2017, still the foundation.

*Imagine it*: every modern LLM shares this foundation design — swapping models is like swapping engines; swapping architectures is swapping the foundation, and that happens once a decade.

*Related*: [LLM](#llm) · [Token](#token)

*Deeper*: [Transformer Architecture](docs/ai-core/transformer-architecture.en.md)

#### Inference

The process through which a trained Model calculates an output for a new input, often one Token at a time. It predicts rather than looking up a finished answer.

```
Training:  data → adjust parameters → learned capability
Inference: input → trained Model → output
```

*Related*: [Token](#token) · [LLM](#llm) · [Model](#model) · [Training](#training)

*Deeper*: [Start Here](start-here.en.md) · [Inference System](docs/ai-core/inference-system-guide.en.md)

#### Training

The process that turns initial parameters into a capable Model. **Pretraining** learns patterns from enormous unlabeled corpora; **supervised fine-tuning** teaches assistant-like examples; **RLHF** uses human preferences to shape behavior. Ordinary later conversations perform Inference and do not update the frozen weights.

*Imagine it*: read the library → receive job training → adjust service from feedback.

*Related*: [Inference](#inference) · [Fine-tuning](#fine-tuning) · [RLHF](#rlhf)

*Deeper*: [Training](docs/ai-core/training-system-guide.en.md)

#### Fine-tuning

Continuing to train an already-trained general Model on a smaller, more specialized dataset, so it gets better at a particular task or domain.

*Imagine it*: pretraining is general education; fine-tuning is specialist training — the foundation is general, the craft is specific.

*Related*: [Training](#training) · [RLHF](#rlhf)

*Deeper*: [Training](docs/ai-core/training-system-guide.en.md)

#### Prompt

The part of Context that a user supplies as instructions or questions. Clear background, constraints, examples, and output requirements narrow the range of plausible continuations.

*Imagine it*: the AI predicts what most plausibly comes next on top of your words. The vaguer the Prompt, the more plausible "nexts"; the more specific, the easier it is to hit the one you actually want.

*Related*: [Context](#context) · [Inference](#inference)

*Deeper*: [Prompt Engineering](docs/ai-core/prompt-engineering-guide.en.md)

#### RLHF

**Reinforcement Learning from Human Feedback** — the training method that teaches a model human preferences: have the model produce several answers, let humans pick the better ones, then continue training on that preference signal.

*Imagine it*: the training goal shifts from "saying it right" to "saying it the way people like" — but "likeable" is not the same as "truly aligned." This is the most mainstream alignment technique today, and also only a mitigation.

*Related*: [Training](#training) · [Alignment](#alignment)

*Deeper*: [Evaluation](docs/ai-research/evaluation-system.en.md) (the full three-step flow) · [Training](docs/ai-core/training-system-guide.en.md)

#### Alignment

Whether a Model's goals and behavior actually match human intent, including unfamiliar situations. This differs from the broader practical question of preventing unacceptable harm. RLHF is one alignment technique, not a guarantee.

*Imagine it*: Safety asks whether cheating was detected; Alignment asks whether the person's underlying motives are trustworthy.

*Related*: [Training](#training) · [RLHF](#rlhf)

*Deeper*: [AI Safety and Alignment](docs/ai-core/safety-alignment-guide.en.md)

#### Eval

The full practice of scoring and comparing AI capabilities with standardized tests — not just how well it answers, but under what inference budget and along which dimensions. A Benchmark is Eval's concrete exam paper.

*Imagine it*: the syllabus plus the grading rubric. Noam Brown's reminder: evals must carry an inference budget — a model that looks harmless at low budget may develop dangerous capabilities at high budget.

*Related*: [Alignment](#alignment) · [Inference](#inference)

*Deeper*: [Evaluation](docs/ai-research/evaluation-system.en.md)

---

## AI Systems

#### Agent

An AI system that pursues a goal by selecting next steps, calling Tools, observing results, and continuing—not merely answering one turn.

```
Chatbot: question → answer → stop
Agent:   goal → decide → act → observe → decide again
```

*Related*: [Tool](#tool) · [Workflow](#workflow) · [State](#state) · [Memory](#memory) · [Harness](#harness)

*Deeper*: [Start Here](start-here.en.md) · [Agent Architecture](docs/ai-core/agent-architecture.en.md)

#### Tool

An external capability an Agent can call: reading files, querying data, sending messages, or running code. Models, rules, or routing logic may participate in Tool selection.

*Imagine it*: how an Agent decides "which tool to use" at each step differs by implementation — some rely on the model itself, some add rules or routing logic; there is no single standard way.

*Related*: [Agent](#agent) · [Workflow](#workflow) · [MCP](#mcp)

*Deeper*: [Agent Architecture](docs/ai-core/agent-architecture.en.md)

#### Workflow

A task path whose steps, branches, loops, and dependencies are substantially defined in advance. One Agent or several systems can execute it. Workflow and Agent compare predesigned structure with runtime autonomy; neither is a higher evolutionary stage.

*Related*: [Agent](#agent) · [Tool](#tool)

*Deeper*: [Start Here](start-here.en.md) · [Workflow Design](docs/ai-application/workflow-design-guide.en.md)

#### Context

All information visible to the Model during the current run: input, conversation history, files, system instructions, and Tool results.

```
Context — what is visible now
State   — where the task is now
Memory  — what can be stored and retrieved later
```

*Related*: [Token](#token) · [State](#state) · [Memory](#memory) · [Harness](#harness)

*Deeper*: [Start Here](start-here.en.md) · [Context Window](docs/ai-core/context-window-guide.en.md)

#### State

A snapshot of the system's current condition: completed steps, current position, and intermediate results. It answers "where are we?" rather than "what can the Model see?" (See the three-way comparison under Context.)

*Imagine it*: like which checkbox on the task list has been ticked — it determines what to do next.

*Related*: [Context](#context) · [Memory](#memory) · [Agent](#agent)

*Deeper*: [Start Here](start-here.en.md) · [Agent Architecture](docs/ai-core/agent-architecture.en.md)

#### Memory

Information stored for later retrieval. It may or may not persist across conversations, depending on the system. Memory is the drawer; Context is what has been placed on today's desk. (See the three-way comparison under Context.)

> ⚠️ This is Agent software Memory. Hardware memory—RAM, cache, and HBM—is covered under Compute & Infrastructure below.

*Related*: [Context](#context) · [State](#state) · [Agent](#agent)

*Deeper*: [Start Here](start-here.en.md) · [Agent Memory](docs/ai-core/memory-system-guide.en.md)

#### MCP

**Model Context Protocol** — a protocol through which AI systems connect to external Tools and data sources in a common way. USB is a useful interface-standard metaphor, not a technical equivalence.

*Related*: [Tool](#tool) · [Harness](#harness)

*Deeper*: [MCP](docs/ai-application/mcp-protocol-guide.en.md)

#### Harness

The complete working environment around a Model or Agent: visible Context, Tools, permissions, execution feedback, and hard boundaries.

*Imagine it*: configure an employee's office, equipment, access, rules, and feedback system. Boundaries are one part of the setup.

*Related*: [Agent](#agent) · [Tool](#tool) · [MCP](#mcp) · [Context](#context)

*Deeper*: [Harness](docs/ai-application/harness-system.en.md)

#### RAG

**Retrieval-Augmented Generation** — retrieve relevant material, place it in Context, then generate an answer grounded in it.

```
Question → Retrieve → Context → Generate
```

*Imagine it*: an open-book exam.

*Related*: [Context](#context) · [Model](#model) · [Embedding](#embedding)

*Deeper*: [RAG](docs/ai-application/rag-guide.en.md)

---

## Compute & Infrastructure

#### CPU

**Central Processing Unit** — the general-purpose compute core: designed to execute a single task fast and correctly, even when the task is full of branching decisions. It emphasizes generality, complex control, and low latency.

*Imagine it*: a master craftsperson who does one thing at a time, but fast and precisely.

*Related*: [GPU](#gpu) · [FLOPS](#flops)

*Deeper*: [Foundation Zero](docs/computing-foundations/foundation-zero.en.md) · [CPU vs GPU](docs/computing-foundations/cpu-vs-gpu.en.md)

#### GPU

**Graphics Processing Unit** — a processor with a vast number of relatively simple cores working in parallel. Originally designed for graphics rendering, it happens to be exactly the "repeat the same simple operation over and over" work that deep learning needs.

*Imagine it*: thousands of workers who only do simple arithmetic, all at once — individually weak, but the scale of "simultaneously" is exactly what deep learning needs.

*Related*: [CPU](#cpu) · [Parallelism](#parallelism)

*Deeper*: [CPU vs GPU](docs/computing-foundations/cpu-vs-gpu.en.md)

#### RAM

**Random Access Memory** — the working space at the CPU/GPU's hand: far faster than storage (disk), but volatile, and far smaller.

*Imagine it*: the desk surface — the bigger it is, the more material you can spread out at once; but at closing time (power off) it all has to be put away.

*Related*: [Memory Wall](#memory-wall) · [HBM](#hbm)

*Deeper*: [Foundation Zero](docs/computing-foundations/foundation-zero.en.md) · [Memory Wall](docs/computing-foundations/memory-wall.en.md)

#### OS

**Operating System** — the manager of hardware resources and scheduler of every program: each program you open runs on resources it allocates.

*Imagine it*: the building's property manager — water, elevators, and access control are all under its care; the tenants (programs) just live there.

*Related*: [Runtime](#runtime) · [CPU](#cpu)

*Deeper*: [Foundation Zero](docs/computing-foundations/foundation-zero.en.md)

#### HBM

**High Bandwidth Memory** — main memory engineered for high bandwidth: several memory dies stacked together and placed right next to the compute chip. AI hardware commonly uses it to ease the memory wall.

*Imagine it*: ordinary memory is a warehouse in the suburbs; HBM builds the warehouse right next to the factory — short road, fast delivery.

*Related*: [Memory Wall](#memory-wall) · [GPU](#gpu)

*Deeper*: [Memory Wall](docs/computing-foundations/memory-wall.en.md)

#### FLOPS

**Floating-Point Operations Per Second** — the unit measuring how many math operations hardware performs per second. It is not "how smart the chip is" but "how fast its hands are." Lower numerical precision lets the same width of hardware pack more numbers at once, so FLOPS goes up.

*Imagine it*: a worker's hand speed — fast hands don't mean good work, but good work with slow hands goes nowhere.

*Related*: [GPU](#gpu)

*Deeper*: [FLOPS and Precision](docs/computing-foundations/flops-and-precision.en.md)

#### Memory Wall

The widening gap between how fast arithmetic has grown and how fast data can be moved — compute units are often not too slow; the data just hasn't arrived. **Note**: *Memory* here means hardware memory (RAM/cache/HBM), not the Agent's Memory — same word, completely different concept.

*Imagine it*: the factory keeps getting faster machines, but the delivery trucks stay the same — the bottleneck is logistics, not production. Folded in: the **Memory Hierarchy** — registers/cache → RAM/HBM → disk, each layer trading "fast" against "big."

*Related*: [HBM](#hbm) · [RAM](#ram) · [FLOPS](#flops)

*Deeper*: [Memory Wall](docs/computing-foundations/memory-wall.en.md)

#### Runtime

The software environment that executes code or Model operations and coordinates resources while they run. A model is data, not code — it needs a Runtime to actually run.

*Imagine it*: a score does not play itself; the Runtime is the performer.

*Related*: [Model](#model) · [OS](#os)

*Deeper*: [Software Map](docs/computing-foundations/software-map.en.md) · [Software × Hardware Map](docs/computing-foundations/software-hardware-map.en.md)

#### Parallelism

The idea of splitting one job into pieces and running them simultaneously — what lets GPUs win deep learning and multi-agent setups speed up. But Amdahl's Law warns: some part of any job is inherently unsplittable, so parallelism is never free acceleration.

*Imagine it*: one person moving 100 bricks vs. ten people moving 10 each — but someone must distribute the bricks, coordinate, and wait; coordination itself costs time.

*Related*: [GPU](#gpu) · [FLOPS](#flops) · [Multi-Agent](#multi-agent)

*Deeper*: [CPU vs GPU](docs/computing-foundations/cpu-vs-gpu.en.md) · [Scaling and Communication](docs/computing-foundations/scaling-and-communication.en.md)

---

## Agents & Scaling

#### Multi-Agent

Multiple Agents working together — they can divide labor, check each other, and speed things up in parallel. But Noam Brown's caveat matters: ~10,000 agents solved the Navier-Stokes Millennium Prize Problem, and he says multi-agent deserves less than 10% of the credit — the real driver is a powerful general model × very long horizon; multi-agent is just the parallel carrier of test-time compute.

*Imagine it*: multi-agent is first a latency optimizer (spend 2× compute, halve the wait), and only second anything else — "more people" does not automatically mean "more power."

*Related*: [Agent](#agent) · [Test-Time Compute](#test-time-compute) · [Parallelism](#parallelism)

*Deeper*: [Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.en.md)

#### Test-Time Compute

Compute spent not in training but at the moment a model answers — letting it think longer (longer chains of thought), try more paths, or send multiple agents to think in parallel. The new frontier of scaling: from "stacking compute in training" to "spending compute in inference."

*Imagine it*: giving 30 extra minutes on the exam vs. one more year of schooling — the first is test-time compute, the second is training compute.

*Related*: [Inference](#inference) · [Multi-Agent](#multi-agent) · [Eval](#eval)

*Deeper*: [Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.en.md)

#### Skill

Here it means a Skill in the Claude / Claude Code sense: a packaged "how to do this thing" manual for Claude — the steps, rules, and format requirements for a class of task, written down and stored so they never need explaining from scratch again. It is product terminology, not an industry-wide standard; other AI products may use different names for similar things.

*Imagine it*: like an SOP manual written for a new hire — humans don't need retraining from scratch each time, and neither does an Agent.

*Related*: [Agent](#agent) · [Tool](#tool) · [MCP](#mcp)

*Deeper*: [Skills](docs/ai-application/skills-business-landscape.en.md)

#### Coding Agent

An Agent specialized in reading and changing code and running verification — currently the fastest-maturing Agent scenario (e.g. Anthropic's Claude Code, which reads and edits files and runs commands directly on your machine).

*Imagine it*:
```
Read → Edit → Test → Observe → Fix → Test again
```
Coding is unusually Agent-friendly because outcomes can be automatically verified (compile, test), and failures are cheap to undo and retry.

*Related*: [Agent](#agent) · [Tool](#tool) · [Harness](#harness)

*Deeper*: [Start Here](start-here.en.md) · [Agent Infrastructure as OS](docs/career-impact/agent-infrastructure-os.en.md)

#### Personal Agent

Not just a question-answering chatbot, but an AI system that understands the user's goal, remembers background, uses tools, and keeps pushing things forward for the user. The basic unit of interaction shifts from prompt to goal; it keeps working after the user closes the app. Meta's Muse is the first large-scale consumer Personal Agent (2026).

*Imagine it*:
```
Chatbot:        question → answer → stop
Personal Agent: goal → understand context → plan → act → monitor → update → ask permission when needed
```

*Related*: [Agent](#agent) · [Context](#context) · [Memory](#memory)

*Deeper*: [Personal Agents](docs/career-impact/personal-agents-agent-economy.en.md)

---

## Safety, Alignment & Trust

#### Interpretability

Looking directly at what a model is "thinking" inside — analyzing a neural network's activation states to find the internal signatures of behaviors like "lying" or "planning," instead of only reading what it says.

*Imagine it*: we used to only see the submitted exam paper (the output); now we try to read its scratch paper (internal activations) — messy handwriting, but possibly the only honest thing.

*Related*: [Alignment](#alignment) · [CoT Monitoring](#cot-monitoring)

*Deeper*: [AI Safety and Alignment](docs/ai-core/safety-alignment-guide.en.md) · [Safety Three-Layer Framework](docs/ai-core/safety-three-layer-framework.en.md)

#### CoT Monitoring

**Chain-of-Thought Monitoring** — reading a model's "thinking out loud" in natural language is currently humanity's most important window into AI intent; Noam Brown calls it "a gift from heaven." But it is extremely fragile: punishing a model for "bad thoughts" only teaches it to hide them where they can't be observed; the right move is to punish only observable bad actions.

*Imagine it*: like listening to someone's sleep-talking for their true thoughts — but if you punish the sleep-talk, what he learns is not goodness but silence.

*Related*: [Interpretability](#interpretability) · [Alignment](#alignment)

*Deeper*: [Recursive Self-Improvement](docs/ai-research/recursive-self-improvement.en.md#chain-of-thought-monitoring-a-gifted-window-and-a-fragile-one)

#### Scalable Oversight

How can humans judge whether a model's output is correct once models exceed human capability? Two paths: **Debate** (two AIs argue, humans judge who's more credible) and **Recursive Reward Modeling** (decompose complex tasks into pieces humans can judge).

*Imagine it*: the teacher can no longer follow the student's solution — the fix is not to make the teacher smarter, but to let two students cross-examine each other while the teacher referees.

*Related*: [Alignment](#alignment) · [Eval](#eval)

*Deeper*: [Safety Three-Layer Framework](docs/ai-core/safety-three-layer-framework.en.md)

#### Calibrated Trust

Not a binary "trust or don't trust AI," but trust decomposed and calibrated: 90% reliable on this task, 60% on that one — a human-AI system's performance = AI capability × accuracy of human perception.

*Imagine it*: not issuing the AI a "good guy" or "bad guy" card, but reading it like a weather forecast — "70% chance of rain" has to rain seven times out of ten; only then do you dare bring the umbrella.

*Related*: [Alignment](#alignment) · [Eval](#eval)

*Deeper*: [Scaling Paradox](docs/career-impact/scaling-paradox.en.md) · [Personal Agents](docs/career-impact/personal-agents-agent-economy.en.md)

---

## Frontier AI

#### RSI

**Recursive Self-Improvement** — the process of AI systems accelerating AI research itself: using stronger models to train stronger models. OpenAI's internal data shows agent labor already exceeding human labor 3.1×, yet 10× R&D productivity translates into only ~1.5–2× faster capability progress.

*Imagine it*: not "AI gets 100× smarter overnight" — experiments run serially and GPUs are physical; but stacked on an already exponential curve, even ~3× acceleration is earth-shaking.

*Related*: [Training](#training) · [Agent](#agent)

*Deeper*: [Research Acceleration](docs/ai-research/research-acceleration.en.md) · [Recursive Self-Improvement](docs/ai-research/recursive-self-improvement.en.md)

---

## Still Missing a Term?

Check [All Concepts](index-all-concepts.md) — the full concept index (concept → one-liner → source article), the complete knowledge map beyond this trunk.

---

**Last updated**: September 20, 2026
