<template>
  <div class="mini_cases_container h-[400px]">
    <div class="mb-[46px] flex justify-center gap-x-[55px] site_color_5">
      <button @click="setCategory('cat1')" :class="{'site_color_1': category === 'cat1'}"><h3 class="text-h3">Учебные заведения</h3></button>
      <button @click="setCategory('cat2')" :class="{'site_color_1': category === 'cat2'}"><h3 class="text-h3">Медицинские организации</h3></button>
      <button @click="setCategory('cat3')" :class="{'site_color_1': category === 'cat3'}"><h3 class="text-h3">Гостиничное дело</h3></button>
    </div>
    <div v-if="category === 'cat1'" class="flex justify-center items-center">
      <carousel-3d :controls-visible="true" :width="597" :height="398" :space="710" :inverseScaling="150" :perspective="0" :controlsWidth="35" :controlsHeight="35" :border="0" :count="3">
        <slide :index="0">
          <img class="h-[398px]" src="@/assets/IndustrySolutionsSlider/Study_image1.png" width="597" height="398" alt="Study_image1">
        </slide>
        <slide :index="1">
          <img class="h-[398px]" src="@/assets/IndustrySolutionsSlider/Study_image2.png" width="597" height="398" alt="Study_image2">
        </slide>
        <slide :index="2">
          <img class="h-[398px]" src="@/assets/IndustrySolutionsSlider/Study_image3.png" width="597" height="398" alt="Study_image3">
        </slide>
      </carousel-3d>
      <p class="solutions_text_position ml-[83px] text_1 text-center w-[459px]">Планируем и воплощаем решения для любых учебных заведений: кейсы для классов, библиотек, актовых залов, коворкингов.</p>
    </div>
    <div v-if="category === 'cat2'" class="flex justify-center items-center">
      <carousel-3d :controls-visible="true" :width="597" :height="398" :space="710" :inverseScaling="150" :perspective="0" :controlsWidth="35" :controlsHeight="35" :border="0" :count="2">
        <slide :index="0">
          <img class="h-[398px]" src="@/assets/IndustrySolutionsSlider/Medecine_image1.png" width="597" height="398" alt="Medecine_image1">
        </slide>
        <slide :index="1">
          <img class="h-[398px]" src="@/assets/IndustrySolutionsSlider/Medecine_image2.png" width="597" height="398" alt="Medecine_image2">
        </slide>
      </carousel-3d>
      <p class="solutions_text_position ml-[83px] text_1 text-center w-[459px]">Планируем и воплощаем решения для любых учебных заведений: кейсы для классов, библиотек, актовых залов, коворкингов.</p>
    </div>
    <div v-if="category === 'cat3'" class="flex justify-center items-center">
      <carousel-3d :controls-visible="true" :width="597" :height="398" :space="710" :inverseScaling="150" :perspective="0" :controlsWidth="35" :controlsHeight="35" :border="0" :count="2">
        <slide :index="0">
          <img class="h-[398px]" src="@/assets/IndustrySolutionsSlider/Hotel_image1.png" width="597" height="398" alt="Hotel_image1">
        </slide>
        <slide :index="1">
          <img class="h-[398px]" src="@/assets/IndustrySolutionsSlider/Hotel_image2.png" width="597" height="398" alt="Hotel_image2">
        </slide>
      </carousel-3d>
      <p class="solutions_text_position ml-[83px] text_1 text-center w-[459px]">Планируем и воплощаем решения для любых учебных заведений: кейсы для классов, библиотек, актовых залов, коворкингов.</p>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      category: 'cat1',
    }
  },
  methods: {
    setCategory(categoryName) {
      this.category = categoryName
    }
  }
}
</script>
<style>
.mini_cases_container .carousel-3d-container{
  height: auto !important;
  width: 597px !important;
  overflow-x: hidden;
  padding-bottom: 50px;
  margin: 0 !important;
}
.mini_cases_container .carousel-3d-slide{
  box-shadow: 0px 4px 4px #E5E5E5;
  border-radius: 10px;
}
.mini_cases_container .right-1 {
  filter: opacity(0);
}
.mini_cases_container .carousel-3d-controls {
  width: 111px !important;
  margin: 0 !important;
  top: 92% !important;
  left: 42.5% !important;
  z-index: 0 !important;
}
.mini_cases_container .prev, .mini_cases_container .next {
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
.mini_cases_container .prev {
  padding-right: 3px;
}
.mini_cases_container .next {
  padding-left: 3px;
}
.mini_cases_container .prev span, .mini_cases_container .next span {
  color: white;
}
</style>