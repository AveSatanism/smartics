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
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.button.button--default, .button.button--orange1, .button.button--orange2, .button.button--orange3, .button.button--white:active{
  background: #ff6b00;
  color: white;
}
.button.button--orange1, .button.button--white {
  width: 212px;
  height: 40px;
}
.button.button--orange2 {
  width: 180px;
  height: 40px;
}
.button.button--orange3 {
  width: 159px;
  height: 33px;
}
.button.button--orange1:hover, .button.button--orange2:hover, .button.button--orange3:hover, .button.button--white{
  border: 1px solid #ff6b00;
  background: none;
  color: #ff6b00;
}
.button.button--orange1:active, .button.button--orange2:active, .button.button--orange3:active{
  background: #ff6b00;
  color: white;
}
.button.button--orange1:disabled, .button.button--orange2:disabled, .button.button--orange3:disabled {
  background: #DDECFF;
}
.button.button--profile {
  width: 163px;
  height: 31px;
  background: #135EF2;
  color: white;
}
.button.button--profile:active {
  background: #092C73;
}
</style>