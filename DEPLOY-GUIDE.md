# Learning Wiki 文章部署完整流程

> 这篇是给协作 Agent 的操作手册。Belinda 提供一篇新的学习笔记原文后，按以下流程部署到 Wiki 里。每一步都有"做什么"和"怎么做"，按顺序执行，不要跳步。

---

## 前置信息

- **仓库路径**：`~/Project/learning-wiki`
- **远程**：`origin` → `https://github.com/BelindaSun/learning-wiki.git`，分支 `main`
- **展示网站**：[learning-wiki-site.vercel.app](https://learning-wiki-site.vercel.app)，push 后自动构建，无需额外操作
- **当前版本**：v6.4（2026-09-14），概念总数 139
- **语言**：文章写中文，同时创建 `.en.md` 英文翻译

---

## Step 0：理解文章内容

拿到 Belinda 的原文后，先通读一遍，提取：

1. **文章属于哪块领土**（决定放哪个文件夹）：
   - `docs/computing-foundations/` — 计算基础（硬件、芯片、内存、网络）
   - `docs/ai-core/` — AI 核心（LLM、Agent、Safety、模型架构）
   - `docs/ai-application/` — AI 应用（Harness、Workflow、MCP、RAG）
   - `docs/ai-research/` — AI 研究（训练、评估、对齐研究）
   - `docs/career-impact/` — 产业与影响（经济、职业、竞争、社会）
   - `docs/beyond/` — AI 之外的系统学习话题

2. **新增了哪些概念**（要加进 `index-all-concepts.md` 和 `glossary.md`）

3. **心智模型转折**（"原来以为 X，现在觉得是 Y"）→ 要加进 `mental-models.md`

4. **和哪些已有文章相关**（要加双向链接）

5. **学习来源**（论文、博客、访谈等）

---

## Step 1：创建文章文件

### 1a. 文件命名

```
docs/<领土>/文章名.md
```

- 小写，用连字符 `-` 分隔单词
- 例：`docs/career-impact/pacing-ai-frontier.md`

### 1b. 文章格式（必须严格遵守）

```markdown
# 标题（必须是文件第一行，前面不能有空行或 YAML front matter）

**核心概念/核心洞察**: 一句话总结（这行会被网站提取为高亮摘要框）

**学习来源**: 来源描述

📖 **完整学习对话记录**：[标题](../conversations/文件名.md)
（如果没有对话记录，写：📖 **完整学习对话记录**：本文即完整学习记录。）

**第一次接触这个主题？** 建议先了解：[前置概念1](相对路径.md) · [前置概念2](相对路径.md)

---

（正文内容）

---

**最后更新**: Month Day, Year（如 September 14, 2026）

**相关**:
- [显示名](相对路径.md) —— 一句话说明关系
```

**关键格式规则**：

- `# 标题` **必须是文件的绝对第一行**，网站解析器依赖这一点
- 标题后紧跟的 `**核心概念/洞察**: ...` 会被网站提取为高亮框
- **不要加** YAML front matter（`---\nlayout:...\n---`）
- **不要用** `[[双方括号]]` 链接语法
- **不要用** 以 `/` 开头的绝对路径
- 所有链接都用**相对路径**（相对于当前文件位置）

### 1c. 正文内容的链接

正文中首次出现的术语，链接到 glossary：
```markdown
[Agent](../../glossary.md#agent)
```

引用其他文章：
```markdown
[从"最聪明"到"最可信"](capability-to-trust.md)          ← 同文件夹
[Research Acceleration](../ai-research/research-acceleration.md) ← 跨文件夹
```

---

## Step 2：创建英文翻译

在同一目录下创建 `.en.md` 后缀的英文版：

```
docs/<领土>/文章名.en.md
```

翻译规则：
- 标题、正文、目录、相关链接全部翻译为英文
- 保留所有 markdown 链接结构（路径不变，但指向的文件如果有 `.en.md` 版本，链接到 `.en.md`）
- `**核心概念**` → `**Core insight**`
- `**学习来源**` → `**Sources**`
- `📖 **完整学习对话记录**` → `📖 **Full learning record**`
- `**第一次接触这个主题？**` → `**New to this topic?**`
- `**最后更新**` → `**Last updated**`
- `**相关**` → `**Related**`
- glossary 锚点保持中文原样（如 `glossary.md#agent`），因为 glossary 锚点是中文的

---

## Step 3：更新分类索引

编辑 `docs/<领土>/index.md`，在合适的位置添加新文章的条目。

参考已有条目的格式，通常是编号列表 + 链接 + 简短描述。

同时更新 index.md 底部的 `**最后更新**` 日期。

---

## Step 4：更新全站概念索引

编辑根目录的 `index-all-concepts.md`：

1. 在对应的**主题区**下添加新概念条目
2. 更新文件顶部或底部的**概念总数**（如 139→142）
3. 更新 `**最后更新**` 日期

每个条目格式：
```markdown
XX. **概念名** — 一句话描述 → [文章名](docs/领土/文件名.md)
```

---

## Step 5：更新心智模型（如果有转折）

如果文章包含"原来以为 X，现在觉得是 Y"的心智模型转变：

### 5a. 编辑 `mental-models.md`

在**最顶部**（`---` 分隔线之后、第一条现有条目之前）添加新条目：

```markdown
**X → Y**（Mon DD）
原来以为……；现在明白……
→ 详见 [文章标题](docs/领土/文件名.md)
```

更新底部 `**最后更新**` 日期。

### 5b. 编辑 `mental-models.en.md`

在同样的位置添加英文版：

```markdown
**X → Y** (Mon DD)
Used to think...; now understand...
→ See [Article Title](docs/领土/文件名.en.md)
```

更新底部日期。

---

## Step 6：更新术语表

编辑根目录的 `glossary.md`：

1. 在对应的**分类区**下添加新术语
2. 每个词条格式：标题用 `####`，下面一句大白话解释
3. 如果适合，添加 `→ 详见 [文章名](docs/领土/文件名.md)` 链接

更新 `**最后更新**` 日期。

---

## Step 7：更新 CHANGELOG

### 7a. 编辑 `CHANGELOG.md`

在最顶部的月份区块下，添加新版本条目。版本号在上一个版本基础上 +0.1。

格式：

```markdown
### [vX.X] - Month Day, Year

#### 📝 新增：[文章标题 — 副标题](docs/领土/文件名.md)

**学习来源**：来源描述

**新增页面**：
- `docs/领土/文件名.md` — 内容摘要（列出核心概念、心智模型、关键发现）

**新增概念**：概念A、概念B、概念C（旧数→新数）

**心智模型**：新增 [X → Y](mental-models.md)（Mon DD）

**交叉链接**：文章A、文章B 共 N 篇文章关联；`glossary.md` 新增 N 个词条
```

**注意**：`####` 标题里的文章名要做成**链接**（指向文章文件），不是纯文本。

更新底部 `**最后更新**` 日期。

### 7b. 编辑 `CHANGELOG.en.md`

添加英文版版本条目，格式：

```markdown
### [vX.X] - Month Day, Year

#### Added: [Article Title — Subtitle](docs/领土/文件名.en.md)

（英文摘要，通常 3-5 行，概括核心内容和新增概念）
```

---

## Step 8：添加双向交叉链接（Back-links）

这是最容易遗漏的一步。**每个相关文章都要加双向链接**。

### 8a. 在新文章中

在新文章底部的 `**相关**:` 区块，列出所有相关的已有文章：

```markdown
**相关**:
- [文章A](相对路径.md) —— 关系描述
- [文章B](相对路径.md) —— 关系描述
```

### 8b. 在已有文章中

去每一篇被关联的旧文章，在它的 `**相关**:` 区块**末尾**添加一条指回新文章的链接：

```markdown
- [新文章标题](相对路径/新文件名.md) —— 关系描述
```

**注意**：
- 路径要从旧文章的位置出发计算相对路径
- 同文件夹：`文件名.md`
- 跨文件夹（如从 `ai-core/` 到 `career-impact/`）：`../career-impact/文件名.md`
- 从根目录文件到 `docs/`：`docs/领土/文件名.md`

---

## Step 9：提交和推送

```bash
cd ~/Project/learning-wiki

# 1. 检查所有改动
git status
git diff --stat

# 2. 添加所有相关文件
git add docs/<领土>/新文章.md
git add docs/<领土>/新文章.en.md
git add docs/<领土>/index.md
git add index-all-concepts.md
git add mental-models.md mental-models.en.md
git add glossary.md
git add CHANGELOG.md CHANGELOG.en.md
git add docs/已修改的旧文章1.md docs/已修改的旧文章2.md ...

# 3. 提交
git commit -m "Add: 文章标题 — 副标题简述"

# 4. 推送
git push origin main
```

推送后，展示网站会在几分钟内自动重新构建。

---

## 核对清单

部署完成前，逐条确认：

- [ ] 文章文件创建，第一行是 `# 标题`，紧跟 `**核心概念/洞察**:` 行
- [ ] 文章包含 `**学习来源**`、`📖 **完整学习对话记录**`、`**第一次接触这个主题？**`
- [ ] `.en.md` 英文翻译创建
- [ ] `docs/<领土>/index.md` 已更新
- [ ] `index-all-concepts.md` 已更新（新概念 + 计数）
- [ ] `mental-models.md` + `mental-models.en.md` 已更新（如果有心智模型转折）
- [ ] `glossary.md` 已更新（新术语）
- [ ] `CHANGELOG.md` + `CHANGELOG.en.md` 已更新（标题带链接）
- [ ] 所有相关旧文章都加了**回指**新文章的链接（双向）
- [ ] 所有链接用相对路径，没有 `/` 开头、没有 `[[]]`、没有 `.html`
- [ ] `git push origin main` 完成

---

## 常见错误

| 错误 | 后果 | 怎么避免 |
|------|------|----------|
| 第一行不是 `# 标题` | 网站无法提取标题 | 不要在标题前加空行或 YAML |
| 缺少 `**核心概念**:` 行 | 网站高亮框为空 | 标题下一行必须是加粗行 |
| 用绝对路径 `/docs/...` | GitHub 上 404 | 永远用相对路径 |
| 只加单向链接 | 读者从旧文章找不到新文章 | 每条链接都要双向 |
| CHANGELOG 标题没加链接 | 更新日志无法导航到文章 | `#### 📝 新增：[标题](路径)` |
| 忘记更新概念计数 | 计数和实际不一致 | 每次加概念都更新数字 |
| 英文版链接指向 `.md` 而非 `.en.md` | 英文读者被导到中文页面 | 英文版内链接用 `.en.md` |

---

## 文件结构速查

```
learning-wiki/
├── README.md                    ← 仓库首页
├── CHANGELOG.md                 ← 中文更新日志（每个版本标题链到文章）
├── CHANGELOG.en.md              ← 英文更新日志
├── CLAUDE.md                    ← Agent 操作须知
├── CONTRIBUTE.md                ← 写作标准和页面模板
├── DEPLOY-GUIDE.md              ← 本文件
├── glossary.md                  ← 术语表（一句话解释）
├── index-all-concepts.md        ← 全站概念索引（带计数）
├── mental-models.md             ← 心智模型变迁时间线（中文）
├── mental-models.en.md          ← 心智模型变迁时间线（英文）
├── start-here.md                ← 新手入口
└── docs/
    ├── ai-core/                 ← AI 核心
    │   ├── index.md
    │   ├── agent-architecture.md / .en.md
    │   └── ...
    ├── ai-application/          ← AI 应用
    ├── ai-research/             ← AI 研究
    ├── career-impact/           ← 产业与影响
    ├── computing-foundations/   ← 计算基础
    ├── beyond/                  ← AI 之外
    └── conversations/           ← 完整对话记录（不需要翻译）
```

---

**最后更新**: September 15, 2026
