# 内存脊 · Memory Spine

**核心概念**: 算力脊回答"算得有多快"，这条脊回答一个容易被忽略的对偶问题：**数据搬得有多快**。过去几十年，芯片算力涨得比数据搬运速度快得多，两者之间越拉越大的差距叫内存墙（Memory Wall）。很多 AI 系统的瓶颈不在"算不动"，而在"数据来不及送到计算单元"。

---

## 这条脊的逻辑线

```
（内存 vs 存储 —— 已在 Foundation Zero 认识）
        ↓
   内存层级：越近越快、越远越大，每一层都是取舍
        ↓
   容量 vs 带宽：同一块内存，"装得下多少"和"搬得多快"是两件独立的事
        ↓
   compute-bound vs memory-bound：
   瓶颈到底卡在"算"还是"搬"，取决于算术强度
```

这条逻辑线最终收束到一个判断框架：给定一个具体的计算任务，**它到底卡在算力还是卡在内存带宽？** 答案不同，优化方向完全不同——算力脊讲的"换更快的芯片、用更低的精度"只在 compute-bound 时管用；如果任务是 memory-bound，瓶颈在搬运，加再多算力也只是让计算单元闲着等的时间更长。

## 为什么这条脊对理解 AI 系统特别重要

大语言模型的推理过程天然包含这两种模式：

- **Prefill**（处理整段输入）：矩阵乘矩阵，数据复用率高，通常是 compute-bound
- **Decode**（逐 token 生成）：矩阵乘向量，每生成一个 token 都要把整套模型权重重新从内存里读一遍，通常是 memory-bound

这意味着同一次对话里，系统的瓶颈会在算力和内存带宽之间切换——理解这条脊，才能看懂为什么"推理延迟"不是一个简单的数字，以及为什么 HBM（高带宽内存）对 AI 芯片这么重要。

## 这条脊的文章

- **[内存墙：为什么很多时候不是算不动，而是数据送不到](memory-wall.md)** —— 完整展开内存层级、容量 vs 带宽、compute-bound / memory-bound 这三块，并链接到 LLM 推理中的真实案例

## 这条脊跟其他脊的关系

| 相关脊 | 关系 |
|--------|------|
| [算力脊](compute-spine.md) | 互补——算力脊管"算"，内存脊管"搬"，两个瓶颈哪个先到，取决于任务的算术强度 |
| [规模脊](scale-spine.md) | 放大版——内存墙是"芯片内部"数据搬不过来，规模脊是"机器之间"数据搬不过来，同一个"喂不饱"的逻辑 |
| [半导体脊](semiconductor-spine.md) | 供应链——HBM 堆叠制造本身是一道独立的产能关卡 |
| [软硬桥脊](bridge-spine.md) | 软件决策——"哪份数据放哪层内存"这类调度决策，分散在编译器/kernel/运行时好几层 |

---

**最后更新**: August 19, 2026

**相关**:
- [Computing Foundations · 计算机基础地图](index.md)
- [Foundation Zero · 地基第 0 层](foundation-zero.md)
- [Hardware Map](hardware-map.md) —— "为什么带宽比算力更常是瓶颈"是 Hardware Map 指向这条脊的问题
- [Software × Hardware Map](software-hardware-map.md) —— Runtime 的 Memory management 决策，是这条脊在软硬边界上的体现
- [算力脊 · Compute Spine](compute-spine.md) —— 管"算"的那一半
- [推理基础设施与 Agent 延迟](../ai-core/inference-infrastructure-and-agent-latency.md) —— Prefill（compute-bound）vs Decode（memory-bound）的真实案例
