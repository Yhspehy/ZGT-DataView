<script lang="ts">
export default {
  name: 'ZSteps'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { NIcon } from 'naive-ui'

export interface StepsProps {
  data: any[]
  current: number
}

const props = defineProps<StepsProps>()

const list = computed(() => {
  let _list: any[] = []
  for (let i = 0; i < Math.ceil(props.data.length / 5); i++) {
    const reserve = (i - 1) % 5 === 0
    if (i > 0) {
      _list.push({
        i,
        type: 'arrow',
        reserve,
        color: i * 5 < props.current ? '#3f90f7' : 'grey'
      })
    }
    _list.push({
      i,
      type: 'data',
      reserve,
      children: props.data
        .slice(i * 5, (i + 1) * 5)
        .map((e: any, eIdx: number) => ({
          ...e,
          color: eIdx + i * 5 < props.current ? '#3f90f7' : 'grey'
        }))
    })
  }
  return _list
})
</script>

<template>
  <div
    v-for="(row, rowIdx) in list"
    :class="['z-steps-row', row.reserve && 'reserve']"
    :key="rowIdx"
  >
    <div v-if="row.type === 'arrow'" class="col-arrow">
      <n-icon size="40" :color="row.color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"
            fill="currentColor"
          ></path>
        </svg>
      </n-icon>
    </div>
    <template v-else>
      <template v-for="(el, idx) in row.children" :key="idx">
        <div v-if="idx !== 0" class="row-arrow">
          <n-icon size="40" :color="el.color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"
                fill="currentColor"
              ></path>
            </svg>
          </n-icon>
        </div>
        <div class="step" :style="{ color: el.color }">
          <div class="title">{{ el.title }}</div>
          <div class="describe">{{ el.time }}</div>
        </div>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixin.scss' as *;
.z-steps-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .step {
    @include flex-column-center;
    justify-content: center;
    width: 16%;
    margin-bottom: 10px;
    text-align: center;

    .title {
      @include bold-font;
      font-size: 26px;
    }
  }

  .row-arrow {
    width: 5%;
    transform: rotate(270deg);
  }

  .col-arrow {
    margin: 0 5%;
    margin-bottom: 10px;
  }
}

.reserve {
  flex-direction: row-reverse;

  .row-arrow {
    width: 5%;
    transform: rotate(90deg);
  }
}
</style>
