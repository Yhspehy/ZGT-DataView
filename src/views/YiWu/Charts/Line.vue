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
      text: '近日进提箱动态',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '12%'
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
      data: ['02-01', '02-02', '02-03', '02-04', '02-05']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '单位1',
        type: 'line',
        data: [120, 300, 201, 134, 90]
      },
      {
        name: '单位2',
        type: 'line',
        data: [220, 112, 261, 204, 290]
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
  height: 30%;
  margin: 2% 0;
}
</style>
