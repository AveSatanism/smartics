<template>
  <div id="DigitalTransformation">
    <SiteHeader />
    <SiteNavigation />
    <div class="digitalTrans_head  py-[7px]">
      <div class="pt-[55px] h-[703px] flex justify-center items-start">
        <img class="h-[429px] pt-[44px]" src="@/assets/DigitalTransforrmation_image1.png" width="572" height="429" alt="DigitalTransforrmation_image">
        <div class="ml-[55px] w-[510px] site_color_1 text-center flex justify-center flex-wrap">
          <h1 class="mb-[7px]">пора заставить<br> технологии<br> работать на вас!</h1>
          <p class="mb-[28px] text_1">Пришло время освободить свой бизнес от<br> ламповых технологий.</p>
          <h3 class="mb-[22px]">Что вас ожидает:</h3>
          <ul class="mb-[28px] list-disc text-left">
            <li><p class="text_1">повышение эффективности процессов</p></li>
            <li><p class="text_1">освобождение от лишних бизнес <br>процессов</p></li>
            <li><p class="text_1">снижение издержек за счёт отсутствия <br>простоя оборудования</p></li>
            <li><p class="text_1">освобождение от непрофильных IT <br>задач</p></li>
          </ul>
          <div class="flex justify-center w-[100%]">
            <UIButton class="flex justify-center w-[180px]">Хочу!</UIButton>
          </div>
        </div>    
      </div>
      <div>
        <div class="flex justify-center">
          <h2 class="digitalTrans_main_title mb-[56px] text-center site_color_1">Ваши шаги к эффективному бизнесу в рамках<br>цифровой трансфорации</h2>
        </div>
        <div class="flex justify-center items-center site_color_1 mb-[109px]">
          <div class="w-[492px]">
            <h3 class="mb-[34px]">Что вас ожидает:</h3>
            <p class="text_1 mb-[100px]">Повышение эффективности процессовосвобождение от лишних бизнес процессовснижение издержек за счёт отсутствия простоя оборудования освобождение от непрофильных IT задач</p>
            <h3 class="mb-[34px]">Что вас ожидает:</h3>
            <p class="text_1">Повышение эффективности процессовосвобождение от лишних бизнес процессовснижение издержек за счёт отсутствия простоя оборудования освобождение от непрофильных IT задач</p>
          </div>
          <img class="h-[688px] ml-[80px]" src="@/assets/DigitalTransforrmation_image2.png" width="545" height="688" alt="DigitalTransforrmation_image">
        </div>
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
.digitalTrans_head {
  background-image: url("@/assets/DigitalTransformation_wave.svg");
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