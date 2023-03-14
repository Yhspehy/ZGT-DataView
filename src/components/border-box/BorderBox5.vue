<script lang="ts">
const defaultColor = ['#8aaafb', '#1f33a2']

export default {
  name: 'BorborBox5'
}
</script>

<script setup lang="ts">
import { useGetContainerRect } from '../../hooks/resize'

const { containerRef: borderBox5Ref, width, height } = useGetContainerRect()
</script>

<template>
  <div class="borderBox5" ref="borderBox5Ref">
    <template v-if="width > 0 && height > 0">
      <svg class="svg-container" :width="width" :height="height">
        <path
          :stroke="defaultColor[0]"
          :d="`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${width - 20} 10 L ${width - 5} 25
          L ${width - 5} ${height - 5} L 20 ${height - 5}
          L 5 ${height - 20} L 5 20
        `"
        />

        <path
          fill="transparent"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="10, 5"
          :stroke="defaultColor[0]"
          :d="`M 16 9 L 61 9`"
        />

        <path
          fill="transparent"
          :stroke="defaultColor[1]"
          :d="`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`"
        />

        <path
          fill="transparent"
          :stroke="defaultColor[1]"
          :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${
            width - 30
          } ${height - 5}`"
        />
      </svg>
    </template>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.borderBox5 {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 30px;
  box-sizing: border-box;

  .svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    fill: transparent;
  }
}
</style>
