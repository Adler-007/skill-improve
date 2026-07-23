<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import CountUpNumber from "../components/CountUpNumber.vue";
import {
  categoriesWithStats,
  featuredNotes,
  recentNotes,
  tagStats,
  totalCategoryCount,
  totalNoteCount
} from "../data/content";

const learningPath = [
  "系统理解能力",
  "工程转agent应用开发",
  "AI 工具使用",
  "项目复盘"
];

const router = useRouter();
const searchQuery = ref("");

const submitSearch = () => {
  const q = searchQuery.value.trim();

  router.push({
    path: "/notes",
    query: q ? { q } : {}
  });
};
</script>

<template>
  <section class="dashboard">
    <header class="dashboard-hero">
      <div class="dashboard-intro">
        <p class="eyebrow">Knowledge Dashboard</p>
        <h1>个人知识系统</h1>
        <p class="intro-copy">
          用清晰的分类、稳定的结构和舒适的阅读体验，展示持续积累的知识内容。
        </p>
        <div class="hero-actions" aria-label="首页快捷入口">
          <RouterLink class="primary-link" to="/notes">浏览文章</RouterLink>
          <RouterLink class="secondary-link" to="/categories">查看分类</RouterLink>
        </div>
      </div>

      <div class="overview-panel" aria-label="知识库概览">
        <div class="overview-stat">
          <strong class="overview-number">
            <CountUpNumber class="overview-count" :value="totalNoteCount" />
          </strong>
          <span>文章</span>
        </div>
        <div class="overview-stat">
          <strong class="overview-number">
            <CountUpNumber class="overview-count" :value="totalCategoryCount" />
          </strong>
          <span>分类</span>
        </div>
        <div class="overview-stat">
          <strong class="overview-number">
            <CountUpNumber class="overview-count" :value="tagStats.length" />
          </strong>
          <span>标签</span>
        </div>
      </div>
    </header>

    <form class="search-panel" role="search" @submit.prevent="submitSearch">
      <label class="search-label" for="knowledge-search">搜索知识内容</label>
      <div class="search-control">
        <input
          id="knowledge-search"
          v-model="searchQuery"
          class="search-input"
          type="search"
          placeholder="搜索标题、摘要、分类或标签"
        />
        <button class="search-button" type="submit">搜索</button>
      </div>
    </form>

    <section class="content-section" aria-labelledby="focus-title">
      <div class="section-heading">
        <p class="eyebrow">Focus Areas</p>
        <h2 id="focus-title">知识分类</h2>
      </div>

      <div class="focus-grid">
        <RouterLink
          v-for="category in categoriesWithStats"
          :key="category.name"
          class="focus-card"
          :to="{ path: '/notes', query: { category: category.name } }"
        >
          <span class="card-meta">{{ category.meta }}</span>
          <h3>{{ category.name }}</h3>
          <p>{{ category.summary }}</p>
          <div class="category-stats">
            <span>{{ category.count }} 篇文章</span>
            <span>更新：{{ category.updatedAt ?? "待补充" }}</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="content-section" aria-labelledby="path-title">
      <div class="section-heading">
        <p class="eyebrow">Learning Path</p>
        <h2 id="path-title">推荐学习路径</h2>
      </div>

      <div class="path-list">
        <RouterLink
          v-for="(name, index) in learningPath"
          :key="name"
          class="path-step"
          :to="{ path: '/notes', query: { category: name } }"
        >
          <span>{{ String(index + 1).padStart(2, "0") }}</span>
          <strong>{{ name }}</strong>
        </RouterLink>
      </div>
    </section>

    <section class="content-section" aria-labelledby="recent-title">
      <div class="section-heading">
        <p class="eyebrow">Recent Updates</p>
        <h2 id="recent-title">最近更新</h2>
      </div>

      <div class="compact-note-list">
        <RouterLink v-for="note in recentNotes" :key="note.id" class="compact-note" :to="note.route">
          <span>{{ note.updatedAt }}</span>
          <strong>{{ note.title }}</strong>
          <em>{{ note.category }}</em>
        </RouterLink>
      </div>
    </section>

    <section class="content-section" aria-labelledby="featured-title">
      <div class="section-heading">
        <p class="eyebrow">Featured</p>
        <h2 id="featured-title">精选内容</h2>
      </div>

      <div class="note-list two-column">
        <RouterLink
          v-for="note in featuredNotes"
          :key="note.id"
          class="note-card"
          :to="note.route"
        >
          <div class="note-card-head">
            <span class="card-meta">{{ note.category }}</span>
            <span class="featured-badge">精选</span>
          </div>
          <h3>{{ note.title }}</h3>
          <p>{{ note.summary }}</p>
          <div class="note-tags" aria-label="文章标签">
            <span v-for="tag in note.tags" :key="tag" class="note-tag">{{ tag }}</span>
          </div>
        </RouterLink>
      </div>
    </section>
  </section>
</template>
