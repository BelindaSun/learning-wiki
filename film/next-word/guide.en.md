# The Next Word: A Viewing Guide

**Core idea**: This 4-minute-18-second film takes the second between "you press Enter" and "the AI writes an answer", slows it down about 250 times, and follows one question, "你是什么？ / What are you?", along the whole path a large language model takes to produce a reply.

**Key insight**: The shortest way to understand AI is not to memorise a list of terms. It is to follow one sentence through the machine: the text is cut into tokens, the tokens look at each other, the parameters compute how likely each next word is, one is picked, it is fed back in, and the loop runs again. Most other concepts are one stop on that path.

**Source**: The film's spine comes from [Start Here](../../start-here.en.md), station 02. Each chapter links to a deeper page in this wiki; see "Going deeper" below.

**New to AI?** You can watch it with no background. Watch the film first, then read this guide, or come back to the chapter where you got stuck.

🎬 **Watch**: [next-word.mp4](next-word.mp4) (1280×720, with sound, Chinese and English)

---

## Contents

- [Four things to know before you watch](#four-things-to-know-before-you-watch)
- [Thirteen chapters: what to watch for](#thirteen-chapters-what-to-watch-for)
- [What the film simplifies](#what-the-film-simplifies)
- [Three questions to think about](#three-questions-to-think-about)
- [Going deeper](#going-deeper)

---

## Four things to know before you watch

**1. The clock in the top-right corner is real time.** It starts at 0.000 s. When the film ends, it has only reached 0.94 s. You watch for four minutes; on the AI's side, less than a second passes. The whole film is about that second.

**2. Orange belongs only to people.** The person asking, the people rating answers, the person checking, and the line Belinda wrote at the end are orange. Everything the AI does is black. When orange appears, a person has entered the scene.

**3. The board is the context window.** At the end of each chapter the writing is wiped, but never quite clean, and faint marks stay on the board. In the context-window chapter, the marks from the earliest chapters slide off the left edge and never come back. The film does not only explain the context window; it acts one out.

**4. Chinese and English are equals.** Every line appears in both languages, in the same color, at the same optical size, written in the same stroke. Whichever language a line was first said in comes first.

> **Watching on a phone**: turn it sideways and go full screen. The small grey text is supporting detail, and missing it won't lose you the thread. The large black text carries the story.

---

## Thirteen chapters: what to watch for

Each chapter gets three things: **what happens on screen**, **the moment to watch for**, and **the one sentence to take away**.

### 0:00 · A question

Someone types "你是什么？ / What are you?" into a box and presses Enter.

- **Watch for**: around 0:05, as "The next second, slowed down about 250 times" is written, the clock in the corner starts running.
- **Take away**: the next four minutes are one second in the AI's world.

### 0:14 · Tokens

The question is cut into small pieces, and each piece is swapped for a number. Then each number becomes a list of numbers and lands on a "map of meaning".

- **Watch for**: from 0:23, on the map, cat, dog and rabbit sit together; Paris, Tokyo and Beijing sit together.
- **Take away**: the model can't see letters, only numbers. Words that mean similar things live close together in its space of numbers.

### 0:40 · Attention

A sentence: "The animal didn't cross the street because it was too tired." Arcs run from "it" to the other words. The thicker the line, the more "it" is listening to that word.

- **Watch for**: at 0:51, "tired" becomes "wide", and the thick line swings from "animal" to "street". One changed word, and the attention turns.
- **Take away**: every word looks back at every other word and decides which ones to listen to. That is attention, and the model does it again in every layer.

### 1:04 · Parameters

A screen full of small dots. The view keeps pulling back, the dots grow denser, and the counter climbs to "hundreds of billions".

- **Watch for**: the dots never move in this chapter. While answering a question, the parameters are fixed; they only change during training (they start moving in the 2:22 chapter).
- **Take away**: the model is mostly these billions to trillions of numbers. Like a musical score, it cannot play itself; a program has to perform it.

### 1:20 · The next word

Two bar charts: the next word might be "我 / I", "一个 / A", "你好 / Hello"… Then a small dot hops between the rows and settles on the top one.

- **Watch for**: "temperature" at 1:36. At low temperature it almost always picks the most likely word; at high temperature it takes more chances on unlikely ones.
- **Take away**: it doesn't "know" the answer. It computes how likely each word is to come next, then picks one.

### 1:42 · Again and again

The answer grows one word at a time: "I → am → a → language → model". Each time a word is written, an arc carries it back to the start of the sentence.

- **Watch for**: every word written plays a note in the score.
- **Take away**: every sentence it says is built this way, word by word. To avoid redoing everything each time, it saves its earlier work; this is called the KV cache.

### 2:04 · The context window

A tape of tokens enters a frame from the right. The frame is the context window. Tokens that leave on the left fall off.

- **Watch for**: from 2:11 to 2:19, watch the background of the board. The faint marks left by earlier chapters slide left together, and the oldest ones disappear. The caption says: "Like the start of this film. It is no longer on this board."
- **Take away**: the model itself has no memory, only the board in front of it. When the board is full, the oldest writing falls off. That is why every new window starts from a blank page.

### 2:22 · Training

"The cat sat on the ___". It guesses *moon*, which is crossed out; the answer is *mat*, and the patch of parameter dots beside it shivers. Then countless sentences stream past and the counter climbs to "trillions". Next comes a curve that stays flat and then suddenly rises. Finally, two answer cards, one of which gets an orange tick.

- **Watch for**: around 2:41, at the end of the line "Like water: below 0° it is ice. Past 0°, it is water." there is a small orange tick. It is a callback to version one; see the note after "What the film simplifies".
- **Take away**: nobody wrote the rules. It was simply corrected trillions of times. Then people teach it how to talk well.

### 2:50 · The chip

On the left, a big warehouse (memory). In the middle, a narrow pipe. On the right, rows of compute cores, most of them dark most of the time.

- **Watch for**: very few cores light up. Most of the time they are waiting for the pipe to deliver the parameters.
- **Take away**: when generating an answer, the bottleneck is often moving, not computing, like a chef waiting for ingredients. AI looks like software, but its scale is bound by the physical world.

### 3:08 · Confidently wrong

The question is "Who was this town's first mayor, in 1847?" A few invented names have similar probabilities; "I don't know" is last. The model still writes a fluent sentence: "The first mayor was John Miller."

- **Watch for**: at 3:14 the sentence is circled in orange, with a "?" beside it. That is a person checking.
- **Take away**: what it does best is sound right. Sounding right is not the same as being right.

### 3:24 · Agents

On the left, the loop Think → Act → Observe. On the right, the model writes an instruction: search "Shanghai weather tomorrow". Another program runs it and writes "light rain, 18°C" back onto the board. The model continues: "Bring an umbrella tomorrow." Finally, a large frame is drawn around the whole thing.

- **Watch for**: at 3:36 the large frame appears, labelled "外框 harness".
- **Take away**: a model that talks + tools + a loop = an agent. The model is the engine; the frame around it (permissions, memory, checks) is the harness.

### 3:42 · The next word is yours

The answer finally completes: "I am a language model. I guess one word at a time." Then comes one line from Belinda, and at the end only one orange sentence and a blinking cursor remain.

- **Watch for**: the score stops on a chord that doesn't return home, like a question.
- **Take away**: guess well enough and it starts to look like thinking. It can help you work out how, but it cannot decide what matters. The next word is yours.

### 4:08 · Credits

---

## What the film simplifies

To fit in four minutes, some parts are beginner's approximations. They aren't mistakes, but it's worth knowing where the film simplified:

- **Tokens**: real tokenizers split text differently from the film. A Chinese word may be one token or several. The token IDs and every probability in the film are illustrative, not numbers from a real model.
- **The map of meaning**: the real space has thousands of dimensions. The film squashes it into two so you can see "similar words live close together".
- **Attention**: the film only shows "it" looking back. In practice every word does the same, and each layer has many sets of attention running at once, each tracking different relationships.
- **"This is the model itself"**: more precisely, a model is "architecture + parameters". The architecture decides how the numbers take part in the calculation; the parameters are the billions to trillions of numbers learned in training.
- **"It has no memory"**: this is about the model itself. Many AI products add memory outside the model, saving important things and putting them back into the context window next time. That belongs to the harness layer; see [Agent Memory](../../docs/ai-core/memory-system-guide.en.md).
- **Training**: the film compresses training into two images. One common description has three stages: pretraining (guessing the next word), supervised fine-tuning (teaching it to talk like an assistant from examples), and reinforcement learning from human feedback (people rating answers). See [Training](../../docs/ai-core/training-system-guide.en.md).
- **"Some abilities appear only once the model is big"**: this is often called emergence. Whether abilities really appear "suddenly" is still debated; some research suggests part of the effect comes from how abilities are measured. That is why the film says "some".
- **"The bottleneck is moving"**: this mainly applies to the stage of writing the answer one word at a time. Reading your input can process many tokens at once and leans more on compute. See [Inference Infrastructure and Agent Latency](../../docs/ai-core/inference-infrastructure-and-agent-latency.en.md).
- **Confidently wrong**: the town is invented so the model cannot possibly know. Today's models say "I don't know" to questions like this more often than they used to, but fluent invention still happens.
- **0.94 seconds**: this is illustrative. Real response times vary widely, from a few hundred milliseconds to several seconds, depending on the model, the length of the answer, and the hardware.

> **About the orange tick**: in version one, *The Whiteboard*, Claude once wrote "1° is ice" while explaining emergence, and Belinda caught it on the spot. This film uses the water metaphor again, correctly this time, so there is an orange tick beside it: a person has checked it.

---

## Three questions to think about

**1. If it is "only guessing the next word", why does it look like thinking?**
The film says "guess well enough, and it starts to look like thinking". Where do you think the line between "looks like" and "is" falls? Or is that line hard to draw at all?

**2. The 37% can be pulled back up.**
At 99% reliability per step, the chance of getting all 100 steps right is about 37%. But that arithmetic assumes no step is checked and no mistake is corrected. If you were designing a 100-step task, where would you put the checks? Should the AI do them, or a person? (Hint: look again at the word "checks" in the harness frame at 3:24.)

**3. Which decisions would you hand over, and which wouldn't you?**
Think of one thing you'd happily let an AI do this week, and one you wouldn't. Is the difference "can it do this well?", or "is this worth doing, and should it be done at all?"

---

## Going deeper

In the order of the film:

- 📖 [Start Here](../../start-here.en.md): the film's spine is station 02; stations 03, 04 and 06 cover agents, chips and context
- 📖 [Transformer Architecture](../../docs/ai-core/transformer-architecture.en.md): tokens, the space of meaning, attention, layers
- 📖 [Inference](../../docs/ai-core/inference-system-guide.en.md): probabilities, temperature, word-by-word generation, the KV cache
- 📖 [Context Window](../../docs/ai-core/context-window-guide.en.md): why the whiteboard fills up
- 📖 [Training](../../docs/ai-core/training-system-guide.en.md): where the parameters come from
- 📖 [From Silicon to AI](../../docs/computing-foundations/from-silicon-to-ai.en.md): chips, memory, and the moving bottleneck
- 📖 [Glossary](../../glossary.en.md): hallucination, inference, training, context, one line each
- 📖 [Harness Systems](../../docs/ai-application/harness-system.en.md): the frame around the model
- 📖 [Model capability ≠ Agent capability](../../docs/ai-core/model-vs-agent-capability.en.md): why the same model can do very different things inside different frames

---

Thanks to Xiaomiu (小缪) for the first draft and the review, and to Lao Jia (老贾) for a review based on a single sheet of stills.

**Last updated**: September 27, 2026
**Related**:
- [About The Next Word](README.en.md)
- [Version one, The Whiteboard](../README.en.md)
- [Start Here](../../start-here.en.md)
- [中文版](guide.md)
