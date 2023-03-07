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
  TooltipComponent,
  type TooltipComponentOption,
  VisualMapComponent,
  type VisualMapComponentOption
} from 'echarts/components'
import { BarChart, type BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  DatasetComponent,
  GridComponent,
  TooltipComponent,
  VisualMapComponent,
  BarChart,
  CanvasRenderer
])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | DatasetComponentOption
  | GridComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | BarSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('left-bar-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    title: {
      text: '历年发运量',
      left: 'center'
    },
    legend: {
      top: '12%'
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      }
    },
    yAxis: {
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    dataset: {
      source: [
        ['2020', 43.3, 85.8],
        ['2021', 83.1, 73.4],
        ['2022', 86.4, 65.2]
      ]
    },
    series: [{ type: 'bar' }, { type: 'bar' }]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div id="left-bar-chart"></div>
</template>

<style lang="scss" scoped>
#left-bar-chart {
  width: 100%;
  height: 100%;
}
</style>
