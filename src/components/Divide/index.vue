<script lang="ts">
export default {
  name: 'ScrollTable'
}
</script>

<script setup lang="ts">
export interface DivideProps {
  position?: string
}

withDefaults(defineProps<DivideProps>(), {
  position: 'bottom'
})
</script>

<template>
  <div :class="['divide', position]"></div>
</template>

<style lang="scss" scoped>
.divide {
  position: absolute;
  background: #3faacb;
}

.top {
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  transform: translateX(-100%);
  animation: divide-animation-x 6s linear infinite;
}

.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  transform: translateX(-100%);
  animation: divide-animation-x 6s linear infinite;
}

.right {
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  transform: translateY(-100%);
  animation: divide-animation-y 6s linear infinite;
}

@keyframes divide-animation-x {
  0% {
    transform: translateX(-100%);
  }
  90% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes divide-animation-y {
  0% {
    transform: translateY(-100%);
  }
  90% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
