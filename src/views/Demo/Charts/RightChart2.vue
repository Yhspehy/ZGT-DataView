<script lang="ts" setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  type TooltipComponentOption
} from 'echarts/components'
import { PieChart, type PieSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TooltipComponent, PieChart, CanvasRenderer, LabelLayout])

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | PieSeriesOption
>

onMounted(() => {
  var chartDom = document.getElementById('lc5-chart')!
  var myChart = echarts.init(chartDom, 'dark', { devicePixelRatio: 2 })
  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { name: '收费系统', value: 93 },
          { name: '通信系统', value: 32 },
          { name: '监控系统', value: 65 },
          { name: '供配电系统', value: 44 },
          { name: '其他', value: 52 }
        ],
        label: {
          formatter: '{b}: {d}%',
          overflow: 'break'
        }
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div class="left-chart-2">
    <div class="lc2-header">李四收费站</div>
    <div class="lc2-details">设备运行总数<span>245</span></div>

    <div id="lc5-chart"></div>
  </div>
</template>

<style lang="scss" scoped>
.left-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .lc2-header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 10px;
  }
  .lc2-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }
  #lc5-chart {
    width: 100%;
    height: 100%;
  }
}
</style>
