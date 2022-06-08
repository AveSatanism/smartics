const MainPage = () => import("@/MainPage.vue")
const PartnersInfo = () => import("@/PartnersInfo.vue")
const DigitalTransformation = () => import("@/DigitalTransformation.vue")
const InfrastructureManagement = () => import("@/InfrastructureManagement.vue")
const AuditIT = () => import("@/AuditIT.vue")
const PageNotFound = () => import("@/PageNotFound.vue")

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