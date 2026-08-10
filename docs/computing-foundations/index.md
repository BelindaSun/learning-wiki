# Computing Foundations · 计算机基础地图

**核心概念**: 这一层是整个 Wiki 的地基——读懂 AI 时代所需的最小计算基础，不是 CS 学位。三步走：先建立方向感（Start），再知道每样东西大概长在哪（Orient），最后想深挖哪条就点进去搞懂为什么（Go Deeper）。

---

## 🚀 Start · 先建立最基本的方向感

刚进来，从这两步开始，按顺序走完：

1. **[Foundation Zero · 地基第 0 层](foundation-zero.md)** —— 认识 5 组最基本的"原子"（硬件/软件、CPU/内存/存储、代码/程序/进程/OS、客户端/服务器/网络/API、核/并行/GPU）
2. **From Silicon to AI**（下面这张图）—— 看这 5 组原子怎么一路叠成整个 AI 世界

### From Silicon to AI · 主定向图

![从硅到 AI：从下往上，硅/晶体管 → 芯片 → 处理器（配内存、互连组成计算系统）→ 服务器 → 集群 → 数据中心 → 训练/推理 → AI 产品，左轨半导体供应链、右轨软件栈](assets/from-silicon-to-ai.svg)

从下往上读：硅/晶体管 → 芯片 → **处理器**（黄色框里：处理器提供算力，配上内存、互连，才组成一个**计算系统**）→ 服务器 → 集群 → 数据中心 → 训练/推理 → AI 产品。

左轨 = 半导体供应链，造出底层的硅与芯片；右轨 = 软件栈，把训练/推理任务翻译、调度到底层硬件——两条轨就是连接软硬件的"两座桥"。

**"算力"不是处理器之上另生成的一层，而是处理器的能力**：黄色框把处理器 + 内存 + 互连包在一起，表示"一个计算系统"，这个整体再往上叠成服务器。

---

## 🧭 Orient · 知道每样东西大概长在哪

三张地图，分别定位软件世界、硬件世界、以及两者之间的桥——只回答"这东西是什么、大概长在哪、跟邻居什么关系"，不讲"为什么"（"为什么"是下面 Go Deeper 的事）：

- **[Software Map](software-map.md)** —— 用 ChatGPT / Claude / Coding Agent 时，看到的东西底下有哪些软件层
- **[Hardware Map](hardware-map.md)** —— 算力 / 内存 / 互连这三个维度，在芯片、服务器、集群每个尺度上怎么重复出现
- **[Software × Hardware Map](software-hardware-map.md)** —— "模型"这个软件，怎么变成 GPU 上的物理计算

## 🔬 Go Deeper · 五条主脊，搞懂为什么

五主脊现在都已经有内容：

- **[算力脊 · Compute Spine](compute-spine.md)** —— 为什么 GPU 赢了深度学习、为什么降精度能提速
  - [CPU vs GPU：为什么 GPU 赢了深度学习](cpu-vs-gpu.md) ← 已经写了
  - [FLOPS 与精度：为什么降精度能提速](flops-and-precision.md) ← 已经写了
- **[内存脊 · Memory Spine](memory-spine.md)** —— 为什么更快的算术 ≠ 更快推理
  - [内存墙：为什么很多时候不是算不动，而是数据送不到](memory-wall.md) ← 已经写了
- **[规模脊 · Scale Spine](scale-spine.md)** —— 为什么从 1 卡扩到千卡很难
  - [从 1 卡到千卡：为什么算力扩展这么难](scaling-and-communication.md) ← 已经写了
- **[软硬桥脊 · Bridge Spine](bridge-spine.md)** —— CUDA 为什么是护城河
  - [CUDA 护城河：为什么软硬之间的决策分散在每一层](cuda-moat.md) ← 已经写了
- **[半导体脊 · Semiconductor Spine](semiconductor-spine.md)** —— 为什么芯片产能约束 AI
  - [良率与代工：为什么芯片产能约束 AI](yield-and-foundry.md) ← 已经写了

---

**最后更新**: August 9, 2026

**相关**:
- [AI Core](../ai-core/index.md) —— Computing Foundations 坐在 AI Core 之下，是它的地基层
- [推理基础设施与 Agent 延迟](../ai-core/inference-infrastructure-and-agent-latency.md) —— Prefill/Decode 的硬件约束，是内存脊的一个具体案例
- [Coding Agent 与 Agent 基础设施的操作系统化](../career-impact/agent-infrastructure-os.md) —— "模型正在下沉为 CPU"这个类比，是算力脊的一个具体案例
