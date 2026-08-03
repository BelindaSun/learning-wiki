# MCP 统一协议指南

**核心概念**: MCP（Model Context Protocol）是大模型与外部世界沟通的统一标准协议。Skills 是大脑，MCP 是手和眼睛，两者缺一不可。

**学习来源**: Claude 直接对话学习 + 真实使用案例分析  
**最大收获**: 只读 vs 读写的安全机制——查天气是只读（出错没损失），订机票是读写（真实改变世界，需要人确认）。

---

## 目录

1. [MCP 的核心价值](#mcp-的核心价值)
2. [Skills vs MCP](#skills-vs-mcp)
3. [只读 vs 读写](#只读-vs-读写)
4. [MCP Server 谁来做](#mcp-server-谁来做)
5. [MCP 和 API 的区别](#mcp-和-api-的区别)
6. [实战例子](#实战例子)

---

## MCP 的核心价值

### 统一标准，USB 时刻

**之前** (没有 MCP)：
```
每个大模型公司都要自己写对接代码
  
Claude 要连 Gmail：
  ├─ 写 Gmail 连接代码
  ├─ 学 Gmail API
  └─ 维护更新

GPT 要连 Gmail：
  ├─ 再写一遍 Gmail 连接代码
  ├─ 再学一遍 Gmail API
  └─ 再维护一遍

Microsoft Copilot 要连 Gmail：
  ├─ 再写一遍...
  └─ ...
```

**现在** (有了 MCP)：
```
Google 做一次 Gmail 的 MCP Server
  ↓
所有支持 MCP 的大模型都能用
  ├─ Claude ✓
  ├─ GPT ✓
  ├─ Copilot ✓
  ├─ 其他任何 AI ✓
```

**比喻**：
```
没有 MCP 时代 = USB 统一前
  ├─ iPhone 用 Lightning
  ├─ Android 用 Micro USB
  ├─ 某品牌用自己的接口
  └─ 你得买 10 根不同的充电线

有 MCP 时代 = USB-C 统一后
  ├─ 所有设备都用 USB-C
  ├─ 你只需要一根线
  └─ 充电器厂商也只需要做一个
```

### 三方都获益

**外部服务** (Gmail、Slack、GitHub...):
- ✅ 只需对接一次 MCP 标准
- ✅ 自动支持所有 MCP 兼容的 AI
- ✅ 省去重复开发

**AI 公司** (Claude、GPT...):
- ✅ 不需要为每个服务单独开发接口
- ✅ 支持更多服务，更快
- ✅ 用户体验更好

**用户**:
- ✅ 任何 AI 都能用同一套服务
- ✅ 配置更简单统一
- ✅ 切换 AI 不用重新配置

---

## Skills vs MCP

### 本质区别

| 维度 | Skills | MCP |
|------|--------|-----|
| **位置** | 内部 | 外部 |
| **作用** | 告诉 Claude 怎么想和做 | 让 Claude 拿到数据和执行操作 |
| **例子** | "用这个方法回答天气问题" | "去 OpenWeatherMap 拿真实数据" |
| **输入** | 指令、约束 | API Key、权限 |
| **输出** | 思路、方案 | 真实数据、真实操作 |

### 视觉化对比

```
用户问：Mimo，现在北京天气怎么样？

Mimo 的大脑（Claude）：
  ├─ Skill: 怎么回答天气问题
  │   └─ 告诉 Claude 要 consider 温度、湿度、风级...
  │
  └─ MCP: 去拿真实天气数据
      └─ 连到 OpenWeatherMap，返回 Beijing 当前数据

最后回答：北京现在 28°，晴，东风 3 级，相对湿度 65%
```

### 不能只有其中一个

**只有 Skills，没有 MCP**：
```
Claude 知道怎么回答天气问题（Skill）
但拿不到真实数据（缺 MCP）
结果：瞎编一个数据
  "北京 25°，晴天"
  但其实北京现在下雨 15°
  → 用户体验差
```

**只有 MCP，没有 Skills**：
```
Claude 能连到 OpenWeatherMap API（MCP）
但不知道怎么格式化返回给用户（缺 Skill）
结果：返回 raw JSON，用户看不懂
  {"temp": 28, "humidity": 65, "condition": "sunny"}
  → 体验差
```

**两个都有**：
```
Skill: 格式化天气信息（友好、简洁）
MCP: 获取真实数据（准确、及时）
结果：用户问"北京天气"，得到"28°，晴，舒适"
  → 完美体验
```

---

## 只读 vs 读写

### 读写权限的安全设计

**只读操作**：
```
查天气、查新闻、查汇率、查机票价格

特点：
  ✓ 不改变外部状态
  ✓ 出错没有实际损失
  ✓ 可以直接执行，不需要确认

Mimo 的天气查询：
  用户问 → Claude 直接调用 MCP → 返回结果
  即使数据有一点偏差，也只是用户知道得晚一点
```

**读写操作**：
```
发邮件、订餐、订机票、转账、删除文件

特点：
  ✗ 改变外部状态
  ✗ 出错有真实损失
  ✗ 必须要人工确认

Claude 订机票案例：
  用户问 "帮我订今天去上海的机票"
  Claude 规划：找航班 → 确认选择 → 生成订单
  
  在真正下单前：
  停下来 → "我要代你订东方航空 MU501，15:30 出发，
           经济舱，￥880。确认吗？"
  用户 → "确认！"
  → 才真正提交订单
```

### Mimo 的演进路径

```
当前状态（只读）：
  查天气、查新闻、查用户之前的对话
  → 自动执行，无需确认

下一阶段（读写+手动确认）：
  发短信、创建日程、写邮件草稿
  → 生成后停下来问"发吗？"
  → 用户确认后才真正执行

未来（读写+自动确认）：
  学会了用户的模式后，某些操作可以自动做
  比如：用户通常都会确认的日常操作
  → 直接执行，事后告知
```

### 为什么这个差别这么重要？

```
这不是技术限制，是故意设计的安全机制。

只读操作出错的代价：用户知道信息不准确，自己调整
读写操作出错的代价：真实的金钱损失、数据丢失、关系破裂

所以设计上必须不同。
这也是为什么金融 AI、医疗 AI 比通用 AI 贵得多——
他们要承担的读写操作责任更重。
```

---

## MCP Server 谁来做

### 三种情况都存在

**情况 1：大平台自己做（主动）**

```
Google：
  ├─ Gmail MCP Server ✓ （官方做的）
  ├─ Google Calendar MCP Server ✓ （官方做的）
  └─ Google Drive MCP Server ✓ （官方做的）

为什么他们主动做？
  ✓ 让 AI 能用自己的服务，对自己有好处
  ✓ 增加用户粘性（用户用 Claude 但能操作 Gmail）
  ✓ 抢占市场
```

**情况 2：第三方开发者做**

```
某个小众工具（比如 Notion 竞品）
  → 官方没有做 MCP Server
  → 但有社区开发者觉得有用
  → 自己写了一个，发到 GitHub 上
  → 大家都能用

为什么他们做？
  ✓ 增加工具的曝光
  ✓ 让用户发现工具
  ✓ 建立开源社区
```

**情况 3：企业自己做**

```
公司内部系统要接入 AI
  → 公司的 IT 团队来写这个 MCP Server
  → 让内部员工用 Claude 但能访问公司系统

这就是昨天说的"集成商"在做的事之一
  高价值服务 = 帮企业把内部系统接上 MCP
  普通用户做不到这个
```

### MCP Server 的供应链

```
MCP Server Registry（官方注册表）
  ├─ Google 的 MCP Servers（Gmail、Calendar、Drive）
  ├─ Slack 的 MCP Server
  ├─ GitHub 的 MCP Server
  ├─ 社区贡献的 100+ 个 MCP Server
  └─ 企业私有 MCP Server（不在公开注册表里）

用户可以：
  1. 浏览官方注册表，选择要用的
  2. 在配置文件里授权和配置
  3. Claude 启动时自动连接
```

---

## MCP 和 API 的区别

### 核心区别

**API** (应用程序接口)：
```
我提供一个接口，你来调用
  
特点：
  ✓ 每家公司的 API 都不一样
  ✓ 参数不同、格式不同、调用方式不同
  ✓ 需要学习每个 API 的文档

例子：
  Gmail API 调用方式 A
  Slack API 调用方式 B
  GitHub API 调用方式 C
  
  Claude 要接 10 个服务
  → 要学 10 种不同的"语言"
```

**MCP** (Model Context Protocol)：
```
在 API 上面加了一层统一的外壳
  
特点：
  ✓ 把各种不同的 API 包装成同一种格式
  ✓ Claude 只需要学一种语言
  ✓ 就能跟所有支持 MCP 的服务说话

例子：
  Gmail API + MCP 包装 = Gmail MCP Server
  Slack API + MCP 包装 = Slack MCP Server
  GitHub API + MCP 包装 = GitHub MCP Server
  
  Claude 看到的：
    都是 MCP 格式，说话方式完全一样
```

### 关系图

```
原材料（API）
  ↓
标准化包装（MCP Server）
  ↓
成品（Claude 能用）

Gmail API 本来有自己的格式
  → Google 做的 MCP Server
  → 把 Gmail API 包装成 MCP 格式
  → Claude 能直接用
```

### 配置方式的区别

**传统 API Key 方式**：
```bash
# 在终端里设置环境变量
export GMAIL_API_KEY="xxx"
export SLACK_API_KEY="yyy"

# 你自己写代码去调用
import gmail_api
data = gmail_api.get_emails(key=os.environ['GMAIL_API_KEY'])
```

**MCP 方式**：
```json
// 在配置文件里填 API Key
{
  "mcpServers": {
    "gmail": {
      "url": "https://gmailmcp.googleapis.com/mcp/v1",
      "apiKey": "你的 Key"
    },
    "slack": {
      "url": "https://slackmcp.slack.com/mcp/v1",
      "apiKey": "你的 Key"
    }
  }
}

// Claude 启动的时候读这个文件
// Claude 就知道"哦，我可以连 Gmail 和 Slack，Key 在这里"
// Claude 自己去调用
```

### 本质对比

```
API Key 方式：
  你操作工具，Key 是你的凭证

MCP 方式：
  你授权 Claude 帮你操作工具，Key 是权限

前者：你是主角
后者：Claude 是主角，你是指挥官
```

---

## 实战例子

### 例 1：Mimo 的天气查询（只读）

**当前架构**：
```
用户 → Mimo（Claude）
  ├─ Skill: 怎么回答天气问题（友好、简洁）
  └─ MCP: OpenWeatherMap（获取实时数据）
       ↓
  返回："北京 28°，晴，东风 3 级"
```

**为什么这样设计**：
- ✓ 只读操作，出错没损失
- ✓ 直接执行，无需确认
- ✓ 用户体验好，实时、准确

**下一步**（如果有的话）：
```
增加读写：如果用户说"帮我约个天气好的日子见面"
  → Mimo 查天气 MCP
  → 建议几个日期
  → 创建日程 MCP
  → 但在真正创建前，停下来问"确认吗？"
```

### 例 2：AI Brief 的数据问题

**问题**：
```
Jupiter 写 Brief 只能用公开信源
  → 付费数据源进不去
  → 这就是数据进不去的真实体现

为什么？
  ✗ MCP 没有覆盖付费数据源
  ✗ 或者说，数据提供商还没做开放的 MCP Server
```

**解决方案**：
```
1. 数据提供商（彭博、理财通等）做自己的 MCP Server
2. 企业买了付费数据源后，自己做 MCP Server
3. 集成商帮企业接上 MCP

这些都可以让 Claude Brief 用上付费数据
但目前还没有通用解决方案
所以专业金融简报产品（有自己数据库的）还有价值
```

### 例 3：商业模式的启示

**过去**（数据孤岛时代）：
```
每个公司数据都锁在自己的系统里
  → 要用别人的数据，必须合作
  → 进入壁垒高
```

**现在**（MCP 时代）：
```
数据可以通过 MCP Server 流动
  → 系统之间可以自由连接
  → 进入壁垒降低
  → 但新的壁垒在哪？
```

**新壁垒**：
```
1. 数据质量（谁的数据最准？最完整？）
2. 数据私密性（会不会泄露我的数据？）
3. 实时性（数据多快更新？）
4. 成本（用你的服务要多少钱？）

MCP 让集成变容易了
但"好的数据"永远稀缺
这就是为什么即使开放了 API，
高质量数据的提供商还是有议价权
```

---

## 关键洞察

### 重新理解"数据进不去才是壁垒"

```
昨天的认识：某些系统里的数据无法获取
今天的理解：MCP 可以让数据流动，但不是所有数据都愿意开放

真正的壁垒：
  ✗ 不是技术能否实现（MCP 可以）
  ✓ 而是数据所有者愿不愿意开放
  ✓ 以及开放给谁
  ✓ 以及怎样保护隐私

这就是为什么：
  ✓ 公开信息会开放（Google、GitHub）
  ✓ 付费数据不开放（Bloomberg、FactSet）
  ✓ 用户私密数据谨慎开放（Gmail、Calendar）
```

### 集成商的价值重新定位

```
过去：集成商 = 帮企业接 API
现在：集成商 = 帮企业接 MCP + 管理数据安全 + 优化流程

MCP 降低了技术难度
但增加了管理复杂度
  → 怎样安全地授权数据？
  → 怎样监控数据流动？
  → 怎样审计 AI 的操作？
  → 怎样确保合规？

这些都是集成商的新价值
```

---

## 下一步

- 📖 [MCP Server 开发指南](mcp-server-development.md)（待创建）
- 🔧 [MCP 配置实战](mcp-configuration-guide.md)（待创建）
- 💰 [MCP 商业模式分析](mcp-business-model.md)（待创建）

---

**最后更新**: August 4, 2026（基于 July 29 学习）  
**相关**:
- [Agent 架构](../ai-core/agent-architecture.md)
- [Skill 设计](skills-business-landscape.md)
- [Harness 系统](harness-system.md)
- [Workflow 编排](../ai-core/workflow-orchestration.md)
