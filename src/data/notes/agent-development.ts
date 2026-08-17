import type { Note } from "../types";

export const agentDevelopmentNotes: Note[] = [
  {
    id: "frontend-to-agent-development-roadmap",
    title: "前端转 Agent 开发学习路线：Agent 开发到底该学什么？",
    category: "工程转agent应用开发",
    categoryOrder: 1,
    tags: ["Agent 开发", "学习路线", "工程思维"],
    summary:
      "整理前端转 Agent 应用开发的五阶段学习路线：先掌握 LLM API、Prompt、Tool Use、RAG，再进入框架和工程化。",
    createdAt: "2026-08-17",
    updatedAt: "2026-08-17",
    featured: false,
    route: "/notes/frontend-to-agent-development-roadmap",
    readingTime: "8 分钟",
    content: [
      {
        type: "heading",
        id: "core-view",
        level: 2,
        text: "文章核心观点",
      },
      {
        type: "paragraph",
        text: "从后端转 Agent 开发一年后的实战经验出发，指出很多人学习 Agent 的顺序是错的：一上来就刷 LangChain、跑 Demo，结果真正做项目时，一遇到工程问题就卡壳。文章给出的核心路线是：底层理解优先于框架学习，Agent 开发本质还是工程开发。",
      },
      {
        type: "heading",
        id: "stop-langchain-first",
        level: 2,
        text: "核心建议：先停一下 LangChain",
      },
      {
        type: "quote",
        text: "如果你现在已经开始学 LangChain 了，我建议你先停一下。不是说 LangChain 不好，而是很多人一开始就学错了顺序。",
      },
      {
        type: "paragraph",
        text: "很多人的学习路径是刷教程、跑 Demo、学框架，短期内感觉每天都在进步，但真正做项目时发现只会表面。一到面试或项目落地，框架概念可以讲很多，但工程问题却很难回答。",
      },
      {
        type: "heading",
        id: "five-stages",
        level: 2,
        text: "五阶段学习路线",
      },
      {
        type: "heading",
        id: "stage-1-llm-api",
        level: 3,
        text: "第一阶段：先把大模型当 API 用，别急着学框架",
      },
      {
        type: "paragraph",
        text: "最应该先学的是 LLM API，而不是 LangChain、LangGraph。等原生 API 玩明白，再去看框架，就会发现它们更多是在封装重复代码，而不是一套完全陌生的新知识。",
      },
      {
        type: "list",
        items: [
          "一次模型调用到底发生了什么。",
          "System Prompt 怎么影响回答。",
          "Temperature 怎么调。",
          "Token 怎么算。",
          "Function Calling 返回的数据长什么样。",
        ],
      },
      {
        type: "heading",
        id: "stage-2-prompt-flow",
        level: 3,
        text: "第二阶段：Prompt 不是写文案，而是设计流程",
      },
      {
        type: "paragraph",
        text: "Prompt 更像业务流程的一部分，不是一句提示词那么简单。一个好的 Prompt，不只是让模型回答正确，更重要的是回答稳定、可控。企业项目里，比起华丽的提示词，更看重稳定性。",
      },
      {
        type: "list",
        items: [
          "什么时候给模型背景信息？",
          "什么时候限制输出格式？",
          "什么时候让模型调用工具？",
        ],
      },
      {
        type: "heading",
        id: "stage-3-tool-use",
        level: 3,
        text: "第三阶段：Tool Use 和 Function Calling 必须吃透",
      },
      {
        type: "paragraph",
        text: "Function Calling 是最能区分普通大模型开发和 Agent 开发的能力。Agent 最大的特点是会自己调用工具，例如天气查询、数据库查询、发送邮件和调用接口。",
      },
      {
        type: "list",
        items: [
          "工具描述怎么写。",
          "参数 Schema 怎么设计。",
          "工具失败怎么重试。",
          "多个工具怎么选择。",
        ],
      },
      {
        type: "quote",
        text: "真正的 Agent 项目，每天都在和这些问题打交道。",
      },
      {
        type: "heading",
        id: "stage-4-rag",
        level: 3,
        text: "第四阶段：RAG 一定要自己搭一遍",
      },
      {
        type: "paragraph",
        text: "RAG 不是接个向量库那么简单，真正难的是效果。建议自己从零搭一个知识库项目，把文档处理、向量化、检索、重排整个流程全部走一遍。只有踩过这些坑，以后做项目才知道问题出在哪里。",
      },
      {
        type: "list",
        items: [
          "文档怎么切？",
          "Embedding 怎么选？",
          "为什么召回不到？",
          "为什么召回到了模型还是答错？",
        ],
      },
      {
        type: "heading",
        id: "stage-5-framework-engineering",
        level: 3,
        text: "第五阶段：最后再学框架和工程化",
      },
      {
        type: "paragraph",
        text: "LangChain 应该放在最后，而不是第一步。底层理解透了，再学框架会快很多。真正工作中，更多时间花在上下文管理、异常处理、日志监控、成本优化和缓存策略上。",
      },
      {
        type: "quote",
        text: "Agent 开发，本质还是工程开发。模型只是其中一部分。",
      },
      {
        type: "heading",
        id: "core-insight",
        level: 2,
        text: "核心结论",
      },
      {
        type: "quote",
        text: "真正拉开差距的，从来不是会多少框架，而是有没有工程思维。",
      },
      {
        type: "list",
        items: [
          "框架一年换一批。",
          "模型几个月更新一次。",
          "系统设计、业务理解、异常处理、成本优化，这些能力不会过时。",
        ],
      },
      {
        type: "paragraph",
        text: "如果你本身有前端或后端工程经验，转 Agent 开发并不是从零开始。把基础打牢，再去学习框架，会比只会跑 Demo 的人更快进入真实项目。",
      },
      {
        type: "heading",
        id: "three-month-plan",
        level: 2,
        text: "AI Agent 3 个月学习规划",
      },
      {
        type: "heading",
        id: "month-1",
        level: 3,
        text: "第 1 个月：打基础，建认知（约 120 小时）",
      },
      {
        type: "table",
        headers: ["模块", "内容"],
        rows: [
          [
            "学习内容",
            "AI Agent 概述、LLM 基础、Prompt Engineering、上下文管理、记忆机制、Agent 架构、工具使用、规划推理、Python 基础、API 调用、JSON、向量数据库。",
          ],
          [
            "实践项目",
            "简单对话 Agent、具备短期记忆的聊天机器人、调用外部工具的 Agent、本地文档问答 RAG 初体验。",
          ],
          [
            "阶段产出",
            "知识笔记、基础对话 Agent、带工具调用的 Agent、基于文档的问答 Agent。",
          ],
        ],
      },
      {
        type: "heading",
        id: "month-2",
        level: 3,
        text: "第 2 个月：深入学习，掌握框架（约 120 小时）",
      },
      {
        type: "table",
        headers: ["模块", "内容"],
        rows: [
          [
            "学习内容",
            "LangChain 核心概念、AgentExecutor、链、工具集成、自定义工具、长期记忆、多模态能力、任务规划、多 Agent 协作、反思与自我改进、安全与对齐、结构化提示、CoT、ReAct、Self-Ask。",
          ],
          [
            "实践项目",
            "多工具 Agent、多文档问答 Agent、任务分解型 Agent、Multi-Agent 协作实验。",
          ],
          [
            "阶段产出",
            "多工具通用 Agent、企业级文档问答 Agent、任务规划与执行 Agent。",
          ],
        ],
      },
      {
        type: "heading",
        id: "month-3",
        level: 3,
        text: "第 3 个月：项目实战，优化提升（约 120 小时）",
      },
      {
        type: "table",
        headers: ["模块", "内容"],
        rows: [
          [
            "学习内容",
            "项目设计与需求分析、功能拆解与流程设计、前端和接口集成、数据存储、部署配置、性能优化、评估方法、日志监控、发布迭代。",
          ],
          [
            "实践项目",
            "智能知识助手、个人效率助手、代码助手、数据分析助手，任选一个做成完整可演示产品。",
          ],
          [
            "项目要求",
            "具备记忆与检索能力，支持多工具调用，有良好的用户交互界面，可部署可演示。",
          ],
          [
            "阶段产出",
            "完整可演示的 AI Agent 产品、项目文档、演示视频或作品集。",
          ],
        ],
      },
      {
        type: "heading",
        id: "learning-advice",
        level: 2,
        text: "学习建议",
      },
      {
        type: "list",
        items: [
          "每天保持 2 到 4 小时学习和实践。",
          "多动手、多试错、多复盘。",
          "关注最新技术动态与优秀开源项目。",
        ],
      },
      {
        type: "heading",
        id: "recommended-resources",
        level: 2,
        text: "推荐资源",
      },
      {
        type: "list",
        items: [
          "LangChain 官方文档。",
          "OpenAI 官方文档。",
          "向量数据库文档，例如 Chroma、Pinecone。",
          "GitHub 优质开源项目。",
        ],
      },
      {
        type: "heading",
        id: "bonus",
        level: 2,
        text: "加分项",
      },
      {
        type: "list",
        items: [
          "学习模型微调基础。",
          "探索 AutoGPT、BabyAGI 等项目。",
          "参与社区或开源贡献。",
        ],
      },
    ],
  },
];
