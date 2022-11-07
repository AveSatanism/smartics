import DefaultLayout from '@/layouts/default'

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
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/PartnersInfo",
      component: {
        render: (h) => h(PartnersInfo),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/DigitalTransformation",
      component: {
        render: (h) => h(DigitalTransformation),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/InfrastructureManagement",
      component: {
        render: (h) => h(InfrastructureManagement),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/AuditIT",
      component: {
        render: (h) => h(AuditIT),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/Vacancies",
      component: {
        render: (h) => h(VacanciesPage),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/Vacanci:id",
      component: {
        render: (h) => h(VacanciPage1),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/DataProcessing",
      component: {
        render: (h) => h(DataProcessing),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/PrivacyPolicy",
      component: {
        render: (h) => h(PrivacyPolicy),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/IT-outsourcing",
      component: {
        render: (h) => h(OutsourcingIT),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/SoftwareDevelopment",
      component: {
        render: (h) => h(SoftwareDevelopment),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/IndustrySolutions",
      component: {
        render: (h) => h(IndustrySolutions),
      },
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: "/page-not-found",
      alias: '*',
      component: { 
        render: (h) => h(PageNotFound) 
      },
      meta: {
        layout: DefaultLayout
      }
    },
];

export default routes;