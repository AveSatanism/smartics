<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <SiteHeader />
    <SiteNavigation />
    <slot />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    SiteFooter
  }
}
</script>

<style>

</style>