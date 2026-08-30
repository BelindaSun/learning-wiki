# How My Mental Models Changed

> This is not an index of new knowledge. It is a record of **how my way of seeing the world has changed**. Every entry marks a shift from “I used to think X” to “I now think Y.” The full arguments and examples live in the linked essays; this page keeps only one idea and one date so I can look back at the path.

---

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

**Last updated**: August 30, 2026
