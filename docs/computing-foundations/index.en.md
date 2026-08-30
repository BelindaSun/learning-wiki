# Computing Foundations · A Map of the Machine Beneath AI

**Core idea**: Before asking what AI can do, ask what it runs on. Start with the smallest useful picture of a computer, then follow one request from software down to silicon and back. Once that path is clear, hardware, operating systems, networks, clouds, and chips stop looking like separate subjects.

---

## 🚀 Start · Build the backbone in order

### 01 — Foundation Zero

**What is a computer actually doing?**

Meet the four recurring jobs—compute, memory, storage, and communication—and the software layers that coordinate them.

→ [Foundation Zero](foundation-zero.md)

### 02 — From Silicon to AI

**How does an AI request travel through the whole stack?**

Follow data from an application through models, runtimes, operating systems, processors, memory, and networks. The stack becomes a causal chain rather than a vocabulary list.

→ [From Silicon to AI](from-silicon-to-ai.md)

## 🧭 Orient · Know where each idea lives

- **Software** describes the instructions and abstractions people work with.
- **Operating systems and runtimes** turn those instructions into coordinated work.
- **Hardware** performs computation, moves data, and keeps state.
- **Infrastructure** connects many machines and makes them dependable at scale.
- **Semiconductors** are the physical foundation on which every higher layer depends.

This is a useful first approximation, not a set of sealed boxes. Real performance problems cross layers: a slow model may be waiting on memory, a network, storage, or scheduling rather than arithmetic.

## 🔬 Go Deeper · Five ridgelines

Use the map to ask better questions: Where does computation happen? Where is data waiting? Who schedules the work? What must cross a network? Which physical constraint becomes the bottleneck?

The detailed guides are being translated. Each English route clearly links to the complete Chinese original while its translation is in progress.

---

**Last updated**: August 30, 2026

**Related**:
- [AI Core](../ai-core/index.md) — what begins once the computing foundation is in place
- [Start Here](../../start-here.md) — the shortest route through the whole wiki
