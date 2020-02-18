import Vue from "vue";
import Router from "vue-router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getRole, getToken } from "@/utils/auth";
import Layout from "@/views/Layout/index.vue";
// NProgress Configuration
NProgress.configure({ showSpinner: false });

const whiteList = ["/login"];

export const routes: any = [
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
    meta: {
      menuShow: false,
      showSubmenu: false,
      title: "登陆",
      roles: ["超级管理员"]
    }
  },

  {
    path: "/layoutHome",
    name: "layoutHome",
    component: Layout,
    meta: {
      menuShow: false,
      showSubmenu: false,
      title: "首页管理",
      roles: ["超级管理员"]
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue"),
        meta: {
          menuShow: false,
          showSubmenu: false,
          title: "首页",
          roles: ["超级管理员"]
        }
      }
    ]
  },
  {
    path: "/layoutTest",
    name: "layoutTest",
    component: Layout,
    meta: {
      menuShow: false,
      showSubmenu: false,
      title: "测试",
      roles: ["超级管理员"]
    },
    redirect: "/test",
    children: [
      {
        path: "/test",
        name: "test",
        component: () => import("@/views/test.vue"),
        meta: {
          menuShow: false,
          showSubmenu: false,
          title: "测试",
          roles: ["超级管理员"]
        }
      }
    ]
  }
];

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 进度条开始
  NProgress.start();
  // 去登录页面直接去 不判断是否登录

  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    // 判断是否登录 登录了下一步 没登录去登录页
    if (getToken("token")) {
      if (
        to.meta &&
        to.meta.roles &&
        to.meta.roles.includes(getRole("role").name)
      ) {
        next();
      } else {
        next({ name: "404" });
      }
    } else {
      next({ path: "/login" });
    }
  }

  // 进度条结束
  NProgress.done();
});

// router.beforeEach((to, from, next) => {

//   if (storage.getSessionStorage("token")) {
//     if (to.path == "/login") {

//     }  else {
//       next();
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next();
//     } else {
//       next("/login");
//     }
//   }
// });

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router;

// import Vue from "vue";
// import Router, { RouteConfig } from "vue-router";

// /* Layout */
// import Layout from "@/views/Layout/index.vue";

// /* Router modules */

// Vue.use(Router);

// export const constantRoutes: RouteConfig[] = [
//   {
//     path: "/login",
//     component: () => import("@/views/login.vue"),
//     meta: {
//       menuShow: false,
//       showSubmenu: false,
//       title: "登陆",
//       roles: ["超级管理员"]
//     }
//   },
//   {
//     path: "/",
//     redirect: "/layoutHome"
//   },

//   {
//     path: "/layoutHome",
//     name: "layoutHome",
//     component: Layout,
//     meta: {
//       menuShow: false,
//       showSubmenu: false,
//       title: "首页管理",
//       roles: ["超级管理员"]
//     },
//     redirect: "/home",
//     children: [
//       {
//         path: "/home",
//         name: "home",
//         component: () => import("@/views/Home.vue"),
//         meta: {
//           menuShow: false,
//           title: "首页",
//           roles: ["超级管理员"]
//         }
//       }
//     ]
//   }
// ];

// export const asyncRoutes: RouteConfig[] = [];

// const createRouter = () =>
//   new Router({
//     // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
//     scrollBehavior: (to, from, savedPosition) => {
//       if (savedPosition) {
//         return savedPosition;
//       } else {
//         return { x: 0, y: 0 };
//       }
//     },
//     base: process.env.BASE_URL,
//     routes: constantRoutes
//   });

// const router = createRouter();

// export function resetRouter() {
//   const newRouter = createRouter();
//   (router as any).matcher = (newRouter as any).matcher; // reset router
// }

// export default router;
