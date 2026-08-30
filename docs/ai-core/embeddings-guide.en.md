# Embeddings: Turning Meaning into Comparable Numbers

**Core idea**: During Inference, a Model represents Tokens as vectors whose positions encode learned relationships. The same idea can become a standalone tool: turn a sentence, passage, or document into a vector and compare semantic proximity. That is a shared foundation of semantic search, RAG, retrieval from Memory, and recommendation.

**Key insight**: Embeddings compare meaning rather than literal overlap. “How can I lose weight?” and “Ways to slim down healthily” share few words but can occupy nearby positions.

---

## From Token Vectors to Passage Vectors

Inside a language model, each Token becomes a contextual vector. A dedicated **Embedding Model** can instead encode an entire passage as one vector representing what it is broadly about.

```
"How to lose weight scientifically" → [ 0.12, -0.45, 0.88, ...]
"Healthy ways to slim down"          → [ 0.14, -0.42, 0.85, ...]  nearby
"What is today's weather?"           → [-0.61,  0.33, 0.02, ...]  far away
```

An Embedding Model specializes in representation rather than generating a conversational answer.

## Comparing Vectors

Imagine each vector as an arrow in a high-dimensional space. The closer two directions are, the more similar their represented meanings tend to be. A common measure is **Cosine Similarity**, where a value nearer 1 indicates greater directional similarity.

The formula is not the leverage point. The useful model is “encode → compare direction → rank by semantic proximity.”

## Semantic Search vs. Keyword Search

Keyword search requires literal overlap. A query for “Python tutorial” may miss “Getting Started with Python” because the word “tutorial” is absent.

Semantic search:

```
Query → Embedding vector
Documents → precomputed Embedding vectors
Compare similarity
Return the nearest meanings
```

That is why many modern search experiences feel better even when the user and document choose different words.

## What Can Embeddings Do?

- **RAG**: retrieve semantically relevant material and place it into Context before generation. → [RAG](../ai-application/rag-guide.md)
- **Memory retrieval**: find earlier information relevant to the present task. → [Agent Memory](memory-system-guide.md)
- **Cross-modal representation**: relate text, images, audio, and video in representational spaces. → [Multimodality](multimodal-guide.md)
- **Recommendation**: find items semantically similar to prior interests.
- **Clustering and deduplication**: group related passages or identify near-duplicates.

Each applies the same move: represent an item numerically, then compare vectors.

## What This Guide Does Not Cover

- The mathematics of dot products and vector norms
- Vector-database product selection and tuning
- Training Embedding Models

## Next

- ← [Inference](inference-system-guide.md)
- → [RAG](../ai-application/rag-guide.md)

---

**Last updated**: August 10, 2026

**Related**: [Training](training-system-guide.md) · [Agent Memory](memory-system-guide.md) · [Multimodality](multimodal-guide.md)
