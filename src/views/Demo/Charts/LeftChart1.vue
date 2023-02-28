<script lang="ts" setup>
import Divide from '@/components/Divide'
import { onMounted } from 'vue'

import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  type DatasetComponentOption,
  GridComponent,
  type GridComponentOption,
  VisualMapComponent,
  type VisualMapComponentOption
} from 'echarts/components'
import { BarChart, type BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  DatasetComponent,
  GridComponent,
  VisualMapComponent,
  BarChart,
  CanvasRenderer
])

type EChartsOption = echarts.ComposeOption<
  | DatasetComponentOption
  | GridComponentOption
  | VisualMapComponentOption
  | BarSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('lc1-chart')!
  var myChart = echarts.init(chartDom, '', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    xAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      // axisTick: {
      //   show: false
      // }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div class="left-chart-2">
    <div class="lc2-header">张三收费站</div>
    <div class="lc2-details">设备运行总数<span>435</span></div>

    <div id="lc1-chart"></div>

    <Divide />
  </div>
</template>

<style lang="scss" scoped>
.left-chart-2 {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .lc2-header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 10px;
  }
  .lc2-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }
  #lc1-chart {
    width: 100%;
    height: 100%;
  }
}
</style>
