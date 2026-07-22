<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const isVisible = ref(false);
let scrollFrame = 0;
let animationFrame = 0;
let savedScrollBehavior: string | null = null;

const updateVisibility = () => {
  if (scrollFrame) {
    return;
  }

  scrollFrame = window.requestAnimationFrame(() => {
    isVisible.value = window.scrollY > 360;
    scrollFrame = 0;
  });
};

const easeOutQuart = (progress: number) => 1 - Math.pow(1 - progress, 4);

const disableCssSmoothScroll = () => {
  if (savedScrollBehavior !== null) {
    return;
  }

  savedScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
};

const restoreCssSmoothScroll = () => {
  if (savedScrollBehavior === null) {
    return;
  }

  document.documentElement.style.scrollBehavior = savedScrollBehavior;
  savedScrollBehavior = null;
};

const scrollToTop = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    disableCssSmoothScroll();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    restoreCssSmoothScroll();
    return;
  }

  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    restoreCssSmoothScroll();
  }

  const startY = window.scrollY;
  const duration = Math.min(520, Math.max(260, startY * 0.22));
  const startedAt = window.performance.now();

  disableCssSmoothScroll();

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startedAt) / duration, 1);
    window.scrollTo({
      top: startY * (1 - easeOutQuart(progress)),
      left: 0,
      behavior: "auto",
    });

    if (progress < 1) {
      animationFrame = window.requestAnimationFrame(step);
      return;
    }

    restoreCssSmoothScroll();
    animationFrame = 0;
  };

  animationFrame = window.requestAnimationFrame(step);
};

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateVisibility);

  if (scrollFrame) {
    window.cancelAnimationFrame(scrollFrame);
  }

  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame);
    restoreCssSmoothScroll();
  }
});
</script>

<template>
  <Transition name="back-to-top">
    <button
      v-if="isVisible"
      class="back-to-top-button"
      type="button"
      aria-label="返回顶部"
      title="返回顶部"
      @click="scrollToTop"
    >
      <span aria-hidden="true"></span>
    </button>
  </Transition>
</template>
