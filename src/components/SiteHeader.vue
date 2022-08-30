<template>
  <header class="site_color_7_background">
    <div class="site_header_container mx-auto flex justify-between flex-wrap gap-y-[20px]">
      <router-link to="/"><img src="@/assets/logo/primary.svg" width="203" height="47" alt="Logo"></router-link>
      <div class="site_header_content flex flex-wrap justify-between items-center gap-x-[52px] gap-y-[20px]">
        <div>
          <img src="@/assets/icon/phone.svg" width="19" height="19" alt="phone_logo">
          <ul class="site_header_numbers w-[171px] ml-[15px] text_8 site_color_1">
            <li>
              <p>С-ПБ</p><a href="tel:8(812)-424-43-74" class="site_color_4 pr-[3px]">8-<span
                  class="site_color_1">812</span>-424-43-74</a>
            </li>
            <li>
              <p>Москва</p><a href="tel:8(495)-424-43-74" class="site_color_4">8-<span
                  class="site_color_1">495</span>-424-43-74</a>
            </li>
          </ul>
        </div>
        <div class="gap-[12px]">
          <button class="cursor-pointer" onClick="window.location.href='https://www.whatsapp.com';"><img src="@/assets/icon/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo"></button>
          <button class="cursor-pointer" onClick="window.location.href='https://web.telegram.org/z/';"><img src="@/assets/icon/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo"></button>
        </div>
        <UIButton onClick="window.location.href = 'https://help.smartics.ru/';" variant="profile">
          <template #icon><img src="@/assets/icon/Profile.svg" width="22" height="22" alt="profile_icon" /></template>
          В helpdesk
        </UIButton>
      </div>
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
header {
  position: sticky;
  top: 0px;
  z-index: 10;
}

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