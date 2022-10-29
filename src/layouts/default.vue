<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col min-h-[100vh]">
    <component :is="headerComponent" />
    <component :is="navigationComponent" />
    <slot />
    <component :is="footerComponent" />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteHeaderMobile from '../components/componentsOfMobile/SiteHeaderMobile.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteFooterMobile from '../components/componentsOfMobile/SiteFooterMobile.vue'
import { useIsPC } from '../components/isPC&isMobile.js'
import { computed } from 'vue'

export default {
  components: {
    SiteHeader,
    SiteHeaderMobile,
    SiteNavigation,
    SiteFooter,
    SiteFooterMobile
  },
  setup() {
    const isPC = useIsPC()
    const headerComponent = computed(() => {
      return isPC.value ? SiteHeader : SiteHeaderMobile
    })
    const navigationComponent = computed(() => {
      return isPC.value ? SiteNavigation : null
    })
    const footerComponent = computed(() => {
      return isPC.value ? SiteFooter : SiteFooterMobile
    })
    return { headerComponent, navigationComponent, footerComponent }
  },
}
</script>

<style></style>
