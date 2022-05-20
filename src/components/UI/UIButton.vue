<template>
  <button class="button button--default">
      <slot></slot>
    </button>
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
  },
};
</script>

<style>
.button {
  padding: 25px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.button.button--default {
  background: #ff6b00;
  color: white;
}
</style>