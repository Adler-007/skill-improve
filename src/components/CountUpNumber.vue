<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    value: number;
    duration?: number;
  }>(),
  {
    duration: 720
  }
);

const displayedValue = ref(0);
let animationFrame = 0;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

const runAnimation = () => {
  window.cancelAnimationFrame(animationFrame);

  if (prefersReducedMotion()) {
    displayedValue.value = props.value;
    return;
  }

  const startedAt = performance.now();
  const startValue = 0;
  const targetValue = props.value;

  const tick = (currentTime: number) => {
    const elapsed = currentTime - startedAt;
    const progress = Math.min(elapsed / props.duration, 1);

    displayedValue.value = Math.round(
      startValue + (targetValue - startValue) * easeOutCubic(progress)
    );

    if (progress < 1) {
      animationFrame = window.requestAnimationFrame(tick);
    }
  };

  animationFrame = window.requestAnimationFrame(tick);
};

const formattedValue = computed(() => displayedValue.value.toLocaleString("zh-CN"));

onMounted(runAnimation);

watch(() => props.value, runAnimation);

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <span class="count-up-number" :aria-label="String(value)">
    {{ formattedValue }}
  </span>
</template>
