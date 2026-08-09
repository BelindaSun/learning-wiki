# 算力脊 · Compute Spine

**核心概念**: 从"核 / 并行"这组已经认识的原子，到 GPU 为什么赢、精度为什么能换速度——这条脊回答"为什么 GPU 赢了深度学习""为什么降精度能提速"两个问题，两篇都已经写好。

---

```
（核 / 并行 —— 已在 Foundation Zero 认识）→ CPU vs GPU → FLOPS × 精度
```

这条脊比骨架阶段列出的候选链条短——"处理器 / 核 / 并行 / 矩阵乘法"已经在 [Foundation Zero](foundation-zero.md) 和 [CPU vs GPU](cpu-vs-gpu.md) 里讲过，不用再单独开页重复；"加速器种类"在 [Hardware Map](hardware-map.md) 已经是认识级别，深挖 TPU 等具体加速器不属于"理解现代 AI 算力所需的最小知识集"，暂不展开。

## 这条脊要回答的问题

- **为什么 GPU 赢了深度学习？** → [CPU vs GPU：为什么 GPU 赢了深度学习](cpu-vs-gpu.md)
- **为什么降精度能提速？** → [FLOPS 与精度：为什么降精度能提速](flops-and-precision.md)

---

**最后更新**: August 9, 2026

**相关**:
- [Computing Foundations · 计算机基础地图](index.md)
- [Foundation Zero · 地基第 0 层](foundation-zero.md)
- [Hardware Map](hardware-map.md) —— "为什么 GPU 赢了深度学习"是 Hardware Map 指向这条脊的问题
- [Software × Hardware Map](software-hardware-map.md) —— "精度怎么换速度"（FLOPS+精度节点）也在这条脊里
- [Coding Agent 与 Agent 基础设施的操作系统化](../career-impact/agent-infrastructure-os.md) —— "模型正在下沉为这一轮的 CPU"，是这条脊在产业格局层面的一个具体案例
