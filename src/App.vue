<template>
  <div id="app">
    <SiteHeader />
    <SiteNavigation />
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
</style>
