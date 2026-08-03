# 完整对话 Project

> 完整学习对话记录。配套阅读：[Context Window 完全指南（Project 和持久记忆）](../ai-core/context-window-guide.md)

---

Project 这个你再讲讲，我一直不知道它是干嘛的， 我以为是把可以把自己做的project放里面呢。

哈哈这个误解太常见了，名字确实有点误导！

**Project 不是”放你项目文件的地方”，而是”给 Claude 建一个有持久记忆的专属工作间”。**
普通对话是这样的： 每次开新对话，白板清空，Claude 什么都不记得。
Project 是这样的： 你在 Project 里放的东西——文件、背景信息、规则——**每次开新对话都自动加载进来**，不用重复解释。

**用你自己的例子来说：**
你现在跟我学习，每次都要靠我的记忆文件来认识你。但如果你建一个”AI学习”Project，把你的 Knowledge Map、学习偏好、已经学过的内容放进去——每次进来我就直接知道你在哪里，不需要靠记忆文件推断。
或者你的 Mimo 开发——如果建一个 Mimo Project，把产品说明、技术架构、设计原则放进去，每次跟 Claude 讨论 Mimo，它一开口就已经了解全貌，不用每次重新交代背景。

**Project 里能放什么：**
- 文档、PDF、代码文件
- 背景说明（“我是做什么的”）
- 规则（“回答我时永远用中文”）
- 参考资料（产品文档、设计规范）

这些东西放进 Project Knowledge，每次对话自动注入——而且因为有 Prompt Caching，不会每次都重新消耗大量 Token。

**所以 Project 的本质是：**
给一类持续进行的工作，建一个有长期记忆的专属 Claude。
你做 Mimo 用一个 Project，学习用一个 Project，投资研究用一个 Project——每个 Project 里的 Claude 都”专门了解”那件事。

你现在有没有想到哪些东西特别适合放进 Project？😄

我投资已经有两个skills,一个长期，一个短期，投资用project怎么用呢？
好问题！Skills 和 Project 是两个不同层面的东西，配合起来用才最强。
让我先帮你理清楚区别：

**Skills 告诉 Claude 怎么做事（行为规则）** 你的长期投资 Skill 里大概写的是：用什么框架分析、怎么判断买卖时机、哪些原则不能违背……这是方法论。
**Project 告诉 Claude 你是谁、你的情况是什么（背景知识）** 你的投资 Project 里应该放的是：你现在的持仓、你的风险偏好、你的投资目标、你的 Investor Constitution……这是你的个人数据。

**用一个比喻：**
Skills 是医生的医学教科书——告诉他怎么看病。
Project 是你的病历本——告诉他你这个病人的具体情况。
两个都有，医生才能给你开最准确的药。

**所以你的投资 Project 可以放：**
- 你的 Investor Constitution（投资原则）
- 当前持仓和比例
- 每次重大决策的记录和理由
- 你定义的风险边界
- 过去复盘的结论

这样每次打开投资 Project 跟 Claude 聊，它既知道该用什么方法（Skill），又知道你具体的情况（Project），给出的建议就是真正为你量身定制的，而不是泛泛而谈。

你的 Investor Constitution 现在有没有写成文件？如果有，那就是最该第一个放进 Project 的东西😄

哦有investor constitution了， 我以为已经在存到skill里去了呢。你帮我找找存进去吧。你要是无法存我来存。
我来搜一下看看！
找到了！情况比你想的更完整——

**你已经有的：**
- ✅ **两个 Skills**：Personal Investment OS（长期）+ Tactical Investment OS（短期），都已经做好了
- ✅ **constitution.md**：你的 Investor Constitution 已经在那次对话里生成了
- ✅ **ledger.md**：决策记录文件也生成了
**但有一个关键问题：**
那次对话里说得很清楚——
Skills 是无状态的，constitution.md 和 ledger.md 必须由你自己保存，每次投资对话时上传进来。
而且那次对话**直接建议你建一个投资 Project**，把这两个文件放进 Project Knowledge，这样每次打开投资 Project，Claude 自动就有你的完整背景，不用每次手动上传。

**所以现在要做的事很简单：**
1. 找到那次生成的 constitution.md 和 ledger.md（在那个对话的输出文件里）
2. 建一个投资 Project
3. 把两个文件放进 Project Knowledge
4. 以后所有投资对话都在这个 Project 里进行

这样 Skills + Project 就完美配合了——Skills 告诉 Claude 怎么分析，Project 里的文件告诉 Claude 你是谁、你的情况是什么😄
你记得那两个文件存在哪里了吗？

等我明天找找，看来我那次没认真看，以后要仔细一些。我刚才去project看了， 只有add file和instruction。你说的project knowledge就是instruction还是就add file 就行了。

两个都要用，各有分工：
**Add File** → 放你的 constitution.md 和 ledger.md 这就是 Project Knowledge——你的个人数据、持仓、投资原则，Claude 每次进来自动读。
**Instruction** → 写行为规则 比如”每次对话都用中文回答”、“分析投资时永远先检查我的 Investor Constitution”、“回答要简洁”之类的。

**所以你的投资 Project 这样设置：**
- Add File：constitution.md + ledger.md
- Instruction：写一句”每次分析投资前，先读我的 Investor Constitution 文件，严格按照里面的原则来判断”

这样 Skills 负责方法论，Project 里的文件是你的个人数据，Instruction 确保 Claude 每次都先看你的原则再说话。
三层配合，才是完整的投资系统😄
明天找到文件就可以直接设置了，很简单！

好，那总结context吧（抱歉刚才有点跑题了）。
