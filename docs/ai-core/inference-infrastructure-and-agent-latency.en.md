# Inference Infrastructure and Agent Latency

> **The central question:** Why can the same model need different hardware for reading a prompt and generating its answer?

## One request, two workloads

Inference looks like one process from the outside, but it contains two computationally different phases.

### Prefill: understand the known input

During **Prefill**, all prompt tokens are already available. The system can process many of them in parallel and build the KV cache. This phase is dominated by large matrix-matrix operations and is often **compute-bound**.

### Decode: generate the unknown output

During **Decode**, the next token does not exist until the previous one has been produced. Generation is therefore autoregressive and serial. Each step repeatedly accesses model weights and an expanding KV cache, so Decode is often **memory-bandwidth-bound**.

```text
prompt ── Prefill (parallel, compute-heavy) ──► KV cache
                                                    │
                                                    ▼
answer ◄── Decode (serial, bandwidth-heavy) ◄── one token at a time
```

This is why “the fastest training chip” does not automatically mean “the lowest-latency Agent chip.” Training and Prefill reward large parallel computation; Decode often rewards moving data efficiently.

## Why infrastructure is becoming heterogeneous

If two phases have different bottlenecks, running them on different hardware can make sense. One emerging design separates Prefill and Decode, then transfers the KV cache between them.

Vendor demonstrations—including AMD Helios for Prefill paired with Cerebras WSE for Decode—report substantial efficiency gains. Treat those numbers as vendor claims, not universal results: KV transfer, batching, software maturity, and workload shape can change the outcome.

## What an Agent developer should measure

For multi-step Agents, a useful priority order is:

1. **Step latency and small-batch tokens per second** — every tool loop makes delay visible.
2. **Tokens per dollar** — long trajectories multiply inference cost.
3. **Aggregate throughput** — crucial once many tasks run concurrently.
4. **Tokens per watt** — strategically important, though often upstream from an API user's decision.

A benchmark without workload shape is incomplete. Ask:

- What is the input-to-output token ratio?
- How strict is the latency target?
- Do requests arrive steadily or in bursts?
- Is the system serving one interactive Agent or thousands of batched jobs?

There is no universal champion—only hardware and software matched well or badly to a workload.

## Where the industry really is

The architectural direction is becoming clearer: homogeneous fleets are giving way to more specialized systems. Deployment is still early. KV-cache transfer can erase theoretical gains, serving stacks are still evolving, and many impressive systems are bespoke partnerships rather than products any small team can deploy tomorrow.

## Mental model

> Do not ask for the strongest tool in the abstract. Match the mathematical shape of the work to the machine.

## Open questions

- When does KV-cache transfer become the new bottleneck?
- How quickly will serving stacks such as vLLM, SGLang, and Dynamo make disaggregation routine?
- Will attention and feed-forward computation split even further?
- When will these gains become accessible outside the largest infrastructure buyers?

## Connections

- [Inference: How an Answer Is Generated](inference-system-guide.md)
- [Transformer Architecture](transformer-architecture.md)
- [Agent Intelligence: Model, Memory, and Delegation](agent-intelligence-layers.md)

