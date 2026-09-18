# Decision Models — 不是每个决策都需要大语言模型

**核心概念/核心洞察**: 一个 AI 系统里的 inference 不必都交给同一种模型：Generative Inference（逐 token 生成文本）管语言交互，Decision Inference（结构化输入、类型化决策输出、校准置信度）管判断。Jev（TypeSafe AI，2026）是"系统一模型"的第一个例子——训练目标从"讨人喜欢"（RLHF）转向"置信度校准"（RLCD），这正是 Calibrated Trust 在模型侧的闭环。

**学习来源**: 2026年9月15日 TypeSafe AI 发布 Jev（Diogo Almeida 公开信 + 媒体报道）；与老贾（ChatGPT）的讨论：Model → Inference → Generative Inference → Decision Inference → Agent Architecture

📖 **完整学习对话记录**：本文即完整学习记录。

**第一次接触这个主题？** 建议先了解：[Inference](../../glossary.md#inference) · [LLM](../../glossary.md#llm) · [Agent](../../glossary.md#agent)

---

## 一、从哪接上：Inference 指南默认的一个前提

[Inference 推理系统完全指南](inference-system-guide.md)回答的是"一个模型内部怎么完成 inference"：输入流过权重网络，一次预测一个 Token，循环往复，答案就这样逐步生成。

但它默认了一个前提：**系统里所有的 inference，都由同一个大模型完成。** 会说话的模型，又负责聊天，又负责判断，又负责决策。

老贾建议这篇在知识树里这样接：

```text
Model → Inference → Generative Inference → Decision Inference → Agent Architecture
```

这篇就是这条链的中间两节：先把 Inference 拆成两种，再连回 Agent。

## 二、Generative Inference vs Decision Inference

先说清楚：这是一组**工作命名**，用来钉住一个有用的区分，不是业界统一术语。

**Generative Inference（生成式推理）**：输入自然语言 → 逐 token 生成自然语言。ChatGPT、Claude 平时做的就是这个。强项是语言交互：解释、写作、对话、把含糊变成清楚。

**Decision Inference（决策推理）**：输入结构化状态 → 输出类型化决策，并附带一个校准过的置信度。不生成自然语言。

|  | Generative Inference | Decision Inference |
|---|---|---|
| 输入 | 自然语言 | 结构化状态 |
| 输出 | 逐 token 文本 | 类型化决策 + 置信度 |
| 典型训练目标 | 让人喜欢、说得好（RLHF） | 置信度校准（RLCD） |
| 延迟 / 成本 | 秒级、按 token 计费 | 百毫秒级、输出免费 |
| 典型用途 | 和人对话 | 软件内部的判断 |

标题里的"LLM"指的就是左边这一类——生成式聊天大模型。标题不是说决策不需要智能，而是说：**不是每个决策都需要"先写一段话，再从话里抠出决策"。**

## 三、Almeida 的问题：chat 超人了这么多年，自动化去哪了

Diogo Almeida 是 RLHF 和 InstructGPT 的共同发明人之一——ChatGPT 背后的训练方法有他一份。2024 年他离开 OpenAI 创立 TypeSafe AI，2026 年 9 月 15 日发布第一个模型 Jev，种子轮约 4000 万美元（DCVC 领投）。

他的问题：

> After co-inventing ChatGPT, I kept asking myself: why have superhuman chat models not led to AGI?
> （共同发明 ChatGPT 之后，我一直在问自己：超人类的聊天模型，为什么没有带来 AGI？）

他的回答是：**chat 已经 solved，automation 还没有。** RLHF 把模型训成了"讨人喜欢的聊天者"，但顺带训出了三个毛病：啰嗦、过度自信、不可靠。这三个毛病恰恰把人钉在了 loop 里——输出越像人话，人越不敢放手让它自己干。

而软件要的根本不是段落，是决策：调哪个工具、下一步做什么、这笔请求批不批准、这个任务要不要转交给另一个模型。用 LLM 做这些，等于强迫软件先读散文、再从散文里抠决策：贵（token 烧在废话上）、慢（逐 token 生成要几秒）、不可靠（今天一个说法，明天换一个说法）。

## 四、2026 Case Study：Jev

Jev 是"系统一模型"（System One Models，借自 Kahneman 的 System 1 快思考）的第一个例子。注意这篇的定位：**Jev 是 case study，不是主角**——哪怕三年后这家公司没了，Generative vs Decision 的区分依然成立。

- **输入**：任务 / 工作流的当前状态（结构化数据）+ 一组类型化问题
- **输出**：三种原语——Choice（最多 255 个选项里选一个）、Score（打分）、是否概率；每个都带一个 0–1 的置信度
- **不能做什么**：没有聊天界面，不能生成字符串、代码、散文；32K 上下文；不支持图像输入
- **快**：端到端 70–500 毫秒（对比 LLM 的几秒）——因为跳过了逐 token 生成
- **便宜**：输入 $0.042 / 百万 tokens，输出免费；官方说法 20–200 倍快、40–400 倍便宜；一个 prompt 能并行吐几百个输出
- **训练方法 RLCD**：Reinforcement Learning for Calibrated Decisions（为校准决策做的强化学习）——新架构 + 新采样器 + 新训练方法，整个 stack 从零重写
- **名字的来历**：致敬 Jevons Paradox（杰文斯悖论）——智能越便宜，用得越多

关于"不会幻觉"，要诚实一点：Jev 的输出形状是被结构保证的，不可能吐出格式错乱的答案；**但一个格式合法的答案，照样可能是事实错误的**。Almeida 自己在发布讨论里也承认了这一点。这是"结构保证"，不是"训练突破"。

另外目前只有高层描述：没有公开权重，也没有足以让外部复现的论文。Early access 阶段，结论先打个问号。

## 五、为什么这不只是一个新产品：训练目标决定能支撑哪种信任

这才是老贾说的"连接比 Jev 本身更重要"。

**RLHF → RLCD：训练目标决定模型性格。** RLHF 优化的是"人看了喜不喜欢"，RLCD 优化的是"你报 0.9，就得十次对九次"。前者产出聊天者，后者产出决策者。RLHF 的完整故事见 [Training 训练系统完全指南](training-system-guide.md)。

**Calibration 从"人这边"的问题，变成了"模型这边"的训练目标。** 你 wiki 里已经有 [Calibrated Trust](../career-impact/scaling-paradox.md#两层信任框架trustworthiness-vs-calibrated-trust) 和 [Calibrated Autonomy](../career-impact/personal-agents-agent-economy.md#五calibrated-autonomy)：之前 calibration 是人的问题——我该多信任它、什么时候放手让它干。Jev 说明 calibration 也可以是模型的出厂属性：置信度本身被训准了，软件才能拿它做"自己干还是交出去"的决定。信任的校准，第一次有了模型侧的闭环。

**Agent loop 里的决策点，正是 Decision Inference 的位置。** [Agent 系统架构](agent-architecture.md)的"感知 → 决策 → 行动 → 反馈"循环里，藏着一连串小决策：选哪个工具、这步做得对不对、要不要升级给人。今天这些全走生成式 LLM；以后完全可以分工：语言交互归聊天模型，结构化判断归决策模型。[Agent Intelligence 三层框架](agent-intelligence-layers.md)里提到的 cascading / routing（一个 Agent 跑五六个模型），已经是这个方向的雏形。

TypeSafe 把这叫 "composable intelligence"：智能变成软件里可组合、可测试、可层层叠加的积木，而不是一个包办一切的黑箱大脑。

## 六、下一步

- Decision Inference 的评估标准（calibration 到底怎么测、怎么防刷分）还没看到好的公开讨论 → 见 [Evaluation 评估系统](../ai-research/evaluation-system.md)（待补充）
- "系统一模型"会不会成为一个真正的模型品类，还是 Jev 一家之言——过半年回来看

---

**最后更新**: September 18, 2026

**相关**:
- [Inference 推理系统完全指南](inference-system-guide.md) —— 这篇的起点："一个模型内部"怎么做 inference；本篇把问题推向系统层面
- [Training 训练系统完全指南](training-system-guide.md) —— RLHF 为什么训出"讨人喜欢的聊天者"；RLCD 是另一种训练目标
- [Agent 系统架构](agent-architecture.md) —— Agent loop 里的决策点，正是 Decision Inference 的落点
- [Agent Intelligence 三层框架](agent-intelligence-layers.md) —— cascading / routing：一个 Agent 跑五六个模型，已经是 inference 分工的雏形
- [Scaling Paradox：AI 越强，人机系统为什么可能反而更差](../career-impact/scaling-paradox.md) —— Calibrated Trust 的两层框架：这篇讲"人这边"怎么校准信任
- [Personal Agents — From Chatbots to an Agent Economy](../career-impact/personal-agents-agent-economy.md) —— Calibrated Autonomy：什么时候替我行动、什么时候停下来问我
