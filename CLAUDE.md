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
