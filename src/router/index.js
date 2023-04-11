import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import HomeView from "../views/HomeView.vue";

import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import Dashboard from "../views/dasboard/Dashboard.vue";
import MyAccount from "../views/dasboard/MyAccount.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/log-in",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/my-account",
    name: "MyAccount",
    component: MyAccount,
    meta: {
      requiredLogin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(recorded => recorded.meta.requiredLogin) &&
    !store.state.isAuthenticated
  ) {
    next("/log-in");
  } else {
    next();
  }
});

export default router;
