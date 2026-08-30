# Learning Questions and What Comes Next

This page keeps unresolved questions visible. A good map shows not only what is known, but where understanding is still thin.

## Questions Still Open

### How should several Agent sessions be inspected?

An Agent view should make parallel sessions, dependencies, progress, and intervention points legible without merging all contexts together. The product interface is evolving; the architectural need is stable.

### What happens when a worker fails mid-workflow?

The answer depends on the operation: retry an idempotent step, choose a fallback, preserve partial evidence, compensate for a completed side effect, or stop for human judgment. Failure behavior belongs in the workflow definition.

## Topics to Explore Further

### Inference

- How do serving architectures change with long context and Agents?
- When does KV-cache movement erase the benefit of disaggregated hardware?

### Evaluation

- How can evaluations resist contamination and reward hacking?
- How should process quality be measured, not only final answers?

### Models and Training

- How do sparse models specialize without expert collapse?
- Which compression techniques preserve rare capabilities?

## Current Progress

The core map now covers computing foundations, training, inference, Transformers, context, memory, Agents, tools, workflows, RAG, evaluation, and industry impact.

The next depth comes from tracing one real task from hardware and inference through the harness, workflow, evaluation, and human consequence.

## Suggested Order

1. [Computing Foundations](computing-foundations/index.md)
2. [AI Core](ai-core/index.md)
3. [AI in Practice](ai-application/index.md)
4. [AI Research](ai-research/index.md)
5. [Industry & Impact](career-impact/index.md)

Start with a real question, form a minimal model, test it against an example, and record where it fails. Confusion is not a defect in the notes; hidden confusion is.

