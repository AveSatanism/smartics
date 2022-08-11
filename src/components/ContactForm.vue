<template>
  <section class="flex justify-center">
    <div class="w-[1163px] pt-[30px] pb-[17px] px-[40px] site_color_7 site_color_2_background rounded-[15px]">
    <div class="mb-[15px] flex items-center justify-between">
      <h2 class="text-h2 text-center">Перемены начинаются<br> с нами!</h2>
      <div class="flex items-center">
        <div class="text-center">
          <h3 class="text-h3 mb-[24px]">Заполните форму<br> и мы свяжемся с Вами</h3>
          <p class="text_6">Или позвоните нам:</p>
          <p class="text_button">С-Пб <a href="tel:8(812)-424-43-74">8-812-424-43-75</a>
          <br>Мск <a href="tel:8(495)-424-43-74">8-495-424-43-75</a></p>
        </div>
        <img class="form_arrow" src="@/assets/icon/form_arrow_icon.svg" width="81.02" height="40.69" alt="form_arrow_icon">
        <form class="pt-[35px] flex flex-col gap-y-[12px] site_color_1">
          <p>
            <input class="w-[194px] h-[29px] p-[8px] rounded-[5px] text_10" type="text" name="name" placeholder="Контактное лицо*" required>
          </p>
          <p>
            <input class="w-[194px] h-[29px] p-[8px] rounded-[5px] text_10" type="tel" name="tel" placeholder="Контактный телефон*" required>
          </p>
          <UIButton variant="submit">ОТПРАВИТЬ</UIButton> 
        </form>
      </div>
    </div>
    <p class="text_9 text-center site_color_6">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности</p>
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
.form_arrow {
  position: relative;
  top: -47px;
  left: -5px;
  margin-right: 15px;
}
</style>