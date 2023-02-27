<script lang="ts" setup>
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
  var chartDom = document.getElementById('right-bar-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    title: {
      text: '当月分货代出口重箱数量'
    },
    grid: {
      bottom: '3%'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
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
  <div id="right-bar-chart"></div>
</template>

<style lang="scss" scoped>
#right-bar-chart {
  width: 100%;
  height: 32%;
  margin-top: 1%;
}
</style>
