import { mount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Message, {
      propsData: { msg: ' Hello World' },
    })

    expect(wrapper.text()).toContain('Hello World')
  })
})
