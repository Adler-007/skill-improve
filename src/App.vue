<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import BackToTop from "./components/BackToTop.vue";

const route = useRoute();
const isImmersivePage = computed(() => Boolean(route.meta.immersive));
</script>

<template>
  <div class="app-shell" :class="{ 'app-shell-immersive': isImmersivePage }">
    <AppHeader v-if="!isImmersivePage" />
    <main :class="isImmersivePage ? 'app-main-immersive' : 'app-main'">
      <RouterView />
    </main>
    <BackToTop />
  </div>
</template>
