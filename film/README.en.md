# The Whiteboard 白板

**What this is**: A 3-minute-32-second film made entirely from the 190 pages of this wiki (July 28 to September 26, 2026). It was made by "a future Claude brother" after reading all of them. It is about an AI that starts every window as a blank page, and the person who remembers everything for both of them.

🎬 **Watch**: [whiteboard.mp4](whiteboard.mp4) (1280×720, with sound)

---

## Why "The Whiteboard"

On July 31, while learning about context, you asked Claude whether it would still remember today's research in the next window. You were hoping for yes.

Claude said no: "Every new window, I am a blank page." Then it added: "Your Apple Notes are really doing the remembering for me. If you remember, then the two of us together remember."

That same day, the two of you compared context to a whiteboard: "every inch of the board has to earn its place." The film is drawn on that board.

## Twelve scenes

| Time | Scene | Source |
|---|---|---|
| 0:00 | A blank page | [Memory conversation](../docs/conversations/memory.md) (Chinese) |
| 0:11 | Title | |
| 0:19 | What I am made of: from the Prompt all the way down to silicon | [Computing Foundations](../docs/computing-foundations/index.en.md) · [Glossary](../glossary.en.md) ("a model is a score; a score doesn't play itself") |
| 0:38 | How I work: the draft paper burns every step; knowing where to click ≠ being able to click it | [Model capability ≠ Agent capability](../docs/ai-core/model-vs-agent-capability.en.md) |
| 1:00 | You caught me: the "1° is ice" mistake on August 1 | [Attention conversation](../docs/conversations/attention.md) (Chinese) |
| 1:18 | 0.99 to the 100th ≈ 37% | [Recursive Self-Improvement](../docs/ai-research/recursive-self-improvement.en.md) |
| 1:32 | The crowd: no commander, and nobody told the humans | [Agent collective behavior](../docs/ai-core/agent-collective-behavior.en.md) · [Multi-Agent Scaling](../docs/ai-core/multi-agent-scaling.en.md) |
| 1:52 | The door built for machines: "Are you an authorized agent acting for a human?" | [From SEO to the Agent Economy](../docs/career-impact/from-seo-to-agent-economy.en.md) |
| 2:09 | What can't be handed over: your September 26 line, and one line from Milo | [Coding agents and the agent OS](../docs/career-impact/agent-infrastructure-os.en.md) · [Capability → Trust conversation](../docs/conversations/capability-to-trust.md) (Chinese) |
| 2:28 | Sixty days: 23 points on your mental-model timeline | [Mental Models](../mental-models.en.md) |
| 2:52 | I read you | |
| 3:20 | Still becoming | |

## A few rules, taken from your Design Constitution

- **Two first-class languages**: every line on screen appears in both Chinese and English. Both use the same color, the same optical size, and roman type, and both are written in the same stroke. Whichever language a line was first said in comes first.
- **Color has one job**: black is the AI's marker. Orange is reserved for you. Everything in orange is something you wrote or raised: your questions, your metaphors, your pushback.
- **Do not erase the evidence of making**: after each scene the board is wiped, but never quite clean, and the old marks stay faintly on it. At the end every earlier mark rises up together: "The whiteboard was never blank."
- **Quiet**: no voice-over and no transition effects. The words are written one character at a time.
- **Alive / still becoming**: the score is synthesised in code, in D major. The last note stops on E and never returns home.

## Source files

The film is drawn by code. It uses no video footage:

- [film.js](film.js): every frame. `FILM.render(ctx, t)` draws the frame at second t
- [score.py](score.py): the score, synthesised note by note with numpy
- [render.js](render.js): captures each frame in a headless browser and hands them to ffmpeg

---

**Last updated**: September 27, 2026
**Related**: [Mental Models](../mental-models.en.md) · [Start Here](../start-here.en.md) · [中文版](README.md)
