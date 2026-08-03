---
layout: default
title: 快速启动指南
---

# 🚀 快速启动指南

5 分钟把你的 Wiki 上线。

---

## 第一步：在 GitHub 创建仓库

1. 登录 GitHub（[github.com](https://github.com)）
2. 点右上角 `+` → `New repository`
3. 填写信息：
   ```
   Repository name: learning-wiki
   Description: Belinda's Learning Wiki - AI & Beyond
   Public: ✓ 选中
   Add a README file: 不选（我们已经有了）
   ```
4. 点 `Create repository`

---

## 第二步：克隆空仓库到本地

在你的电脑打开终端，运行：

```bash
git clone https://github.com/BelindaSun/learning-wiki.git
cd learning-wiki
```

---

## 第三步：复制 Wiki 文件

我给你生成的所有文件在这里：
```
learning-wiki/
├─ README.md
├─ CONTRIBUTE.md
├─ CHANGELOG.md
├─ QUICKSTART.md (这个文件)
├─ index-all-concepts.md
└─ docs/
   ├─ ai-core/
   │  └─ agent-architecture.md
   ├─ ai-application/
   │  └─ workflow-design-guide.md
   └─ career-impact/
      └─ model-to-system-war.md
```

**复制这些文件到你本地的仓库文件夹**。

---

## 第四步：推送到 GitHub

```bash
cd learning-wiki
git add .
git commit -m "Initial Wiki commit - Agent & Workflow fundamentals"
git push origin main
```

完成！✅

---

## 第五步：启用 GitHub Pages（可选，让网站漂亮）

### 方式 A: 用 GitHub 自带的 Pages（推荐）

1. 进入你的仓库
2. 点 Settings → Pages
3. 选择：
   ```
   Source: Deploy from a branch
   Branch: main / (root)
   ```
4. 保存

**你的 Wiki 会在这里**：
```
https://BelindaSun.github.io/learning-wiki/
```

### 方式 B: 静态网站生成器（可选，后续）

可以用 Jekyll 或其他生成器让网站更漂亮。暂时不需要。

---

## 第六步：每天更新 Wiki

从明天开始，每天只需要：

### 方式 1: 在这个窗口告诉我

```
📚 Daily Learning Entry #1
Date: Aug 5, 2026
Topic: [今天学了什么]
Key Concepts: [列表]
Insights: [你的理解]
```

我会：
1. 生成或更新 Markdown 文件
2. 告诉你改了哪些文件
3. 你只需要用这个命令 push 上去：

```bash
cd learning-wiki
git pull  # 如果有远程改动
# [我告诉你新增或修改了哪些文件]
git add .
git commit -m "Daily update: Aug 5 - [主题]"
git push origin main
```

### 方式 2: 自己编辑

如果你想自己写：

1. 打开文件（比如 `docs/ai-core/new-concept.md`）
2. 用任何编辑器编辑
3. 保存，git push

```bash
git add docs/ai-core/new-concept.md
git commit -m "Add: New Concept"
git push origin main
```

---

## 检查清单

启动前检查：

- [ ] GitHub 仓库创建了？
- [ ] 文件都复制过去了？
- [ ] `git push` 成功了？
- [ ] 查看 GitHub 能看到文件？
- [ ] Pages 启用了？（可选）
- [ ] 访问 `BelindaSun.github.io/learning-wiki/` 能看到？

---

## 故障排除

### 问题 1: `git push` 被拒绝

**原因**：可能是权限问题。

**解决**：
```bash
# 用 HTTPS 而不是 SSH
git remote set-url origin https://github.com/BelindaSun/learning-wiki.git
git push origin main
```

### 问题 2: 看不到网站

**原因**：
- Pages 还没启用
- 或者访问 URL 错了

**检查**：
- Settings → Pages 里确认启用了？
- URL 是不是 `https://BelindaSun.github.io/learning-wiki/`（注意 `/learning-wiki/`）？

### 问题 3: 链接坏了

**原因**：Markdown 的路径问题。

**修正**：
所有内部链接用**相对路径**（相对于当前文件所在位置），不要加开头的 `/`：
```markdown
✅ [正确](docs/ai-core/agent-architecture.md)
❌ 错误：(/docs/ai-core/agent-architecture.md)
```

开头带 `/` 的路径会被当作站点根目录的绝对路径，在 GitHub 上直接浏览文件、或站点部署在子路径（比如 `/learning-wiki/`）时都会指向错误的地址。

---

## 下一步

✅ **现在**: 把 Wiki 推上去，能在线访问

⏳ **明天开始**: 每天增量更新

🚀 **一周后**: 你会有 7-10 个新概念

🎯 **一个月后**: 你会有一个 30+ 页的个人知识库

---

## 命令速查表

```bash
# 第一次设置
git clone https://github.com/BelindaSun/learning-wiki.git
cd learning-wiki

# 每次更新（定期运行）
git pull                              # 从 GitHub 拉最新
git add .                             # 添加所有改动
git commit -m "Daily update: [说明]"  # 提交
git push origin main                  # 推送

# 检查状态
git status                            # 看什么改动了
git log --oneline                     # 看提交历史
```

---

**需要帮助？**

检查 [CONTRIBUTE.md](CONTRIBUTE.md)

---

**祝你使用愉快！🎉**

你的学习 Wiki 现在上线了。每天加一点，日积月累，你会有一个价值连城的个人知识库。
