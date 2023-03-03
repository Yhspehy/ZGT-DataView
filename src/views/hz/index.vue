<script lang="ts">
export default {
  name: 'HZ'
}
</script>

<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import CountUp from '@/components/CountUp/index.vue'

import LeftChart from './Charts/Left.vue'
import RightChart from './Charts/Right.vue'

import { useResize } from '@/hooks/resize'

const { containerRef, screenWidth, screenHeight } = useResize()

dayjs.locale('zh-cn')

const headerData = reactive({
  year: 3516609.5,
  month: 365858.25,
  day: 1084,
  now: 1084,
  date: dayjs().format('HH:mm:ss dddd')
})

const theadList = [
  '泊位',
  '2 #',
  '3 #',
  '4 #',
  '5 #',
  '6 #',
  '7 #',
  '8 #',
  '9 #',
  '10 #',
  '11 #'
]

const tableData = [
  [
    {
      list: ['船舶', '', '', '', '', '', '', '', '', '', '']
    },
    {
      list: [
        '中文船名',
        '兴隆29,新明州22',
        '新永昌8',
        '黄德马士基',
        '',
        '地中海热那亚',
        '兴通海,兴通海',
        '立敏轮',
        '地中海米娜',
        '齐合',
        '马士基爱丁堡'
      ]
    },
    {
      list: [
        '进出航次',
        '20223N/20224S,/20207S',
        '/D6802',
        '013E/019W',
        '/',
        'ox019/ox019w',
        '/D6801,20615S/',
        '499W/500E',
        'QL020/QL020W',
        '2061W/2062W',
        '017SI'
      ]
    }
  ],
  [
    {
      list: ['时间', '', '', '', '', '', '', '', '', '', '']
    },
    {
      list: [
        '实抵时间',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00'
      ]
    },
    {
      list: [
        '预靠时间',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00'
      ]
    },
    {
      list: [
        '开工时间',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00',
        '14:00:00'
      ]
    }
  ],
  [
    { list: ['进度', '', '', '', '', '', '', '', '', '', ''] },
    {
      list: [
        '计划进出量',
        '121 / 248,0 / 182',
        '0 /260',
        '2345 /2990',
        '/',
        '694 / 1900',
        '0 / 180,147 /0',
        '108 / 161',
        '0 / 5730',
        '212 / 146',
        '5761 /0'
      ]
    },
    {
      color: '#d18a33',
      list: [
        '已完成',
        '117 / 119,0 / 149',
        '0 / 122',
        '0/0',
        '/',
        '0/0',
        '0 / 120,146 /0',
        '92 / 39',
        '0 / 234',
        '186 / 62',
        '153 /0'
      ]
    },
    {
      color: '#d18a33',
      isArray: true,
      list: [
        ['余量/进度'],
        ['4 / 129,0 / 33', 385],
        ['0 / 138 ', 722],
        ['2345 /2990 ', 0],
        ['/ ', 0],
        ['694 /1900 ', 0],
        ['0 / 60.1 /0 ', 266],
        ['16 / 122 ', 133],
        ['0 / 5496 ', 234],
        ['26 / 84 ', 248],
        ['5608 /0 ', 153]
      ]
    },
    {
      color: '#d18a33',
      list: [
        '船时效率',
        '39.69,26.15',
        '28.07',
        '0',
        '',
        '0',
        '31.03 24.01',
        '79.66',
        '172.8',
        '41.98',
        '133.66'
      ]
    }
  ]
]

const disableIdxList = ref([3, 4, 5])

const intervalId = setInterval(() => {
  headerData.date = dayjs().format('HH:mm:ss dddd')
}, 1000)

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div
    class="HZ-view"
    :style="{
      width: screenWidth + 'px',
      height: screenHeight + 'px'
    }"
    ref="containerRef"
  >
    <div class="header">
      <div class="title">年度(TEU)</div>
      <CountUp :end-val="headerData.year" :decimalPlaces="2" class="value" />
      <div class="title">本月(TEU)</div>
      <CountUp :end-val="headerData.month" :decimalPlaces="2" class="value" />
      <div class="title">今日(TEU)</div>
      <CountUp :end-val="headerData.day" class="value" />

      <div class="title">当班(TEU)</div>
      <CountUp :end-val="headerData.now" class="value" />
      <div class="title">{{ headerData.date }}</div>
    </div>

    <div class="boat-container">
      <div class="section">
        <div class="section-title blue">当班作业与待靠船舶</div>
        <div class="thead">
          <div
            v-for="(colData, colIdx) in theadList"
            :key="colData"
            :class="['col', colIdx === 0 ? 'thead-col' : 'green tbody-col']"
            :style="{
              color: disableIdxList.includes(colIdx)
                ? 'grey'
                : colIdx > 0
                ? '#76f3ca'
                : '#fff'
            }"
          >
            {{ colData }}
          </div>
        </div>
      </div>

      <div
        v-for="(section, sectionIdx) in tableData"
        :key="sectionIdx"
        class="section"
      >
        <div v-for="(rowData, rowIdx) in section" :key="rowIdx" class="thead">
          <div
            v-for="(colData, colIdx) in rowData.list"
            :key="colIdx"
            :class="['col', colIdx === 0 ? 'thead-col' : 'tbody-col']"
            :style="{
              color: disableIdxList.includes(colIdx)
                ? 'grey'
                : rowIdx === 0
                ? '#589ad3'
                : colIdx > 0
                ? rowData.color || '#76f3ca'
                : '#fff'
            }"
          >
            <template v-if="rowData.isArray">
              <div
                v-for="(el, elIdx) in colData"
                :key="elIdx"
                :style="{
                  color:
                    !disableIdxList.includes(colIdx) && elIdx === 1
                      ? '#c3612a'
                      : ''
                }"
              >
                {{ el }}
              </div>
            </template>
            <div v-else>{{ colData }}</div>
          </div>
        </div>
      </div>

      <div class="chart-wrap">
        <left-chart />
        <right-chart />

        <div class="chart-data">
          <div class="chart-data-wrap">
            <div class="chart-data-title">今日昼夜计划</div>
            <div class="chart-data-sub-title">早班:</div>
            <div class="chart-data-value">100</div>
            <div class="chart-data-sub-title">晚班:</div>
            <div class="chart-data-value">200</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixin.scss' as *;

@font-face {
  font-family: electronicFont;
  src: url(../../fonts/DS-DIGIT.TTF);
}

.blue {
  color: #589ad3;
}

.green {
  color: #76f3ca;
}

.HZ-view {
  @include flex-column;
  background-color: #212337;
  color: #fff;
  padding: 10px;
}

.header {
  @include flex-start-center;
  height: 50px;
  margin-bottom: 10px;

  .title {
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }

  .value {
    flex: 1;
    height: 100%;
    background-color: #485f98;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    font-family: electronicFont;
    font-weight: bold;
  }
}

.boat-container {
  @include flex-column;
  flex: 1;
  .section {
    background-color: #2b2b48;
    padding: 10px;
    margin-bottom: 10px;
    .section-title {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .thead {
      @include flex-start-center;
      margin-bottom: 2px;

      .thead-col {
        width: 100px;
        color: #fff;
      }

      .tbody-col {
        flex: 1;
      }
      .col {
        // @include ellipsis;
        text-align: center;
        font-size: 12px;
        word-break: break-all;
      }
    }
  }

  .chart-wrap {
    @include flex-start-center;
    flex: 1;

    .chart-data {
      @include flex-column-center;
      flex: 1;

      .chart-data-title {
        font-size: 30px;
        margin-bottom: 10px;
      }

      .chart-data-sub-title {
        font-size: 20px;
        text-align: left;
      }

      .chart-data-value {
        font-size: 20px;
      }
    }
  }
}
</style>
