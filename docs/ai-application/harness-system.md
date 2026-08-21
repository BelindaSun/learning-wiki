# Harness 系统——给 Claude Code 定义边界

**核心概念**: Harness 是给 Claude Code 的"入职规则"。它定义了 Agent 能用什么工具、能碰什么文件、能花多少钱、什么情况下必须停下来问人。

**学习来源**: 真实使用 Claude Code 的案例 + settings.local.json 历史记录  
**最大收获**: 原来已经在用 Harness 了，只是不知道那叫 Harness。那个 settings.local.json 文件里的每一行 allow，都是一个故事。

📖 **完整学习对话记录**：[Harness](../conversations/harness.md)、[Agent Harness 文章讨论](../conversations/harness-article-discussion.md)

**第一次接触这个主题？** 建议先了解：[Agent](../../glossary.md#agent) · [Tool](../../glossary.md#tool) · [Context](../../glossary.md#context)

---

## 目录

1. [Harness 的四个维度](#harness-的四个维度)
2. [三层配置系统](#三层配置系统)
3. [实战例子](#实战例子)
4. [常见问题](#常见问题)

---

## Harness 的四个维度

Harness 用四个维度来完整定义 Claude Code 的操作范围。

### 维度 1: 工具权限 (Tool Permissions)

**定义**: Claude Code 能使用哪些[工具](../../glossary.md#tool)。

**例子**:
```yaml
# CLAUDE.md 里的写法
## Harness

### 允许的工具
- code_execution (Python, JavaScript)
- file_operations (read, write, delete)
- browser (if needed)
- 禁止: 直接执行系统命令

### 工具约束
- 代码执行前必须预览
- 不能删除关键文件
```

**settings.json 的写法**:
```json
{
  "harness": {
    "tools": {
      "code_execution": true,
      "file_operations": {
        "read": true,
        "write": true,
        "delete": false
      },
      "browser": false
    }
  }
}
```

**关键点**:
- ✅ 允许代码执行，但禁止删除文件
- ✅ 明确列出允许的工具
- ✅ 可以细粒度控制（比如允许读不允许删）

### 维度 2: 文件权限 (File Permissions)

**定义**: Claude Code 能读写哪些目录和文件。

**例子**:
```yaml
## 文件权限

### 可以读写的目录
- ./src/ (完全访问)
- ./docs/ (完全访问)
- ./config/ (只读)

### 完全禁止
- .env (敏感信息)
- .ssh/ (密钥)
- ../other_projects/ (其他项目)
```

**settings.local.json 的实际例子**（Belinda 的真实文件）:
```json
{
  "allow": [
    "/Users/belinda/projects/ai2030/**/*.md (read, write)",
    "/Users/belinda/projects/mimo/src/** (read, write)",
    "/Users/belinda/projects/mivo/docs/** (read, write)",
    "~/.claude/settings.json (read only)"
  ]
}
```

**设计原则**:
- 🔒 最小权限原则：只给需要的权限
- 🔓 按项目隔离：不同项目的文件分开管理
- 🚫 敏感信息隔离：.env、密钥、私密信息单独禁止

### 维度 3: Token 预算 (Token Budget)

**定义**: Claude Code 一次运行能花多少 token。超过限制自动停止。

**例子**:
```yaml
## Token 预算

默认预算: 100,000 tokens
- 用于大型分析任务: 100K tokens
- 用于小型脚本: 20K tokens

超过预算: 自动停止，报告已用 tokens
```

**settings.json 写法**:
```json
{
  "harness": {
    "token_budget": {
      "default": 100000,
      "per_task": {
        "analysis": 100000,
        "scripting": 20000,
        "documentation": 50000
      }
    }
  }
}
```

**现实意义**:
```
一个大的数据分析 Agent 可能需要 100K tokens
一个简单的文件格式化脚本只需要 5K tokens

设置合理的预算，能控制成本和防止 runaway
```

### 维度 4: 人工介入点 (Human Checkpoints)

**定义**: 在什么情况下，Claude Code 必须停下来问人。

**例子**:
```yaml
## 人工介入点

必须停下来问的情况：
1. 任何 DELETE 操作（删文件）
2. 修改 .env 或配置文件
3. 访问新的目录（未在 allow 列表里的）
4. Token 使用超过 50%（给用户预警）

允许直接执行（不用问）：
- 读文件
- 写入已允许的文件夹
- 代码分析和执行
```

**settings.local.json 的表现**:
```json
{
  "allow": [
    "/Users/belinda/projects/mimo/src/** (auto)",
    "/Users/belinda/projects/ai2030/** (ask)"
  ],
  "checkpoint": {
    "delete_files": "always_ask",
    "new_directory": "always_ask",
    "token_threshold": 0.5
  }
}
```

**工作流效果**:
```
Claude Code 想删文件
  ↓
检查 harness 规则："delete_files: always_ask"
  ↓
停下来，问用户："我要删 /path/to/file，可以吗？"
  ↓
用户确认：yes
  ↓
记录到 settings.local.json 的 "allow" 列表
  ↓
下次同样情况，直接执行（因为已经 allow 了）
```

---

## 三层配置系统

Harness 有三层配置，优先级从高到低：

### 第一层: CLAUDE.md（自然语言）⭐ 最常用

**位置**: 项目根目录  
**格式**: 自然语言 Markdown  
**优先级**: 最高

**例子**:
```markdown
# CLAUDE.md

## Harness 规则

### 工具权限
- 可以执行 Python 和 JavaScript 代码
- 可以读写文件
- 禁止直接执行 bash 命令

### 文件权限
- 允许操作 ./src/ 和 ./docs/
- 禁止碰 .env 和配置文件
- 其他目录需要先问

### Token 预算
- 单次分析最多 50K tokens
- 超过自动停止

### 人工介入
- 任何删除操作都要问
- 新目录访问要问
- 代码执行前预览

### 原则
除了上述系统红线，所有操作直接执行。
给最大自由度，只在真正需要时才问。
```

**优点**:
- ✅ 用自然语言写，任何人都能读
- ✅ 容易维护和更新
- ✅ 可以加详细说明和背景

### 第二层: settings.json / settings.local.json（精确权限）

**位置**: 项目根目录（settings.json）或本地机器（settings.local.json）  
**格式**: JSON  
**优先级**: 中等

**区别**:

| 特性 | settings.json | settings.local.json |
|------|---------------|-------------------|
| 被 git 提交 | ✅ 是 | ❌ 否 |
| 团队共享 | ✅ 是 | ❌ 否 |
| Workspace Trust | ✅ 需要验证 | ❌ 天然信任 |
| 用途 | 项目级规则 | 个人级规则 |
| 安全性 | 相对低（公开） | 高（本地） |

**选择**:
- 用 **settings.json** 定义团队项目的规则（会被 git 提交）
- 用 **settings.local.json** 定义个人机器的规则（不会被提交，超级安全）

### 第三层: 命令行参数（临时用）

**位置**: 启动 Claude Code 时的命令行  
**格式**: 命令行参数  
**优先级**: 最低（被上面两层覆盖）

**例子**:
```bash
claude-code --token-budget 20000 --allow-write ./temp/
```

**用途**: 临时调整，不需要修改配置文件。

---

## 实战例子

### 例 1: Belinda 的个人设置演变

**开始阶段**（没有 Harness）:
```
Claude Code: "我要读这个文件，可以吗？"
Belinda: "可以"
Claude Code: "我要写那个目录，可以吗？"
Belinda: "可以"
...
结果：每次都要问，烦死了
```

**现在阶段**（有 Harness）:
```json
// ~/.claude/settings.json（全局，所有项目）
{
  "harness": {
    "tools": {
      "code_execution": true,
      "file_operations": true
    }
  }
}

// ~/projects/mimo/.claude/settings.local.json（项目级，个人设置）
{
  "allow": [
    "~/projects/mimo/src/** (auto)",
    "~/projects/mimo/config/local.json (ask)"
  ]
}
```

**现在的工作流**:
```
Claude Code 想读 src/ 里的文件
  ↓
检查规则：allow 列表里有 "~/projects/mimo/src/** (auto)"
  ↓
直接读（不用问）
```

### 例 2: 被动积累 vs 主动设计

**被动积累**（现状）:
```
Day 1: Claude 问"能读 src/ 吗？" → Belinda: yes → 记录到 allow
Day 2: Claude 问"能写 docs/ 吗？" → Belinda: yes → 记录到 allow
Day 3: Claude 问"能删 .tmp/ 吗？" → Belinda: no → 记录到 deny
...
结果：settings.local.json 随意堆积，很乱
```

**主动设计**（更好的方式）:
```
Belinda 一开始就在 CLAUDE.md 里写清楚：
- 允许操作 ./src 和 ./docs
- 禁止删除任何文件（除了 .tmp/)
- Token 预算 50K
- 只有访问新目录时才问

结果：Claude Code 能自己判断，不用每次都问
```

---

## 常见问题

### Q1: settings.json 和 settings.local.json 的具体区别是什么？

**答案**：

除了 git 提交问题，还有一个关键区别：

- **settings.json** 里的 allow 规则需要经过 **Workspace Trust 验证**才生效
  - 因为这个文件被 git 提交了，理论上可能被别人修改
  - 所以系统需要验证：这个规则是不是用户自己设的？
  - 首次打开项目时，VS Code 会问："你信任这个工作区吗？"

- **settings.local.json** 里的 allow 规则**天然可信**，直接生效
  - 因为这个文件只在本地，不被 git 提交
  - 系统知道这是用户自己设的
  - 直接执行，不需要额外验证

**实践**:
```
如果你的团队都信任彼此 → 用 settings.json（共享规则）
如果你是个人使用 → 用 settings.local.json（省掉信任验证）
```

### Q2: CLAUDE.md 放在项目根目录，那全局规则放在哪里？

**答案**：

全局规则放在 **~/.claude/settings.json**（用户主目录）。

**三层规则的完整图景**:
```
全局规则
  └─ ~/.claude/settings.json（对这台电脑的所有项目生效）

项目规则
  ├─ ./CLAUDE.md（自然语言，可选但推荐）
  ├─ ./settings.json（项目级，被 git 提交）
  └─ ./settings.local.json（项目级，本地私密）

临时规则
  └─ 命令行参数（一次性）
```

**优先级顺序**：
```
命令行参数 (最高)
  ↓
settings.local.json
  ↓
settings.json
  ↓
CLAUDE.md
  ↓
~/.claude/settings.json (最低)
```

**Belinda 的现状**:
```json
// ~/.claude/settings.json（全局）
{
  "theme": "dark",
  "workflow": "enabled",
  "notifications": true
  // 权限这块是空的，可以补上
}
```

**可以补上**:
```json
{
  "harness": {
    "tools": {
      "code_execution": true,
      "file_operations": true
    },
    "file_permissions": {
      "allow": [
        "~/projects/** (auto)",
        "~/.claude/** (read only)"
      ]
    }
  }
}
```

### Q3: 为什么要有人工介入点？

**答案**：

因为有些决策只有人能做。

**例子**:
```
删除文件 → 不可逆操作，必须问
修改配置 → 可能影响系统，必须问
访问新目录 → 可能有敏感数据，必须问

而读文件、执行已验证的代码 → 可以直接做
```

这就是[工作流](../../glossary.md#workflow)里的"人工介入点"的真实形式。

---

## 关键洞察

### Harness vs Skills vs MCP

```
Harness: 定义"能做什么"
  ├─ 工具权限
  ├─ 文件权限
  ├─ Token 预算
  └─ 人工介入

Skills: 定义"怎样做"
  ├─ 工作流步骤
  ├─ 参数定义
  └─ 错误处理

MCP: 定义"去哪做"
  ├─ 外部服务连接
  ├─ API 集成
  └─ 数据源访问
```

### settings.local.json 的故事

每一行 allow 都是一个故事：
```json
{
  "allow": [
    "/Users/belinda/projects/ai2030/**/*.md (read, write)",
    //  ↑ "那天我让他自由编辑所有 AI2030 文档"
    
    "/Users/belinda/projects/mimo/src/** (read, write)",
    //  ↑ "那天他需要改 Mimo 代码，我说可以"
    
    "~/.claude/settings.json (read only)",
    //  ↑ "我让他读我的全局设置，但不能改"
  ]
}
```

这个文件就是你和 Claude Code 一起工作的历史记录。

---

## 下一步

- 🔧 优化你的全局 settings.json（待创建）
- 📋 编写高效的 CLAUDE.md（待创建）
- 🛡️ 安全最佳实践（待创建）

---

**最后更新**: August 4, 2026（首次创建基于 Aug 1 学习）  
**相关**:
- Claude Code（待创建）
- [工作流设计](workflow-design-guide.md)
- [Skill 设计](skills-business-landscape.md)
- [从"最聪明"到"最可信"](../career-impact/capability-to-trust.md)
- [Model 能力 ≠ Agent 能力](../ai-core/model-vs-agent-capability.md) —— Harness/Runtime 如何决定 Agent 实际能力
- [Computer Use](../ai-core/computer-use.md) —— Computer Use 的权限管理是 Harness 关切的一个具体展开
