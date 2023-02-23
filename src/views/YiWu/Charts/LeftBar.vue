<script lang="ts" setup>
import Divide from '@/components/Divide.vue'
import { onMounted } from 'vue'

import * as echarts from 'echarts/core'
import {
  TitleComponent,
  type TitleComponentOption,
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
  TitleComponent,
  DatasetComponent,
  GridComponent,
  VisualMapComponent,
  BarChart,
  CanvasRenderer
])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | DatasetComponentOption
  | GridComponentOption
  | VisualMapComponentOption
  | BarSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('left-bar-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    title: {
      text: '历年本站发运量'
    },
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
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
    <div class="header">张三收费站</div>
    <div class="details">设备运行总数<span>435</span></div>

    <div id="left-bar-chart"></div>

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
  .header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 10px;
  }
  .details {
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
  #left-bar-chart {
    width: 100%;
    height: 100%;
  }
}
</style>
