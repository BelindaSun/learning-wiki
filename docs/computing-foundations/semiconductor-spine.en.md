# Semiconductor Spine

**Core idea**: The first four spines ask what chips can do—compute, move data, scale, and cooperate with software. This spine steps back: **Where do chips come from, and why can we not make as many as we want?** The answer is a narrowing chain of constraints: yield, concentrated foundry capacity, dependence on specialized equipment, and advanced packaging. A shortfall at any link can stop the chain.

---

## Begin with the Assumption the Other Spines Made

The other spines quietly assumed that hardware exists and can be manufactured. This one asks:

> Where do chips come from?
> ↓
> Why can supply not expand instantly?
> ↓
> Who manufactures them?
> ↓
> What do those factories depend on?
> ↓
> Is a fabricated die already a usable AI accelerator?

AI competition is therefore not only about algorithms and models. Access to advanced chips affects cluster size and the speed of experimentation.

## 01 — Where Do Chips Come From?

Chips are physical products, not software that can be copied. [From Silicon to AI](from-silicon-to-ai.md) traced silicon → transistor → chip. This spine focuses on capacity: knowing how to manufacture a device does not answer how many can be manufactured under physical and supply-chain constraints.

The first four spines describe technical constraints on making systems faster. This one describes a different barrier: whether enough physical hardware can exist at all.

## 02 — Why Not Make Any Quantity We Want?

Many **dies** are fabricated on a round silicon wafer and then cut and packaged. A package may contain one die or combine several. Manufacturing imperfections make some dies unusable; the usable fraction is the **yield**.

Two independent factors matter:

- **Newer processes begin with harder yields.** Engineers gradually remove defects through a **yield ramp**.
- **Larger dies tend to have lower yield.** On the same process, a larger area is more likely to encounter a defect.

High-end AI accelerators often combine advanced processes with large compute dies, making yield, cost, and capacity especially important.

## 03 — Who Manufactures Them?

Chip design and chip manufacturing are often different businesses. NVIDIA and AMD design chips but contract specialist **foundries** to fabricate them. Only a few foundries can operate the most advanced processes, with TSMC among the leaders.

Many designers therefore queue for capacity at the same small set of factories. Money can buy capacity but cannot instantly create a new advanced fab. Such facilities cost tens of billions of dollars and take years to build.

## 04 — What Do the Factories Depend On?

The funnel narrows upstream. Leading-edge fabrication requires **EUV**, extreme-ultraviolet lithography equipment. Its physics is not needed here; the structural fact is that only ASML in the Netherlands produces these systems.

Many companies want chips; a few foundries can make them; those foundries depend on one equipment supplier. Capacity shortages, geopolitics, or natural disasters at any layer can propagate through the chain.

## 05 — Is a Fabricated Die Ready to Use?

Not yet. AI accelerators depend on HBM. Several memory dies are stacked into an HBM module, then placed beside the compute die through **advanced packaging** and connected by short, wide paths. The memory stack is adjacent to the GPU rather than stacked directly on top of it.

Stacking and packaging create another capacity gate. Sufficient wafer yield and foundry capacity cannot compensate for packaging that cannot keep up. This newer bottleneck has grown with AI's demand for memory bandwidth.

## The Five-Spine Panorama

```
Compute Spine        How fast can it calculate?
Memory Spine         How fast can data move?
Scale Spine          How can many machines become faster together?
Bridge Spine         How does software make hardware useful?
Semiconductor Spine  Where does hardware come from, and how much can exist?
```

The first four are technical constraints; the fifth is a supply-chain constraint. Together they form the minimum computing foundation for understanding modern AI hardware.

Return to [Computing Foundations](index.md).

## Deep-Dive Guide

- [Yield and Foundries](yield-and-foundry.md) — dies, yield, foundry concentration, EUV dependence, advanced packaging, and HBM stacking

## You Should Now Be Able to Answer

1. Why can chips not be copied like software?
2. What is yield?
3. Why do new processes and large dies make yield harder?
4. Are design and manufacturing usually the same company?
5. Why can only a few foundries make leading-edge chips?
6. Why is EUV equipment structurally important?
7. How does the capacity funnel narrow?
8. Why are HBM stacking and advanced packaging independent gates?
9. How do semiconductor constraints shape AI competition?

---

**Last updated**: August 19, 2026

**Related**: [Hardware Map](hardware-map.md) · [Memory Spine](memory-spine.md) · [Compute Spine](compute-spine.md) · [Scale Spine](scale-spine.md) · [Bridge Spine](bridge-spine.md)
