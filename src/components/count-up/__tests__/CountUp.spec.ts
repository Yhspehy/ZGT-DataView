import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CountUp from '../index.vue'

const sleep = (time: number) => {
  return new Promise<void>((r) => {
    setTimeout(() => {
      r()
    }, time)
  })
}

describe('CountUp', () => {
  it('should work with endVal and duration', async () => {
    const wrapper = mount(CountUp, {
      props: {
        endVal: 200,
        duration: 1.5
      }
    })

    expect(wrapper.find('.countup-wrap').element.children[0].textContent).toBe(
      '0'
    )
    await sleep(1600)
    expect(wrapper.find('.countup-wrap').element.children[0].textContent).toBe(
      '200'
    )

    wrapper.unmount()
  })

  it('should work with startVal', async () => {
    const wrapper = mount(CountUp, {
      props: {
        startVal: 20,
        endVal: 200,
        duration: 1.5
      }
    })

    expect(wrapper.find('.countup-wrap').element.children[0].textContent).toBe(
      '20'
    )
    await sleep(1600)
    expect(wrapper.find('.countup-wrap').element.children[0].textContent).toBe(
      '200'
    )

    wrapper.unmount()
  })

  it('should work with autoplay', async () => {
    const wrapper = mount(CountUp, {
      props: {
        autoplay: false,
        endVal: 200,
        duration: 1.5
      }
    })

    expect(wrapper.find('.countup-wrap').element.children[0].textContent).toBe(
      '0'
    )
    await sleep(500)
    expect(wrapper.find('.countup-wrap').element.children[0].textContent).toBe(
      '0'
    )

    wrapper.unmount()
  })

  it('should work with loop', async () => {
    const wrapper = mount(CountUp, {
      props: {
        loop: true,
        endVal: 200,
        duration: 1.5
      }
    })

    await sleep(2000)
    expect(
      wrapper.find('.countup-wrap').element.children[0].textContent
    ).not.toBe('200')

    wrapper.unmount()
  })

  it('should work with delay', async () => {
    const wrapper = mount(CountUp, {
      props: {
        loop: true,
        delay: 1,
        endVal: 200,
        duration: 1.5
      }
    })

    await sleep(2000)
    expect(wrapper.find('.countup-wrap').element.children[0].textContent).toBe(
      '200'
    )

    await sleep(1000)
    expect(
      wrapper.find('.countup-wrap').element.children[0].textContent
    ).not.toBe('200')

    wrapper.unmount()
  })
})
