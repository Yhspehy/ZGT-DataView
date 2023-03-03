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
  LegendComponent,
  type LegendComponentOption,
  VisualMapComponent,
  type VisualMapComponentOption
} from 'echarts/components'
import {
  BarChart,
  type BarSeriesOption,
  LineChart,
  type LineSeriesOption
} from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  DatasetComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  VisualMapComponent,
  BarChart,
  LineChart,
  CanvasRenderer
])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | DatasetComponentOption
  | GridComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | VisualMapComponentOption
  | BarSeriesOption
  | LineSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('right-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: '#2b2b48',
    title: {
      text: '当班分时段进提量(Vans)',
      top: '2%',
      left: '3%'
    },
    legend: {
      right: '2%',
      top: '30%',
      orient: 'vertical'
    },
    tooltip: {
      trigger: 'item'
    },
    grid: {
      right: '30%',
      top: '20%',
      bottom: '10%'
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
        ['product', '进箱', '提箱', '总量'],
        ['Matcha', 40, 60, 100],
        ['Milk Tea', 150, 50, 200],
        ['Cheese', 50, 100, 150],
        ['Walnut', 90, 80, 170]
      ]
    },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'line' }]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div id="right-chart"></div>
</template>

<style lang="scss" scoped>
#right-chart {
  flex: 2;
  height: 100%;
  margin: 0 10px;
}
</style>
