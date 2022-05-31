<template>
  <Splide :options="{ rewind: false, type: 'loop', perMove: 1, perPage: 5, pagination: false, width: '1100px',}" aria-label="Partners Images">
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/itmo_icon.png" width="126" height="96" alt="itmo_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/magneton_icon.png" width="184" height="24" alt="magneton_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/М16_icon.png" width="124" height="36" alt="М16_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/HitechCeramics_icon.png" width="130" height="45" alt="HitechCeramics_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/DEGA_icon.png" width="142" height="46" alt="DEGA_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/HotelRK_icon.png" width="101" height="101" alt="HotelRK_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/BaltiyaHotel_icon.png" width="179" height="57" alt="BaltiyaHotel_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/ВСМ_icon.png" width="118" height="52" alt="ВСМ_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/Polygraph_icon.png" width="130" height="31" alt="Polygraph_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/Puratrans_icon.png" width="100" height="69" alt="Puratrans_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/UGF_icon.png" width="127" height="49" alt="UGF_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/PrimeLogistics_icon.png" width="157" height="49.06" alt="PrimeLogistics_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/PartnersLogo_icon.png" width="53" height="51" alt="PartnersLogo_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/ARSKA_icon.png" width="139" height="48" alt="ARSKA_icon_image">
    </SplideSlide>
    <SplideSlide class="splide_position">
      <img src="@/assets/PartnersLogo/Hotel365_icon.png" width="87" height="69" alt="Hotel365_icon_image">
    </SplideSlide>
  </Splide>
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
.splide_position {
    display: flex;
    justify-content: center;
    align-items: center;
}
.splide__track {
    margin: 0 50px;
}
.splide__arrow {
    color: #092C73;
    background-color: white;
}
</style>