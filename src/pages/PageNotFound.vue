<template>
  <div id="404Page">
    <div v-if="isPC" class="py-[57px] site_color_1 text-center text_4">
      <div class="mb-[26px] flex justify-center">
        <img src="@/assets/pageContentImage/404_page_image.svg" width="512" height="443" alt="404_image">    
      </div>
      <h1 class="text-h1 mb-[10px]">О, нет!</h1>
      <p>Страница украдена, либо никогда не существовала</p>
    </div>
    <diV v-if="!isPC" class="py-[107px] site_color_1 text-center text_button">
      <div class="mb-[30px] flex justify-center">
        <img class="h-[240.42px]" src="@/assets/pageContentImage/404_page_image_mobile.svg" width="312.12" height="240.42" alt="404_image">    
      </div>
      <h2 class="text-h2">О, нет!</h2>
      <p class="mb-[30px]">Страница украдена, либо <br>никогда не существовала</p>
      <router-link to="/"><p class="site_color_4">Вернуться на главную страницу</p></router-link>
    </diV>
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
