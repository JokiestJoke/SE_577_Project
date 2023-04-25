<script>
//import { RouterLink, RouterView } from 'vue-router'
//import RouterLink from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
//import AboutGilead from './pages/AboutGilead'
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">The Gilead System</router-link> |
    <router-link to="/characterCreation">Character Creation</router-link>
  </div>
  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}

</style>
