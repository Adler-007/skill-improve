<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import CodeBlock from "../components/CodeBlock.vue";
import { getAdjacentNotes, getNoteById, getRelatedNotes } from "../data/content";

const route = useRoute();

const note = computed(() => {
  const id = typeof route.params.id === "string" ? route.params.id : "";
  return getNoteById(id);
});

const tableOfContents = computed(() =>
  note.value?.content.filter((block) => block.type === "heading" && block.id && block.text) ?? []
);

const adjacentNotes = computed(() =>
  note.value ? getAdjacentNotes(note.value.id) : { previous: null, next: null }
);

const relatedNotes = computed(() => (note.value ? getRelatedNotes(note.value) : []));
</script>

<template>
  <article v-if="note" class="note-detail">
    <header class="note-hero">
      <RouterLink class="back-link" to="/notes">返回文章列表</RouterLink>
      <p class="note-category-label">{{ note.category }}</p>
      <h1>{{ note.title }}</h1>
      <p class="note-summary">{{ note.summary }}</p>
      <div class="note-meta-line">
        <span>创建：{{ note.createdAt }}</span>
        <span>更新：{{ note.updatedAt }}</span>
        <span>{{ note.readingTime }}</span>
      </div>
      <div class="note-tags" aria-label="文章标签">
        <RouterLink
          v-for="tag in note.tags"
          :key="tag"
          class="note-tag"
          :to="{ path: '/notes', query: { tag } }"
        >
          {{ tag }}
        </RouterLink>
      </div>
    </header>

    <div class="note-reading-layout">
      <div class="note-body">
        <template v-for="(block, index) in note.content" :key="`${block.type}-${index}`">
          <h2 v-if="block.type === 'heading' && block.level === 2" :id="block.id">
            {{ block.text }}
          </h2>
          <h3 v-else-if="block.type === 'heading'" :id="block.id">{{ block.text }}</h3>
          <p v-else-if="block.type === 'paragraph'">{{ block.text }}</p>
          <ul v-else-if="block.type === 'list'">
            <li v-for="item in block.items" :key="item">{{ item }}</li>
          </ul>
          <CodeBlock
            v-else-if="block.type === 'code'"
            :code="block.code ?? ''"
            :language="block.language"
          />
          <blockquote v-else-if="block.type === 'quote'">{{ block.text }}</blockquote>
          <div v-else-if="block.type === 'table'" class="note-table-wrap">
            <table class="note-table">
              <thead>
                <tr>
                  <th v-for="header in block.headers ?? []" :key="header">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in block.rows ?? []" :key="rowIndex">
                  <td v-for="(cell, cellIndex) in row" :key="`${rowIndex}-${cellIndex}`">
                    {{ cell }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>

        <nav class="adjacent-notes" aria-label="上一篇和下一篇">
          <RouterLink
            v-if="adjacentNotes.previous"
            class="adjacent-card"
            :to="adjacentNotes.previous.route"
          >
            <span>上一篇</span>
            <strong>{{ adjacentNotes.previous.title }}</strong>
          </RouterLink>
          <RouterLink
            v-if="adjacentNotes.next"
            class="adjacent-card"
            :to="adjacentNotes.next.route"
          >
            <span>下一篇</span>
            <strong>{{ adjacentNotes.next.title }}</strong>
          </RouterLink>
        </nav>
      </div>

      <aside class="note-aside" aria-label="文章目录和相关推荐">
        <section class="note-aside-section">
          <h2>文章信息</h2>
          <RouterLink class="related-link" :to="{ path: '/notes', query: { category: note.category } }">
            {{ note.category }}
          </RouterLink>
          <span class="aside-meta">更新于 {{ note.updatedAt }}</span>
        </section>

        <section v-if="tableOfContents.length" class="note-aside-section">
          <h2>目录</h2>
          <a
            v-for="heading in tableOfContents"
            :key="heading.id"
            class="toc-link"
            :href="`#${heading.id}`"
          >
            {{ heading.text }}
          </a>
        </section>

        <section v-if="relatedNotes.length" class="note-aside-section">
          <h2>相关文章</h2>
          <RouterLink
            v-for="related in relatedNotes"
            :key="related.id"
            class="related-link"
            :to="related.route"
          >
            {{ related.title }}
          </RouterLink>
        </section>
      </aside>
    </div>
  </article>

  <section v-else class="page-panel">
    <p class="eyebrow">Not Found</p>
    <h1>文章不存在</h1>
    <p>当前地址没有匹配的文章内容，请返回文章列表查看已有内容。</p>
    <RouterLink class="text-link" to="/notes">返回文章列表</RouterLink>
  </section>
</template>
