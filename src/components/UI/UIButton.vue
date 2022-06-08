<template>
  <button class="button" :class="buttonVariantClass">
    <div v-if="icon" class="mr-2 button-icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    icon() {
      return Object.keys(this.$slots).includes('icon')
    },
    buttonVariantClass() {
      return 'button--' + this.variant
    }
  }
};
</script>

<style>
.button {
  padding: 25px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.button.button--default {
  background: #ff6b00;
  color: white;
}
.button.button--accent {
  background: #135EF2;
  color: white;
}
.button.button--accent:hover {
  background: #092C73;
  color: white;
}
</style>