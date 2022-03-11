<template>
  <div id="app">
    <Nav />
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    TodoApp,
    Nav,
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  padding-right: 5rem;
  padding-left: 5rem;
  height: 100vh;
}
</style>
