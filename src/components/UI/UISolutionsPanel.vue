<template>
  <div>
    <div :class="{ active: isActive }" class="flex justify-center"></div>
    <button class="solutions_panel text_5 site_color_1" :class="{ active: isActive }" @click="toggleActive()">
      <slot></slot>
      <slot name="icon"></slot>
      <div class="solutions_arrow" :class="{ active: isActive }"><img src="@/assets/icon/solutions_arrow_icon.svg" width="38" height="38" alt="solutions_arrow_icon"></div>
    </button>
    <div v-if="isActive" class="overflow-hidden solutions_card_description flex items-center mt-[34px] pl-[48px] w-[811px] min-h-[260px] text_5 site_color_1 site_color_3_background">
      <div class="flex flex-col gap-y-[12px] my-[38.5px] text_button">
        <div v-if="description1" class="flex items-center gap-x-[12px] max-w-[480px]">
          <p class="solutions_card_point site_color_4">•</p>
          <slot name="description1"></slot>
        </div>
        <div v-if="description2" class="flex items-center gap-x-[12px] max-w-[480px]">
          <p class="solutions_card_point site_color_4">•</p>
          <slot name="description2"></slot>
        </div>
      </div>
      <div class="solutions_card_image_size">
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
      panelNumber: ''
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
        this.activeTab = null
      } else {
        this.activeTab = this.tabName
      }
    }
  },
};
</script>
<style>
.solutions_panel {
  padding: 12px 0;
  height: 248px;
  width: 243px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  background-color: var(--color-3);
}
.solutions_arrow {
  display: none;
}
.solutions_arrow.active {
  display: inline;
  position: relative;
  top: 160px;
  z-index: 3;
}
.solutions_panel p{
    z-index: 1;
    margin-top: 12px;
}
.solutions_panel .solutions_icon{
  height: 148px;
  width: 148px;
}
.solutions_panel.active {
  background-color: var(--color-6);
}
.solutions_panel.active{
  justify-content: center;
}
.solutions_panel.active p{
  position: absolute;
  font-size: 19px;
  line-height: 28px;
}
.solutions_panel:hover .solutions_icon, .solutions_panel.active .solutions_icon{
  position: absolute;
  height: 225px;
  width: 225px;
}

.solutions_card_description {
  position: absolute;
  z-index: 2;
  left:50%;
  transform:translateX(-50%);
  box-shadow: 0px 4px 4px var(--color-1-background);
  border-radius: 15px;
}
.solutions_card_description img {
  filter: brightness(2);
}
.solutions_card_point {
  font-size: 60px;
  padding-bottom: 10px;
  letter-spacing: 0;
  line-height: 0;
}
.solutions_card_image_size img {
  max-width: 500%;
  width: 258px !important;
  height: 258px !important;
  position: relative;
  right: -99px;
}
</style>