<template>
  <div class="h-[400px]">
    <div class="flex gap-2">
      <button class="bg-[#44e]" @click="setCategory('cat1')">image.png</button>
      <button class="bg-[#44e]" @click="setCategory('cat2')">1image.png</button>
      <button class="bg-[#44e]" @click="setCategory('cat3')">3image.png</button>
      <button class="bg-[#44e]" @click="setCategory('cat4')">4image.png</button>
    </div>
    <h2>category: {{ category }}</h2>
    <h3 v-if="category === 'cat3'">I am cat 3</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: ''
    }
  },
  methods: {
    setCategory(categoryName) {
      this.category = categoryName
    }
  }
}
</script>

<style>
</style>