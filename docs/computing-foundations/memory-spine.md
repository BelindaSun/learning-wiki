# 内存脊 · Memory Spine

**核心概念**: 从内存 vs 存储到 compute/memory-bound，这条脊回答"为什么更快的算术 ≠ 更快推理"——本页是骨架页，详情待 Phase 1+ 逐条展开。

---

```
内存 vs 存储 → 内存层级 → 内存带宽 → 高带宽内存(HBM) → 算术强度 → compute-bound / memory-bound
```

## 这条脊要回答的问题

- 为什么更快的算术 ≠ 更快推理？

详情待 Phase 1+。

---

**最后更新**: August 9, 2026

**相关**:
- [Computing Foundations · 计算机基础地图](index.md)
- [Foundation Zero · 地基第 0 层](foundation-zero.md)
- [Hardware Map](hardware-map.md) —— "为什么带宽比算力更常是瓶颈"是 Hardware Map 指向这条脊的问题
- [Software × Hardware Map](software-hardware-map.md) —— Runtime 的 Memory management 决策，是这条脊在软硬边界上的体现
- [推理基础设施与 Agent 延迟](../ai-core/inference-infrastructure-and-agent-latency.md) —— "解构式推理"（Prefill 的 compute-bound vs Decode 的 memory-bandwidth-bound），是这条脊在真实推理系统里的一个具体案例
