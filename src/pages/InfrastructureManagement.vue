<template>
  <div id="InfrastructureManagement">
    <div>
      <div class="infrastructureManagement_background pt-[44px] pb-[82px] flex flex-wrap justify-center items-center site_color_1">
        <div>
          <h1 class="text-h1 mb-[26px]">управление<br> инфраструктурой</h1>
          <p class="mb-[52px] text_1">Перечислить наименования известных программ с<br> узкой направленностью, которые заменяет штука<br> Егора<br> а вообще она делает это еще лучше</p>
          <UIButton variant="orange2" @click="showCommunicationFormDialog()">Хочу!</UIButton>
        </div>
        <img class="h-[554px]" src="@/assets/pageContentImage/InfrastructureManagement_image.png" width="597" height="554" alt="InfrastructureManagement_image">
      </div>
      <div class="py-[20px] px-[30px] flex flex-col items-center site_color_2_background">
        <h2 class="text-h2 mb-[40px] max-w-[1161px] w-full py-[19px] text-center infrastructureManagement_border site_color_1_background">Управление инфраструктурой</h2>
        <div class="min-h-[325px] mb-[35px] flex justify-around md:w-[640px] xl:w-[1161px] gap-[25px]">
          <UIPanel v-model="tab" tab-name="card1">Облачная инфраструктура
            <template #icon><img src="@/assets/InfrastructureManagement_image/cloudInfrastructure_icon.svg"></template>
            <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIPanel>
          <UIPanel v-model="tab" tab-name="card2">Системы безопасности
            <template #icon><img src="@/assets/InfrastructureManagement_image/securitySystems_icon.svg"></template>
            <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIPanel>
          <UIPanel v-model="tab" tab-name="card3">ЦОД
            <template #icon><img src="@/assets/InfrastructureManagement_image/COD_icon.svg"></template>
            <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIPanel>
          <UIPanel v-model="tab" tab-name="card4">Телеком
            <template #icon><img src="@/assets/InfrastructureManagement_image/telecom_icon.svg"></template>
            <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIPanel>
          <UIPanel v-model="tab" tab-name="card5">Физическая безопастность
            <template #icon><img src="@/assets/InfrastructureManagement_image/physicalSecurity_icon.svg"></template>
            <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIPanel>
          <UIPanel v-model="tab" tab-name="card6">Сети
            <template #icon><img src="@/assets/InfrastructureManagement_image/networks_icon.svg"></template>
            <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIPanel>
          <UIPanel v-model="tab" tab-name="card7">Мультимедиа
            <template #icon><img src="@/assets/InfrastructureManagement_image/multimedia_icon.svg"></template>
            <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIPanel>
        </div>
      </div>
      <div class="infrastructureManagement_background_bot h-[115px]"></div>
    </div>
  </div>
</template>
<script>
import UIButton from '../components/UI/UIButton.vue'
import UIPanel from '../components/UI/UIPanel.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    UIPanel
  },
  data() {
    return {
      tab: 0
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
.infrastructureManagement_background {
  background-image: url("@/assets/pageContentImage/InfrastructureManagement_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
}
.infrastructureManagement_background_bot {
  background-image: url("@/assets/pageContentImage/InfrastructureManagement_wave_bot.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.infrastructureManagement_border {
  box-shadow: 0px 4px 8px var(--color-1-background);
  border-radius: 15px;
  color: var(--color-7);
}
</style>