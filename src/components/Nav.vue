<template>
  <nav>
    <a href="/" id="home">Home</a>
    <a href="/profile" id="profile" v-if="isLoggedIn">Profile</a>
  </nav>
</template>

<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      isLoggedIn: false,
    }
  },
}
</script>

<style>
nav {
  display: flex;
  max-width: 1280px;
  padding: 1rem 5rem;
  margin-bottom: 2rem;
  background-color: green;
}

nav a {
  color: #ffffff;
  text-decoration: none;
}

nav a:hover {
  color: #a5a4a4;
}
</style>
