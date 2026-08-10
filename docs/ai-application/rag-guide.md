# RAG 完全指南

**核心概念**: [术语表](../../glossary.md#rag) 已经给过 RAG 的最简版本：问题 → 检索相关资料 → 把资料放进 Context → 模型基于资料回答。这篇要展开"检索"这一步具体怎么做——答案是 [Embeddings](../ai-core/embeddings-guide.md)：把问题和候选资料都变成向量，找语义最接近的几段，塞进 Context 交给模型。

**关键洞察**: RAG 存在的理由，直接来自两件事的组合——[Training 完全指南](../ai-core/training-system-guide.md#训练完之后权重冻结与知识截止日期) 讲过模型的知识停在训练那一刻（知识截止日期），[Context Window 完全指南](../ai-core/context-window-guide.md) 讲过 Context 是有限资源，不可能把所有资料都塞进去。RAG 是这两个限制的直接答案：不需要重新训练模型就能让它"知道"新信息，也不需要把所有资料都塞进 Context，只挑真正相关的那一小部分。

**第一次接触这个主题？** 建议先了解：[Context](../../glossary.md#context) · [Embeddings](../ai-core/embeddings-guide.md)

---

## 目录

1. [为什么需要 RAG](#为什么需要-rag)
2. [检索这一步具体怎么做](#检索这一步具体怎么做)
3. [完整流程](#完整流程)
4. [RAG 不是万能的](#rag-不是万能的)
5. [这篇不讲什么](#这篇不讲什么)

---

## 为什么需要 RAG

模型有两个跟"知道多少"有关的硬限制：

- **知识截止日期**：[Training 完全指南](../ai-core/training-system-guide.md) 讲过，权重训练完就固定了，模型不会自己"知道"训练之后发生的事，也不会自己知道你公司内部的文档、你昨天写的笔记
- **Context 容量有限**：[Context Window 完全指南](../ai-core/context-window-guide.md) 讲过，模型每次能看到的信息是有上限的，不可能把一整个知识库塞进一次对话

**重新训练模型**能解决第一个问题，但代价是 [Training 完全指南](../ai-core/training-system-guide.md#为什么训练这么贵) 讲过的那种成本，不现实用来"更新一份文档"这么小的事。RAG 是更轻的解法：**不改模型，只在提问的时候，临时把相关资料找出来、塞进这一次的 Context**。

## 检索这一步具体怎么做

"检索"听起来像关键词搜索，但 RAG 里通常用的是 [语义搜索](../ai-core/embeddings-guide.md#语义搜索-vs-关键词搜索)：

```
1. 把知识库里所有文档，提前切成一段段（chunk），
   每段用 Embedding 模型变成一个向量，存起来

2. 用户提问时，把问题也变成一个向量

3. 拿问题的向量，去找知识库里"向量方向最接近"的几段
   （见 Embeddings 完全指南的"怎么比较两个向量像不像"）

4. 把找到的这几段原文，连同用户的问题，一起放进 Context

5. 模型基于这些资料生成回答
```

用语义搜索而不是关键词搜索，是因为用户提问的措辞，往往跟文档里的原话对不上——[Embeddings 完全指南](../ai-core/embeddings-guide.md#语义搜索-vs-关键词搜索) 已经讲过"怎么减肥"和"如何瘦身"这个例子，同样的道理搬到检索这一步。

## 完整流程

```
知识库（文档、笔记、网页……）
  ↓ 提前切块 + Embedding
一堆"文本片段 + 对应向量"

用户提问
  ↓ Embedding
问题向量
  ↓ 找向量最接近的几个文本片段
检索到的相关资料
  ↓ 和问题一起放进 Context
模型看到："这是相关资料：xxx。请基于这些资料回答：{用户问题}"
  ↓ Inference
生成的回答
```

## RAG 不是万能的

- **检索质量决定回答质量**：如果检索这一步没找到真正相关的资料，模型只能基于不相关或不完整的信息回答，"检索增强"反而可能增加错误信息的来源
- **不是让模型"记住"，是每次都重新查**：跟 [Agent 记忆系统](../ai-core/memory-system-guide.md) 不是一回事——Memory 是让 Agent 跨对话保留信息，RAG 是每次提问都重新去外部资料库查一遍，两者可以配合使用，但解决的不是同一个问题
- **切块切得好不好，直接影响效果**：一段资料切得太碎，可能丢失上下文；切得太整，可能夹带太多不相关内容——这属于工程调优细节，这篇不展开

## 这篇不讲什么

- 不讲具体的向量数据库产品（Pinecone、Weaviate 等）怎么选、怎么搭——那是工程实现细节
- 不讲切块（chunking）策略怎么调优——同样是工程细节，不是理解"RAG 为什么这样设计"所必需的
- 不讲更进阶的检索技巧（混合搜索、重排序 reranking、多轮检索）——这篇只讲最基础、最经典的 RAG 流程

---

## 下一步

- ← [Embeddings 完全指南](../ai-core/embeddings-guide.md) —— 检索这一步用到的语义搜索，机制在这里
- ← [Context Window 完全指南](../ai-core/context-window-guide.md) —— "为什么不能把所有资料都塞进去"，答案在这里
- ← [Training 训练系统完全指南](../ai-core/training-system-guide.md) —— "为什么模型不会自己知道新信息"，答案在这里

---

**最后更新**: August 10, 2026

**相关**:
- [Embeddings 完全指南](../ai-core/embeddings-guide.md) —— RAG 检索这一步用到的核心机制
- [Context Window 完全指南](../ai-core/context-window-guide.md) —— Context 容量限制，RAG 要解决的问题之一
- [Training 训练系统完全指南](../ai-core/training-system-guide.md) —— 知识截止日期，RAG 要解决的另一个问题
- [Agent 记忆系统完全指南](../ai-core/memory-system-guide.md) —— 跟 RAG 目标不同但常配合使用的另一套机制
