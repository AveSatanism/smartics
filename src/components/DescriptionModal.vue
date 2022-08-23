<template>
  <dialog open class="communication_form_container fixed top-0 left-0 z-10 w-full h-full flex items-center justify-center">
    <div class="w-[295px] flex flex-col items-end gap-y-[6.5px]">
    <button name="cancel" @click="$emit('resolve', 'close')" class="exit_button w-[20px] h-[20px] flex justify-center items-center site_color_1_background"><img src="@/assets/icon/exit_icon.svg"></button>
    <div class="flex flex-col gap-y-[11px] p-[20px] items-center w-[295px] site_color_1 site_color_7_background rounded-[10px]">
      <p class="text_button">{{ texts.header }}</p> 
      <p class="text_7">{{ texts.description }}</p>
    </div>
    </div>
  </dialog>  
</template>
<script>
import { defu } from 'defu'

const defaults = { header: "Описание не написано!", description: "Ненаписанное описание" }

export default {
  props: {
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    texts() {
      return defu(this.params, defaults)
    }
  }
}
</script>
<style>
.communication_form_container {
  background-color: rgb(196, 196, 196, 0.5);
}
.exit_button {
  position: relative;
  margin: 0;
  border-radius: 50%;
}
</style>