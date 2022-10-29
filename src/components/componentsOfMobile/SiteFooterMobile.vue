<template>
  <footer class="mt-auto h-[456px] site_color_6_background pl-[31px] pt-[37px] pb-[47px] text-left text_6 site_color_1">
    <router-link to="/"><img class="mb-[24px]" src="@/assets/logo/secondary_mobile.svg" width="113" height="31" alt="Footer_logo"/></router-link>
    <p class="mb-[13px] text_6 site_color_1"><router-link to="DataProcessing">Политика обработки <br />персональных данных</router-link></p>
    <p class="mb-[24px] text_6 site_color_1"><router-link to="PrivacyPolicy">Политика конфиденциальности</router-link></p>
    <p class="mb-[13px] text_7">КОНТАКТЫ</p>
    <ul class="mb-[16px] w-[167px]">
      <li class="flex justify-between normal-case"><p>С-Пб</p><a href="tel:8(812)-424-43-74" class="site_color_2 pr-[3px]">8(812)-424-43-74</a></li>
      <li class="flex justify-between normal-case"><p>Москва</p><a href="tel:8(495)-424-43-74" class="site_color_2">8(495)-424-43-74</a></li>
    </ul>
    <a href="mailto:Help@smartics.ru">Help@smartics.ru</a>
    <div class="flex gap-[12px] mt-[16px] mb-[24px]">
      <button class="cursor-pointer" onClick="window.location.href='https://www.whatsapp.com';"><img src="@/assets/icon/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo"/></button>
      <button class="cursor-pointer" onClick="window.location.href='https://web.telegram.org/z/';"><img src="@/assets/icon/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo"/></button>
    </div>
    <p class="text_button mb-[16px] site_color_4">Перемены начинаются<br /> с нами!</p>
    <p class="text_6 site_color_1">Smartics © 2022</p>
  </footer>
</template>

<script>
</script>

<style>
</style>