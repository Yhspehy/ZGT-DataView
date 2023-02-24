<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

export interface ScrollTableProps {
  header?: string[] // 表头内容
  columnFlex: number[] // 每栏的flex值，默认为1
  data: any[] // 表单数据
  rowHeight?: number // 每行的高度，记得传rem，默认是3rem
  showIdx?: boolean // 是否展示序号，默认是false
  animation?: boolean // 是否滚动，默认是true
  duration?: number // 滚动动画间隔，默认为3000
}

const props = withDefaults(defineProps<ScrollTableProps>(), {
  rowHeight: 3,
  showIdx: false,
  animation: true,
  duration: 3000
})

const scrollTableRef = ref<HTMLInputElement | null>(null)
const theadRef = ref<HTMLInputElement | null>(null)
const tbodyRef = ref<HTMLInputElement | null>(null)

const dataTransfer = ref(
  props.data.map((el, idx) => ({
    data: [...el],
    idx: idx + 1
  }))
)

const animationIdx = ref(0)
let lastIntervalId: number | null = null

onMounted(() => {
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

/**
 * 判断是否需要滚动
 * 条件：当前数据高度超出容器高度
 * 如果超出容器高度，那么就需要将数据拷贝成2份
 */
function animationAction() {
  let availTbodyHeight = scrollTableRef.value!.clientHeight

  if (props.header && props.header.length > 0) {
    availTbodyHeight -= theadRef.value!.clientHeight
  }
  console.log(
    `availTbodyHeight: ${availTbodyHeight}, tbodyRefHeight: ${
      tbodyRef.value!.clientHeight
    }`
  )

  if (availTbodyHeight < tbodyRef.value!.clientHeight) {
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

watch(
  () => props.animation,
  (val) => {
    if (val) {
      animationAction()
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
      ref="theadRef"
      class="thead"
      :style="{ height: `${rowHeight}rem` }"
    >
      <div v-if="showIdx" class="thead-col" style="flex: 0 0 5rem">序号</div>
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
        transform: `translateY(-${rowHeight * animationIdx}rem)`
      }"
    >
      <div
        v-for="(rowData, rowIdx) in dataTransfer"
        :key="rowIdx"
        class="tbody-row"
        :style="{ height: `${rowHeight}rem` }"
      >
        <div v-if="showIdx" class="tbody-col" style="flex: 0 0 5rem">
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
    background-color: #002c8a;
    position: relative;
    z-index: 99;

    .thead-col {
      @include ellipsis;
      text-align: center;
    }
  }

  .tbody {
    background-color: transparent;
    transition: transform 0.3s;

    .tbody-row {
      @include flex-start-center;

      .tbody-col {
        @include ellipsis;
        text-align: center;
      }
    }
  }
}
</style>
