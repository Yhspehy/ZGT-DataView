<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash-es'

import BorderBox1 from '@/components/border-box/BorderBox1.vue'
import BorderBox2 from '@/components/border-box/BorderBox2.vue'

import LeftChart1 from './Charts/LeftChart1.vue'
import LeftChart2 from './Charts/LeftChart2.vue'
import LeftChart3 from './Charts/LeftChart3.vue'

import CenterChart from './Charts/CenterChart.vue'

import RightChart1 from './Charts/RightChart1.vue'
import RightChart2 from './Charts/RightChart2.vue'

import BottomChart from './Charts/BottomChart.vue'

const containerRef = ref<HTMLInputElement | null>(null)
const screenWidth = ref(document.body.clientWidth)
const screenHeight = ref(document.body.clientHeight)
document.documentElement.style.fontSize = screenWidth.value / 100 + 'px'

let isInit = false

function onResize() {
  const currentWidth = document.body.clientWidth
  const currentHeight = document.body.clientHeight

  if (containerRef.value) {
    if (!isInit) {
      isInit = true
    }
    containerRef.value.style.transform = `scale(${Math.min(
      currentWidth / screenWidth.value,
      currentHeight / screenHeight.value
    )})`
  }
}

const debounceOnResize = debounce(onResize, 100)

onMounted(() => {
  onResize()
  window.addEventListener('resize', debounceOnResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', debounceOnResize)
})
</script>

<template>
  <div
    id="data-view"
    :style="{
      width: screenWidth + 'px',
      height: screenHeight + 'px'
    }"
    ref="containerRef"
  >
    <div class="main-header">义乌铁路西站场区作业情况展示</div>

    <div class="main-container">
      <border-box-1>
        <div class="main-container-content">
          <div class="left-chart-container">
            <border-box-2>
              <left-chart-1 />
              <left-chart-2 />
              <left-chart-3 />
            </border-box-2>
          </div>

          <div class="right-main-container">
            <div class="rmc-top-container">
              <div class="rmctc-left-container">
                <border-box-2>
                  <center-chart />
                </border-box-2>
              </div>

              <div class="rmctc-right-container">
                <border-box-2 style="margin-bottom: 1%">
                  <right-chart-1 />
                </border-box-2>

                <border-box-2>
                  <right-chart-2 />
                </border-box-2>
              </div>
            </div>

            <div class="rmc-bottom-container">
              <border-box-2>
                <bottom-chart />
              </border-box-2>
            </div>
          </div>
        </div>
      </border-box-1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixin.scss' as *;

#data-view {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: left top;

  .main-header {
    @include flex-center;
    height: 80px;
    font-size: 30px;
  }
  .main-container {
    width: 100%;
    height: calc(100% - 80px);

    .main-container-content {
      display: flex;
      height: 100%;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
  }
  .left-chart-container {
    width: 22%;
    height: 100%;
  }
  .right-main-container {
    width: 77%;
    margin-left: 10px;
    padding-left: 5px;
    box-sizing: border-box;

    .rmc-top-container {
      height: 65%;
      display: flex;
    }

    .rmctc-left-container {
      width: 64%;
      margin-right: 1%;
    }

    .rmctc-right-container {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .rmc-bottom-container {
      margin-top: 2%;
      height: 30%;
    }

    .rmctc-chart-1,
    .rmctc-chart-2 {
      height: 50%;
    }
  }
}
</style>
