<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
export interface Props {
  header?: string[]
  columnFlex: number[]
  data: any[]
  rowHeight?: number
}

const props = withDefaults(defineProps<Props>(), {
  rowHeight: 45
})

const scrollTableRef = ref<HTMLInputElement | null>(null)
const tbodyRef = ref<HTMLInputElement | null>(null)

// 将px转换成rem
const rowHeightTransfer = computed(
  () => (props.rowHeight / document.body.clientWidth) * 100
)

const dataTransfer = computed(() => {
  const r = props.data.map((el, idx) => ({
    data: [...el],
    idx: idx + 1
  }))
  return [...r, ...r]
})

const animationIdx = ref(0)

onMounted(() => {
  setInterval(() => {
    animationIdx.value++
    if (animationIdx.value === props.data.length) {
      setTimeout(() => {
        tbodyRef.value!.style.transitionProperty = 'none'
        animationIdx.value = 0
        setTimeout(() => {
          tbodyRef.value!.style.transitionProperty = 'transform'
        }, 100)
      }, 500)
    }
  }, 1000)
})
</script>

<template>
  <div class="scroll-table" ref="scrollTableRef">
    <div
      v-if="header && header.length > 0"
      class="thead"
      :style="{ height: `${rowHeightTransfer}rem` }"
    >
      <div class="thead-col" style="flex: 0 0 5rem">序号</div>
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
        transform: `translateY(-${rowHeightTransfer * animationIdx}rem)`
      }"
    >
      <div
        v-for="(rowData, rowIdx) in dataTransfer"
        :key="rowIdx"
        class="tbody-row"
        :style="{ height: `${rowHeightTransfer}rem` }"
      >
        <div class="tbody-col" style="flex: 0 0 5rem">{{ rowData.idx }}</div>
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
    background-color: #00baff;
    position: relative;
    z-index: 99;

    .thead-col {
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
