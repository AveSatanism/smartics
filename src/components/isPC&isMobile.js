import { computed, unref } from 'vue'
import { useWindowSize } from '@vueuse/core'

export const useIsPC = () => {
  const { width } = useWindowSize()
  return computed(() => unref(width) >= 1024)
}
  
export const useIsMobile = () => {
  const { width } = useWindowSize()
  return computed(() => unref(width) < 1024)
}