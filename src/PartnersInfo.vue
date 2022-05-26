<template>
  <div id="PartnersInfo">
      <SiteHeader />
      <SiteNavigation />
      <div class="pt-[44px] pb-[110px] flex justify-center flex-wrap">
        <h2 class="w-[100%] mb-[36px] flex justify-center site_color_1">Наши партнеры</h2>
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
      <PoliticsApply />
      <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteNavigation from './components/SiteNavigation.vue'
import PoliticsApply from './components/PoliticsApply.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    PoliticsApply,
    SiteFooter
    }
}
</script>
<style>
body {
  font-family: 'MontserratVariable';
}

.site_color_1 {
  color: #092C73;
}
.site_color_1_background {
  background-color: #092C73;
}

.site_color_2 {
  color: #135EF2;
}
.site_color_2_background {
  background-color: #135EF2;
}

.site_color_3 {
  color: #DDECFF;
}
.site_color_3_background {
  background-color: #DDECFF;
}

.site_color_4 {
  color: #FF6B00;
}

.site_color_5_background {
  background-color: #F2F2F2;
}


h1 {
  font-weight: 800;
  font-size: 46px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

h2 {
  font-weight: 800;
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.1;
}

.text_1 {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
}

.text_2 {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
}

.text_3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
}

.text_4 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
}

.text_5 {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text_6 {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.text_7 {
  font-weight: 600;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

.text_8 {
  font-weight: 700;
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>