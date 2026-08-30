# Prompt Engineering: Reduce What the Model Must Guess

**Core idea**: Prompt Engineering is not a collection of magic phrases. During Inference, a Model predicts one Token at a time from the text available to it. Every detail in a Prompt narrows or widens the plausible continuation space. Clear background, constraints, and output requirements reduce guessing.

**Key insight**: Most useful prompting techniques perform the same job: **remove ambiguity the Model would otherwise have to resolve**. Examples, explicit formats, and intermediate analysis all constrain the path.

---

## What Is a Prompt?

A **Prompt** is the part of current [Context](../../glossary.md#context) supplied as input or instruction. The Model does not first read a hidden intention from your mind. It predicts from the information actually present. Prompt Engineering arranges that information so a likely continuation resembles the answer you need.

## Why Clarity Works

Imagine a large pool of plausible next passages. A vague Prompt leaves many candidates; a precise Prompt removes irrelevant ones.

```
Vague: "Write an introduction."
  → topic, audience, length, and tone are guesses

Specific: "Write about 100 words explaining photosynthesis
           to a middle-school audience in a lively tone."
  → the candidate space is constrained along four useful dimensions
```

The Model has not become more intelligent. You have removed work it would otherwise perform through uncertain inference.

## Three High-Leverage Techniques

### 1. Show Examples — Few-shot Prompting

Examples often specify a pattern more precisely than adjectives.

```
"Use this format:
Feedback: 'Loading is too slow' → Category: Performance | Priority: High
Now organize the following feedback: ..."
```

This is **In-context Learning**: the Model does not permanently learn new knowledge from the example; it infers the local pattern and continues it.

### 2. Create Space for Intermediate Analysis

Complex arithmetic, multi-step logic, and trade-offs often improve when the system allocates intermediate reasoning before a conclusion instead of jumping immediately to an answer. The practical principle is to ask for a deliberate method, necessary checks, or a staged solution.

Visible step-by-step text is not itself proof of correctness. Use verification when the answer matters.

### 3. Specify the Output Structure

Requesting a table, three titled sections, a schema, or JSON narrows possibilities and reduces manual cleanup. A concrete example and an explicit schema can reinforce each other.

## System and User: Different Speaking Roles

- **System** establishes persistent background for the interaction: role, constraints, tools, and behavioral rules.
- **User** supplies the current request within that background.

Separating stable operating rules from a task-specific request helps the Model distinguish environment from immediate instruction. The precise priority semantics depend on the product and implementation.

## Common Mistakes

- **Assuming the Model knows an unstated premise.** If information is absent from Context, it is unavailable.
- **Describing the output without the purpose.** “This goes to a client, so keep it formal” can constrain more effectively than a pile of stylistic adjectives.
- **Stuffing every possible instruction into one turn.** Context and attention are finite; competing requirements can hide the important ones. Decompose when useful.
- **Treating prompting as a substitute for evidence.** Better instructions improve the generation process but do not remove the need to check facts, calculations, or completed actions.

## What This Guide Does Not Cover

- Product-specific Prompt syntax
- Prompt-injection defenses
- Temperature, Top-p, and other sampling controls → [Inference](inference-system-guide.md)

## Next

- ← [Inference](inference-system-guide.md)
- ← [Context Window](context-window-guide.md)
- → [Embeddings](embeddings-guide.md)

---

**Last updated**: August 10, 2026

**Related**: [Agent Architecture](agent-architecture.md)
