<script lang="ts">
const defaultColor = ['#fff', 'rgba(255, 255, 255, 0.6)']
export default {
  name: 'BorborBox9'
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const borderBox9Ref = ref<HTMLInputElement | null>(null)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  const { clientWidth, clientHeight } = borderBox9Ref.value!
  width.value = clientWidth
  height.value = clientHeight
})
</script>

<template>
  <div class="borderBox9" ref="borderBox9Ref">
    <template v-if="width > 0 && height > 0">
      <svg class="svg-container" :width="width" :height="height">
        <polygon
          fill="transparent"
          :points="`
        7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}
      `"
        />

        <polyline
          :stroke="defaultColor[0]"
          :points="`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${
            height - 2
          } 2, 2`"
        />
        <polyline
          :stroke="defaultColor[1]"
          :points="`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${
            height - 6
          } 6, 6`"
        />
        <circle :fill="defaultColor[0]" cx="11" cy="11" r="1" />
        <circle :fill="defaultColor[0]" :cx="width - 11" cy="11" r="1" />
        <circle
          :fill="defaultColor[0]"
          :cx="width - 11"
          :cy="height - 11"
          r="1"
        />
        <circle :fill="defaultColor[0]" cx="11" :cy="height - 11" r="1" />
      </svg>
    </template>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.borderBox9 {
  height: 100%;
  width: 100%;
  position: relative;

  .svg-container {
    position: absolute;
    left: 0;
    top: 0;
    fill: transparent;
  }
}
</style>
