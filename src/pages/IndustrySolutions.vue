<template>
  <div id="IndustrySolutions">
    <div class="site_color_1 soft_dev_background">
      <div class="flex flex-wrap mb-[131px] gap-x-[28.5px] justify-center">
        <div class="mt-[120px] max-w-[552px] flex flex-col gap-[37px]">
          <h1 class="text-h1">Отраслевые решения</h1>
          <p class="text_1">У вас есть задача? У нас уже есть решения!
            <br>Большинство проблем не уникальны (!!!), мы
            <br>подобрали лучшие способы их решения</p>
          <UIButton variant="orange2" @click="showCommunicationFormDialog()">Хочу!</UIButton>
        </div>
        <img class="mt-[50px]" src="@/assets/pageContentImage/IndustrySolutions_image.svg" width="610" height="472" alt="SoftwareDevelopment_image">
      </div>
      <div>
        <h2 class="mb-[35px] text-h2 text-center">МЫ ЗНАЕМ, КАК СДЕЛАТЬ ХОРОШО, <br>ГОТОВЫЕ РЕШЕНИЯ SMARTICS:</h2>
        <div class="flex justify-center">
          <div class="mb-[128px] grid grid-cols-3 gap-[41px] w-[811px]">  
            <UISolutionsPanel v-model="tab" tab-name="panel1"><p>Медицинские организации</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/medical_organizations_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel2"><p>Перевозки</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/transportation_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel3"><p>Гостиничное дело</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/hotel_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel4"><p>Учебные заведения</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/study_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel5"><p>Производства</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/productions_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel6"><p>Государственный сектор</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/public_sector_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel7"><p>Крупный бизнес</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/big_business_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel8"><p>Малый и средний бизнес</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/small_busines.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel9"><p>... или создадим новое!</p>
              <template #icon><img src="@/assets/IndustrySolutions_icon/other_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
          </div>
        </div>
      </div>
      <div>
        <h2 class="mb-[58px] text-h2 text-center">И для всех направлений мы готовы:</h2>
      </div>
      <div class="mb-[180px]">
        <h2 class="mb-[58px] text-h2 text-center site_color_2">Мини кейсы отраслевых решений:</h2>
        <MiniCasesSolutions />
      </div>
    </div>
  </div>
</template>

<script>
import UIButton from '../components/UI/UIButton.vue'
import UISolutionsPanel from '../components/UI/UISolutionsPanel.vue'
import MiniCasesSolutions from '../components/MiniCasesSolutions.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    UISolutionsPanel,
    MiniCasesSolutions,
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
</style>