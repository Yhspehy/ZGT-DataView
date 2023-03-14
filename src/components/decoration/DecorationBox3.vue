<script lang="ts">
let id = 1
export default {
  name: 'DecorationBox3'
}
</script>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGetContainerRect } from '../../hooks/resize'

import { fade } from '../../utils/color'

export interface DecorationBox3 {
  /**
   * 颜色,从内到外
   */
  color?: [string, string]
  /**
   * 扫描动画时长(秒)
   * @default 3
   */
  haloDuration?: number
  /**
   * 光晕动画时长(秒)
   * @default 2
   */
  scanDuration?: number
}

const props = withDefaults(defineProps<DecorationBox3>(), {
  color: () => ['#2783ce', '#2cf7fe'],
  haloDuration: 2,
  scanDuration: 3
})

const { containerRef: decorationBox3, width, height } = useGetContainerRect()

const gId = ref(`decoration-3-g-${id}`)
const gradientId = ref(`decoration-3-gradient-${id}`)
id++

const pathD = ref<any[]>([])
const pathColor = ref<any[]>([])
const circleR = ref<any[]>([])
const splitLinePoints = ref<any[]>([])
const arcD = ref<string[]>([])

const segment = 30
const sectorAngle = Math.PI / 3
const ringNum = 3
const ringWidth = 1

const x = computed(() => width.value / 2)
const y = computed(() => height.value / 2)

function getCircleRadianPoint(
  x: number,
  y: number,
  radius: number,
  radian: number
) {
  return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius]
}

// 添加扫描的线
function calcPathD() {
  const startAngle = -Math.PI / 2
  const angleGap = sectorAngle / segment
  const r = width.value / 4
  let lastEndPoints: any[] = getCircleRadianPoint(
    x.value,
    y.value,
    r,
    startAngle
  )

  pathD.value = new Array(segment).fill('').map((_, i) => {
    const endPoints = getCircleRadianPoint(
      x.value,
      y.value,
      r,
      startAngle - (i + 1) * angleGap
    ).map((_) => _.toFixed(5))
    const d = `M${lastEndPoints.join(',')} A${r}, ${r} 0 0 0 ${endPoints.join(
      ','
    )}`
    lastEndPoints = endPoints

    return d
  })
}

// 添加扫描的线的颜色
function calcPathColor() {
  const colorGap = 100 / (segment - 1)

  pathColor.value = new Array(segment)
    .fill(props.color[0])
    .map((_, i) => fade(props.color[0], 100 - i * colorGap))
}

// 添加从内到外的分栏
function calcCircleR() {
  const radiusGap = (width.value / 2 - ringWidth / 2) / ringNum

  circleR.value = new Array(ringNum).fill(0).map((_, i) => radiusGap * (i + 1))
}

// 添加顺时针的分栏
function calcSplitLinePoints() {
  const angleGap = Math.PI / 6
  const r = width.value / 2

  splitLinePoints.value = new Array(6).fill('').map((_, i) => {
    const startAngle = angleGap * (i + 1)
    const endAngle = startAngle + Math.PI
    const startPoint = getCircleRadianPoint(x.value, y.value, r, startAngle)
    const endPoint = getCircleRadianPoint(x.value, y.value, r, endAngle)

    return `${startPoint.join(',')} ${endPoint.join(',')}`
  })
}

// 添加外层4个角的border
function calcArcD() {
  const angleGap = Math.PI / 6
  const r = width.value / 2 - 1

  arcD.value = new Array(4).fill('').map((_, i) => {
    const startAngle = angleGap * (3 * i + 1)
    const endAngle = startAngle + angleGap
    const startPoint = getCircleRadianPoint(x.value, y.value, r, startAngle)
    const endPoint = getCircleRadianPoint(x.value, y.value, r, endAngle)

    return `M${startPoint.join(',')} A${x.value}, ${
      y.value
    } 0 0 1 ${endPoint.join(',')}`
  })
}

onMounted(() => {
  calcPathD()
  calcPathColor()
  calcCircleR()
  calcSplitLinePoints()
  calcArcD()
})
</script>

<template>
  <svg ref="decorationBox3" :width="width" :height="height">
    <defs>
      <g :id="gId">
        <path
          :stroke="pathColor[i]"
          :stroke-width="width / 2"
          fill="transparent"
          v-for="(d, i) in pathD"
          :key="d"
          :d="d"
        />
      </g>

      <radialGradient :id="gradientId" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="transparent" stop-opacity="1" />
        <stop
          offset="100%"
          :stop-color="fade(color[1] || color[1], 30)"
          stop-opacity="1"
        />
      </radialGradient>
    </defs>

    <circle
      v-for="r in circleR"
      :key="r"
      :r="r"
      :cx="x"
      :cy="y"
      :stroke="color[1]"
      :stroke-width="0.5"
      fill="transparent"
    />

    <circle
      r="1"
      :cx="x"
      :cy="y"
      stroke="transparent"
      :fill="`url(#${gradientId})`"
    >
      <animate
        attributeName="r"
        :values="`1;${width / 2}`"
        :dur="`${haloDuration}s`"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="1;0"
        :dur="`${haloDuration}s`"
        repeatCount="indefinite"
      />
    </circle>

    <circle r="2" :cx="x" :cy="y" :fill="color[1]" />

    <g>
      <polyline
        v-for="p in splitLinePoints"
        :key="p"
        :points="p"
        :stroke="color[1]"
        :stroke-width="0.5"
        opacity="0.5"
      />
    </g>

    <path
      v-for="d in arcD"
      :key="d"
      :d="d"
      :stroke="color[1]"
      stroke-width="2"
      fill="transparent"
    />

    <use :xlink:href="`#${gId}`">
      <animateTransform
        attributeName="transform"
        type="rotate"
        :values="`0, ${x} ${y};360, ${x} ${y}`"
        :dur="`${scanDuration}s`"
        repeatCount="indefinite"
      />
    </use>
  </svg>
</template>
