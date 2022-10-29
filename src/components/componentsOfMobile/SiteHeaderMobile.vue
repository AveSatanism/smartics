<template>
  <header class="site_header_container_mobile site_color_7_background flex justify-between">
    <router-link to="/"><img src="@/assets/logo/primary_mobile.svg" width="139" height="32" alt="Logo"></router-link>
    <div>
      <button v-if="!active" @click="toggleActive()"><img src="@/assets/icon/navigation_mobile_button_icon.svg" width="22" height="13" alt="navigation"></button>
      <button v-if="active" @click="toggleActive()"><img src="@/assets/icon/navigation_mobile_button_close_icon.svg" width="16.01" height="16.01" alt="navigation"></button>
      <SiteNavigationMobile v-if="active"/>
    </div>
  </header>
</template>

<script>
import SiteNavigationMobile from '@/components/componentsOfMobile/SiteNavigationMobile.vue'

export default {
  components: {
    SiteNavigationMobile,
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleActive() {
      return this.active = !this.active;
    }
  },
}
</script>
<style>
.site_header_container_mobile {
  position: sticky;
  top: 0px;
  z-index: 10;
  min-height: 88px;
  padding: 39px 30px 17px;
  max-width: 1024px;
}
</style>