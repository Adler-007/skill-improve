<script setup lang="ts">
import { useRouter } from "vue-router";
import { categoriesWithStats, getNotesByCategory } from "../data/content";

const categoryRows = categoriesWithStats.map((category) => ({
  ...category,
  notes: getNotesByCategory(category.name).slice(0, 3)
}));

const router = useRouter();

const openCategory = (categoryName: string) => {
  router.push({ path: "/notes", query: { category: categoryName } });
};
</script>

<template>
  <section class="categories-page">
    <div class="page-panel">
      <p class="eyebrow">Categories</p>
      <h1>知识分类</h1>
      <p>
        分类信息由基础分类定义和文章数据共同生成，文章数量、最近更新和代表标签会随着内容增加自动变化。
      </p>
    </div>

    <div class="focus-grid">
      <article
        v-for="category in categoryRows"
        :key="category.name"
        class="focus-card category-card"
        role="link"
        tabindex="0"
        :aria-label="`查看${category.name}分类`"
        @click="openCategory(category.name)"
        @keydown.enter="openCategory(category.name)"
        @keydown.space.prevent="openCategory(category.name)"
      >
        <span class="card-meta">{{ category.meta }}</span>
        <h2>{{ category.name }}</h2>
        <p>{{ category.summary }}</p>
        <div class="category-stats">
          <span>{{ category.count }} 篇文章</span>
          <span>更新：{{ category.updatedAt ?? "待补充" }}</span>
        </div>
        <div v-if="category.tags.length" class="note-tags" aria-label="代表标签">
          <span v-for="tag in category.tags" :key="tag" class="note-tag">{{ tag }}</span>
        </div>
        <div v-if="category.notes.length" class="category-note-links">
          <RouterLink
            v-for="note in category.notes"
            :key="note.id"
            :to="note.route"
            @click.stop
            @keydown.enter.stop
            @keydown.space.stop
          >
            {{ note.title }}
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>
