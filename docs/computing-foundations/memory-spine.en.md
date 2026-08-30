# Memory Spine

**Core idea**: The Compute Spine asked how fast a system can calculate. This spine asks the complementary question: **How fast can data move?** Compute performance has grown much faster than data movement, creating the Memory Wall. Many AI systems are constrained not by arithmetic but by failing to deliver data to compute units in time.

> ⚠️ Here, Memory means physical hardware memory. Agent memory across conversations is a separate concept; see [Memory in the glossary](../../glossary.md#memory).

---

## Begin with Compute's Last Question

> Where does data come from?
> ↓
> Why does it arrive late?
> ↓
> Can we place it closer?
> ↓
> Are “fits” and “moves quickly” the same?
> ↓
> Is the bottleneck calculation or movement?
> ↓
> Where does an AI model actually stall?

This distinction changes the optimization direction completely.

## 01 — Where Does Data Come From?

A CPU or GPU can work only on nearby data in memory, not directly rummage through a disk. AI primarily moves:

- **Model weights**, repeatedly read during inference.
- **Intermediate results**, passed from one layer to the next.

Both must reach compute units. Modern accelerators calculate extraordinarily quickly; memory must keep them supplied.

## 02 — Why Does Data Arrive Late?

It often cannot keep up. The widening historical gap between arithmetic performance and memory movement is the **Memory Wall**.

Picture a chef who chops faster every year while ingredients still travel from a distant warehouse. Most time eventually goes to waiting rather than cutting. This is a structural industry challenge, not a defect in one product.

## 03 — Can We Put Data Closer?

Yes, with a trade-off: storage closer to compute tends to be faster, smaller, and more expensive; storage farther away tends to be slower, larger, and cheaper.

```
Registers / Cache   fastest, smallest — ingredients in the chef's pocket
      ↓
RAM / HBM           fast, medium — the prep table beside the stove
      ↓
Persistent storage  slowest, largest — the warehouse outside
```

The resulting **memory hierarchy** is not a ranking from bad to good. Every level makes a different capacity–speed trade-off.

HBM and ordinary DDR RAM belong to the same main-memory level. HBM stacks memory dies and uses wide, short connections to supply much higher bandwidth. AI systems discuss it repeatedly because it moves data faster, not simply because it holds more.

## 04 — Are Capacity and Bandwidth the Same?

No.

- **Capacity**: how much fits—the size of the prep table.
- **Bandwidth**: how much moves per second—the number of dishes the serving window can pass.

If a model cannot fit in accelerator memory, capacity is insufficient. If it fits but compute units wait, bandwidth is insufficient. The first may require a larger accelerator or partitioning across devices. The second requires more bandwidth or less data movement, perhaps through lower precision.

## 05 — Is the Workload Compute-Bound or Memory-Bound?

Ask: **How many operations can reuse each piece of data moved from memory?**

- Much reuse → high arithmetic intensity → usually **compute-bound**.
- Little reuse → low arithmetic intensity → usually **memory-bound**.

| Bottleneck | More compute? | More bandwidth? |
|---|---|---|
| Compute-bound | Helpful | Limited help |
| Memory-bound | Limited help | Helpful |

Optimizing the wrong side can spend money for no improvement.

## 06 — Where Does LLM Inference Stall?

Both, at different stages:

- **Prefill** processes the full input using large matrix–matrix operations. Data is reused heavily, so it is often compute-bound.
- **Decode** generates one token at a time using matrix–vector operations. The system rereads model weights for relatively little arithmetic, so it is often memory-bound.

The exact result depends on architecture, batch size, hardware, and implementation. Even one conversation can shift between arithmetic and movement. [Inference Infrastructure and Agent Latency](../ai-core/inference-infrastructure-and-agent-latency.md) provides the full case.

If a model cannot fit on one machine, movement extends from chip ↔ memory to server ↔ server, making communication far more expensive. Continue to the **[Scale Spine](scale-spine.md)**.

## Deep Dive

- [The Memory Wall](memory-wall.md)

## You Should Now Be Able to Answer

1. Where does a compute unit obtain data?
2. What is the Memory Wall?
3. Why does memory form a hierarchy?
4. How are HBM and RAM related?
5. How do capacity and bandwidth differ?
6. What are compute-bound and memory-bound workloads?
7. What does arithmetic intensity reveal?
8. Why do Prefill and Decode often have different bottlenecks?
9. Why does Memory lead naturally to Scale?

---

**Last updated**: August 19, 2026

**Related**: [Compute Spine](compute-spine.md) · [Hardware Map](hardware-map.md) · [FLOPS and Precision](flops-and-precision.md)
