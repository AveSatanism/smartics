<template>
  <footer class="w-full site_color_6_background text-left">
    <div class="footer_container flex flex-wrap justify-between mx-auto">
      <div>
        <a href="/"><img class="mb-[32px]" src="@/assets/logo/secondary.svg" width="180" height="50" alt="Footer_logo"/></a>
        <p class="mb-[13px] text_6 site_color_1"><a href="DataProcessing">Политика обработки <br />персональных данных</a></p>
        <p class="mb-[13px] text_6 site_color_1"><a href="PrivacyPolicy">Политика конфиденциальности</a></p>
        <h3 class="mt-[32px] site_color_4">Перемены<br /> начинаются<br /> с нами!</h3>
      </div>
      <div class="flex flex-wrap gap-x-[100px] py-[8px]">
        <ul class="footer_list text_6 site_color_1">
          <li class="text_7"><p>меню</p></li>
          <li><p><a href="DigitalTransformation">цифровая <br />трансформация</a></p></li>
          <li><p><a href="InfrastructureManagement">управление <br />инфраструктурой</a></p></li>
          <li><p><a href="AuditIT">аудит ит</a></p></li>
          <li><p><a href="#">ит-аутсорсинг <br />и техподдержка</a></p></li>
          <li><p><a href="#">разработка по</a></p></li>
          <li><p><a href="#">отраслевые решения</a></p></li>
        </ul>
        <ul class="footer_list text_6 site_color_1">
          <li class="text_7"><p>информация</p></li>
          <li><p><a href="#">для бизнеса</a></p></li>
          <li><p><a href="#">для партнёров</a></p></li>
          <li><p><a href="Vacancies">для соискателей</a></p></li>
        </ul>
        <div class="text_6 site_color_1">
          <p class="mb-[13px] text_7">контакты</p>
          <ul class="w-[167px] mb-[16px]">
            <li class="flex justify-between normal-case"><p>С-Пб</p><a href="tel:8(812)-424-43-74" class="site_color_2">8(812)-424-43-74</a></li>
            <li class="flex justify-between normal-case"><p>Москва</p><a href="tel:8(495)-424-43-74" class="site_color_2">8(495)-424-43-74</a></li>
          </ul>
          <a href="mailto:Help@smartics.ru">Help@smartics.ru</a>
          <div class="my-[16px] flex gap-[12px]">
            <img src="@/assets/icon/Skype.svg" width="22.5" height="23.33" alt="skype_logo"/>
            <img src="@/assets/icon/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo"/>
            <img src="@/assets/icon/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo"/>
          </div>
          <img src="@/assets/icon/qr-code.svg" width="73" height="73" alt="qr-code"/>
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