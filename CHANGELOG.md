# 更新日志

记录 Wiki 的所有更新。最新的在上面。

## [v5.8] - September 3, 2026

### 📝 新增：第一次测试一个 AI 产品 — Muse Spark 1.3 与 Trust Framework 的真实验证

**新增页面**：
- `docs/career-impact/first-agent-test-muse-spark.md` — 五个测试（Capability + Explainability、Controllability、出题人掉坑、Recoverability 上/下）真实验证可信度五维框架；发现 Auditability ≠ Controllability ≠ Recoverability 不能合并为单一指标；Trust Gap（Perceived > Actual）的现场演示；Agent reliability = "fail visibly, contain damage, recover reliably"

**心智模型**：新增 [Benchmark → Behavioral Test](mental-models.md)（Sep 3）

**交叉链接**：capability-to-trust、scaling-paradox 共 2 篇文章加了双向链接

## [v5.7] - September 3, 2026

### 📝 新增：自动化对齐研究 — AI 如何研究并改善 AI 的对齐

**学习来源**：Anthropic Research Blog "Automated researchers can reliably mitigate alignment failures" (Aug 28, 2026) · Chen Yueh-Han, Jiaxin Wen, Jan Hendrik Kirchner

**新增页面**：
- `docs/ai-research/automated-alignment-research.md` — AAR 多 agent 研究循环架构、geometric mean 评分设计、弱模型对齐强模型实验（Sonnet 5 → Opus 4.8，2400 样本 ≈ 生产级对齐）、作弊行为三分类（lucky re-run / format-copying / reviewer-tricking）、Monitor 无限回归的三条终止路径、"双螺旋"心智模型（杠杆比 / 测量覆盖率 / 作弊进化速度）

**新增概念**：AAR（Automated Alignment Researcher）、Weak-to-Strong Alignment（115→117）

**心智模型**：新增 [Supervisor → Research Loop](mental-models.md)（Sep 3）

**交叉链接**：safety-alignment-guide、safety-three-layer-framework、evaluation-system 共 3 篇文章加了双向链接；AI Research index 新增"AI 能否自动改善 AI 的对齐"研究线；`glossary.md` 新增 1 个词条（AAR）；`index-all-concepts.md` Safety/Alignment 和模型研究主题区各新增 1 条

## [v5.6] - September 1, 2026

### 📝 新增：AI Agents Enter the Enterprise — 当 Agent 真正进入企业

**学习来源**：Uber Engineering — Running a Software Factory Efficiently at Uber Scale · McKinsey — The State of AI in 2026 · Deloitte — The Path to Agentic Transformation

**新增页面**：
- `docs/career-impact/agents-enter-enterprise.md` — 从 Chatbot 到 Digital Employee 的六步进化、Uber 案例（70% PR 归因于 Agent、3600+ Skills、30000+ daily executions）、BNY Digital Employee 案例、Agent Enterprise Stack 九层基础设施、企业 Agent 成熟度五级框架（L1-L5）、人的角色从 Operator 到 Goal & Policy Setter 的变迁、Capability ≠ Permission 治理原则

**新增概念**：Agent Enterprise Stack、Agent Identity、Agent Maturity Levels、Digital Employee、Managed Agent（110→115）

**心智模型**：新增 [Tool → Workforce](mental-models.md)（Sep 1）

**交叉链接**：capability-to-trust、agent-infrastructure-os、domain-expertise-and-org-design 共 3 篇文章加了双向链接；`glossary.md` 新增 3 个词条（Digital Employee、Agent Enterprise Stack、Managed Agent）；`index-all-concepts.md` 新增 5 个概念 + 职业发展主题区新增 1 条

## [v5.5] - August 30, 2026

### 🗺️ 五块领土教学地图统一 + 全站入口升级

Computing Foundations、AI Core、AI in Practice、AI Research、Industry & Impact 的入口页统一升级为 **Start → Orient → Go Deeper** 三层学习地图。每块领土不再是文章清单，而是从一个自然问题链出发：先抓最高杠杆的支点，再建立全局方向感，最后按真实困惑进入深度文章。

**结构更新**：
- AI Core — Model → Agent → Memory / Workflow / Safety
- AI in Practice — Harness → Workflow → Knowledge / Connection / Skill / Verification
- AI Research — Define → Intervene → Measure → Audit 研究闭环
- Industry & Impact — Model → System → Trust → Human Judgment
- Mental Models — 时间线改为最新在上
- README — 补齐 Aug 15–30 最新更新

**展示站更新**：所有分类可直接渲染手工学习地图，不再退回字母排序的文章列表。

## [v5.4] - August 29, 2026

### 📝 新增：Harness > Model — Agent 可靠性的真正杠杆在哪里

**学习来源**：arXiv:2608.01964 LongHorizon-Harness · TechCrunch Nvidia AVO + ARC-AGI-3 · NVIDIA SkillEvaluator · arXiv:2608.19701 Multi-Agent Memory Arbitration · DeepMind "From Atari to EVE Online"

**新增页面**：
- `docs/ai-application/harness-architecture-patterns.md` — MEA 循环（Manager-Execute-Audit）、Claimed vs Verified State、Harness 两条腿（执行架构 + 知识架构）、Skill as Governed Artifact、Skill 选择三层递进、Multi-Agent Memory Provenance、四柱模型
- `docs/conversations/harness-gt-model.md` — 完整学习对话记录

**新增页面 2**：
- `docs/career-impact/openai-intelligence-platform.md` — Intelligence Platform 定位、Compute 作为 Intelligence Factory、Distribution（Owned vs Third-party）、模型领先是状态不是护城河、Ultra-fast AI 改变交互模型、RSI 产业级反馈循环、Platform vs Product 内在张力
- `docs/conversations/openai-intelligence-platform.md` — 完整学习对话记录（Sam Altman × David Senra + Tibo × Matthew Berman）

**新增概念**：MEA Loop、Claimed vs Verified State、Context Rot、Self-evaluation Bias、Skill Governance、Skill Runtime、Skill Routing Precision、Multi-Agent Memory Provenance、Intelligence Platform、Distribution、Platform vs Product Tension、RSI（98→110）

**心智模型**：新增 [Harness = 包装纸 → Harness = 操作系统层](mental-models.md)（Aug 29）+ [Product Company → Platform Company](mental-models.md)（Aug 29）

**交叉链接**：Harness 系统、Model ≠ Agent、Skills 商业格局、模型战争 vs 系统战争、Scaling Paradox、Agent 架构、从工具到产业 共 8 篇文章加了双向链接；`glossary.md` 新增 5 个词条；`index-all-concepts.md` 新增 12 个概念

## [v5.3] - August 22, 2026

### 📝 新增：AI Safety 三层防护框架（Monitoring / Alignment / Containment）

**学习来源**：OpenAI《Pacing model development in an era of cyber-critical capabilities》（2026.08.18）

**新增页面**：
- `docs/ai-core/safety-three-layer-framework.md` — 三层防护各司其职；Alignment 技术演进（RLHF → Constitutional AI → Scalable Oversight → Interpretability）；Containment 纵深防御工程架构（沙箱/网络隔离/最小权限/激活监控）；Delegation Framework 可逆性缺口（风险×可逆性矩阵）
- `docs/conversations/safety-three-layer-framework.md` — 完整学习对话记录

**新增概念**：Containment、Monitoring、Defense in Depth、Scalable Oversight、Debate、Delegation Framework 可逆性缺口（91→98）

**心智模型**：新增 [Alignment → Defense in Depth](mental-models.md)（Aug 22）

**交叉链接**：Safety/Alignment 指南、Model ≠ Agent、Harness 共 3 篇文章加了双向链接；`glossary.md` 新增 4 个词条；Safety 主题区新增 5 条索引

## [v5.2] - August 20, 2026

### 📝 新增：Model 能力 ≠ Agent 能力 + Computer Use 词条

**新增页面**：
- `docs/ai-core/model-vs-agent-capability.md` — 从"让 AI 发微信朋友圈"的真实实验出发，建立 Agent Capability ≈ Model × Runtime × Tools × Permissions × Environment 的心智模型；区分 Capability 和 Authority；讨论为什么 Capability 和 Governance 必须一起增长
- `docs/ai-core/computer-use.md` — Computer Use 独立词条：AI → GUI → Software 这条路径的工作原理、与 API/MCP 的互补关系、权限风险和局限性

**新增概念**：Model Capability ≠ Agent Capability、Computer Use

**心智模型**：新增 [Intelligence → Agency](mental-models.md)（Aug 20）

**交叉链接**：Agent 架构、MCP、Harness、Safety/Alignment、Coding Agent 基础设施 共 6 篇文章加了双向链接；`glossary.md` 新增 Computer Use 词条；`index-all-concepts.md` 概念数 89→91

## [v5.1] - August 15, 2026

### ✏️ Computing Foundations Orient 层 + Start Here 双层化改造

外部 AI 审读意见驱动——在 Orient 三张地图和 Start Here 统一铺"本质（1 句）+ 比喻（1 句）"的双层表达。改动 6 个页面（`start-here.md`、`software-map.md`、`hardware-map.md`、`software-hardware-map.md`、`from-silicon-to-ai.md`、`foundation-zero.md`）+ `README.md`。逐条建议做了技术校对，采纳/软化/否决都留了理由。`software-hardware-map.md` 加了诚实简化脚注（呼应 CLAUDE.md Future Note）。

## [v5.0] - August 10, 2026

### 📝 AI Core 新增：AI Safety / Alignment 完全指南

Safety（当下、可测）vs Alignment（模型目标在新场景里是否符合人类意图，更深、更难验证）；Specification Gaming 作为核心机制；RLHF 定位为"对齐技术之一，不是解决方案"；Red Teaming / Constitutional AI / Interpretability 三条互补思路点到为止。新增 6 个概念（134→140）。

## [v4.9] - August 10, 2026

### 📝 AI Core 新增：Multimodal 完全指南

以 Flamingo 为历史/架构跳板；核心不是"都变成文字"；Native Multimodal 定义为连续谱；Multimodal → Agent → Robotics → World Model 连接。新增 6 个概念（128→134）。

## [v4.8] - August 10, 2026

### 📝 补齐三个基础：Prompt 工程 + Embeddings + RAG

三篇接成一条线：Prompt 教怎么跟模型对话，Embeddings 教语义相近，RAG 用 Embeddings 解决知识截止日期问题。新增 7 个概念（114→121）。

## [v4.7] - August 10, 2026

### 📝 AI Core 新增：Training 训练系统完全指南

预训练 → 监督微调 → RLHF 三阶段串成一条线；"为什么训练这么贵"呼应 Computing Foundations 三条主脊。新增 5 个概念（109→114）。

## [v4.6] - August 10, 2026

### 📝 Bridge Spine + Semiconductor Spine：五条主脊全部完成

`cuda-moat.md`（护城河在软件栈里，决策分散在编译期/kernel/运行时）+ `yield-and-foundry.md`（良率/代工/EUV/先进封装）。新增 3 个概念（104→107）。Computing Foundations Start→Orient→Go Deeper 三层完整落地。

## [v4.5] - August 10, 2026

### 📝 Scale Spine：从 1 卡到千卡

通信开销 + 阿姆达尔定律。内存墙的放大版——芯片内"喂不饱" → 机器间"喂不饱"。

## [v4.4] - August 9, 2026

### 📝 Memory Spine：内存墙

内存层级 → 容量 vs 带宽 → 算术强度 / compute-bound vs memory-bound。与推理基础设施双向链接。新增 4 个概念。

## [v4.3] - August 9, 2026

### 📝 Wiki V2 架构迁移 + Three Maps + FLOPS 与精度

Computing Foundations 提升为顶层领土；Mental Models 归为 Explore 门；首页改三扇门 + 领土倒三角。新增 Software Map / Hardware Map / Software × Hardware Map（Orient 层）+ `flops-and-precision.md`。新增 11 个概念（88→99）。Growth Rules 写入 CLAUDE.md。

## [v4.2] - August 9, 2026

### 🖥️ Computing Foundations Phase 0：结构和骨架

`index.md` + `foundation-zero.md` + `from-silicon-to-ai.md` + 五主脊骨架页。新增 7 个概念（81→88）。

## [v4.1] - August 9, 2026

### 📝 推理基础设施与 Agent 延迟

Prefill（compute-bound）vs Decode（memory-bandwidth-bound）；Agent 延迟四指标；Workload 形状决定最优硬件；AI 基础设施从同构走向异构。新增 5 个概念（76→81）。

## [v4.0] - August 8, 2026

### 🔗 Phase 3 全站推广完成 + 术语表 V2 定版

Phase 3 Navigation Layer 完成——15 个稳定 Glossary 锚点、21 篇文章的首次出现链接与 Before Reading、全仓库 0 死链。术语表 15 个核心词条冻结为参考样本。

含 Batch A（7 篇高密度技术文章）、Batch B（8 篇 ai-research + career-impact）、死链清理（13 篇 ~40 处历史遗留死链）、试点验证（稳定 slug + 正文链接 + Before Reading）。

## [v3.2] - August 8, 2026

### 📝 Scaling Paradox

AI scaling law 在人机协作里不自动成立；90%→95% 反而更危险；Trustworthiness + Calibrated Trust 两层模型。

## [v3.0] - August 7, 2026

### 🗺️ Start Here + 术语表 + 展示网站 + 三篇 Career Impact

- `start-here.md` — 7 站最小地图
- `glossary.md` — 25 个核心名词术语表
- 展示网站上线（[learning-wiki-site.vercel.app](https://learning-wiki-site.vercel.app)），push 后自动同步
- `google-agi-org-restructuring.md` — 时间尺度分离 + 天花板×到达能力
- `agent-infrastructure-os.md` — Agent 可行性六标准 + 可形式化光谱 + Agent OS 等价定理
- `domain-expertise-and-org-design.md` — know-what-matters 七层框架 + 管理 Agent 四层能力
- `mental-models.md` — 心智模型变迁时间线

## [v2.0] - August 4-5, 2026

### 🚀 大版本：完整 AI 系统知识库

8 篇核心页面 + 14 篇完整对话记录 + 概念索引。

**新增页面**：Inference 推理系统、Transformer 架构、MCP 协议、Skills 商业格局、Models 深挖、Evaluation 评估、Agent 时代系统架构、从"最聪明"到"最可信"、从工具到产业。

**覆盖**：Agent 架构 → 推理系统 → 训练 → 模型优化 → 评估 → Memory/Context → MCP/Harness/Skill → 职业影响。

## [v1.0] - August 4, 2026

### 🎯 初始发布

Agent 系统架构、Workflow 设计、模型战争 vs 系统战争、概念索引、贡献指南。

---

**最后更新**: August 29, 2026
