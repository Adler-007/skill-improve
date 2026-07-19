<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import loginBgLarge from "../public/login-bg-1920.jpg";
import loginBgSmall from "../public/login-bg-960.jpg";
import siteLogo from "../public/logo-96.png";
import { login } from "../services/auth";

const route = useRoute();
const router = useRouter();

const username = ref("");
const password = ref("");
const remember = ref(true);
const errorMessage = ref("");
const isSubmitting = ref(false);
const loginBgSrcSet = `${loginBgSmall} 960w, ${loginBgLarge} 1920w`;

const redirectPath = computed(() => {
  const redirect = route.query.redirect;
  return typeof redirect === "string" && redirect.startsWith("/")
    ? redirect
    : "/";
});

const submitLogin = () => {
  errorMessage.value = "";
  isSubmitting.value = true;

  window.setTimeout(() => {
    if (login(username.value.trim(), password.value, remember.value)) {
      router.replace(redirectPath.value);
      return;
    }

    errorMessage.value = "账号或密码不正确";
    isSubmitting.value = false;
  }, 420);
};

</script>

<template>
  <section class="login-page" aria-label="登录个人知识系统">
    <div class="login-scene" aria-hidden="true">
      <img
        class="login-bg-image"
        :src="loginBgLarge"
        :srcset="loginBgSrcSet"
        sizes="100vw"
        alt=""
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
      />
      <div class="login-video-overlay"></div>
    </div>

    <div class="login-page-brand" aria-label="个人知识系统">
      <img :src="siteLogo" alt="" width="38" height="38" fetchpriority="high" decoding="async" />
      <span>个人知识系统</span>
    </div>

    <form class="login-panel" @submit.prevent="submitLogin">
      <div class="login-title">
        <h2>账号登录</h2>
      </div>

      <label class="login-field">
        <span>账号</span>
        <input
          v-model="username"
          autocomplete="username"
          placeholder="请输入账号"
          type="text"
        />
      </label>

      <label class="login-field">
        <span>密码</span>
        <input
          v-model="password"
          autocomplete="current-password"
          placeholder="请输入密码"
          type="password"
        />
      </label>

      <div class="login-options">
        <label class="login-check">
          <input v-model="remember" type="checkbox" />
          <span>保持登录</span>
        </label>
      </div>

      <p v-if="errorMessage" class="login-error" role="alert">
        {{ errorMessage }}
      </p>

      <button class="login-button" type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "登录中" : "登录" }}
      </button>
    </form>
  </section>
</template>
