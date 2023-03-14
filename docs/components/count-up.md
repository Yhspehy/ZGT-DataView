---
outline: deep
---

<!-- markdownlint-disable-next-line -->
<script setup>
import CountUpExample from './example/CountUp.vue'
</script>

# CountUp

数字滚动组件，基于[countup.js](https://github.com/inorganik/countUp.js/)

## 基础

```js
<count-up :start-val="start" :end-val="end" />
```
<!-- markdownlint-disable-next-line -->
<count-up-example></count-up-example>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|------|---|---|
| `end-val` | 结束数值 | `number \| string` | 必填 |  |
| `start-val` | 开始数值 |  `number \| string` |  |  |
| `duration` | 动画时长，单位 s | `number \| string` | 2.5 |  |
| `decimal-places` | 小数点位数 | number | 0 |  |
| `autoplay` | 是否自动计数 | boolean | true |  |
| `loop` | 循环次数，有限次数 / 无限循环 | `boolean \| number \| string` | false |  |
| `delay` | 循环, 延时，单位 s | number | 0 |  |
| `options` | countup 配置项 | `CountUpOptions` | undefined |  |

## CountUpOptions

```js
  startVal?: number; // number to start at (0)
  decimalPlaces?: number; // number of decimal places (0)
  duration?: number; // animation duration in seconds (2)
  useGrouping?: boolean; // example: 1,000 vs 1000 (true)
  useIndianSeparators?: boolean; // example: 1,00,000 vs 100,000 (false)
  useEasing?: boolean; // ease animation (true)
  smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number; // amount to be eased for numbers above threshold (333)
  separator?: string; // grouping separator (',')
  decimal?: string; // decimal ('.')
  // easingFn: easing function for animation (easeOutExpo)
  easingFn?: (t: number, b: number, c: number, d: number) => number;
  formattingFn?: (n: number) => string; // this function formats result
  prefix?: string; // text prepended to result
  suffix?: string; // text appended to result
  numerals?: string[]; // numeral glyph substitution
  enableScrollSpy?: boolean; // start animation when target is in view
  scrollSpyDelay?: number; // delay (ms) after target comes into view
  scrollSpyOnce?: boolean; // run only once
  onCompleteCallback?: () => any; // gets called when animation completes
  plugin?: CountUpPlugin; // for alternate animations
```
