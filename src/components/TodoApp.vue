<template>
  <div class="main-wrapper">
    <div
      data-test="todo"
      :key="todo.id"
      v-for="todo in todos"
      :class="[todo.completed ? 'completed' : 'not-completed', 'todo-item']"
    >
      <div class="todo-text">
        {{ todo.text }}
      </div>
      <input
        type="checkbox"
        data-test="todo-checkbox"
        name="completed"
        class="todo-checkbox"
        v-model="todo.completed"
      />
    </div>
    <div class="form">
      <form @submit.prevent="addNewTodo" data-test="form">
        <input type="text" data-test="new-todo" name="todo" v-model="newTodo" />
      </form>
    </div>
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

<style>
.main-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 2rem;
  background-color: lightblue;
}

/* Todo */
.todo-item {
  display: flex;
  width: 100%;
  padding: 0.5rem 0.5rem;
  align-items: center;
}

.todo-item.completed {
  background-color: green;
  color: white;
}

.todo-text {
  display: flex;
  flex-grow: 1;
  font-size: 2rem;
}

.todo-checkbox {
  width: 2rem;
  height: 2rem;
}

/* Form */
.form {
  margin: 1rem 0;
}

.form input[type='text'] {
  width: 100%;
  height: 2rem;
}
</style>
