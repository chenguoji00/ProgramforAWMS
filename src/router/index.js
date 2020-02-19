import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home");
const User = () => import("views/user/User");
const Order = () => import("views/order/Order");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/user"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/user",
        component: User,
        meta: { title: "用户管理" }
      },
      {
        path: "/order",
        component: Order,
        meta: { title: "订单管理" }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
