# Software Map

**Core idea**: What software layers sit beneath ChatGPT, Claude, or a Coding Agent? This map answers only what each layer is, roughly where it lives, and how it relates to its neighbors. The five deeper spines explain why.

---

![Software Map: application code and model weights flow into a Runtime; below it sit Process and OS, inside the Client–Network/API–Server relationship; Framework, Database, Cache, Queue, and Container orbit the server](assets/software-map.svg)

## What the Map Is Saying

Two ideas are new; the rest are familiar.

**1. A runnable model is more than code.** What we call a model includes its **architecture**—the computational skeleton written in code, which defines how to calculate—and its **weights**, the billions of learned numbers that determine what those calculations produce. Architecture is code; weights are data. Think of weights as a musical score: the score is not a performing program and makes no sound by itself. Running a model requires architecture, weights, and software that executes both. This takes the engine metaphor in [Start Here](../../start-here.md) one level deeper: the learned ability inside the engine is stored as data and needs machinery to run.

**2. The Runtime is the performer.** A Runtime is the software environment that coordinates resources after you press Run. For an AI model, it combines model architecture and weights with lower-level libraries and hardware so inference actually occurs. Both ordinary application code and model computation eventually pass through a Runtime. The [Software × Hardware Map](software-hardware-map.md) follows that path down to the GPU.

Application code and a model are not two equivalent blobs. One **requests capability**; the other **supplies capability**. Application code shapes the product, receives user requests, and decides when to call the model through an API or SDK. The model calculates a result and returns it to the application, which returns it to you. MCP and Agent architecture later extend this same relationship: how application software calls models and external tools.

Beneath the Runtime sit the Process and OS introduced in [Foundation Zero](foundation-zero.md). All of this takes place inside the familiar Client ⇄ Network/API ⇄ Server relationship.

## Five Terms Worth Recognizing

| Concept | More precise meaning | Intuition |
|---|---|---|
| Framework | Reusable libraries plus conventions for building software | A ready-made skeleton and toolbox |
| Database | Software for persistently storing, querying, and managing structured data | An organized archive that remains searchable |
| Cache | Faster temporary storage for frequently used data or results | Keep common items within reach instead of fetching or calculating again |
| Queue | A place where data or tasks wait to be processed, often in first-in-first-out order | Work lines up until the system is ready |
| Container | A packaged, isolated application with its dependencies and environment | Carry the program and the conditions it needs from one machine to another |

## Example: One Prompt Reaches an AI Service

Real products differ. This simplified example only connects the concepts:

```
You send a Prompt
   → it may wait in a Queue during heavy traffic
   → a Framework receives it and selects the application logic
   → a Cache may supply a reusable result
   → otherwise the Runtime executes the model
   → durable information may be written to a Database
   → the result returns to you
```

A Container is not another step in the queue; it is more like the packaged environment in which the whole path runs.

Writing data to a Database does **not** mean the model will remember you next time. Persistence is one problem. Deciding whether and when to retrieve that data into the model's current Context is another, covered by [Context](../ai-core/context-window-guide.md) and [Memory](../ai-core/memory-system-guide.md).

## Next

- → [Hardware Map](hardware-map.md) — the physical system on which the Runtime executes
- → [Software × Hardware Map](software-hardware-map.md) — how the Runtime hands work to hardware
- → [From One Accelerator to a Thousand](scaling-and-communication.md) — why a product often needs more than one server

---

**Last updated**: August 15, 2026

**Related**: [Computing Foundations](index.md) · [Foundation Zero](foundation-zero.md) · [Hardware Map](hardware-map.md)
