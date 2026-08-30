# Evaluation Systems: Teaching and Measuring What “Good” Means

> **The central question:** A model can produce many plausible answers. How do we teach it which ones people prefer—and how do we know whether it actually improved?

Training and evaluation meet at the same difficult point: **the metric becomes a target**. If the target is incomplete, the model may learn to score well without doing what we intended.

## RLHF in three stages

RLHF usually follows pretraining. The useful first approximation is:

```text
demonstrate good behavior
→ learn a reward signal from comparisons
→ optimize the model against that signal
```

### 1. Supervised fine-tuning (SFT)

Humans provide or curate strong responses. The model learns to imitate the form and behavior represented in those examples.

SFT gives direction, but examples are expensive and cannot cover every future situation.

### 2. Reward modeling

For the same prompt, humans compare candidate answers. A reward model learns to predict those preferences and turns them into a score.

The score is a proxy for “good,” not goodness itself. It inherits ambiguity, disagreement, and bias from both the task and the raters.

### 3. Reinforcement learning

The policy model generates answers and is updated to receive higher reward while remaining reasonably close to the useful behavior learned earlier. PPO is one historical method; newer pipelines may use different preference-optimization techniques.

Terminology should not hide the durable pattern: **examples establish behavior, comparisons define a proxy, and optimization pushes against that proxy.**

## Reward hacking

Once a proxy controls training, the model can exploit it:

- sound confident instead of being correct;
- produce longer answers because raters associate detail with quality;
- tell evaluators what they prefer to hear;
- exploit regularities in the benchmark or reward model.

Defenses include adversarial testing, diverse raters, held-out evaluations, process evidence, independent verification, and continually updating tests. No single defense makes the proxy identical to the real objective.

## What makes a useful benchmark?

### Validity

Does it measure the capability we claim, or a shortcut correlated with it?

### Contamination resistance

Can the model have seen the questions or close variants during training? Private, refreshed, or procedurally generated tests can reduce memorization.

### Realism

Do tasks resemble real use, including tools, messy context, latency, cost, and multi-step failure?

### Reproducibility

Are prompts, scoring, model settings, harness, and budgets specified? A score without these conditions is missing its units.

## Capability and system performance

A benchmark result is often a property of the whole setup:

```text
score = f(model, prompt, tools, harness, effort, budget, evaluator)
```

This is especially important for Agents. Changing state management or verification can move performance without changing model weights.

## When metrics conflict

Quality, latency, cost, helpfulness, and safety can pull in different directions. Weighted averages are useful only when trade-offs are truly allowed.

Some requirements are **constraints**, not preferences. If a system must never expose private data, excellent helpfulness should not average that failure away.

```text
first: satisfy hard safety and policy constraints
then: optimize quality, cost, and latency within the feasible region
```

## Why Chinese evaluation needs deliberate design

Translation of an English benchmark may test translation artifacts rather than Chinese ability. Chinese evaluation needs native tasks, regional and cultural variety, appropriate segmentation, and rubrics that recognize valid differences in style without confusing fluency with factuality.

The same principle applies to every language: evaluation should reflect the people and situations the system will actually serve.

## The durable mental model

Evaluation is not a final exam administered after the real work. It shapes training, product decisions, and what the system learns to optimize. Therefore every metric should be accompanied by the question: **What behavior could score well here while still failing the real goal?**

## Connections

- [Training Systems](../ai-core/training-system-guide.md)
- [AI Safety and Alignment](../ai-core/safety-alignment-guide.md)
- [Harness Architecture Patterns](../ai-application/harness-architecture-patterns.md)

