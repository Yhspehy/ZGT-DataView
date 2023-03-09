<script lang="ts">
let box6Id = 0
const defaultColor = ['#2e6099', '#7ce7fd']

export default {
  name: 'borderBox6'
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fade } from '../../utils/color'

const filterId = ref(`border-box-4-filterId-${box6Id}`)
box6Id++

const borderBox6Ref = ref<HTMLInputElement | null>(null)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  width.value = borderBox6Ref.value!.clientWidth
  height.value = borderBox6Ref.value!.clientHeight
})
</script>

<template>
  <div class="borderBox6" ref="borderBox6Ref">
    <template v-if="width > 0 && height > 0">
      <svg class="svg-container" :width="width" :height="height">
        <defs>
          <filter :id="filterId" height="150%" width="150%" x="-25%" y="-25%">
            <feMorphology
              operator="dilate"
              radius="1"
              in="SourceAlpha"
              result="thicken"
            />
            <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
            <feFlood
              :flood-color="fade(defaultColor[1] || defaultColor[1], 70)"
              result="glowColor"
            >
              <animate
                attributeName="flood-color"
                :values="`
                ${fade(defaultColor[1] || defaultColor[1], 70)};
                ${fade(defaultColor[1] || defaultColor[1], 30)};
                ${fade(defaultColor[1] || defaultColor[1], 70)};
              `"
                dur="3s"
                begin="0s"
                repeatCount="indefinite"
              />
            </feFlood>
            <feComposite
              in="glowColor"
              in2="blurred"
              operator="in"
              result="softGlowColored"
            />
            <feMerge>
              <feMergeNode in="softGlowColored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          v-if="width && height"
          stroke-width="2"
          :stroke="defaultColor[0]"
          :d="`
          M15 5 L ${width - 15} 5 Q ${width - 5} 5, ${width - 5} 15
          L ${width - 5} ${height - 15} Q ${width - 5} ${height - 5}, ${
            width - 15
          } ${height - 5}
          L 15, ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 15
          Q 5 5 15 5
        `"
        />

        <path
          stroke-width="2"
          fill="transparent"
          stroke-linecap="round"
          :filter="`url(#${filterId})`"
          :stroke="defaultColor[1]"
          :d="`M 20 5 L 15 5 Q 5 5 5 15 L 5 20`"
        />

        <path
          stroke-width="2"
          fill="transparent"
          stroke-linecap="round"
          :filter="`url(#${filterId})`"
          :stroke="defaultColor[1]"
          :d="`M ${width - 20} 5 L ${width - 15} 5 Q ${width - 5} 5 ${
            width - 5
          } 15 L ${width - 5} 20`"
        />

        <path
          stroke-width="2"
          fill="transparent"
          stroke-linecap="round"
          :filter="`url(#${filterId})`"
          :stroke="defaultColor[1]"
          :d="`
          M ${width - 20} ${height - 5} L ${width - 15} ${height - 5}
          Q ${width - 5} ${height - 5} ${width - 5} ${height - 15}
          L ${width - 5} ${height - 20}
        `"
        />

        <path
          stroke-width="2"
          fill="transparent"
          stroke-linecap="round"
          :filter="`url(#${filterId})`"
          :stroke="defaultColor[1]"
          :d="`
          M 20 ${height - 5} L 15 ${height - 5}
          Q 5 ${height - 5} 5 ${height - 15}
          L 5 ${height - 20}
        `"
        />
      </svg>
    </template>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.borderBox6 {
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
