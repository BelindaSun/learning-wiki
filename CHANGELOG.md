# 更新日志

记录 Wiki 的所有更新。最新的在上面。

## [v2.4] - August 5, 2026

### 🧠 结构调整：新增 mental-models.md

**新增**:
- 根目录 `mental-models.md` —— 跨分类的"心智模型变迁"时间线索引（不是新的内容分类，只是把已有文章里"原来 vs 现在"这层单独提炼出来做导航）
- 首批 5 条：Prompt → Workflow、Tool → Worker、Model → System、"+" → "×"、Capability → Trust，均链接回各自的完整文章
- README.md 结构图和快速导航加了入口，6 篇相关文章的"相关"里也都加了反向链接

## [v2.3] - August 5, 2026

### 📝 Daily Update - 从"最聪明"到"最可信"

**新增页面**:
- `docs/career-impact/capability-to-trust.md` - 可信度五维框架（可预测、可解释、可审计、可控制、可恢复）、权限从 ChatGPT 时代的"可选"变成 Agent 时代的"必须"、AI 安全框架的政治经济学、Evaluation vs Safety 的区别

**新增概念**:
- Trustworthiness（可信度五维框架）、Evaluation vs Safety

**来源**: 与 Claude 关于 Trump AI 政策信号、企业采购标准、AI 安全框架权力分析的深度对话

**相关**: 延伸自 [模型战争 vs 系统战争](docs/career-impact/model-to-system-war.md)、[从工具到产业](docs/career-impact/industry-competition-shift.md)，权限设计部分交叉链接到 [Harness 系统](docs/ai-application/harness-system.md)

## [v2.2] - August 5, 2026

### 📝 Daily Update - 从工具到产业：AI 时代的竞争本质

**新增页面**:
- `docs/career-impact/industry-competition-shift.md` - 模型商品化、护城河从模型→系统→生态→垂直深度→个人数据的迁移路径、"+"变"×"的乘法效应

**新增概念**:
- Personal Data Moat（个人数据护城河）、Multiplication Effect（乘法效应）

**来源**: Disney 多模型策略报道 + OpenAI Codex 报告 + 14 篇 AI Weekly Reads 汇总分析

**相关**: 延伸自 [模型战争 vs 系统战争](docs/career-impact/model-to-system-war.md) 和 [Agent 时代的系统架构转变](docs/ai-core/agent-era-work.md)

## [v2.1] - August 4, 2026

### 📝 Daily Update - Agent 时代的系统架构转变

**新增页面**:
- `docs/ai-core/agent-era-work.md` - Agent 时代的系统架构转变（System of Record、Agent Legibility、Orchestrator 模式、工作层次三分法）

**新增概念**:
- System of Record、Agent Legibility、工作的最小单位、机械/专业/战略三层工作模型

**来源**: OpenAI "How Agents Are Transforming Work" + "Harness Engineering" + 多 Agent 协作研究

**结构调整**:
- 也在 `docs/conversations/` 下新建了两批完整对话记录：14 篇早期学习对话（Harness、Memory、Context、MCP、Inference、Attention、Transformer、Models、Evaluation、多模态、垂直 vs 全能 Agent 等），以及这次的 Agent 时代对话，都从对应指南页面加了"📖 完整学习对话记录"反向链接

## [v2.0] - August 4, 2026 (Final Big Release)

### 🚀 大版本更新：完整 AI 系统知识库

**新增 8 篇核心页面**:
- `docs/ai-core/inference-system-guide.md` - Inference 推理系统完全指南
- `docs/ai-core/transformer-architecture.md` - Transformer 架构完全指南
- `docs/ai-application/mcp-protocol-guide.md` - MCP 统一协议指南
- `docs/ai-application/skills-business-landscape.md` - Skills 和商业格局
- `docs/ai-research/models-deep-dive.md` - Models 深挖（MoE + 压缩）
- `docs/ai-research/evaluation-system.md` - Evaluation 评估系统

**核心内容统计**:
- 总 Markdown 文件: 21 个
- 总行数: 8,500+ 行
- 核心概念: 60+ 个
- 学习跨度: July 28 - Aug 4（8 天深度学习）

**新增概念（40+ 个）**:
- 推理系统：Inference、Transformer、Weights、Attention、Temperature、Top-p、Top-k、涌现临界点
- Transformer 架构：Multi-Head Attention、FFN、残差连接、Layer Norm、RoPE、Causal Mask
- 模型优化：MoE、KV Cache、量化、剪枝、蒸馏
- 评估系统：RLHF、Benchmark、困惑度、准确率、对齐度
- 商业格局：Skill、垂直 Agent、护城河、三层生态
- Memory：情节记忆、语义记忆、五层架构
- 窗口管理：Lost in the Middle、Prompt Caching、Project Knowledge

**完整的学习回顾**:
- July 28: Skills 和商业格局（"模型公司吃智能的钱"）
- July 29: MCP 协议（"只读 vs 读写"）
- July 30: Memory 系统（"热暖冷三温"）
- July 31: Context Window（"白板管理"）
- Aug 1-2: Inference + Transformer（"涌现临界点"）
- Aug 2: Models 深挖（"MoE 的权衡"）
- Aug 3: Evaluation（"RLHF 的本质"）
- Aug 4: Commit 整个系统！

**文件结构**:
```
learning-wiki/
├─ docs/
│  ├─ ai-core/
│  │  ├─ agent-architecture.md
│  │  ├─ workflow-orchestration.md
│  │  ├─ memory-system-guide.md
│  │  ├─ context-window-guide.md
│  │  ├─ inference-system-guide.md
│  │  └─ transformer-architecture.md
│  ├─ ai-application/
│  │  ├─ workflow-design-guide.md
│  │  ├─ harness-system.md
│  │  ├─ mcp-protocol-guide.md
│  │  └─ skills-business-landscape.md
│  ├─ ai-research/
│  │  ├─ models-deep-dive.md
│  │  └─ evaluation-system.md
│  └─ career-impact/
│     └─ model-to-system-war.md
├─ index-all-concepts.md (60+ 概念索引)
├─ CHANGELOG.md (这个)
├─ README.md
├─ QUICKSTART.md
├─ CONTRIBUTE.md
└─ LEARNING_QUESTIONS.md
```

**技术亮点**:
- 实战案例为主（Mimo、AI2030、投资系统）
- 系统思维（从单个概念到完整生态）
- 深度学习（不止是概念，包括原理和应用）
- 持续更新（为日增量而设计）

---

## [v1.6] - August 4, 2026 (Midnight)

### 📝 Daily Update - Inference 推理系统

**新增页面**:
- `docs/ai-core/inference-system-guide.md` - Inference 推理系统完全指南

**核心内容**:
- 权重的本质：几千亿个数字，分散编码知识，不是某处存储
- 推理完整过程：Tokenization → Embedding → 正向传播 → Attention → 层层深化 → 概率分布 → 采样选词 → 一词一词生成
- Transformer 架构：Multi-Head Attention + 残差连接 + Layer Norm + Feed Forward
- Causal Attention：生成模型用单向 Attention，每词只看前面
- 采样参数：温度（形状）、Top-p（累积概率）、Top-k（数量）
- 涌现临界点：参数量+数据量+计算量共同作用，最直接触发器是训练损失值
- Thinking 模式：在草稿纸上用更多 Token 推理，再输出答案

**来源**: Claude 对话学习 (Aug 1-2)

**关键洞察**:
- Inference 不是查找，是信号流过权重网络的正向传播
- 涌现不是线性增长，而是"突然会了"的跃变
- 幻觉是必然的，不是 bug——优化"流畅"而非"真实"
- Thinking 模式是"更多推理轮次"的产物

**Wiki 最终统计**:
- 总文件数: 15 个 Markdown 文件
- 代码行数: 6,500+ 行
- 核心概念: 50+ 个
- 学习跨度: July 29 - Aug 2（5 天深度学习）

---

## [v1.5] - August 4, 2026 (Final Update)

### 📝 Daily Update - Context Window 管理

**新增页面**:
- `docs/ai-core/context-window-guide.md` - Context Window 完全指南

**核心内容**:
- Context Window 定义与 Token 衡量（100 万 Token 的白板）
- 白板上看不见的东西：系统提示词、工具定义、记忆文件、工具结果
- 窗口满了的处理：硬截断 vs Compaction（压缩）
- Project 和持久记忆：数据文件 + 行为规则
- Prompt Caching 原理：自动复用相同前缀，节省 90% 的缓存成本
- Lost in the Middle：前面清晰，中间模糊，后面相对恢复
- 实战管理：三个原则（只放值得的、重要内容位置优化、Project + Caching 是王道）

**来源**: Claude 对话学习

**关键洞察**:
- 从"上传文件省 Token"到"理解 Caching"的认知升级
- Lost in the Middle 的视觉化：不是简单的线性衰减
- Project 不是"放文件的地方"，而是"持久记忆的专属工作间"
- Memory 和 Context 互补不竞争：Memory 管跨对话，Context 管单次对话

**完成统计**:
- 总文件数: 14 个 Markdown 文件
- 核心概念: 40+ 个
- 总字数: 约 50,000 字
- 涵盖日期: July 29 - Aug 4（7 天深度学习）

---

## [v1.4] - August 4, 2026 (Very Late Night)

### 📝 Daily Update - Agent 记忆系统

**新增页面**:
- `docs/ai-core/memory-system-guide.md` - Agent 记忆系统完全指南

**核心内容**:
- 两种失忆场景：对话中途（Context 爆满）vs 跨对话（无持久化）
- 记忆的三种温度：热（Context）、暖（摘要）、冷（长期）
- 情节记忆 vs 语义记忆：具体事件 vs 通用知识
- Mimo 的五层架构：聊天 → 摘要 → 事实库 → 今日状态 → 运行时权重
- 向量数据库原理：向量相似度 vs 传统精确匹配
- 何时需要向量数据库：数据量 × 查询模糊度 > 阈值

**来源**: Claude 对话 + Mimo 真实案例 + Jupiter Dreaming 研究

**关键洞察**:
- Memory 是 Agent 的心脏（Skills 是大脑，MCP 是手眼睛）
- Mimo 的第 4 层"今日状态"是独创——让 AI 有自己的生活
- localStorage vs 服务器的分工：不是比较好坏，而是责任分工

---

## [v1.3] - August 4, 2026 (Late Night)

### 📝 Daily Update - MCP 统一协议

**新增页面**:
- `docs/ai-application/mcp-protocol-guide.md` - MCP 统一协议完全指南

**核心内容**:
- MCP 的本质：统一标准协议（像 USB 统一充电口）
- Skills vs MCP：大脑 vs 手眼睛，缺一不可
- 只读 vs 读写：安全机制设计（查天气只读，订机票读写+人确认）
- MCP Server 谁来做：大平台主动做、第三方开发、企业自己做
- MCP vs API：API 是原材料，MCP 是标准化包装

**来源**: 对话学习 + 真实案例分析（Mimo 天气、Brief 数据源问题）

**关键洞察**:
- "数据进不去才是壁垒"的深层理解：MCP 可以让数据流动，但不是所有数据都愿意开放
- 集成商的新价值：从接 API → 接 MCP + 管理安全 + 优化流程

---

## [v1.2] - August 4, 2026 (Night)

### 📝 Daily Update - Workflow Orchestration 多 Agent 协作

**新增页面**:
- `docs/ai-core/workflow-orchestration.md` - Workflow 工作流完全指南

**核心内容**:
- Workflow 两种形态：顺序型（A→B→C）和并行型（A//B//C）
- Orchestrator（包工头）+ Worker（工人）的分工模式
- Session 线程隔离——每个 Agent 独立的 Context Window
- Agent View（2026 年 5 月新功能）——CLI 仪表板查看后台运行
- 成本优化：贵模型做 Orchestrator，便宜模型做 Worker，省 40-60%
- 三层结构（Orchestrator→Sub-Orchestrator→Worker）用于复杂任务

**来源**: 亲眼观察 Claude Code 运行 16 个并行 Agent + Agent View 文档学习

**关键收获**:
- 理解了"好消息，文件找到啦"这条消息的来源——Orchestrator 的实时通知
- 明白了 Context Window 不会被塞满的原因——Worker 各自独立
- 看到了五个概念的完整串联（Agent、Skill、MCP、Memory、Workflow）

---

## [v1.1] - August 4, 2026 (Evening)

### 📝 Daily Update - Harness 系统

**新增页面**:
- `docs/ai-application/harness-system.md` - Harness 系统完全指南

**概念**:
- Harness 的四个维度（工具、文件、Token、人工介入）
- 三层配置系统（CLAUDE.md → settings.json → 命令行）
- settings.json vs settings.local.json 的区别
- 被动积累 vs 主动设计的对比

**来源**: Belinda 对 Claude Code 日常使用的反思 + 真实的 settings.local.json 案例

---

## [v1.0] - August 4, 2026

### 🎯 初始发布

**新增页面**:

#### 📚 AI Core
- `agent-architecture.md` - Agent 系统架构完全指南
  - Agent 生命周期（6 个阶段）
  - 状态机与上下文窗口
  - 工具调用机制
  - 多 Agent 协调

#### 🛠️ AI Application
- `workflow-design-guide.md` - 工作流设计完全指南
  - 6 种节点类型（顺序、并行、条件、人工、循环、错误处理）
  - 关键设计模式（Fan-out/Fan-in、质量循环、人工瓶颈）
  - YAML 规范
  - 实战例子（日报生成、反馈循环）

#### 💼 Career Impact
- `model-to-system-war.md` - 从模型战争到系统战争
  - 两个时代的对比
  - 为什么转向系统竞争
  - 系统竞争的 4 个维度
  - 职业影响分析
  - 个人应对策略

#### 📖 Meta
- `index-all-concepts.md` - 概念快速索引
- `CONTRIBUTE.md` - 贡献指南
- `CHANGELOG.md` - 更新日志
- `README.md` - Wiki 主页

**概念总数**: 15+

**目标达成**:
- ✅ 建立基础架构
- ✅ 涵盖核心 AI 概念
- ✅ 分析职业影响
- ✅ 支持日增量更新

### 📊 统计

| 指标 | 数值 |
|------|------|
| 文件数 | 7 |
| 字数 | ~8,000 |
| 页面数 | 4 |
| 概念数 | 15+ |

### 🔮 下次计划（Aug 5-6）

待创建的页面：
- [ ] Skill 设计与实现
- [ ] 职业转变详细分析
- [ ] 个人能力路线图
- [ ] MCP 基础
- [ ] 工作流实战配置

---

## 如何使用这个日志

**每天新增内容后**:
```
## [v1.X] - August X, 2026

### 📝 Daily Update - [主题]

**新增**:
- [概念名]: [描述]

**更新**:
- [概念名]: [改进内容]
```

---

## 版本说明

### v1.0 (初版)
- 核心概念框架
- Agent 和工作流基础
- 职业影响分析

### v1.1+ (计划中)
- 实战应用例子
- 工具集成指南
- 团队协作最佳实践

---

## 贡献者

| 贡献者 | 角色 | 首次贡献 |
|--------|------|--------|
| Belinda Sun | 创始人 & 维护者 | Aug 4, 2026 |
| Claude | 内容生成 & 编辑 | Aug 4, 2026 |

---

**格式说明**:
- 📚 = 学习资源
- 🛠️ = 实战工具
- 💼 = 职业相关
- 📖 = Meta/维护
- 📝 = 日常更新
- ✨ = 特色/亮点
- 🐛 = Bug 修复

---

**最后更新**: August 4, 2026
