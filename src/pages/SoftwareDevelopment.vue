<template>
  <div id="SoftwareDevelopment">
    <div class="site_color_1 soft_dev_background">
      <div class="flex flex-wrap mb-[87px] gap-x-[28.5px] justify-center">
        <div class="mt-[51px] max-w-[552px] flex flex-col gap-[26px]">
          <h1 class="text-h1">Разработка ПО</h1>
          <h2 class="text-h2">Быстро.<br> Качественно.<br> С понятным ценообразованием.</h2>
          <p class="text_1">Оказываем целый спектр услуг полного цикла
            <br> разработки ПО: от вашей идеи до внедрения в
            <br> рабочий процесс.
            <br> Вам не нужно иметь технического образования,
            <br> не нужно иметь специальных знаний,
            <br> не нужно иметь опыт составления технических
            <br> заданий.
            <br><br>Просто опишите ваши идеи, а мы сделаем всё остальное!</p>
          <UIButton variant="orange2" @click="showCommunicationFormDialog()">Хочу!</UIButton>
        </div>
        <img class="mt-[49px]" src="@/assets/pageContentImage/SoftwareDevelopment_image.svg" width="575" height="571" alt="SoftwareDevelopment_image">
      </div>
      <div>
        <h3 class="mb-[28px] text-h3 text-center">МЫ ГОТОВЫ ОСУЩЕСТВИТЬ:</h3>
        <div class="mb-[134px] flex flex-col gap-y-[10px]">
          <UIAccordion v-model="tab" tab-name="accordion1">
            <template #number><h2>01.</h2></template>
            <template #title><h3>Составление технического задания</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion v-model="tab" tab-name="accordion2">
            <template #number><h2>02.</h2></template>
            <template #title><h3>Проектирование и разработка архитектуры</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion v-model="tab" tab-name="accordion3">
            <template #number><h2>03.</h2></template>
            <template #title><h3>Написание программного кода и прототипирование</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion v-model="tab" tab-name="accordion4">
            <template #number><h2>04.</h2></template>
            <template #title><h3>Интеграция в действующие системы</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion v-model="tab" tab-name="accordion5">
            <template #number><h2>05.</h2></template>
            <template #title><h3>Обслуживание и сопровождение ПО, его доработки</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
        </div>
      </div>
      <div>
        <h2 class="mb-[73px] text-h2 site_color_2 text-center">Примеры Наших решений:</h2>
        <SofwareSlider />
      </div>
    </div>
  </div>
</template>
<script>
import UIButton from '../components/UI/UIButton.vue'
import UIAccordion from '../components/UI/UIAccordion.vue'
import SofwareSlider from '../components/SofwareSlider.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    UIAccordion,
    SofwareSlider,
  },
  data() {
    return {
      tab: ""
    }
  },
    methods: {
    showCommunicationFormDialog(params) {
      CommunicationFormDialog(params);
    },
  },
}
</script>
<style>
.soft_dev_background {
  background-image: url("@/assets/pageContentImage/SoftwareDevelopment_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>