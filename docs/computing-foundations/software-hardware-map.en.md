# Software × Hardware Map · The Bridge Between Them

**Core idea**: A model is software and a GPU is hardware—what happens between them? Nothing runs “directly.” Work is expressed, compiled, scheduled, and only then executed by physical hardware. This map names the stations without yet opening their machinery.

---

![Software × Hardware Map: an AI workload flows through Compiler, Kernel/Library, and Runtime into compute, memory, and interconnect](assets/software-hardware-map.svg)

## What the Map Is Saying

This map crosses the boundary between the [Software Map](software-map.md) above and the [Hardware Map](hardware-map.md) below.

**Top, a review:** application code expresses an AI workload—the particular task the model must perform.

**Middle, the new bridge:**

| Role | More precise meaning | Intuition |
|---|---|---|
| Compiler | Translates and optimizes high-level model code into lower-level instructions for particular hardware | An interpreter turning an elegant script into precise stage directions |
| Kernel / Library | A highly optimized small program for one operation and one hardware family, such as matrix multiplication | A difficult stunt rehearsed in advance and invoked on demand |
| Runtime | Coordinates resources, dispatches tasks, and manages memory while a program is running | The on-set director coordinating compute and memory in real time |

CUDA is not merely a kernel library. It is a broader parallel-computing platform and ecosystem containing a programming model, compiler toolchain, Runtime, and optimized libraries and kernels such as cuBLAS and cuDNN.

**Bottom, a review:** the resulting decisions are physically carried out by compute, memory, and interconnect.

## Four Decisions in the Control Room

| Decision | More precise meaning | Intuition |
|---|---|---|
| Scheduling | Chooses which tasks run when and how hardware resources are assigned | A ticketing system that orders normal and urgent work |
| Batching | Combines requests into larger matrix operations to improve utilization and throughput | A bus carrying several people instead of one taxi per person |
| Precision / Quantization | Uses lower-bit formats such as FP16, FP8, or INT4 to reduce compute and memory pressure; quality effects depend on the model, task, method, and hardware | Lowering video resolution for smoother playback, with context-dependent quality loss |
| Memory management | Places and moves data across HBM and RAM while avoiding out-of-memory failures | Keeping immediate props beside the stage and returning others to storage |

This is an honest simplification. These decisions are distributed across compilation and execution rather than made at a single Runtime switch. The [Bridge Spine](bridge-spine.md) later returns them to their proper layers.

## Example: 100 People Send Messages at Once

- **Workload:** your Prompt and roughly 99 others reach a server at nearly the same time.
- **Compiler and Kernels:** the model's matrix operations have already been compiled and mapped to optimized kernels.
- **Runtime:** the system may batch some—not necessarily all—requests, use a lower precision such as FP8, keep model weights in fast accelerator memory, and schedule a turn on the GPU.
- **Hardware:** GPU cores, memory, and interconnect perform the work and return generated text.

## Why This Map Matters

- “CUDA is a moat” now points to a compiler–kernel–Runtime ecosystem, not a floating product name.
- Batching is one coordinated system decision, not an isolated trick.
- Quantization is a concrete use of the Precision dimension.
- vLLM and TensorRT-LLM can improve inference without making the model “smarter.” vLLM focuses largely on serving, scheduling, batching, and memory management; TensorRT-LLM spans a broader optimization stack including graphs, compilation, and kernels.

The map shows **where** these concepts live. The five spines explain **why** they are designed this way.

## Next

- → [The CUDA Moat](cuda-moat.md)
- → [FLOPS and Precision](flops-and-precision.md)
- → [The Memory Wall](memory-wall.md)

---

**Last updated**: August 15, 2026

**Related**: [Computing Foundations](index.md) · [Software Map](software-map.md) · [Hardware Map](hardware-map.md)
