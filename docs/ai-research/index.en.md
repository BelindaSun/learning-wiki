# AI Research · A Map of Model Improvement

**Core idea**: “Make the model better” is not yet a research question. Better at what, measured how, under which constraints, and compared with what? Begin with evaluation, then study architectural and compression choices as interventions inside a measurable loop.

---

## 🚀 Start · Learn to judge before you modify

### 01 — Evaluation

**How do we know anything improved?**

Define the behavior that matters, build representative tests, choose metrics carefully, and inspect failures—not just averages.

→ [Evaluation Systems](evaluation-system.md)

### 02 — Model Architecture and Compression

**How can a model trade capacity, speed, and cost?**

Mixture-of-Experts, quantization, distillation, and other techniques change where computation and information live. Each gain comes with conditions and failure modes.

→ [Models Deep Dive](models-deep-dive.md)

## 🧭 Orient · One research loop

### 1. Define

State the target behavior, constraints, baseline, and acceptable trade-offs.

### 2. Intervene

Change one meaningful part of the model, data, training process, inference system, or surrounding architecture.

### 3. Measure

Run controlled experiments on data that represents the real task.

### 4. Audit

Ask what the aggregate metric hides: regressions, bias, contamination, instability, cost, or a benchmark-specific trick.

## 🔬 Go Deeper · Two current research lines

- To understand whether a model truly improved, begin with evaluation design.
- To understand trade-offs among capability, speed, memory, and cost, begin with architecture and compression.

This map is intentionally incomplete. Future research guides should earn their place by strengthening the loop, not by making the list longer.

## 📖 Original learning conversations

The exploratory source conversations remain available in Chinese.

---

**Last updated**: August 30, 2026

**Related**:
- [AI Core](../ai-core/index.md)
- [AI in Practice](../ai-application/index.md)
