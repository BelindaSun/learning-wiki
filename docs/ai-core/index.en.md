# AI Core · A Map of Intelligent Systems

**Core idea**: Computing Foundations explains what AI runs on. AI Core asks why a model can generate an answer, how an Agent turns answers into actions, and how memory, coordination, performance, and safety fit around that model. Start with two load-bearing ideas, orient yourself with four questions, then go deeper with a problem in mind.

---

## 🚀 Start · Two load-bearing ideas

### 01 — Inference

**Why can it answer?**

A language model does not retrieve a finished answer from a filing cabinet. It passes the input through a network of learned weights and predicts one token at a time. Understand this first; Prompt, Context, Transformer, and Training will then have somewhere to land.

→ [The Complete Guide to Inference](inference-system-guide.md)

### 02 — Agent Architecture

**How does an answer become an action?**

A model produces output. An Agent must also observe an environment, preserve state, call tools, take action, and continue from the result. A brain becomes a working system only after it gains hands, a notebook, and an access badge.

→ [Agent Architecture](agent-architecture.md)

## 🧭 Orient · Four questions for the whole system

### 1. How did it learn?

Training turns random weights into a language model; fine-tuning and human feedback shape it into a more useful assistant.

→ [Training](training-system-guide.md)

### 2. What happens while it answers?

The Transformer processes relationships among tokens. Context determines what the model can see this time. A Prompt is the part of that context you deliberately supply to reduce uncertainty.

→ [Transformer](transformer-architecture.md) · [Context Window](context-window-guide.md) · [Prompt Engineering](prompt-engineering-guide.md)

### 3. How does it perceive, remember, and affect the world?

Multimodality supplies eyes and ears; Memory carries information forward; Tools and Workflows let the system advance a task instead of merely describing one.

→ [Multimodality](multimodal-guide.md) · [Memory](memory-system-guide.md) · [Workflow Orchestration](workflow-orchestration.md) · [Computer Use](computer-use.md)

### 4. How do we keep stronger systems from drifting off course?

Safety and Alignment address harm and intent. Monitoring and Containment add the ability to see, limit, and stop the system when trust alone is not enough.

→ [AI Safety and Alignment](safety-alignment-guide.md) · [Three Layers of AI Safety](safety-three-layer-framework.md)

> Useful approximation: think of the **Model** as a brain, **Memory** as a notebook, **Tools** as hands, and **Permissions** as an access badge. This gives direction, but real inference, state, scheduling, and authorization cross several layers. The deeper guides upgrade the model.

## 🔬 Go Deeper · Begin with the failure you are seeing

- Strange answers: study Transformer, Context, Prompting, Embeddings, and Multimodality.
- Smart but ineffective Agents: study Tools, Runtime, Permissions, Memory, Workflow, and latency.
- Unclear sources of Agent intelligence: separate Model, Memory, and Delegation.
- Powerful but uncontrollable systems: study Monitoring, Alignment, and Containment together.

## 📖 Original learning conversations

The polished guides provide the shortest path. The exploratory conversations remain available in Chinese for readers who want to see how the questions developed.

---

**Last updated**: August 30, 2026

**Related**:
- [Computing Foundations](../computing-foundations/index.md)
- [Start Here](../../start-here.md)
- [AI in Practice](../ai-application/index.md)
