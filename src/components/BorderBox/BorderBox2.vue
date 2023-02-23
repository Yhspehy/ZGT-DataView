<script setup lang="ts">
defineProps<{
  boxStyle?: string
}>()
</script>

<template>
  <div class="borderBox2" :style="boxStyle">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    <div class="line4"></div>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.borderBox2 {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;

  .line1,
  .line2,
  .line3,
  .line4 {
    border: 1px solid #2862b7;
  }

  .line1 {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
  }
  .line2 {
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
  }
  .line3 {
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
  }
  .line4 {
    position: absolute;
    top: 16px;
    left: 16px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
  }
}
</style>
