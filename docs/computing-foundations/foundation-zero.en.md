# Foundation Zero

**Core idea**: Not a complete computer-science foundation, but the first map—simple enough to enter, accurate enough to support everything that follows in AI.

---

![Foundation Zero: five pairs of basic building blocks—hardware/software, CPU/memory/storage, code/program/process/OS, client/server/network/API, and core/parallelism/GPU](assets/foundation-zero.svg)

## Five Sets of Building Blocks

| Concepts | One-line distinction | Mental image |
|---|---|---|
| Hardware / Software | Hardware is the physical machine; software tells it what to do | Instrument / score |
| CPU / Memory / Storage | CPU works; memory holds what is in use; storage keeps what is saved | Worker / desk / bookshelf |
| Code / Program / Process / OS | Instructions → a packaged set → one running instance → the coordinator | Recipe / cookbook / dish being cooked / kitchen manager |
| Client / Server / Network / API | Requests / responds / carries / specifies the interaction | Order from a menu; the restaurant cooks; a server delivers |
| Core / Parallelism / GPU | One work unit → several at once → an architecture built for massive throughput | One chef → a row cooking → a thousand-person prep line* |

\* A first approximation. [CPU vs. GPU](cpu-vs-gpu.md) upgrades it: a GPU is not merely “more cores.”

One still smaller unit—Bit / Byte—appears later because AI discussions use it constantly.

## The Concepts Behind the Metaphors

Metaphors establish intuition; they are not definitions.

### Hardware / Software

**Hardware** is the physical equipment in a computer: processors, memory modules, storage drives, motherboards, and graphics cards.

**Software** is the collection of programs, data, and configuration that runs on hardware. An instrument constrains the sounds available; a score specifies what to play this time. A GPU, NPU, or ASIC resembles a different instrument rather than the same instrument with different sheet music.

Avoid the misleading conclusion that hardware is unimportant and software determines all capability. Hardware design changes what a system can do and under which constraints. A better model is:

> **Hardware supplies capabilities and constraints; software selects and coordinates the work performed this time.**

### CPU / Memory / Storage

**CPU — Central Processing Unit**

The processor that executes instructions and performs arithmetic and logic. Each instruction may be simple—add, compare, jump—but enormous combinations produce complex behavior.

**Memory — RAM**

Fast, temporary space for data currently in use. Open applications and active documents occupy memory. Its contents normally disappear when power is removed.

**Storage — SSD or hard drive**

Long-term media that retains files and installed applications without power. It is much slower than memory. Data usually moves from storage into memory before a running program uses it.

### Code / Program / Process / OS

**Code** is a human-readable expression of instructions, such as `print("hello")`. A CPU does not directly understand Python or C source. Compilation or interpretation transforms it:

```
Source Code
    ↓
Compiler / Interpreter
    ↓
Machine Instructions
    ↓
CPU
```

**Program** is a set of instructions for completing a task, such as an installed application. While it is not running, it remains static.

**Process** is one running instance of a program. Opening the same calculator twice can create two processes, each with its own memory and CPU time.

```
Program — exists
    ↓ run
Process — works
    ↓ needs resources
Operating System — coordinates them
```

**Operating System — OS** manages computer resources and supplies an environment in which processes can run. Kernels, schedulers, and virtual memory come later; the useful first model is that the OS is a management layer between running programs and hardware.

### Client / Server / Network / API

**Client** is the role that requests or uses a service, such as a browser or mobile app.

**Server** is the role that provides and responds. Server software runs on one or more computers, so people also call those machines servers. But Client and Server are roles first, not fixed machine species. The same computer can play either role in different interactions.

```
Client → request → Server
Client ← response ← Server
```

**Network** is the path over which devices or programs exchange data: the internet, Wi-Fi, or a local network.

**API — Application Programming Interface** is an agreed way for one piece of software to expose functionality to another. APIs exist not only across the web, but also in libraries, operating systems, and services. SDKs, MCP, and Tool Calling often work with APIs.

For a web API:

```
Client sends a Request in the specified form
    ↓
Server performs the work
    ↓
Server returns a Response in the specified form
```

Example:

```
GET https://api.example.com/weather?city=Shanghai

{
  "city": "Shanghai",
  "temperature": 28,
  "condition": "cloudy"
}
```

The braces and key–value pairs form **JSON**, a common data format that will reappear in Prompt Engineering, Tool Calling, and MCP.

An API is neither the network nor the server. It is the contract for how software interacts. A client need not know how the server calculated its answer; it must follow the contract.

### Core / Parallelism / GPU

**Core** is a processor component capable of executing an instruction stream with relative independence. A processor can contain several cores and therefore handle more work at once. Exact core counts are not useful foundations because hardware changes quickly and different architectures define “core” differently.

**Parallelism** divides independent work among several compute units so it proceeds simultaneously rather than sequentially. Those units may be cores, processors, or entire machines.

```
Sequential: A → B → C → D

Parallel:   A ─┐
            B ─┤
            C ─┤ → at the same time
            D ─┘
```

AI training and inference contain many parallel mathematical operations.

**GPU — Graphics Processing Unit** uses many execution resources designed for regular parallel work. CPUs usually contain fewer, more flexible cores for complex branching and sequential dependencies. A GPU's advantage is not simply a bigger core count; its architecture is organized around high-throughput parallel computation. [CPU vs. GPU](cpu-vs-gpu.md) supplies the explicit upgrade.

## One More Building Block: Bit / Byte

AI discussions repeatedly use 8-bit, 4-bit, FP16, BF16, INT8, model size, memory, and quantization. They need one lower-level anchor.

**Bit** is the smallest unit of information, usefully imagined as a switch that can be 0 or 1.

**Byte** is a group of eight bits.

```
8 bits = 1 Byte

Byte → KB → MB → GB → TB
```

These units describe amounts of data. Binary arithmetic, hexadecimal, two's complement, IEEE 754, and the 1000-versus-1024 convention belong beyond Foundation Zero.

## Connect the Pieces

**How a program begins running:**

```
Program stored on Storage
    ↓ loaded when run
Memory
    ↓
Process
    ↓ resources managed by OS
CPU / GPU
    ↓
Computation
```

**How one request travels:**

```
Client
  ↓ Request
Network
  ↓
Server
  ↓ Program / Process
CPU / GPU
  ↓ Response
Network
  ↓
Client
```

The API sits beside Request and Response, specifying how both sides express and interpret the exchange.

In prose: a program usually lives on storage. When run, it is loaded into memory and becomes a process. The operating system coordinates CPU, GPU, memory, and storage. If the process needs a service from another program or machine, it acts as a client and sends a request through a network. The other side acts as a server, and the two commonly communicate through an API contract.

## Graduation Check

Explain these in your own words:

1. How do hardware and software differ?
2. What do CPU, memory, and storage roughly do?
3. How do code, program, and process differ?
4. Why does an operating system exist?
5. Are Client and Server machine types or roles?
6. What does a network contribute?
7. What is an API, and why is it not a server?
8. What are cores and parallelism?
9. What is the central architectural difference between CPU and GPU?
10. What are bits and bytes?

## Next

→ [From Silicon to AI: stack these building blocks into a system](from-silicon-to-ai.md)

---

**Last updated**: August 15, 2026

**Related**: [Computing Foundations](index.md) · [Software Map](software-map.md) · [Hardware Map](hardware-map.md)
