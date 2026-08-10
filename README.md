# Belinda's Learning Wiki

> 一个持续增长的个人学习知识库。主要记录 AI 学习，兼收其他感兴趣的话题。

## 📖 关于这个 Wiki

这不是一个一次性的知识库，而是一个**日积月累的学习记录**。

每天我会在这里添加新的学习内容——来自对话、论文、实验、思考。通过写下来、组织、建立关联，我把模糊的理解变成清晰的知识。

> "The best way to learn is to teach. The best way to remember is to write."

## 🗺️ 第一次来？

👉 **[Start Here](start-here.md)** —— 完全没有 AI 背景？花 30 分钟看完这 8 站，你会得到一张最小地图：AI/LLM/Model/Product 是什么关系、LLM 怎么工作、Chatbot 怎么变成 Agent、它跑在什么计算地基上、Workflow/Skill/MCP 这些词到底什么关系……看完之后，就能看懂这个 Wiki 里其他文章在聊什么了。

已经懂基础、想直接探索的话，往下看"结构"就行。

## 🚪 三扇门（怎么进来）

- 🗺️ **Learn** —— 我要系统学 → [Start Here](start-here.md)（30 分钟最小地图）
- 🔤 **Look Up** —— 我卡在一个词上 → [术语表](glossary.md) + [全部概念索引](index-all-concepts.md)
- 🧠 **Explore** —— 我想看想法怎么连起来 → [Mental Models](mental-models.md)

## 🗂️ 结构（五块知识领土，按依赖从地基到前沿排列）

```
🖥️ Computing Foundations 计算基础   ← 地基，导航排第一
  ├─ 🚀 Start（Foundation Zero → From Silicon to AI）
  ├─ 🧭 Orient（Three Maps：Software / Hardware / Software×Hardware）
  └─ 🔬 Go Deeper（五主脊，CPU vs GPU 等详情页嵌在各自脊下）

📚 AI Core 核心
  ├─ Agent 系统架构
  ├─ 大语言模型基础
  ├─ Prompt 工程
  └─ 系统设计

🛠️ AI in Practice 应用
  ├─ Skill 设计与实现
  ├─ 工作流设计模式
  ├─ MCP 与集成
  └─ 真实案例

🔬 AI Research 研究
  └─ 模型评估与优化方法

🌍 Industry & Impact 产业与影响（AI 遇上世界）
  ├─ AI 对职业的冲击
  ├─ 个人能力建设
  └─ 未来趋势

🎨 其他兴趣
  └─ [各种感兴趣的话题]
```

> 依赖关系上，Computing Foundations 是最底层的地基（AI Core 依赖它），但导航里列在第一项——用**排序**表达依赖，而不是把它嵌套进 AI Core 里。详见仓库根目录的 `CLAUDE.md`（Growth Rules 章节，维护笔记文件，不在网站上单独渲染）。

**Mental Models（心智模型）** 和 **Glossary + 全部概念索引** 不是领土，是横切所有领土的入口——见上面"三扇门"。

## 🚀 快速导航

- **[Start Here](start-here.md)** - 第一次来？从这开始，30 分钟建立最小地图
- **[术语表](glossary.md)** - 忘了某个词是什么意思？一句话查一下
- **[Computing Foundations](docs/computing-foundations/index.md)** - 计算机基础地图，知识图谱里的地基层
- **[AI Core](docs/ai-core/index.md)** - 深入理解 Agent、LLM、工作流
- **[AI in Practice](docs/ai-application/index.md)** - 如何设计和实现 AI 系统
- **[AI Research](docs/ai-research/index.md)** - 深入研究 AI 模型的优化和评估方法
- **[Industry & Impact](docs/career-impact/index.md)** - AI 时代的机遇与挑战
- **[心智模型变迁史](mental-models.md)** - 看世界方式的变迁轨迹
- **[全部概念索引](index-all-concepts.md)** - 按字母排序的所有主题

## 📝 如何阅读

这个 Wiki 的设计方式：

- **每个页面都是独立的**，可以随意跳转
- **页面之间有链接**，帮助你找到相关概念
- **从简到繁**，基础概念在前，高级话题在后

**建议阅读方式**：

1. 完全没背景？先走一遍 [Start Here](start-here.md)
2. 忘了某个词是什么意思，随时查 [术语表](glossary.md)
3. 如果你对 Agent 感兴趣，从 [Agent 架构](docs/ai-core/agent-architecture.md) 开始
4. 如果你好奇它跑在什么上面，从 [Computing Foundations](docs/computing-foundations/index.md) 开始
5. 如果你想实战，从 [Skill 设计](docs/ai-application/skills-business-landscape.md) 开始
6. 如果你想了解影响，从 [职业冲击](docs/career-impact/model-to-system-war.md) 开始

## 🔄 更新频率

- 每天新增 1-2 个新概念或更新
- 每周整理和优化结构
- 每个月回顾和深化

## 🤝 贡献

这是我的个人学习记录，但如果你有建议或发现错误，欢迎反馈！

看 [CONTRIBUTE.md](CONTRIBUTE.md) 了解怎样建议改进。

## 📚 最新更新

| 日期        | 主题                                     | 概念数 |
| ----------- | ---------------------------------------- | ------ |
| Aug 10, 2026 | AI Core 新增：AI Safety / Alignment 完全指南 | 6 |
| Aug 10, 2026 | AI Core 新增：Multimodal 完全指南       | 6      |
| Aug 10, 2026 | Prompt 工程 + Embeddings + RAG 三篇补齐 | 7      |
| Aug 10, 2026 | AI Core 新增：Training 训练系统完全指南 | 5      |
| Aug 10, 2026 | Bridge + Semiconductor Spine：五条主脊全部完成 | 3      |
| Aug 10, 2026 | Scale Spine 第一块内容：从 1 卡到千卡   | 1      |
| Aug 9, 2026 | Memory Spine 第一块内容：内存墙          | 4      |
| Aug 9, 2026 | Wiki V2 架构 + Three Maps + Compute Spine 第二块内容 | 11     |
| Aug 9, 2026 | Computing Foundations Phase 0：计算机基础地图 | 7      |
| Aug 9, 2026 | 推理基础设施与 Agent 延迟                | 5      |
| Aug 8, 2026 | Scaling Paradox：AI 越强系统为什么可能更差 | 3      |
| Aug 7, 2026 | Google AI 领导层重组                     | 2      |
| Aug 7, 2026 | Coding Agent 与 Agent 基础设施操作系统化 | 3      |
| Aug 6, 2026 | Domain Expertise 重估与组织变革          | 2      |

[查看完整更新日志](CHANGELOG.md)

---

**最后更新**: August 10, 2026  
**维护者**: Belinda Sun  
**License**: CC BY-SA 4.0
