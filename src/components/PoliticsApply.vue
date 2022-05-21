<template>
  <section>
      <div class="PoliticsApply_container mx-auto flex justify-center items-center text_7">
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
    color: #DDECFF;
    text-align: center;
    background-color: #092C73;
    gap: 44px;
}
</style>