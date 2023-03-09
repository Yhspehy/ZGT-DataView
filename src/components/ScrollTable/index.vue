<script lang="ts">
export default {
  name: 'ScrollTable'
}
</script>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue'

export interface ScrollTableProps {
  /**
   * 表单数据
   */
  data: any[]
  /**
   * 每栏的flex值
   * @default 1
   */
  columnFlex: number[]
  /**
   * 表头内容
   */
  header?: string[] | null
  /**
   * 是否展示序号
   * @default false
   */
  showIdx?: boolean
  /**
   * 是否滚动
   * @default true
   */
  animation?: boolean
  /**
   * 滚动动画间隔，默认为3000
   * @default 3000
   */
  duration?: number
  /**
   * header的背景
   * @default #002c8a
   */
  headerBg?: string
  /**
   * 单数行的背景
   * @default #010c32
   */
  oddRowBg?: string
  /**
   * 双数行的背景
   * @default #03184b
   */
  evenRowBg?: string
  /**
   * 表单可以存放几行,其中包括了header一行
   * @default 7
   */
  rowNum?: number
  /**
   * 固定的每行高度，px单位,仅测试用，不暴露为prop
   * @default 0
   */
  rowHeightFixed?: number
}

const props = withDefaults(defineProps<ScrollTableProps>(), {
  header: null,
  showIdx: false,
  animation: true,
  duration: 3000,
  headerBg: '#002c8a',
  oddRowBg: '#010c32',
  evenRowBg: '#03184b',
  rowNum: 7,
  rowHeightFixed: 0
})

const scrollTableRef = ref<HTMLInputElement | null>(null)
const tbodyRef = ref<HTMLInputElement | null>(null)
// 每一行的高度
const rowHeight = ref(props.rowHeightFixed)

const dataTransfer = ref(
  props.data.map((el, idx) => ({
    data: [...el],
    idx: idx + 1
  }))
)

const animationIdx = ref(0)
let lastIntervalId: number | null = null

const allColumnFlex = computed(() =>
  props.columnFlex.reduce(
    (all, current) => (all += current),
    props.showIdx ? 1 : 0
  )
)

// 计算每一行的高度
function calcRowHeight() {
  if (!rowHeight.value) {
    rowHeight.value = scrollTableRef.value!.clientHeight / props.rowNum
  }
}

/**
 * 判断是否需要滚动
 * 条件：当前数据高度超出容器高度
 * 如果超出容器高度，那么就需要将数据拷贝成2份
 */
function animationAction() {
  if (props.data.length > props.rowNum) {
    dataTransfer.value = [...dataTransfer.value, ...dataTransfer.value]
    lastIntervalId = window.setInterval(() => {
      animationIdx.value++
      if (animationIdx.value === props.data.length) {
        // 在执行完动画后将位置回到0
        setTimeout(() => {
          stopAnimation()
          animationIdx.value = 0
          // 在位置回到0之后，重新开启动画
          setTimeout(() => {
            reStartAnimation()
          }, 100)
        }, 500)
      }
    }, props.duration)
  }
}

function stopAnimation() {
  tbodyRef.value!.style.transitionProperty = 'none'
}

function reStartAnimation() {
  tbodyRef.value!.style.transitionProperty = 'transform'
}

onMounted(() => {
  calcRowHeight()
  if (props.animation) {
    animationAction()
  }
})

onUnmounted(() => {
  if (lastIntervalId) {
    clearInterval(lastIntervalId)
    lastIntervalId = null
  }
})

watch(
  () => props.animation,
  (val) => {
    if (val) {
      animationAction()
    } else {
      if (lastIntervalId) {
        clearInterval(lastIntervalId)
        lastIntervalId = null
      }
    }
  }
)

watch(
  () => props.duration,
  (val) => {
    if (val && props.animation) {
      if (lastIntervalId) {
        clearInterval(lastIntervalId)
        lastIntervalId = null
      }
      dataTransfer.value = props.data.map((el, idx) => ({
        data: [...el],
        idx: idx + 1
      }))
      animationAction()
    }
  }
)

watch(
  () => props.rowNum,
  (val) => {
    if (val) {
      calcRowHeight()
    } else {
      console.error(`不能将rowNum设置为0`)
    }
  }
)

watch(
  () => props.data,
  (val) => {
    if (val && val.length > 0) {
      dataTransfer.value = val.map((el, idx) => ({
        data: [...el],
        idx: idx + 1
      }))
      animationIdx.value = 0
      if (props.animation) {
        nextTick(() => {
          if (lastIntervalId) {
            clearInterval(lastIntervalId)
            lastIntervalId = null
          }
          animationAction()
        })
      }
    }
  }
)
</script>

<template>
  <div class="scroll-table" ref="scrollTableRef">
    <div
      v-if="header && header.length > 0"
      class="thead"
      :style="{ height: `${rowHeight}px`, backgroundColor: headerBg }"
    >
      <div
        v-if="showIdx"
        class="thead-col thead-idx"
        :style="{ width: `${(1 / allColumnFlex) * 100}%` }"
      >
        序号
      </div>
      <div
        v-for="(h, hIdx) in header"
        :key="h"
        class="thead-col"
        :style="{
          width: `${((columnFlex[hIdx] || 1) / allColumnFlex) * 100}%`
        }"
      >
        {{ h }}
      </div>
    </div>

    <div
      v-if="dataTransfer && dataTransfer.length > 0"
      ref="tbodyRef"
      class="tbody"
      :style="{
        transform: `translateY(-${rowHeight * animationIdx}px)`
      }"
    >
      <div
        v-for="(rowData, rowIdx) in dataTransfer"
        :key="rowIdx"
        class="tbody-row"
        :style="{
          height: `${rowHeight}px`,
          backgroundColor: rowData.idx & 1 ? oddRowBg : evenRowBg
        }"
      >
        <div
          v-if="showIdx"
          class="tbody-col tbody-idx"
          :style="{ width: `${(1 / allColumnFlex) * 100}%` }"
        >
          {{ rowData.idx }}
        </div>
        <div
          v-for="(colData, colIdx) in rowData.data"
          :key="colIdx"
          class="tbody-col"
          :style="{
            width: `${((columnFlex[colIdx] || 1) / allColumnFlex) * 100}%`
          }"
        >
          {{ colData }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixin.scss' as *;
.scroll-table {
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  line-height: 1.15;

  .thead {
    @include flex-start-center;
    position: relative;
    z-index: 99;
    padding: 0 10px;

    .thead-col {
      text-align: center;
      padding: 2px 0;
      word-break: keep-all;
    }
  }

  .tbody {
    background-color: transparent;
    transition: transform 0.3s;
    will-change: transform;

    .tbody-row {
      @include flex-start-center;
      padding: 0 10px;
      transition: height 0.3s;

      .tbody-col {
        text-align: center;
        padding: 2px 0;
        word-break: keep-all;
      }
    }
  }
}
</style>
