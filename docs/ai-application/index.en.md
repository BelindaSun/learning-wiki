# AI in Practice · A Map of Working AI Systems

**Core idea**: A capable model is only one component of a useful product. Real systems must supply context, connect tools, organize repeatable work, and verify outcomes. Start by defining the operating boundary, then design the workflow that runs inside it.

---

## 🚀 Start · Define the boundary, then the work

### 01 — Harness

**What surrounds the model?**

A harness gives an Agent instructions, tools, permissions, state, and stopping rules. It turns open-ended capability into bounded behavior.

→ [The Harness System](harness-system.md)

### 02 — Workflow Design

**How should the task move from intention to verified result?**

Break work into stages, make dependencies visible, decide where humans intervene, and define what counts as done.

→ [The Complete Guide to Workflow Design](workflow-design-guide.md)

## 🧭 Orient · Four needs of a usable AI system

### 1. Knowledge beyond the model

RAG brings relevant, current material into the model's context instead of hoping it already knows.

→ [RAG](rag-guide.md)

### 2. Access to tools and data

MCP provides a common way for AI systems to discover and use external capabilities.

→ [MCP](mcp-protocol-guide.md)

### 3. Reusable ways of working

Skills package instructions, resources, and procedures so good work can be repeated rather than reinvented.

→ [Skills and the Business Landscape](skills-business-landscape.md)

### 4. Evidence that the work is complete

Reliability often comes less from a smarter model than from better constraints, checks, recovery paths, and observability around it.

→ [Harness > Model](harness-architecture-patterns.md)

## 🔬 Go Deeper · Diagnose the bottleneck

- Missing current or private knowledge → retrieval and context design.
- Knows what to do but cannot reach the world → tools, protocols, and permissions.
- Works once but not repeatedly → skills and workflow structure.
- Impressive demo, unreliable production system → harnesses, evaluation, and recovery.

## 📖 Original learning conversations

Exploratory conversations remain in Chinese; formal English guides will appear progressively at the same routes.

---

**Last updated**: August 30, 2026

**Related**:
- [AI Core](../ai-core/index.md)
- [AI Research](../ai-research/index.md)
