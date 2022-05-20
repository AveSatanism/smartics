<template>
  <section>
      <div class="politics_apply_container mx-auto flex justify-center items-center">
          <p>Продолжая использовать сайт smartics.ru вы соглашаетесь на использование файлов cookie.
            <br>Подробности на странице Политика конфиденциальности</p>
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
.politics_apply_container {
    height: 86px;
    font-size: 11px;
    color: white;
    background-color: #092C73;
    gap: 44px;
}

</style>