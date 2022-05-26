<template>
  <section class="mb-[20px]">
      <div class="PoliticsApply_container mx-auto flex justify-center items-center text_7 site_color_3 site_color_1_background">
          <p>Продолжая использовать сайт smartics.ru вы соглашаетесь на использование файлов cookie.
            <br>Подробности на странице <a href="#" class="text_8">Политика конфиденциальности</a></p>
          <UIButton>ХОРОШО</UIButton>   
      </div>
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
.PoliticsApply_container {
    height: 86px;
    text-align: center;
    gap: 44px;
}
</style>