const MainPage = () => import("@/VuePage/MainPage.vue")
const PartnersInfo = () => import("@/VuePage/PartnersInfo.vue")
const DigitalTransformation = () => import("@/VuePage/DigitalTransformation.vue")
const InfrastructureManagement = () => import("@/VuePage/InfrastructureManagement.vue")
const AuditIT = () => import("@/VuePage/AuditIT.vue")
const PageNotFound = () => import("@/VuePage/PageNotFound.vue")

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
      path: "/DigitalTransformation",
      component: {
        render: (h) => h(DigitalTransformation),
      },
    },
    {
      path: "/InfrastructureManagement",
      component: {
        render: (h) => h(InfrastructureManagement),
      },
    },
    {
      path: "/AuditIT",
      component: {
        render: (h) => h(AuditIT),
      },
    },
    {
      path: "/page-not-found",
      alias: '*',
      component: { 
        render: (h) => h(PageNotFound) 
      },
    },
];

export default routes;