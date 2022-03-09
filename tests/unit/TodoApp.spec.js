import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  it('should render todo text', () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('Get Milk')
  })

  it('should add new todo', async () => {
    const wrapper = mount(TodoApp)

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  it('add new todo input clears after adding a new todo', async () => {
    const wrapper = mount(TodoApp)
    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.find('[data-test="new-todo"]').text()).toEqual('')
  })
})
