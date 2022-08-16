<template>
  <section v-show="display"
    class="politics_apply px-[30px] min-h-[86px] gap-x-[44px] flex justify-center items-center text-center text_7 site_color_3 site_color_1_background">
    <p>Продолжая использовать сайт smartics.ru вы соглашаетесь на использование файлов cookie.
      <br>Подробности на странице <router-link to="PrivacyPolicy">политики конфиденциальности</router-link>
    </p>
    <UIButton variant="orange3" @click="display = false">ХОРОШО</UIButton>
  </section>
</template>

<script>
import UIButton from './UI/UIButton.vue'

import { useStorage } from '@vueuse/core'
export default {
  components: {
    UIButton
  },
  setup() {
    const display = useStorage('cookie', true)
    return {
      display
    }
  }
}
</script>
<style>
.politics_apply {
  position: fixed;
  bottom: 0px;
  z-index: 10;
  width: 100%;
}
</style>