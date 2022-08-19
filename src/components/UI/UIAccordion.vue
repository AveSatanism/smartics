<template>
  <div class="flex justify-center">
    <div class="flex flex-col w-[1126px] accordion_border" :class="{ active: isActive }">
      <button class="flex items-center py-[20px] px-[24px] gap-x-[16px]" :class="{ active: isActive }" @click="toggleOpen()">
        <div class="transition-transform" :class="{ 'rotate-180': isActive }">
          <img src="@/assets/icon/accordion_arrow_open_icon.svg" width="23" height="14" alt="accordion_arrow_open_icon">
        </div>
        <div class="text-h2">
          <slot name="number"></slot>
        </div>
        <div class="text-h3">
          <slot name="title"></slot>
        </div>
      </button>
      <div v-if="isActive"
        class="accordion_description site_color_3_background text_1 p-[20px] mx-[40px] mb-[20px] rounded-[10px]">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    tabName: {
      type: String,
      default: null
    }
  },
  computed: {
    activeTab: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    isActive() {
      return this.activeTab === this.tabName
    }
  },
  methods: {
    toggleOpen() {
      if (this.activeTab === this.tabName) {
        this.activeTab = null
      } else {
        this.activeTab = this.tabName
      }
    }
  },
};
</script>
<style>
.accordion_border {
  background: var(--color-7);
  border: 1px solid rgba(221, 236, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(221, 236, 255, 0.5);
  border-radius: 10px;
}
</style>