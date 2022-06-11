<template>
  <header class="site_header_container mx-auto flex justify-between flex-wrap gap-y-[20px]">
    <a href="/"><img src="@/assets/logo/primary.svg" width="203" height="47" alt="Logo"></a>
    <div class="site_header_content w-[568px] flex flex-wrap justify-between items-center gap-y-[20px]">
      <div>
        <img src="@/assets/icon/phone.svg" width="19" height="19" alt="phone_logo">
        <ul class="site_header_numbers w-[171px] ml-[15px] text_8 site_color_1">
          <li><p>С-ПБ</p><a href="tel:8(812)-424-43-74" class="site_color_4">8-<span class="site_color_1">812</span>-424-43-74</a></li>
          <li><p>Москва</p><a href="tel:8(495)-424-43-74" class="site_color_4">8-<span class="site_color_1">495</span>-424-43-74</a></li>
        </ul>
      </div>
      <div class="gap-[12px]">
        <img src="@/assets/icon/Skype.svg" width="22.5" height="23.33" alt="skype_logo">
        <img src="@/assets/icon/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo">
        <img src="@/assets/icon/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo">
      </div>
      <UIButton variant="profile">
      <template #icon><img src="@/assets/icon/Profile.svg" width="22" height="22" alt="profile_icon"/></template>
      В helpdesk
      </UIButton>
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
  .site_header_content div {
    display: flex;
  }
  .site_header_numbers li {
    display: flex;
    justify-content: space-between;
  }
</style>