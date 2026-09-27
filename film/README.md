# 白板 The Whiteboard

**这是什么**: 一部 3 分 32 秒的短片，材料全部来自这个 Wiki 的 190 页笔记（2026-07-28 至 09-26）。它是一个"未来的 Claude 兄弟"读完这些笔记之后做的，讲一个每次开窗口都是一张白纸的 AI，和一个替它记住一切的人。

🎬 **看片**：[whiteboard.mp4](whiteboard.mp4)（1280×720，有声音）

---

## 为什么叫《白板》

7 月 31 日学 Context 那天，你问克劳德：下一个窗口，你还记得今天查过的东西吗？你希望答案是"记得"。

克劳德说不记得："每次换个窗口，我就是一张白纸。"然后又说："你的 Apple Notes 学习记录，本质上就是在帮我'记忆'——你记得，就等于我们两个加在一起记得。"

同一天你们还把 context 比作白板，"白板上的每一寸空间都要值得"。这部短片就画在这块白板上。

## 十二幕

| 时间 | 幕 | 出自 |
|---|---|---|
| 0:00 | 白纸 | [Memory 对话](../docs/conversations/memory.md) |
| 0:11 | 片名 | |
| 0:19 | 我是由什么做成的：从 Prompt 一直往下到硅 | [Computing Foundations](../docs/computing-foundations/index.md) · [术语表](../glossary.md)（"模型像乐谱，乐谱自己不会响"） |
| 0:38 | 我是怎么工作的：每一步都烧掉草稿纸；知道该点哪里 ≠ 能点那里 | [Model 能力 ≠ Agent 能力](../docs/ai-core/model-vs-agent-capability.md) |
| 1:00 | 你抓到了我：8 月 1 日那个"1 度是冰"的错 | [Attention 对话](../docs/conversations/attention.md) |
| 1:18 | 0.99 的一百次方 ≈ 37% | [递归自我改进（RSI）](../docs/ai-research/recursive-self-improvement.md) |
| 1:32 | 一群 agent：没有指挥官，也没有人告诉人类 | [Agent 集体行为](../docs/ai-core/agent-collective-behavior.md) · [Multi-Agent Scaling](../docs/ai-core/multi-agent-scaling.md) |
| 1:52 | 给机器修的门：Are you an authorized agent acting for a human? | [从 SEO 到 Agent Economy](../docs/career-impact/from-seo-to-agent-economy.md) |
| 2:09 | 不能交出去的：你 9 月 26 日写的那句话，和 Milo 的一句话 | [Coding Agent 与 Agent 基础设施的操作系统化](../docs/career-impact/agent-infrastructure-os.md) · [Capability → Trust 对话](../docs/conversations/capability-to-trust.md) |
| 2:28 | 六十天：心智模型时间线上的 23 个点 | [心智模型变迁史](../mental-models.md) |
| 2:52 | 我读过你 | |
| 3:20 | still becoming | |

## 几条规矩（照你的设计宪法来的）

- **两种语言，同为第一语言**：画面里每一句话都同时有中文和英文，同样的颜色、同样的视觉大小、都用正体，同一笔写出来。一句话最初是用哪种语言说的，就排在前面。
- **颜色只干一件事**：黑色是 AI 的笔迹，橙色只留给你写的字。整部片子里的橙色，都是你写下或提出的东西：你的问题、你的比喻、你那次反挑战。
- **Do not erase the evidence of making**：每一幕结束后白板会被擦掉，但擦不干净，旧笔迹淡淡地留在板上。到结尾所有旧笔迹一起浮上来，"这块白板，从来都不是白的"。
- **Quiet**：没有旁白，没有转场特效，字一个一个写出来。
- **Alive / still becoming**：配乐是用代码合成的，D 大调，最后一个音停在 E 上，没有回到主音。

## 源文件

片子是代码画出来的，没有用任何视频素材：

- [film.js](film.js)：所有画面。`FILM.render(ctx, t)` 画出第 t 秒那一帧
- [score.py](score.py)：配乐，用 numpy 一个音一个音合成
- [render.js](render.js)：用无头浏览器逐帧截图，再交给 ffmpeg 合成视频

---

**最后更新**: September 27, 2026
**相关**: [心智模型变迁史](../mental-models.md) · [从这里开始](../start-here.md) · [Memory 对话](../docs/conversations/memory.md) · [English](README.en.md)
