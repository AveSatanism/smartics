<template>
  <header>
      <div class="site_header_container mx-auto flex justify-between">
          <img class="smartics_logo" src="@/assets/logo/primary.svg" width="203" height="47" alt="Logo">
          <nav class="flex">
            <img class="" src="@/assets/phone.svg" width="19" height="19" alt="phone_logo">
            <ul class="phone_numbers">
              <li class="phone_number flex justify-between"><p>С-ПБ</p><p>8-812-424-43-74</p></li>
              <li class="phone_number flex justify-between"><p>Москва</p><p>8-812-424-43-74</p></li>
              <li class="phone_number flex justify-between"><p>Астана</p><p>8-812-424-43-74</p></li>
            </ul>
            <img class="" src="@/assets/Skype.svg" width="22.5" height="23.33" alt="skype_logo">
            <img class="" src="@/assets/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo">
            <img class="" src="@/assets/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo">
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
  .phone_numbers {
    width: 171px;
  }
  .phone_number {
    width: 171px;
    font-size: 11px;
  }
  .site_header_container {
    height: 79px;
    padding: 16px 30px;
  }
</style>