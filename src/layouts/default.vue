<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <SiteHeader />
    <SiteNavigation v-if="size > 1024"/>
    <slot />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { useWindowSize } from '@vueuse/core'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    SiteFooter
  },
  setup() {
  const { width } = useWindowSize()
  return { size: width } 
}
}
</script>

<style>
</style>