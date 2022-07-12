import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../components/feature/HomeView";
import LikesView from "../components/feature/LikesView";
import PhotoView from "../components/feature/PhotoView";
import UserView from "../components/feature/UserView";
import AuthView from "../components/feature/AuthView";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "", name: "Home", component: HomeView },
    { path: "/faves", name: "Favourites", component: LikesView },
    { path: "/photo/:id", name: "Photo", component: PhotoView },
    {
      path: "/user/:username",
      name: "User",
      component: () => import("../components/feature/UserView"),
    },
    { path: "/auth", name: "Auth", component: AuthView },
  ],
});

export default router;
