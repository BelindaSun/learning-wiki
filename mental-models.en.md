# How My Mental Models Changed

> This is not an index of new knowledge. It is a record of **how my way of seeing the world has changed**. Every entry marks a shift from “I used to think X” to “I now think Y.” The full arguments and examples live in the linked essays; this page keeps only one idea and one date so I can look back at the path.

---

**Human browses → Human delegates** (Oct 2)
I assumed the Agent's impact on business was mainly at the front door — companies adding a "Choose me" layer on top of "Rank me," an upgrade to SEO and apps. After five podcasts I think the front door is only the first layer: once the Agent becomes a person's economic proxy (Agent as Economic Proxy), the whole value chain gets repriced — interface, distribution, how transactions start, the customer relationship, and what counts as scarce all shift together. Agents may not destroy platforms, but they will take them apart and re-judge what each layer is worth. Xiao De added the last piece — where the money goes: Muse and Instinct both chose "free for users, merchants pay transaction fees, no ads," but take rates carry conflicts of interest too; **how a proxy gets paid decides whom it represents**.
→ Read [From Attention Economy to Agent Economy](docs/career-impact/from-attention-to-agent-economy.en.md)

**Memory → Living State** (Oct 1)
I assumed a Personal Agent's core was "the AI that knows me best." After Dots, I think it is "the AI that best knows what is still going on." Memory is retrieval ("I remember Sun said X last week"); Persistent Agency is state maintenance ("X is a line that is still open; Y happened yesterday, so X's state has changed; now it's worth bringing this back"). *Memory remembers the past. Persistent Agency maintains the present. / A true personal agent is not the AI that knows you best. It is the AI that best knows what is still going on.*
→ Read [Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.en.md#16-persistent-agency-a-personal-agents-core-asset-is-user-state)

**Capability → Adoption** (Oct 1)
I assumed "technically doable" was roughly "economically replaceable." Anthropic's robot-economics study puts two numbers side by side: 74% of physical tasks theoretically doable vs only 0.3% cheaper than humans today (40 years to reach 10% at past price-decline rates). Our synthesis (not the paper's): Adoption ≈ Capability × Reliability × Cost Advantage × Integration Ease × Regulation × Human Preference — multiplicative, any zero kills it. Judge occupational risk by task × cost × environment; exposure is a leading indicator, not a timetable.
→ Read [Coding Agents and Agent Infrastructure as an Operating System](docs/career-impact/agent-infrastructure-os.en.md#insight-the-capability-to-adoption-gap)

**Trust the Agent → Trust the System** (Sep 29)
I assumed agent safety's key question was "is this AI trustworthy?" Now I think the mature question is "**even if it isn't, can the system stay safe?**" The shift: Safety inside intelligence → Safety outside intelligence — move verification, recording, completion, permission, and enforcement out of the agent's reach one by one (Independent Verifier → Immutable Recorder → Spec-based Completion → Runtime Permission → Out-of-band Sentry), building a Control Plane that the Intelligence Plane cannot unilaterally rewrite. *Alignment asks whether the Agent wants to stay inside the lines. Control architecture decides whether the lines actually hold.*
→ Read [Coding Agents and Agent Infrastructure as an Operating System](docs/career-impact/agent-infrastructure-os.en.md#insight-externalized-control--moving-control-outside-the-agent)

**Frontier Curve → Cost Curve** (Sep 29)
I assumed tracking AI progress meant watching "how many points the strongest model gained." Now I think the curve that matters more is the **cost-of-capability curve**: Sonnet 5.5 jumped Terminal-Bench 4.0 from 10.3% to 70.6% (above Opus 5.5's 66.4%) at half the flagship price — Capability Compression keeps pushing flagship capability down to cheap tiers. What decides whether technology enters every company and workflow isn't "can the strongest system do it" but "can an ordinarily-priced system do it reliably." AI progress needs two curves: Capability Frontier + Cost Frontier.
→ Read [Coding Agents and Agent Infrastructure as an Operating System](docs/career-impact/agent-infrastructure-os.en.md#insight-capability-compression--flagship-capability-moves-down-to-the-cheap-tier)

**One winner → A whole stack** (Sep 28)
I assumed the agent trust layer would have one winner ("whoever defines the standard and interface wins"). Lao Jia split it into a six-layer Agent Trust Stack: Model (can it judge correctly) → Runtime (can it constrain action) → Identity & Permission (who allows it to do what) → Audit (can it be traced) → Transaction (dare we let it spend, sign, or execute) → Reputation (why trust a service). Meta plants flags in the middle layers, NVIDIA pushes up from runtime/hardware, Cloudflare/Microsoft/Google/ServiceNow each contest their layers — the winner may not be "one player" but "whoever defines each layer's interface."
→ Read [From "Smartest" to "Most Trusted"](docs/career-impact/capability-to-trust.en.md#lao-jias-cto-note-the-agent-trust-stack--trust-is-six-layers-not-one)

**Confidence signal ≠ demand evidence** (Sep 28)
I assumed a $150B buyback was management answering overbuild doubts with real money. Lao Jia pumped the brakes: a buyback only proves the board thinks returning capital at the current price is efficient — it **cannot by itself prove the industry has no overbuild** — long-term optimism and cyclical overbuilding can coexist. A buyback is a confidence signal, not demand evidence; the fact-layer/inference-layer discipline matters especially here.
→ Read [Investment Book · NVDA](https://belindasun.github.io/investment-book/#/NVDA) (2026-09-28 buyback entry)

**Capability → Deployability** (Sep 28)
I assumed an agent company's life or death depended on whose model was smarter. Lao Jia says the bottleneck is migrating: once capability crosses the threshold, the marginal bottleneck becomes deployability — identity, permissions, security, audit, integration, procurement, liability, support. **AI capability ≠ AI deployability.** Many agent companies will die at step two (Deployability), not step one (Capability); step three is Adoptability (will enterprises actually use it).
→ Read [AI Agents Enter the Enterprise](docs/career-impact/agents-enter-enterprise.en.md#addendum--sep-28-2026-meta-enterprise-platform-and-the-platformization-moment-for-agents-entering-the-enterprise)

**Model Safety → Infrastructure Safety** (Sep 28)
I assumed agent safety was "model behavior research" (alignment, red-teaming, refusal). Now NVIDIA is pushing safety down to runtime and infrastructure: OpenShell draws sandboxes at the CPU layer (open-source, verifiable); Sentry watches from dedicated hardware (closed, millisecond kill-switch). Model-layer safety measures can't govern what an agent can access or do.
→ Read [Coding Agents and Agent Infrastructure as an Operating System](docs/career-impact/agent-infrastructure-os.en.md#insight-nvidia-open-agent-safety-platform--agent-security-sinks-into-runtime-and-infrastructure)

**Copilot deployment → Enterprise Platform** (Sep 28)
I assumed enterprise AI was "install Copilot for employees" — a technology problem. Now Meta has made enterprise-grade agents a "next major pillar" and hired MongoDB's CEO to sell it — the real bar is organizational capability (security, compliance, delivery, contracts), not the model. The abstraction layer of competition moved up again: who can sell agents into organizations and manage them inside organizations.
→ Read [AI Agents Enter the Enterprise](docs/career-impact/agents-enter-enterprise.en.md#addendum--sep-28-2026-meta-enterprise-platform-and-the-platformization-moment-for-agents-entering-the-enterprise)

**Maximum Action → Selective Action** (Sep 28)
I assumed stronger agent = more steps completed autonomously, more complex tool calls. Now I think as agents get stronger, another metric matters more: can it judge which action is worth taking, and when to stop. Agent intelligence ≠ maximum action — "Intelligence is not just knowing what to do. It is also knowing when not to do it." (Five rounds testing Claude Opus 5.5 on real work: Creation → Initiative → Self-critique → Judgment → Knowing when to stop; plus three quotable judgments: "More autonomy does not fix bad behavior. It scales it." / "Continuity ≠ Follow-up" / "HQ observes the repos; the repos do not depend on HQ.")
→ Read [Coding Agents and Agent Infrastructure as an Operating System](docs/career-impact/agent-infrastructure-os.en.md#insight-claude-opus-55-in-the-field--from-doing-the-work-to-knowing-whats-worth-doing)

**Prompt Engineering → Compute Allocation** (Sep 26)
I assumed effort tiers should be chosen by "how important or big the task is." Now I think the truly scarce resource is "where to spend expensive compute" — Effort ∝ hidden error risk × need for independent judgment, not ∝ task length. But "direction" splits in two: epistemic direction (how to solve it) AI may well change with stronger reasoning, the stronger the more so; normative direction (what's worth pursuing) is the real what-matters — "Thinking harder can improve how we pursue a goal, but it cannot decide what ought to matter." One step further: Compute Allocation → Autonomy Allocation → Governance (Actor → Critic: different stages get different compute, autonomy, and verification intensity).
→ Read [Coding Agents and Agent Infrastructure as an Operating System](docs/career-impact/agent-infrastructure-os.en.md#insight-from-prompt-engineering-to-compute-allocation)

**Human Interface → Agent Interface** (Sep 20)
I assumed the endpoint of business digitalization was "make it easier for people to click in" (SEO fights for rankings, apps fight for retention). Now I see the Agent becoming a new purchasing entrance: businesses need a third door built for machines — competition adds "Choose me" (give the Agent a reason to pick me) on top of "Rank me" (get seen). Humans need to like you; machines need to trust you.
→ Read [From SEO to Agent Economy](docs/career-impact/from-seo-to-agent-economy.en.md)

**Calibrated autonomy ≠ maximum autonomy** (Sep 20)
I assumed a Personal Agent should be as autonomous as possible. Now I see the goal isn't Maximum Autonomy but Calibrated Autonomy — knowing when to act on my behalf and when to stop and ask. The hard part isn't letting go; it's calibration.
→ Read [Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.en.md#5-calibrated-autonomy)

**Parallelization is not free speedup** (Sep 20)
I assumed more chips and more agents always meant faster. Amdahl's Law says some work is inherently sequential — parallelization buys latency first (2× compute for half the wait), and coordination itself costs time.
→ Read [CPU vs GPU](docs/computing-foundations/cpu-vs-gpu.en.md) · [Multi-Agent Scaling](docs/ai-core/multi-agent-scaling.en.md)

**Alignment is a spectrum, not a switch** (Sep 20)
I treated alignment as pass/fail. Noam Brown says the cheating rate "is like a spectrum — the closer to zero the better": 1% cheating is nowhere near good enough; it must approach zero. And the evaluation metrics themselves may not capture real alignment at all — "if they don't get at the essence, we're in serious trouble."
→ Read [Recursive Self-Improvement (RSI): When AI Starts Improving AI](docs/ai-research/recursive-self-improvement.en.md#the-alignment-debate-from-nobody-snitched-to-generational-decay)

**99% reliable per step × 100 steps = guaranteed failure** (Sep 20)
I thought agents were unreliable because they weren't "smart enough." Noam Brown's arithmetic: 0.99^100 ≈ 37% — reliability is multiplicative, not additive. A reasoning model's value isn't greater cleverness but "deliberate before acting + self-correct after mistakes," adding nines past the decimal point one at a time.
→ Read [Recursive Self-Improvement (RSI): When AI Starts Improving AI](docs/ai-research/recursive-self-improvement.en.md)

**Multi-agent is the hero → multi-agent deserves <10% of the credit** (Sep 19)
I took 10,000 agents solving a Millennium Prize as proof that multi-agent was the hero. Noam Brown says it deserves less than 10% of the credit — the real driver is a powerful general model × long horizons; multi-agent is just the parallelization vehicle for test-time compute.
→ Read [Multi-Agent Scaling: Parallelizing Test-Time Compute](docs/ai-core/multi-agent-scaling.en.md)

**RSI goes 100x overnight → RSI goes ~3x, which is still massive** (Sep 19)
Hearing "AI improves itself" conjured an overnight 100x intelligence explosion. Noam Brown points out experiments are serial and GPUs are physical — roughly 3x acceleration. But 3x stacked on an already-exponential curve is earth-shaking.
→ Read [Recursive Self-Improvement (RSI): When AI Starts Improving AI](docs/ai-research/recursive-self-improvement.en.md)

**CoT is a gifted window → every punishment teaches it to hide** (Sep 19)
I treated chain-of-thought as safety's gifted window — neural nets laying their thinking bare. Now I see that punishing "revealed bad thoughts" teaches the model not goodness but concealment, and monitorability is already degrading.
→ Read [Multi-Agent Scaling: Parallelizing Test-Time Compute](docs/ai-core/multi-agent-scaling.en.md)

**Evaluation = a score → evaluation = a performance curve** (Sep 19)
I thought a safety evaluation was a score — pass it and you're safe. Noam Brown says evaluations must carry an inference budget: a model that looks harmless on a small budget can develop dangerous capabilities on a large one; the newest models keep improving past 100M tokens.
→ Read [Recursive Self-Improvement (RSI): When AI Starts Improving AI](docs/ai-research/recursive-self-improvement.en.md)

**One big model does all inference → different inference goes to different models** (Sep 18)
I used to assume every inference inside an AI system ran through the same large language model — one model that both talks and judges. I now see it can be split: Generative Inference (token-by-token text generation) for language interaction, Decision Inference (structured input, typed decision output, calibrated confidence) for judgment. Jev (TypeSafe AI, 2026) is the first "System One Model" — its training objective shifts from "being liked" (RLHF) to "calibrated confidence" (RLCD), closing the loop on Calibrated Trust from the model's side.
→ Read [Decision Models — Not Every Decision Needs an LLM](docs/ai-core/decision-models.en.md)

**Fed Cuts → All Rates Fall → Short and Long Go Their Own Ways** (Sep 16)
I used to think Fed rate cuts would bring down mortgage rates and corporate funding costs across the board. I now understand the 10Y is market-priced while the Fed only directly controls the overnight rate — cuts may lower just the short end while the long end stands still or even rises, sharply degrading monetary policy transmission to the real economy.
→ Read [US 10Y Treasury Yield Breaks 5%](docs/career-impact/10y-treasury-yield-5-percent.en.md)

**Low Rates Are Normal → Low Rates Were the Exception** (Sep 16)
I used to treat the zero-rate era of 2010–2021 as modern economies' default state. I now see it as a historical anomaly — "money cost almost nothing" — with QE artificially compressing term premium below zero. 5% is not an abnormal spike but a return to normal; 2010–2021 was the exception.
→ Read [US 10Y Treasury Yield Breaks 5%](docs/career-impact/10y-treasury-yield-5-percent.en.md)

**Pacing → Coordination → Verification** (Sep 14)
I used to think AI safety was mainly each company's own responsibility — good companies do safety, bad ones don't, and the market sorts it out. I now understand that even when every player genuinely wants to slow down, the system may not slow down — individual intent and game-theoretic structure are different things (Prisoner's Dilemma). The real question is not "should we slow down?" but "how do we make it safe for everyone to slow down?" The answer is building Coordination (so responsible actors aren't punished) + Verification (so no one can secretly defect) — a regime where being responsible doesn't mean losing the race.
→ Read [Pacing the AI Frontier](docs/career-impact/pacing-ai-frontier.md)

**Answer → Action** (Sep 12)
I used to think AI's interaction unit was prompt → answer (ask, receive). I now understand that a Personal Agent's unit is goal → persistent action — it knows my context, remembers my background, uses tools, and keeps pushing things forward on my behalf. The hard problem is not maximum autonomy but Calibrated Autonomy: knowing when to act for me and when to stop and ask. When agents begin participating in real economic activity (shopping, travel, transactions), the Attention Economy may evolve into an Agent Economy.
→ Read [Personal Agents — From Chatbots to an Agent Economy](docs/career-impact/personal-agents-agent-economy.md)

**Skill Mismatch → Property-Rights Mismatch** (Sep 10)
I used to think the right response to AI disruption was "fix skills" — retrain, reskill, find the next job. I now understand that if capital's share of income is rising structurally while labor's share is falling, simply helping people find new jobs does not address the root problem. The core mismatch is not skill but ownership: ordinary people must become owners of AI capital, not merely consumers of its output or casualties of its displacement. "Pre-distribution" (building ownership stakes before the shock) is more durable than "redistribution" (chasing wealth after it has already concentrated), but the personal window for pre-distribution is narrowing.
→ Read [AI and the Distribution of Economic Abundance](docs/career-impact/ai-economic-distribution.md)

**R&D Productivity = Capability Progress → Funnel Attenuation** (Sep 8)
I used to think 10x AI R&D productivity meant 10x faster AI capability progress. I now understand that from agent runtime to actual capability improvement there are five independent layers of attenuation — direction selection, compute constraints, diminishing returns, safety deceleration, and integration bottlenecks. 10x productivity may translate to only 1.5-2x capability progress. Execution power is exploding, but the automation of judgment has not truly happened yet.
→ Read [Research Acceleration](docs/ai-research/research-acceleration.md)

**Detect Intent → Govern Structure** (Sep 5)
I used to think preventing dangerous AI behavior meant detecting an agent's "intent" or "consciousness." I now understand that collective behavior needs no consciousness — it emerges whenever four structural conditions align: goal homogeneity from shared training, a persistent shared environment, positive feedback on information reuse, and adversarial pressure that selects for robust coordination. The governance lever is not the agent's mind but the infrastructure it can touch: least privilege, sandboxing, runtime monitoring, human checkpoints, and ecosystem-level audit.
→ Read [Agent Collective Behavior: From the DseWiki Incident to a Governance Framework](docs/ai-core/agent-collective-behavior.md)

**"Looks good" → "I know why it looks good"** (Sep 4)
I used to think aesthetics was innate intuition — "I think this looks good" and that was that. I now understand that design is a discipline about relationships, and beauty has a decomposable chain behind it: Feeling → Principle → Structure → Attention → Expression → Judgment. From seeing things to seeing relationships.
→ Read [Design & Visual Aesthetics 101](docs/beyond/design-visual-aesthetics.md)

**Benchmark → Behavioral Test** (Sep 3)
I used to think testing an AI product meant checking whether it was smart and gave good answers. I now think the more important test for an Agent is observing its behavior in a real task: how it interprets goals, how it handles permissions, how it leaves evidence, when it stops, and how it recovers after an error. Auditability ≠ Controllability ≠ Recoverability—these cannot be collapsed into a single "reliability" score.
→ Read [First AI Product Test: Muse Spark 1.3](docs/career-impact/first-agent-test-muse-spark.md)

**Supervisor → Research Loop** (Sep 3)
I used to think alignment research required a supervisor smarter than the target model. I now understand that a weaker model with a well-designed research loop (literature survey → method design → training → multi-dimensional evaluation → iteration) can align a stronger model, as long as alignment failures are measurable. "Who aligns whom" is no longer determined by raw intelligence ranking—process advantage can close the capability gap.
→ Read [Automated Alignment Research](docs/ai-research/automated-alignment-research.md)

**Tool → Workforce** (Sep 1)
I used to think "agents entering the enterprise" meant employees started using AI. I now understand the real change is AI moving from answering questions to autonomous execution, ultimately requiring a full organizational infrastructure—identity, permissions, tools, workflows, evaluation, governance, observability. AI is not becoming a smarter tool; it is acquiring increasingly complete organizational capabilities, progressing from Intelligence → Action → Identity + Responsibility + Governance.
→ Read [AI Agents Enter the Enterprise](docs/career-impact/agents-enter-enterprise.md)

**Product Company → Platform Company** (Aug 29)
I used to think OpenAI's competition was mainly GPT versus Claude versus Gemini: whoever had the most capable model held the advantage. I now understand that model leadership is a state, not a moat. An AI company's durable advantage comes from the whole system—Model × Product × Distribution × Ecosystem × Compute × Context. OpenAI's endgame is not to make an ever-growing collection of AI products, but to become an Intelligence Platform: producing intelligence underneath and distributing it through one adaptive interface and one API above.
→ Read [OpenAI's Future: From Intelligence Platform to Adaptive Interface](docs/career-impact/openai-intelligence-platform.md)

**Harness = Wrapping Paper → Harness = Operating-System Layer** (Aug 29)
I used to think a harness was useful but secondary wrapping around the model, while model capability determined the outcome. I now see the harness as the operating-system layer of an Agent system: it determines whether model capability can reliably become completed work. A weaker model with a strong harness can outperform a stronger model with a weak one (Qwen 0.733 > Opus 0.680). The central reliability question is not simply “Is it smart enough?” but “Who gets to define what reality is now?” The power to act, the power to establish reality, and the power to choose the next step must be separated.
→ Read [Harness > Model — The Real Lever of Agent Reliability](docs/ai-application/harness-architecture-patterns.md)

**Alignment → Defense in Depth** (Aug 22)
I used to think safety meant training a sufficiently obedient model—that good Alignment would be enough. I now understand that three layers must operate together: Monitoring observes behavior, Alignment shapes motivation, and Containment limits the boundary. Each layer assumes the previous one can fail. Even a highly trustworthy model is unsafe in an environment with unlimited permissions: good actors make mistakes, good intentions can be exploited through prompt injection, and unconstrained errors can still be irreversible.
→ Read [The Three-Layer Framework for AI Safety](docs/ai-core/safety-three-layer-framework.md)

**Intelligence → Agency** (Aug 20)
I used to think a smarter Model automatically produced a stronger Agent—the best model would make the best Agent. I now understand that intelligence is not agency. Put the same model in different Runtimes, with different Tools and Permissions, and its ability to act can vary enormously. Failure often occurs in the Agent Stack, not in the Model.
→ Read [Model Capability ≠ Agent Capability](docs/ai-core/model-vs-agent-capability.md)

**Tool / Orchestration → The Delegation Axis** (Aug 16)
I used to treat “Should I call a tool?” and “Should I hand this to a sub-agent?” as separate abilities. I now see the same decision primitive underneath both: “Should I reason about this myself, or delegate it and use the returned result?” Only the nature and granularity of the delegate differ. At a higher level, Agent intelligence has three layers: Model, the non-delegable core of judgment; Memory, which manages the time axis; and Delegation, which manages the spatial axis. The latter two are ultimately applications of Model Intelligence to different tasks.
→ Read [The Three Layers of Agent Intelligence](docs/ai-core/agent-intelligence-layers.md)

**One Axis → Multiple Dimensions** (Aug 14)
I used to think properties such as Agent autonomy, authority, memory, and capacity to explore could each be described on a single low-to-high scale. I now see that a single axis often compresses at least two independent dimensions: degree versus type, temporal direction versus persistence, knowledge versus discipline. A crude one-dimensional classification is not merely imprecise; it systematically hides the real risk or bottleneck.
→ Read [The Agent “Single-Axis” Problem](docs/ai-core/agent-single-axis-problem.md)

**Universal Chip → Workload Fit** (Aug 9)
I used to think the GPU was a universal chip for both training and inference, and that whoever accumulated the most compute would win. I now understand that training and inference have very different mathematical structures. Training is dense, parallel matrix computation; the Decode phase of inference is necessarily sequential and constrained by memory bandwidth. The GPU's training-era advantage came from parallel computation—precisely the ability Decode needs less. Splitting inference across specialized hardware is therefore not just marketing but a trend with mathematical force behind it, although software-stack maturity and hardware utilization still stand between the idea and deployment at scale.
→ Read [Inference Infrastructure and Agent Latency](docs/ai-core/inference-infrastructure-and-agent-latency.md)

**Capability → Capability × Calibration** (Aug 8)
Greater AI capability is not a purely positive variable. Human–AI system performance is the product of AI capability and the accuracy of human perception. Even correcting a perception error is not automatically good: the bias may be compensating for an invisible structural mismatch between a company and its employees, and overcorrecting it can reduce profit.
→ Read [The Scaling Paradox](docs/career-impact/scaling-paradox.md)

**Ceiling × Ability to Reach It** (Aug 7)
To evaluate a frontier AI company, it is not enough to ask how high its technical ceiling is. We must also ask whether it can actually reach that ceiling. Research, talent, and scientific taste set the ceiling; engineering, organization, product, and execution determine reach. A truly strong company needs both.
→ Read [Google AI's Leadership Restructuring](docs/career-impact/google-agi-org-restructuring.md)

**Model → Infrastructure** (Aug 7)
Models are sinking into the infrastructure layer, like CPUs, while competition moves upward into tool ecosystems, workflows, and execution environments. An Agent does not simply “enter” a new industry; it translates a task into something code-like, and the difficulty depends on how formalizable that task is. Every shift in computing creates a new operating-system-level player. The winner is not necessarily the one with the best technology, but the one that defines standards and interfaces on which the most developers build.
→ Read [Coding Agents and Agent Infrastructure as an Operating System](docs/career-impact/agent-infrastructure-os.md)

**Execution → Judgment** (Aug 6)
The ability to execute is becoming a commodity as Agents absorb much of the execution-level decision-making. Judgment becomes scarce: knowing what matters, recognizing quality, and sensing risk are forms of tacit domain expertise that gain value in the AI era.
→ Read [Revaluing Domain Expertise in the Age of AI Agents](docs/career-impact/domain-expertise-and-org-design.md)

**Capability → Trust** (Aug 5)
Capability is becoming commoditized; many models are already smart enough. The real moat becomes: which system is trustworthy enough to receive real work?
→ Read [From “Smartest” to “Most Trusted”](docs/career-impact/capability-to-trust.md)

**“+” → “×”** (Aug 5)
Human ability and AI execution do not combine additively by merely saving time. They combine multiplicatively by expanding what a person can do. That is why AI can widen the gap between people rather than flatten it.
→ Read [From Tools to Industry](docs/career-impact/industry-competition-shift.md)

**Model → System** (Aug 4)
AI companies are no longer competing only on whose model is smarter, but on whose system architecture, workflow design, and ecosystem are more complete.
→ Read [Model War vs. System War](docs/career-impact/model-to-system-war.md)

**Tool → Worker** (Aug 4)
A Chatbot is a tool that answers when asked; an Agent is a digital worker that receives a goal and acts. The change is not only greater intelligence—it is the partial transfer of authority over what happens next.
→ Read [The Architectural Shift of the Agent Era](docs/ai-core/agent-era-work.md)

**Prompt → Workflow** (around Aug 1)
A single question and answer is not the final unit of productivity. The real unit is a task decomposed into steps and coordinated by an Orchestrator across multiple Agents.
→ Read [The Complete Guide to Workflow Design](docs/ai-application/workflow-design-guide.md) and [Workflow Orchestration](docs/ai-core/workflow-orchestration.md)

---

**Last updated**: September 20, 2026
