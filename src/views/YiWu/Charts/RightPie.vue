<script lang="ts" setup>
import { onMounted } from 'vue'

import * as echarts from 'echarts/core'
import {
  TitleComponent,
  type TitleComponentOption,
  TooltipComponent,
  type TooltipComponentOption,
  LegendComponent,
  type LegendComponentOption
} from 'echarts/components'
import { PieChart, type PieSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | PieSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('right-pie-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    title: {
      text: '各家船公司业务占比',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: [
          { value: 1048, name: '公司1' },
          { value: 735, name: '公司2' },
          { value: 580, name: '公司3' },
          { value: 484, name: '公司4' },
          { value: 300, name: '公司5' }
        ],
        label: {
          show: false
        }
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div id="right-pie-chart"></div>
</template>

<style lang="scss" scoped>
#right-pie-chart {
  width: 50%;
  height: 100%;
}
</style>
