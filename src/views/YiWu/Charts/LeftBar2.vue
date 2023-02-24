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
  var chartDom = document.getElementById('left-bar-chart-2')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    title: {
      text: '堆区分布'
    },
    backgroundColor: 'transparent',
    grid: {
      top: '20%',
      left: '15%',
      right: '10%',
      bottom: '10%'
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: ['B箱区', 'Q箱区'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        data: [120, 500],
        type: 'bar',
        label: {
          show: true,
          position: 'right',
          color: '#4e84a1',
          fontSize: 14,
          formatter: '{c}'
        },
        itemStyle: {
          borderRadius: 25,
          color: '#3facff'
        }
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div id="left-bar-chart-2"></div>
</template>

<style lang="scss" scoped>
#left-bar-chart-2 {
  width: 100%;
  flex: 1;
  margin: 30px 0;
}
</style>
