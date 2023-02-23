<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils/index'

import BorderBox1 from '@/components/BorderBox/BorderBox1.vue'
import BorderBox2 from '@/components/BorderBox/BorderBox2.vue'

import LeftBarChart from './Charts/LeftBar.vue'

import LineChart from './Charts/Line.vue'

import RightPieChart from './Charts/RightPie.vue'
import RightTopBarChart from './Charts/RightTopBar.vue'
import RightBottomBarChart from './Charts/RightBottomBar.vue'

import ScrollTable from '@/components/ScrollTable.vue'

const containerRef = ref<HTMLInputElement | null>(null)
const screenWidth = ref(document.body.clientWidth)
const screenHeight = ref(document.body.clientHeight)

const table1Data = ref(
  new Array(10).fill(1).map(() => ['TRAYW 001SI/001NW', '50', '50', '45'])
)

const table2Data = ref(
  new Array(10)
    .fill(1)
    .map(() => ['MAERSK LINS/001W', '2023-01-01 10:00:00', 'BLCT2', '150'])
)

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

const debounceOnResize = debounce(100, onResize)

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
    <div class="header">义乌铁路西站场区作业情况展示</div>

    <div class="container">
      <border-box-1>
        <div class="container-content">
          <div class="left-part">
            <border-box-2>
              <div>堆区在场箱数量</div>
              <div>总数量:890</div>
              <div>空箱量:450</div>
              <div>重箱量:440</div>
              <div>含转关箱:330</div>
              <div>堆区分布</div>
              <div>B箱区:320</div>
              <div>Q箱区:570</div>

              <left-bar-chart />
            </border-box-2>
          </div>

          <div class="middle-part">
            <div class="middle-header">
              <div>本年度</div>
              <div>进口箱量:15000</div>
              <div>出口箱量:50000</div>
            </div>

            <div class="table-title">当前场站作业情况</div>

            <ScrollTable
              style="height: 40%"
              :column-flex="[2, 1, 1, 1]"
              :header="['车名车次', '计划卸量', '计划装量', '已放行待装']"
              :data="table1Data"
            />

            <line-chart />
          </div>
          <div class="right-part">
            <div class="right-header">
              <right-pie-chart />
              <right-top-bar-chart />
            </div>
            <div class="table-title">近期船期待发运量</div>
            <ScrollTable
              style="height: 30%"
              :column-flex="[2, 3, 1, 1]"
              :header="['船名航次', '靠泊时间', '靠泊码头', '待发箱量']"
              :data="table2Data"
            />
            <right-bottom-bar-chart />
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

  .header {
    @include flex-center;
    height: 80px;
    font-size: 30px;
  }
  .container {
    width: 100%;
    height: calc(100% - 80px);

    .container-content {
      display: flex;
      height: 100%;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;

      .left-part {
        width: 20%;
        height: 100%;
      }

      .middle-part {
        width: 40%;
        margin-left: 10px;
        padding-left: 5px;
        box-sizing: border-box;

        .middle-header {
          @include flex-space-between;
        }
      }

      .right-part {
        width: 40%;
        height: 100%;

        .right-header {
          @include flex-start-center;
          height: 30%;
        }
      }
    }

    .table-title {
      text-align: center;
      font-size: 24px;
      margin: 10px 0;
    }
  }
}
</style>
