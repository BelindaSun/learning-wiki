# CPU vs. GPU: Why GPUs Won Deep Learning

**Core idea**: CPUs and GPUs embody different architectural trade-offs for different workloads. A CPU spends more silicon on sophisticated control, generality, and low latency. A GPU spends more on massively parallel arithmetic and throughput. Modern neural networks happen to contain large amounts of regular, parallel computation—the GPU's design sweet spot.

> ⚠️ **Upgrading Foundation Zero**: [Foundation Zero](foundation-zero.md) used “one chef → a row of chefs → a thousand-person prep line” to establish an intuition for cores, parallelism, and GPUs. That approximation was useful, but a GPU is not simply a crowd of smaller CPUs. It is an architecture designed around a different objective.

---

## Two Different Design Trade-offs

### CPU: Complex Work at Low Latency

A CPU devotes substantial chip area to branch prediction, out-of-order execution, several levels of cache, and sophisticated control logic. Those circuits help **one task** finish quickly even when it contains many branches, depends on previous results, or mixes different kinds of work.

Only part of a typical CPU die consists of ALUs—the arithmetic logic units that perform calculations. Much of the rest helps a complicated instruction stream move faster. This is not waste; it is the price of general-purpose computing. Operating-system scheduling, database queries, and web servers all contain complex control flow and care about the latency of individual tasks.

### GPU: Simple Work at High Throughput

A GPU makes the opposite trade-off. It reduces the area devoted to complex control and uses the saved space for many parallel arithmetic resources.

Its wager is that when the same operation must be repeated across a large body of data, many simpler parallel resources are more useful than a few highly capable cores.

### A Warning About Core Counts

Comparisons such as “a CPU has tens of cores while a GPU has thousands of CUDA cores” reveal a dramatic allocation difference, but a CPU core and a CUDA core are not equivalent units. A CPU core contains far more complex hardware. The numbers tell us where the two architectures spend silicon; they do not support a one-to-one performance comparison.

## How GPUs Run in Parallel: SIMT

NVIDIA GPUs use **SIMT—Single Instruction, Multiple Threads**. Threads are grouped into a **warp**, typically 32 threads. At a given moment, threads in a warp execute the same instruction on different data.

This is ideal when everyone does the same job on separate inputs. If threads in one warp take different `if/else` branches, the GPU must execute the paths separately while some threads wait. This **warp divergence** reduces throughput.

In one sentence: **a GPU is fast when many workers can do the same thing; branching weakens the advantage.**

## Why Matrix and Tensor Operations Fit GPUs

Most neural-network computation is organized as matrix multiplication and related tensor operations. These fit the GPU for three reasons:

1. **Parallelism**: many output elements can be computed independently.
2. **Regularity**: each element repeats the same multiply-and-accumulate pattern, matching SIMT.
3. **Data reuse**: rows and columns can be reused across many operations, producing the high arithmetic intensity introduced by the [Memory Wall](memory-wall.md).

## From General to Parallel to Specialized: Tensor Cores

Hardware evolution did not stop at greater parallelism. It added specialized circuits for the most important workload.

```
General-purpose compute — CPU
        ↓
Parallel compute — GPU
        ↓
Specialized compute — Tensor Core
```

Beginning with the Volta architecture in 2017, NVIDIA added **Tensor Cores** designed for matrix multiply-accumulate operations such as D = A × B + C. A CUDA core performs a scalar multiply-add; a Tensor Core operates on a small matrix tile, completing much more useful work per cycle for this specific task.

| | CUDA core | Tensor Core |
|---|---|---|
| One operation | Scalar multiply-add | Small matrix multiply-add |
| Generality | Broad | Specialized for matrix operations |
| Deep-learning role | General computation | Main engine for matrix work |

The leverage point is broader than one NVIDIA feature: modern AI hardware improves not only by adding parallel resources, but also by specializing hardware for critical workloads.

## Comparison

| | CPU | GPU |
|---|---|---|
| Silicon budget | Complex control for low task latency | Parallel arithmetic for throughput |
| Best at | Branching, dependent, general tasks | Repeating regular operations over much data |
| Weak at | Massive simple parallelism | Branch-heavy code and warp divergence |
| Execution | Independent instruction streams per core | One instruction across a warp of threads |
| Specialization | General purpose | Adds units such as Tensor Cores |

## Where the Metaphor Upgrades

1. A GPU is not a collection of miniature CPUs; its architectural objective differs.
2. Its units do not all pursue unrelated tasks; groups execute the same instruction through SIMT.
3. Tensor Cores are not merely more general cores, but specialized matrix circuits.

## Next

- ← [Compute Spine](compute-spine.md)
- ← [Foundation Zero](foundation-zero.md)
- → [FLOPS and Precision](flops-and-precision.md)
- → [The Memory Wall](memory-wall.md)

---

**Last updated**: August 19, 2026

**Related**: [Hardware Map](hardware-map.md) · [Semiconductor Spine](semiconductor-spine.md)
