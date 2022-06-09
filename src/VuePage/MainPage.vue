<template>
  <div>
    <SiteHeader />
    <SiteNavigation />
    <div class="h-[642px] mx-auto flex justify-center items-center">
      <div class="main_section mt-[13px]">
        <h1 class="text-center site_color_1 mb-[30px]">мы точно знаем, <br>что нужно вашему <br>бизнесу</h1>
        <p class="text-center site_color_1 mb-[30px]">Мы - SMARTICS FAMILY - разработчики, поставщики,<br>
           интеграторы, помощники в решении ваших IT проблем.<br>
            Мы решаем задачу, улучшая бизнес процесс, а не <br>оборудование.</p>
        <div class="flex justify-center">
        <UIButton>связаться с нами</UIButton>
        </div>  
      </div>
      <img class="ml-[2%]" src="@/assets/main_page_image.png" width="516" height="626" alt="main_page_image">
    </div>
    <div class="communication_section py-[16px] flex justify-center items-center site_color_3_background mb-[39px]">
      <div class="p-[58px]">
        <h3 class="text-center site_color_1 mb-[16px]">Как мы можем помочь<br> вашему бизнесу?</h3> 
        <div class="flex justify-center"><UIButton>узнать варианты</UIButton></div>
      </div>
      <div class="p-[58px] communication_border">
        <h3 class="text-center site_color_1 mb-[16px]">Как стать<br> нашими партнёрами?</h3> 
        <div class="flex justify-center"><UIButton>свяжитесь с нами</UIButton></div>
      </div>
      <div class="p-[58px]">
        <h3 class="text-center site_color_1 mb-[16px]">Как стать частью<br> команды?</h3>
        <div class="flex justify-center"><UIButton>Вакансии</UIButton></div>
      </div>
    </div>
    <div class="flex justify-center flex-wrap mb-[59px]">
      <a class="flex justify-center site_color_1 w-[100%] mb-[25px]" href="PartnersInfo"><h2>Нам уже доверяют</h2></a>
      <PartnersSlider />
    </div>
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import PartnersSlider from '../components/PartnersSlider.vue'
import PoliticsApply from '../components/PoliticsApply.vue'
import SiteFooter from '../components/SiteFooter.vue'
import UIButton from '../components/UI/UIButton.vue'
export default {
  components: {
    SiteHeader,
    SiteNavigation,
    UIButton,
    PartnersSlider,
    PoliticsApply,
    SiteFooter
  }
}
</script>

<style>
.communication_border {
  border-right: 2px solid white;
  border-left: 2px solid white;
}
</style>