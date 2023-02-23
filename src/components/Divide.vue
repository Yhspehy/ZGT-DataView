<template>
  <div class="divide"></div>
</template>

<style lang="scss">
.divide {
  width: 100%;
  height: 2px;
  background: #3faacb;
  transform: translateX(-100%);
  animation: divide-animation 4s linear infinite;
}

@keyframes divide-animation {
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
</style>
