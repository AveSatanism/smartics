const MainPage = () => import("@/pages/MainPage.vue")
const PartnersInfo = () => import("@/pages/PartnersInfo.vue")
const DigitalTransformation = () => import("@/pages/DigitalTransformation.vue")
const InfrastructureManagement = () => import("@/pages/InfrastructureManagement.vue")
const AuditIT = () => import("@/pages/AuditIT.vue")
const VacanciesPage = () => import("@/pages/VacanciesPage.vue")
const VacanciPage1 = () => import("@/pages/VacanciNumber/VacanciPage1.vue")
const PageNotFound = () => import("@/pages/PageNotFound.vue")
const DataProcessing = () => import("@/pages/DataProcessing.vue")
const PrivacyPolicy = () => import("@/pages/PrivacyPolicy.vue")
const OutsourcingIT = () => import("@/pages/OutsourcingIT.vue")
const SoftwareDevelopment = () => import("@/pages/SoftwareDevelopment.vue")
const IndustrySolutions = () => import("@/pages/IndustrySolutions.vue")


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
      path: "/Vacancies",
      component: {
        render: (h) => h(VacanciesPage),
      },
    },
    {
      path: "/Vacanci1",
      component: {
        render: (h) => h(VacanciPage1),
      },
    },
    {
      path: "/DataProcessing",
      component: {
        render: (h) => h(DataProcessing),
      },
    },
    {
      path: "/PrivacyPolicy",
      component: {
        render: (h) => h(PrivacyPolicy),
      },
    },
    {
      path: "/IT-outsourcing",
      component: {
        render: (h) => h(OutsourcingIT),
      },
    },
    {
      path: "/SoftwareDevelopment",
      component: {
        render: (h) => h(SoftwareDevelopment),
      },
    },
    {
      path: "/IndustrySolutions",
      component: {
        render: (h) => h(IndustrySolutions),
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