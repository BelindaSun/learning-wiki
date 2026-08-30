# FLOPS and Precision: Why Lower Precision Can Be Faster

**Core idea**: Why can the same GPU become faster when numbers use lower precision? The chip has not become smarter. Smaller representations reduce data movement and, when the hardware provides an appropriate execution path, increase arithmetic throughput. The speedup depends on hardware support and the system bottleneck; it is not a universal ratio.

---

## First Separate Three Ideas

### Workload

The total computation required by a task. It belongs to the task, not the hardware. Training a 70-billion-parameter model and running one inference differ by orders of magnitude.

### Peak Compute Throughput

The theoretical maximum computation per second under specified conditions: precision, execution unit, and operation type. **FLOPS** means floating-point operations per second.

For the widely deployed NVIDIA H100, peak dense throughput varies sharply by precision:

| Precision | Peak throughput, dense |
|---|---|
| FP32, CUDA cores | ~67 TFLOPS |
| BF16 / FP16, Tensor Cores | ~990 TFLOPS |
| FP8, Tensor Cores | ~1,979 TFLOPS |
| INT8, Tensor Cores | ~1,979 TOPS |

TFLOPS and TOPS mean trillions of floating-point and integer operations per second. Sparse figures are roughly twice these dense figures, so sources must not mix the two. Hardware changes; the relationships matter more than memorizing the numbers.

### Actual Performance

The speed a real model reaches, almost always below the peak. Compute units may wait for data, communication, or software that fails to use the hardware effectively.

**Peak FLOPS ≠ real-world speed.** A label promising thousands of TFLOPS does not prove a model will achieve them.

## What Is Precision?

**Precision** describes how many bits represent a number. Fewer bits make each value smaller. With hardware support, that can improve efficiency in two directions.

### 1. Move Less Data

| Format | Approximate storage for a 70B-parameter model |
|---|---|
| FP32 | ~280 GB |
| BF16 / FP16 | ~140 GB |
| INT8 | ~70 GB |
| INT4 | ~35 GB |

Smaller values let the same memory bandwidth move more parameters per second. For memory-bound tasks such as token-by-token LLM Decode, the gain comes primarily from faster movement rather than faster arithmetic. The [Memory Spine](memory-spine.md) develops this half of the story.

### 2. Perform More Arithmetic

When hardware includes low-precision paths—especially specialized units such as [Tensor Cores](cpu-vs-gpu.md#从通用到并行到专用tensor-core)—it can complete more operations per second.

The H100's FP32 CUDA-core throughput and BF16 Tensor-Core throughput differ by roughly fifteen times. Halving a 32-bit value to 16 bits explains only a factor of two; the rest comes from specialized Tensor-Core execution.

Lower precision does not accelerate every machine by a fixed amount. The result depends on hardware support, whether the workload uses that path, and whether the system is constrained by arithmetic or data movement.

## Common Formats

| Format | Bits | Typical role |
|---|---:|---|
| FP32 | 32 | High-precision training baseline and general computation |
| BF16 | 16 | Common training compromise |
| FP16 | 16 | Common inference compromise |
| FP8 | 8 | Newer training and inference hardware |
| INT8 | 8 | Integer inference acceleration |
| INT4 | 4 | More aggressive inference compression |

### BF16 vs. FP16: Equal Bits, Different Behavior

Both use 16 bits, but allocate them differently:

- **FP16**: 5 exponent bits and 10 fraction bits—more local detail, much smaller numerical range than FP32.
- **BF16**: 8 exponent bits and 7 fraction bits—less detail, but the same broad range as FP32.

Training gradients can vary widely. FP16's narrow range makes extreme values more likely to overflow or underflow; BF16 trades fine detail for range and therefore tends to train more stably. Google designed BF16 for this use. Bit count alone does not determine numerical behavior.

## Mixed Precision Is Not a Binary Choice

Real systems rarely use one format everywhere. **Mixed precision** assigns formats according to sensitivity: matrix multiplication may use a low precision while accumulation and gradient updates retain higher precision. Well-designed mixed-precision training can preserve nearly the same model quality as full FP32.

For quantization's quality trade-offs, see [Models Deep Dive](../ai-research/models-deep-dive.md#技术-3量化quantization).

## What This Guide Does Not Cover

- IEEE 754 encoding details
- Software implementation of precision changes → [Bridge Spine](bridge-spine.md)
- Model-quality effects of quantization → [Models Deep Dive](../ai-research/models-deep-dive.md#技术-3量化quantization)
- Utilization, MFU, and roofline analysis

## Next

- ← [CPU vs. GPU](cpu-vs-gpu.md)
- ← [Compute Spine](compute-spine.md)
- → [The Memory Wall](memory-wall.md)
- → [Quantization and Model Quality](../ai-research/models-deep-dive.md#技术-3量化quantization)

---

**Last updated**: August 19, 2026

**Related**: [Software × Hardware Map](software-hardware-map.md) · [Training](../ai-core/training-system-guide.md)
