# Model Deep Dive: Mixture of Experts and Compression

> **The central question:** How can a model gain more parameter capacity without paying the full compute cost on every token?

## Dense models couple capacity and computation

In a dense Transformer, every token passes through the same feed-forward parameters in each layer. Increasing those parameters increases both representational capacity and the work required per token.

A **Mixture of Experts (MoE)** layer weakens that coupling.

## How MoE works

Instead of one feed-forward network, an MoE layer contains several expert networks plus a router.

```text
token representation
       ↓
     router
   ↙    ↓    ↘
expert 2  expert 5  ...
   ↘    ↓    ↙
weighted result
```

The router scores experts for each token and activates only a small number—often top-1 or top-2. The model can therefore contain many total parameters while using a much smaller active subset for one token.

This does not make inactive parameters free. They still require memory, storage, communication, and engineering support. MoE mainly reduces arithmetic per token relative to a dense model of similar total size.

## The central tension: specialization vs balance

We want experts to specialize. But early in training, small random routing preferences can snowball:

```text
router sends more tokens to expert A
→ expert A learns faster
→ router finds A more useful
→ even more tokens go to A
```

This creates overloaded popular experts and undertrained unused ones.

### Load-balancing loss

Training adds an auxiliary objective that penalizes highly uneven routing. It encourages traffic to spread across experts so the whole capacity can learn and hardware does not stall on one overloaded expert.

But push too hard and experts become artificially similar. The design problem is not “make routing equal.” It is **allow useful specialization without capacity collapse or hardware imbalance**.

## Why experts usually replace the FFN

The feed-forward network already processes each token position independently, making token-level routing natural. Attention coordinates information across positions; splitting it into isolated experts creates more complicated communication and consistency problems.

This is an architectural tendency, not a law. Research explores other sparse components, but FFN experts offer a particularly clean capacity–compute trade-off.

## Four families of compression

### Quantization

Represent weights or activations with fewer bits. This reduces memory and can accelerate supported hardware, at the risk of numerical error.

### Pruning

Remove weights, channels, heads, or blocks judged less useful. Unstructured sparsity saves parameters but may not run faster without suitable kernels and hardware.

### Distillation

Train a smaller student to imitate the behavior or distributions of a larger teacher. The student is a new model, not a compressed file of the teacher.

### Low-rank factorization

Approximate a large weight transformation with smaller matrices when its useful structure lies in a lower-dimensional subspace.

## Why techniques are combined

Compression methods attack different costs. A pipeline may distill behavior into a smaller architecture, prune redundancy, then quantize the remaining weights.

Order matters because each transformation changes what the next one sees. The correct question is not “How small is the checkpoint?” but:

- What quality was lost on the target workload?
- Did wall-clock latency improve on the actual hardware?
- Did memory, energy, and serving cost improve?
- Which rare capabilities degraded first?

## The durable mental model

- **MoE** adds conditional capacity: many parameters exist, few activate per token.
- **Compression** removes or approximates capacity after learning.
- Neither guarantees cheaper real-world inference; routing, memory movement, kernels, and hardware determine whether theoretical savings become system savings.

## Connections

- [Transformer Architecture](../ai-core/transformer-architecture.md)
- [Training Systems](../ai-core/training-system-guide.md)
- [Inference Infrastructure and Agent Latency](../ai-core/inference-infrastructure-and-agent-latency.md)
- [Evaluation Systems](evaluation-system.md)

