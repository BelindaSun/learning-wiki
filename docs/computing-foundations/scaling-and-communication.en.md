# From One Accelerator to a Thousand: Why Scaling Compute Is Hard

**Core idea**: A thousand accelerators do not provide a thousand times the performance. Every added machine spends some effort communicating—synchronizing progress and exchanging data. That cost does not disappear as the system grows and often becomes heavier. Communication, like compute and memory, is a resource that must be budgeted.

---

## From One Worker to a Team

One person's output depends largely on that person's speed. A group working on one task must also align progress and exchange intermediate results. This coordination cost appears only when the team grows.

One writer's report output tracks typing speed. Ten co-authors who wait for one another, reconcile drafts, and merge versions will not produce exactly ten times as much. Some time is spent collaborating rather than writing.

## Where Communication Cost Comes From

The [Hardware Map](hardware-map.md) introduced **interconnect** at every scale: on-chip buses, PCIe or NVLink inside a server, and networks or InfiniBand across servers. Scaling becomes hard because more accelerators must exchange more data, while interconnect capacity does not automatically grow in proportion.

This is the [Memory Wall](memory-wall.md) enlarged. There, data cannot reach a compute unit quickly enough inside a system. Here, results cannot move quickly enough from one machine to another. “Able to calculate” still does not mean “able to stay fed.”

## Amdahl's Law Is a Separate Limit

Communication overhead is the time collaboration consumes. **Amdahl's Law** describes another, independent constraint: part of a task may be inherently serial and cannot be divided among workers. That serial fraction caps the theoretical speedup even with free, instantaneous communication.

The two effects accumulate rather than duplicate each other:

- Amdahl's Law sets a theoretical ceiling through work that cannot be parallelized.
- Communication and synchronization subtract additional performance in the real system, often more as the machine count grows.

No formula is required for the useful intuition: the smaller the serial fraction, the higher the theoretical ceiling; the lower the coordination cost, the closer the real system approaches it.

## What This Means for AI

Training a large model may require hundreds or thousands of accelerators. After computing a training step, those devices usually need to synchronize intermediate results such as gradients. More devices mean more information to reconcile. That is why “buy more GPUs” is not a linear scaling strategy. The interconnect may become the limit before arithmetic does.

This guide explains the physical reason rather than a particular distributed-training method. For where communication sits in total training cost, see [Training](../ai-core/training-system-guide.md#为什么训练这么贵).

## What This Guide Does Not Cover

- Data, model, tensor, or pipeline parallelism
- Distributed-system consistency, fault tolerance, and scheduling
- Network-protocol and switch design
- Physical implementation of on-chip interconnects

## Next

- ← [Hardware Map](hardware-map.md)
- ← [The Memory Wall](memory-wall.md)

---

**Last updated**: August 10, 2026

**Related**: [Scale Spine](scale-spine.md) · [Foundation Zero](foundation-zero.md) · [Training](../ai-core/training-system-guide.md)
