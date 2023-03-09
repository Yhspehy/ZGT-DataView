<script lang="ts">
export default {
  name: 'CountUpExample'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

import CountUp from '../../../src/components/count-up/index.vue'
import { NButton } from 'naive-ui'

const start = ref(0)
const end = ref(800)

function changeEndVal() {
  start.value = end.value
  end.value = Math.random() * 1000
}
</script>

<template>
  <count-up class="count-up-container" :start-val="start" :end-val="end" />

  <n-button style="color: #fff" @click="changeEndVal">更改数字</n-button>
</template>

<style lang="scss" scoped>
.count-up-container {
  color: yellow;
  margin-bottom: 10px;
}
</style>
