# Computing Foundations · 计算机基础地图

**核心概念**: 这一层是整个 Wiki 的地基——读懂 AI 时代所需的最小计算基础，不是 CS 学位。三步走：先建立方向感（Start），再知道每样东西大概长在哪（Orient），最后想深挖哪条就点进去搞懂为什么（Go Deeper）。

---

## 🚀 Start · 两门必修课，按顺序走完

### 01 — Foundation Zero

**Know the Pieces · 先认识零件**

CPU、Memory、Process、API、GPU……先知道最基本的东西分别是什么。

→ [Foundation Zero · 地基第 0 层](foundation-zero.md)

### 02 — From Silicon to AI

**See the System · 看见整个系统**

从 Silicon 一路走到 AI Product，看这些零件怎样叠成今天的 AI 世界。

→ [From Silicon to AI · 从硅到 AI](from-silicon-to-ai.md)

---

## 🧭 Orient · 知道每样东西大概长在哪

Foundation Zero 让你认识零件，From Silicon to AI 让你看到全景。现在再分别进入软件、硬件和两者之间的桥——三张地图只回答"这东西是什么、大概长在哪、跟邻居什么关系"，不讲"为什么"（"为什么"是下面 Go Deeper 的事）：

- **[Software Map](software-map.md)** —— 用 ChatGPT / Claude / Coding Agent 时，看到的东西底下有哪些软件层
- **[Hardware Map](hardware-map.md)** —— 算力 / 内存 / 互连这三个维度，在芯片、服务器、集群每个尺度上怎么重复出现
- **[Software × Hardware Map](software-hardware-map.md)** —— "模型"这个软件，怎么变成 GPU 上的物理计算

## 🔬 Go Deeper · 五条主脊，搞懂为什么

想深挖哪条，点进去就是完整的"为什么"：

- **[算力脊 · Compute Spine](compute-spine.md)** —— 为什么 GPU 赢了深度学习、为什么降精度能提速
  - [CPU vs GPU：为什么 GPU 赢了深度学习](cpu-vs-gpu.md)  - [FLOPS 与精度：为什么降精度能提速](flops-and-precision.md)- **[内存脊 · Memory Spine](memory-spine.md)** —— 为什么更快的算术 ≠ 更快推理
  - [内存墙：为什么很多时候不是算不动，而是数据送不到](memory-wall.md)- **[规模脊 · Scale Spine](scale-spine.md)** —— 为什么从 1 卡扩到千卡很难
  - [从 1 卡到千卡：为什么算力扩展这么难](scaling-and-communication.md)- **[软硬桥脊 · Bridge Spine](bridge-spine.md)** —— CUDA 为什么是护城河
  - [CUDA 护城河：为什么软硬之间的决策分散在每一层](cuda-moat.md)- **[半导体脊 · Semiconductor Spine](semiconductor-spine.md)** —— 为什么芯片产能约束 AI
  - [良率与代工：为什么芯片产能约束 AI](yield-and-foundry.md)
---

**最后更新**: August 15, 2026

**相关**:
- [From Silicon to AI](from-silicon-to-ai.md) —— Start 必修 02，完整总地图 SVG 第一次出现在这篇正文里
- [AI Core](../ai-core/index.md) —— Computing Foundations 坐在 AI Core 之下，是它的地基层
- [推理基础设施与 Agent 延迟](../ai-core/inference-infrastructure-and-agent-latency.md) —— Prefill/Decode 的硬件约束，是内存脊的一个具体案例
- [Coding Agent 与 Agent 基础设施的操作系统化](../career-impact/agent-infrastructure-os.md) —— "模型正在下沉为 CPU"这个类比，是算力脊的一个具体案例
