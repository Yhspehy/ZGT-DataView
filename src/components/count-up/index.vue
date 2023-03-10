<script lang="ts">
export type { CountUp as ICountUp, CountUpOptions } from 'countup.js'
export default {
  name: 'CountUp'
}
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

export interface CountUpProps {
  /**
   * 结束数值
   */
  endVal: number | string
  /**
   * 开始数值
   * @default 0
   */
  startVal?: number | string
  /**
   * 动画时长，单位 s
   * @default 2.5
   */
  duration?: number | string
  /**
   * 小数点位数
   * @default 0
   */
  decimalPlaces?: number
  /**
   * 是否自动计数
   * @default true
   */
  autoplay?: boolean
  /**
   * 循环次数，有限次数 / 无限循环
   * @default false
   */
  loop?: boolean | number | string
  /**
   * 循环, 延时，单位 s
   * @default 0
   */
  delay?: number
  /**
   * countup 配置项
   * @default undefined
   */
  options?: CountUpOptions
}

const props = withDefaults(defineProps<CountUpProps>(), {
  startVal: 0,
  duration: 2.5,
  decimalPlaces: 0,
  autoplay: true,
  loop: false,
  delay: 0,
  options: undefined
})
const emits = defineEmits<{
  (event: 'init', countup: CountUp): void
  (event: 'finished'): void
}>()

let elRef = ref<HTMLElement>()
let countUp = ref<CountUp>()

// 初始化
const initCountUp = () => {
  if (!elRef.value) return
  const startVal = Number(props.startVal)
  const endVal = Number(props.endVal)
  const duration = Number(props.duration)
  countUp.value = new CountUp(elRef.value, endVal, {
    startVal,
    duration,
    decimalPlaces: props.decimalPlaces,
    ...props.options
  })
  if (countUp.value.error) {
    console.error(countUp.value.error)
    return
  }
  emits('init', countUp.value)
}
const startAnim = (cb?: () => void) => {
  countUp.value?.start(cb)
}

watch(
  () => props.endVal,
  (value) => {
    if (props.autoplay) {
      countUp.value?.update(value)
    }
  }
)

// 循环
const finished = ref(false)
let loopCount = 0
const loopAnim = () => {
  loopCount++
  startAnim(() => {
    const isTruely = typeof props.loop === 'boolean' && props.loop
    if (isTruely || props.loop > loopCount) {
      delay(() => {
        countUp.value?.reset()
        loopAnim()
      }, props.delay)
    } else {
      finished.value = true
    }
  })
}

let dalayRafId: number
// 延迟执行
const delay = (cb: () => unknown, seconds = 1) => {
  let startTime: number
  function count(timestamp: number) {
    if (!startTime) startTime = timestamp
    const diff = timestamp - startTime
    if (diff < seconds * 1000) {
      dalayRafId = requestAnimationFrame(count)
    } else {
      cb()
    }
  }
  dalayRafId = requestAnimationFrame(count)
}

watch(finished, (flag) => {
  if (flag) {
    emits('finished')
  }
})

onMounted(() => {
  initCountUp()
  if (props.autoplay) {
    loopAnim()
  }
})

onUnmounted(() => {
  cancelAnimationFrame(dalayRafId)
  countUp.value?.reset()
})

const restart = () => {
  initCountUp()
  startAnim()
}
defineExpose({
  init: initCountUp,
  restart
})
</script>

<template>
  <div class="countup-wrap">
    <slot name="prefix"></slot>
    <span ref="elRef"> </span>
    <slot name="suffix"></slot>
  </div>
</template>
