# FLOPS 与精度：为什么降精度能提速

**核心概念**: 同一块 GPU，把数字的精度调低，为什么速度还能再快一截？不是因为芯片变聪明了——是因为低精度同时从两个方向帮上忙：数据搬运更省，计算吞吐量更高（如果硬件有对应的低精度执行路径）。但"能快多少"取决于硬件支持和系统瓶颈，不是凭空的固定比例。

---

## 先分清三件不同的事

讨论"计算有多快"之前，需要把三个经常被混在一起的概念拆开。[算力脊总页](compute-spine.md) 已经建立了 Workload vs Throughput 的区分，这里加上第三个：

### Workload（工作量）

一项任务总共需要完成多少计算——跟硬件无关，是任务本身的属性。训练一个 70B 参数的模型和用它做一次推理，workload 差好几个数量级。

### Peak compute throughput（峰值计算吞吐量）

硬件在特定条件下（特定精度、特定执行单元、特定运算类型），理论上每秒最多能完成多少计算。**FLOPS**（Floating-point Operations Per Second，每秒浮点运算次数）就是用来衡量这个的。

以广泛部署的 NVIDIA H100 为例，同一块芯片在不同精度下的峰值 throughput 差距很大：

| 精度 | 峰值 throughput（dense） |
|------|------------------------|
| FP32（CUDA 核心） | ~67 TFLOPS |
| BF16 / FP16（Tensor Core） | ~990 TFLOPS |
| FP8（Tensor Core） | ~1,979 TFLOPS |
| INT8（Tensor Core） | ~1,979 TOPS |

（TFLOPS = 万亿次浮点运算/秒；TOPS = 万亿次整数运算/秒。这里列的是 dense throughput；含稀疏加速的数字约为上述的 2 倍——不同官方资料引用时需要注意这一区分。具体数字会随硬件迭代变化，记住倍数关系比记具体数字更重要。）

### Actual performance（实际性能）

真实模型运行时实际达到的速度——几乎总是低于 peak throughput。为什么低、低多少，[算力脊总页](compute-spine.md) 已经给出了框架：计算单元可能在等数据（→ [内存脊](memory-spine.md)）、等通信（→ [规模脊](scale-spine.md)）、或者软件没把硬件充分用起来（→ [软硬桥脊](bridge-spine.md)）。

**Peak FLOPS ≠ Real-world speed.** 一块标着几千 TFLOPS 的 GPU，不代表真实模型一定能达到那个速度。

## 精度是什么

一个数字要占多少存储空间，取决于用几个 bit 去表示它——这就是**精度（Precision）**。

用更少的 bit 表示一个数字，意味着这个数字占用的数据更小。如果硬件对这种低精度格式有专门支持，降低精度通常可以从两个方向同时提升效率。

### 方向一：数据搬运更省

数字变小了，占的存储空间也变小：

| 格式 | 一个 70B 参数模型的大致存储 |
|------|---------------------------|
| FP32 | ~280 GB |
| BF16 / FP16 | ~140 GB |
| INT8 | ~70 GB |
| INT4 | ~35 GB |

存储空间缩小意味着：同样的内存带宽，单位时间能搬运更多数据。对于 memory-bound 的任务（比如 LLM 推理中的逐 token 生成，见 [推理基础设施与 Agent 延迟](../ai-core/inference-infrastructure-and-agent-latency.md)），内存搬运往往是瓶颈——降精度在这里的收益来自"搬得更快"而不是"算得更快"。

这一半的完整故事在 → [内存脊](memory-spine.md)。

### 方向二：计算吞吐量更高

如果硬件提供了对应的低精度执行路径——尤其是 [Tensor Core](cpu-vs-gpu.md#从通用到并行到专用tensor-core) 等专用执行单元——单位时间可以完成更多运算。

上面 H100 的峰值表里，FP32（CUDA 核心）→ BF16（Tensor Core）差了约 15 倍。如果低精度只带来"数字变小"这一个好处，32÷16=2 倍才对——剩下的倍数来自 Tensor Core 本身为低精度矩阵运算做的专用加速。

**低精度并不会凭空让任何硬件都按固定比例变快。** 实际加速取决于：硬件是否为这种精度提供了专用执行路径、workload 是否能利用这条路径、以及系统整体的瓶颈到底在算还是在搬。

## 常见的精度格式

不需要背表。只需要知道：这些都是用不同数量和方式的 bit 表示数字的格式。

| 格式 | 位数 | 大致用途 |
|------|------|----------|
| FP32 | 32 bit | 训练的"高精度"基线；通用计算默认精度 |
| BF16 | 16 bit | 训练里越来越常用的折中 |
| FP16 | 16 bit | 推理里常见的折中 |
| FP8 | 8 bit | 新一代硬件开始支持的训练/推理精度 |
| INT8 | 8 bit | 推理加速，整数运算 |
| INT4 | 4 bit | 更激进的推理压缩 |

### BF16 vs FP16：bit 数相同 ≠ 数值性质相同

BF16 和 FP16 都是 16 bit，但这 16 bit 的分配方式不同：

- **FP16**：5 bit 指数 + 10 bit 尾数——精细度高，但能表示的数值**范围**比 FP32 小得多
- **BF16**：8 bit 指数 + 7 bit 尾数——精细度降了，但指数位跟 FP32 一样多，**范围**跟 FP32 一样大

训练深度学习模型时，梯度的数值范围波动很大。FP16 的范围太窄，极端值容易溢出或下溢，导致训练不稳定。BF16 牺牲了精细度，换来了跟 FP32 一样的范围——训练时更不容易"炸"。这就是为什么 BF16 是 Google 专门为深度学习训练设计的格式。

这个例子说明的更一般的道理是：**精度格式不只是"位数多少"——同样的位数，分配方式不同，适用场景就不同。**

## 混合精度：不是"高"或"低"的二选一

实际系统很少全程只用一种精度。更常见的做法是**混合精度（Mixed Precision）**——不同的计算步骤根据对精度的敏感程度使用不同格式：矩阵乘法用低精度做，累加和梯度更新用高精度做。设计得好的混合精度方案，模型质量跟全 FP32 几乎没有区别。

量化对模型质量的具体影响不在这篇展开 → [Models 深挖](../ai-research/models-deep-dive.md#技术-3量化quantization)。

## 这篇不讲什么

- 不讲 IEEE 754 浮点数具体怎么编码——那是数字表示法的细节，不是理解"为什么能提速"所必需的
- 不讲精度切换在软件层面具体怎么实现——那是 [软硬桥脊](bridge-spine.md) 的事
- 不讲量化对模型质量的具体影响——那是 [Models 深挖](../ai-research/models-deep-dive.md#技术-3量化quantization) 已经写过的内容
- 不讲 utilization、MFU、roofline model 等性能分析方法——Peak ≠ Actual 的框架已建立，具体展开留给对应的脊

## 下一步

- ← [CPU vs GPU：为什么 GPU 赢了深度学习](cpu-vs-gpu.md) —— 这篇的上一站
- ← [算力脊](compute-spine.md) —— 回看整条脊的四层逻辑
- → [内存墙](memory-wall.md) —— "搬得更快"这个方向的完整展开
- → [Quantization 对模型质量的影响](../ai-research/models-deep-dive.md#技术-3量化quantization) —— 精度换速度的"代价"

---

**最后更新**: August 19, 2026

**相关**:
- [算力脊 · Compute Spine](compute-spine.md)
- [CPU vs GPU：为什么 GPU 赢了深度学习](cpu-vs-gpu.md) —— Tensor Core 在那篇首次介绍
- [Software × Hardware Map](software-hardware-map.md) —— Precision 这个词最早在这里被认识
- [内存墙：为什么很多时候不是算不动，而是数据送不到](memory-wall.md) —— "搬得更快"的完整展开
- [Models 深挖](../ai-research/models-deep-dive.md#技术-3量化quantization) —— 精度换速度的代价（质量）
- [Training 训练系统完全指南](../ai-core/training-system-guide.md) —— "为什么训练这么贵"，FLOPS 是三个原因之一
- [推理基础设施与 Agent 延迟](../ai-core/inference-infrastructure-and-agent-latency.md) —— memory-bound 推理的真实案例
