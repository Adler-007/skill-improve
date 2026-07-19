<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import siteLogo from "../public/logo-96.png";
import { logout } from "../services/auth";

const navItems = [
  { label: "知识总览", to: "/" },
  { label: "分类", to: "/categories" },
  { label: "文章", to: "/notes" },
  { label: "关于", to: "/about" },
];

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);

const handleLogout = () => {
  logout();
  router.replace("/login");
};

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  },
);
</script>

<template>
  <header class="site-header">
    <div class="site-header-top">
      <RouterLink class="brand" to="/" aria-label="返回知识总览">
        <img class="brand-mark" :src="siteLogo" alt="" width="36" height="36" decoding="async" />
        <span class="brand-text">个人知识系统</span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="site-nav"
        aria-label="打开主导航"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav
      id="site-nav"
      class="site-nav"
      :class="{ open: isMenuOpen }"
      aria-label="主导航"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        class="nav-link"
        :to="item.to"
      >
        {{ item.label }}
      </RouterLink>
      <button class="nav-link logout-button" type="button" @click="handleLogout">退出</button>
    </nav>
  </header>
</template>
