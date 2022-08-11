<template>
  <div id="SoftwareDevelopment">
    <SiteHeader />
    <SiteNavigation />
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
          <UIButton variant="orange2">Хочу!</UIButton>
        </div>
        <img class="mt-[49px]" src="@/assets/pageContentImage/SoftwareDevelopment_image.svg" width="575" height="571" alt="SoftwareDevelopment_image">
      </div>
      <div>
        <h3 class="mb-[28px] text-h3 text-center">МЫ ГОТОВЫ ОСУЩЕСТВИТЬ:</h3>
      </div>
      <div>
        <h2 class="mb-[73px] text-h2 site_color_2 text-center">Примеры Наших решений:</h2>
        <SofwareSlider />
      </div>
    </div>
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import UIButton from '../components/UI/UIButton.vue'
import SofwareSlider from '../components/SofwareSlider.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    UIButton,
    SofwareSlider,
    SiteFooter
    }
}
</script>
<style>
.soft_dev_background {
  background-image: url("@/assets/pageContentImage/SoftwareDevelopment_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>