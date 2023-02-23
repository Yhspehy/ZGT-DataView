<script setup lang="ts">
export interface Props {
  position?: string
}

withDefaults(defineProps<Props>(), {
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

.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  transform: translateX(-100%);
  animation: divide-animation-bottom 4s linear infinite;
}

.right {
  right: 0;
  top: 0;
  height: 100%;
  width: 2px;
  transform: translateY(-100%);
  animation: divide-animation-right 4s linear infinite;
}

@keyframes divide-animation-bottom {
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

@keyframes divide-animation-right {
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
