<template>
  <button class="panel text_8 site_color_1">
    <slot></slot>
    <slot name="icon" width="93" height="90"></slot>
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
.panel {
  padding: 13px 0;
  height: 180px;
  width: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 99, 210, 0.3);
  border-radius: 15px;
  background-color: white;
}
.panel img {
  height: 90px;
  width: 93px;
}
</style>
