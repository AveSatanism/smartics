<template>
  <div id="PartnersInfo">
      <SiteHeader />
      <SiteNavigation />
      <div class="pt-[44px] px-[30px] pb-[110px] flex flex-col items-center text-center">
        <h2 class="mb-[36px] site_color_1">Наши партнеры</h2>
        <div class="max-w-[954px] flex justify-between items-center flex-wrap gap-[62px]">
          <img src="@/assets/PartnersLogo/itmo_icon.png" width="126" height="96" alt="itmo_icon_image">
          <img src="@/assets/PartnersLogo/magneton_icon.png" width="184" height="24" alt="magneton_icon_image">
          <img src="@/assets/PartnersLogo/М16_icon.png" width="124" height="36" alt="М16_icon_image">
          <img src="@/assets/PartnersLogo/HitechCeramics_icon.png" width="130" height="45" alt="HitechCeramics_icon_image">
          <img src="@/assets/PartnersLogo/DEGA_icon.png" width="142" height="46" alt="DEGA_icon_image">
          <img src="@/assets/PartnersLogo/HotelRK_icon.png" width="101" height="101" alt="HotelRK_icon_image">
          <img src="@/assets/PartnersLogo/BaltiyaHotel_icon.png" width="179" height="57" alt="BaltiyaHotel_icon_image">
          <img src="@/assets/PartnersLogo/ВСМ_icon.png" width="118" height="52" alt="ВСМ_icon_image">
          <img src="@/assets/PartnersLogo/Polygraph_icon.png" width="130" height="31" alt="Polygraph_icon_image">
          <img src="@/assets/PartnersLogo/Puratrans_icon.png" width="100" height="69" alt="Puratrans_icon_image">
          <img src="@/assets/PartnersLogo/UGF_icon.png" width="127" height="49" alt="UGF_icon_image">
          <img src="@/assets/PartnersLogo/PrimeLogistics_icon.png" width="157" height="49.06" alt="PrimeLogistics_icon_image">
          <img src="@/assets/PartnersLogo/PartnersLogo_icon.png" width="53" height="51" alt="PartnersLogo_icon_image">
          <img src="@/assets/PartnersLogo/ARSKA_icon.png" width="139" height="48" alt="ARSKA_icon_image">
          <img src="@/assets/PartnersLogo/Hotel365_icon.png" width="87" height="69" alt="Hotel365_icon_image">
        </div>
      </div>
      <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    SiteFooter
    }
}
</script>
<style>
</style>