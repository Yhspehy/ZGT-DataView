<script setup lang="ts"></script>

<template>
  <div class="borderBox3">
    <div class="box-footer"></div>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.borderBox3 {
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    top: 0;
  }

  .box-footer .box:before,
  .box-footer:before {
    border-left: 2px solid #02a6b5;
    left: 0;
  }
  .box:after,
  .box-footer:after {
    border-right: 2px solid #02a6b5;
    right: 0;
  }

  .box-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      bottom: 0;
    }
  }
}

.borderBox3:before,
.box-footer:before {
  border-left: 2px solid #02a6b5;
  left: 0;
}
.borderBox3:after,
.box-footer:after {
  border-right: 2px solid #02a6b5;
  right: 0;
}
</style>
