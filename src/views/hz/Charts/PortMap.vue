<script lang="ts">
export default {
  name: 'PortMap'
}
</script>

<script lang="ts" setup>
import { onMounted } from 'vue'

import * as echarts from 'echarts/core'
import { LinesChart, type LinesSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
// 请确保在引入百度地图扩展之前已经引入百度地图 JS API 脚本并成功加载
// https://api.map.baidu.com/api?v=3.0&ak=你申请的AK
import 'echarts/extension-src/bmap/bmap'

echarts.use([LinesChart, CanvasRenderer])

type EChartsOption = echarts.ComposeOption<LinesSeriesOption>

onMounted(() => {
  var chartDom = document.getElementById('port-map')!
  var myChart = echarts.init(chartDom, '', { devicePixelRatio: 2 })
  let option: EChartsOption

  myChart.setOption({
    bmap: {
      center: [119.751818, 29.86],
      zoom: 9,
      roam: 'move'
    },
    series: [
      {
        type: 'effectScatter',
        // 使用百度地图坐标系
        coordinateSystem: 'bmap',
        // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
        data: [
          [120.081818, 30.070586, 100, '富阳东洲', 'red'],
          [120.331192, 30.30815, 100, '杭州下沙港', 'yellow'],
          [119.462079, 29.54543, 100, '十里埠港', 'red']
        ],
        // itemStyle: {
        //   color: function (params: any) {
        //     return params.value[4]
        //   }
        // },
        symbolSize: function (params: any[]) {
          return (params[2] / 100) * 15 + 5
        },
        label: {
          show: true,
          offset: [0, 40],
          formatter: function (params: any) {
            return params.value[3]
          },
          color: '#fff',
          fontSize: 14,
          borderWidth: 2,
          borderColor: '#4b7198',
          borderRadius: 2,
          padding: 5,
          backgroundColor: '#689ad0'
        }
      }
    ]
  })
})
</script>

<template>
  <div id="port-map"></div>
</template>

<style lang="scss" scoped>
#port-map {
  width: 100%;
  height: 30%;
}
</style>
