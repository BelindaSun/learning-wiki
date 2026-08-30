# Transformer Architecture: What Happens Inside a Layer

> **The central question:** How can a model let every token use information from other tokens, then refine that information through many layers?

If you first want the generation story from prompt to answer, read [Inference: How an Answer Is Generated](inference-system-guide.md). This page zooms into the machine that performs each forward pass.

## The smallest useful map

```text
token embeddings + position
          ↓
   attention ── residual
          ↓
 feed-forward ─ residual
          ↓
      next layer
```

A Transformer is not “just attention.” Attention moves information between token positions; the feed-forward network transforms information at each position; residual paths and normalization keep the deep stack trainable.

## Position: order must be supplied

Attention alone does not know whether “dog bites man” and “man bites dog” have different order. Position information is therefore added to token representations.

Modern models often use **RoPE**, which rotates query and key vectors according to position. The geometry makes relative distance available to attention without adding a plain position number to the token.

Useful approximation: position encoding tells the model where a token is. Upgrade: methods such as RoPE mainly shape how positions interact inside attention, especially at different relative distances.

## Attention: choose what information to mix

Each token produces three vectors:

- **Query:** what am I looking for?
- **Key:** what kind of information do I contain?
- **Value:** what information should I contribute?

Query–key similarity produces attention weights; the weighted values become the information gathered by that token.

### Why multiple heads?

One relationship is rarely enough. Multiple heads give the layer several representation subspaces in which to track different patterns—syntax, reference, position, or other learned relations. Heads are not permanently assigned human-readable jobs; specialization is learned and imperfect.

## The feed-forward network: transform locally

After attention shares information across positions, an MLP transforms each position independently using the same learned weights. It usually expands to a wider intermediate dimension and contracts again.

A helpful division of labor is:

```text
attention: collect relevant information
MLP: transform what was collected
```

This is an approximation, not a strict boundary; both components can store and compute patterns.

## Residual connections and normalization

A residual connection adds a block's input back to its output. It creates a direct path through a deep network, allowing a layer to make a correction instead of rebuilding the entire representation.

Normalization keeps activation scales manageable. Together, these mechanisms make dozens of stacked layers trainable.

## Depth builds iterative refinement

It is tempting to label early layers “grammar” and late layers “reasoning.” Real models are less tidy. A safer model is that each layer receives the current representation and writes a refinement to it. Some patterns emerge more often at certain depths, but capability is distributed across the network.

## Why generation repeats the whole stack

In a causal language model, each position may attend only to earlier positions. The model runs the Transformer stack to predict a distribution for the next token, selects one token, appends it, and repeats.

The **KV cache** stores earlier keys and values so they need not be recomputed at every Decode step. The new token still must pass through every layer.

## Four pieces worth keeping

1. **Token representation** gives symbols a learnable geometry.
2. **Position information** makes order available.
3. **Attention** mixes information across positions.
4. **MLPs, residual paths, and normalization** transform and stabilize the deep computation.

## Connections

- [Inference: How an Answer Is Generated](inference-system-guide.md)
- [Embeddings](embeddings-guide.md)
- [Context Windows](context-window-guide.md)
- [Inference Infrastructure and Agent Latency](inference-infrastructure-and-agent-latency.md)

