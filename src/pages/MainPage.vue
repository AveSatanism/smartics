<template>
  <div class="text-center site_color_1 mb-[86px]">
    <div class="min-h-[642px] flex_content">
      <div class="main_title text_1">
        <h1 class="text-h1">мы точно знаем, <br>что нужно вашему <br>бизнесу</h1>
        <p>Мы - SMARTICS FAMILY - разработчики, поставщики,<br>
           интеграторы, помощники в решении ваших IT проблем.<br>
            Мы решаем задачу, улучшая бизнес процесс, а не <br>оборудование.</p>
        <UIButton variant="orange1" @click="showCommunicationFormDialog()">связаться с нами</UIButton> 
      </div>
      <img class="ml-[27px]" src="@/assets/pageContentImage/MainPage_image.png" width="516" height="626" alt="main_page_image">
    </div>
    <div class="communication_section flex_content py-[16px] site_color_3_background mb-[48px]">
      <div>
        <h3 class="text-h3">Как мы можем помочь<br> вашему бизнесу?</h3> 
        <UIButton variant="white" @click="showCommunicationFormDialog()">узнать варианты</UIButton>
      </div>
      <div class="communication_border">
        <h3 class="text-h3">Как стать<br> нашими партнёрами?</h3> 
        <UIButton variant="white" @click="showCommunicationFormDialog({header: 'Давайте дружить!'})">свяжитесь с нами</UIButton>
      </div>
      <div class="communication_border">
        <h3 class="text-h3">Как стать частью<br> команды?</h3>
        <form action="Vacancies"><UIButton variant="white" href="Vacancies">Вакансии</UIButton></form>
      </div>
    </div>
    <router-link to="PartnersInfo"><h2 class="text-h2 mb-[25px]">Нам уже доверяют</h2></router-link>
    <PartnersSlider />
    <PoliticsApply />
  </div>
</template>

<script>
import PartnersSlider from '../components/PartnersSlider.vue'
import PoliticsApply from '../components/PoliticsApply.vue'
import UIButton from '../components/UI/UIButton.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);
export default {
  components: {
    UIButton,
    PartnersSlider,
    PoliticsApply
  },
  methods: {
    showCommunicationFormDialog(params) {
      CommunicationFormDialog(params);
    },
  },
}
</script>

<style>
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