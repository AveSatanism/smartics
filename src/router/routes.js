const MainPage = () => import("@/MainPage.vue")
const PartnersInfo = () => import("@/PartnersInfo.vue")

const routes = [
    {
      path: "",
      component: {
        render: (h) => h(MainPage),
      },
    },
    {
      path: "/PartnersInfo",
      component: {
        render: (h) => h(PartnersInfo),
      },
    },
    {
      path: "/*",
      component: { render: (h) => h("div", ["404! Page Not Found!"]) },
    },
];

export default routes;