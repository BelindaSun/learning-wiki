# The Next Word 下一个词

**What this is**: Version two of *The Whiteboard*, 4 minutes 18 seconds long. The first film was about how you learned AI; this one is about AI itself: what happens inside the model in the second between pressing Enter and getting an answer. The film slows that second down about 250 times.

🎬 **Watch**: [next-word.mp4](next-word.mp4) (1280×720, with sound, Chinese and English)

---

## The spine

The film follows the path drawn in [Start Here](../../start-here.en.md), station 02:

```
Text → Tokens → Context → Transformer → Probabilities → the next Token → repeat
```

One question, "你是什么？ / What are you?", travels that path. The clock in the top-right corner is real time; when the film ends it has only reached 0.94 seconds.

## Thirteen chapters

| Time | Chapter | What it explains | Source |
|---|---|---|---|
| 0:00 | A question | Pressing Enter | |
| 0:14 | Tokens | Tokens and IDs; each token becomes a point in a space of meaning | [Start Here 02](../../start-here.en.md) · [Transformer conversation](../../docs/conversations/transformer.md) (Chinese) |
| 0:40 | Attention | Which words "it" listens to, and how one changed word turns it | [Transformer conversation](../../docs/conversations/transformer.md) (Chinese) |
| 1:04 | Parameters | Billions to trillions of numbers are the model itself; a model is like a score | [Glossary](../../glossary.en.md) |
| 1:20 | The next word | Probabilities, picking one, temperature | [Glossary · inference](../../glossary.en.md) |
| 1:42 | Again and again | One word at a time, each fed back in; the KV cache | [Inference conversation](../../docs/conversations/inference.md) (Chinese) |
| 2:04 | The context window | No memory, only the board in front of it; when full, the oldest falls off | [Start Here 06](../../start-here.en.md) · [Memory conversation](../../docs/conversations/memory.md) (Chinese) |
| 2:22 | Training | Hide the next word, nudge the parameters when it's wrong; some abilities appear only at scale; people rate answers | [Glossary · training](../../glossary.en.md) |
| 2:50 | The chip | GPU cores waiting on memory: the bottleneck is often moving, not computing | [Start Here 04](../../start-here.en.md) · [Computing Foundations](../../docs/computing-foundations/index.en.md) |
| 3:08 | Confidently wrong | Sounding right is not being right; 0.99 to the 100th | [Glossary · hallucination](../../glossary.en.md) · [Recursive Self-Improvement](../../docs/ai-research/recursive-self-improvement.en.md) |
| 3:24 | Agents | Model + tools + a loop = an agent; the frame around it is the harness | [Start Here 03](../../start-here.en.md) · [Model capability ≠ Agent capability](../../docs/ai-core/model-vs-agent-capability.en.md) |
| 3:42 | The next word is yours | Guess well enough and it looks like thinking, but it cannot decide what matters | [Coding agents and the agent OS](../../docs/career-impact/agent-infrastructure-os.en.md) |
| 4:08 | Credits | | |

## Hidden things

- **The board is the context window**: every chapter leaves faint marks. In the context-window chapter, the marks of the earliest chapters slide off the left edge and never return. The film acts out "when it's full, the oldest falls off" on itself.
- **Orange belongs only to people**: the one asking, the ones rating answers, the one checking, and the line you wrote near the end. Everything the AI does is black.
- **1° is water**: the water metaphor for emergence comes back, written correctly this time, with a small orange tick beside it.
- **The score**: every word the model writes is a note. Version one ended on an unresolved E; this one ends on a dominant seventh chord, a question, because the next word has not been written yet.
- The token IDs and probabilities in the examples are illustrative, not numbers from a real model.

## Source files

- [film.js](film.js): every frame
- [score.py](score.py): the score
- Rendering works the same way as version one; see [../render.js](../render.js)

---

**Last updated**: September 27, 2026
**Related**: [Version one, The Whiteboard](../README.en.md) · [Start Here](../../start-here.en.md) · [Glossary](../../glossary.en.md) · [中文版](README.md)
