<template>
  <div id="app">
    <SiteHeader />
    <SiteNavigation />
    <Politics_apply />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteNavigation from './components/SiteNavigation.vue'
import Politics_apply from './components/Politics_apply.vue'
import SiteFooter from './components/SiteFooter.vue'
export default {
  components: {
    SiteHeader,
    SiteNavigation,
    Politics_apply,
    SiteFooter
  }
}
</script>

<style>
</style>
