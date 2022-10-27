<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <SiteHeader />
    <component :is="headerComponent" />
    <slot />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    SiteFooter,
  },
  setup() {
    const { width } = useWindowSize()
    const headerComponent = computed(() => {
      return width.value > 1024 ? SiteNavigation : null
    })
    return { headerComponent }
  },
}
</script>

<style></style>
