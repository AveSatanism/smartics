<template>
<section class="flex justify-center">
 <div class="splide__track_mobile">
  <Splide :options="{ rewind: false, type: 'loop', perMove: 2, perPage: 2, pagination: false, fixedWidth: '100px', width: '325px'}" aria-label="Partners Images">
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/itmo_icon.png" width="63" height="48" alt="itmo_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/magneton_icon.png" width="92" height="12" alt="magneton_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/М16_icon.png" width="62" height="18" alt="М16_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/HitechCeramics_icon.png" width="65" height="22" alt="HitechCeramics_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/DEGA_icon.png" width="71" height="23" alt="DEGA_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/HotelRK_icon.png" width="53" height="53" alt="HotelRK_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/BaltiyaHotel_icon.png" width="74" height="23" alt="BaltiyaHotel_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/ВСМ_icon.png" width="62" height="27" alt="ВСМ_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/Polygraph_icon.png" width="68" height="17" alt="Polygraph_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/Puratrans_icon.png" width="52" height="37" alt="Puratrans_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/UGF_icon.png" width="67" height="26" alt="UGF_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/PrimeLogistics_icon.png" width="83" height="26" alt="PrimeLogistics_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/PartnersLogo_icon.png" width="28" height="27" alt="PartnersLogo_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/ARSKA_icon.png" width="74" height="25" alt="ARSKA_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position_mobile">
      <img src="@/assets/PartnersLogo/Hotel365_icon.png" width="46" height="36" alt="Hotel365_icon_image">
    </SplideSlide>
  </Splide>
  </div>
</section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
}

</script>
<style>
.splide_position_mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
}
.splide__track_mobile .splide__track {
  margin: 0 50px;
}
.splide__arrow svg {
  height: 17px;
  filter: brightness(0) invert(1);
}
.splide__arrow {
  width: 35px;
  height: 35px;
  background-color: var(--color-2);
  opacity: 1;
  z-index: 0;
}
.splide__arrow:hover {
  opacity: 0.6;
}

</style>