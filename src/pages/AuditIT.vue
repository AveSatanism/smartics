<template>
  <div id="AuditIT">
    <div v-if="isPC">
      <div class="pt-[30px] pb-[47px] flex flex-wrap gap-x-[76px] justify-center">
        <div class="mt-[30px] site_color_1 flex flex-col gap-[26px]">
          <h1 class="text-h1">Один админ - <br>хорошо... <br>А целая команда <br>готова ему <br>помочь!</h1>
          <p class="text_1">Один человек не может обладать компетенцией <br>
          целой команды профессионалов, но зачастую это и <br>
          не нужно. <br>Часто простая задача решается дорого и не 
          <br>эффективно только из-за того, что сисадмин не <br>знает, как решить ее по-другому.</p>
          <p class="text_3">SMARTICS - ваш лучший друг и помощник. <br>Мы готовы дополнить вашего админа и помочь ему.</p>
          <UIButton variant="orange2" @click="showCommunicationFormDialog()">Хочу!</UIButton>
        </div>
        <img class="h-[607px]" src="@/assets/pageContentImage/AuditIT_image.svg" width="456" height="607" alt="AuditIT_image">
      </div>
      <section class="site_color_7 site_color_2_background">
        <h2 class="text-h2 py-[36px] text-center">Мы - команда таких же айти специалистов, мы готовы оказать любую <br>
        поддержку своим коллегам. Поможем организовать процессы <br>
        администрирования понятным и надёжным способом.</h2>
      </section>
      <div class="pt-[98px] pb-[112px] flex flex-col items-center site_color_1">
        <h3 class="text-h3 text-center mb-[50px]">Мы готовы оказать поддержку существующему IT отделу по ряду пунктов:</h3>
        <div class="w-[835px]">
        <ul class="audit_list text_1">
          <li><p>•</p><p>Решение и устранение конкретных проблем</p></li>
          <li><p>•</p><p>Проведение комплексного аудита существующей IT инфрастуктуры и составление дорожной карты её модернизации</p></li>
          <li><p>•</p><p>Временная подмена вашего специалиста на время отпуска и непредвиденных обстоятельств</p></li>
          <li><p>•</p><p>Консалтинг по информационной безопасности</p></li>
        </ul>
        </div>
      </div>
      <ContactForm class="pb-[112px]"/>
    </div>
    <div v-if="!isPC" class="py-[26px] flex flex-col items-center text-center site_color_1">
      <h3 class="mb-[12px] text-h3-mobile">Один админ - хорошо... <br>А целая команда <br>готова ему помочь!</h3>
      <img class="mb-[18px] h-[260px]" src="@/assets/pageContentImage/AuditIT_image_mobile.svg" width="195.32" height="260" alt="AuditIT_image">
      <p class="mb-[28px] text_6 !normal-case">Один человек не может обладать компетенцией <br>
      целой команды профессионалов, но зачастую это <br>и
      не нужно. <br>Часто простая задача решается дорого и не 
      <br>эффективно только из-за того, что сисадмин <br>не знает, как решить ее по-другому.</p>
      <section class="mb-[23px] w-full site_color_7 site_color_2_background">
        <p class="text_button py-[15px] text-center">Мы - команда таких же айти<br> специалистов и готовы оказать<br> любую
        поддержку своим <br>коллегам.</p>
      </section>
      <UIButton class="mb-[46px]" variant="orange1-mobile" @click="showCommunicationFormDialog()">Хочу!</UIButton>
      <p class="mb-[19px] text_button">Мы готовы оказать поддержку<br> существующему IT отделу по<br> ряду пунктов:</p>
      <div class="w-[315px]">
      <ul class="audit_list_mobile text_6 !normal-case">
        <li><p>Решение и устранение конкретных проблем</p></li>
        <li><p>Проведение комплексного аудита существующей IT инфрастуктуры и составление дорожной карты её модернизации</p></li>
        <li><p>Временная подмена вашего специалиста на время отпуска и непредвиденных обстоятельств</p></li>
        <li><p>Консалтинг по информационной безопасности</p></li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ContactForm from '../components/ContactForm.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import UIButton from '../components/UI/UIButton.vue'
import { createPromiseDialog } from "vue-promise-dialogs";
import { useIsPC } from '../components/isPC&isMobile.js'

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    ContactForm,
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
.audit_list_mobile li {
  display: flex;
  padding: 15px 9.5px;
  margin-bottom: 13px;
  box-shadow: -2px -2px 5px #ECF4FF, 2px 4px 8px #ECF4FF;
  border-radius: 10px;
  background-color: var(--color-7);
}
.audit_list li {
  display: flex;
  column-gap: 13px;
  padding: 27px 40px;
  margin-bottom: 20px;
  border: 2px solid var(--color-3);
  box-shadow: 0px 4px 4px rgba(221, 236, 255, 0.5);
  border-radius: 15px;
  background-color: var(--color-7);
}
</style>