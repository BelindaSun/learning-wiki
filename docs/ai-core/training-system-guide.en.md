# Training: From Random Weights to an Assistant

**Core idea**: A Model travels through three broad stages: **Pretraining** learns language and world patterns from enormous corpora, **Supervised Fine-tuning** teaches assistant-like responses, and **RLHF** uses human preferences to shape behavior. All use the same predict → measure error → adjust loop; what changes is the data and the source of the target.

**Key insight**: Pretraining does not require people to label trillions of Tokens. Existing text supplies its own next-Token target. Human-written examples and preference judgments become central in the later, much smaller stages.

---

## The Training Loop

Weights begin as random numbers. The Model predicts the next Token, compares the prediction with the actual continuation to calculate a loss, and backpropagation converts that error into tiny adjustments for each weight. Repeat across vast amounts of data.

Pretraining, fine-tuning, and RLHF share this basic learning loop. Their difference is what examples look like and what counts as the desired answer.

## Pretraining: From Random Numbers to Fluent Continuation

**Pretraining** is the largest and most expensive stage.

**Data**: web pages, books, code, and papers, measured in trillions of Tokens.

**Targets**: no person writes a separate answer. Existing text already contains its continuation. The Model predicts hidden or next material and compares against the original. Learning from targets contained in the data is **Self-supervised Learning**.

**Result**: a **Base Model** that has absorbed broad patterns and can continue language fluently. Fluency does not yet make it a cooperative assistant; it may continue a question as internet text rather than answer it.

## SFT and RLHF: From Fluent Model to Assistant

- **Supervised Fine-tuning — SFT** continues training on a much smaller set of human-written examples showing how an assistant should respond.
- **RLHF — Reinforcement Learning from Human Feedback** compares several responses, learns which people prefer, and adjusts behavior toward that preference signal.

The full line is:

```
Pretraining   broad language and world patterns; enormous unlabeled corpus
      ↓
SFT           assistant behavior; smaller human-written dataset
      ↓
RLHF          preference shaping; human rankings or a learned Reward Model
```

Each stage relies more explicitly on human judgment, while using far less data than Pretraining.

## Why Training Is Expensive

The bill maps directly onto Computing Foundations:

- **Compute**: matrix operations repeat over trillions of Tokens. → [FLOPS and Precision](../computing-foundations/flops-and-precision.md)
- **Scale**: hundreds or thousands of accelerators synchronize intermediate results such as gradients. → [From One Accelerator to a Thousand](../computing-foundations/scaling-and-communication.md)
- **Memory**: weights, activations, gradients, and optimizer state must fit and move quickly. Training retains substantially more intermediate state than Inference. → [The Memory Wall](../computing-foundations/memory-wall.md)

The loop is conceptually simple; operating thousands of accelerators efficiently is not. This physical barrier explains why only a small number of organizations can pretrain frontier models, while fine-tuning an existing Model is dramatically cheaper.

## After Training: Frozen Weights and Knowledge Cutoffs

Training changes weights. Ordinary Inference uses frozen weights and only performs forward computation. The Model's built-in knowledge therefore stops around the latest period represented in its training data: its **Knowledge Cutoff**.

Later events require current Context, Tools, or retrieval such as [RAG](../ai-application/rag-guide.md). A conversation itself does not silently update the base weights. Teaching the base Model new durable capabilities requires another training intervention.

## What This Guide Does Not Cover

- Mathematical derivations of gradient descent and backpropagation
- Distributed-training implementation details
- The full Reward Model and RLHF procedure → [Evaluation](../ai-research/evaluation-system.md)
- Post-training compression such as quantization, pruning, and distillation → [Models Deep Dive](../ai-research/models-deep-dive.md)

## Next

- ← [Inference](inference-system-guide.md)
- → [Evaluation](../ai-research/evaluation-system.md)
- → [AI Safety and Alignment](safety-alignment-guide.md)
- → [Models Deep Dive](../ai-research/models-deep-dive.md)

---

**Last updated**: August 10, 2026

**Related**: [Computing Foundations](../computing-foundations/index.md) · [RAG](../ai-application/rag-guide.md)
