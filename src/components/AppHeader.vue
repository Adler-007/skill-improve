<script setup lang="ts">
const navItems = [
  { label: "知识总览", to: "/" },
  { label: "关于", to: "/about" }
];
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="返回知识总览">
      <span class="brand-mark">知</span>
      <span class="brand-text">个人知识系统</span>
    </RouterLink>

    <nav class="site-nav" aria-label="主导航">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        class="nav-link"
        :to="item.to"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
