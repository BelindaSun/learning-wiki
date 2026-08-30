# Hardware Map

**Core idea**: What physical pieces make a computing system? The answer is not another path to memorize, but a recurring pattern: **compute, memory, and interconnect** appear inside a chip, inside a server, and across a cluster. Learn the pattern once and reuse it at every scale.

---

![Hardware Map: compute, memory, and interconnect form columns; chip, server, and cluster form rows; the same pattern repeats at every scale](assets/hardware-map.svg)

## What the Map Is Saying

[From Silicon to AI](from-silicon-to-ai.md) traced silicon → chip → processor → server → cluster → data center and summarized the system as processor + memory + interconnect. This map turns that sentence into a portable reasoning tool:

> **At every scale, ask again about compute, memory, and interconnect.**

Inside a chip: cores supply compute, caches hold nearby data, and on-chip buses connect them.

Inside a server: CPUs and GPUs supply compute, RAM and HBM hold data, and PCIe or NVLink connects components.

Across a cluster: many servers compute together, model state and data are distributed, and networks such as InfiniBand move information among them.

The same three questions produce different concrete answers at each scale. At cluster scale, “memory” asks where data and model state are distributed and how they are accessed; it does not imply one physically unified block like RAM or HBM.

## Three Anchors

- **Compute — calculate.** Processors perform logic and mathematics. Think of the **chef** doing the cutting and cooking.
- **Memory — hold.** Data waits here, described by capacity and bandwidth. Think of the **prep table**: its area controls how much fits; access speed controls whether cooking can continue.
- **Interconnect — move.** Physical channels and protocols carry data between compute units and storage. Think of **conveyor belts and roads** connecting ingredients and chefs.

## There Is More Than One Kind of Processor

CPUs, GPUs, and accelerators such as TPUs are different design trade-offs for the same problem—providing compute—not generations on a single better-to-worse ladder. [CPU vs. GPU](cpu-vs-gpu.md) explains why one particular trade-off suited deep learning.

## Where Do the Intimidating Acronyms Belong?

| Term | More precise meaning | Intuition |
|---|---|---|
| Cache / Register | Tiny, very fast storage beside CPU or GPU cores | A chef's pocket: immediate access, very little room |
| HBM | Stacked DRAM dies placed beside an accelerator through advanced packaging for high-bandwidth access | An express conveyor beside a very hungry stove |
| PCIe | A general high-speed bus connecting CPUs, accelerators, and network cards | A city's main road: widely useful, with a speed limit |
| NVLink | NVIDIA's proprietary high-bandwidth GPU-to-GPU interconnect | A dedicated high-speed railway for GPUs |
| InfiniBand | A high-bandwidth, very-low-latency network for HPC and data centers | An intercity expressway designed for thousands of servers |

## Example: Data Travels from a Cluster to a Core

This is an intuition-building path, not an invariant physical sequence; during inference, model weights may already reside in HBM.

```
Cluster
   → InfiniBand carries data to a server
Server
   → PCIe / NVLink moves it near a GPU in HBM
Chip
   → on-chip interconnect brings it into Cache
   → a Core performs the operation
```

At every smaller scale, the concrete components change, but the three questions remain.

## Next

- → [Software × Hardware Map](software-hardware-map.md)
- → [CPU vs. GPU](cpu-vs-gpu.md)
- → [Yield and Foundries](yield-and-foundry.md)
- → [The Memory Wall](memory-wall.md)
- → [From One Accelerator to a Thousand](scaling-and-communication.md)

---

**Last updated**: August 15, 2026

**Related**: [Computing Foundations](index.md) · [Software Map](software-map.md) · [CPU vs. GPU](cpu-vs-gpu.md)
