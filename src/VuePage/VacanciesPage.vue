<template>
  <div id="Vacancies">
    <SiteHeader />
    <SiteNavigation />
    <div class="py-[59px] site_color_1 text_1 text-center">
      <h1 class="mb-[40px]">Наши вакансии</h1>
      <p class="mb-[44px]">Наши сотрудники - это члены большой семьи Smartics. Мы городимся каждым!<br> Присоединяйтесь к нашей команде!</p>
      <div class="flex justify-center">
        <div class="vacancies_scroll h-[620px] flex flex-col gap-[40px] overflow-y-scroll">
        <UIVacanciesCard>
          <template #vacancies_title><p>стажёр по информационной безопасности</p></template>
          <template #description><p>SMARTICS — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.</p></template>
          <template #experience><p>опыт 0-1 лет</p></template>
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
        <UIVacanciesCard>
          <template #vacancies_title><p>специалист Ip телефонии</p></template>
          <template #description><p>SMARTICS — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.Эта вакансия подходит вам, если вы обучаетесь в вузе на направлении “Информационная безопасность” и готовы погрузиться в реальные задачи аналитика SOC.</p></template>
          <template #experience><p>опыт 3-4 лет</p></template>
          <template #location><p>Санкт-петербург</p></template>
          <template #employment><p>Полная занятость</p></template>
        </UIVacanciesCard>
        </div>
        <img class="vacancies_image h-[616px]" src="@/assets/pageContentImage/VacanciesPage_image.svg" width="344" height="616" alt="vacancies_image">
      </div>
    </div>
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import UIVacanciesCard from '../components/UI/UIVacanciesCard.vue'
import PoliticsApply from '../components/PoliticsApply.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    UIVacanciesCard,
    PoliticsApply,
    SiteFooter
    }
}
</script>
<style>
.vacancies_image {
  position: absolute;
  margin-left: 344px;
}
.vacancies_scroll::-webkit-scrollbar { width: 0 !important }
</style>