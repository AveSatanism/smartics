<template>
  <section>
      <div class="footer_container flex justify-center">
        <div class="smartics_info">
            <img class="smartics_logo2" src="@/assets/logo/secondary.svg" width="180" height="50" alt="Footer_logo">
            <p>Политика обработки персональных данных</p>
            <p>Политика конфиденциальности</p>
            <h3>Перемены начинаются с нами!</h3>
        </div>
        <ul>
            <li class="footer_menu"><p>меню</p></li>
            <li class="footer_menu"><p>цифровая трансформация</p></li>
            <li class="footer_menu"><p>управление инфраструктурой</p></li>
            <li class="footer_menu"><p>аудит ит</p></li>
            <li class="footer_menu"><p>ит -аутсорсинг и техподдержка</p></li>
            <li class="footer_menu"><p>разработка по</p></li>
            <li class="footer_menu"><p>отраслевые решения</p></li>
        </ul>
        <ul>
            <li class="footer_info"><p>информация</p></li>
            <li class="footer_info"><p>для бизнеса</p></li>
            <li class="footer_info"><p>для партнёров</p></li>
            <li class="footer_info"><p>для соискателей</p></li>
        </ul>
        <div class="contacts">
            <p class="footer_contact">контакты</p>
            <ul class="footer_contact">
                <li class="flex"><p>С-Пб</p><p>8(812)-424-43-74</p></li>
                <li class="flex"><p>Москва</p><p>8(495)-424-43-74</p></li>
                <li class="flex"><p>Астана</p><p>8(717)-424-43-74</p></li>
            </ul>
            <p class="footer_contact">Email</p>
            <p class="footer_contact">Help@smartics.ru</p>
            <div class="footer_contact flex">
              <img class="" src="@/assets/Skype.svg" width="22.5" height="23.33" alt="skype_logo">
              <img class="" src="@/assets/Watsapp.svg" width="22.5" height="23.33" alt="watsapp_logo">
              <img class="" src="@/assets/Telegram.svg" width="23.33" height="23.33" alt="telegram_logo">
            </div>
            <img class="footer_contact" src="@/assets/qr-code.svg" width="73" height="73" alt="qr-code">
        </div>
      </div>
  </section>  
</template>

<script>

</script>

<style>
    .footer_container {
        font-size: 12px;
        gap: 100px;
        padding: 18px 0;
    }

    .footer_menu {
        margin-bottom: 13px;
    }

    .footer_info {
        margin-bottom: 13px;
    }

    .footer_contact {
        margin-bottom: 16px;
    }
</style>