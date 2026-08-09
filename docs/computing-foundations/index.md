# Computing Foundations · 计算机基础地图

**核心概念**: 这一层是整个 Wiki 的地基——读懂 AI 时代所需的最小计算基础，不是 CS 学位。从硅一路叠到 AI 产品，中间每一层怎么连起来，就是这张地图要讲的事。

**阅读顺序**：**[Foundation Zero](foundation-zero.md)（认识"原子"）→ From Silicon to AI（下面这张图，看原子如何叠成整体）→ 五主脊（逐条深入，[算力](compute-spine.md) / [内存](memory-spine.md) / [规模](scale-spine.md) / [软硬桥](bridge-spine.md) / [半导体](semiconductor-spine.md)）**。

---

## From Silicon to AI · 主定向图

![从硅到 AI：从下往上，硅/晶体管 → 芯片 → 处理器（配内存、互连组成计算系统）→ 服务器 → 集群 → 数据中心 → 训练/推理 → AI 产品，左轨半导体供应链、右轨软件栈](assets/from-silicon-to-ai.svg)

从下往上读：硅/晶体管 → 芯片 → **处理器**（黄色框里：处理器提供算力，配上内存、互连，才组成一个**计算系统**）→ 服务器 → 集群 → 数据中心 → 训练/推理 → AI 产品。

左轨 = 半导体供应链，造出底层的硅与芯片；右轨 = 软件栈，把训练/推理任务翻译、调度到底层硬件——两条轨就是连接软硬件的"两座桥"。

**"算力"不是处理器之上另生成的一层，而是处理器的能力**：黄色框把处理器 + 内存 + 互连包在一起，表示"一个计算系统"，这个整体再往上叠成服务器。

---

## 核心页面

- [Foundation Zero · 地基第 0 层](foundation-zero.md) —— 进五主脊之前，先认识 5 组最基本的"原子"
- [算力脊](compute-spine.md) —— 晶体管 → ... → 训练/推理，回答"为什么 GPU 赢了深度学习"
- [内存脊](memory-spine.md) —— 内存 vs 存储 → ... → compute/memory-bound，回答"为什么更快的算术 ≠ 更快推理"
- [规模脊](scale-spine.md) —— 程序 → ... → 数据中心，回答"为什么从 1 卡扩到千卡很难"
- [软硬桥脊](bridge-spine.md) —— 编程语言 → ... → 映射到硅片，回答"CUDA 为什么是护城河"
- [半导体脊](semiconductor-spine.md) —— 硅/晶圆 → ... → 高带宽内存堆叠，回答"为什么芯片产能约束 AI"

五主脊目前都是骨架页（只放脊图 + 一句导航），详情在 Phase 1+ 逐条展开。

---

**最后更新**: August 9, 2026

**相关**:
- [AI Core](../ai-core/index.md) —— Computing Foundations 坐在 AI Core 之下，是它的地基层
- [推理基础设施与 Agent 延迟](../ai-core/inference-infrastructure-and-agent-latency.md) —— Prefill/Decode 的硬件约束，是内存脊的一个具体案例
- [Coding Agent 与 Agent 基础设施的操作系统化](../career-impact/agent-infrastructure-os.md) —— "模型正在下沉为 CPU"这个类比，是算力脊的一个具体案例
