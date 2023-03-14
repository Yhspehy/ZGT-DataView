<script lang="ts">
export default {
  name: 'DecorationBox1'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

export interface DecorationBox1 {
  color?: [string, string]
  rowNum?: number
  colNum?: number
  gap?: number
  width?: number
}

const props = withDefaults(defineProps<DecorationBox1>(), {
  color: () => ['#7acaec', 'transparent'],
  rowNum: 2,
  colNum: 20,
  gap: 0.5,
  width: 0.3
})

const _width = (document.body.clientWidth / 100) * props.width

const svgWidth = computed(
  () => _width * props.colNum + props.gap * _width * (props.colNum + 1)
)

const svgHeight = computed(
  () => _width * props.rowNum + props.gap * _width * (props.rowNum + 1)
)

const points = computed(() => {
  const { rowNum, colNum, gap } = props
  const _points = []
  for (let rowIdx = 0; rowIdx < rowNum; rowIdx++) {
    for (let colIdx = 0; colIdx < colNum; colIdx++) {
      _points.push({
        w: _width,
        y: gap * _width * (rowIdx + 1) + _width * rowIdx,
        x: gap * _width * (colIdx + 1) + _width * colIdx
      })
    }
  }

  return _points
})
</script>

<template>
  <svg :width="svgWidth" :height="svgHeight">
    <rect
      v-for="(point, i) in points"
      :key="i"
      :fill="color[0]"
      :x="point.x"
      :y="point.y"
      :width="point.w"
      :height="point.w"
    >
      <animate
        v-if="Math.random() > 0.6"
        attributeName="fill"
        :values="`${color.join(';')}`"
        :dur="Math.random() + 1 + 's'"
        :begin="Math.random() * 2"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
</template>
