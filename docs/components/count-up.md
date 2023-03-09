---
outline:deep
---

<!-- markdownlint-disable-next-line -->
<script setup>
import CountUp from '../../src/components/CountUp/index.vue'
</script>

# CountUp

数字滚动组件。

```vue
<count-up :end-val="890" />
```
<!-- markdownlint-disable-next-line -->
<count-up :end-val="890"></count-up>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|------|---|---|
| `endVal` | 结束数值 | `number \| string` |  |  |
| `startVal` | 开始数值 |  `number \| string` |  |  |
| `duration` | 动画时长，单位 s | `number \| string` | 2.5 |  |
| `decimalPlaces` | 小数点位数 | number | 0 |  |
| `autoplay` | 是否自动计数 | boolean | true |  |
| `loop` | 循环次数，有限次数 / 无限循环 | `boolean \| number \| string` | false |  |
| `delay` | 循环, 延时，单位 s | number | 0 |  |
| `options` | countup 配置项 | `CountUpOptions` | undefined |  |

## CountUpOptions

```js
startVal?: number;
decimalPlaces?: number;
duration?: number;
useGrouping?: boolean;
useIndianSeparators?: boolean;
useEasing?: boolean;
smartEasingThreshold?: number;
smartEasingAmount?: number;
separator?: string;
decimal?: string;
easingFn?: (t: number, b: number, c: number, d: number) => number;
formattingFn?: (n: number) => string;
prefix?: string;
suffix?: string;
numerals?: string[];
enableScrollSpy?: boolean;
scrollSpyDelay?: number;
scrollSpyOnce?: boolean;
```
