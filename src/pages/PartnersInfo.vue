<template>
  <div id="PartnersInfo">
      <div v-if="isPC" class="pt-[44px] px-[30px] pb-[110px] flex flex-col items-center text-center">
        <h2 class="text-h2 mb-[36px] site_color_1">Наши партнеры</h2>
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
      <div v-if="!isPC" class="mt-[23px] flex flex-col items-center text-center">
        <div class="mb-[40px] h-[43px] flex items-center justify-center w-full site_color_3_background">
        <p class="text_5 site_color_1">Наши партнеры</p>
        </div>
        <div class="mb-[88px] max-w-[315px] flex justify-around items-center flex-wrap gap-y-[29px] gap-x-[40px]">
          <img src="@/assets/PartnersLogo/itmo_icon.png" width="63" height="48" alt="itmo_icon_image">
          <img src="@/assets/PartnersLogo/magneton_icon.png" width="92" height="12" alt="magneton_icon_image">
          <img src="@/assets/PartnersLogo/М16_icon.png" width="62" height="18" alt="М16_icon_image">
          <img src="@/assets/PartnersLogo/BaltiyaHotel_icon.png" width="74" height="23" alt="BaltiyaHotel_icon_image">
          <img src="@/assets/PartnersLogo/ВСМ_icon.png" width="62" height="27" alt="ВСМ_icon_image">
          <img src="@/assets/PartnersLogo/DEGA_icon.png" width="71" height="23" alt="DEGA_icon_image">
          <img src="@/assets/PartnersLogo/UGF_icon.png" width="67" height="26" alt="UGF_icon_image">
          <img src="@/assets/PartnersLogo/PrimeLogistics_icon.png" width="83" height="26" alt="PrimeLogistics_icon_image">
          <img src="@/assets/PartnersLogo/ARSKA_icon.png" width="74" height="25" alt="ARSKA_icon_image">
          <img src="@/assets/PartnersLogo/HitechCeramics_icon.png" width="65" height="22" alt="HitechCeramics_icon_image">
          <img src="@/assets/PartnersLogo/Hotel365_icon.png" width="46" height="36" alt="Hotel365_icon_image">
          <img src="@/assets/PartnersLogo/Polygraph_icon.png" width="68" height="17" alt="Polygraph_icon_image">
          <img src="@/assets/PartnersLogo/Puratrans_icon.png" width="52" height="37" alt="Puratrans_icon_image">
          <img src="@/assets/PartnersLogo/PartnersLogo_icon.png" width="28" height="27" alt="PartnersLogo_icon_image">
          <img src="@/assets/PartnersLogo/HotelRK_icon.png" width="53" height="53" alt="HotelRK_icon_image">
        </div>
      </div>
  </div>
</template>
<script>
import { useIsPC } from '../components/isPC&isMobile.js'

export default {
  setup() {
  const isPC = useIsPC()
  return { isPC }
  },
}
</script>


<style>
</style>