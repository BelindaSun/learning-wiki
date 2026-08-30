# Yield and Foundries: Why Chip Capacity Constrains AI

**Core idea**: Chips are not software; they cannot be copied and pasted. Every physical chip must be manufactured separately, not every attempt succeeds, and only a handful of companies can make the most advanced chips. Together, those facts create a capacity bottleneck that more hiring, more code, or even more money cannot remove overnight.

---

## Dies and Yield: Not Every Attempt Works

A round silicon wafer is cut into many small pieces called **dies**. Once packaged, each die becomes a chip. Manufacturing inevitably introduces tiny defects, so not every die works. The percentage of usable dies on a wafer is its **yield**.

Yield is neither a trivial number close to 100% nor a permanent punishment for advanced processes. A new process node—such as the “3 nm” label often seen in the news—usually begins with lower yield while engineers learn to reduce defects. As problems are fixed, yield rises through a **yield ramp** and can eventually become quite high. Die size matters independently: on the same process, a larger die is more likely to encounter a defect and therefore usually has lower yield. These two effects explain why new, large chips can be expensive and scarce. The price is not merely strategic; fewer attempts really do produce working chips at first.

## Foundries: Designing and Manufacturing Are Different Businesses

Companies such as NVIDIA and AMD design chips but do not own the factories that manufacture them. They send their designs to specialist manufacturers called **foundries**. Only a few foundries can produce chips on the most advanced nodes, with TSMC currently among the leaders.

That means many companies seeking advanced AI chips ultimately compete for capacity at the same small set of factories. Money can purchase a share of existing capacity, but it cannot instantly create another leading-edge fab. Demand is broad; the places capable of satisfying it are narrow.

## EUV: A Supply Chain Narrowing to One Company

Move one layer upstream. Advanced chips require **EUV**, or extreme-ultraviolet lithography, equipment. Its physics is outside this article; the structural fact that matters is that ASML in the Netherlands is the world's sole producer of EUV lithography machines. Every foundry pursuing the most advanced processes depends on the same supplier.

The funnel therefore narrows at every step: many companies want chips, only a few foundries can make them, and those foundries rely on one equipment supplier.

## Advanced Packaging and HBM Stacks: A New AI-Specific Bottleneck

The [Memory Wall](memory-wall.md) introduced HBM, memory designed for high bandwidth. The “stacked” part means that several memory dies are vertically stacked into one high-bandwidth module. Advanced packaging—such as a silicon interposer—then places that module beside the compute chip and connects the two through short, wide paths. The memory dies are stacked with one another; the finished memory module sits next to, rather than directly on top of, the GPU die.

This combination of stacked memory and high-bandwidth packaging creates a separate capacity gate. Even with sufficient die yield and foundry capacity, a shortage of advanced packaging can still prevent finished chips from reaching the market. It is a relatively new bottleneck that has grown alongside AI's appetite for memory bandwidth.

## What This Guide Does Not Cover

- The optical physics of lithography or the detailed operation of EUV
- Transistor-device physics
- Statistical yield models; the essential direction is simply “lower yield → fewer usable chips”
- The manufacturing steps of advanced packaging; it is enough here to recognize it as an independent capacity constraint

## Next

- ← [Hardware Map](hardware-map.md) — where the question “Where do chips come from?” begins
- ← [The Memory Wall](memory-wall.md) — the demand behind the HBM-packaging bottleneck

---

**Last updated**: August 10, 2026

**Related**:
- [Semiconductor Spine](semiconductor-spine.md)
- [Hardware Map](hardware-map.md)
- [The Memory Wall](memory-wall.md)
