<template>
  <div class="flex justify-center">
    <div class="accordion_border_mobile flex flex-col justify-center w-[314px] min-h-[86px]">
      <button class="flex items-center py-[16px] px-[24px]" :class="{ active: isActive }" @click="toggleOpen()">
        <div class="transition-transform" :class="{ 'rotate-180': isActive, accordion_filter: isActive }">
          <img class="!h-[14px] max-w-[23px]" src="@/assets/icon/accordion_arrow_open_icon.svg" width="23" height="14" alt="accordion_arrow_open_icon">
        </div>
        <div class="text-h2">
          <slot name="number"></slot>
        </div>
        <div class="text_button w-[188px]">
          <slot name="title"></slot>
        </div>
        <div>
          <slot name="icon"></slot>
        </div>
      </button>
      <div v-if="isActive"
        class="site_color_3_background text_6 !normal-case text-left py-[24px] px-[20px] mx-[21.5px] mb-[16px] rounded-[10px]">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeTab: ''
    }
  },
  computed: {
    isActive() {
      return this.activeTab === this.tabName
    }
  },
  methods: {
    toggleOpen() {
      if (this.activeTab === this.tabName) {
        this.activeTab = ''
      } else {
        this.activeTab = this.tabName
      }
    }
  },
};
</script>
<style>
.accordion_border_mobile {
  background: var(--color-7);
  border: 1px solid rgba(221, 236, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(221, 236, 255, 0.5);
  border-radius: 10px;
}
.accordion_filter {
  filter: grayscale(1);
}
</style>