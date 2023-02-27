<script lang="ts" setup>
import { onMounted } from 'vue'

import * as echarts from 'echarts/core'
import {
  TitleComponent,
  type TitleComponentOption,
  TooltipComponent,
  type TooltipComponentOption,
  GridComponent,
  type GridComponentOption,
  LegendComponent,
  type LegendComponentOption
} from 'echarts/components'
import { LineChart, type LineSeriesOption } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('middle-line-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    title: {
      text: '近日进提箱动态'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '12%',
      data: ['单位1', '单位2', '单位3', '单位4', '单位5']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['10号', '11号', '12号', '13号', '14号', '15号', '16号']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '单位1',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '单位2',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '单位3',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '单位4',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '单位5',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div id="middle-line-chart"></div>
</template>

<style lang="scss" scoped>
#middle-line-chart {
  width: 100%;
  margin-top: 1%;
  flex: 1;
}
</style>
