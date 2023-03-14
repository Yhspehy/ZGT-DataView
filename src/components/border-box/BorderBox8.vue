<script lang="ts">
const defaultColor = ['#235fa7', '#4fd2dd']
let box8Id = 1
export default {
  name: 'BorborBox8'
}
</script>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGetContainerRect } from '../../hooks/resize'

export interface BorderBox8Props {
  reverse?: boolean
  duration?: number
}

const props = withDefaults(defineProps<BorderBox8Props>(), {
  reverse: false,
  duration: 3
})

const { containerRef: borderBox8Ref, width, height } = useGetContainerRect()

const length = ref(0)

const path = ref(`border-box-8-path-${box8Id}`)
const gradient = ref(`border-box-8-gradient-${box8Id}`)
const mask = ref(`border-box-8-mask-${box8Id}`)
box8Id++

const pathD = computed(() => {
  if (props.reverse)
    return `M 2.5, 2.5 L 2.5, ${height.value - 2.5} L ${width.value - 2.5}, ${
      height.value - 2.5
    } L ${width.value - 2.5}, 2.5 L 2.5, 2.5`

  return `M2.5, 2.5 L${width.value - 2.5}, 2.5 L${width.value - 2.5}, ${
    height.value - 2.5
  } L2.5, ${height.value - 2.5} L2.5, 2.5`
})

onMounted(() => {
  length.value = (width.value + height.value - 5) * 2
})
</script>

<template>
  <div class="borderBox8" ref="borderBox8Ref">
    <template v-if="width > 0 && height > 0">
      <svg class="svg-container" :width="width" :height="height">
        <defs>
          <path :id="path" :d="pathD" fill="transparent" />
          <radialGradient :id="gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff" stop-opacity="1" />
            <stop offset="100%" stop-color="#fff" stop-opacity="0" />
          </radialGradient>

          <mask :id="mask">
            <circle cx="0" cy="0" r="150" :fill="`url(#${gradient})`">
              <animateMotion
                :dur="`${duration}s`"
                :path="pathD"
                rotate="auto"
                repeatCount="indefinite"
              />
            </circle>
          </mask>
        </defs>

        <polygon
          fill="transparent"
          :points="`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${
            height - 5
          }`"
        />

        <use
          :stroke="defaultColor[0]"
          stroke-width="1"
          :xlink:href="`#${path}`"
        />

        <use
          :stroke="defaultColor[1]"
          stroke-width="3"
          :xlink:href="`#${path}`"
          :mask="`url(#${mask})`"
        >
          <animate
            attributeName="stroke-dasharray"
            :from="`0, ${length}`"
            :to="`${length}, 0`"
            :dur="`${duration}s`"
            repeatCount="indefinite"
          />
        </use>
      </svg>
    </template>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.borderBox8 {
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
