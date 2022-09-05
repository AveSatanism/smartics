<template>
<section class="software_slider_container flex justify-center mb-[67px]">
<carousel-3d :controls-visible="true" :width="597" :height="398" :space="710" :inverseScaling="150" :perspective="0" :controlsWidth="35" :controlsHeight="35" :border="0" :count="3">
  <slide :index="0">
    <img class="h-[398px]" src="@/assets/SoftwareDevelopmentSlider/Slide_image1.png" alt="Slide_image1">
  </slide>
  <slide :index="1">
    <img class="h-[398px]" src="@/assets/SoftwareDevelopmentSlider/Slide_image2.png" alt="Slide_image2">
  </slide>
  <slide :index="2">
    <img class="h-[398px]" src="@/assets/SoftwareDevelopmentSlider/Slide_image3.png" alt="Slide_image3">
  </slide>
</carousel-3d>
</section>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide
  },
}

</script>
<style>
.software_slider_container .carousel-3d-container{
  height: auto !important;
  width: 900px !important;
  overflow-x: hidden;
  padding-bottom: 50px;
  margin: 0 !important;
}
.software_slider_container .carousel-3d-slide{
  border-radius: 10px;
}
.software_slider_container .right-1, .software_slider_container .left-1 {
  filter: opacity(0.2);
}
.software_slider_container .carousel-3d-controls {
  width: 111px !important;
  margin: 0 !important;
  top: 92% !important;
  left: 44% !important;
  z-index: 0 !important;
}
.software_slider_container .prev, .software_slider_container .next {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6.5px;
  background-color: var(--color-2);
  border-radius: 50%;
  font-size: 39px !important;
  height: 35px;
  width: 35px;
}
.software_slider_container .prev {
  padding-right: 3px;
}
.software_slider_container .next {
  padding-left: 3px;
}
.software_slider_container .prev span, .software_slider_container .next span {
  color: white;
}

</style>