<script setup lang="ts">
const focusAreas = [
  {
    title: "系统理解能力",
    summary: "沉淀系统拆解、问题建模、结构化分析和长期复盘方法。",
    meta: "核心能力"
  },
  {
    title: "前端工程",
    summary: "整理 Vue、工程化、组件设计、性能优化和交互实现经验。",
    meta: "技术实践"
  },
  {
    title: "AI 工具使用",
    summary: "记录提示词、工作流、自动化协作和 AI 辅助开发方法。",
    meta: "效率工具"
  },
  {
    title: "项目复盘",
    summary: "把项目经历转化成可复用的判断标准、流程和检查清单。",
    meta: "经验沉淀"
  }
];
</script>

<template>
  <section class="dashboard">
    <div class="dashboard-intro">
      <p class="eyebrow">Knowledge Dashboard</p>
      <h1>个人知识系统</h1>
      <p class="intro-copy">
        用清晰的分类、稳定的结构和舒适的阅读体验，展示持续积累的知识内容。
      </p>
    </div>

    <div class="search-panel" role="search">
      <label class="search-label" for="knowledge-search">搜索知识内容</label>
      <input
        id="knowledge-search"
        class="search-input"
        type="search"
        placeholder="搜索标题、分类或标签"
        disabled
      />
    </div>

    <section class="content-section" aria-labelledby="focus-title">
      <div class="section-heading">
        <p class="eyebrow">Focus Areas</p>
        <h2 id="focus-title">知识分类</h2>
      </div>

      <div class="focus-grid">
        <article v-for="area in focusAreas" :key="area.title" class="focus-card">
          <span class="card-meta">{{ area.meta }}</span>
          <h3>{{ area.title }}</h3>
          <p>{{ area.summary }}</p>
        </article>
      </div>
    </section>
  </section>
</template>
