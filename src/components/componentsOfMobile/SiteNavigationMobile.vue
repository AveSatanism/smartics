<template>
  <nav class="site_navigation_container_mobile flex justify-center text-center site_color_2_background">
    <ul class="navigation_links_mobile text_8 flex flex-col items-center gap-y-[30px]">
      <UIButton onClick="window.location.href = 'https://help.smartics.ru/';" variant="profile-orange">
        <template #icon><img src="@/assets/icon/Profile.svg" width="22" height="22" alt="profile_icon" /></template>
        В helpdesk
      </UIButton>
      <router-link to="DigitalTransformation"><li><p>цифровая<br>трансформация</p></li></router-link>
      <router-link to="InfrastructureManagement"><li><p>управление<br>инфраструктурой</p></li></router-link>
      <router-link to="AuditIT"><li><p>аудит IT и консалтинг</p></li></router-link>
      <router-link to="IT-outsourcing"><li><p>IT - аутсорсинг<br>и техподдержка</p></li></router-link>
      <router-link to="SoftwareDevelopment"><li><p>разработка по</p></li></router-link>
      <router-link to="IndustrySolutions"><li><p>отраслевые<br>решения</p></li></router-link>
      <button @click="toggleOpen()" class="text_8">
        <div class="flex justify-center gap-x-[6.5px]">
        <p>Контакты</p>
        <img v-if="!open" src="@/assets/icon/navigation_contacts_arrow_close.svg" width="13" height="8" alt="navigation_contacts_icon">
        <img v-if="open" src="@/assets/icon/navigation_contacts_arrow_open.svg" width="13" height="8" alt="navigation_contacts_icon">
        </div>
        <div v-if="open" class="mt-[18.5px]">
        <div class="mb-[31px] flex flex-col items-center text_8">
          <div class="mb-[11px] flex gap-x-[10px]"><p>СПБ</p><a href="tel:8(812)-424-43-74"><p>8-812-424-43-74</p></a></div>
          <div class="flex gap-x-[10px]"><p>Москва</p><a href="tel:8(812)-424-43-74"><p>8-495-424-43-74</p></a></div>
        </div>
        <div class="flex justify-center gap-[12px] mb-[18.5px]">
          <button onClick="window.location.href='https://www.whatsapp.com';"><img src="@/assets/icon/Watsapp_mobile.svg" width="22.5" height="23.33" alt="watsapp_logo"></button>
          <button onClick="window.location.href='https://web.telegram.org/z/';"><img src="@/assets/icon/Telegram_mobile.svg" width="23.33" height="23.33" alt="telegram_logo"></button>
        </div>
        </div>
      </button>
    </ul>
  </nav>
</template>

<script>
import UIButton from '../UI/UIButton.vue'

export default {
  components: {
    UIButton
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleOpen() {
      return this.open = !this.open;
    }
  },
}
</script>

<style>
  .site_navigation_container_mobile {
    position: absolute;
    margin-top: 3px;
    right: 30px;
    padding: 20px 0px;
    border-radius: 7px;
    z-index: 11;
    width: 207px;
    min-height: 476px;
    color: var(--color-7);
  }
  .navigation_links a.router-link-active {
    background: var(--color-1);
    border-radius: 10px;
  }
</style>