import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils/index'

/**
 * resize hook
 * @returns
 */
export function useResize() {
  const containerRef = ref<HTMLInputElement | null>(null)
  const screenWidth = ref(document.body.clientWidth)
  const screenHeight = ref(document.body.clientHeight)

  function onResize() {
    const currentWidth = document.body.clientWidth
    const currentHeight = document.body.clientHeight

    if (containerRef.value) {
      containerRef.value.style.transform = `scale(${Math.min(
        currentWidth / screenWidth.value,
        currentHeight / screenHeight.value
      )})`
    }
  }

  const debounceOnResize = debounce(100, onResize)

  onMounted(() => {
    onResize()
    window.addEventListener('resize', debounceOnResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', debounceOnResize)
  })

  return { containerRef, screenWidth, screenHeight }
}
