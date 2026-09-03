# AI Research · 模型改进地图

**核心概念**: AI Research 不只是追更大的模型或更新的架构，而是一个闭环：先定义“什么叫更好”，再提出改进方法，用可信的实验测量结果，最后检查模型究竟变好了，还是只学会了赢测试。当前这块领土先抓住两个最高杠杆的问题：怎样评估（Evaluation），以及怎样在能力与成本之间改造模型（Model Architecture & Compression）。

---

## 🚀 Start · 先学会判断，再讨论改造

### 01 — Evaluation

**什么叫“更好”？· 没有尺子，优化只是移动**

Benchmark、真实任务、偏好、安全性和成本可能给出不同答案。先理解评估怎样设计、怎样被“背题”或钻空子，才知道一个更高的分数究竟说明了什么。

→ [Evaluation 评估系统](evaluation-system.md)

### 02 — Model Architecture & Compression

**怎样让模型更强或更省？· 再看具体改造手段**

MoE 用路由把知识容量与每次计算成本部分解耦，量化和蒸馏则用不同方式压缩模型。每种优化都在交换东西：速度、成本、质量、稳定性，没有免费的“变小但什么都不丢”。

→ [Models 深挖：MoE 架构和压缩技术](models-deep-dive.md)

---

## 🧭 Orient · 用一个研究闭环组织问题

当前内容还不是一部 AI Research 百科，而是先搭一条能不断扩展的骨架：

### 1. Define · 先定义目标

你要优化的是准确率、推理速度、成本、安全性，还是某类真实任务的成功率？“更好”必须先对应到具体场景和约束。

### 2. Intervene · 再改变系统

可以改变数据、训练方法、模型架构、推理策略或压缩方式。当前的 Models 深挖从架构与压缩切入。

### 3. Measure · 用实验测量

同一个改动要和清晰的基线比较；指标还要覆盖真正关心的能力，而不只是方便测量的代理分数。

### 4. Audit · 最后审问结果

分数上涨可能来自真正的泛化，也可能来自数据污染、Reward Hacking 或只对 Benchmark 特化。研究闭环的最后一步，是确认你改进的是能力本身，不是成绩单。

```text
定义“什么叫更好” → 选择改造手段 → 设计实验 → 分析失败
        ↑                                      ↓
        └──────────── 升级问题与评估 ──────────┘
```

> 一个有用但不完整的近似：先把研究想成“改一个变量，看一个指标”。它适合建立实验意识，但真实模型训练里变量会相互作用，指标也常常互相冲突。随着这块领土增长，需要逐步补上数据、训练动力学、可解释性和更严格的因果判断。

## 🔬 Go Deeper · 三条现有研究线

### 想搞懂”怎样判断模型是否真的进步”

- [Evaluation 评估系统](evaluation-system.md) —— RLHF、Reward Hacking、Benchmark 与多指标冲突
- [AI Safety / Alignment](../ai-core/safety-alignment-guide.md) —— 为什么”通过测试”仍不等于目标真正对齐
- [Scaling Paradox](../career-impact/scaling-paradox.md) —— 为什么模型能力提升不保证人机系统结果同步提升

### 想搞懂”怎样在能力、速度和成本之间取舍”

- [Models 深挖](models-deep-dive.md) —— MoE、负载均衡、量化、蒸馏与剪枝
- [Inference 推理系统](../ai-core/inference-system-guide.md) —— 先理解这些改造最终影响的生成过程
- [Computing Foundations](../computing-foundations/index.md) —— 当瓶颈落到算力、内存和互连，继续向下追物理原因

### 想搞懂”AI 能否自动改善 AI 的对齐”

- [自动化对齐研究](automated-alignment-research.md) —— 弱模型+研究循环对齐更强模型、AAR 架构、作弊分类与监控
- [AI Safety 的三层防护框架](../ai-core/safety-three-layer-framework.md) —— AAR 属于 Alignment 层的自动化尝试
- [Harness > Model](../ai-application/harness-architecture-patterns.md) —— AAR 的 research harness 与 MEA Loop 的结构同源

### 这张地图还缺什么？

数据质量、训练动力学、可解释性、推理时优化和实验方法都值得继续长出来；在有足够内容支撑以前，它们先作为待探索方向，而不是假装已经存在的页面。

---

## 📖 完整学习对话记录

- [Evaluation](../conversations/evaluation.md) —— 正式版见 [Evaluation 评估系统](evaluation-system.md)
- [Models 深挖](../conversations/models-deep-dive.md) —— 正式版见 [Models 深挖](models-deep-dive.md)

---

**最后更新**: September 3, 2026

**相关**:
- [AI Core · 智能系统地图](../ai-core/index.md) —— Training、Inference 与模型机制的概念地基
- [Computing Foundations · 计算机基础地图](../computing-foundations/index.md) —— 模型实验最终受哪些物理资源约束
- [Industry & Impact](../career-impact/index.md) —— 技术指标进入产品、组织和市场后，为什么会改变含义
