# Agent Memory: Continuity Across Time

**Core idea**: Agent Memory is not one object but a layered system. Hot Memory serves the present, Warm Memory summarizes the recent past, and Cold Memory preserves long history. Clear responsibilities let an Agent remember a person without placing everything in current Context.

**Learning sources**: direct Claude conversations, the Mimo implementation, and research into Jupiter Dreaming

**Biggest insight**: Mimo's five layers map naturally onto three temperatures; its fourth layer, “Today's State,” also gives the AI a record of its own present life.

---

## Two Kinds of Forgetting

### Forgetting During One Conversation

The Context Window fills and early turns are removed or compacted. The information may still exist in a transcript, but it is no longer visible to the Model.

**Solution**: compact, summarize, archive, and retrieve relevant material.

### Forgetting Across Conversations

A new session begins without loading anything from the previous one. The old Context was temporary and has vanished.

**Solution**: persist information outside the session and deliberately retrieve it later.

| Failure | Cause | Remedy |
|---|---|---|
| Mid-conversation | Context capacity and management | Compaction, summarization, selective history |
| Cross-conversation | No persistent Memory | Storage, retrieval, and prompt assembly |

They look similar to a user but are different engineering problems.

## Three Memory Temperatures

### Hot Memory

The current conversation inside Context. It is fast and immediately visible, but capacity-limited and temporary.

*Metaphor*: documents spread across a desk.

### Warm Memory

Summaries and facts distilled from recent interactions. It is persistent, larger, and more semantic than raw chat, but must be queried and can lose detail.

```
Day 1: "My mother has a severe headache."
Day 3: "It happened again."
Day 5: "It has not stopped."
→ "The user's mother has experienced recurring headaches for at least five days."
```

*Metaphor*: indexed notes in a drawer.

### Cold Memory

Long-term archives and complete history. Capacity is large, but access requires search and relevance filtering.

*Metaphor*: a warehouse.

### How They Cooperate

For “How is your mother?” the system can check current conversation, then recent summaries, then long-term history. The Model should not receive the entire warehouse—only the evidence relevant to the present question.

## Episodic vs. Semantic Memory

**Episodic Memory** records particular events with time and detail:

> On March 5 at 8 p.m., the user's mother reported a headache, took aspirin, and improved after rest.

**Semantic Memory** extracts general knowledge:

> The user's mother sometimes has headaches; aspirin and rest have helped.

```
Episodes — diary entries
   ↓ summarize and generalize
Semantics — conclusions and durable facts
```

Only episodes produce a pile of dates without an overall understanding. Only semantics lose evidence and exceptions. A useful system keeps both and preserves provenance between them.

Jupiter Dreaming and Mimo's Memory Summarizer both transform episodes into semantics. Jupiter does so asynchronously in the background; Mimo triggers synchronously after an interaction threshold. The scheduling differs; the cognitive role is similar.

## Mimo's Five-Layer Architecture

```
User message
  ↓
1. Conversation History — Hot Memory
  ↓ periodically summarize
2. AI Summaries — episodes become semantics
  ↓ archive and consolidate
3. Family Fact Store — structured long-term knowledge
  ↓
4. Today's State — the AI's own present activity and reflection
  ↓
5. Runtime Weights — recent people and topics receive more salience
  ↓
buildPrompt() selects and combines the layers
  ↓
Model response
```

### Layer 1: Conversation History

The latest raw messages support immediate reference and exact details.

### Layer 2: AI Summaries

After enough new material accumulates, a summarizer extracts recent facts and patterns rather than retaining every turn in Context.

### Layer 3: Family Facts

Structured durable knowledge can store relationships, health patterns, interests, and preferences. It should distinguish evidence, inference, and uncertainty rather than silently turn one mention into permanent truth.

### Layer 4: Today's State

Mimo records what it helped with, what it learned, and a reflection on its current day. This is a design choice: Memory represents not only “what the user said,” but also continuity in the companion's own experience. It is a philosophical product decision rather than a new storage technology.

### Layer 5: Runtime Weights

Recent people and topics receive higher salience so they are easier to recall. Browser-local storage makes access fast but may not synchronize across devices, so it suits temporary emphasis rather than durable facts.

### Prompt Assembly

Conceptually, `buildPrompt()` gathers current history, recent summaries, family facts, today's state, and salience signals; it then selects and formats what current reasoning needs. A production design should avoid blindly inserting every layer in full, because retrieved Memory becomes Context and consumes attention.

## Vector Search for Memory Retrieval

Embedding search is a general tool, not a Memory-only idea. See [Embeddings](embeddings-guide.md).

A traditional database answers explicit fields such as `person = mother`. A vector database can retrieve semantically similar memories even when wording differs:

```
Question "How has Mom been lately?" → query vector
Stored memories → vectors
Nearest meanings → relevant episodes and facts
```

| | Traditional database | Vector database |
|---|---|---|
| Match | Explicit fields and conditions | Semantic similarity |
| Strength | Precise structured queries | Fuzzy relevance |
| Stores | Structured data | Vectors plus source data |

Mimo does not automatically need a vector database. A small family fact store with clear fields may be easier and more reliable. Vector retrieval becomes valuable as record volume and query ambiguity grow. “More sophisticated” is not the same as “more appropriate.”

## Example: Remembering Across Sessions

Session 1 records that the user's mother has severe back pain. The summarizer stores the episode; the fact layer records the tentative health context; salience for “mother” increases.

In Session 2, current chat is empty, but retrieval provides yesterday's episode. Mimo can naturally ask whether the pain has improved. The feeling of continuity comes from persistence **plus retrieval plus appropriate wording**, not storage alone.

## Example: Episodes Become Knowledge

Three headache episodes may support a semantic summary of recurring headaches, approximate frequency, and remedies that appeared to help. The system should retain the source episodes and avoid overstating medical conclusions. Summarization creates leverage and also creates an obligation to preserve uncertainty.

## Key Insights

### Memory Creates Continuity

As a metaphor: Skills provide methods, MCP supplies senses and hands, and Memory supplies continuity. Without Memory, each meeting begins with a stranger. With it, an Agent can adapt and maintain a relationship—but only if the stored representation is accurate, relevant, and governed.

### Mimo's Fourth Layer

Most Agent Memory records the user. Today's State also records the AI's activities and learning, giving the companion a designed sense of continuity. Its novelty is philosophical rather than technical.

### Browser vs. Server Storage

- Browser storage: fast and local, but device-bound; good for temporary salience and session state.
- Server storage: persistent and synchronizable, but network-dependent; good for durable facts and archives.

The right answer is division of responsibility, not declaring one universally better.

## Next

- [Context Window](context-window-guide.md)
- [Agent Architecture](agent-architecture.md)
- [The Agent Single-Axis Problem](agent-single-axis-problem.md)
- [Three Layers of Agent Intelligence](agent-intelligence-layers.md)

---

**Last updated**: August 4, 2026
