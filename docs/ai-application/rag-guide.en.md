# RAG: Giving a Model the Right Evidence at the Right Time

> **The central question:** How can a model answer from new or private information without retraining—and without stuffing an entire library into its context?

## Why RAG exists

A model has two relevant limits:

- its weights do not automatically absorb documents created after training;
- its context window cannot hold every potentially useful document.

**Retrieval-Augmented Generation (RAG)** solves both by retrieving a small set of relevant passages at question time and placing them in the current context.

```text
question → retrieve evidence → add evidence to context → generate answer
```

RAG does not change the model's weights. It changes the evidence available for this inference call.

## How retrieval works

A common semantic-search pipeline is:

1. Split source documents into chunks.
2. Turn each chunk into an embedding and store it with its source metadata.
3. Embed the user's question.
4. Find chunks whose vectors are close to the question vector.
5. Optionally rerank or filter them.
6. Put the strongest evidence into context and ask the model to answer from it.

Embeddings retrieve semantic similarity rather than exact word overlap. This helps when a question and its answer use different vocabulary.

## The complete system

```text
documents → parse → chunk → embed → vector index
                                      ↑
question  → rewrite/filter → embed → retrieve → rerank
                                               ↓
                                  prompt with evidence
                                               ↓
                                  answer + citations
```

The model is only one component. Parsing quality, chunk boundaries, metadata, retrieval, and evaluation often determine whether the answer is grounded.

## Where the first approximation fails

“Find the nearest chunks” is a useful starting model, but RAG can fail when:

- the relevant fact spans several chunks;
- similarity retrieves topical but non-answering passages;
- the question requires exact keywords, dates, or identifiers;
- permissions are ignored during retrieval;
- retrieved sources conflict or are stale;
- too many passages bury the important evidence.

Production systems often combine semantic and keyword search, metadata filters, reranking, query rewriting, and source-aware citations.

## What RAG cannot guarantee

Retrieval does not force the model to use evidence correctly. The model can still misunderstand, combine incompatible sources, or invent unsupported details. Good RAG therefore evaluates two stages separately:

1. **Retrieval:** did the system find the needed evidence?
2. **Generation:** did the answer faithfully use that evidence?

## Connections

- [Embeddings](../ai-core/embeddings-guide.md)
- [Context Windows](../ai-core/context-window-guide.md)
- [Training Systems](../ai-core/training-system-guide.md)

