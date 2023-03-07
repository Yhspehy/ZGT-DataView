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
      text: '各家船公司业务占比',
      left: 'center'
    },
    backgroundColor: 'transparent',
    grid: {
      top: '10%',
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
      data: [
        'CMA',
        'COS',
        'MSC',
        'HMM',
        'EMC',
        'YML',
        'ZIM',
        'EAS',
        'NYK',
        'APL'
      ],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        data: [30, 40, 50, 60, 70, 80, 100, 160, 200, 300],
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
                color: '#03c893' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#0091ff' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
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
  width: 100%;
  height: 60%;
}
</style>
