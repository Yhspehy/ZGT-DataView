<script lang="ts">
export default {
  name: 'DecorationBox2'
}
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'

export interface DecorationBox2 {
  color?: string
  colNum?: number
  width?: number
  maxHeight?: number
  baseDuration?: number
}

const props = withDefaults(defineProps<DecorationBox2>(), {
  color: () => '#7acaec',
  colNum: 30,
  width: 0.3,
  maxHeight: 2,
  baseDuration: 1.5
})

const _width = (document.body.clientWidth / 100) * props.width

const svgWidth = computed(() => _width * props.colNum)
const svgHeight = ref((document.body.clientWidth / 100) * props.maxHeight)

function randomExtend(min: number, max: number) {
  return Math.random() * (max - min + 1) + min
}

const points = computed(() => {
  const { colNum, baseDuration } = props
  const _points = []
  for (let colIdx = 0; colIdx < colNum; colIdx++) {
    const h =
      Math.random() > 0.8
        ? randomExtend(0.7 * svgHeight.value, svgHeight.value)
        : randomExtend(0.2 * svgHeight.value, 0.5 * svgHeight.value)
    const minH = Math.min(Math.random(), Math.random()) * h
    _points.push({
      w: _width,
      y: svgHeight.value / 2,
      x: _width * colIdx,
      h,
      minH,
      dur: Math.random() + baseDuration
    })
  }

  return _points
})
</script>

<template>
  <svg :width="svgWidth" :height="svgHeight">
    <rect
      v-for="(point, i) in points"
      :key="i"
      :fill="color"
      :x="point.x"
      :y="point.y"
      :width="point.w"
      :height="point.h"
    >
      <animate
        attributeName="y"
        :values="`${point.y - point.minH / 2};${point.y - point.h / 2};${
          point.y - point.minH / 2
        }`"
        :dur="`${point.dur}s`"
        keyTimes="0;0.5;1"
        calcMode="spline"
        keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        :values="`${point.minH};${point.h};${point.minH}`"
        :dur="`${point.dur}s`"
        keyTimes="0;0.5;1"
        calcMode="spline"
        keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
        begin="0s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
</template>
