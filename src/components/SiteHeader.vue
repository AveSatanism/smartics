<template>
  <header>
      <div class="site_header_container mx-auto flex justify-between flex-wrap">
          <a href="/"><img src="@/assets/logo/primary.svg" width="203" height="47" alt="Logo"></a>
          <nav class="flex flex-wrap items-center">
            <img src="@/assets/phone.svg" width="19" height="19" alt="phone_logo">
            <ul class="w-[171px] ml-[15px] text_8 site_color_1">
              <li class="flex justify-between"><p>С-ПБ</p>
                <p class="site_color_4">8-<span class="site_color_2">812</span>-424-43-74</p></li>
              <li class="flex justify-between"><p>Москва</p>
                <p class="site_color_4">8-<span class="site_color_2">495</span>-424-43-74</p></li>
            </ul>
            <div class="flex flex-wrap gap-[12px] mx-[50px]">
              <img src="@/assets/Skype.svg" width="22.5" height="23.33" alt="skype_logo">
              <img src="@/assets/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo">
              <img src="@/assets/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo">
            </div>
            <UIButton>В helpdesk</UIButton>
          </nav>
      </div>
  </header>  
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
  .site_header_container {
    min-height: 79px;
    padding: 16px 30px;
    max-width: 1160px;
  }
</style>