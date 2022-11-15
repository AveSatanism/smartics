<template>
  <div class="flex justify-center">
    <div class="accordion_border_mobile flex flex-col justify-center w-[314px]">
      <button class="flex items-center py-[16px] px-[24px]" :class="[arrowVariantClass, { active: isActive }]" v-on="$listeners" @click="toggleOpen()">
        <div class="accordion_arrow accordion_arrow_orange transition-transform background_arrow_mobile" :class="{ 'rotate-180': isActive, accordion_filter: isActive }">
          <img class="!h-[14px] max-w-[23px]" src="@/assets/icon/accordion_arrow_open_icon.svg" width="23" height="14" alt="accordion_arrow_open_icon">
        </div>
        <div class="accordion_arrow accordion_arrow_blue transition-transform background_arrow_mobile" :class="{ 'rotate-180': isActive, accordion_filter: isActive }">
          <img class="!h-[14px] max-w-[23px]" src="@/assets/icon/accordion_arrow_open_blue_icon.svg" width="23" height="14" alt="accordion_arrow_open_icon">
        </div>
        <div class="margin_number text_3">
          <slot name="number"></slot>
        </div>
        <div class="text_button !tracking-normal w-[188px]">
          <slot name="title"></slot>
        </div>
        <div>
          <slot name="icon"></slot>
        </div>
      </button>
      <div v-if="isActive"
        class="description_background site_color_3_background text_6 !normal-case !tracking-normal text-left py-[24px] px-[20px] mx-[21.5px] mb-[16px] rounded-[10px]">
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
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      activeTab: ''
    }
  },
  computed: {
    isActive() {
      return this.activeTab === this.tabName
    },
    arrowVariantClass() {
      return 'arrow--' + this.variant
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
.accordion_arrow {
  display: none;
}
.arrow--orange .accordion_arrow_orange, .arrow--blue .accordion_arrow_blue{
  display: inline !important;
}
.accordion_border_mobile {
  background: var(--color-7);
  border: 1px solid rgba(221, 236, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(221, 236, 255, 0.5);
  border-radius: 10px;
}
.accordion_filter {
  filter: grayscale(1);
}
.margin_number p{
  margin: 0 16px;
}
.background_arrow_mobile {
  background-color: rgba(221, 236, 255, 0) !important;
}
</style>