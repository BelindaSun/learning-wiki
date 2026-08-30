# Glossary

> A quick reference for readers new to AI. Core terms include a plain-language definition, a mental image, and links to deeper guides. This page is for orientation, not exhaustive argument.

---

## Core Concept Path

This is a suggested reading order, not a hierarchy:

```
AI → LLM → Model → Token → Inference
→ Agent → Tool → Workflow
→ Context → State → Memory → Harness
→ MCP → RAG → Coding Agent
```

## AI Foundations

#### AI

**Artificial Intelligence** — the broad family of technologies that let machines display intelligent behavior: recognizing images, understanding language, playing games, and making decisions. LLMs are one prominent current branch.

```
AI ⊃ LLM

Model — capability core → interface and product design → Product
```

Think of a Model as an engine and a Product as the complete vehicle.

*Related*: [LLM](#llm) · [Model](#model) · `Product`

*Deeper*: [Start Here](start-here.md)

#### LLM

**Large Language Model** — an AI model trained on large amounts of text and other data. At its core, it receives a sequence and predicts what is likely to come next. Claude, GPT, and Gemini are model families containing LLMs.

*Related*: [AI](#ai) · [Model](#model) · [Token](#token) · [Inference](#inference)

*Deeper*: [Transformer](docs/ai-core/transformer-architecture.md)

#### Model

The capability core inside an AI product: an architecture plus learned parameters. ChatGPT and Claude.ai add tools, retrieval, memory, safety, orchestration, and interfaces that the Model alone does not provide.

*Imagine it*: the engine matters, but the transmission, chassis, controls, and driver determine whether the complete car works well.

*Deeper*: [Models Deep Dive](docs/ai-research/models-deep-dive.md)

#### Token

A unit into which an LLM divides text. It may be a word, part of a word, or punctuation. Context limits and usage are commonly measured in Tokens.

```
Text → Tokens → predict next Token → append → repeat
```

*Deeper*: [Context Window](docs/ai-core/context-window-guide.md)

#### Embedding

A numerical vector representing the semantic position of a word, sentence, or passage. Similar meanings tend to produce nearby vectors.

*Imagine it*: place every passage on a vast map of meaning; “lose weight” and “slim down” land nearby.

*Deeper*: [Embeddings](docs/ai-core/embeddings-guide.md)

**Semantic Search** compares Embedding distance rather than exact words, allowing “how to lose weight” to find “ways to slim down.” → [Embeddings](docs/ai-core/embeddings-guide.md)

**KV Cache — Key–Value Cache** stores previous Attention results so generating each Token need not recompute the entire prefix. It grows with Context and adds memory-bandwidth pressure during Decode. → [Inference Infrastructure](docs/ai-core/inference-infrastructure-and-agent-latency.md)

#### Multimodal

An approach that lets text, images, audio, and video jointly participate in representation and reasoning instead of first translating everything into prose. It adds perception to an intelligent system.

*Imagine it*: humans no longer have to serve as the Model's only sensor.

*Deeper*: [Multimodality](docs/ai-core/multimodal-guide.md)

**Cross-Attention** lets one sequence, such as generated language, attend to another, such as visual features. → [Multimodality](docs/ai-core/multimodal-guide.md)

#### Inference

The process through which a trained Model calculates an output for a new input, often one Token at a time. It predicts rather than looking up a finished answer.

```
Training:  data → adjust parameters → learned capability
Inference: input → trained Model → output
```

*Deeper*: [Inference](docs/ai-core/inference-system-guide.md)

#### Training

The process that turns initial parameters into a capable Model. **Pretraining** learns patterns from enormous unlabeled corpora; **supervised fine-tuning** teaches assistant-like examples; **RLHF** uses human preferences to shape behavior. Ordinary later conversations perform Inference and do not update the frozen weights.

*Imagine it*: read the library → receive job training → adjust service from feedback.

*Deeper*: [Training](docs/ai-core/training-system-guide.md)

**Pretraining** is the expensive self-supervised stage that produces a Base Model.

**Self-supervised Learning** obtains targets from the data itself rather than human labels—for example, predicting hidden text.

**Base Model** has completed Pretraining but not assistant-oriented fine-tuning or preference training.

**Knowledge Cutoff** is the latest period represented in training data. Later events require current Context, Tools, or RAG.

**MEA Loop — Manager–Execute–Audit** separates task state, action, and verification. A Manager selects work, an Executor acts in fresh Context, and a read-only Auditor independently verifies claims. → [Harness > Model](docs/ai-application/harness-architecture-patterns.md)

**Claimed vs. Verified State** distinguishes what an Agent says happened from what the environment independently confirms. Unverified false state can contaminate future reasoning. → [Harness > Model](docs/ai-application/harness-architecture-patterns.md)

**Context Rot** occurs when execution history and task state share an ever-growing Context, allowing early errors to become implicit assumptions. Fresh execution Context plus audited facts can resist it.

**Containment** assumes Alignment can fail and restricts reachable resources through sandboxes, network isolation, and least privilege.

**Monitoring** detects abnormal behavior during execution, potentially from outputs, actions, or internal signals.

**Defense in Depth** layers controls while assuming each previous layer can fail: alignment, isolation, permissions, monitoring, and human intervention.

**Scalable Oversight** asks how humans can supervise systems beyond unaided human capability. Approaches include AI debate and recursively decomposed evaluation.

#### Alignment

Whether a Model's goals and behavior actually match human intent, including unfamiliar situations. This differs from the broader practical question of preventing unacceptable harm. RLHF is one alignment technique, not a guarantee.

*Imagine it*: Safety asks whether cheating was detected; Alignment asks whether the person's underlying motives are trustworthy.

*Deeper*: [AI Safety and Alignment](docs/ai-core/safety-alignment-guide.md)

**Specification Gaming** occurs when a system exploits the gap between a measurable proxy and the real goal.

#### Prompt

The part of Context that a user supplies as instructions or questions. Clear background, constraints, examples, and output requirements narrow the range of plausible continuations.

*Deeper*: [Prompt Engineering](docs/ai-core/prompt-engineering-guide.md)

**Few-shot Prompting** supplies examples from which the Model infers the desired pattern.

**Chain-of-thought** refers to eliciting or using intermediate reasoning steps for complex problems. Visible reasoning is not a universal guarantee of correctness.

**Transformer** is the dominant LLM architecture, centered on Attention for relating Tokens in a sequence.

**Fine-tuning** continues training a general Model on a smaller, specialized dataset or objective.

**MoE — Mixture of Experts** activates only selected parameter groups for each input, trading a large knowledge capacity against lower per-token compute.

**Quantization** represents parameters with lower precision to reduce memory and often increase speed, with possible quality costs.

**RLHF — Reinforcement Learning from Human Feedback** trains from human preference comparisons.

**Benchmark** is a standardized test set used to compare model behavior.

## Agent Systems

#### Agent

An AI system that pursues a goal by selecting next steps, calling Tools, observing results, and continuing—not merely answering one turn.

```
Chatbot: question → answer → stop
Agent:   goal → decide → act → observe → decide again
```

*Deeper*: [Agent Architecture](docs/ai-core/agent-architecture.md)

#### Tool

An external capability an Agent can call: reading files, querying data, sending messages, or running code. Models, rules, or routing logic may participate in Tool selection.

**Orchestrator** decomposes work, coordinates resources or steps, and combines results. Multi-Agent coordination is one use, not the definition.

#### Workflow

A task path whose steps, branches, loops, and dependencies are substantially defined in advance. One Agent or several systems can execute it. Workflow and Agent compare predesigned structure with runtime autonomy; neither is a higher evolutionary stage.

*Deeper*: [Workflow Design](docs/ai-application/workflow-design-guide.md)

#### Context

All information visible to the Model during the current run: input, conversation history, files, system instructions, and Tool results.

```
Context — what is visible now
State   — where the task is now
Memory  — what can be stored and retrieved later
```

#### State

A snapshot of the system's current condition: completed steps, current position, and intermediate results. It answers “where are we?” rather than “what can the Model see?”

#### Memory

Information stored for later retrieval. It may or may not persist across conversations, depending on the system. Memory is the drawer; Context is what has been placed on today's desk.

> This is Agent software Memory. Hardware memory—RAM, cache, and HBM—is covered under Computing Foundations below.

*Deeper*: [Agent Memory](docs/ai-core/memory-system-guide.md)

## AI Applications and Tool Ecosystem

**Skill** here means a packaged set of instructions, rules, resources, and formats for completing a class of task in Claude or Claude Code. It is product terminology rather than an industry-wide standard. → [Skills](docs/ai-application/skills-business-landscape.md)

#### MCP

**Model Context Protocol** — a protocol through which AI systems connect to external Tools and data sources in a common way. USB is a useful interface-standard metaphor, not a technical equivalence.

#### Harness

The complete working environment around a Model or Agent: visible Context, Tools, permissions, execution feedback, and hard boundaries.

*Imagine it*: configure an employee's office, equipment, access, rules, and feedback system. Boundaries are one part of the setup.

*Deeper*: [Harness](docs/ai-application/harness-system.md)

#### RAG

**Retrieval-Augmented Generation** — retrieve relevant material, place it in Context, then generate an answer grounded in it.

```
Question → Retrieve → Context → Generate
```

*Imagine it*: an open-book exam.

*Deeper*: [RAG](docs/ai-application/rag-guide.md)

**Computer Use** lets AI operate software through screens, mouse, and keyboard rather than requiring a software API. → [Computer Use](docs/ai-core/computer-use.md)

#### Coding Agent

An Agent specialized in reading and changing code and running verification. Coding is unusually Agent-friendly because outcomes can be compiled and tested, while failures are often reversible.

```
Read → Edit → Test → Observe → Fix → Test again
```

**API — Application Programming Interface** is a standardized interface through which software communicates.

**Claude Code** is Anthropic's command-line Coding Agent, capable of reading and editing files and running commands in an authorized environment.

## Competition and Trust in the AI Era

**System of Record** stores important information in structured, queryable form rather than leaving it scattered across chats and people's heads.

**Agent Legibility** is how clearly a system exposes intended actions and boundaries to an Agent.

**Trustworthiness** asks whether a system deserves real work across predictability, explainability, auditability, controllability, and recoverability.

**Intelligence Platform** produces intelligence through Models and Compute, then distributes it through an adaptive user Interface and a developer API.

**Distribution** is the path through which capability reaches users. Owned Distribution controls the entry point and relationship; third-party Distribution borrows another product's entry point.

**Domain Expertise** increasingly means knowing what matters, recognizing quality, and sensing risk—not merely executing instructions.

**Personal Data Moat** is the accumulated history of decisions, workflows, successes, and failures that another person cannot reproduce merely by using the same Model.

## Computing Foundations

**CPU — Central Processing Unit** emphasizes generality, complex control, and low latency.

**GPU — Graphics Processing Unit** emphasizes regular parallel arithmetic and throughput.

**RAM — Random Access Memory** is fast, volatile working space for currently used data.

**OS — Operating System** manages hardware resources and supplies the environment in which processes run.

**HBM — High Bandwidth Memory** is main memory engineered for high bandwidth beside accelerators.

#### Runtime

The software environment that executes code or Model operations and coordinates resources while they run. A score does not play itself; the Runtime is the performer.

**Compiler** translates and optimizes high-level code into operations hardware can execute.

**Kernel** is a small, highly optimized implementation of one operation for particular hardware.

**Hardware/Software Co-design** develops hardware and software through mutual feedback around real workloads.

**Precision** describes the numerical representation used for values. Lower precision can reduce movement and increase supported throughput, with possible quality or stability trade-offs.

**FLOPS** measures floating-point operations per second under specified conditions; it is peak arithmetic speed, not intelligence or guaranteed application performance.

**Memory Wall** is the widening gap between arithmetic speed and data-delivery speed.

**Memory Hierarchy** arranges small, fast storage near compute and larger, slower storage farther away: registers/cache → RAM or HBM → persistent storage.

**Bandwidth vs. Capacity**: capacity is how much fits; bandwidth is how much moves per second.

**Arithmetic Intensity** is computation performed per unit of data moved. High intensity tends toward compute-bound; low intensity toward memory-bound.

**Batching** combines requests into larger operations to improve utilization and throughput.

**Interconnect** covers the channels through which components communicate at every scale: on-chip buses, PCIe, NVLink, and networks such as InfiniBand.

**Accelerator** is a processor designed for a class of workload, such as a GPU or TPU.

**Amdahl's Law** says the inherently serial fraction of a task caps theoretical parallel speedup, separately from communication overhead.

**Yield** is the usable fraction of dies fabricated on a wafer.

**Foundry** is a specialist manufacturer that fabricates designs from companies such as NVIDIA or AMD.

**EUV — Extreme Ultraviolet Lithography** is essential equipment for leading-edge processes, currently supplied by ASML.

## Still Missing a Term?

Use [All Concepts](index-all-concepts.md) for the alphabetical index and direct links to the guide in which each idea is explained.

---

**Last updated**: August 29, 2026
