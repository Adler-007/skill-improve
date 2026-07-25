import type { Note } from "../types";

export const methodSummaryNotes: Note[] = [
  {
    id: "learn-from-problems",
    title: "如何从问题中学习？",
    category: "方法论沉淀",
    categoryOrder: 1,
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
    categoryOrder: 2,
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
