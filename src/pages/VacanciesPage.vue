<template>
  <div id="Vacancies">
    <div v-if="isPC" class="py-[59px] site_color_1 text_1 text-center">
      <h1 class="text-h1 mb-[40px]">Наши вакансии</h1>
      <p class="mb-[44px]">Наши сотрудники - это члены большой семьи Smartics. Мы городимся каждым!<br> Присоединяйтесь к нашей команде!</p>
      <div class="flex justify-center">
        <perfect-scrollbar class="h-[620px]">
        <div class="pr-[8px] pl-[44px] vacancies_scroll h-[620px] flex flex-col gap-[40px]">
        <router-link to="Vacanci1"><UIVacanciesCard>
          <template #vacancies_title><p>стажёр по информационной безопасности</p></template>
          <template #description><p>SMARTICS — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.</p></template>
          <template #experience><p>опыт 0-1 лет</p></template>
          <template #location><p>Санкт-петербург</p></template>
          <template #employment><p>Полная занятость</p></template>
        </UIVacanciesCard></router-link>
        <UIVacanciesCard>
          <template #vacancies_title><p>специалист Ip телефонии</p></template>
          <template #description><p>SMARTICS — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.Эта вакансия подходит вам, если вы обучаетесь в вузе на направлении “Информационная безопасность” и готовы погрузиться в реальные задачи аналитика SOC.</p></template>
          <template #experience><p>опыт 3-4 лет</p></template>
          <template #location><p>Санкт-петербург</p></template>
          <template #employment><p>Полная занятость</p></template>
        </UIVacanciesCard>
        <UIVacanciesCard>
          <template #vacancies_title><p>специалист Ip телефонии</p></template>
          <template #description><p>SMARTICS — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.Эта вакансия подходит вам, если вы обучаетесь в вузе на направлении “Информационная безопасность” и готовы погрузиться в реальные задачи аналитика SOC.</p></template>
          <template #experience><p>опыт 3-4 лет</p></template>
          <template #location><p>Санкт-петербург</p></template>
          <template #employment><p>Полная занятость</p></template>
        </UIVacanciesCard>
        <UIVacanciesCard>
          <template #vacancies_title><p>специалист Ip телефонии</p></template>
          <template #description><p>SMARTICS — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.Эта вакансия подходит вам, если вы обучаетесь в вузе на направлении “Информационная безопасность” и готовы погрузиться в реальные задачи аналитика SOC.</p></template>
          <template #experience><p>опыт 3-4 лет</p></template>
          <template #location><p>Санкт-петербург</p></template>
          <template #employment><p>Полная занятость</p></template>
        </UIVacanciesCard>
        <UIVacanciesCard>
          <template #vacancies_title><p>специалист Ip телефонии</p></template>
          <template #description><p>SMARTICS — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.Эта вакансия подходит вам, если вы обучаетесь в вузе на направлении “Информационная безопасность” и готовы погрузиться в реальные задачи аналитика SOC.</p></template>
          <template #experience><p>опыт 3-4 лет</p></template>
          <template #location><p>Санкт-петербург</p></template>
          <template #employment><p>Полная занятость</p></template>
        </UIVacanciesCard>
        </div>
        </perfect-scrollbar>
        <img class="vacancies_image h-[616px]" src="@/assets/pageContentImage/VacanciesPage_image.svg" width="344" height="616" alt="vacancies_image">
      </div>
    </div>
    <div v-if="!isPC" class="pt-[39px] pb-[103px]">
      <h3 class="mb-[8px] text-h3-mobile text-center site_color_1">Наши вакансии</h3>
      <p class="mb-[36px] text-center text_6 !normal-case site_color_1">Наши сотрудники - это члены большой семьи<br> Smartics. Мы городимся каждым!<br>Присоединяйтесь к нашей команде!</p>
      <div class="flex flex-col items-center gap-y-[22px]">
      <router-link to="Vacanci1"><UIVacanciesCardMobile>
        <template #vacancies_title><p>стажёр по информационной безопасности</p></template>
        <template #experience><p>опыт 0-1 лет</p></template>
        <template #location><p>Санкт-петербург</p></template>
        <template #employment><p>Полная занятость</p></template>
      </UIVacanciesCardMobile></router-link>
      <UIVacanciesCardMobile>
        <template #vacancies_title><p>специалист Ip телефонии</p></template>
        <template #experience><p>опыт 3-4 лет</p></template>
        <template #location><p>Санкт-петербург</p></template>
        <template #employment><p>Полная занятость</p></template>
      </UIVacanciesCardMobile> 
      <UIVacanciesCardMobile>
        <template #vacancies_title><p>специалист Ip телефонии</p></template>
        <template #experience><p>опыт 3-4 лет</p></template>
        <template #location><p>Санкт-петербург</p></template>
        <template #employment><p>Полная занятость</p></template>
      </UIVacanciesCardMobile> 
      <UIVacanciesCardMobile>
        <template #vacancies_title><p>специалист Ip телефонии</p></template>
        <template #experience><p>опыт 3-4 лет</p></template>
        <template #location><p>Санкт-петербург</p></template>
        <template #employment><p>Полная занятость</p></template>
      </UIVacanciesCardMobile>
      </div> 
    </div>
  </div>
</template>
<script>
import UIVacanciesCard from '../components/UI/UIVacanciesCard.vue'
import UIVacanciesCardMobile from '../components/UI/UIVacanciesCardMobile.vue'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import { useIsPC } from '../components/isPC&isMobile.js'

export default {
  components: {
    UIVacanciesCard,
    UIVacanciesCardMobile,
    PerfectScrollbar,
  },
  setup() {
    const isPC = useIsPC()
    return { isPC }
  },
}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
<style>
.ps__thumb-y, .ps__rail-y:hover > .ps__thumb-y, .ps__rail-y:focus > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: var(--color-4);
}
.ps__rail-y {
  left: 0px !important;
  opacity: 1 !important;
}
.vacancies_image {
  position: absolute;
  margin-left: 374px;
}
</style>