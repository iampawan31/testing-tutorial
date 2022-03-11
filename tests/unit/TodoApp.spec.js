import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TodoApp)
  })

  it('should render todo text', () => {
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('Get Milk')
  })

  it('should add new todo', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  it('add new todo input clears after adding a new todo', async () => {
    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.find('[data-test="new-todo"]').text()).toEqual('')
  })

  it('should be able to complete a todo', async () => {
    await wrapper.get('[data-test="todo-checkbox"]').setChecked(true)
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })

  it('unfinished todo should not be marked complete', async () => {
    expect(wrapper.get('[data-test="todo"]').classes()).toContain(
      'not-completed'
    )
  })
})
