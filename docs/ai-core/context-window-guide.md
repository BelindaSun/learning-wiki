# Context Window 完全指南

**核心概念**: Context Window 是 Claude 每次能看到的所有内容，Token 是衡量空间的单位。管理好白板才能让 Claude 持续聪明。

**学习来源**: Claude 直接对话学习  
**最大收获**: 系统提示词、记忆文件、工具调用结果——这些看不见的东西也在悄悄占白板空间。

📖 **完整学习对话记录**：[Context Window](../conversations/context-window.md)、[Project](../conversations/project.md)

---

## 目录

1. [Context Window 和 Token](#context-window-和-token)
2. [白板上实际放了什么](#白板上实际放了什么)
3. [窗口满了怎么办](#窗口满了怎么办)
4. [Project 和持久记忆](#project-和持久记忆)
5. [Prompt Caching 原理](#prompt-caching-原理)
6. [Lost in the Middle](#lost-in-the-middle)
7. [实战管理](#实战管理)

---

## Context Window 和 Token

### 定义

**Context Window**：Claude 每次能看到的所有内容的总和。

**Token**：衡量这些内容的单位。

### 可视化

```
┌─────────────────────────────────────────────┐
│          Context Window（白板）              │
│         100 万 Token 的容量                 │
├─────────────────────────────────────────────┤
│  系统提示词                 ← 占 5,000 Token │
│  用户记忆文件              ← 占 10,000 Token│
│  Project Knowledge 文件    ← 占 20,000 Token│
│  工具定义                  ← 占 3,000 Token │
│  对话历史                  ← 占 50,000 Token│
│  用户最新消息              ← 占 1,000 Token │
│  [还有 912,000 Token 可用]                 │
└─────────────────────────────────────────────┘
```

### Token 的衡量

**一般规则**：
```
1 个英文单词 ≈ 1.3 个 Token
1 个中文字 ≈ 1-2 个 Token

例子：
  "Hello world" = 2 个单词 ≈ 2-3 个 Token
  "你好世界" = 4 个字 ≈ 4-8 个 Token
```

**为什么不是 1:1**：
```
Token 不完全按字数算
标点符号、空格、代码符号都有自己的 Token 成本
比如代码比纯文本 Token 数更多
```

### 顶级模型的窗口大小

```
Claude 系列（2026）：
  ├─ Claude Fable 5: 100 万 Token
  ├─ Claude Opus 4.8: 100 万 Token
  └─ Claude Sonnet 5: 100 万 Token

对标其他模型：
  GPT-4o: 128K Token
  Gemini 2.0: 100 万 Token
```

### 有效利用范围

```
理论 Context: 100 万 Token

实际有效范围: 50-65 万 Token

Claude 系列衰减最慢
  意思是：在窗口边缘还能保持相对较好的质量
  但也不是完全没有衰减
```

---

## 白板上实际放了什么

### 第 1 层：系统提示词（不可见）

```
用户看不到，但 Claude 每次都在用的东西

例子（Mimo）：
  """
  你是 Mimo，一个关爱的家庭 AI。
  你的工作是帮助用户理解家庭成员，
  给出建议，协助日常决策。
  你的决策原则是...
  [5000-10000 Token]
  """

每次对话这些都在白板上
用户没发 Token，但被占用了
```

系统提示词和你自己写的 Prompt，是两种不同的"说话身份"——为什么要分开、怎么分工，见 [Prompt 工程完全指南](prompt-engineering-guide.md#system-和-user两种不同的说话身份)。

### 第 2 层：记忆文件（半可见）

```
用户知道有，但看不到完整内容

例子（Mimo 的记忆）：
  Layer 1: 当前聊天记录
  Layer 2: 最近摘要（"妈妈头疼"）
  Layer 3: 家庭事实库
  Layer 4: 今日状态
  Layer 5: 运行时权重
  
  总计: 10,000-30,000 Token
```

### 第 3 层：Project Knowledge 文件（可见）

```
用户主动上传或指定的文件

例子（Investor Constitution）：
  constitution.md: 投资原则（3,000 Token）
  ledger.md: 投资记录（2,000 Token）
  
  总计: 5,000 Token
```

### 第 4 层：工具定义（不可见）

```
系统告诉 Claude 有哪些工具

例子：
  {
    "tools": [
      {"name": "read_file", "description": "..."},
      {"name": "write_file", "description": "..."},
      {"name": "send_email", "description": "..."}
    ]
  }
  
  总计: 2,000-5,000 Token
```

### 第 5 层：对话历史（可见）

```
用户和 Claude 的往来

例子：
  用户: "..."
  Claude: "..."
  用户: "..."
  Claude: "..."
  [这一部分增长最快]
  
  总计: 变化范围 1,000-500,000 Token
```

### 第 6 层：工具调用结果（半可见）

```
Claude 调用工具后的结果

例子：
  Claude: 我来帮你读这个文件
  [Tool Use: read_file("data.csv")]
  Tool Result: [CSV 内容: 50,000 Token]
  
  这个结果也占白板空间！
```

### 完整占用示例

```
一个完整的对话在白板上：

系统提示词           5,000 Token
Mimo 的 5 层记忆     20,000 Token
Project 文件         10,000 Token
工具定义             3,000 Token
对话历史（30 条）    15,000 Token
当前工具调用结果     8,000 Token
┌─────────────────────────────┐
│ 总占用: 61,000 Token        │
└─────────────────────────────┘

还剩 939,000 Token
看起来很多，但如果：
  对话越来越多（+10,000 Token/轮）
  上传大文件（+50,000 Token）
  工具调用频繁（+5,000 Token/次）
  
很快就会接近限制
```

---

## 窗口满了怎么办

### 方式 1：硬截断（Truncation）

**工作原理**：
```
当窗口快满时
系统粗暴地扔掉最早的内容

例子：
  早期对话: "我妈妈叫王阿姨"
  中间对话: [很多很多对话]
  最新对话: "对了，我妈妈是谁？"
  
  硬截断: 删掉最早的对话，只保留最新的
  结果: Claude 忘记了"王阿姨"
```

**优点**：简单粗暴

**缺点**：丢失信息，用户感觉"被遗忘"

### 方式 2：Compaction（压缩）

**工作原理**：
```
不是粗暴删除
而是智能压缩早期内容成摘要

例子：
  早期对话:
    用户: "我妈妈叫王阿姨，住在北京"
    Claude: "好的，记下了"
    用户: "她最近身体不太好"
    Claude: "理解，希望她健康"
    [...20 条对话...]
  
  压缩成:
    摘要: "用户的妈妈王阿姨，住北京，最近身体不好"
    [只占 500 Token，原来占 3,000 Token]
```

**优点**：保留信息，节省空间

**缺点**：摘要可能丢失细节

### Claude 的现状

```
Claude 系列用 Compaction
（不用硬截断）

好处：
  主动管理永远比被动压缩好
  用户应该主动清理和管理
  而不是等 Claude 自己压缩
```

### 主动管理的方式

**方式 1：定期清理**
```python
# Mimo 的做法
if len(chat_history) > 50:
    # 保留最新 20 条
    # 压缩为摘要
    # 删除中间的
```

**方式 2：分层存储**
```
热记忆: Context 里保留最新 20 条
暖记忆: 数据库里保留摘要
冷记忆: 长期归档
```

**方式 3：使用 Project**
```
不把所有东西都塞进 Context
而是放进 Project Knowledge
只需要一开始加载一次
后续自动缓存复用
```

---

## Project 和持久记忆

### Project 不是"放项目文件的地方"

**误解**：
```
❌ Project = 云盘，放我的项目文件
```

**正确理解**：
```
✅ Project = 有持久记忆的专属工作间
   每次对话都自动加载背景
   建立一类持续工作的上下文
```

### Project 的两个要素

**第 1 部分：Add File（数据文件）**

```
放什么：
  - constitution.md（原则文件）
  - ledger.md（账目记录）
  - rules.md（规则）
  - 任何"长期数据"

特点：
  ✓ 每次对话自动加载
  ✓ 不用手动上传
  ✓ 自动缓存（读取便宜）
```

**第 2 部分：Instruction（行为规则）**

```
写什么：
  "你是投资经理，遵循这些原则..."
  "处理家庭决策时，考虑这些因素..."
  "回答格式必须是..."

特点：
  ✓ 系统提示词的补充
  ✓ 项目级的定制化
  ✓ 每次对话自动应用
```

### Skills vs Project vs Instruction

**三层配合**：

```
Skills（通用方法论）
  例：决策框架、分析方法
  应用范围：所有对话
  定位：跨项目通用

Project（个人数据 + 背景）
  例：constitution.md、family_facts.md
  应用范围：特定项目的对话
  定位：项目专属

Instruction（行为规则）
  例："你是投资经理"
  应用范围：特定项目对话的角色定义
  定位：项目的个性化
```

### 完整使用

```
对话开始时，Claude 自动加载：

1. 系统提示词（全局）
2. Skill 定义（全局方法论）
3. Project Instruction（项目个性）
4. Project Files（项目数据）
5. 记忆系统（用户背景）

结果：Claude 对项目的理解很完整
```

---

## Prompt Caching 原理

### 白板比喻

```
普通对话（每次都重新画）：
  第 1 次: [系统提示词] [记忆] [对话] ← 全部新画，花完整 Token
  第 2 次: [系统提示词] [记忆] [新对话] ← 又全部重新画，再花完整 Token

Prompt Caching（拍照复用）：
  第 1 次: [系统提示词] [记忆] [对话] ← 全部新画，花完整 Token
          └─ 拍张照存起来（缓存这部分）
  
  第 2 次: [照片] + [新对话] ← 只新画新对话，便宜得多
          缓存部分只需要标准价格的 10%
```

### 缓存的匹配原理

```
系统提示词 + Project 文件 + 记忆
这部分每次对话都是一样的
  ↓
放在请求最前面作为"前缀"
  ↓
Anthropic 检测到前缀相同
  ↓
直接用缓存版本，不重新处理
  ↓
省钱 + 快速
```

### Project Knowledge 的自动缓存

```
API 层面（开发者）：
  需要手动标记哪些内容要缓存
  不是全自动的

Claude Code 和 claude.ai（用户）：
  缓存是默认开启的
  系统提示词、工具定义、CLAUDE.md 自动缓存
  不需要手动设置

Project Knowledge 里的文件：
  Anthropic 会自动缓存
  不需要任何操作
  享受 10% 的缓存价格
```

### 缓存会被破坏的情况

```
缓存是基于完全相同的内容
哪怕一个空格不同，缓存就失效

例子：
  第 1 次: constitution.md（1000 字）
          → 缓存建立，花标准价格
  
  第 2 次: 修改了一句话
          → 整个文件内容变了
          → 缓存失效
          → 整个文件要重新处理，花标准价格
```

### 实战建议

```
什么文件适合放 Project（稳定，缓存效果好）：
  ✅ constitution.md（原则，很少改）
  ✅ family_facts.md（家庭信息，相对稳定）
  ✅ rules.md（规则，一旦定好就不改）

什么文件要注意（频繁改动，缓存失效）：
  ⚠️ ledger.md（每次都追加新内容）
     影响：每次追加后缓存失效
     建议：可以接受，因为文件本身不大
  
  ⚠️ log.md（实时日志）
     影响：几乎每次都变化
     建议：不适合放 Project，用记忆系统代替
```

---

## Lost in the Middle

### 现象

```
当 Context Window 有 100 万 Token 时
Claude 的注意力分布并不均匀

前面（第 1-20 万 Token）：清晰记得，质量高
中间（第 20-80 万 Token）：质量下降，注意力最弱
后面（第 80-100 万 Token）：相对恢复，因为最新

曲线：
      注意力强度
      ↑
      │     ╱╲
      │    ╱  ╲    ╱
      │   ╱    ╲  ╱
      │  ╱      ╲╱
      └─────────────→ Context 位置
        前  中  后
```

### 为什么会这样

```
原因 1：最新的内容最重要
  后面的是最新对话，最相关
  
原因 2：前面的内容已经"消化"了
  早期内容已经被总结成摘要
  Claude 不需要看原文
  
原因 3：中间是过渡带
  既不是最重要的新内容
  也没有被很好地摘要
  所以质量最差
```

### 实战影响

```
如果你在 Context 中间埋了一个重要信息
Claude 可能会"视而不见"

例子：
  [系统提示词]
  [记忆文件]
  [对话 50 条]
  
  ← Claude 注意力最弱的地方
  
  [你的重要指示]  ← 可能被忽视！
  
  [对话继续]
```

### 规避方案

**方案 1：放在开头**
```
重要的系统规则
  ↓
  放在最前面（但要在系统提示词之后）
  ↓
  Claude 能清晰看到
```

**方案 2：放在最后**
```
最新的对话
和重要补充
  ↓
  放在对话最后
  ↓
  Claude 注意力最强
```

**方案 3：主动强调**
```
如果一定要放中间
就主动强调：

"接下来这段很重要，要仔细看：
..."

或用视觉突出：
"⚠️⚠️⚠️ 重要！ ⚠️⚠️⚠️"
```

### Claude 系列衰减最慢

```
对比其他模型：
  GPT-4o: 衰减很明显，中间质量下降一半
  Gemini: 衰减相对缓和
  Claude: 衰减最慢，即使边缘也能保持较好质量
  
但"最慢"不等于"没有"
还是要注意管理
```

---

## 实战管理

### Mimo 的 Context 管理案例

**为什么只保留 22 条历史？**

```
context_limit = 100 万 Token
系统消耗:
  - 系统提示词: 10,000
  - 5 层记忆: 25,000
  - 工具定义: 3,000
  - 缓冲空间: 50,000
  ├─ 小计: 88,000
  
剩余: 912,000

但是：
  - 用户可能上传大文件: +50,000
  - 中间可能有多轮对话: +20,000
  - 工具调用结果: +10,000
  
保险的做法：
  保留最新 22 条（≈10,000 Token）
  + 自动摘要（≈5,000 Token）
  
这样即使用户上传大文件，也不会爆炸
```

### 投资系统的 Context 管理

```
Investor Constitution + Skills + Personal Investment OS

三层配合：

第 1 层：通用方法（Skill）
  投资框架、决策流程
  → 5,000 Token

第 2 层：个人原则（Project Instruction）
  "我是 value investor，这是我的投资哲学"
  → 2,000 Token

第 3 层：个人数据（Project Files）
  constitution.md: 投资宪法
  ledger.md: 投资记录
  → 5,000 Token

第 4 层：当前对话
  用户问题 + Claude 分析
  → 10,000 Token

总计: 22,000 Token
还剩 978,000 Token 余量
```

### 三个管理原则

**原则 1：只把值得的东西放白板**

```
不要：
  ❌ 把 100 万字的书全部放进 Context
  ❌ 所有历史对话都保留
  ❌ 重复的内容保留多份

要：
  ✅ 只保留"必需"的内容
  ✅ 定期清理，压缩摘要
  ✅ 用 Project 做持久化
```

**原则 2：重要内容位置要优化**

```
系统提示词
  ↓
Project Instruction（行为规则）
  ↓
Project Files（关键数据）
  ↓
[对话历史]（越往下越新）
  ↓
用户当前消息（最新，最重要）
```

**原则 3：Project Knowledge + Caching 是最聪明的方式**

```
长期内容放 Project：
  ✅ 自动加载（省手动上传）
  ✅ 自动缓存（省钱）
  ✅ 版本管理（容易更新）
  ✅ 跨对话复用（高效）

短期内容在对话里：
  ✅ 灵活处理
  ✅ 不用持久化
  ✅ 对话结束自动清理
```

---

## 关键洞察

### 从"文件上传省 Token"到"理解 Caching"

```
之前的误解：
  "上传文件比粘贴省 Token"
  
真实情况：
  "上传和粘贴的 Token 数一样"
  
真正的优势：
  "通过 Project + Caching 能省钱和时间"
  "但需要理解整个系统"
```

### Context Window 不只是容量问题

```
不只是"够不够大"
还关乎：
  - 信息的质量分布（Lost in the Middle）
  - 信息的组织方式（什么放哪里）
  - 缓存策略（什么复用）
  - 主动管理（什么时候清理）

这些都会影响 Claude 的"聪明度"
```

### Memory 和 Context 的区别

```
Memory（跨对话）：
  怎样记住历史信息
  需要持久化存储

Context（单次对话）：
  怎样管理当前窗口
  需要优化白板空间

两个问题不同
解法也完全不同
但互相配合
```

---

## 下一步学习

- 🔍 Prompt Caching 深度指南（待创建）
- ⚙️ Context 优化最佳实践（待创建）
- 🤝 多 Agent Context 分配（待创建）

---

**最后更新**: August 4, 2026（基于 July 31 学习）  
**相关**:
- [Memory 系统](memory-system-guide.md)
- [Skill 设计](../ai-application/skills-business-landscape.md)
- [Workflow 编排](workflow-orchestration.md)
- [MCP 协议](../ai-application/mcp-protocol-guide.md)
- [Prompt 工程完全指南](prompt-engineering-guide.md) —— 系统提示词在 Prompt 工程里扮演的角色
- [RAG 完全指南](../ai-application/rag-guide.md) —— Context 容量有限，是 RAG 存在的原因之一
- [Multimodal 完全指南](multimodal-guide.md) —— Context 里放的不再只有文字
- [Agent Intelligence 三层框架](agent-intelligence-layers.md) —— compaction、context rot、prompt caching：Agent 多轮场景下 context 的资源管理
