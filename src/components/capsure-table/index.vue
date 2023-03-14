<script lang="ts">
export default {
  name: 'CapsureTable'
}
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

export interface CapsureTableProps {
  /**
   * 表格内容
   */
  data: Array<{
    name: string
    value: string
  }>
  /**
   * 单位
   * @default ''
   */
  unit?: string
  /**
   * 是否展示值
   * @default true
   */
  showValue?: boolean
  /**
   * colors list
   */
  colors?: string[]
}

const props = withDefaults(defineProps<CapsureTableProps>(), {
  rowHeight: 1,
  unit: '',
  showValue: true,
  colors: () => [
    '#37a2da',
    '#32c5e9',
    '#67e0e3',
    '#9fe6b8',
    '#ffdb5c',
    '#ff9f7f',
    '#fb7293'
  ]
})

const capsuleLength = ref<any[]>([])
const capsuleValue = ref<any[]>([])
const labelData = ref<any[]>([])
const labelDataLength = ref<any[]>([])

onMounted(() => {
  capsuleValue.value = props.data.map(({ value }) => value)
  const maxValue = Math.max(...capsuleValue.value)
  capsuleLength.value = capsuleValue.value.map((v) =>
    maxValue ? v / maxValue : 0
  )
  const oneFifth = maxValue / 5
  labelData.value = Array.from(
    new Set(new Array(6).fill(0).map((v, i) => Math.ceil(i * oneFifth)))
  )
  labelDataLength.value = Array.from(labelData.value).map((v) =>
    maxValue ? v / maxValue : 0
  )
})
</script>

<template>
  <div class="capsule-chart">
    <div class="label-column">
      <div v-for="item in data" :key="item.name" class="label-column-value">
        {{ item.name }}
      </div>
      <div class="label-column-value">&nbsp;</div>
    </div>

    <div class="capsule-container">
      <div
        class="capsule-item"
        v-for="(capsule, index) in capsuleLength"
        :key="index"
      >
        <div
          class="capsule-item-column"
          :style="`width: ${capsule * 100}%; background-color: ${
            colors[index % colors.length]
          };`"
        >
          <div v-if="showValue" class="capsule-item-value">
            {{ capsuleValue[index] }}
          </div>
        </div>
      </div>

      <div class="unit-label">
        <div v-for="(label, index) in labelData" :key="label + index">
          {{ label }}
        </div>
      </div>
    </div>

    <div class="unit-text" v-if="unit">
      {{ unit }}
    </div>
  </div>
</template>

<style lang="scss">
@use '../../styles/mixin.scss' as *;

.capsule-chart {
  @include border-box;
  display: flex;
  position: relative;
  padding: 10px;
  color: #fff;

  .label-column {
    @include border-box;
    @include flex-column;
    justify-content: space-between;
    padding-right: 10px;
    text-align: right;
    font-size: 12px;

    .label-column-value {
      height: 20px;
      line-height: 20px;
    }
  }

  .capsule-container {
    @include flex-column;
    flex: 1;
    justify-content: space-between;
  }

  .capsule-item {
    box-shadow: 0 0 3px #999;
    height: 10px;
    margin: 5px 0px;
    border-radius: 5px;

    .capsule-item-column {
      @include flex-end-center;
      position: relative;
      height: 8px;
      margin-top: 1px;
      border-radius: 5px;
      transition: all 0.3s;

      .capsule-item-value {
        font-size: 12px;
        transform: translateX(100%);
      }
    }
  }

  .unit-label {
    @include flex-space-between;
    height: 20px;
    font-size: 12px;
    position: relative;
  }

  .unit-text {
    text-align: right;
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    line-height: 20px;
    margin-left: 10px;
  }
}
</style>
