<script lang="ts">
let id = 1
export default {
  name: 'PercentPond'
}
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useGetContainerRect } from '../../hooks/resize'

export interface PercentPondProps {
  /**
   * 百分比值
   */
  value?: number
  /**
   * 文本内容，不传则默认展示`${value}%`
   */
  text?: string
  /**
   * 文本内容字体颜色
   * @default #fff
   */
  textColor?: string
  /**
   * border宽度
   * @default 3
   */
  borderWidth?: number
  /**
   * border间隙
   * @default 3
   */
  borderGap?: number
  /**
   * border弧度
   * @default 5
   */
  borderRadius?: number
  /**
   * 线条间隙，可个性化定制
   * @default [5,1]
   */
  lineDash?: number[]
  /**
   * 渐变颜色，从左到右
   * @default ['#3DE7C9', '#00BAFF']
   */
  colors?: string[]
}

const props = withDefaults(defineProps<PercentPondProps>(), {
  value: 0,
  text: '',
  textColor: '#fff',
  borderWidth: 3,
  borderGap: 3,
  borderRadius: 5,

  lineDash: () => [5, 1],
  colors: () => ['#3DE7C9', '#00BAFF']
})

const { containerRef, width, height } = useGetContainerRect()
const gradientId = ref(`percent-pond-gradientId-${id}`)
id++

const rectWidth = computed(() => {
  return width.value - props.borderWidth
})
const rectHeight = computed(() => {
  return height.value - props.borderWidth
})

const points = computed(() => {
  const halfHeight = height.value / 2
  const polylineLength =
    ((width.value - (props.borderWidth + props.borderGap) * 2) / 100) *
    props.value

  return `
        ${props.borderWidth + props.borderGap}, ${halfHeight}
        ${props.borderWidth + props.borderGap + polylineLength}, ${
    halfHeight + 0.001
  }
      `
})

const polylineWidth = computed(() => {
  return height.value - (props.borderWidth + props.borderGap) * 2
})

const linearGradient = computed(() => {
  const colorNum = props.colors.length
  const colorOffsetGap = 100 / (colorNum - 1)
  return props.colors.map((c, i) => [colorOffsetGap * i + '', c + ''])
})

const details = computed(() => {
  return props.text || props.value + '%'
})
</script>

<template>
  <div class="percent-pond" ref="containerRef">
    <svg class="svg-container">
      <defs>
        <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            v-for="lc in linearGradient"
            :key="lc[0]"
            :offset="`${lc[0]}%`"
            :stop-color="lc[1]"
          />
        </linearGradient>
      </defs>
      <rect
        :x="borderWidth / 2"
        :y="borderWidth / 2"
        :rx="borderRadius"
        :ry="borderRadius"
        fill="transparent"
        :stroke-width="borderWidth"
        :stroke="`url(#${gradientId})`"
        :width="rectWidth > 0 ? rectWidth : 0"
        :height="rectHeight > 0 ? rectHeight : 0"
      />
      <polyline
        :stroke-width="polylineWidth"
        :stroke-dasharray="lineDash.join(',')"
        :stroke="`url(#${gradientId})`"
        :points="points"
        class="polyline"
      />
      <text
        :stroke="textColor"
        :fill="textColor"
        :x="width / 2"
        :y="height / 2"
        class="text"
      >
        {{ details }}
      </text>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.svg-container {
  width: 100%;
  height: 100%;
}

.polyline {
  transition: all 0.3s;
}

.text {
  font-size: 25px;
  font-weight: bold;
  text-anchor: middle;
  dominant-baseline: middle;
}
</style>
