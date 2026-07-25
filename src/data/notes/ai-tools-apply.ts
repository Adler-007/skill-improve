import type { Note } from "../types";

export const aiToolsApplyNotes: Note[] = [
  {
    id: "ai-assisted-workflow",
    title: "AI 辅助开发工作流记录",
    category: "AI 工具使用",
    categoryOrder: 1,
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
];
