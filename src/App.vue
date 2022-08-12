<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
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
</style>
