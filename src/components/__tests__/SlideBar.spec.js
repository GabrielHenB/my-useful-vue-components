import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SlideBar from '../SlideBar.vue'

describe('SlideBar', () => {
  it('renders properly', () => {
    const wrapper = mount(SlideBar, { props: { name: 'vitest' } })
    expect(wrapper.text()).toContain('vitest')
  })
})
