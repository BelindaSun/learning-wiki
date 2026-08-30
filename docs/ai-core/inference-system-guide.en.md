# Inference: How an Answer Is Generated

> **The central question:** After you press Send, how does a trained model turn your prompt into one token, then an answer?

## The minimal map

```text
text → tokens → vectors → Transformer layers
     → next-token probabilities → choose one token
     → append it and repeat
```

Everything else in this chapter upgrades one part of that map.

## First, what are weights?

**Weights** are numbers learned during training. Together they define how representations are transformed.

Weights are not a database of sentences. Knowledge is distributed across patterns in many weights, and retrieval is reconstructive rather than a guaranteed lookup. This helps explain both generalization and hallucination.

During training, errors update weights. During ordinary inference, weights are fixed; the model uses them to process the current context.

## One forward pass

### 1. Tokenization

The prompt is split into tokens—reusable pieces that may be words, parts of words, punctuation, or bytes.

### 2. Embedding

Each token ID selects a learned vector. Position information is added so order can matter.

### 3. Transformer layers

Inside each layer, attention lets positions exchange relevant information, while feed-forward networks transform the resulting representation. Residual paths preserve earlier information as refinements accumulate.

### 4. Output probabilities

The final representation at the last position is projected into one score per vocabulary token. Softmax converts these logits into a probability distribution.

The model has not written the whole answer. It has estimated only what should come next.

## Selection: probability is not destiny

The runtime chooses from the distribution.

- **Temperature** reshapes it: lower values concentrate probability; higher values flatten it.
- **Top-k** keeps only the k highest-probability candidates.
- **Top-p** keeps the smallest candidate set whose cumulative probability reaches p.

These settings do not add knowledge or reasoning. They change how a next token is selected from what the model already predicted.

## Autoregressive generation

The selected token is appended to the context, and another forward pass predicts the next one.

```text
prompt → token 1
prompt + token 1 → token 2
prompt + token 1 + token 2 → token 3
```

This serial Decode loop is why output latency grows with answer length. A KV cache reuses earlier attention keys and values, but every new token still passes through the model's layers.

## Attention and its cost

Self-attention compares token positions to decide what information should interact. In the simplest form, the comparison matrix grows roughly with the square of sequence length. Modern systems use caching and specialized attention variants, but long contexts still cost memory and computation.

For the internal mechanics of queries, keys, values, heads, MLPs, and residual paths, continue to [Transformer Architecture](transformer-architecture.md).

## Context, memory, and weights are different

- **Weights:** slow-changing learned capability and compressed statistical knowledge.
- **Context:** tokens available during the current inference call.
- **Memory:** information an application stores and later retrieves into context.

Saving something in a memory database does not change model weights. The model can use that information only when the application retrieves it into the current context.

## Why hallucination happens

The model is optimized to produce a plausible continuation, not to query an internal truth table. When evidence is missing or conflicting, it can still produce a fluent high-probability sequence.

Grounding, tools, citations, and verification reduce this risk by adding evidence and checking outcomes. They do not turn generation into guaranteed truth.

## What “thinking mode” changes

A reasoning mode gives the model more inference-time computation before the visible answer—often by generating and evaluating intermediate steps. It can improve difficult reasoning, but does not replace missing evidence or guarantee correctness.

## Do capabilities suddenly emerge?

Benchmark scores can jump even when underlying capability changes gradually: a thresholded test turns “almost correct” into “correct” all at once. But not every apparent emergence is a measurement illusion; interacting learned components can also produce nonlinear behavior.

The useful research posture is to separate:

- change in underlying capability;
- change in measured score;
- change caused by prompting, tools, or evaluation setup.

## The durable mental model

Inference is repeated conditional prediction through fixed learned weights. The system can be remarkably capable because each token is conditioned on a rich representation of the context—not because it retrieves a prewritten answer.

## Next

- [Transformer Architecture](transformer-architecture.md)
- [Training Systems](training-system-guide.md)
- [Context Windows](context-window-guide.md)
- [Inference Infrastructure and Agent Latency](inference-infrastructure-and-agent-latency.md)

