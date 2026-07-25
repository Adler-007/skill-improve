<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  categoriesWithStats,
  sortNotesByCategoryOrder,
  sortedNotes,
  tagStats
} from "../data/content";

const route = useRoute();
const router = useRouter();
const searchInput = ref(typeof route.query.q === "string" ? route.query.q : "");

const selectedCategory = computed(() =>
  typeof route.query.category === "string" ? route.query.category : ""
);

const selectedTag = computed(() => (typeof route.query.tag === "string" ? route.query.tag : ""));

const selectedFeatured = computed(() => route.query.featured === "true");

const searchQuery = computed(() => (typeof route.query.q === "string" ? route.query.q.trim() : ""));

watch(
  () => route.query.q,
  (q) => {
    searchInput.value = typeof q === "string" ? q : "";
  }
);

const buildQuery = (overrides: Record<string, string | boolean | null>) => {
  const nextQuery: Record<string, string> = {};

  if (searchQuery.value) nextQuery.q = searchQuery.value;
  if (selectedCategory.value) nextQuery.category = selectedCategory.value;
  if (selectedTag.value) nextQuery.tag = selectedTag.value;
  if (selectedFeatured.value) nextQuery.featured = "true";

  Object.entries(overrides).forEach(([key, value]) => {
    if (value === null || value === false || value === "") {
      delete nextQuery[key];
      return;
    }

    nextQuery[key] = value === true ? "true" : String(value);
  });

  return nextQuery;
};

const submitSearch = () => {
  router.push({
    path: "/notes",
    query: buildQuery({ q: searchInput.value.trim() || null })
  });
};

const visibleNotes = computed(() => {
  const filteredNotes = sortedNotes.filter((note) => {
    const matchesCategory = selectedCategory.value
      ? note.category === selectedCategory.value
      : true;
    const matchesTag = selectedTag.value ? note.tags.includes(selectedTag.value) : true;
    const matchesFeatured = selectedFeatured.value ? note.featured : true;
    const keyword = searchQuery.value.toLowerCase();
    const searchableText = [
      note.title,
      note.summary,
      note.category,
      ...note.tags
    ].join(" ").toLowerCase();
    const matchesKeyword = keyword ? searchableText.includes(keyword) : true;

    return matchesCategory && matchesTag && matchesFeatured && matchesKeyword;
  });

  return selectedCategory.value ? sortNotesByCategoryOrder(filteredNotes) : filteredNotes;
});
</script>

<template>
  <section class="notes-page">
    <div class="page-panel">
      <p class="eyebrow">Notes</p>
      <h1>文章列表</h1>
      <p>
        汇总已经转换为网页内容的知识条目，支持按关键词、分类、标签和精选状态快速缩小范围。
      </p>
    </div>

    <form class="search-panel full-width" role="search" @submit.prevent="submitSearch">
      <label class="search-label" for="notes-search">搜索知识内容</label>
      <div class="search-control">
        <input
          id="notes-search"
          v-model="searchInput"
          class="search-input"
          type="search"
          placeholder="搜索标题、摘要、分类或标签"
        />
        <button class="search-button" type="submit">搜索</button>
      </div>
    </form>

    <div class="notes-layout">
      <aside class="notes-sidebar" aria-label="文章筛选">
        <section class="filter-group">
          <h2>分类</h2>
          <RouterLink
            class="filter-link"
            :class="{ active: !selectedCategory }"
            :to="{ path: '/notes', query: buildQuery({ category: null }) }"
          >
            全部分类
          </RouterLink>
          <RouterLink
            v-for="category in categoriesWithStats"
            :key="category.name"
            class="filter-link"
            :class="{ active: selectedCategory === category.name }"
            :to="{ path: '/notes', query: buildQuery({ category: category.name }) }"
          >
            {{ category.name }} · {{ category.count }}
          </RouterLink>
        </section>

        <section class="filter-group">
          <h2>精选</h2>
          <RouterLink
            class="filter-link"
            :class="{ active: !selectedFeatured }"
            :to="{ path: '/notes', query: buildQuery({ featured: null }) }"
          >
            全部文章
          </RouterLink>
          <RouterLink
            class="filter-link"
            :class="{ active: selectedFeatured }"
            :to="{ path: '/notes', query: buildQuery({ featured: true }) }"
          >
            只看精选
          </RouterLink>
        </section>

        <section class="filter-group">
          <h2>标签</h2>
          <RouterLink
            class="filter-link"
            :class="{ active: !selectedTag }"
            :to="{ path: '/notes', query: buildQuery({ tag: null }) }"
          >
            全部标签
          </RouterLink>
        </section>
        <div class="tag-cloud">
          <RouterLink
            v-for="tag in tagStats"
            :key="tag.name"
            class="tag-chip"
            :class="{ active: selectedTag === tag.name }"
            :to="{ path: '/notes', query: buildQuery({ tag: tag.name }) }"
          >
            {{ tag.name }} · {{ tag.count }}
          </RouterLink>
        </div>
      </aside>

      <div class="note-list" aria-label="文章列表">
        <div class="result-summary">
          <strong>{{ visibleNotes.length }}</strong>
          <span>篇文章</span>
          <RouterLink
            v-if="searchQuery || selectedCategory || selectedTag || selectedFeatured"
            class="text-link"
            to="/notes"
          >
            清除筛选
          </RouterLink>
        </div>

        <RouterLink
          v-for="note in visibleNotes"
          :key="note.id"
          class="note-card"
          :to="note.route"
        >
          <div class="note-card-head">
            <span class="card-meta">{{ note.category }}</span>
            <span v-if="note.featured" class="featured-badge">精选</span>
          </div>
          <h2>{{ note.title }}</h2>
          <p>{{ note.summary }}</p>
          <div class="note-card-foot">
            <span>{{ note.updatedAt }}</span>
            <span>{{ note.readingTime }}</span>
          </div>
          <div class="note-tags" aria-label="文章标签">
            <span v-for="tag in note.tags" :key="tag" class="note-tag">{{ tag }}</span>
          </div>
        </RouterLink>

        <div v-if="!visibleNotes.length" class="empty-state">
          <h2>暂无匹配文章</h2>
          <p>当前关键词或筛选条件没有匹配内容。</p>
          <RouterLink class="text-link" to="/notes">查看全部文章</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
