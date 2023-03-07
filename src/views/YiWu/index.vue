<script lang="ts">
export default {
  name: 'YiWu'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

import Divide from '@/components/Divide/index.vue'
import ScrollTable from '@/components/ScrollTable/index.vue'
import CountUp from '@/components/CountUp/index.vue'

import LeftBarChart from './Charts/LeftBar.vue'
import LeftBarChart2 from './Charts/LeftBar2.vue'

import LineChart from './Charts/Line.vue'
import RightPieChart from './Charts/RightPie.vue'
import RightTopBarChart from './Charts/RightTopBar.vue'
import RightBottomBarChart from './Charts/RightBottomBar.vue'

import { useResize } from '@/hooks/resize'

const { containerRef, screenWidth, screenHeight } = useResize()

const table1Data = ref(
  new Array(10)
    .fill(1)
    .map(() => [
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ])
)
</script>

<template>
  <div
    class="YiWu-view"
    :style="{
      width: screenWidth + 'px',
      height: screenHeight + 'px'
    }"
    ref="containerRef"
  >
    <div class="header">义乌铁路西站场区作业情况展示</div>

    <div class="container">
      <div class="container-content">
        <!-- 左边区域 -->
        <div class="left-part">
          <div class="left-bar-chart">
            <left-bar-chart />
            <Divide />
          </div>

          <right-pie-chart />
        </div>

        <!-- 中间区域 -->
        <div class="middle-part">
          <div class="table-title">当前场站作业情况</div>
          <ScrollTable
            style="height: 30%"
            :column-flex="[2, 4, 2, 2]"
            :header="[
              '船名航次',
              '截关期/开船期',
              '本航次集装箱数量（已发运数量）',
              '铁路发运预计日期'
            ]"
            :row-num="6"
            :data="table1Data"
            :showIdx="true"
          />

          <line-chart />

          <div class="middle-footer">
            <div class="my-count-wrap">
              <div class="my-count-title">我方站点发运量</div>
              <count-up end-val="3000000" class="my-count" />
            </div>
            <right-bottom-bar-chart />
          </div>
        </div>

        <!-- 右边区域 -->
        <div class="right-part">
          <left-bar-chart2 />

          <right-top-bar-chart />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixin.scss' as *;
@use '../../styles/border.scss' as *;

@font-face {
  font-family: electronicFont;
  src: url(../../fonts/DS-DIGIT.TTF);
}

.YiWu-view {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: left top;
  color: #fff;
  background-image: url('/bg.png');
  background-size: 100% 100%;

  .header {
    @include flex-center;
    height: 80px;
    font-size: 40px;
    font-weight: bold;
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
        @include flex-column;
        width: 20%;
        height: 100%;

        .left-bar-chart {
          flex: 1;
        }
      }

      .middle-part {
        @include flex-column;
        width: 58%;
        margin: 0 1%;
        padding-left: 5px;
        box-sizing: border-box;

        .middle-footer {
          flex: 1;
          display: flex;

          .my-count-wrap {
            @include flex-column-center;
            justify-content: center;
            width: 200px;

            .my-count-title {
              font-size: 24px;
              font-weight: bold;
            }

            .my-count {
              font-family: electronicFont;
              font-weight: bold;
              font-size: 50px;
              color: #ffeb7b;
            }
          }
        }
      }

      .right-part {
        width: 20%;
        height: 100%;

        .right-header {
          @include flex-start-center;
          height: 30%;
        }
      }
    }

    .table-title {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0;
    }
  }
}
</style>
