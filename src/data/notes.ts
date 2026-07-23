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
    featured: true,
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
    title: "如何撰写一份出色的项目复盘？",
    category: "项目复盘",
    tags: ["复盘", "项目管理", "方法论"],
    summary:
      "一份出色的项目复盘，不是走过场，而是通过目标还原、过程分析、根因挖掘和行动闭环，把项目经验转化为可复用的改进方法。",
    createdAt: "2026-07-19",
    updatedAt: "2026-07-23",
    featured: true,
    route: "/notes/project-review-method",
    readingTime: "7 分钟",
    content: [
      {
        type: "paragraph",
        text: "一份出色的项目复盘，核心在于不是“走过场”，而是真正沉淀经验、驱动改进。它需要回答三个根本问题：当初想达成什么？实际发生了什么？下次如何做得更好？",
      },
      {
        type: "heading",
        id: "basic-context",
        level: 2,
        text: "一、基础信息框架（提供上下文）",
      },
      {
        type: "list",
        items: [
          "项目背景：项目目标、业务价值、关键干系人。",
          "时间线：起止时间、关键里程碑、实际 vs 计划。",
          "团队与资源：核心成员、预算、工具/技术栈。",
          "成功标准：事先定义好的 KPI 或验收标准。",
        ],
      },
      {
        type: "quote",
        text: "没有共同基准，复盘容易变成各说各话。",
      },
      {
        type: "heading",
        id: "core-analysis",
        level: 2,
        text: "二、核心分析内容（复盘的核心）",
      },
      {
        type: "heading",
        id: "goal-review",
        level: 3,
        text: "1. 目标达成度分析",
      },
      {
        type: "list",
        items: [
          "量化结果：实际数据 vs 预设目标。",
          "定性评估：用户反馈、业务影响、技术债务变化。",
          "关键：区分“结果”与“产出”：交付了功能不等于解决了问题。",
        ],
      },
      {
        type: "heading",
        id: "process-replay",
        level: 3,
        text: "2. 过程还原与关键事件",
      },
      {
        type: "list",
        items: [
          "按时间线梳理项目全程的重大决策点、风险事件、转折点。",
          "使用客观数据支撑，例如代码提交频率、Bug 趋势、沟通记录等，避免凭印象复盘。",
        ],
      },
      {
        type: "heading",
        id: "root-cause",
        level: 3,
        text: "3. 根因分析（最重要）",
      },
      {
        type: "list",
        items: [
          "成功因素：哪些做法值得保留？是偶然还是可复现？",
          "问题与偏差：哪些环节出现延迟、质量问题或沟通断裂？",
          "推荐使用 5 Whys 或鱼骨图深挖根因，而不是停留在表面症状。",
        ],
      },
      {
        type: "heading",
        id: "decision-review",
        level: 3,
        text: "4. 决策复盘",
      },
      {
        type: "list",
        items: [
          "回顾关键决策当时的信息环境、假设条件和可选方案。",
          "评估：如果重来，决策会不同吗？当时缺少什么信息？",
        ],
      },
      {
        type: "heading",
        id: "action-transfer",
        level: 2,
        text: "三、经验沉淀与行动转化（复盘的价值所在）",
      },
      {
        type: "heading",
        id: "reusable-methodology",
        level: 3,
        text: "1. 可复用的方法论",
      },
      {
        type: "paragraph",
        text: "提炼出能指导未来项目的原则、流程、checklist、模板。例如：需求变更超过 X% 时必须触发重新评估。",
      },
      {
        type: "heading",
        id: "action-items",
        level: 3,
        text: "2. 明确的改进行动（Action Items）",
      },
      {
        type: "code",
        language: "text",
        code: "改进项 | 负责人 | 完成时间 | 验收标准\n...    | ...    | ...      | ...",
      },
      {
        type: "quote",
        text: "没有 Action Items 的复盘等于白开。必须责任到人、时间到点、标准清晰。",
      },
      {
        type: "heading",
        id: "knowledge-assets",
        level: 3,
        text: "3. 知识资产沉淀",
      },
      {
        type: "list",
        items: [
          "更新团队 Wiki、技术文档、风险清单。",
          "形成案例库，供后续项目参考。",
        ],
      },
      {
        type: "heading",
        id: "mechanism",
        level: 2,
        text: "四、氛围与机制建议（容易被忽视）",
      },
      {
        type: "list",
        items: [
          "安全环境：对事不对人，鼓励暴露问题而非追责。",
          "多元视角：邀请不同角色参与，例如产品、开发、测试、运营，避免盲区。",
          "及时性：项目结束后 1-2 周内进行，记忆还新鲜。",
          "闭环跟踪：下次复盘时先回顾上次 Action Items 的完成情况。",
        ],
      },
      {
        type: "heading",
        id: "simple-template",
        level: 2,
        text: "五、简洁复盘结构模板",
      },
      {
        type: "code",
        language: "text",
        code: "1. 项目概览（目标、范围、结果）\n2. 数据呈现（时间、成本、质量、满意度）\n3. 亮点与成功因素（Keep）\n4. 问题与根因分析（Problem + Root Cause）\n5. 改进措施与行动计划（Try / Action）\n6. 经验沉淀与知识分享（Share）",
      },
      {
        type: "heading",
        id: "summary",
        level: 2,
        text: "一句话总结",
      },
      {
        type: "paragraph",
        text: "出色的复盘 = 客观的数据还原 + 深度的根因挖掘 + 可落地的改进行动 + 组织知识的持续积累。它不是项目的“葬礼”，而是下个项目更成功的“种子”。",
      },
    ],
  },
  {
    id: "learn-from-problems",
    title: "如何从问题中学习？",
    category: "方法论沉淀",
    tags: ["问题解决", "复盘", "方法论"],
    summary:
      "把一次具体问题转化为可复用经验的方法：记录现象、追溯原因、沉淀方案，并提炼下一次解决类似问题的思维逻辑。",
    createdAt: "2026-07-23",
    updatedAt: "2026-07-23",
    featured: true,
    route: "/notes/learn-from-problems",
    readingTime: "5 分钟",
    content: [
      {
        type: "paragraph",
        text: "真正有价值的学习，不只是把某个问题解决掉，而是从问题中提炼出可迁移的判断方法。一次问题如果只停留在“修好了”，经验就会随着场景结束而消失；如果能把问题、原因、方案和启发记录下来，它就会变成下一次处理复杂情况的工具。",
      },
      {
        type: "heading",
        id: "problem",
        level: 2,
        text: "遇到的问题",
      },
      {
        type: "paragraph",
        text: "先把问题写清楚，不急着下结论。记录当时看到了什么现象、影响了谁、发生在什么场景、是否可以稳定复现。问题描述越具体，后面的分析越不容易跑偏。",
      },
      {
        type: "list",
        items: [
          "现象：用户或系统具体表现出了什么异常。",
          "范围：问题影响的是单个页面、某个接口，还是完整流程。",
          "条件：问题在什么环境、数据、权限或操作路径下出现。",
          "证据：截图、日志、报错信息、复现步骤和相关代码位置。",
        ],
      },
      {
        type: "quote",
        text: "一个问题没有被描述清楚之前，所谓解决方案大多只是猜测。",
      },
      {
        type: "heading",
        id: "root-cause",
        level: 2,
        text: "产生的原因",
      },
      {
        type: "paragraph",
        text: "原因分析的关键，是区分“直接触发点”和“真正根因”。直接触发点解释为什么这一次出了问题，根因解释为什么系统会允许这种问题发生。",
      },
      {
        type: "list",
        items: [
          "先还原链路：从输入、处理、输出三个环节看数据和行为如何流动。",
          "再定位断点：确认是认知遗漏、需求边界不清、代码实现缺陷、协作信息缺失，还是验证不足。",
          "最后追问一层：为什么这个问题没有在开发、自测、联调或上线前被发现。",
        ],
      },
      {
        type: "heading",
        id: "solution",
        level: 2,
        text: "解决方案",
      },
      {
        type: "paragraph",
        text: "解决问题时，可以把动作分成三层：先止血，再修复，最后预防。止血是降低当前影响；修复是处理根因；预防是让类似问题下次更早暴露、更容易定位。",
      },
      {
        type: "list",
        items: [
          "止血：先确认是否需要回滚、降级、临时开关或人工处理。",
          "修复：基于根因修改代码、配置、数据、流程或沟通机制。",
          "验证：用复现步骤、边界数据和构建检查确认问题真的消失。",
          "预防：补充检查清单、测试用例、日志、监控或文档说明。",
        ],
      },
      {
        type: "heading",
        id: "insight",
        level: 2,
        text: "启发：把问题变成方法",
      },
      {
        type: "paragraph",
        text: "问题解决后的复盘，不是为了证明谁对谁错，而是为了形成下一次可复用的思维逻辑。真正要沉淀的不是某个具体答案，而是从混乱现象走向清晰判断的路径。",
      },
      {
        type: "list",
        items: [
          "先描述现象，不急着归因。",
          "先缩小范围，再深入细节。",
          "先验证事实，再提出判断。",
          "先解决当前影响，再处理根因。",
          "最后抽象成规则、清单或流程，让经验可以复用。",
        ],
      },
      {
        type: "heading",
        id: "thinking-model",
        level: 2,
        text: "以后遇到类似问题的思维逻辑",
      },
      {
        type: "paragraph",
        text: "可以用一个固定框架来处理：发生了什么？为什么会发生？现在怎么解决？以后如何避免？这四个问题能把一次零散的问题处理，转化为完整的学习闭环。",
      },
      {
        type: "code",
        language: "text",
        code: "问题现象\n  -> 影响范围\n  -> 复现条件\n  -> 原因假设\n  -> 证据验证\n  -> 解决方案\n  -> 结果确认\n  -> 方法沉淀",
      },
      {
        type: "quote",
        text: "从问题中学习的核心，是把一次经历升级为下一次判断的依据。",
      },
    ],
  },
  {
    id: "software-project-introduction-framework",
    title: "软件项目介绍四段式框架",
    category: "方法论沉淀",
    tags: ["项目表达", "简历优化", "方法论"],
    summary:
      "把软件项目介绍拆成项目名称、项目描述、技术栈和项目职责四个模块，用公式、案例和避坑清单提升表达质量。",
    createdAt: "2026-07-23",
    updatedAt: "2026-07-23",
    featured: false,
    route: "/notes/software-project-introduction-framework",
    readingTime: "4 分钟",
    content: [
      {
        type: "heading",
        id: "golden-structure",
        level: 2,
        text: "一、黄金结构",
      },
      {
        type: "table",
        headers: ["模块", "核心目标", "撰写公式"],
        rows: [
          ["项目名称", "秒懂“是什么”", "[产品类型] + [核心定位]"],
          [
            "项目描述",
            "讲清价值与结果",
            "为[谁]解决[什么问题]，实现[量化结果]",
          ],
          ["项目技术栈", "展示技术深度", "前端/后端/数据库/部署/特色技术"],
          ["项目职责", "突出个人贡献", "动词开头 + 量化结果（3~5条）"],
        ],
      },
      {
        type: "heading",
        id: "case-dashboard",
        level: 2,
        text: "二、案例：数据可视化大屏",
      },
      {
        type: "paragraph",
        text: "项目名称：城市智慧交通·实时调度看板",
      },
      {
        type: "paragraph",
        text: "项目描述：为交管部门定制实时路况监测+应急调度大屏，整合5000+路摄像头/GPS/地磁。数据刷新延迟<3s，拥堵响应时间 15min→4min。",
      },
      {
        type: "paragraph",
        text: "项目技术栈：Vue2 + ECharts + Mapbox GL / Spring Cloud + Kafka / ClickHouse + PostgreSQL / 内网私有云 / 自适应4K/8K",
      },
      {
        type: "heading",
        id: "case-responsibilities",
        level: 3,
        text: "项目职责",
      },
      {
        type: "list",
        items: [
          "开发实时热力图+路况预测曲线，支持动态时间轴拖拽。",
          "搭建 WebSocket 长连接池，管理 200+ 并发客户端，50ms 内分发。",
          "虚拟滚动+数据分片，支撑 10 万+车辆轨迹点不卡顿。",
          "适配方案（rem+vw/vh），一套代码适配 6 种屏幕尺寸。",
        ],
      },
      {
        type: "heading",
        id: "tech-stack-upgrade",
        level: 2,
        text: "三、技术栈表达升级",
      },
      {
        type: "table",
        headers: ["平庸写法", "高级写法"],
        rows: [
          ["用了 Vue 全家桶", "Vue3 + Vite + Pinia 工程化体系"],
          ["用了 MySQL", "MySQL + Redis 缓存热点查询"],
          ["调了接口", "Axios 二次拦截，统一 Token 刷新+错误码"],
          ["做了图表", "ECharts 定制组件，支持数据下钻"],
          ["部署上线", "Jenkins + Docker CI/CD，一键回滚"],
          ["优化性能", "路由懒加载+CDN 分离+Gzip，首屏↑60%"],
        ],
      },
      {
        type: "heading",
        id: "pitfalls",
        level: 2,
        text: "四、避坑要点",
      },
      {
        type: "table",
        headers: ["问题", "对策"],
        rows: [
          ["只参与 1%", "职责写那 1%，量化其价值。"],
          ["技术栈老旧", "承认事实，强调“在旧架构下做现代化改造”。"],
          ["项目未上线", "描述改为“预期目标”或压测数据。"],
          ["项目过大", "只写负责的子系统，如“订单履约子系统”。"],
        ],
      },
      {
        type: "heading",
        id: "template",
        level: 2,
        text: "五、万能填空模板",
      },
      {
        type: "code",
        language: "text",
        code: "**项目名称：** [类型]·[核心功能]\n\n**项目描述：** 为[目标用户]打造的[产品]，解决[痛点]。上线后[量化结果1]，[量化结果2]。\n\n**项目技术栈：** 前端[框架]；后端[语言+框架]；数据库[类型]；中间件[缓存/队列]；部署[环境]；特色[最亮眼技术点]。\n\n**项目职责：**\n- [动词][模块A]，实现[量化指标]，[技术手段]\n- [动词][模块B]，[指标]从[A]→[B]，[技术手段]\n- 优化[体验点]，[指标]改善[百分比]\n- 参与[团队协作]，保证[按时交付/质量稳定]",
      },
    ],
  },
];
