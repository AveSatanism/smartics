<template>
  <section class="politics_apply px-[30px] min-h-[86px] gap-x-[44px] flex justify-center items-center text-center text_7 site_color_3 site_color_1_background">
    <p>Продолжая использовать сайт smartics.ru вы соглашаетесь на использование файлов cookie.
    <br>Подробности на странице <router-link to="PrivacyPolicy">политики конфиденциальности</router-link></p>
    <UIButton variant="orange3">ХОРОШО</UIButton>   
  </section>  
</template>

<script>
  import UIButton from './UI/UIButton.vue'

  export default {
    components: {
      UIButton
    }
}
</script>
<style>
.politics_apply {
  position: fixed;
  bottom: 0px;
  z-index: 1;
  width: 100%;
}
</style>