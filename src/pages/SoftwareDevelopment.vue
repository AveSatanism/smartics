<template>
  <div id="SoftwareDevelopment">
    <div v-if="isPC" class="site_color_1 soft_dev_background">
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
          <UIAccordion tab-name="accordion1">
            <template #number><h2>01.</h2></template>
            <template #title><h3>Составление технического задания</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion tab-name="accordion2">
            <template #number><h2>02.</h2></template>
            <template #title><h3>Проектирование и разработка архитектуры</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion tab-name="accordion3">
            <template #number><h2>03.</h2></template>
            <template #title><h3>Написание программного кода и прототипирование</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion tab-name="accordion4">
            <template #number><h2>04.</h2></template>
            <template #title><h3>Интеграция в действующие системы</h3></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordion>
          <UIAccordion tab-name="accordion5">
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
    <div v-if="!isPC" class="soft_dev_background_mobile flex flex-col items-center text-center site_color_1">
      <img class="mb-[9px] h-[280px]" src="@/assets/pageContentImage/SoftwareDevelopment_image.svg" width="313" height="280" alt="SoftwareDevelopment_image">
      <h3 class="mb-[6px] text-h3-mobile">Разработка ПО</h3>
      <p class="mb-[5px] text_button">Быстро. Качественно.<br> С понятным ценообразованием.</p>
      <p class="mb-[30px] text_6 !normal-case !tracking-normal">У вас есть задача? У нас уже есть решения!<br>
      Большинство проблем не уникальны (!!!), мы<br> подобрали лучшие способы их решения</p>
      <UIButton class="mb-[85px]" variant="orange1-mobile" @click="showCommunicationFormDialog()">Хочу!</UIButton>
      <p class="mb-[20px] text_button">Мы готовы осуществить:</p>
      <div class="mb-[82px] flex flex-col gap-y-[10px]">
        <UIAccordionMobile tab-name="accordion1">
          <template #number><p>01.</p></template>
          <template #title><p class="text-left text-[12px]">Составление технического задания</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="accordion2">
          <template #number><p>02.</p></template>
          <template #title><p class="text-left text-[12px]">Проектирование и разработка архитектуры</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="accordion3">
          <template #number><p>03.</p></template>
          <template #title><p class="text-left text-[12px]">Написание программного кода и прототипирование</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="accordion4">
          <template #number><p>04.</p></template>
          <template #title><p class="text-left text-[12px]">Интеграция в действующие системы</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="accordion5">
          <template #number><p>05.</p></template>
          <template #title><p class="text-left text-[12px]">Обслуживание и сопровождение ПО, его доработки</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
      </div>
    </div>
  </div>
</template>
<script>
import UIButton from '../components/UI/UIButton.vue'
import UIAccordion from '../components/UI/UIAccordion.vue'
import UIAccordionMobile from '../components/UI/UIAccordionMobile.vue'
import SofwareSlider from '../components/SofwareSlider.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs"
import { useIsPC } from '../components/isPC&isMobile.js'

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    UIAccordion,
    UIAccordionMobile,
    SofwareSlider,
  },
  methods: {
    showCommunicationFormDialog(params) {
      CommunicationFormDialog(params);
    },
  },
  setup() {
    const isPC = useIsPC()
    return { isPC }
  },
}
</script>
<style>
.soft_dev_background {
  background-image: url("@/assets/pageContentImage/SoftwareDevelopment_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.soft_dev_background_mobile {
  background-image: url("@/assets/pageContentImage/SoftwareDevelopment_wave_mobile.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>