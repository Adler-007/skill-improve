import type { Note } from "../types";

export const projectReviewNotes: Note[] = [
  {
    id: "project-review-method",
    title: "如何撰写一份出色的项目复盘？",
    category: "项目复盘",
    categoryOrder: 1,
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
];
