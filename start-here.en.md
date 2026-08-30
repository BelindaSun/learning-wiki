# Start Here

> No technical AI background? Begin here. This is not a course but a **minimum viable map**. In about 30–45 minutes, these eight stops will not make you an expert, but they will let you recognize what the rest of the Wiki is discussing and how the ideas connect. Afterward, explore [AI Core](docs/ai-core/index.md), [Mental Models](mental-models.md), or anything that catches your curiosity.
>
> The deeper guides do not become shallower because this map exists. They are written for readers who already crossed the threshold; this page helps you cross it.

---

## 01 · What Is AI, Exactly?

**Question**: Are AI, LLM, ChatGPT, Model, and Product the same thing?

**One-line answer**: No. They occupy different levels, and mixing them is the source of much confusion.

```
AI              a broad field: machines displaying intelligent behavior
  └─ LLM         one important current family of AI systems
       └─ Model family   GPT, Claude, Gemini
            └─ Product  ChatGPT, the Claude app, and other user-facing systems
```

A Model is an engine; a Product is a vehicle built around an engine. One model can power several products, and one product can change or combine models.

**Remember**:

1. AI is broader than LLMs.
2. Model and Product are separate layers.
3. GPT, Claude, and Gemini name models or model families; ChatGPT and the Claude app are products.

**Common misconception**: “ChatGPT is AI.” ChatGPT is one AI product powered by GPT models; AI is the larger category.

**Related concepts**: [AI](glossary.md#ai-基础) · [LLM](glossary.md#ai-基础) · [Model](glossary.md#ai-基础)

## 02 · Why Can an LLM Speak?

**Question**: Is it looking up an answer?

**One-line answer**: It reads the supplied text and predicts what comes next, one token at a time. A Token is a piece of text used by the model and need not equal one full word.

```
Your text
  ↓ split into
Tokens
  ↓ placed in
Context — everything visible this time
  ↓ processed by
Transformer — the model's central architecture
  ↓ produces
probabilities for possible next tokens
  ↓ selects one and repeats
a complete response
```

This process is **Inference**, which differs from **Training**. Training is how the model learned its capability beforehand: slow, expensive, and performed across huge datasets. Inference is how it uses that capability now: it happens during every conversation.

Training resembles ten years of study before an exam, repeatedly adjusting billions of parameters. Inference resembles an open-book answer written from learned ability plus the Context currently on the desk.

**Remember**:

1. An LLM predicts tokens from context rather than retrieving a finished answer.
2. Training builds capability; Inference uses it.
3. Context is everything visible during this run and has a finite capacity.

**Common misconception**: “AI remembers all our conversations.” It can use only information brought into current Context unless a separate Memory system retrieves older information.

**Go Deeper**: [Inference](docs/ai-core/inference-system-guide.md) · [Transformer](docs/ai-core/transformer-architecture.md) · [Training](docs/ai-core/training-system-guide.md) · [Prompt Engineering](docs/ai-core/prompt-engineering-guide.md)

## 03 · From Chatbot to Agent

**Question**: Why did the conversation shift from Chatbots to Agents?

**One-line answer**: A Chatbot primarily answers a turn. An Agent pursues a goal by deciding and performing several steps. The difference is not only intelligence, but how much authority the system has to choose what happens next.

```
Chatbot:
User asks → Model answers → Stop

Agent:
Goal
  ↓ decide next step
Call a Tool — read files, query data, run code…
  ↓ observe the result
Update State
  ↓ decide again
Repeat until done
```

This is the Wiki's **Tool → Worker** shift: from answering questions toward completing tasks.

**Remember**:

1. A Chatbot remains turn-led by the user; an Agent can plan and execute multiple steps toward a goal.
2. The Agent loop is decide → act → observe → decide again.
3. Tools let an Agent affect the world rather than only generate text.

**Common misconception**: “An Agent is simply a smarter Chatbot.” Agency also comes from the surrounding system, tools, permissions, state, and execution loop.

**Go Deeper**: [Agent Architecture](docs/ai-core/agent-architecture.md) · [The Agent-Era Architecture Shift](docs/ai-core/agent-era-work.md)

## 04 · What Does AI Physically Run On?

**Question**: What lies beneath a model response?

**One-line answer**: Electrical activity in semiconductor transistors, organized into chips, memory, interconnect, servers, and data centers. Intelligence is not code floating free of matter.

Every answer consumes physical energy and computation. Chips calculate, memory keeps data nearby, and interconnect moves it.

- → [Foundation Zero](docs/computing-foundations/foundation-zero.md) — meet the basic building blocks
- → [From Silicon to AI](docs/computing-foundations/from-silicon-to-ai.md) — stack silicon into an AI system
- → [Computing Foundations](docs/computing-foundations/index.md) — explore the full territory

## 05 · How Do Workflow, Agent, Skill, Tool, and MCP Relate?

**Question**: These words appear together constantly. Are they stages on one ladder?

**One-line answer**: No. The industry does not use every term identically, but they describe different dimensions that combine into a system.

```
                    Model
              reasoning and decisions
                        │
        ┌───────────────┼───────────────┐
        │               │               │
      Tools           Skills          Context
  concrete powers   ways of working   visible information
        │               │
        └───────┬───────┘
                │
             Workflow
       how much of the path is predefined
                ↕
              Agent
       how much is decided at runtime

MCP     a common protocol for external tools and data
Harness the full working environment around the Model
```

| Concept | More precise meaning | Intuition |
|---|---|---|
| Tool | An external function or API callable at runtime | Hammer or scissors |
| Skill | Prepared instructions, resources, and tool use for a class of task | Working manual |
| Workflow | A largely predefined chain of steps | Assembly line |
| Agent | A system that chooses next actions at runtime | Project lead |
| MCP | Model Context Protocol, a common connection standard | USB for AI capabilities |
| Harness | Instructions, context, tools, permissions, feedback, and boundaries surrounding the Model | The whole equipped worksite |

Workflow asks how much of the path is designed before execution. Agent asks how much freedom remains during execution. Real systems often define a Workflow and allow an Agent to decide inside selected stages.

A Harness is more than a boundary. It is the Model's operating environment: what it sees, can use, may access, how it receives feedback, and where it must stop.

**Remember**:

1. Tools, Skills, and Context are different resources, not upgrade stages.
2. Workflow and Agent compare predefinition with runtime autonomy; systems can combine them.
3. MCP is a connection protocol; a Harness is the wider operating environment.

**Go Deeper**: [Skills](docs/ai-application/skills-business-landscape.md) · [MCP](docs/ai-application/mcp-protocol-guide.md) · [Harness](docs/ai-application/harness-system.md) · [Workflow Design](docs/ai-application/workflow-design-guide.md)

## 06 · Why Does AI Need Context, State, and Memory?

**Question**: Why does AI forget, and are these three terms interchangeable?

**One-line answer**: No. They can overlap but answer different questions.

```
Context  What can the Model see during this run?
State    What condition is the system in right now?
Memory   What information can survive and be retrieved later?
```

Context is a finite whiteboard spread out in front of you. State is the current step and result in the task you are performing. Memory is a drawer of notes that can remain after this session and be retrieved in another.

**Remember**:

1. Context has a capacity limit; older information can be displaced.
2. State records the current condition and is not automatically long-term Memory.
3. Memory requires mechanisms for saving and retrieval across time.

**Common misconception**: “A larger Context Window creates unlimited Memory.” A larger window increases what is visible **this time**; remembering in a future conversation is a separate system problem.

**Go Deeper**: [Context Window](docs/ai-core/context-window-guide.md) · [Agent Memory](docs/ai-core/memory-system-guide.md)

## 07 · Why Did Coding Agents Break Through First?

**Question**: Why did Agent capability become practical in software development before many other fields?

**One-line answer**: Code happens to satisfy several conditions Agents need.

- **Verifiable**: code can run, compile, and be tested.
- **Tool-rich and digital**: terminals, editors, Git, and test frameworks are directly operable.
- **Reversible failures**: bad changes can be reverted and tests expose errors.
- **Dense feedback**: the environment answers quickly.
- **Decomposable tasks**: large goals split into inspect, edit, run, and verify steps.
- **Abundant training data**: public code and technical text provide examples.

Together they support an autonomous loop: plan → write → run → observe error → revise → run again. Medicine has less reversible failures; creative judgment is harder to verify automatically. Progress is therefore slower even when models are capable.

**Remember**:

1. Coding Agents emerged first because correctness is unusually verifiable, not because programming is inherently easy.
2. Agent feasibility depends on the full environment, not only data volume.
3. The six conditions help predict which domains may become Agent-friendly next.

**Go Deeper**: [Coding Agents and Agent Infrastructure](docs/career-impact/agent-infrastructure-os.md)

## 08 · What Does AI Actually Change?

The technical skeleton is complete. The most valuable part of learning AI is not memorizing more terminology, but repeatedly upgrading how you understand the world.

- **Model → System**: competition moves from model intelligence toward architecture, workflow, distribution, and ecosystems.
- **Chatbot → Agent**: AI moves from answering toward completing; some authority over the next step transfers to the system.
- **Capability → Trust**: when capability becomes common, the moat becomes who can safely receive real work.
- **Execution → Judgment**: as execution becomes cheaper, choosing what matters becomes scarcer.

[Mental Models](mental-models.md) records the complete timeline and links each shift to its argument.

You now have a map. Explore freely:

- 🗺️ Learn the technical foundation → [AI Core](docs/ai-core/index.md) · [Computing Foundations](docs/computing-foundations/index.md)
- 🔤 Look up a term → [Glossary](glossary.md) · [All Concepts](index-all-concepts.md)
- 🧠 Follow connected ideas → [Mental Models](mental-models.md)
- 🛠️ See real systems and workflows → [AI in Practice](docs/ai-application/index.md)
- 🌍 Examine careers, companies, and consequences → [Industry & Impact](docs/career-impact/index.md)
- 📝 See what changed recently → [Changelog](CHANGELOG.md)

---

**Last updated**: August 15, 2026
