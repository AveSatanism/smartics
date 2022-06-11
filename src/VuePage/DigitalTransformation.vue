<template>
  <div id="DigitalTransformation">
    <SiteHeader />
    <SiteNavigation />
    <div class="digitalTrans_background py-[7px] text_1">
      <div class="pt-[55px] min-h-[703px] flex justify-center items-start">
        <img class="h-[429px] pt-[44px]" src="@/assets/pageContentImage/DigitalTransforrmation_image1.png" width="572" height="429" alt="DigitalTransforrmation_image">
        <div class="ml-[10px] max-w-[603px] site_color_1 text-center flex flex-col items-center">
          <h1 class="mb-[7px]">пора заставить технологии работать на вас!</h1>
          <p class="mb-[28px]">Пришло время освободить свой бизнес от<br> ламповых технологий.</p>
          <h3 class="mb-[22px]">Что вас ожидает:</h3>
          <ul class="mb-[28px] flex flex-col items-center list-disc">
            <li><p>повышение эффективности процессов</p></li>
            <li><p>освобождение от лишних бизнес процессов</p></li>
            <li><p>снижение издержек за счёт отсутствия простоя <br>оборудования</p></li>
            <li><p>освобождение от непрофильных IT задач</p></li>
          </ul>
          <UIButton variant="orange2">Хочу!</UIButton>
        </div>    
      </div>
      <div>
        <div class="flex justify-center">
          <h2 class="digitalTrans_main_title mb-[56px] text-center site_color_1">Ваши шаги к эффективному бизнесу в рамках<br>цифровой трансфорации</h2>
        </div>
        <div class="flex flex-wrap justify-center items-center site_color_1 mb-[109px]">
          <div class="max-w-[492px]">
            <h3 class="mb-[34px]">Что вас ожидает:</h3>
            <p class="mb-[100px]">Повышение эффективности процессовосвобождение от лишних бизнес процессовснижение издержек за счёт отсутствия простоя оборудования освобождение от непрофильных IT задач</p>
            <h3 class="mb-[34px]">Что вас ожидает:</h3>
            <p>Повышение эффективности процессовосвобождение от лишних бизнес процессовснижение издержек за счёт отсутствия простоя оборудования освобождение от непрофильных IT задач</p>
          </div>
          <img class="h-[688px] ml-[80px]" src="@/assets/pageContentImage/DigitalTransforrmation_image2.png" width="545" height="688" alt="DigitalTransforrmation_image">
        </div>
      </div>
    </div>
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import PoliticsApply from '../components/PoliticsApply.vue'
import SiteFooter from '../components/SiteFooter.vue'
import UIButton from '../components/UI/UIButton.vue'

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
.digitalTrans_background {
  background-image: url("@/assets/pageContentImage/DigitalTransformation_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.digitalTrans_main_title {
  padding: 20px 150px;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 99, 210, 0.3);
  border-radius: 15px;
  background-color: #FFFFFF;
}
</style>