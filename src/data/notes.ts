import type { Note } from "./types";

export const notes: Note[] = [
  {
    id: "system-ability",
    title: "如何理解系统能力",
    category: "系统理解能力",
    tags: ["认知", "系统设计", "方法论"],
    summary: "整理对系统理解能力的定义、组成和训练方式。",
    createdAt: "2026-07-19",
    updatedAt: "2026-07-19",
    featured: true,
    route: "/notes/system-ability",
    readingTime: "6 分钟",
    content: [
      {
        type: "paragraph",
        text: "系统能力不是把很多知识点记住，而是能在复杂问题中识别边界、关系、反馈和约束，并把它们组织成可以被讨论和验证的结构。",
      },
      {
        type: "heading",
        id: "definition",
        level: 2,
        text: "能力定义",
      },
      {
        type: "paragraph",
        text: "我把系统理解能力拆成三层：看见组成部分，理解部分之间的关系，判断关系变化后会带来的连锁影响。",
      },
      {
        type: "list",
        items: [
          "组成部分：明确系统中有哪些对象、角色、模块和资源。",
          "关系结构：识别依赖、输入输出、控制流和信息流。",
          "动态影响：判断一个变化会如何传导，并找到真正的关键变量。",
        ],
      },
      {
        type: "heading",
        id: "practice",
        level: 2,
        text: "训练方式",
      },
      {
        type: "paragraph",
        text: "训练系统理解能力时，重点不是追求完整的大图，而是反复练习用结构化语言描述问题。每次复盘都记录边界、假设、因果链和未验证点。",
      },
      {
        type: "quote",
        text: "当一个问题被拆成边界、关系和反馈之后，它才真正进入可分析状态。",
      },
    ],
  },
  {
    id: "frontend-backend-handbook-opening",
    title: "前端工程师的后端修炼手册（开篇）",
    category: "系统理解能力",
    tags: ["系统理解", "后端思维", "工程协作"],
    summary:
      "从前端工程师的职业困境出发，整理为什么要学习后端思维，以及如何用系统视角理解接口、数据库、缓存和日志。",
    createdAt: "2026-07-19",
    updatedAt: "2026-07-19",
    featured: false,
    route: "/notes/frontend-backend-handbook-opening",
    readingTime: "5 分钟",
    content: [
      {
        type: "heading",
        id: "core-view",
        level: 2,
        text: "核心观点",
      },
      {
        type: "paragraph",
        text: "《前端工程师的后端修炼手册》的开篇，重点不是劝前端转行做 Java 工程师，而是说明前端为什么需要建立后端思维，进而拥有更完整的工程视角。",
      },
      {
        type: "heading",
        id: "career-context",
        level: 2,
        text: "前端工程师的职业困境",
      },
      {
        type: "quote",
        text: "Vue、React 我都会，TypeScript 也没问题。但公司后端是 Java，每次接口出问题，我只能等后端排查。Leader 让我去后端项目看看，我打开 IDEA，三分钟后又默默关掉了。",
      },
      {
        type: "paragraph",
        text: "这种困境在工作三年以上的前端工程师中很常见。现代软件开发越来越强调工程协作，前端的边界不再只是写页面，还会频繁接触接口性能、缓存、索引、日志和线上问题定位。",
      },
      {
        type: "heading",
        id: "not-java-syntax",
        level: 2,
        text: "真正困住前端的不是 Java 语法",
      },
      {
        type: "paragraph",
        text: "很多人误以为学后端就是学 Java 语法，但企业里的 Java 项目从来不是一道语法题，而是一套工程体系。真正需要理解的是系统为什么这样分层、数据如何流动、问题如何定位。",
      },
      {
        type: "list",
        items: [
          "困住人的不是 for 循环、泛型、JVM，而是 Controller、Service、Mapper 为什么要分层。",
          "困住人的不是 Java 语法，而是数据库设计如何影响接口返回。",
          "困住人的不是面向对象，而是 Redis 为什么能让系统变快。",
          "困住人的不是单个知识点，而是线上问题为什么要先看日志。",
          "困住人的不是代码行数，而是为什么一个简单需求会牵动很多文件。",
        ],
      },
      {
        type: "heading",
        id: "backend-thinking",
        level: 2,
        text: "学习后端不是转行做 Java 工程师",
      },
      {
        type: "paragraph",
        text: "前端学习后端的真正目的，是从“后端接口太慢了”的抱怨，转向对索引、缓存、SQL 复杂度、网络层和日志链路的分析。代码未必发生变化，但思考问题的方式会发生变化。",
      },
      {
        type: "heading",
        id: "system-gap",
        level: 2,
        text: "工作五年后拉开差距的能力",
      },
      {
        type: "quote",
        text: "你能不能理解一个系统——从用户点击按钮，到数据返回页面，中间到底经历了什么。",
      },
      {
        type: "paragraph",
        text: "成熟的软件工程师会关心接口在哪里、数据库在哪里、缓存在哪里、日志怎么看，以及问题应该如何定位。这些能力共同构成了对系统运行过程的理解。",
      },
      {
        type: "heading",
        id: "language-and-thinking",
        level: 2,
        text: "后端是一种思维，不是一门语言",
      },
      {
        type: "paragraph",
        text: "真正需要学习的不是 Java 语法本身，而是为什么要这样设计接口，为什么业务要分层，为什么需要数据库、缓存、权限、日志和部署。语言只是工具，思维才决定成长上限。",
      },
      {
        type: "heading",
        id: "summary",
        level: 2,
        text: "一句话总结",
      },
      {
        type: "quote",
        text: "真正限制前端工程师成长的，从来不是不会写 Java，而是看不懂企业级后端项目。",
      },
      {
        type: "paragraph",
        text: "当你开始理解接口设计、数据库建模、缓存使用和日志分析时，你正在从写页面的人，成长为真正理解系统的软件工程师。",
      },
    ],
  },
  {
    id: "frontend-open-spring-boot-project",
    title: "前端工程师第一次打开 Spring Boot 项目，到底应该先看什么？",
    category: "系统理解能力",
    tags: ["Spring Boot", "请求链路", "后端思维"],
    summary:
      "整理前端工程师阅读 Spring Boot 项目的六步方法：先建立全局，再顺着请求流向理解 Controller、Service、Mapper 和数据库。",
    createdAt: "2026-07-19",
    updatedAt: "2026-07-19",
    featured: false,
    route: "/notes/frontend-open-spring-boot-project",
    readingTime: "6 分钟",
    content: [
      {
        type: "heading",
        id: "core-view",
        level: 2,
        text: "核心观点",
      },
      {
        type: "paragraph",
        text: "一套让前端工程师快速读懂 Spring Boot 项目的方法。核心主张是：前端不是不会 Java，而是不会阅读 Java 项目；阅读的关键不是逐行看代码，而是理解请求的流向。",
      },
      {
        type: "heading",
        id: "why-complex",
        level: 2,
        text: "为什么前端会觉得 Java 项目复杂",
      },
      {
        type: "paragraph",
        text: "前端项目和后端项目的组织方式不同。Vue 项目通常按功能组织，Spring Boot 项目更多按职责组织。看懂这种组织原则，是降低陌生感的第一步。",
      },
      {
        type: "heading",
        id: "frontend-structure",
        level: 3,
        text: "Vue 项目按功能组织",
      },
      {
        type: "code",
        language: "text",
        code: "src\n├── api          ← 接口\n├── components   ← 组件\n├── router       ← 路由\n├── stores       ← 状态\n├── views        ← 页面\n└── utils        ← 工具",
      },
      {
        type: "heading",
        id: "backend-structure",
        level: 3,
        text: "Spring Boot 项目按职责组织",
      },
      {
        type: "code",
        language: "text",
        code: "src/main/java\n├── controller   ← 入口/接收请求\n├── service      ← 业务逻辑\n├── mapper       ← 数据访问\n├── entity       ← 数据实体\n├── config       ← 配置\n├── common       ← 公共\n├── security     ← 安全\n└── exception    ← 异常",
      },
      {
        type: "quote",
        text: "Java 项目不是按“功能”组织的，而是按“职责（Responsibility）”组织的。",
      },
      {
        type: "heading",
        id: "six-steps",
        level: 2,
        text: "六步阅读法",
      },
      {
        type: "heading",
        id: "step-structure",
        level: 3,
        text: "第一步：先看项目结构",
      },
      {
        type: "paragraph",
        text: "不要急着展开代码，先浏览整个目录，了解项目里有哪些角色。这个动作类似进商场先看导览图，先知道每层楼大概负责什么。",
      },
      {
        type: "heading",
        id: "step-entry",
        level: 3,
        text: "第二步：找到项目入口",
      },
      {
        type: "paragraph",
        text: "前端项目常见入口是 main.ts，Spring Boot 项目的入口通常是 Application.java。以后看到任何 Spring Boot 项目，第一件事就是找到启动类。",
      },
      {
        type: "code",
        language: "java",
        code: "@SpringBootApplication\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}",
      },
      {
        type: "heading",
        id: "step-config",
        level: 3,
        text: "第三步：先看 application.yml",
      },
      {
        type: "paragraph",
        text: "application.yml 能告诉你整个项目的技术栈。比如 redis 表示项目用了 Redis，mybatis 表示数据库访问用了 MyBatis，minio 表示文件上传走 MinIO，knife4j 表示项目可能有 Swagger 接口文档。",
      },
      {
        type: "quote",
        text: "先看配置，比一头扎进代码有效得多。",
      },
      {
        type: "heading",
        id: "step-controller",
        level: 3,
        text: "第四步：不要搜 SQL，先找 Controller",
      },
      {
        type: "paragraph",
        text: "所有 HTTP 请求都会先到 Controller。从 Controller 可以先确认接口地址、所属模块和请求入口，而不是一开始就跳进数据库和 SQL。",
      },
      {
        type: "code",
        language: "java",
        code: '@RestController\n@RequestMapping("/user")\npublic class UserController {\n    @GetMapping("/info")\n    public UserVO info() { }\n}',
      },
      {
        type: "list",
        items: [
          "接口地址：GET /user/info。",
          "所属模块：用户模块。",
          "Controller 只是入口，真正的业务逻辑还在后面。",
        ],
      },
      {
        type: "heading",
        id: "step-flow",
        level: 3,
        text: "第五步：顺着接口一路往下走",
      },
      {
        type: "code",
        language: "text",
        code: "浏览器\n  ↓\nController（入口）\n  ↓\nService（业务逻辑）\n  ↓\nMapper（数据访问）\n  ↓\nMySQL（数据库）",
      },
      {
        type: "code",
        language: "text",
        code: "MySQL → Mapper → Service → Controller → JSON → 浏览器",
      },
      {
        type: "quote",
        text: "永远不要跳着看，顺着请求的流向走。",
      },
      {
        type: "heading",
        id: "step-one-api",
        level: 3,
        text: "第六步：每天只看一个接口",
      },
      {
        type: "paragraph",
        text: "不要试图一天把整个项目看懂。更有效的做法是今天看 GET /user/info，明天看 GET /user/list，后天看 POST /user/save。坚持两周后，Controller、Service、Mapper 会越来越熟悉。",
      },
      {
        type: "heading",
        id: "reading-order",
        level: 2,
        text: "阅读口诀",
      },
      {
        type: "paragraph",
        text: "错误做法是上来就搜 SQL、搜字段、全局搜索，或者一个目录一个目录乱点。正确做法是先看项目目录，再找 Application 启动类，然后看 application.yml，再找 Controller，顺着 Service 找 Mapper，最后再看 SQL。",
      },
      {
        type: "code",
        language: "text",
        code: "① 看项目目录\n    ↓\n② 找 Application 启动类\n    ↓\n③ 看 application.yml\n    ↓\n④ 找 Controller\n    ↓\n⑤ 跟着 Service\n    ↓\n⑥ 找 Mapper\n    ↓\n⑦ 最后再看 SQL",
      },
      {
        type: "heading",
        id: "final-note",
        level: 2,
        text: "写在最后",
      },
      {
        type: "quote",
        text: "阅读 Java 项目，不是阅读代码，而是阅读整个请求的流向。",
      },
      {
        type: "paragraph",
        text: "当能够顺着一个请求，从浏览器一路走到数据库，再一路返回浏览器时，你就已经迈出了从前端工程师到全栈工程师的重要一步。复杂的是企业业务，Spring Boot 本身并没有那么难。真正重要的是建立正确的阅读顺序：先建立全局，再理解局部。",
      },
    ],
  },
  {
    id: "ai-assisted-workflow",
    title: "AI 辅助开发工作流记录",
    category: "AI 工具使用",
    tags: ["AI", "开发效率", "工作流"],
    summary: "记录如何把 AI 工具纳入需求分析、编码实现和验证流程。",
    createdAt: "2026-07-19",
    updatedAt: "2026-07-19",
    featured: false,
    route: "/notes/ai-assisted-workflow",
    readingTime: "4 分钟",
    content: [
      {
        type: "paragraph",
        text: "AI 辅助开发的价值不只是生成代码，而是帮助把模糊任务拆成可执行步骤，并在实现后补上验证环节。",
      },
      {
        type: "heading",
        id: "workflow",
        level: 2,
        text: "工作流",
      },
      {
        type: "list",
        items: [
          "分析PRD（产品需求文档），理清需要实现的功能逻辑",
          "先读现有代码和产品约束，避免脱离上下文设计方案。",
          "找出当前需求相关的文件结构和代码逻辑，避免影响项目已有功能",
          "根据需求做出Spec文档（通常包含Requirement、Design、Task文档）",
          "对齐完Spec文档之后，按照task文档的步骤进行开发",
          "每次改动后让AI进行类型检查或构建，确认静态站点能正常生成。",
          "最后进行上线与跟进",
        ],
      },
      {
        type: "heading",
        id: "principle",
        level: 2,
        text: "协作原则",
      },
      {
        type: "paragraph",
        text: "适合交给 AI 的部分是重复性强、边界清楚、需要快速生成初稿的工作；需要人工判断的部分是产品取舍、内容真实性和长期维护策略。",
      },
    ],
  },
  {
    id: "project-review-method",
    title: "项目复盘的最小结构",
    category: "项目复盘",
    tags: ["复盘", "项目管理", "方法论"],
    summary: "给项目结束后的复盘建立一个轻量但稳定的记录框架。",
    createdAt: "2026-07-19",
    updatedAt: "2026-07-19",
    featured: false,
    route: "/notes/project-review-method",
    readingTime: "5 分钟",
    content: [
      {
        type: "paragraph",
        text: "项目复盘的核心在于不是“走过场”，而是真正沉淀经验、驱动改进。它需要回答三个根本问题：当初想达成什么？实际发生了什么？下次如何做得更好？",
      },
      {
        type: "heading",
        id: "template",
        level: 2,
        text: "复盘模板",
      },
      {
        type: "list",
        items: [
          "1. 项目概览（目标、范围、结果）",
          "2. 数据呈现（时间、成本、质量、满意度）",
          "3. 亮点与成功因素（Keep）",
          "4. 问题与根因分析（Problem + Root Cause）",
          "5. 改进措施与行动计划（Try / Action）",
          "6. 经验沉淀与知识分享（Share）",
        ],
      },
      {
        type: "heading",
        id: "output",
        level: 2,
        text: "输出标准",
      },
      {
        type: "paragraph",
        text: "出色的复盘 = 客观的数据还原 + 深度的根因挖掘 + 可落地的改进行动 + 组织知识的持续积累。",
      },
    ],
  },
];
