import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import faviconUrl from "./public/favicon.ico?url";
import "./styles/index.css";

const favicon =
  document.querySelector<HTMLLinkElement>('link[rel~="icon"]') ?? document.createElement("link");

favicon.rel = "icon";
favicon.href = faviconUrl;
document.head.appendChild(favicon);

createApp(App).use(router).mount("#app");
