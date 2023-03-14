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
      text: '今日昼夜计划',
      top: '2%',
      left: '3%'
    },
    backgroundColor: '#2b2b48',
    grid: {
      top: '30%',
      left: '15%',
      right: '15%',
      bottom: '30%'
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
      data: ['早班', '晚班'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        data: [120, 200],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          borderRadius: 25
        },
        label: {
          show: true,
          position: 'right',
          color: '#4e84a1',
          fontSize: 14,
          formatter: '{c}'
        },
        itemStyle: {
          borderRadius: 25,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#03c893'
              },
              {
                offset: 1,
                color: '#0091ff'
              }
            ],
            global: false
          }
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
  flex: 1;
  height: 100%;
}
</style>
