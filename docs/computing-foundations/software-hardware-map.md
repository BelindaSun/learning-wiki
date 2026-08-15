# Software × Hardware Map · 软硬之间的桥

**核心概念**: 模型是"软件"，GPU 是"硬件"——中间到底发生了什么？答案是：**没有什么是直接运行的**。工作先被表达出来，再被编译，再被调度，最后才落到物理硬件上。这张图只标出这条路上的几个站，不深挖任何一站的机制。

---

![Software x Hardware Map：三条横带，软件世界（AI workload/模型）在最上，中间的桥依次是 Compiler、Kernel/Library、Runtime，Runtime 同时决定 Scheduling/Batching/Precision/Memory management 四件事，最后汇入最下方的硬件世界（算力+内存+互连）](assets/software-hardware-map.svg)

## 这张图在说什么

这张图是三张地图里唯一一张"横跨"的——上半段用 [Software Map](software-map.md) 已经建立的词汇开场，下半段落在 [Hardware Map](hardware-map.md) 已经建立的词汇上，中间那一段，才是这张图真正要新加的内容。

**上半段（回顾）**：一个 AI workload（模型要做的这次任务）由应用代码表达出来。

**中间（新内容）**——桥上有三个角色，各给一个"本质 + 直觉"：

| 桥上的角色 | 本质（严谨一点） | 一句话直觉 |
|---|---|---|
| Compiler · 编译器 | 把高层模型代码翻译、优化成某种硬件能执行的底层指令 | 同声传译员：把优雅但宏观的剧本，翻成场务和道具听得懂的口令 |
| Kernel / Library · 内核 / 库 | 针对某种硬件、某个具体运算（如矩阵乘法）写到极致快的小程序块 | 特技预设包：常用高难动作提前练到极致，用时直接调（比如 CUDA 生态里的 cuBLAS、cuDNN） |
| Runtime · 运行时 | 程序运行期间动态调度资源、分配任务、管理内存的掌控者 | 片场执行导演：拿着剧本和口令，现场指挥算力、内存什么时候上、怎么配合 |

（补一句 CUDA 的准确定位：它**不只是一个 kernel 库**，而是一个更大的**并行计算平台与生态**——编程模型、编译工具链、runtime，以及 cuBLAS / cuDNN 这类高度优化的库和 kernel 都在里面。表格里 Runtime 也是 [Software Map](software-map.md) 里出现过的老词，这里被继续展开。）其中 Runtime 要同时并行拿主意的有四件事，下一节单独展开。

**下半段（回顾）**：这些决定，最终交给 [Hardware Map](hardware-map.md) 已经认识的算力、内存、互连去物理执行。

## 现场指挥的四件事：调度 / 批处理 / 精度 / 内存

Runtime 在运行时几乎每一刻都要同时平衡四件事。你在 AI 圈听到的很多"优化技巧"，本质都落在这四件里——先各配个比喻，混个脸熟：

| 四个决策 | 本质（严谨一点） | 一句话直觉 |
|---|---|---|
| Scheduling · 调度 | 决定哪些计算任务先跑、哪些后跑，以及怎么分配硬件资源 | 叫号系统：谁先办、谁后办，紧急的（高优先级请求）怎么加塞 |
| Batching · 批处理 | 把多个请求拼成一次大矩阵计算，提高 GPU 利用率和吞吐 | 拼车大巴：凑满一车人再发车，比一人一辆出租车划算得多 |
| Precision · 精度 / 量化 | 用更低位数的数据格式（如 FP16→FP8/INT4），显著减少计算和内存压力；实际质量影响取决于模型、任务、硬件支持和量化方法 | 有点像把视频从 4K 调到 1080P 换取流畅——但具体掉多少画质，要看情况 |
| Memory management · 内存管理 | 在显存（HBM）和主存（RAM）之间动态搬运、留位，避免显存溢出（OOM） | 后台调度台：哪些道具随时摆在舞台边（显存），哪些先搬回仓库（主存） |

（一个诚实的简化：严格说这四件事分散在从编译到运行的好几层，并不都由 Runtime 一个点拍板——这张 Orient 图先把它们都挂在 Runtime 名下方便理解，[软硬桥脊 Bridge Spine](bridge-spine.md) 展开时会把它们拆回各自的层。）

## 穿线场景：假设 100 个人几乎同时发来消息

下面是一条**简化示意路径**——不同系统的真实做法各不相同，这里用"可能 / 例如 / 假设"来说，只为把概念摆到位：

- **表达层（Workload）**：你的 Prompt 和另外约 99 人的请求几乎同时到达服务器。
- **翻译 + 预设层（Compiler & Kernel）**：模型的矩阵计算早已被编译，并用写好的 Kernel（例如 CUDA 生态里的那些）算得飞快。
- **指挥层（Runtime）**，这个系统可能会：
  - **Batching**：把其中若干请求凑成一批一起算（拼车大巴）——不一定 100 个全并成一批；
  - **Precision**：假设它采用较低精度（比如 FP8）来换速度；
  - **Memory management**：让模型权重尽量留在显存里更快的位置（道具摆在舞台边）；
  - **Scheduling**：安排这一批什么时候上 GPU。
- **物理层（Hardware）**：GPU 核心、显存、互连一起把这批计算真正跑出来，生成文字发回给你。

## 为什么这张图重要

- 下次听到"CUDA 是护城河"，知道 CUDA 落在这条链路的哪一站（kernel/编译器生态），而不是一个模糊的专有名词。
- 下次听到"batching"，知道它是 Runtime 要同时权衡的四件事之一，而不是一个孤立的优化技巧。
- 下次听到"量化 / 降精度"，知道它是 Precision 这个决策维度的具体做法。
- 下次听到"vLLM / TensorRT-LLM 把推理做快了"，知道性能提升可以来自多个层，不只靠"更聪明的模型"：vLLM 更接近推理 serving / runtime，重点优化 scheduling、batching、memory management；TensorRT-LLM 跨越更广的推理优化栈，还包括 graph / 编译优化、kernel 等层面。

这张图不解释这些词**为什么**这样设计——那是后面五主脊，尤其是软硬桥脊，要做的事。

## 下一步

- 好奇"CUDA 为什么是一条真正的护城河" → [CUDA 护城河：为什么软硬之间的决策分散在每一层](cuda-moat.md)
- 好奇"精度怎么具体换速度" → [FLOPS 与精度：为什么降精度能提速](flops-and-precision.md)
- 好奇"内存怎么分层管理" → [内存墙：为什么很多时候不是算不动，而是数据送不到](memory-wall.md)

---

**最后更新**: August 15, 2026

**相关**:
- [Computing Foundations · 计算机基础地图](index.md) —— 这张图属于 Orient 层，是三张地图里的"桥"
- [Software Map](software-map.md) —— Runtime 这个词最早在这里出现
- [Hardware Map](hardware-map.md) —— 算力/内存/互连这三个词最早在这里出现
- [FLOPS 与精度：为什么降精度能提速](flops-and-precision.md) —— Precision 这个词在这里被展开
- [内存墙：为什么很多时候不是算不动，而是数据送不到](memory-wall.md) —— Memory management 这个词在这里被展开
- [CUDA 护城河：为什么软硬之间的决策分散在每一层](cuda-moat.md) —— Compiler/Kernel/CUDA 在这里被继续展开
