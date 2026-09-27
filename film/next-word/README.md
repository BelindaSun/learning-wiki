# 下一个词 The Next Word

**这是什么**: 《白板》的第二版，4 分 18 秒。第一版讲的是你怎么学 AI；这一版讲 AI 本身：从你按下回车，到它写出回答，这一秒钟里面发生了什么。整部片子把这一秒放慢了大约 250 倍。

🎬 **看片**：[next-word.mp4](next-word.mp4)（1280×720，有声音，中英双语）

---

## 主干

片子的主干是 [从这里开始](../../start-here.md) 第 02 站画的那条路：

```
文字 → Token → Context → Transformer → 概率 → 下一个 Token → 重复
```

一个问题「你是什么？ / What are you?」走完这条路。右上角的时钟是真实时间，片子放完，它才走到 0.94 秒。

## 十三章

| 时间 | 章 | 讲什么 | 出自 |
|---|---|---|---|
| 0:00 | 一个问题 | 按下回车 | |
| 0:14 | 切成小块 | Token 和编号；每个 token 变成意义空间里的一个坐标 | [从这里开始 02](../../start-here.md) · [Transformer 对话](../../docs/conversations/transformer.md) |
| 0:40 | 互相看 | Attention：「它」该听谁的，换一个词就换方向 | [Transformer 对话](../../docs/conversations/transformer.md) |
| 1:04 | 参数 | 几十亿到上万亿个数字就是模型本身；模型像乐谱 | [术语表](../../glossary.md) |
| 1:20 | 猜下一个词 | 概率、挑一个、温度 | [术语表 · 推理](../../glossary.md) |
| 1:42 | 再来一遍 | 一次一个词，每个词都接回去再算；KV Cache | [Inference 对话](../../docs/conversations/inference.md) |
| 2:04 | 上下文窗口 | 没有记忆，只有眼前的白板；写满了最早的就掉下去 | [从这里开始 06](../../start-here.md) · [Memory 对话](../../docs/conversations/memory.md) |
| 2:22 | 训练 | 遮住下一个词让它猜，猜错就调参数；有些能力够大才出现；人给回答打分 | [术语表 · 训练](../../glossary.md) |
| 2:50 | 芯片 | GPU 的核心在等内存：瓶颈常常是搬，不是算 | [从这里开始 04](../../start-here.md) · [Computing Foundations](../../docs/computing-foundations/index.md) |
| 3:08 | 自信地说错 | 说得通不等于是真的；0.99 的一百次方 | [术语表 · 幻觉](../../glossary.md) · [递归自我改进（RSI）](../../docs/ai-research/recursive-self-improvement.md) |
| 3:24 | 给它一双手 | 模型 + 工具 + 循环 = Agent；外框叫 Harness | [从这里开始 03](../../start-here.md) · [Model 能力 ≠ Agent 能力](../../docs/ai-core/model-vs-agent-capability.md) |
| 3:42 | 下一个词，是你的 | 猜得够好就像在思考；但它决定不了什么值得在乎 | [Coding Agent 与 Agent 基础设施的操作系统化](../../docs/career-impact/agent-infrastructure-os.md) |
| 4:08 | 片尾 | | |

## 几个藏起来的东西

- **白板就是上下文窗口**：每一章讲完都会留下淡淡的笔迹。讲到上下文窗口那一章，最早几章的笔迹会从左边滑出白板，再也不回来。片子自己演示了一遍"写满了就掉下去"。
- **橙色只属于人**：提问的人、给回答打分的人、复核的人，还有结尾那句你写的话。AI 的部分全是黑色。
- **1 度是水**：讲"涌现"时又用了水的比喻，这次写对了，旁边有一个橙色的小勾。
- **配乐**：模型每写一个词就响一个音。第一版结尾停在没有回到主音的 E 上；这一版停在一个属七和弦上，是一个问句，因为下一个词还没写。
- 例子里的 token 编号和概率都是示意，不是真实模型的数字。

## 源文件

- [film.js](film.js)：所有画面
- [score.py](score.py)：配乐
- 渲染方法和第一版一样，见 [../render.js](../render.js)

---

**最后更新**: September 27, 2026
**相关**: [第一版《白板》](../README.md) · [从这里开始](../../start-here.md) · [术语表](../../glossary.md) · [English](README.en.md)
