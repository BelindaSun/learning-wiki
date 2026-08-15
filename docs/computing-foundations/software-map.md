# Software Map · 软件世界地图

**核心概念**: 用 ChatGPT / Claude / Coding Agent 时，看到的东西底下有哪些软件层？这张地图只回答"是什么、大概长在哪、跟邻居什么关系"，不讲"为什么"——想知道为什么，去 Computing Foundations 的 Go Deeper 层，五主脊（见文末"下一步"）。

---

![Software Map：应用代码和模型（权重）两路汇入 Runtime，Runtime 之下是已经认识的 Process/OS、Client/Server/Network/API；周围是 Framework/Database/Cache/Queue/Container 五个认识就好的卫星概念；右下角虚线指向规模脊](assets/software-map.svg)

## 这张图在说什么

先认识两个新东西，其余都是已经见过的老朋友。

**1. 一个能跑的模型，不只是一份代码。** 平时说"模型"，其实包含两部分：**模型结构**——用代码搭出来的计算骨架，定义"怎么算"；和**权重（weights）**——训练学到、再保存下来的海量数字参数（几十亿到上千亿个，可以想象成一张巨大的、密密麻麻的数字表格），决定"算出来是什么"。结构是代码，权重不是：权重更像一份乐谱，本身不是应用程序那样的一套"指令"，自己不会响，得有人来演奏。所以真正跑起一个模型，需要结构、权重、和执行它的软件三者一起工作。这也是从 [Start Here 第 1 站：AI 到底是什么？](../../start-here.md)"模型是引擎、产品是车"往下再深一层：引擎里那份决定本领的权重是数据、不是代码，得靠别的东西才能跑起来。

**2. Runtime 就是那个"演奏者"。** Runtime（运行时）就是当你点击"运行"之后、在后台负责调动所有资源去执行计算的那层软件环境；对一个 AI 模型来说，它负责配合模型结构、权重和底层的库 / 硬件，让推理计算实际发生。这张图里，应用代码和模型两条路，最终都要经过 Runtime 才跑得起来。记住这个词，[Software × Hardware Map](software-hardware-map.md) 会从这里接着往下走，一路走到 GPU。

**应用代码和模型不是平级的两坨，而是"提需求"和"给能力"的关系。** 应用代码决定产品长什么样、怎么接住用户的请求、什么时候该去问模型；模型只负责"被问到时算出答案"。应用代码通过统一的接口（API / SDK）把请求递给模型，模型算完再把结果交回去，由应用代码发回给你。以后看 MCP、Agent 架构，本质都是在扩展"应用代码怎么调用模型和外部工具"这件事。

Runtime 再往下，是已经在 [Foundation Zero](foundation-zero.md) 认识过的 Process、OS；而这一切，都发生在 Client ⇄ Network/API ⇄ Server 这个已经认识的关系里面——这张图没有重新解释它们，只是把它们摆在了正确的位置上。

## 认识就好的五个词

围着 Server 转的五个概念，只要"见过、知道大概是干嘛的"就够，不需要专门去学：

| 概念 | 本质（严谨一点） | 一句话直觉 |
|---|---|---|
| Framework | 预先封装好常用功能的代码库 + 一套开发规范 | 现成的开发骨架和工具，不用什么都从零写 |
| Database | 按特定结构长期存储、查询和管理数据的软件系统 | 把数据有组织地长期存下来，以后还能快速找到 |
| Cache | 把频繁访问的数据临时放在更快的存储位置，减少重复读取或计算 | 常用的东西放手边，不用每次重新找、重新算 |
| Queue | 按一定顺序接收和暂存等待处理的数据或任务；FIFO 是最常见形式之一 | 事情先排队，系统有空了再一个个处理 |
| Container | 将应用及其运行所需的依赖和环境打包、隔离运行的技术 | 把"程序 + 它需要的环境"一起装好，换台机器也更容易跑起来 |

## 示意场景：一个 AI 服务收到一句 Prompt，这些组件可能怎么协作

实际产品的架构各不相同，下面只是为了把这几个软件概念串起来而做的**简化示意**，不是任何具体产品（比如 ChatGPT）的真实内部结构：

```
你发出一句 Prompt
   → 可能先进 Queue：请求太多时先排队，轮到才处理
   → Framework 接住请求、调度这一次要走的逻辑
   → 可能先查 Cache：如果刚好有可复用的结果，就不必重算
   → 需要真算时，交给 Runtime 去跑模型，得到回答
   → 需要长期保存的数据，可能写入 Database
   → 结果返回给你
```

（Container 没有单独列成一步，是因为它更像"上面这一切运行的环境"——整条线本来就跑在一个打包好的 Container 里，不是排队里的某个先后步骤。）

再提醒一句，别把最后一步误读成"写进 Database，模型下次就记得你了"：**数据长期存下来是一回事；产品是否、何时把它重新取出、放进模型这一次的 Context，是另一层机制**——那一层是后面 [Context](../ai-core/context-window-guide.md) 和 [Memory](../ai-core/memory-system-guide.md) 要讲的事，跟数据库持久化不是同一个概念。

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
