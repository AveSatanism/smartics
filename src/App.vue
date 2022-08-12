<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/empty'

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || EmptyLayout
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
