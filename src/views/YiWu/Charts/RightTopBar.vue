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
  LegendComponent,
  type LegendComponentOption,
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
  LegendComponent,
  TooltipComponent,
  VisualMapComponent,
  BarChart,
  CanvasRenderer
])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | DatasetComponentOption
  | GridComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | BarSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('right-top-bar-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    title: {
      text: '预约情况显示'
    },
    legend: {
      top: '12%'
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: { type: 'category' },
    yAxis: {},
    dataset: {
      source: [
        ['product', '转关箱(已审批)', '非转关箱'],
        ['Matcha Latte', 43.3, 85.8],
        ['Milk Tea', 83.1, 73.4],
        ['Cheese Cocoa', 86.4, 65.2],
        ['Walnut Brownie', 72.4, 53.9]
      ]
    },
    series: [{ type: 'bar' }, { type: 'bar' }]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div id="right-top-bar-chart"></div>
</template>

<style lang="scss" scoped>
#right-top-bar-chart {
  width: 50%;
  height: 100%;
}
</style>
