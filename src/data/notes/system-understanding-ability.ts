import type { Note } from "../types";

export const systemUnderstandingAbilityNotes: Note[] = [
  {
    id: "system-ability",
    title: "如何理解系统能力",
    category: "系统理解能力",
    categoryOrder: 1,
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
];
