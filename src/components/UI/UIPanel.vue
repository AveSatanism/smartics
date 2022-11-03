<template>
  <div class="select_card h-[200px]">
    <div class="flex justify-center select_card_visibility" :class="{ active: isActive }"><p class="select_card_point site_color_1">•</p></div>
    <button class="panel mb-[20px] text_8 site_color_1" :class="{ active: isActive }" @click="toggleActive()">
      <slot></slot>
      <slot name="icon"></slot>
    </button>
    <div v-if="isActive" class="overflow-hidden card_description flex items-center w-[1160px] py-[36px] pl-[125px] text_5 site_color_1 site_color_3_background">
      <div class="flex flex-col gap-y-[12px]">
        <div v-if="description1" class="flex items-center gap-x-[24px] w-[841px]">
          <p class="card_point site_color_4">•</p>
          <slot name="description1"></slot>
        </div>
        <div v-if="description2" class="flex items-center gap-x-[24px] w-[841px]">
          <p class="card_point site_color_4">•</p>
          <slot name="description2"></slot>
        </div>
      </div>
      <div class="card_image_size">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    outlined: {
      default: false,
    },
    disabled: {
      default: false,
    },
    value: {
      type: String,
      required: true
    },
    tabName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      cardNumber: ''
    }
  },
  computed: {
    description1() {
      return Object.keys(this.$slots).includes('description1')
    },
    description2() {
      return Object.keys(this.$slots).includes('description2')
    },
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
    toggleActive() {
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
.panel {
  padding: 13px 0;
  height: 180px;
  width: 137px;
  transition: width 0.3s ease-in, font-size 0.3s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  background-color: var(--color-7);
}
.panel:hover, .panel.active {
  font-size: 14px;
  letter-spacing: 0.03em;
  width: 176.27px;
  background-color: var(--color-3);
}
.panel img {
  height: 90px;
  width: 93px;
}
.panel:hover img, .panel.active img {
  filter: brightness(2);
}
.card_description {
  position: absolute;
  left:50%;
  transform:translateX(-50%);
  box-shadow: 0px 4px 4px var(--color-1-background);
  border-radius: 15px;
}
.card_description img {
  filter: brightness(2);
}
.card_point {
  font-size: 60px;
  padding-bottom: 10px;
  letter-spacing: 0;
  line-height: 0;
}
.card_image_size img {
  width: 194px !important;
  height: 193px;
  position: relative;
  right: -36px;
}
.select_card_point {
  position: relative;
  font-size: 100px;
  padding-right: 31px;
  letter-spacing: 0;
  line-height: 0;
  height: 17px;
  width: 17px;
  top: -20px;
}
.select_card_visibility:not(.active) {
  visibility: hidden;
}
.select_card:hover .select_card_visibility{
  visibility: visible !important;
}
</style>
