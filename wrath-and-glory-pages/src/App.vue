<script>
//import { RouterLink, RouterView } from 'vue-router'
//import RouterLink from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
//import AboutGilead from './pages/AboutGilead'
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">The Gilead System</router-link> |
      <router-link to="/character-creation">Character Creation</router-link>
    </div>

    <div id="logoContainer">
      <img id="logo" src="./assets/WrathAndGloryLogo.jpg" alt="Wrath and Glory Logo" width="400" height="250">
    </div>
  </div>

  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

logoContainer {
  display: flex;
  justify-content: center;
;
}

logo {
  display: block;
  margin: 0 auto 2rem;
}
nav {
  width: 100%;
  font-size: 24px;
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
