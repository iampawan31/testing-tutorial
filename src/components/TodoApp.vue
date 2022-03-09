<template>
  <div>
    <div data-test="todo" :key="todo.id" v-for="todo in todos">
      {{ todo.text }}
    </div>
    <form @submit.prevent="addNewTodo" data-test="form">
      <input type="text" data-test="new-todo" name="todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodo: '',
      todos: [{ id: 1, text: 'Get Milk', completed: false }],
    }
  },
  methods: {
    addNewTodo(e) {
      e.preventDefault()
      this.todos.push({
        text: this.newTodo,
        id: this.todos.length + 1,
        completed: false,
      })
      this.newTodo = ''
    },
  },
}
</script>

<style></style>
