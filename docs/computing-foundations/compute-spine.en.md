# Compute Spine

**Core idea**: At the hardware layer, everything that looks like AI intelligence becomes computation. This spine follows one causal chain: what is computed, why there is so much of it, which hardware performs it, how efficiency improves, how capability is measured, and why more compute does not always make a model faster.

---

## One Path Through the Spine

> What is computation?
> ↓
> Why does AI require so much?
> ↓
> What performs it?
> ↓
> How can it become more efficient?
> ↓
> How do we measure it?
> ↓
> Does a larger number guarantee faster AI?

This path explains why GPUs, low precision, and TFLOPS appear together—and why none alone proves model speed.

## 01 — What Is Compute?

**Compute** is hardware applying operations to data according to rules, turning inputs into results. Engineers also use the word for the capacity to perform those operations.

Text, images, and code become numbers inside a model. Hardware repeatedly transforms those numbers until an output appears. Semantic understanding, generated prose, and code may look intelligent at the product layer; at the hardware layer they are computation.

Web pages, database queries, and game frames also require compute. AI differs mainly in scale and structure.

## 02 — Why Does AI Need So Much?

A neural network contains many **parameters**, numbers that participate in its operations. A dense 70B model has about seventy billion. Processing an input applies layer after layer of mathematics involving those parameters.

Training multiplies the work. Each batch requires a forward pass, a backward pass that calculates updates, and repetition across enormous datasets for hundreds of thousands or millions of steps. That is why large training runs use thousands of accelerators for weeks or months.

Inference still computes. Every generated token requires another pass through the model. A response of hundreds of tokens means hundreds of large operations.

The leverage is that much of this mathematics consists of regular matrix operations whose pieces can proceed in parallel:

> **Many similar calculations can run simultaneously without waiting for one another.**

So who is designed for that job?

## 03 — What Performs the Computation?

A **CPU** emphasizes generality, sophisticated control, and low latency. It is built for operating systems, databases, servers, and tasks with branches and dependencies.

A **GPU** spends less silicon on complex control and more on parallel arithmetic. It is not thousands of miniature CPUs; the architecture makes a different end-to-end trade-off in favor of throughput. CPU and GPU core counts therefore cannot be compared one for one.

Modern GPUs go beyond parallelism by adding specialized matrix units such as Tensor Cores. [CPU vs. GPU](cpu-vs-gpu.md) develops the architecture and SIMT execution model.

GPUs are not the only answer. Google TPUs, NPUs, Cerebras wafer-scale processors, and on-device neural engines are different designs for supplying AI compute.

## 04 — How Can Computation Become More Efficient?

Ask whether every number must retain the same detail. The number of bits used to represent a value is its **precision**. Fewer bits can help twice:

1. **Move less**: smaller values consume less memory and bandwidth.
2. **Compute faster**: supported low-precision execution units can perform more operations per second.

The cost is possible loss of numerical stability or model quality, so lower is not automatically better. Precision is a trade-off among speed, memory, stability, and quality.

| Format | Bits | Typical role |
|---|---:|---|
| FP32 | 32 | Higher-precision baseline and selected operations |
| BF16 / FP16 | 16 | Common training and inference formats |
| FP8 | 8 | Newer low-precision training and inference |
| INT8 / INT4 | 8 / 4 | Quantized inference |

Equal bit counts need not behave equally: BF16 and FP16 allocate bits differently between range and detail. See [FLOPS and Precision](flops-and-precision.md).

## 05 — How Do We Measure Compute Capability?

**FLOPS**, floating-point operations per second, measures peak arithmetic throughput. One TFLOPS is one trillion floating-point operations per second.

The same hardware can report dramatically different peaks at different precisions. Before comparing two FLOPS figures, ask: **at what precision, on which execution units, and for what operation?** A launch slide's best low-precision peak is closer to advertised fuel economy than guaranteed road performance.

## 06 — Does More TFLOPS Guarantee a Faster Model?

No. Separate:

- **Workload**: the total computation implied by the model, input, and method.
- **Actual throughput**: the useful computation the real hardware–software system completes each second.

FLOPS describes a theoretical peak. Actual throughput falls when compute waits:

| Waiting for | Continue with |
|---|---|
| Data from memory | [Memory Spine](memory-spine.md) |
| Results and synchronization from other devices | [Scale Spine](scale-spine.md) |
| Better compilation, kernels, or scheduling | [Bridge Spine](bridge-spine.md) |

A kitchen with one hundred chefs remains slow if ingredients never arrive.

The next question is therefore no longer “Can it calculate faster?” but “Where is the data, and can it arrive in time?” Continue to the **[Memory Spine](memory-spine.md)**.

## In the Real World

| Name | Position on the map |
|---|---|
| NVIDIA H100 / Blackwell | GPU, Tensor Cores, and the CUDA ecosystem |
| AMD Instinct | GPU with the ROCm ecosystem |
| Google TPU | A specialized accelerator rather than a GPU |
| Cerebras WSE | A wafer-scale architectural approach |
| Apple Neural Engine | AI compute inside personal devices |

The names are examples, not vocabulary to memorize.

## Deep Dives

- [CPU vs. GPU](cpu-vs-gpu.md)
- [FLOPS and Precision](flops-and-precision.md)

## You Should Now Be Able to Answer

1. What does compute mean?
2. Why does AI require so much computation?
3. Why do GPUs fit many AI workloads better than CPUs?
4. Why is a GPU not merely many CPUs?
5. What is precision, and why can reducing it help?
6. What does FLOPS measure?
7. Why must FLOPS comparisons specify precision?
8. Why does a higher peak not guarantee faster models?
9. Why does Compute lead naturally to Memory?

---

**Last updated**: August 19, 2026

**Related**: [Computing Foundations](index.md) · [Foundation Zero](foundation-zero.md) · [Hardware Map](hardware-map.md)
