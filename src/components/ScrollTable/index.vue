<script lang="ts">
export default {
  name: 'ScrollTable'
}
</script>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

export interface ScrollTableProps {
  data: any[] // 表单数据
  columnFlex: number[] // 每栏的flex值，默认为1
  header?: string[] | null // 表头内容
  showIdx?: boolean // 是否展示序号，默认是false
  animation?: boolean // 是否滚动，默认是true
  duration?: number // 滚动动画间隔，默认为3000
  headerBg?: string // header的背景
  oddRowBg?: string // 单数行的背景
  evenRowBg?: string // 双数行的背景
  rowNum?: number // 表单可以存放几行,其中包括了header一行
  rowHeightFixed?: number // 固定的每行高度，写死，px单位
}

const props = withDefaults(defineProps<ScrollTableProps>(), {
  header: null,
  showIdx: false,
  animation: true,
  duration: 3000,
  headerBg: '#002c8a',
  oddRowBg: '#0101c32',
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
    lastIntervalId = setInterval(() => {
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
    }
  }
)

watch(
  () => props.rowNum,
  (val) => {
    if (val) {
      calcRowHeight()
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
      <div v-if="showIdx" class="thead-col thead-idx" style="flex: 0 0 5rem">
        序号
      </div>
      <div
        v-for="(h, hIdx) in header"
        :key="h"
        class="thead-col"
        :style="{ flex: columnFlex[hIdx] || 1 }"
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
        <div v-if="showIdx" class="tbody-col tbody-idx" style="flex: 0 0 5rem">
          {{ rowData.idx }}
        </div>
        <div
          v-for="(colData, colIdx) in rowData.data"
          :key="colIdx"
          class="tbody-col"
          :style="{
            flex: columnFlex[colIdx] || 1
          }"
        >
          {{ colData }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/mixin.scss' as *;
.scroll-table {
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;

  .thead {
    @include flex-start-center;
    position: relative;
    z-index: 99;
    padding: 0 10px;

    .thead-col {
      @include ellipsis;
      text-align: center;
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
        @include ellipsis;
        text-align: center;
      }
    }
  }
}
</style>
