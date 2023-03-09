<script lang="ts">
const defaultColor = ['#1d48c4', '#d3e1f8']
const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

export default {
  name: 'BorborBox7'
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const borderBox7Ref = ref<HTMLInputElement | null>(null)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  width.value = borderBox7Ref.value!.clientWidth
  height.value = borderBox7Ref.value!.clientHeight
})
</script>

<template>
  <div
    class="borderBox7-ignore"
    ref="borderBox7Ref"
    :style="`box-shadow: inset 0 0 25px 3px ${defaultColor[0]}`"
  >
    <template v-if="width > 0 && height > 0">
      <svg class="svg-container" :width="width" :height="height">
        <polygon
          :points="`
        4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${
            width - 4
          }, ${height}
        4, ${height} 0, ${height - 4} 0, 4
      `"
        />
      </svg>

      <svg
        width="150px"
        height="150px"
        :key="item"
        v-for="item in border"
        :class="`${item} svg-container-corner`"
      >
        <polygon
          :fill="defaultColor[1]"
          points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
        />
      </svg>
    </template>

    <div class="border-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.borderBox7-ignore {
  position: relative;
  border-radius: 6px;

  .border-content {
    padding: 30px;
    box-sizing: border-box;
  }

  .svg-container {
    position: absolute;
    left: 0;
    top: 0;
    fill: transparent;
  }

  .left-top {
    position: absolute;
    left: 0;
    top: 0;
  }

  .right-top {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(180deg);
  }

  .left-bottom {
    position: absolute;
    left: 0;
    bottom: 0px;
    transform: rotateX(180deg);
  }

  .right-bottom {
    position: absolute;
    right: 0px;
    bottom: 0px;
    transform: rotateX(180deg) rotateY(180deg);
  }
}
</style>
