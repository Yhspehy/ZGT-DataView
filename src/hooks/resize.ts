import { ref, type Ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash-es'

/**
 * resize hook
 * @returns
 */
export function useResize(): {
  containerRef: Ref<HTMLElement | null>
  screenWidth: Ref<number>
  screenHeight: Ref<number>
} {
  const containerRef = ref<HTMLElement | null>(null)
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

  const debounceOnResize = debounce(onResize, 100)

  onMounted(() => {
    onResize()
    window.addEventListener('resize', debounceOnResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', debounceOnResize)
  })

  return {
    //@ts-ignore
    containerRef,
    screenWidth,
    screenHeight
  }
}
