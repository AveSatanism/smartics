<template>
  <div id="DigitalTransformation">
    <div v-if="isPC" class="digitalTrans_background py-[7px] text_1">
      <div class="pt-[55px] min-h-[703px] flex justify-center items-start">
        <img class="h-[429px] pt-[44px]" src="@/assets/pageContentImage/DigitalTransforrmation_image1.png" width="572" height="429" alt="DigitalTransforrmation_image">
        <div class="ml-[10px] mb-[30px] max-w-[603px] site_color_1 text-center flex flex-col items-center">
          <h1 class="text-h1 mb-[7px]">пора заставить технологии работать на вас!</h1>
          <p class="mb-[28px]">Пришло время освободить свой бизнес от<br> ламповых технологий.</p>
          <h3 class="text-h3 mb-[22px]">Что вас ожидает:</h3>
          <ul class="mb-[28px] flex flex-col items-center list-disc">
            <li><p>повышение эффективности процессов</p></li>
            <li><p>освобождение от лишних бизнес процессов</p></li>
            <li><p>снижение издержек за счёт отсутствия простоя <br>оборудования</p></li>
            <li><p>освобождение от непрофильных IT задач</p></li>
          </ul>
          <UIButton variant="orange2" @click="showCommunicationFormDialog()">Хочу!</UIButton>
        </div>    
      </div>
      <div>
        <div class="flex justify-center">
          <h2 class="text-h2 digitalTrans_main_title mb-[56px] text-center site_color_1">Ваши шаги к эффективному бизнесу в рамках<br>цифровой трансфорации</h2>
        </div>
        <div class="flex flex-wrap justify-center items-center site_color_1 mb-[109px]">
          <div class="max-w-[492px]">
            <h3 class="text-h3 mb-[34px]">Что вас ожидает:</h3>
            <p class="mb-[100px]">Повышение эффективности процессов освобождение от лишних бизнес процессов снижение издержек за счёт отсутствия простоя оборудования освобождение от непрофильных IT задач</p>
            <h3 class="text-h3 mb-[34px]">Что вас ожидает:</h3>
            <p>Повышение эффективности процессов освобождение от лишних бизнес процессов снижение издержек за счёт отсутствия простоя оборудования освобождение от непрофильных IT задач</p>
          </div>
          <img class="h-[688px] ml-[80px]" src="@/assets/pageContentImage/DigitalTransforrmation_image2.svg" width="545" height="688" alt="DigitalTransforrmation_image">
        </div>
      </div>
    </div>
    <div v-if="!isPC" class="digitalTrans_background_mobile flex flex-col items-center mt-[29px] text-center site_color_1">
      <h3 class="text-h3-mobile mb-[7px]">пора заставить<br> технологии работать<br> на вас!</h3>
      <p class="text_button mb-[18px]">Пришло время освободить ваш<br> бизнес от ламповых технологий.</p>
      <img class="mb-[29px]" src="@/assets/pageContentImage/DigitalTransforrmation_image1_mobile.svg" width="298" height="222" alt="DigitalTransforrmation_image">
      <p class="text_button mb-[14px]">Что вас ожидает:</p>
      <div class="flex justify-center max-w-[313px]">
        <ul class="digitalTranform_list mb-[31px] text_6 !normal-case text-left">
          <li><p>•</p><p>повышение эффективности процессов</p></li>
          <li><p>•</p><p>освобождение от лишних бизнес процессов</p></li>
          <li><p>•</p><p>снижение издержек за счёт отсутствия простоя оборудования</p></li>
          <li><p>•</p><p>освобождение от непрофильных IT задач</p></li>
        </ul>
      </div>
      <UIButton class="mb-[44px]" variant="orange1-mobile">связаться с нами</UIButton>
      <div class="mb-[30px] h-[92px] flex items-center justify-center w-full site_color_3_background">
        <p class="text_button site_color_1">Ваши шаги к эффективному<br> бизнесу в рамках цифровой<br> трансфорации</p>
        <img class="digitalTransformation_arrow mb-[29px]" src="@/assets/pageContentImage/DigitalTransformation_arrow_mobile.svg" width="43.3" height="25.5" alt="DigitalTransforrmation_image">
      </div>
      <p class="mb-[10px] text_button">Что вас ожидает:</p>
      <p class="mb-[20px] text_6 !normal-case">Повышение эффективности процессов<br> освобождение от лишних бизнес процессов<br> снижение издержек за счёт отсутствия простоя<br> оборудования освобождение от непрофильных<br> IT задач</p>
      <img class="mb-[40px]" src="@/assets/pageContentImage/DigitalTransforrmation_image2_mobile.svg" width="288" height="364" alt="DigitalTransforrmation_image">
      <p class="mb-[10px] text_button">Что вас ожидает:</p>
      <p class="mb-[60px] text_6 !normal-case">Повышение эффективности процессов<br> освобождение от лишних бизнес процессов<br> снижение издержек за счёт отсутствия простоя<br> оборудования освобождение от непрофильных<br> IT задач</p>
    </div>
  </div>
</template>
<script>
import UIButton from '../components/UI/UIButton.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";
import { useIsPC } from '../components/isPC&isMobile.js'

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
  },
  setup() {
  const isPC = useIsPC()
  return { isPC }
  },
  methods: {
    showCommunicationFormDialog(params) {
      CommunicationFormDialog(params);
    },
  },
}
</script>
<style>
.digitalTranform_list li {
  display: flex;
  gap: 5px;
}
.digitalTrans_background {
  background-image: url("@/assets/pageContentImage/DigitalTransformation_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.digitalTrans_background_mobile {
  background-image: url("@/assets/pageContentImage/DigitalTransformation_wave_mobile.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.digitalTrans_main_title {
  padding: 20px;
  width: 1040px;
  border: 2px solid var(--color-7);
  box-shadow: 0px 4px 8px var(--color-1-background);
  border-radius: 15px;
  background-color: var(--color-7);
}
.digitalTransformation_arrow {
  margin-top: 46px;
  position: absolute;
}
</style>