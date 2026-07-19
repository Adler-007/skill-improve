import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import LoginView from "../views/LoginView.vue";
import NoteDetailView from "../views/NoteDetailView.vue";
import NotesView from "../views/NotesView.vue";
import { isAuthenticated } from "../services/auth";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { public: true, immersive: true }
    },
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView
    },
    {
      path: "/notes",
      name: "notes",
      component: NotesView
    },
    {
      path: "/notes/:id",
      name: "note-detail",
      component: NoteDetailView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to) => {
  if (to.meta.public) {
    return isAuthenticated() && to.path === "/login" ? "/" : true;
  }

  if (!isAuthenticated()) {
    return {
      path: "/login",
      query: { redirect: to.fullPath }
    };
  }

  return true;
});
