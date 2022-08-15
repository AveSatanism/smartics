<template>
  <dialog open class="communication_form_container fixed top-0 left-0 z-10 w-full h-full flex items-center justify-center">
    <div class="w-[510px] flex flex-col items-end gap-y-[6.5px]">
    <button name="cancel" @click="$emit('resolve', 'close')" class="exit_button w-[20px] h-[20px] flex justify-center items-center site_color_1_background"><img src="@/assets/icon/exit_icon.svg"></button>
    <div class="flex flex-col gap-y-[11px] items-center w-[510px] pt-[30px] pb-[17px] px-[40px] site_color_7 site_color_2_background rounded-[10px]">
      <p class="text_3">Перемены начинаются с нами!</p> 
      <div class="w-[328.42px] flex justify-between">
        <img class="h-[34.51px]" src="@/assets/icon/communication_form_arrow_left.svg" width="42.59" height="19.69">
        <img class="h-[34.51px]" src="@/assets/icon/communication_form_arrow_right.svg" width="42.59" height="19.69">
      </div>
      <form class="flex flex-col items-center gap-y-[12px] site_color_1" netlify>
      <div>
        <input class="w-[194px] h-[29px] p-[8px] rounded-[10px] text_10" type="tel" name="tel" placeholder="ТЕЛ.:" required>
      </div>
      <UIButton variant="letsGo">ПОЕХАЛИ!</UIButton> 
    </form>
    <p class="text_10 text-center">Нажимая на кнопку, вы даёте согласие на обработку персональных данных<br> и соглашаетесь с политикой конфиденциальности</p>
    </div>
    </div>
  </dialog>  
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
.communication_form_container {
  background-color: rgb(196, 196, 196, 0.7);
}
.exit_button {
  position: relative;
  margin: 0;
  border-radius: 50%;
}
</style>