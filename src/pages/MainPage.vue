<template>
  <div class="text-center site_color_1">
  <div v-if="isPC">
    <div class="min-h-[642px] flex_content">
      <div class="main_title text_1">
        <h1 class="text-h1">мы точно знаем, <br>что нужно вашему <br>бизнесу</h1>
        <p>Мы - SMARTICS TEAM - разработчики, поставщики,<br>
        интеграторы, помощники в решении ваших IT проблем.<br>
        У вас есть задача - SMARTICS - ваше решение.</p>
        <UIButton variant="orange1" @click="showCommunicationFormDialog()">связаться с нами</UIButton> 
      </div>
      <img class="ml-[27px]" src="@/assets/pageContentImage/MainPage_image.svg" width="516" height="626" alt="main_page_image">
    </div>
    <div class="communication_section flex_content py-[16px] site_color_3_background mb-[48px]">
      <div>
        <h3 class="text-h3">Как мы можем помочь<br> вашему бизнесу?</h3> 
        <UIButton class="bg-inherit" variant="white" @click="showCommunicationFormDialog()">узнать варианты</UIButton>
      </div>
      <div class="communication_border">
        <h3 class="text-h3">Как стать<br> нашими партнёрами?</h3> 
        <UIButton class="bg-inherit" variant="white" @click="showCommunicationFormDialog({header: 'Давайте дружить!'})">свяжитесь с нами</UIButton>
      </div>
      <div class="communication_border">
        <h3 class="text-h3">Как стать частью<br> команды?</h3>
        <router-link to="Vacancies"><UIButton class="bg-inherit" variant="white" href="Vacancies">Вакансии</UIButton></router-link>
      </div>
    </div>
    <router-link to="PartnersInfo"><h2 class="text-h2 mb-[25px]">Нам уже доверяют</h2></router-link>
    <PartnersSlider />
    <PoliticsApply />
  </div>
  <div v-if="!isPC" class="mainPage_background flex flex-col items-center">
    <img class="mb-[21px]" src="@/assets/pageContentImage/MainPage_image_mobile.svg" width="231" height="279" alt="main_page_image">
    <h3 class="mb-[15px] text-h3-mobile">мы точно знаем, <br>что нужно вашему <br>бизнесу</h3>
    <p class="mb-[21px] text_6 !normal-case">Мы - SMARTICS TEAM - разработчики,<br> поставщики,<br>
    интеграторы, помощники в решении ваших IT<br> проблем.<br>
    У вас есть задача - SMARTICS - ваше решение.</p>
    <router-link to="ContactsMobile"><UIButton variant="orange1-mobile" class="mb-[61px]">связаться с нами</UIButton></router-link> 
    <div class="mb-[14px] w-full flex flex-col justify-center items-center h-[139px] site_color_6_background">
      <p class="text_button site_color_1 mb-[10px]">Как мы можем помочь <br> вашему бизнесу?</p>
      <router-link to="ContactsMobile"><UIButton variant="orange2-mobile">узнать варианты</UIButton></router-link>
    </div>
    <div class="mb-[14px] w-full flex flex-col justify-center items-center h-[139px] site_color_6_background">
      <p class="text_button site_color_1 mb-[10px]">Как стать <br> нашими партнёрами?</p>
      <router-link to="ContactsMobile"><UIButton variant="orange2-mobile">связаться с нами</UIButton></router-link>
    </div>
    <div class="mb-[54px] w-full flex flex-col justify-center items-center h-[139px] site_color_6_background">
      <p class="text_button site_color_1 mb-[10px]">Как стать частью <br>команды?</p>
      <router-link to="Vacancies"><UIButton variant="orange2-mobile">наши вакансии</UIButton></router-link>
    </div>
    <router-link to="PartnersInfo"><p class="mb-[7px] text_5 site_color_1">Нам уже доверяют</p></router-link>
    <PartnersSliderMobile class="mb-[59px]"/>
  </div>
  </div>
</template>

<script>
import PartnersSlider from '../components/PartnersSlider.vue'
import PartnersSliderMobile from '../components/componentsOfMobile/PartnersSliderMobile.vue'
import PoliticsApply from '../components/PoliticsApply.vue'
import UIButton from '../components/UI/UIButton.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";
import { useIsPC } from '../components/isPC&isMobile.js'

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);
export default {
  components: {
    UIButton,
    PartnersSlider,
    PartnersSliderMobile,
    PoliticsApply
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
.mainPage_background {
  background-image: url("@/assets/pageContentImage/MainPage_wave_mobile.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.main_title :not(button){
  margin-bottom: 30px;
}
.flex_content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_content div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.communication_section div {
  max-width: 400px;
  padding: 54px;
}
.communication_section h3 {
  margin-bottom: 16px;
}
.communication_border {
  border-left: 2px solid var(--color-7);
}
</style>