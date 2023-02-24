<script lang="ts" setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  type TooltipComponentOption
} from 'echarts/components'
import { PieChart, type PieSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TooltipComponent, PieChart, CanvasRenderer, LabelLayout])

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | PieSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('center-chart')!
  var myChart = echarts.init(chartDom, '', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          {
            name: '收费站',
            value: 1315
          },
          {
            name: '监控中心',
            value: 415
          },
          {
            name: '道路外场',
            value: 90
          },
          {
            name: '其他',
            value: 317
          }
        ],
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        }
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div class="center-cmp">
    <div class="cc-header">
      <div></div>
      <div>机电设备总数</div>
      <div></div>
    </div>

    <div class="cc-details">
      <div>设备总数</div>
      <div class="card">2</div>
      <div class="card">1</div>
      <div class="card">3</div>
      <div class="card">7</div>
    </div>

    <div class="cc-main-container">
      <div class="ccmc-left">
        <div class="station-info">收费站<span>1315</span></div>
        <div class="station-info">监控中心<span>415</span></div>
      </div>

      <div id="center-chart"></div>

      <!-- <dv-active-ring-chart class="ccmc-middle" :config="config" /> -->

      <div class="ccmc-right">
        <div class="station-info"><span>90</span>道路外场</div>
        <div class="station-info"><span>317</span>其他</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;

  .cc-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }

  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;

    .card {
      background-color: rgba(4, 49, 128, 0.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }

  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;

    #center-chart {
      width: 50%;
      height: 90%;

      .active-ring-name {
        font-size: 20px !important;
      }
    }

    .ccmc-left,
    .ccmc-right {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 24px;

      span {
        font-size: 40px;
        font-weight: bold;
      }

      .station-info {
        height: 80px;
        display: flex;
        align-items: center;
      }
    }

    .ccmc-left {
      align-items: flex-end;

      span {
        margin-left: 20px;
      }
    }

    .ccmc-right {
      align-items: flex-start;

      span {
        margin-right: 20px;
      }
    }
  }

  .label-tag {
    position: absolute;
    width: 500px;
    height: 30px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
