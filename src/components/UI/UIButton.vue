<template>
  <button class="button text_button" :class="buttonVariantClass" v-on="$listeners">
    <div v-if="icon" class="mr-2">
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
}
.button.button--orange1, .button.button--white {
  width: 212px;
  height: 40px;
}
.button.button--orange1:hover, .button.button--orange2:hover, .button.button--orange3:hover, .button.button--white{
  border: 1px solid var(--color-4);
  background-color: rgba(0, 0, 0, 0);
  color: var(--color-4);
}
.button.button--default, .button.button--orange1, .button.button--orange2, .button.button--orange3, .button.button--white:active{
  background: var(--color-4);
  color: var(--color-7);
}
.button.button--orange2 {
  width: 180px;
  height: 40px;
}
.button.button--orange3 {
  width: 159px;
  height: 33px;
}
.button.button--letsGo {
  width: 150px;
  height: 31px;
  background: var(--color-1);
  color: var(--color-7);
}
.button.button--personalOffer {
  width: 426px;
  height: 40px;
  background: var(--color-1);
  color: var(--color-7);
}
.button.button--personalOffer:hover{
  border: 1px solid var(--color-4);
  background: var(--color-7);
  color: var(--color-4);
}
.button.button--orange1:active, .button.button--orange2:active, .button.button--orange3:active, .button.button--submit:active, .button.button--personalOffer:active, .button.button--letsGo:active{
  background: var(--color-4);
  color: var(--color-7);
}
.button.button--orange1:disabled, .button.button--orange2:disabled, .button.button--orange3:disabled {
  background: var(--color-3);
}
.button.button--profile {
  width: 163px;
  height: 31px;
  background: var(--color-2);
  color: var(--color-7);
}
.button.button--profile:active {
  background: var(--color-1);
}
.button.button--submit {
  font-size: 11px !important;
  letter-spacing: 0.05em !important;
  width: 127px;
  height: 24px;
  border-radius: 5px !important;
  background: var(--color-1);
  color: var(--color-7);
}
</style>