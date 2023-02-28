<script lang="ts" setup>
import Divide from '@/components/Divide/index.vue'

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
  var myChart1 = echarts.init(document.getElementById('lc6-chart')!, '', {
    devicePixelRatio: 2
  })
  var myChart2 = echarts.init(document.getElementById('lc7-chart')!, '', {
    devicePixelRatio: 2
  })
  var myChart3 = echarts.init(document.getElementById('lc8-chart')!, '', {
    devicePixelRatio: 2
  })
  var myChart4 = echarts.init(document.getElementById('lc9-chart')!, '', {
    devicePixelRatio: 2
  })

  var option: EChartsOption

  option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          {
            name: '收费站',
            value: 1315
          },
          {
            name: '监控中心',
            value: 415
          },
          {
            name: '道路外场',
            value: 90
          },
          {
            name: '其他',
            value: 317
          }
        ],
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        }
      }
    ]
  }

  if (option) {
    myChart1.setOption(option)
    myChart2.setOption(option)
    myChart3.setOption(option)
    myChart4.setOption(option)
  }
})
</script>

<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
      <div class="bcci-header">赵钱收费站</div>
      <div id="lc6-chart"></div>
      <Divide position="right" />
    </div>

    <div class="bc-chart-item">
      <div class="bcci-header">孙李收费站</div>
      <div id="lc7-chart"></div>
      <Divide position="right" />
    </div>

    <div class="bc-chart-item">
      <div class="bcci-header">周吴收费站</div>
      <div id="lc8-chart"></div>
      <Divide position="right" />
    </div>

    <div class="bc-chart-item">
      <div class="bcci-header">郑王收费站</div>
      <div id="lc9-chart"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-charts {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  .bc-chart-item {
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .bcci-header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }

  #lc6-chart,
  #lc7-chart,
  #lc8-chart,
  #lc9-chart {
    width: 100%;
    height: 80%;
  }
}
</style>
