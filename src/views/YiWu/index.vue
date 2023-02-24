<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils/index'

import BorderBox1 from '@/components/BorderBox/BorderBox1.vue'
import BorderBox3 from '@/components/BorderBox/BorderBox3.vue'

import ScrollTable from '@/components/ScrollTable.vue'

import LeftBarChart from './Charts/LeftBar.vue'
import LeftBarChart2 from './Charts/LeftBar2.vue'

import LineChart from './Charts/Line.vue'
import RightPieChart from './Charts/RightPie.vue'
import RightTopBarChart from './Charts/RightTopBar.vue'
import RightBottomBarChart from './Charts/RightBottomBar.vue'

import { bigScreenWidthPx } from './config'

const containerRef = ref<HTMLInputElement | null>(null)
const screenWidth = ref(document.body.clientWidth)
const screenHeight = ref(document.body.clientHeight)
// 将px转换成rem
const tableRowHeightRem = (45 / bigScreenWidthPx) * 100

const table1Data = ref(
  new Array(10).fill(1).map(() => ['TRAYW 001SI/001NW', '50', '50', '45'])
)

const table2Data = ref(
  new Array(10)
    .fill(1)
    .map(() => [
      'MAERSK LINS/001W',
      '2023-01-01 10:00:00',
      '2023-01-01 10:00:00',
      '50',
      '2023-01-01 10:00:00',
      'BLCT2',
      '150'
    ])
)

// 是否已经初始化
// 在初始化的时候设置容器宽高
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

  // 测试修改数据后的动画效果
  // setInterval(() => {
  //   table1Data.value = new Array(3)
  //     .fill(1)
  //     .map(() => ['TRAYW 001SI/001NW', '50', '50', '45'])
  // }, 5000)
})

onUnmounted(() => {
  window.removeEventListener('resize', debounceOnResize)
})
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
      <border-box-1>
        <div class="container-content">
          <div class="left-part">
            <border-box-3 class="box">
              <div class="box-title">堆区在场箱数量</div>
              <div class="box-item-wrap">
                <div class="box-item">
                  <div class="box-item-value">890</div>
                  <div class="box-item-title">总数量</div>
                </div>
                <div class="box-item">
                  <div class="box-item-value">450</div>
                  <div class="box-item-title">空箱量</div>
                </div>
                <div class="box-item">
                  <div class="box-item-value">440</div>
                  <div class="box-item-title">重箱量</div>
                </div>
                <div class="box-item">
                  <div class="box-item-value">330</div>
                  <div class="box-item-title">含转关箱</div>
                </div>
              </div>
            </border-box-3>

            <div></div>

            <left-bar-chart-2 />

            <left-bar-chart />
          </div>

          <div class="middle-part">
            <div class="bar">
              <div class="bar-title">本年度</div>
              <div class="barbox-value">
                <div class="barbox-item">15000</div>
                <div class="barbox-item">50000</div>
              </div>
              <div class="barbox-title">
                <div class="barbox-item">进口箱量</div>
                <div class="barbox-item">出口箱量</div>
              </div>
            </div>

            <div class="table-title">当前场站作业情况</div>

            <ScrollTable
              style="flex: 1"
              :column-flex="[2, 1, 1, 1]"
              :header="['车名车次', '计划卸量', '计划装量', '已放行待装']"
              :data="table1Data"
              :showIdx="true"
              :row-height="tableRowHeightRem"
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
              :column-flex="[2, 3, 3, 1, 3, 1, 1]"
              :header="[
                '船名航次',
                '截关期/开船期',
                '本航次集装箱数量（已发运数量）',
                '铁路发运预计日期',
                '靠泊时间',
                '靠泊码头',
                '待发箱量'
              ]"
              :data="table2Data"
              :row-height="tableRowHeightRem"
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
        @include flex-column;
        width: 20%;
        height: 100%;

        .box {
          padding: 12px;
          position: relative;
          background-color: rgba(255, 255, 255, 0.04);

          .box-title {
            font-size: 16px;
            color: #fff;
            font-weight: bold;
          }

          .box-item-wrap {
            @include flex-start-center;
            flex-wrap: wrap;

            .box-item {
              @include flex-column-center;
              width: 50%;

              .box-item-value {
                font-size: 30px;
                font-family: electronicFont;
                font-weight: bold;
                color: #c5ccff;
              }

              .box-item-title {
                font-size: 12px;
              }
            }
          }
        }
      }

      .middle-part {
        @include flex-column;
        width: 35%;
        margin-left: 10px;
        padding-left: 5px;
        box-sizing: border-box;

        .bar {
          padding: 0 12px 12px;
          background-color: transparent;

          .bar-title {
            text-align: center;
            font-size: 30px;
            font-weight: bold;
          }

          .barbox-value {
            @include border-1;
            @include flex-space-around;
            font-size: 50px;
            color: #ffeb7b;
            font-family: electronicFont;
            font-weight: bold;

            .barbox-item {
              flex: 1;
              text-align: center;
              position: relative;

              &:first-child:before {
                position: absolute;
                content: '';
                height: 50%;
                width: 1px;
                background: rgba(255, 255, 255, 0.2);
                right: 0;
                top: 25%;
              }
            }
          }

          .barbox-title {
            @include flex-space-around;
            margin-top: 10px;

            .barbox-item {
              flex: 1;
              text-align: center;
            }
          }
        }
      }

      .right-part {
        width: 45%;
        height: 100%;

        .right-header {
          @include flex-start-center;
          height: 30%;
          padding-left: 20px;
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
