# Learning Wiki 维护须知

Belinda 的个人 AI 学习笔记，每天手动加新内容。**不用 GitHub Pages / Jekyll 建站**，就是普通的 GitHub 仓库，直接在 `github.com/BelindaSun/learning-wiki` 网页上浏览——GitHub 会自动把 `README.md` 渲染成仓库首页，点里面的链接能在各个 `.md` 文件之间跳转。

之前折腾过一阵 Jekyll + GitHub Pages 建站，结果每次加内容都会因为 front matter、插件白名单、主题布局这些隐藏规则连带弄坏别的页面（首页 404、链接指向 `.html` 却找不到文件等等），所以后来**整个删掉了**，改回最简单的纯 GitHub 浏览。**不要再建议或加回 Jekyll、`_config.yml`、`_layouts/`、GitHub Pages 相关的东西。**

## 链接规则（最重要，之前一直在这里出错）

所有页面间的链接，只用**标准 Markdown 链接 + 相对路径**，别的写法都不行：

```markdown
✅ [Agent 架构](docs/ai-core/agent-architecture.md)          <- 从仓库根目录链接到 docs 下的文件
✅ [Skill 设计](../ai-application/skills-business-landscape.md) <- 从 docs/ai-core/ 下链接到 docs/ai-application/ 下的文件
✅ [Agent 架构](agent-architecture.md)                        <- 同一个文件夹内互相链接
```

**绝对不要用**：
- `[[概念名|显示名]]` 双方括号 wiki 链接语法 —— 没有任何工具会渲染它，只会原样显示方括号
- 开头带 `/` 的绝对路径，比如 `[链接](/docs/xxx.md)` —— 在 GitHub 网页上会被解析成域名根目录，404
- `{{ site.baseurl }}` 之类的 Jekyll 模板语法 —— 早就不用 Jekyll 了，写了也不会被处理，原样显示
- 链接指向 `.html` 文件 —— 仓库里只有 `.md` 源文件，没有 `.html`，会 404
- YAML front matter（文件开头的 `---\nlayout: ...\n---`）—— 不需要，纯粹是给 Jekyll 用的，现在没用了

## 新增一篇学习笔记的标准流程

1. 按主题放对文件夹：`docs/ai-core/`、`docs/ai-application/`、`docs/ai-research/`、`docs/career-impact/`
2. 文件名用小写连字符命名，比如 `docs/ai-core/new-concept.md`
3. 页面内容参考 `CONTRIBUTE.md` 里的"页面结构"模板（标题、核心概念、目录、正文小节、下一步、最后更新+相关）
4. 写完之后，记得去两个地方**手动加相对路径链接**，不然这篇新文章没人能找到：
   - 对应的 `docs/<分类>/index.md`（比如加了 ai-core 的新文章，就去 `docs/ai-core/index.md` 加一行）
   - `index-all-concepts.md`（按字母或按主题加进对应分类）
5. 如果这篇新文章和已有文章相关，在新文章底部"相关"里加相对路径链接指回去，**同时**去被链接的旧文章里，也加一条链接指向这篇新文章（双向链接，别偷懒只加一边）
6. 如果提到的相关概念还没写成独立页面，就写成纯文字 + "（待创建）"，不要写假链接（这是仓库里已有的约定，参考 `docs/ai-core/agent-architecture.md` 底部"下一步"部分的写法）

## docs/conversations/ 是什么

`docs/conversations/` 放的是每个主题学习时，跟 Claude 完整对话的原始记录（从 Apple Notes 导出、清理过格式）。每篇正式的指南页面（比如 `docs/ai-core/memory-system-guide.md`）如果有对应的完整对话，会在开头"学习来源"下面加一行：

```markdown
📖 **完整学习对话记录**：[Memory](../conversations/memory.md)
```

以后新加内容，如果 Belinda 有完整对话记录想保留，同样放进 `docs/conversations/`（文件名小写连字符），再从对应的指南页面加一行链接过去。这类对话记录不需要写成"页面结构"模板，原样保留对话内容就行，是给"想深入学习"的人看的补充材料，不是正式指南。

## start-here.md 是什么

根目录的 `start-here.md` 是给**完全没有 AI 背景的新读者**准备的最小地图，8 个节点，目标是"30 分钟建立最基本的认知框架，然后能看懂 Wiki 其他文章在聊什么"。这不是课程（不要用 Lesson 1/2/3、进度百分比这种说法），每个节点是一个轻量的 orientation page：一个问题 + 一句话答案 + 最简单的解释/结构图 + 3 件要记住的事 + 常见误解 + Related concepts + Go Deeper 链接。

**核心原则**：
- **不重写深度内容**——每个节点尽量复用/链接现有文章，只补"入门这一层"缺的东西。深度文章保持原来的深度，不要为了照顾新手把正文写得幼稚
- **不是唯一入口**——`start-here.md` 只帮读者跨过最初的门槛，之后就该放手让他们自由探索，别把 Wiki 变成"一个人试图教全世界 AI"
- 如果以后新增了一类目前 7 站没覆盖到的基础困惑（比如新读者反复卡在同一个概念），可以加第 8 站，但先确认现有内容里没有更合适的位置能解决

## 写作时避免过度绝对化的表述

技术类文章容易把"某一种简单实现"写成"普遍规律"（比如曾经写过"conversation_history 就是 Agent 的整个状态"，但这只在最简单的 Agent 实现里成立）。以后写这类内容，遇到业界没有统一标准、或者只是某个具体例子的情况，优先用：

- "一种常见实现是……" / "最简单的情况下……" / "在某些 Agent 系统里……" / "当前业界没有统一定义……"

少用绝对化的词：「就是」「完全是」「唯一」「全部」「整个」——除非确实是无可争议的事实。可以为了直觉简化（simplification for intuition），但不能简化到失真（simplification that changes the concept）。

## mental-models.md 是什么

根目录的 `mental-models.md`（和 `index-all-concepts.md` 平级）是一个**跨分类的索引页**，不是新的内容分类。放的是"心智模型变迁"——每次 Belinda 对某个问题"原来怎么想、现在怎么想"的转折点，每条只写一句话 + 日期 + 链接回完整文章，不重复展开论证。

这类"原来 vs 现在"的内容本来就是每篇日常学习文章自带的板块（见 `CONTRIBUTE.md` 页面结构模板），`mental-models.md` 只是把这一层单独提炼出来做成时间线，方便回头看思维轨迹，**不是重写或搬迁内容**。

以后新文章如果有清晰的"原来我以为 X，现在觉得是 Y"这种转折（一般是像 `docs/career-impact/` 下这类"日常学习总结"型文章才有，纯技术讲解型指南不用强求），就：
1. 用一个短标签概括这次转折，格式仿照已有的 `X → Y`（比如 `Capability → Trust`）
2. 在 `mental-models.md` 里按时间顺序加一条，链接回完整文章
3. 反过来去那篇文章的"相关"里加一条链接指回 `mental-models.md`

## glossary.md 是什么

根目录的 `glossary.md`（"术语表"）是给完全没背景的新手准备的——每个词只给一句大白话解释（1-2 句话），不展开论证，跟 `index-all-concepts.md`（假设读者已经知道背景，直接链接到深入文章）是互补关系，不是重复。

写正式指南文章时，如果用到的核心名词（Skill、Agent、MCP 这类）本身从来没有被解释过就直接开始深入分析（比如"Skills 和商业格局"曾经犯过这个错——通篇讲 Skill 的商业格局，却没有一句话说清楚 Skill 到底是什么），要在文章开头补一个简短的"XXX 是什么（基础概念）"小节，再往下展开。同时把这个词的一句话定义加进 `glossary.md`，保持两边同步。

## learning-wiki-site 是什么（重要：影响怎么写文章）

`github.com/BelindaSun/learning-wiki-site` 是这个 Wiki 的展示网站（[learning-wiki-site.vercel.app](https://learning-wiki-site.vercel.app)），是**完全独立的项目**，构建时自动拉取这个仓库的内容渲染成网页。不需要给这个仓库的文件加任何东西来"配合"网站，但网站的解析逻辑依赖几个**已有的写作习惯**，破坏了这些习惯网站会解析错：

- **标题** = 文件里第一个 `# ` 一级标题，必须是文件的第一行内容
- **高亮框** = 标题后紧跟着的第一行 `**xxx**: ...`（或 `**xxx**：...`）格式的加粗行（比如 `**核心概念**:` 或 `**核心洞察**:`），网站会自动把这行提出来做成页面顶部的高亮摘要框
- **分类** = 文件所在的文件夹路径（`docs/ai-core/` → AI Core 分类），跟现有目录结构保持一致就行
- **最后更新** = 文章底部 `**最后更新**: ...` 这一行会被提取显示

这些都是已有约定，正常按 `CONTRIBUTE.md` 的页面结构模板写文章、不故意打破格式，网站那边就不会出错。每次往这个仓库 push，网站会通过 GitHub Action（`.github/workflows/notify-site.yml`）自动触发 Vercel 重新构建，几分钟内网站自动同步，不需要额外操作。

## 知识架构 V2（五块领土 + 三扇门 + Growth Rules）

2026-08 做过一次结构迁移（V1 → V2），把之前压在一层的"领土 / 横切透镜 / 进入方式"三件事分开了。以后加内容、想文章该放哪，按这套结构判断：

**五块知识领土**（导航顺序 = 依赖顺序，地基排第一）：
1. `docs/computing-foundations/` Computing Foundations 计算基础 —— 地基，读懂 AI 所需的最小计算基础
2. `docs/ai-core/` AI Core 核心 —— LLM、Agent、Prompt、系统设计
3. `docs/ai-application/` AI in Practice 应用 —— Skill、工作流、MCP、案例
4. `docs/ai-research/` AI Research 研究 —— 训练、评估、优化
5. `docs/career-impact/` Industry & Impact 产业与影响 —— AI 遇上世界：经济、职业、社会

注意：**知识图谱（概念依赖）≠ 网站导航层级**。Computing Foundations 在依赖关系上是最底层的地基（AI Core 依赖它），但在导航/文件夹层级上是**顶层领土**，不嵌套在 AI Core 下面——用"排序"表达依赖，不用"嵌套"表达依赖。

**三扇门**（横切所有领土，不是领土本身）：
- 🗺️ Learn = `start-here.md`
- 🔤 Look Up = `glossary.md` + `index-all-concepts.md`（合并成一个入口）
- 🧠 Explore = `mental-models.md`

`mental-models.md` 不再和五块领土并列，它是一条贯穿所有领土的横切透镜，记录"理解怎么变化"，不是"内容住在哪"。

**Growth Rules（新概念该放哪）**：
1. 一个概念只住**一块家领土**——按它主要依赖/属于哪一层归属，不要同一概念在多块领土各写一份。
2. 一个家，多条链接：可以加 ↓ 向下链接（到它踩的地基）、→ 横向链接（到相关概念），但**不复制内容**。这类 down/across 链接目前**没有全站铺开**，只在个别真正需要的地方加，Computing Foundations 内容更充实之后再逐步补。
3. `glossary.md` 只是**指针**，每个词条一句话解释 + 链接到概念的家页，不放真正内容。
4. **新开顶层领土的门槛很高**：只有当一块知识（a）概念很多、（b）被多块现有领土依赖或依赖多块、（c）塞不进任何现有领土的子节，三者同时成立，才新开顶层领土（这正是 Computing Foundations 当初够格的原因）。默认新东西是某个现有领土的**子节**（子页面），不是新领土。
5. `mental-models.md` 只记**理解的变化**（原来以为 X，后来发现 Y），不记事实本身；事实住在它所属的领土页面里。

## Computing Foundations · Future Notes（已知的入门近似，先记下，不用现在改）

Three Maps（2026-08-09 上线）里有两处是刻意的"先给一个够用的近似，以后再升级"，不是错误，但值得记下来，等对应内容真正写到那一层时再处理：

1. **Software Map 待升级**：现在"模型权重由 Runtime 执行"是入门近似。以后应该拆分成 model representation / framework / execution runtime 三个不同的角色，而不是笼统地都叫"Runtime"。触发时机：写到能撑起这个区分的深度内容时。
2. **Software × Hardware Map 待升级**：现在 Compiler → Kernel/Library → Runtime → Hardware 是一条 orientation 用的简化直线。Bridge Spine 展开时要说清楚：真实的 stack 并不是严格线性的，scheduling/batching/precision/memory 这些决策分散在不同层，不是 Runtime 一个点说了算。触发时机：写 Bridge Spine 正文时。

这两条不需要现在改网页——只是提前记下"这里以后要回来修"，避免忘记这是简化过的版本。

## 提交

```bash
cd ~/Downloads/learning-wiki
git add <改动的文件>
git commit -m "Add: <主题>"
git push origin main
```

不需要等网站构建，push 完刷新 github.com 仓库页面就能看到。

## 参考

仓库里的 `CONTRIBUTE.md` 有完整的写作标准和链接规范，加内容前建议先看一眼确认最新状态（万一之后又改过）。
