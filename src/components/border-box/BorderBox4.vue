<script lang="ts">
let box4Id = 0
const defaultColor = ['#8aaafb', '#1f33a2']

export default {
  name: 'BorborBox4'
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

export interface BorderBox4Props {
  title?: string
  titleWidth?: number
}

withDefaults(defineProps<BorderBox4Props>(), {
  title: '',
  titleWidth: 250
})

const filterId = ref(`border-box-4-filterId-${box4Id}`)
box4Id++

const borderBox4Ref = ref<HTMLInputElement | null>(null)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  width.value = borderBox4Ref.value!.clientWidth
  height.value = borderBox4Ref.value!.clientHeight
})
</script>

<template>
  <div class="borderBox4" ref="borderBox4Ref">
    <template v-if="width > 0 && height > 0">
      <svg class="svg-container" :width="width" :height="height">
        <defs>
          <filter :id="filterId" height="150%" width="150%" x="-25%" y="-25%">
            <feMorphology
              operator="dilate"
              radius="2"
              in="SourceAlpha"
              result="thicken"
            />
            <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
            <feFlood :flood-color="defaultColor[1]" result="glowColor" />
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

        <polygon
          fill="transparent"
          :points="`
        20, 32 ${width * 0.5 - titleWidth / 2}, 32 ${
            width * 0.5 - titleWidth / 2 + 20
          }, 53
        ${width * 0.5 + titleWidth / 2 - 20}, 53 ${
            width * 0.5 + titleWidth / 2
          }, 32
        ${width - 20}, 32 ${width - 8}, 48 ${width - 8}, ${height - 25} ${
            width - 20
          }, ${height - 8}
        20, ${height - 8} 8, ${height - 25} 8, 50
      `"
        />

        <polyline
          :stroke="defaultColor[0]"
          :filter="`url(#${filterId})`"
          :points="`
          ${(width - titleWidth) / 2}, 30
          20, 30 7, 50 7, ${50 + (height - 167) / 2}
          13, ${55 + (height - 167) / 2} 13, ${135 + (height - 167) / 2}
          7, ${140 + (height - 167) / 2} 7, ${height - 27}
          20, ${height - 7} ${width - 20}, ${height - 7} ${width - 7}, ${
            height - 27
          }
          ${width - 7}, ${140 + (height - 167) / 2} ${width - 13}, ${
            135 + (height - 167) / 2
          }
          ${width - 13}, ${55 + (height - 167) / 2} ${width - 7}, ${
            50 + (height - 167) / 2
          }
          ${width - 7}, 50 ${width - 20}, 30 ${(width + titleWidth) / 2}, 30
          ${(width + titleWidth) / 2 - 20}, 7 ${
            (width - titleWidth) / 2 + 20
          }, 7
          ${(width - titleWidth) / 2}, 30 ${(width - titleWidth) / 2 + 20}, 52
          ${(width + titleWidth) / 2 - 20}, 52 ${(width + titleWidth) / 2}, 30
        `"
        />

        <polygon
          :stroke="defaultColor[0]"
          fill="transparent"
          :points="`
          ${(width + titleWidth) / 2 - 5}, 30 ${
            (width + titleWidth) / 2 - 21
          }, 11
          ${(width + titleWidth) / 2 - 27}, 11 ${
            (width + titleWidth) / 2 - 8
          }, 34
        `"
        />

        <polygon
          :stroke="defaultColor[0]"
          fill="transparent"
          :points="`
          ${(width - titleWidth) / 2 + 5}, 30 ${
            (width - titleWidth) / 2 + 22
          }, 49
          ${(width - titleWidth) / 2 + 28}, 49 ${
            (width - titleWidth) / 2 + 8
          }, 26
        `"
        />

        <polygon
          :stroke="defaultColor[0]"
          :filter="`url(#${filterId})`"
          :points="`
          ${(width + titleWidth) / 2 - 11}, 37 ${
            (width + titleWidth) / 2 - 32
          }, 11
          ${(width - titleWidth) / 2 + 23}, 11 ${
            (width - titleWidth) / 2 + 11
          }, 23
          ${(width - titleWidth) / 2 + 33}, 49 ${
            (width + titleWidth) / 2 - 22
          }, 49
        `"
        />

        <polygon
          :filter="`url(#${filterId})`"
          :fill="defaultColor[0]"
          opacity="1"
          :points="`
          ${(width - titleWidth) / 2 - 10}, 37 ${
            (width - titleWidth) / 2 - 31
          }, 37
          ${(width - titleWidth) / 2 - 25}, 46 ${
            (width - titleWidth) / 2 - 4
          }, 46
        `"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon
          :filter="`url(#${filterId})`"
          :fill="defaultColor[0]"
          opacity="0.7"
          :points="`
          ${(width - titleWidth) / 2 - 40}, 37 ${
            (width - titleWidth) / 2 - 61
          }, 37
          ${(width - titleWidth) / 2 - 55}, 46 ${
            (width - titleWidth) / 2 - 34
          }, 46
        `"
        >
          <animate
            attributeName="opacity"
            values="0.7;0.4;0.7"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon
          :filter="`url(#${filterId})`"
          :fill="defaultColor[0]"
          opacity="0.5"
          :points="`
          ${(width - titleWidth) / 2 - 70}, 37 ${
            (width - titleWidth) / 2 - 91
          }, 37
          ${(width - titleWidth) / 2 - 85}, 46 ${
            (width - titleWidth) / 2 - 64
          }, 46
        `"
        >
          <animate
            attributeName="opacity"
            values="0.5;0.2;0.5"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon
          :filter="`url(#${filterId})`"
          :fill="defaultColor[0]"
          opacity="1"
          :points="`
          ${(width + titleWidth) / 2 + 30}, 37 ${
            (width + titleWidth) / 2 + 9
          }, 37
          ${(width + titleWidth) / 2 + 3}, 46 ${
            (width + titleWidth) / 2 + 24
          }, 46
        `"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon
          :filter="`url(#${filterId})`"
          :fill="defaultColor[0]"
          opacity="0.7"
          :points="`
          ${(width + titleWidth) / 2 + 60}, 37 ${
            (width + titleWidth) / 2 + 39
          }, 37
          ${(width + titleWidth) / 2 + 33}, 46 ${
            (width + titleWidth) / 2 + 54
          }, 46
        `"
        >
          <animate
            attributeName="opacity"
            values="0.7;0.4;0.7"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon
          :filter="`url(#${filterId})`"
          :fill="defaultColor[0]"
          opacity="0.5"
          :points="`
          ${(width + titleWidth) / 2 + 90}, 37 ${
            (width + titleWidth) / 2 + 69
          }, 37
          ${(width + titleWidth) / 2 + 63}, 46 ${
            (width + titleWidth) / 2 + 84
          }, 46
        `"
        >
          <animate
            attributeName="opacity"
            values="0.5;0.2;0.5"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>

        <text
          class="dv-border-box-11-title"
          :x="`${width / 2}`"
          y="32"
          fill="#fff"
          font-size="18"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          {{ title }}
        </text>

        <polygon
          :fill="defaultColor[0]"
          :filter="`url(#${filterId})`"
          :points="`
          7, ${53 + (height - 167) / 2} 11, ${57 + (height - 167) / 2}
          11, ${133 + (height - 167) / 2} 7, ${137 + (height - 167) / 2}
        `"
        />

        <polygon
          :fill="defaultColor[0]"
          :filter="`url(#${filterId})`"
          :points="`
          ${width - 7}, ${53 + (height - 167) / 2} ${width - 11}, ${
            57 + (height - 167) / 2
          }
          ${width - 11}, ${133 + (height - 167) / 2} ${width - 7}, ${
            137 + (height - 167) / 2
          }
        `"
        />
      </svg>
    </template>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.borderBox4 {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 60px 30px 30px;
  box-sizing: border-box;

  .svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    & > polyline {
      fill: none;
      stroke-width: 1;
    }
  }
}
</style>
