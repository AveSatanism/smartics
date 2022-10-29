<template>
  <footer class="mt-auto w-full site_color_6_background text-left">
    <div class="footer_container flex flex-wrap justify-between mx-auto">
      <div>
        <router-link to="/"><img class="mb-[28px]" src="@/assets/logo/secondary.svg" width="180" height="50" alt="Footer_logo"/></router-link>
        <p class="text_button mb-[28px] site_color_4">Перемены начинаются<br /> с нами!</p>
        <p class="mb-[13px] text_6 site_color_1"><router-link to="DataProcessing">Политика обработки <br />персональных данных</router-link></p>
        <p class="mb-[28px] text_6 site_color_1"><router-link to="PrivacyPolicy">Политика конфиденциальности</router-link></p>
        <p class="mb-[28px] text_6 site_color_1">Smartics © 2022</p>
      </div>
      <div class="flex flex-wrap gap-x-[100px] py-[8px]">
        <ul class="footer_list text_6 site_color_1">
          <li class="text_7"><p>МЕНЮ</p></li>
          <li><p><router-link to="DigitalTransformation">цифровая <br />трансформация</router-link></p></li>
          <li><p><router-link to="InfrastructureManagement">управление <br />инфраструктурой</router-link></p></li>
          <li><p><router-link to="AuditIT">аудит ит</router-link></p></li>
          <li><p><router-link to="IT-outsourcing">ит-аутсорсинг <br />и техподдержка</router-link></p></li>
          <li><p><router-link to="SoftwareDevelopment">разработка по</router-link></p></li>
          <li><p><router-link to="IndustrySolutions">отраслевые решения</router-link></p></li>
        </ul>
        <ul class="footer_list text_6 site_color_1">
          <li class="text_7"><p>ИНФОРМАЦИЯ</p></li>
          <li><p><router-link to="#">для бизнеса</router-link></p></li>
          <li><p><router-link to="#">для партнёров</router-link></p></li>
          <li><p><router-link to="Vacancies">для соискателей</router-link></p></li>
        </ul>
        <div class="text_6 site_color_1">
          <p class="mb-[13px] text_7">КОНТАКТЫ</p>
          <ul class="w-[167px] mb-[16px]">
            <li class="flex justify-between normal-case"><p>С-Пб</p><a href="tel:8(812)-424-43-74" class="site_color_2 pr-[3px]">8(812)-424-43-74</a></li>
            <li class="flex justify-between normal-case"><p>Москва</p><a href="tel:8(495)-424-43-74" class="site_color_2">8(495)-424-43-74</a></li>
          </ul>
          <a href="mailto:Help@smartics.ru">Help@smartics.ru</a>
          <div class="my-[16px] flex gap-[12px]">
            <button class="cursor-pointer" onClick="window.location.href='https://www.whatsapp.com';"><img src="@/assets/icon/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo"/></button>
            <button class="cursor-pointer" onClick="window.location.href='https://web.telegram.org/z/';"><img src="@/assets/icon/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo"/></button>
          </div>
          <img src="@/assets/icon/qr-code.svg" width="122" height="122" alt="qr-code"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style>
.footer_container {
  padding: 18px 30px;
  max-width: 1160px;
}
.footer_list li {
  margin-bottom: 13px;
}
</style>