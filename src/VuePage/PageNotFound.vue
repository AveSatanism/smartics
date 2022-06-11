<template>
  <div id="404Page">
    <SiteHeader />
    <SiteNavigation />
    <div class="py-[57px] site_color_1 text-center text_4">
      <div class="mb-[26px] flex justify-center">
        <img src="@/assets/pageContentImage/404_page_image.png" width="512" height="443" alt="404_image">    
      </div>
      <h1 class="mb-[10px]">О, нет!</h1>
      <p>Страница украдена, либо никогда не существовала</p>
    </div>
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import PoliticsApply from '../components/PoliticsApply.vue'
import SiteFooter from '../components/SiteFooter.vue'

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
</style>