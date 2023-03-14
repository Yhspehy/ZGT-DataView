---
outline: deep
---

# Decoration

Decoration组件。

<!-- markdownlint-disable -->
<script setup>
import {
  DivideLine,
  DecorationBox1,
  DecorationBox2,
  DecorationBox3
} from '../../src/components/decoration'
</script>

## DivideLine

分割线

  ```js
  <div style="height: 100px;width: 50%;position: relative;overflow: hidden;">
    <divide-line />
    <divide-line position="top" />
    <divide-line position="left" />
    <divide-line position="right" />
  </div>
  ```

  <div style="height: 100px;width: 50%;position: relative;overflow: hidden;">
    <divide-line />
    <divide-line position="top" />
    <divide-line position="left" />
    <divide-line position="right" />
  </div>

### DivideLine.API

  | 属性 | 说明 | 类型 | 默认值 | 版本 |
  |---|---|---|---|---|
  | `position` | 分割线所在位置 | 'top' | 'bottom'| 'left' : 'right' | 'bottom' |  |


## DecorationBox1

点块图

  ```js
    <decoration-box1 />
  ```

  <decoration-box1 />

### DecorationBox1.API

  | 属性 | 说明 | 类型 | 默认值 | 版本 |
  |---|---|---|---|---|
  | `color` | 小方格颜色 | [string, string] | ['#7acaec', 'transparent'] |  |
  | `rowNum` | 有几行小方格 | number | 2 |  |
  | `colNum` | 一行有几个小方格 | number | 20 |  |
  | `width` | 每个小方格的rem值 | number | 0.3 |  |
  | `gap` | 每个小方格的间距/小方格width | number | 0.5 |  |



## DecorationBox2

呼吸条

  ```js
    <decoration-box2 />
  ```

  <decoration-box2 />

### DecorationBox2.API

  | 属性 | 说明 | 类型 | 默认值 | 版本 |
  |---|---|---|---|---|
  | `color` | 小方格颜色 | string | '#7acaec' |  |
  | `colNum` | 一行有几个小方格 | number | 30 |  |
  | `width` | 每个小方格的rem值 | number | 0.3 |  |
  | `maxHeight` | 容器高度的rem值 | number | 2 |  |
  | `baseDuration` | 基础动画时间间隔 | number | 1.5 |  |



## DecorationBox3

雷达图

  ```js
    <decoration-box3 style="width:150px;height:150px;"  />
  ```

  <decoration-box3 style="width:150px;height:150px;"  />

### DecorationBox3.API

  | 属性 | 说明 | 类型 | 默认值 | 版本 |
  |---|---|---|---|---|
  | `color` | 小方格颜色 | string | '#7acaec' |  |
  | `colNum` | 一行有几个小方格 | number | 30 |  |
  | `width` | 每个小方格的rem值 | number | 0.3 |  |
  | `maxHeight` | 容器高度的rem值 | number | 2 |  |
  | `baseDuration` | 基础动画时间间隔 | number | 1.5 |  |



