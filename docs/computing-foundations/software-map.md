# Software Map · 软件世界地图

**核心概念**: 用 ChatGPT / Claude / Coding Agent 时，看到的东西底下有哪些软件层？这张地图只回答"是什么、大概长在哪、跟邻居什么关系"，不讲"为什么"——想知道为什么，去 Computing Foundations 的 Go Deeper 层，五主脊（见文末"下一步"）。

---

![Software Map：应用代码和模型（权重）两路汇入 Runtime，Runtime 之下是已经认识的 Process/OS、Client/Server/Network/API；周围是 Framework/Database/Cache/Queue/Container 五个认识就好的卫星概念；右下角虚线指向规模脊](assets/software-map.svg)

## 这张图在说什么

先认识两个新东西，其余都是已经见过的老朋友。

**1. 模型是数据，不是代码。** 平时说"模型"，其实混着两样东西：一是**模型结构**——用代码搭出来的计算骨架，像一台留好了无数"空位"的机器；二是**权重（weights）**——训练过程中学到、再保存下来的海量数字（几十亿到上千亿个），一个个填进那些空位。填满之后，模型才"有本事"。但即便如此，权重本身仍然不是一套"指令"，更像一份乐谱——自己不会响，需要有人来演奏。这是从 [Start Here 第 1 站：AI 到底是什么？](../../start-here.md)"模型是引擎、产品是车"往下再深一层：引擎（模型）本身也不是代码，它是数字，得靠别的东西才能跑起来。

**2. Runtime 就是那个"演奏者"。** 不管是要执行一段应用代码，还是要执行一个模型的权重，真正让它"发生"的东西都叫 Runtime——运行时。这张图里，应用代码和模型两条路，最终都汇入 Runtime。记住这个词，[Software × Hardware Map](software-hardware-map.md) 会从这里接着往下走，一路走到 GPU。

**应用代码和模型不是平级的两坨，而是"提需求"和"给能力"的关系。** 应用代码决定产品长什么样、怎么接住用户的请求、什么时候该去问模型；模型只负责"被问到时算出答案"。应用代码通过统一的接口（API / SDK）把请求递给模型，模型算完再把结果交回去，由应用代码发回给你。以后看 MCP、Agent 架构，本质都是在扩展"应用代码怎么调用模型和外部工具"这件事。

Runtime 再往下，是已经在 [Foundation Zero](foundation-zero.md) 认识过的 Process、OS；而这一切，都发生在 Client ⇄ Network/API ⇄ Server 这个已经认识的关系里面——这张图没有重新解释它们，只是把它们摆在了正确的位置上。

## 认识就好的五个词

围着 Server 转的五个概念，只要"见过、知道大概是干嘛的"就够，不需要专门去学：

| 概念 | 本质（严谨一点） | 一句话直觉 |
|---|---|---|
| Framework | 预先封装好常用功能的代码库 + 一套开发规范 | 现成的开发工具箱，不用什么都从零写 |
| Database | 按特定结构长期存储、查询、管理数据的软件系统 | 把东西存下来，下次还能想起来——AI"记得你"，技术上常常靠这个 |
| Cache | 把高频数据临时放在超高速介质里，省去重复计算/读取 | 常用的东西放手边，不用每次重新算一遍 |
| Queue | 按"先进先出（FIFO）"接收、暂存请求的数据结构 | 排队等着被处理，不是所有请求都能立刻办 |
| Container | 把应用和它的整套依赖环境一起打包的轻量级虚拟化 | 打包好一份"能跑起来的环境"，换到哪台机器都一样能跑 |

## 把这五个词串起来：你在 ChatGPT 发一句话

它们平时各干各的，但一次请求会把它们串成一条线：

```
你发出一句 Prompt
   → Queue：请求太多时先排队，轮到你才被处理
   → Framework 接住请求、调度这一次要走的逻辑
   → 先看 Cache：如果是刚问过的相同问题，直接返回，不重算
   → 没命中，就交给 Runtime 去跑模型，算出回答
   → 把这轮对话写进 Database，下次还"记得"
   → 结果返回给你
```

（Container 没有单独列成一步，是因为它更像"上面这一切运行的环境"——整条线本来就跑在一个打包好的 Container 里，不是排队里的某个先后步骤。）

## 下一步

- → [Hardware Map](hardware-map.md) —— Runtime 最终要在什么物理的东西上执行
- → [Software × Hardware Map](software-hardware-map.md) —— Runtime 具体怎么把工作交给硬件
- 好奇"为什么一个产品通常不止一台服务器" → [从 1 卡到千卡：为什么算力扩展这么难](scaling-and-communication.md)

---

**最后更新**: August 15, 2026

**相关**:
- [Computing Foundations · 计算机基础地图](index.md) —— 这张图属于 Orient 层
- [Foundation Zero · 地基第 0 层](foundation-zero.md) —— Code/Program/Process/OS、Client/Server/Network/API 在这里第一次被认识
- [Hardware Map](hardware-map.md) —— 软件世界的邻居
- [Software × Hardware Map](software-hardware-map.md) —— Runtime 在这里被继续展开
- [从 1 卡到千卡：为什么算力扩展这么难](scaling-and-communication.md) —— "不止一台服务器"这个问题的完整答案
