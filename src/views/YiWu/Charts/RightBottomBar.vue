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
  var chartDom = document.getElementById('right-bar-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    title: {
      text: '省内其它站点发运数量',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '0%',
      right: '10%'
    },
    grid: {
      bottom: '10%',
      right: '4%'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    dataset: {
      source: [
        ['product', '2021', '2022'],
        ['湖州西', 120, 180],
        ['上饶', 200, 300],
        ['北仑', 150, 200]
      ]
    },
    series: [
      {
        type: 'bar'
      },
      {
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
  flex: 1;
  height: 100%;
}
</style>
