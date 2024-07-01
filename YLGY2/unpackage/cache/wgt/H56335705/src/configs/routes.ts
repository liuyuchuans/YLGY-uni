import { RouteRecordRaw } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import IndexPage from "../pages/IndexPage.vue";
import GamePage from "../pages/GamePage.vue";
import ConfigPage from "../pages/ConfigPage.vue";

export default [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/index",
    component: IndexPage,
  },
  {
    path: "/game",
    component: GamePage,
  },
  {
    path: "/config",
    component: ConfigPage,
  },
] as RouteRecordRaw[];
