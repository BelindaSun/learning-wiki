# Context Window: Managing the Model's Whiteboard

**Core idea**: The Context Window is everything a Model can see during one run; Tokens measure the space it consumes. Keeping the whiteboard organized helps the Model remain effective across long work.

**Learning source**: direct conversations with Claude

**Biggest surprise**: invisible System instructions, Tool definitions, Memory, and Tool results also occupy the whiteboard.

---

## Context Window and Tokens

**Context Window** is the total material visible to the Model in the current request.

**Token** is the unit used to measure that material.

```
┌─────────────────────────────────────────┐
│ Context Window — the whiteboard         │
├─────────────────────────────────────────┤
│ System instructions                     │
│ Memory supplied by the product          │
│ Project Knowledge                       │
│ Tool definitions                        │
│ Conversation history                    │
│ Tool results                            │
│ Current user message                    │
└─────────────────────────────────────────┘
```

Tokens are not characters. Words, subwords, punctuation, whitespace, and code syntax are encoded differently; Chinese and English therefore do not have a stable one-to-one conversion. Treat rough ratios only as budgeting approximations.

A marketed context limit is a capacity ceiling, not a guarantee of uniform reasoning quality across every position and workload. Model limits and effective ranges also change over time, so verify current specifications when they matter.

## What Is Actually on the Whiteboard?

### 1. System Instructions — Usually Invisible

They define role, behavioral constraints, Tools, and operating policy. The user may not have typed or even seen them, but they are part of Context.

### 2. Memory — Partly Visible

A product may retrieve recent summaries, user facts, preferences, or current state and insert them into the request. Stored Memory outside the prompt consumes no Context; retrieved Memory placed into the prompt does.

### 3. Project Knowledge — Visible

Files deliberately attached to a persistent project can be loaded as background. They still consume Tokens when included, even if the interface makes their reuse convenient.

### 4. Tool Definitions — Usually Invisible

Names, descriptions, and input schemas tell the Model what it may call. A large Tool catalog can consume substantial space before the conversation begins.

### 5. Conversation History — Visible and Fast-Growing

User and assistant turns normally form the largest growing portion.

### 6. Tool Results — Partly Visible

Reading a 50,000-Token file through a Tool does not make the content free. If the result is returned to the Model, it occupies the whiteboard unless summarized or kept outside it through another mechanism.

An illustrative budget might be:

```
System instructions       5,000
Retrieved Memory         20,000
Project files            10,000
Tool definitions          3,000
Conversation history     15,000
Current Tool result       8,000
                         ──────
Total                    61,000 Tokens
```

The numbers are examples; the lesson is that visible chat bubbles are not the full bill.

## What Happens When the Window Fills?

### Truncation

Discard old content to admit new material. It is simple and can erase an early fact without preserving its meaning.

### Compaction

Summarize older turns into a shorter representation:

```
Several turns about the user's mother, location, and health
→ "The user's mother lives in Beijing and has recently felt unwell."
```

Compaction saves space and preserves selected facts, but a summary necessarily loses detail and may preserve errors.

### Active Management

- Keep the most recent raw turns and compact older material.
- Separate Hot Context, Warm summaries, and Cold archives.
- Store stable information persistently and retrieve only what the current task needs.
- Treat automatically compacted state as useful but lossy, not as a perfect transcript.

## Projects and Persistent Background

A Project is better understood as a persistent workroom than a cloud folder. It commonly combines:

1. **Files** containing durable data and principles.
2. **Instructions** defining project-specific behavior and output rules.

```
Skills       reusable methods across projects
Project      domain-specific data and background
Instructions project-specific role and rules
```

At the beginning of a turn, a product may combine global System instructions, Skills, Project Instructions, Project files, and retrieved user Memory. These concepts describe different scopes even when all ultimately become Context.

## Prompt Caching

Prompt Caching avoids reprocessing an unchanged prefix at full cost:

```
First request:  stable prefix + new turn → process and cache prefix
Later request:  cached prefix + new turn → reuse prefix, process new material
```

Stable System instructions, Tool definitions, and Project files are good candidates because they recur at the start of many requests. Exact pricing and automatic behavior are product-specific and can change; the durable principle is **stable identical prefixes are cacheable**.

A content change can invalidate the affected cache prefix. Therefore:

- Stable constitutions, facts, and rules benefit from caching.
- Frequently appended ledgers may still be acceptable when small.
- Rapidly changing logs are poor candidates for large stable prefixes; retrieve their relevant portions instead.

Uploading a file does not inherently use fewer Tokens than pasting the same content. The real advantage can come from persistence, organization, retrieval, and cache reuse.

## Lost in the Middle

Long-context models do not always use every position equally. Important information buried among large amounts of material can receive less effective attention than material near the beginning or current request.

Avoid treating one universal curve or vendor ranking as permanent; behavior depends on Model, task, and evaluation. The practical effects are stable:

- Put durable governing rules early.
- Put the current request and critical local constraints late and clearly.
- Summarize and retrieve relevant evidence rather than dumping an archive.
- Repeat a genuinely essential constraint near the decision point when appropriate.
- Test retrieval and reasoning at realistic Context lengths.

Visual emphasis alone is not a guarantee. Organization and relevance matter more than decorative warning symbols.

## Practical Management

### Mimo

Mimo reserves room for System instructions, five layers of Memory, Tool definitions, files, and unexpected Tool results. It retains a limited recent history and a compact summary rather than spending the whole theoretical window. The exact number of turns is a policy choice, not a magic constant.

### An Investment System

```
Skill                 reusable analytical method
Project Instructions  personal investment philosophy
Project Files         constitution and ledger
Current Context       the present question and analysis
```

This separation prevents long-lived principles from becoming tangled with temporary discussion.

### Three Principles

1. **Place only worthwhile material on the whiteboard.** Do not dump entire libraries or duplicate history.
2. **Position information by role.** Stable rules early; current evidence and request near the end.
3. **Separate persistence from visibility.** Keep long-term information outside Context and retrieve the portion needed now.

## Key Insights

### Context Is More Than Capacity

Quality depends on information relevance, position, organization, caching, retrieval, and compaction—not only the advertised Token count.

### Memory and Context Differ

```
Memory   how information persists across time
Context  what information is visible during this run
```

Memory becomes useful to a Model only when the system retrieves and places the right part into Context.

## Next

- [Agent Memory](memory-system-guide.md)
- [Skills](../ai-application/skills-business-landscape.md)
- [Workflow Orchestration](workflow-orchestration.md)
- [Prompt Engineering](prompt-engineering-guide.md)
- [RAG](../ai-application/rag-guide.md)

---

**Last updated**: August 4, 2026
