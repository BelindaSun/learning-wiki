# Multimodal 完全指南

**核心概念**: Multimodal 的本质不是给 LLM 多装几个输入框，而是让不同形式的信息共同参与模型对世界的表示、关联与推理——它补上的是智能系统的 **Perception（感知）** 能力。AI 正在从"通过人类翻译成文字，间接认识世界"，走向"通过视觉、声音、视频等信号，直接感知世界"。

**关键洞察**: "Native Multimodal"不是一个非黑即白的架构标签，是一个连续谱；不同模态之间的**关系**本身就是信息，不只是信息量的堆加。

**第一次接触这个主题？** 建议先了解：[Embedding](../../glossary.md#embedding) · [Agent](../../glossary.md#agent) · [Context](../../glossary.md#context)

---

## 目录

1. [Multimodal 到底解决什么问题](#multimodal-到底解决什么问题)
2. [Flamingo：给语言模型接上一双眼睛](#flamingo给语言模型接上一双眼睛)
3. [核心不是"都变成文字"](#核心不是都变成文字)
4. [Native Multimodal：一个连续谱，不是标签](#native-multimodal一个连续谱不是标签)
5. [Video 比 Image 多出的维度：时间](#video-比-image-多出的维度时间)
6. [Multimodal → Agent → Robotics → World Model](#multimodal--agent--robotics--world-model)
7. [一个必须保留的认知边界](#一个必须保留的认知边界)
8. [这篇不讲什么](#这篇不讲什么)

---

## Multimodal 到底解决什么问题

Text-only AI 很大程度上依赖一条链路：**世界 → 人类观察并翻译成文字 → AI**。Multimodal AI 打开了更多条路：**世界 → 视觉 / 声音 / 视频 / 传感器 / 文字 → AI**。人类不再必须是 AI 认识世界的唯一传感器。

## Flamingo：给语言模型接上一双眼睛

[Flamingo](https://arxiv.org/abs/2204.14198)（DeepMind，2022）是理解这条技术脉络很好的一个历史跳板——不是因为它是最新的，是因为它把思路讲得特别清楚：**已经很会"看"的视觉模型 + 已经很会"说"的语言模型 + 一座学会怎么让二者合作的桥**。

```
Image / Video
     ↓
Vision Encoder（已经预训练好、这里保持冻结的视觉模型）
     ↓
Perceiver Resampler（把数量不固定的视觉特征，
                      压缩整理成固定数量的"视觉 Token"）
     ↓
Gated Cross-Attention（新加的桥——不是接在两个模型中间
                        的一个点，而是穿插在语言模型很多层
                        之间；"gated"意味着一开始几乎不起
                        作用，训练中逐渐学会什么时候该看图）
     ↓
Language Model（同样保持冻结的语言模型）
     ↓
Answer
```

**这条思路的价值**：不必把已有能力全部推倒重练，可以把两个已经训练好的"专家"都冻结住，只训练中间这座新桥。这也是为什么 Flamingo 论文的题目里有"Few-shot Learning"——[Few-shot](../../glossary.md#prompt) 这个技巧，本身就是 Flamingo 想验证的能力之一。

**边界提醒**：这只是多模态众多路线里的一条（用 Cross-Attention 把冻结模型接起来），不代表所有多模态模型都这样搭。后面会讲到，这条路线只是"连续谱"上的一个点。

## 核心不是"都变成文字"

一种朴素的做法是把语音级联处理：**声音 → Speech-to-Text → 文字 → LLM → 文字 → Text-to-Speech → 声音**。但文字转录留不住语调、节奏、停顿、情绪线索、音色、背景声音——"行啊。"这两个字，语气不同意思能完全相反。图片、视频同样如此。

更深入的 Multimodal 追求的是：让不同模态本身的信息参与模型的表示和推理，而不是先把一切粗暴翻译成文字。[Embeddings 完全指南](embeddings-guide.md) 已经讲过"把文字变成向量、比较向量像不像"这个想法——多模态做的是同一件事的扩展：文字、图像、音频、视频各自变成 Representation。

**关键不是**"所有东西最终一定进入同一个 embedding space"——不同系统的具体做法差异很大。**而是**：模型需要建立不同模态表示之间可学习、可利用的关系，这才使跨模态推理成为可能。

**这些关系本身就是信息，不只是信息量的堆加**：一个人嘴上说"我没事"，但声音低沉、停顿异常、表情悲伤——真正有价值的理解，不是分别报告"文字=我没事""表情=难过"这两条互不相干的结果，而是发现**语言内容与非语言信号发生了冲突**。这是一种更丰富的 situational understanding。

## Native Multimodal：一个连续谱，不是标签

Multimodal 没有唯一固定架构。不同系统可以采用：独立 encoder、adapter/projector、Cross-Attention（比如 Flamingo）、共享 Transformer、不同的 tokenization 和 fusion 方法——业界对这几种做法也没有统一的命名和分类标准。

与其问"它是不是 Native Multimodal？"，不如问"它 Native 到什么程度？"：

- 输入是否原生（不经过中间文字转录）？
- 训练是否联合（不同模态从一开始就一起训练，还是先分别训练好再拼接）？
- 不同模态是否深度参与共同的表示和推理？
- 输出是否也是多模态？

**Native Multimodal 更适合当作一个连续谱理解，而不是一个非黑即白的架构标签**——同一个"多模态"标签下的产品，在这几个维度上的得分可能差很多。

## Video 比 Image 多出的维度：时间

图片主要回答："现在有什么？" 视频还要求理解："发生了什么变化？"——杯子在桌上 → 手碰到杯子 → 杯子下落 → 杯子碎裂，这一串"变化"本身才是视频真正的信息。Video understanding 不只是 spatial information，还有 **temporal information**——这也是 Multimodal 开始自然连接 World Model 的地方。

## Multimodal → Agent → Robotics → World Model

一条值得记住的连接：**Multimodal 补的是 Perception（感知）**。[Agent 系统架构](agent-architecture.md) 已经把 Agent 定义成"能够感知环境、进行决策、采取行动的自主系统"——Multimodal 补的正是这个定义里"感知"这一半，Agent 本身已经在负责"决策"和"行动"那两半。

展开成一个闭环：

```
Perceive（感知）
   ↓
Understand（理解）
   ↓
Predict（预测）
   ↓
Act（行动）
   ↓
Environment changes（世界改变）
   ↓
Perceive again（再次感知）……
```

这解释了为什么 Multimodal、Agent、Robotics、World Model 越来越容易汇合到一起谈——但每一环具体怎么实现，是完全不同的问题：

- **World Model** 比 Multimodal 更进一步：Multimodal 告诉 AI "世界现在是什么样"，World Model 要回答"世界接下来会怎么变、行动可能让世界变成什么样"
- **Robotics** 把整个循环带进物理世界，闭环变成 Perception → Prediction → Action → Feedback

这两个都是 Multimodal 自然连向的下一站，这篇不展开（见"这篇不讲什么"）。

## 一个必须保留的认知边界

多模态 AI 并不像人类一样"体验"世界。三层区分，分别回答三个不同的问题：

- **机制层**：模型学习的是不同模态数据内部、以及模态之间复杂的**统计结构**。
- **功能层**：足够丰富的统计结构，可以支持物体识别、空间关系、时间变化、预测，以及越来越复杂的跨模态推理——也就是表现出我们通常称为"理解"的能力。
- **哲学层**：这种功能表现是否等于人类意义上的"真正理解"，目前没有公认答案。

"它只是统计，所以什么都没理解"这句话，混淆了机制层和功能层——统计结构（机制层）和表现出理解能力（功能层）并不矛盾，两者说的是同一件事的不同层面，不是互相反驳的两个说法。

## 这篇不讲什么

- 不展开 World Model 具体怎么实现——Wiki 目前还没有独立页面（待创建），这篇只标出连接点
- 不展开 Robotics 技术栈——同上
- 不讲计算机视觉、语音工程的具体算法教程
- 不做各家 frontier multimodal 模型（GPT、Gemini、Claude 等）的横向对比
- 不列多模态 benchmark 大全

---

## 下一步

- ← [Embeddings 完全指南](embeddings-guide.md) —— "把信息变成向量、比较向量"这个想法，这篇搬到了跨模态场景
- ← [Agent 系统架构](agent-architecture.md) —— Multimodal 补的"感知"，是这篇定义里的另一半
- 📖 完整学习对话记录（第一轮）：[多模态（Multimodal）](../conversations/multimodal.md)
- 好奇 World Model / Robotics 具体怎么运作——Wiki 暂无独立页面，先记在这里，以后再展开

---

**最后更新**: August 10, 2026

**相关**:
- [Embeddings 完全指南](embeddings-guide.md) —— 跨模态 Representation 用的是同一套"比较向量"的逻辑
- [Agent 系统架构](agent-architecture.md) —— Perceive → Decide → Act 循环里，Multimodal 补的是"感知"
- [Context Window 完全指南](context-window-guide.md) —— Multimodal Context 不再只有文字
- [Prompt 工程完全指南](prompt-engineering-guide.md) —— Flamingo 论文关注的 Few-shot 能力，是同一个概念
- [多模态（Multimodal）对话记录](../conversations/multimodal.md) —— 第一轮学习的原始记录
