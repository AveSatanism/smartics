<template>
  <div id="TechnicalWorksPage">
    <div v-if="isPC" class="flex flex-col items-center py-[54px] pb-[152px] site_color_1 text-center text_4">
      <div class="mb-[47px] flex justify-center">
        <img src="@/assets/pageContentImage/TechnicalWorks_image.svg" width="635.37" height="549.75" alt="TechnicalWorks_image">    
      </div>
      <h1 class="text-h1 mb-[15px]">технические работы</h1>
      <p class="mb-[21px]">позвоните нам, мы ответим на любые вопросы по данному
      <br>разделу</p>
      <UIButton variant="orange1" @click="showCommunicationFormDialog()">связаться с нами</UIButton>
    </div>
    <diV v-if="!isPC" class="flex flex-col items-center py-[38.5px] site_color_1 text-center text_button">
      <div class="mb-[29px] flex justify-center">
        <img class="h-[207px]" src="@/assets/pageContentImage/TechnicalWorks_image_mobile.svg" width="269" height="207" alt="404_image">    
      </div>
      <h2 class="mb-[11px] text-h2">технические работы</h2>
      <p class="mb-[30px]">позвоните нам, мы ответим на<br> любые вопросы по данному
      <br>разделу</p>
      <router-link to="ContactsMobile"><UIButton variant="orange1-mobile">связаться с нами</UIButton></router-link>
    </diV>
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
    UIButton
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