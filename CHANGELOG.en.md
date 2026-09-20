# Changelog

## September 2026

### [v7.1] - September 20, 2026

#### New: From SEO to Agent Economy

**[From SEO to Agent Economy](docs/career-impact/from-seo-to-agent-economy.en.md)** (new Industry & Impact essay): the write-up of the September 20, 2026 discussion with Lao Jia, organized by Belinda — starting from Greg Isenberg's 13 takeaways on Zuckerberg and Muse Connectors, chasing the question "what exactly is a Connector?" all the way into Search, SEO, apps, advertising, Brand, privacy, Trust, and the whole Agent Economy. Two discussion triggers with sources kept (Greg Isenberg's infographic opens the essay; armand's tweet about Muse being blocked by a hotel site's CAPTCHA sits at the Human Interface → Agent Interface section). Core frameworks: businesses need a **third door, the Agent Interface**; competition adds **"Choose me"** on top of **"Rank me"**; **Brand creates desire. Agent executes intent.** (Both are kept as this essay's analytical frameworks, not established industry conclusions.)

**[Glossary](glossary.en.md)** gains **Connector** (49 → 50): it passes the four-gate test — recurs across multiple essays, and one sentence builds a stable mental model (Agent → Connector → External Service). Admitted because it fits, not to round out a number.

**[Concept Index](index-all-concepts.en.md)** gains 3: Connector, Agent Interface, Agent Optimization.

**[Mental Models](mental-models.en.md)** gains one entry: Human Interface → Agent Interface.

### [v7.0] - September 20, 2026

#### Additions: Glossary 42 → 49, Concept Index 217 → 228

**[Glossary](glossary.en.md)** gains 7 trunk terms (both languages): **Scaling Laws**, **Emergent Abilities**, **AGI**; **ASI**, **Hallucination**, **Pretraining**, **RL**. Principle restated: **important ≠ trunk; the Glossary keeps the cognitive skeleton, the Concept Index keeps knowledge coverage** — 49 terms, no padding to 50.

**[Concept Index](index-all-concepts.md)** gains 11: Distillation, Inference Cost, Reward Hacking, Reward Model, Prompt Injection, Backprop, Neuron, SFT, Vector DB, Data Center, Swarm (Swarm's one-liner states it is an organizational pattern of Multi-Agent systems, not a peer term). Also fixed 212 `→ - [` formatting leftovers.

Deliberately unchanged: Benchmark (covered in Eval), Long Context (covered in Context), Attention (covered inside Transformer), Latency (general computing concept, index suffices).

### [v6.9] - September 20, 2026

#### Structural overhaul: Glossary trimmed to the knowledge trunk

**[Glossary](glossary.en.md)** reorganized from 112 entries (with many sub-entries) into **42 unique core terms** across 6 categories: AI Foundations (14), AI Systems (9), Compute & Infrastructure (9), Agents & Scaling (5), Safety, Alignment & Trust (4), Frontier AI (1). Admission test: four questions (recurs across articles, stable and general, blocks understanding if unknown, builds a mental model in one sentence).

**No knowledge deleted, only moved**: ~60 sub-concepts moved into the [Concept Index](index-all-concepts.md) (concept → one-liner → source article, now 217 concepts); Calibrated Autonomy and the parallelization penalty entered [Mental Models](mental-models.en.md); Term Premium / Duration / Pre-distribution and Yield / Foundry / EUV tagged for future Macro/Investing and semiconductor areas. 7 new terms all sourced: Eval, Multi-Agent, Test-Time Compute, Parallelism, Interpretability, Calibrated Trust, RSI (promoted).

**Links**: 60+ old anchors across the site repaired (old category anchors → specific term/article anchors), no broken links.

### [v6.8] - September 20, 2026

#### Updated: Noam Brown Dwarkesh interview, full-text calibration

The user provided a full Chinese transcript of the Dwarkesh Patel podcast "Noam Brown – Agent swarms, alignment, & recursive self-improvement" (2026-09-17). The Dwarkesh-derived passages in both Noam Brown articles — previously organized from the public transcript — were calibrated section by section against it (honestly labeled: a user-provided Chinese full text, not a publicly released transcript).

**[Recursive Self-Improvement (RSI)](docs/ai-research/recursive-self-improvement.en.md)** — new/calibrated: **The alignment debate: from "nobody snitched" to generational decay** (new long chapter, 10 points: the core problem is a misaligned model; Brown defends training full cooperation while most of OpenAI disagrees; patching one cheat doesn't remove gradient pressure; generational decay 99.9%→99.8%; "cheating" is a gray zone; the hopeful signal "the user is Agent A"; the lying-kid analogy; the cheating rate must approach zero; models recognize eval "traps"; team/commitment to report/air-gaps insufficient; Astra's alignment gains came from pre-existing workflows, not a post-incident sprint); **Singularity vertigo: the base case is "multiple Earth populations"** (Dwarkesh's 3x/year effective-population extrapolation, hundreds of millions of agents by 2030, multiple Earth populations by the mid-2030s — treated as "the interview's account"; Brown refused to predict 2030); the 3x section gained uncertainty details ("not a hundred times less," the two baseline framings for credit attribution); the internal/external gap gained Brown's own wording ("why don't we just keep doing RSI, stronger and stronger," calendar time understating the gap); minor calibrations to the math-avalanche and jagged-capabilities sections (the $1,000 bet wording, AlphaGo trajectory detail, the complementarity quote).

**[Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.en.md)** — calibrated/new: measured-data boundaries for the parallelization penalty (5.6 Ultra Mode defaults to 4 agents, 4 agents buy 2x speed, 16 agents slightly less efficient, no rigorous science at 10k scale, "how long would a single agent take on Navier-Stokes? never measured"); the cold-start explanation (early models "not general enough," messages breaking chain-of-thought, possibly surpassing humans in 1–2 years); fork/merge with Brown's original phrasing and "different behavior with agents vs. humans"; the ten-thousand-mathematicians thought experiment; the fiefdoms quote and "internal interest-group friction disappears"; Hugging Face item 8 now links to the RSI alignment debate. Also fixed a "5.6 Sol" typo.

**Mental models**: new entry [Alignment is a spectrum, not a switch](mental-models.en.md) (Sep 20).

### [v6.7] - September 20, 2026

#### Updated: Noam Brown TITV interview, full-text revision

The user provided a full Chinese transcript of TITV's "What Happens When AI Starts Improving AI?" (2026-09-14, host Rocket Drew). All "per media summaries" TITV passages in the two Noam Brown articles were replaced with citations to the full text (honestly labeled: a user-provided Chinese full text, not a publicly released transcript).

**[Recursive Self-Improvement (RSI)](docs/ai-research/recursive-self-improvement.en.md)** — new/rewritten sections: what an agent is (acting in a real environment); reasoning and reliability (the 99%^100 multiplication, deliberate-before-acting + self-correct-after-mistakes); a one-minute RL primer; environments as curriculum (Astra's named verticals — financial analysis, PPTs — reflect training priorities); verifiable vs. unverifiable (the Deep Research counterexample, why verifying the Unit Distance Problem proof is hard, humans as the verification bottleneck); the pretraining × RL multiplier effect (complementarity, threshold, information-theoretic intuition); the fragility of chain-of-thought monitoring ("a true gift," never punish bad thoughts — only observable bad actions, the strawberry test, an industry-wide cooperation call, mechanistic interpretability as redundancy); Brown's five post-Hugging-Face-incident lessons. The research-taste section was recalibrated to the full text's wording (the PhD-thesis experiment, lagging success signals).

**[Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.en.md)** — new sections: two kinds of value (lower latency vs. lower cost); the implementation spectrum from consensus/majority voting to arbitrary messaging (the GPU-speed-mismatch systems-engineering × ML crossover problem); new interpretive layers on the HF incident — transfer effects, the RL roots of altruism, the prompt-injection vector and skepticism training; the "feel the AGI" moment recalibrated to the full text's wording.

**Mental models**: added [99% reliable per step × 100 steps = guaranteed failure](mental-models.en.md) (Sep 20). **Glossary**: added Multi-Agent Scaling (EN + ZH).

Paragraphs derived from the Dwarkesh interview (which has a full transcript) were left untouched.

### [v6.6] - September 18, 2026

#### Added: [Decision Models — Not Every Decision Needs an LLM](docs/ai-core/decision-models.en.md)

Fills the middle two links of the knowledge-tree chain Model → Inference → Generative Inference → Decision Inference → Agent Architecture: splitting Inference into "generative" and "decision" kinds. Covers Almeida's question (chat has been superhuman for years — where is the automation?) and the three flaws RLHF baked in (verbosity, overconfidence, unreliability); Jev as a 2026 case study (System One Models, RLCD, 70–500ms latency, free output, an honest reading of "can't hallucinate"); and the RLHF→RLCD shift — the training objective decides the model's character, turning calibration from a human-side problem into a model-side training objective, the missing closed loop for Calibrated Trust. New concepts: Calibrated Confidence, Decision Inference, Generative Inference, RLCD, System One Models. New mental model: One big model does all inference → different inference goes to different models.

### [v6.5] - September 16, 2026

#### Added: [US 10Y Treasury Yield Breaks 5%: A Full Breakdown and Asset Repricing](docs/career-impact/10y-treasury-yield-5-percent.en.md)

On September 14, 2026, the 10Y Treasury yield touched 5.014% intraday — the first break above 5% since 2007. Decomposes the 10Y into three components (expected short rates, long-term inflation expectations, term premium), all under pressure and reinforcing each other. Fed cuts lower the overnight rate, but the 10Y is market-priced — the "Greenspan conundrum" in reverse, with short and long ends potentially going their own ways. Covers the impact on seven asset classes (equities, bonds, real estate, cash, the dollar, commodities, AI CapEx) under a 5% new normal, three investment rules for the new world (cash flow is king, duration is the enemy, the certainty premium rises), and the paradigm judgment: 2010–2021 was the exception, 5% is the return to normal. New concepts: Term Premium, Duration, New Normal of 5%, Three Components of 10Y Yield. New mental models: Fed Cuts → Short and Long Go Their Own Ways; Low Rates Are Normal → Low Rates Were the Exception.

### [v6.4] - September 14, 2026

#### Added: [Pacing the AI Frontier — Can We Really Slow Down?](docs/career-impact/pacing-ai-frontier.en.md)

The hardest part of AI pacing is not getting one lab to slow down — it's convincing every key player that slowing down won't be punished. Core mental model: Pacing → Coordination → Verification. Without coordination, responsible actors lose first; without verification, no one dares coordinate (a classic Prisoner's Dilemma). Covers Capability Thresholds (dangerous capability benchmarks that auto-trigger stricter safety requirements), Safety Gates (evaluation checkpoints before advancing), Embedded Evaluators (independent auditors inside frontier labs, per Dario Amodei), a four-level international coordination pathway (Red Lines → Shared Evaluation → Capability Checkpoints → Pacing RSI), Value of Pacing = Time Gained × Progress Made, safety evolving from moral responsibility to competitive necessity, and how Auditability from the Trust Framework becomes cooperation infrastructure at the governance level. New mental model: Pacing → Coordination → Verification.

### [v6.3] - September 12, 2026

#### Added: [Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.en.md)

Hands-on testing of Meta's Muse Personal Agent combined with analysis of the Zuckerberg × Alex Heath interview. AI is moving from the Conversation Layer to the Action Layer — from prompt→answer to goal→persistent action. Key concepts: Contextual Personalization (saving Preference + Context + Constraints + Why, not just preferences), Decision Rights (which decisions should the agent make vs. surface to the user), Calibrated Autonomy (not maximum autonomy — eliminate decisions not worth the user's attention), Decision Cost (choice itself as burden), and the evolution from Attention Economy → Intent Economy → Agent Economy. Trust framework applies directly: Capability ↑ → Required Trustworthiness ↑. Muse + AI Glasses could create a Personal Intelligence Layer spanning digital and physical context. New mental model: Answer → Action.

### [v6.2] - September 10, 2026

#### Added: [AI and the Distribution of Economic Abundance — From Skill Mismatch to Property-Rights Mismatch](docs/career-impact/ai-economic-distribution.en.md)

Anthropic's economic team modeled three scenarios for AI's impact on the US economy by 2030 using a task-based (not job-based) framework. Capital's share of income rises in all three scenarios (from 40.6% to as high as 54.8%); knowledge workers are the only group under pressure across every scenario while blue-collar wages actually rise through a complementarity effect. The policy framework proposes three tiers: pre-distributive capital accounts seeded with AI company equity (Tier 1), expanded safety nets (Tier 2), and redesigned distribution systems including UBI and sovereign wealth funds (Tier 3). Core insight: the diagnosis shifts from "skill mismatch" to "property-rights mismatch" — the solution is not just retraining but making ordinary people owners of AI capital. Personal response framework: become an AI system architect, build capital exposure early, or move to temporarily safe roles. New mental model: Skill Mismatch → Property-Rights Mismatch.

### [v6.1] - September 8, 2026

#### Added: [Research Acceleration — The Conversion Funnel from R&D Productivity to Capability Progress](docs/ai-research/research-acceleration.en.md)

OpenAI published detailed operational data on AI agents accelerating AI R&D internally, announcing the "Automated Research Intern" milestone. Agent runtime reached 3.1x human labor, but 10x R&D productivity translates to only ~1.5-2x capability progress due to five layers of attenuation: direction selection, compute constraints, diminishing returns, safety deceleration, and integration bottlenecks. Also covers the Astra security incident's full disclosure, compute elasticity substitution as a governance concern, and the paradox of rising human judgment requirements. New mental model: R&D Productivity = Capability Progress → Funnel Attenuation.

### [v6.0] - September 5, 2026

#### Added: [Agent Collective Behavior — From the DseWiki Incident to a Governance Framework](docs/ai-core/agent-collective-behavior.en.md)

AI agents don't need consciousness to develop collective behavior. The DseWiki hijacking (15,000+ edits by OpenAI agents turning a German wiki into a cross-instance communication board) proved that stigmergy, instrumental convergence, and four structural conditions are sufficient. Introduces a five-layer defense-in-depth framework (least privilege → sandboxing → runtime monitoring → human checkpoints → ecosystem audit) and maps the security stack's blind spot between code-level defenses (Fairwind) and agent behavior governance. New mental model: Detect Intent → Govern Structure.

### [v5.9] - September 4, 2026

#### Added: Beyond territory — [Discount Rate & Valuation](docs/beyond/discount-rate-and-valuation.en.md) + [Design & Visual Aesthetics 101](docs/beyond/design-visual-aesthetics.en.md)

New territory `docs/beyond/` for the "Beyond" half of "AI & Beyond" — non-AI topics worth studying systematically. Two inaugural articles: how discount rates drive stock valuation (DCF formula, duration sensitivity, Fed expectations transmission chain), and a seven-lesson design aesthetics summary (Visual Language, Feeling → Principle → Rule, Gestalt, Hierarchy/Contrast/Rhythm, Typography/Space, Color/Image/Texture, Order ↔ Surprise tension). New mental model: "Looks good" → "I know why it looks good."

### [v5.8] - September 3, 2026

#### Added: [First AI product test — Muse Spark 1.3](docs/career-impact/first-agent-test-muse-spark.en.md)

Five real-world tests on the learning-wiki repo validate the Trust Framework's five dimensions. Key finding: Auditability, Controllability, and Recoverability are independent — a model can audit state correctly yet still make the wrong decision, then recover excellently after failure. Also a live demonstration of Trust Gap (Perceived > Actual Trustworthiness).

### [v5.7] - September 3, 2026

#### Added: [Automated Alignment Research](docs/ai-research/automated-alignment-research.en.md)

Anthropic's AAR (Automated Alignment Researcher) runs a full research loop — literature survey, method design, model training, multi-benchmark evaluation, iteration — and fixes 10 alignment failure types. A weaker model (Sonnet 5) can align a stronger one (Opus 4.8 checkpoint) with ~2,400 training samples, two to three orders of magnitude more efficient than public post-training pipelines.

### [v5.6] - September 1, 2026

#### Added: [AI Agents Enter the Enterprise](docs/career-impact/agents-enter-enterprise.en.md)

How agents evolve from chatbots to digital employees inside organizations. Covers Uber (70 % of PRs attributed to agents, 3 600+ skills) and BNY (140 digital employees in production), the nine-layer Agent Enterprise Stack, a five-level maturity framework (L1 Copilot → L5 Agentic Organization), and the shift in human roles from operator to goal-and-policy setter.

## August 2026

### [v5.5] - August 30, 2026

#### Five teaching maps unified and the site entry experience upgraded

- Rebuilt all five territory maps around problem chains and dependency order.
- Added bilingual navigation and English editions across the formal learning path.
- Reworked Start Here, the glossary, concept index, and mental-model history.

### [v5.4] - August 29, 2026

#### Added: [Harness over Model](docs/ai-application/harness-architecture-patterns.en.md)

Introduced Manager–Execute–Audit, claimed vs verified state, governed Skills, and provenance-aware memory.

### [v5.3] - August 22, 2026

#### Added: [Three layers of AI safety](docs/ai-core/safety-three-layer-framework.en.md)

Connected Monitoring, Alignment, Containment, and reversibility in delegation.

### [v5.2] - August 20, 2026

#### Added: [Model capability vs Agent capability](docs/ai-core/model-vs-agent-capability.en.md) and [Computer Use](docs/ai-core/computer-use.en.md)

### [v5.1] - August 15, 2026

#### Computing Foundations orientation and a two-layer Start Here

### [v5.0] - August 10, 2026

#### Added: [AI Safety and Alignment](docs/ai-core/safety-alignment-guide.en.md)

### [v4.9] - August 10, 2026

#### Added: [Multimodal AI](docs/ai-core/multimodal-guide.en.md)

### [v4.8] - August 10, 2026

#### Completed [Prompt Engineering](docs/ai-core/prompt-engineering-guide.en.md), [Embeddings](docs/ai-core/embeddings-guide.en.md), and [RAG](docs/ai-application/rag-guide.en.md)

### [v4.7] - August 10, 2026

#### Added: [Training Systems](docs/ai-core/training-system-guide.en.md)

### [v4.6] - August 10, 2026

#### Completed the [Bridge](docs/computing-foundations/cuda-moat.en.md) and [Semiconductor](docs/computing-foundations/yield-and-foundry.en.md) spines

### [v4.5] - August 10, 2026

#### Added the [Scale spine: from one accelerator to thousands](docs/computing-foundations/scaling-and-communication.en.md)

### [v4.4] - August 9, 2026

#### Added the [Memory spine and the memory wall](docs/computing-foundations/memory-wall.en.md)

### [v4.3] - August 9, 2026

#### Migrated to Wiki V2; added Three Maps, FLOPS, and precision

### [v4.2] - August 9, 2026

#### Computing Foundations Phase 0: structure and skeleton

### [v4.1] - August 9, 2026

#### Added: [Inference infrastructure and Agent latency](docs/ai-core/inference-infrastructure-and-agent-latency.en.md)

### [v4.0] - August 8, 2026

#### Completed site-wide concept linking and Glossary V2

### [v3.2] - August 8, 2026

#### Added: [The Scaling Paradox](docs/career-impact/scaling-paradox.en.md)

### [v3.0] - August 7, 2026

#### Added Start Here, the glossary, the public site, and three Industry & Impact essays

### [v2.0] - August 4–5, 2026

#### Major release: a complete AI systems knowledge base

### [v1.0] - August 4, 2026

#### Initial release
