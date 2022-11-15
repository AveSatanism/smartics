<template>
  <div id="IndustrySolutions">
    <div v-if="isPC" class="site_color_1">
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
            <UISolutionsPanel v-model="tab" tab-name="panel1"><p>Медицинские<br> организации</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/medical_organizations_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel2"><p>Перевозки</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/transportation_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel3"><p>Гостиничное<br> дело</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/hotel_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel4"><p>Учебные<br> заведения</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/study_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel5"><p>Производства</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/productions_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel6"><p>Государственный<br> сектор</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/public_sector_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel7"><p>Крупный бизнес</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/big_business_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel8"><p>Малый и средний<br> бизнес</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/small_busines.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
            <UISolutionsPanel v-model="tab" tab-name="panel9"><p>... или создадим<br> новое!</p>
              <template #icon><img class="solutions_icon" src="@/assets/IndustrySolutions_icon/other_icon.svg"></template>
              <template #description1><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
              <template #description2><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
            </UISolutionsPanel>
          </div>
        </div>
      </div>
      <div>
        <h2 class="mb-[38px] text-h2 text-center">И для всех направлений мы готовы:</h2>
        <div class="mb-[124px] flex flex-col gap-y-[10px]">
        <UIAccordion v-model="tab" tab-name="accordion1">
          <template #number><h2>01.</h2></template>
          <template #title><h3>Оказать юридическое сопровождение</h3></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordion>
        <UIAccordion v-model="tab" tab-name="accordion2">
          <template #number><p>02.</p></template>
          <template #title><p>Провести аудит и консалтинг по информационной безопасности</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordion>
        </div>
      </div>
      <div class="mb-[180px]">
        <h2 class="mb-[58px] text-h2 text-center site_color_2">Мини кейсы отраслевых решений:</h2>
        <MiniCasesSolutions />
      </div>
    </div>
    <div v-if="!isPC" class="pt-[20px] flex flex-col items-center site_color_1 text-center">
      <img class="mb-[47px]" src="@/assets/pageContentImage/IndustrySolutions_image_mobile.svg" width="315" height="246" alt="SoftwareDevelopment_image">
      <h3 class="mb-[15px] text-h3-mobile">Отраслевые решения</h3>
      <p class="mb-[30px] text_6 !normal-case !tracking-normal">У вас есть задача? У нас уже есть решения!<br>
      Большинство проблем не уникальны (!!!), мы<br> подобрали лучшие способы их решения</p>
      <router-link to="ContactsMobile"><UIButton class="mb-[104px]" variant="orange1-mobile" @click="showCommunicationFormDialog()">Хочу!</UIButton></router-link>
      <div class="solutions_accordion_mobile mb-[57px] flex flex-col items-center gap-y-[10px] w-[315px]">  
        <UIAccordionMobile tab-name="panel1" variant="orange">
          <template #title><p>Медицинские организации</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/medical_organizations_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel2" variant="orange">
          <template #title><p>Перевозки</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/transportation_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel3" variant="orange">
          <template #title><p>Гостиничное<br> дело</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/hotel_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel4" variant="orange">
          <template #title><p>Учебные<br> заведения</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/study_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel5" variant="orange">
          <template #title><p>Производства</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/productions_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel6" variant="orange">
          <template #title><p>Гос сектор</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/public_sector_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel7" variant="orange">
          <template #title><p>Крупный бизнес</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/big_business_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel8" variant="orange">
          <template #title><p>Малый и<br> средний бизнес</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/small_busines.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel9" variant="orange">
          <template #title><p>... или создадим новое!</p></template>
          <template #icon><img class="h-[54px] max-w-[53px]" src="@/assets/IndustrySolutions_icon/other_icon.svg"></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
      </div>
      <p class="mb-[20px] text_button site_color_2">И для всех направления мы<br> готовы:</p>
      <div class="mb-[48px] flex flex-col items-center gap-y-[10px] w-[315px]">
        <UIAccordionMobile tab-name="panel10" variant="blue">
          <template #title><p class="ml-[16px] w-[240px] text-left text-[12px]">Провести аудит и консалтинг по информационной безопасности</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
        <UIAccordionMobile tab-name="panel11" variant="blue">
          <template #title><p class="ml-[16px] w-[240px] text-left text-[12px]">Оказать юридическое сопровождение</p></template>
          <template #description><p>Услуга ИТ-аутсорсинга позволит сократить затраты на ИТ, сделает прозрачным управление инфраструктурой и повысит качество ведения бизнес-процессов.</p></template>
        </UIAccordionMobile>
      </div>
      <UIButton class="mb-[86px]" variant="orange1-mobile">связаться с нами</UIButton>
    </div>
  </div>
</template>

<script>
import UIButton from '../components/UI/UIButton.vue'
import UISolutionsPanel from '../components/UI/UISolutionsPanel.vue'
import UIAccordion from '../components/UI/UIAccordion.vue'
import UIAccordionMobile from '../components/UI/UIAccordionMobile.vue'
import MiniCasesSolutions from '../components/MiniCasesSolutions.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs"
import { useIsPC } from '../components/isPC&isMobile.js'

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    UISolutionsPanel,
    UIAccordion,
    UIAccordionMobile,
    MiniCasesSolutions,
  },
  data() {
    return {
      tab: ""
    }
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
.solutions_accordion_mobile div div {
  background-color: var(--color-3);
  border-radius: 10px;
}
.solutions_accordion_mobile div div .description_background {
  background-color: rgba(255, 255, 255, 0.5) !important;
}
</style>