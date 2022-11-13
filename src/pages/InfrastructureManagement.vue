<template>
  <div id="InfrastructureManagement">
    <div v-if="isPC">
      <div class="infrastructureManagement_background pt-[44px] pb-[82px] flex flex-wrap justify-center items-center site_color_1">
        <div>
          <h1 class="text-h1 mb-[26px]">управление<br> инфраструктурой</h1>
          <p class="mb-[52px] text_1">Перечислить наименования известных программ с<br> узкой направленностью, которые заменяет штука<br> Егора<br> а вообще она делает это еще лучше</p>
          <UIButton variant="orange2" @click="showCommunicationFormDialog()">Хочу!</UIButton>
        </div>
        <img class="h-[554px]" src="@/assets/pageContentImage/InfrastructureManagement_image.svg" width="597" height="554" alt="InfrastructureManagement_image">
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
      <div class="infrastructureManagement_background_bot h-[230px]"></div>
    </div>
    <div v-if="!isPC" class="flex flex-col items-center text-center site_color_1">
      <img class="mb-[24px]" src="@/assets/pageContentImage/InfrastructureManagement_image_mobile.svg" width="313" height="234" alt="InfrastructureManagement_image">
      <h3 class="text-h3-mobile mb-[12px]">управление<br> инфраструктурой</h3>
      <p class="mb-[24px] text_6 !normal-case">Перечислить наименования известных<br> программ с узкой направленностью, которые<br> заменяет штука Егора<br> а вообще она делает это еще лучше</p>
      <router-link to="ContactsMobile"><UIButton class="mb-[38px]" variant="orange1-mobile" @click="showCommunicationFormDialog()">Хочу!</UIButton></router-link>
      <div class="pt-[30px] px-[30px] pb-[65px] w-full site_color_3_background">
        <p class="mb-[26px] text_button">Управление инфраструктурой<br> включает:</p>
        <div class="flex flex-col gap-y-[15px]">
          <UIAccordionMobile tab-name="accordion1">
            <template #title><p>Облачная инфраструктура</p></template>
            <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/InfrastructureManagement_image/cloudInfrastructure_icon.svg"></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordionMobile>
          <UIAccordionMobile tab-name="accordion2">
            <template #title><p>Системы <br>безопасности</p></template>
            <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/InfrastructureManagement_image/securitySystems_icon.svg"></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordionMobile>
          <UIAccordionMobile tab-name="accordion3">
            <template #title><p>ЦОД</p></template>
            <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/InfrastructureManagement_image/COD_icon.svg"></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordionMobile>
          <UIAccordionMobile tab-name="accordion4">
            <template #title><p>Телеком</p></template>
            <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/InfrastructureManagement_image/telecom_icon.svg"></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordionMobile>
          <UIAccordionMobile tab-name="accordion5">
            <template #title><p>Физическая безопастность</p></template>
            <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/InfrastructureManagement_image/physicalSecurity_icon.svg"></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordionMobile>
          <UIAccordionMobile tab-name="accordion6">
            <template #title><p>Сети</p></template>
            <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/InfrastructureManagement_image/networks_icon.svg"></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordionMobile>
          <UIAccordionMobile tab-name="accordion7">
            <template #title><p>Мультимедиа</p></template>
            <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/InfrastructureManagement_image/multimedia_icon.svg"></template>
            <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
          </UIAccordionMobile>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UIButton from '../components/UI/UIButton.vue'
import UIPanel from '../components/UI/UIPanel.vue'
import UIAccordionMobile from '../components/UI/UIAccordionMobile.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";
import { useIsPC } from '../components/isPC&isMobile.js'

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    UIPanel,
    UIAccordionMobile
  },
  data() {
    return {
      tab: ''
    }
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