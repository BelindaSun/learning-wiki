# MCP: A Common Protocol for Models, Tools, and Data

> **The central question:** How can many AI applications connect to many external systems without every pair inventing its own integration?

The **Model Context Protocol (MCP)** defines a standard way for an AI host to discover and call tools or read resources exposed by an MCP server.

## The value of a common contract

Without a shared protocol, each model product needs custom code for each service. With MCP, hosts and servers agree on discovery, schemas, calls, and results.

```text
AI host ← MCP → server adapter ← native API → external service
```

MCP does not replace the service's API. The server usually wraps that API and presents it through a model-friendly standard contract.

The USB analogy is useful: a common connector reduces integration work. The upgrade is that software protocols also carry schemas, capabilities, errors, authentication, and trust boundaries.

## Skills and MCP solve different problems

- **Skill:** how to perform a task well—steps, rules, judgment, and output format.
- **MCP:** where and how to access external capability or information.

A financial-analysis Skill may explain what to calculate. An MCP server may provide the filings and market-data tools. Neither substitutes for the other.

## Read and write are different safety classes

Reading weather data is usually low consequence. Booking a flight, sending an email, or deleting a record changes the world.

A safe integration distinguishes:

- read-only vs state-changing calls;
- reversible vs irreversible actions;
- draft vs publish;
- preview vs execute;
- authenticated identity and scope.

The protocol exposes capability; the host and harness must still enforce permission and approval.

## Who builds the server?

Three patterns coexist:

1. A service provider publishes its own official MCP server.
2. A platform or integration company wraps several services.
3. A user or company builds a private server for internal systems.

This creates a supply-chain question: whose adapter is running, what version is it, what credentials can it access, and how is it audited?

## MCP vs API

| | API | MCP |
|---|---|---|
| Primary audience | software developers | AI hosts and tool runtimes |
| Scope | one service's native interface | common discovery and calling layer |
| Replaces the other? | No | No |

An API is the service's language. MCP is a common interpreter layer that helps AI systems use many such services consistently.

## A complete mental model

```text
Skill says what good work looks like
Model decides the next action
MCP exposes a standard tool contract
Harness decides whether the action is allowed
Native API changes or reads the external system
```

## Business implication

Standardized connection reduces the moat of merely wiring systems together. Durable value moves toward trusted service, proprietary data, workflow ownership, support, compliance, and deep domain relationships.

## Connections

- [Harness Systems](harness-system.md)
- [Skills and the Business Landscape](skills-business-landscape.md)
- [Agent System Architecture](../ai-core/agent-architecture.md)

