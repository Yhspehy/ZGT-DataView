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
  var chartDom = document.getElementById('left-bar-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    title: {
      text: '历年本站发运量'
    },
    legend: {
      top: '12%'
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
        ['product', '转关箱(已审批)', '非转关箱'],
        ['Matcha', 43.3, 85.8],
        ['Milk Tea', 83.1, 73.4],
        ['Cheese', 86.4, 65.2],
        ['Walnut', 72.4, 53.9]
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
