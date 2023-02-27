import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import ScrollTable from '../index.vue'

const sleep = (time: number) => {
  return new Promise<void>((r) => {
    setTimeout(() => {
      r()
    }, time)
  })
}

describe('ScrollTable', () => {
  it('render header', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        columnFlex: [2],
        header: ['船名航次'],
        data: [[1], [2], [3]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })

    expect(wrapper.find('.thead-col').element.textContent).toBe('船名航次')

    wrapper.unmount()
  })

  it('render data', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        columnFlex: [2],
        header: ['船名航次'],
        data: [[1], [2], [3]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })

    expect(wrapper.findAll('.tbody-row')[0].element.textContent).toBe('1')
    expect(wrapper.findAll('.tbody-row')[1].element.textContent).toBe('2')
    expect(wrapper.findAll('.tbody-row')[2].element.textContent).toBe('3')

    wrapper.unmount()
  })

  it('render column flex corrent', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        columnFlex: [3, 2, 1],
        header: ['船名航次', '截关期/开船期', '本航次集装箱数量（已发运数量）'],
        data: [
          [1, 1, 1],
          [2, 2, 2],
          [3, 3, 3]
        ],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })

    expect(wrapper.findAll('.tbody-col')[0].attributes('style')).toContain(
      'flex: 3'
    )
    expect(wrapper.findAll('.tbody-col')[1].attributes('style')).toContain(
      'flex: 2'
    )
    expect(wrapper.findAll('.tbody-col')[2].attributes('style')).toContain(
      'flex: 1'
    )

    wrapper.unmount()
  })

  it('shoule render idx column', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        showIdx: true,
        columnFlex: [2],
        header: ['船名航次'],
        data: [[1], [2], [3]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })

    expect(wrapper.find('.thead-idx').exists()).toBe(true)
    expect(wrapper.find('.tbody-idx').exists()).toBe(true)

    wrapper.unmount()
  })

  it('shoule work with headerBg', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        headerBg: 'pink',
        columnFlex: [2],
        header: ['船名航次'],
        data: [[1], [2], [3]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })

    expect(wrapper.find('.thead').attributes('style')).toContain(
      'background-color: pink'
    )

    wrapper.unmount()
  })

  it('shoule work with oddRowBg', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        oddRowBg: 'pink',
        columnFlex: [2],
        header: ['船名航次'],
        data: [[1], [2], [3]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })

    expect(wrapper.findAll('.tbody-row')[0].attributes('style')).toContain(
      'background-color: pink'
    )

    wrapper.unmount()
  })

  it('shoule work with evenRowBg', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        evenRowBg: 'pink',
        columnFlex: [2],
        header: ['船名航次'],
        data: [[1], [2], [3]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })

    expect(wrapper.findAll('.tbody-row')[1].attributes('style')).toContain(
      'background-color: pink'
    )

    wrapper.unmount()
  })

  it('should animation with duration', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        duration: 1000,
        columnFlex: [2],
        header: [
          '船名航次',
          '截关期/开船期',
          '本航次集装箱数量（已发运数量）',
          '铁路发运预计日期',
          '靠泊时间',
          '靠泊码头',
          '待发箱量'
        ],
        data: [[1], [1], [1]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })
    expect(wrapper.text()).toContain('船名航次')

    await nextTick()
    expect(wrapper.find('.tbody').attributes('style')).toContain('0px')

    await sleep(1500)
    expect(wrapper.find('.tbody').attributes('style')).toContain('50px')
    wrapper.unmount()
  })

  it('shoule not animation', async () => {
    const wrapper = mount(ScrollTable, {
      props: {
        animation: false,
        duration: 1000,
        columnFlex: [2],
        header: [
          '船名航次',
          '截关期/开船期',
          '本航次集装箱数量（已发运数量）',
          '铁路发运预计日期',
          '靠泊时间',
          '靠泊码头',
          '待发箱量'
        ],
        data: [[1], [1], [1]],
        rowNum: 2,
        rowHeightFixed: 50
      }
    })
    expect(wrapper.text()).toContain('船名航次')

    await nextTick()
    expect(wrapper.find('.tbody').attributes('style')).toContain('0px')

    await sleep(1500)
    expect(wrapper.find('.tbody').attributes('style')).toContain('0px')
    wrapper.unmount()
  })
})
