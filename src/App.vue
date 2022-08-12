<template>
  <div id="app">
    <component :is="layout">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
