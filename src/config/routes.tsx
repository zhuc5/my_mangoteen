import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { WelcomeFirst } from "../components/welcome/WelcomeFirst";
import { WelcomeTwo } from "../components/welcome/WelcomeTwo";
import { WelcomeThree } from "../components/welcome/WelcomeThree";
import { WelcomeFour } from "../components/welcome/WelcomeFour";
import { Welcome } from "../views/Welcome";
// RouteRecordRaw[] 是 routes的类型, 注明之后 ai会推断类型
export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },

  {
    path: "/welcome",
    component: Welcome,
    // redirect: "/welcome/1",
    children: [
    // 只有/welcome 也默认到welcome/1
      { path: "", redirect: "/welcome/1" },
      {
        // 如果只写子路由的路径 ，前面不要"/"
        // 如果写完整路径 要"/父路径/子路径"
        path: "/welcome/1",
        component: WelcomeFirst,
      },
      {
        path: "2",
        component: WelcomeTwo,
      },
      {
        path: "3",
        component: WelcomeThree,
      },
      {
        path: "4",
        component: WelcomeFour,
      },
    ],
  },
];
