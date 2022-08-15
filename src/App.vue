<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade">
        <router-view />
      </transition>
    </component>
    <PromiseDialogsWrapper />
  </div>
</template>

<script>
import { PromiseDialogsWrapper } from "vue-promise-dialogs";
import EmptyLayout from '@/layouts/empty'

export default {
  components: {
    PromiseDialogsWrapper
  },
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
