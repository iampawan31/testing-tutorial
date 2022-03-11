import Nav from '@/components/Nav'
import { mount } from '@vue/test-utils'

describe('Nav.vue', () => {
  it('renders a profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLoggedIn: true,
        }
      },
    })

    const profileLink = wrapper.get('#profile')
    expect(profileLink.text()).toEqual('Profile')
  })

  it('should not render a profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLoggedIn: false,
        }
      },
    })

    expect(wrapper.find('#profile').exists()).toBe(false)
  })
})
