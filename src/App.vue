<template>
  <div id="app">
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
    <div class="communication_section py-[16px] flex justify-center items-center site_color_3_background">
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
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteNavigation from './components/SiteNavigation.vue'
import PoliticsApply from './components/PoliticsApply.vue'
import SiteFooter from './components/SiteFooter.vue'
import UIButton from './components/UI/UIButton.vue'
export default {
  components: {
    SiteHeader,
    SiteNavigation,
    UIButton,
    PoliticsApply,
    SiteFooter
  }
}
</script>

<style>
body {
  font-family: 'MontserratVariable';
}

.communication_border {
  border-right: 2px solid white;
  border-left: 2px solid white;
}

.site_color_1 {
  color: #092C73;
}
.site_color_1_background {
  background-color: #092C73;
}

.site_color_2 {
  color: #135EF2;
}
.site_color_2_background {
  background-color: #135EF2;
}

.site_color_3 {
  color: #DDECFF;
}
.site_color_3_background {
  background-color: #DDECFF;
}

.site_color_4 {
  color: #FF6B00;
}

.site_color_5_background {
  background-color: #F2F2F2;
}


h1 {
  font-weight: 800;
  font-size: 46px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

h2 {
  font-weight: 800;
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.1;
}

.text_1 {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
}

.text_2 {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
}

.text_3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
}

.text_4 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
}

.text_5 {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text_6 {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.text_7 {
  font-weight: 600;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

.text_8 {
  font-weight: 700;
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>
