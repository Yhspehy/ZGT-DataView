<script lang="ts">
export default {
  name: 'ConicalChart'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useGetContainerRect } from '../../hooks/resize'

export interface ConicalChartProps {
  /**
   * 图表数据
   */
  data: Array<{
    value: number
    name: string
    img: string
  }>
  /**
   * 字体大小
   * @default 12
   */
  fontSize?: number
  /**
   * 文本颜色
   * @default #fff
   */
  textColor?: string
  /**
   * 图片长度
   * @default 30
   */
  imgSideLength?: number
  /**
   * 图表颜色
   * @default 'rgba(0, 194, 255, 0.4)'
   */
  columnColor?: string
  /**
   * 是否展示value
   * @default false
   */
  showValue?: boolean
  /**
   * 是否自动排序
   * @default true
   */
  sort: true
}

const props = withDefaults(defineProps<ConicalChartProps>(), {
  fontSize: 12,
  imgSideLength: 30,
  textColor: '#fff',
  columnColor: 'rgba(0, 194, 255, 0.4)',
  showValue: false,
  sort: true
})

const { containerRef, width, height } = useGetContainerRect()

const chartData = computed(() => {
  let max = 0

  props.data.forEach((e) => {
    if (e.value) {
      if (e.value > max) max = e.value
    } else {
      if (e.name) console.warn(`There is no value, name: ${e.name}`)
    }
  })

  const list = props.data.map((e) => ({
    ...e,
    percent: e.value / max
  }))

  return props.sort ? list.sort((a, b) => b.value - a.value) : list
})

const column = computed(() => {
  if (width.value === 0 || height.value === 0) {
    return []
  }
  const itemNum = chartData.value.length
  const gap = width.value / (itemNum + 1)

  const useAbleHeight = height.value - props.imgSideLength - props.fontSize - 5
  const svgBottom = height.value - props.fontSize - 5

  return chartData.value.map((item, i) => {
    const { percent } = item

    const middleXPos = gap * (i + 1)
    const leftXPos = gap * i
    const rightXpos = gap * (i + 2)

    const middleYPos = svgBottom - useAbleHeight * percent
    const controlYPos = useAbleHeight * percent * 0.6 + middleYPos

    const d = `
          M${leftXPos}, ${svgBottom}
          Q${middleXPos}, ${controlYPos} ${middleXPos},${middleYPos}
          M${middleXPos},${middleYPos}
          Q${middleXPos}, ${controlYPos} ${rightXpos},${svgBottom}
          L${leftXPos}, ${svgBottom}
          Z
        `

    const textY = (svgBottom + middleYPos) / 2 + props.fontSize / 2

    return {
      ...item,
      d,
      x: middleXPos,
      y: middleYPos,
      textY
    }
  })
})
</script>

<template>
  <div class="percent-pond" ref="containerRef">
    <svg :width="width" :height="height">
      <g v-for="(item, i) in column" :key="i">
        <path :d="item.d" :fill="columnColor" />
        <text
          :style="`fontSize:${fontSize}px`"
          :fill="textColor"
          :x="item.x"
          :y="height - 4"
        >
          {{ item.name }}
        </text>
        <image
          v-if="item.img"
          :xlink:href="item.img"
          :width="imgSideLength"
          :height="imgSideLength"
          :x="item.x - imgSideLength / 2"
          :y="item.y - imgSideLength"
        />
        <text
          v-if="showValue"
          :style="`fontSize:${fontSize}px`"
          :fill="textColor"
          :x="item.x"
          :y="item.textY"
          class="text"
        >
          {{ item.value }}
        </text>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.text {
  text-anchor: middle;
}
</style>
