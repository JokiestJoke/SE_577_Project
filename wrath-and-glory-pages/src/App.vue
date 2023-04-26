<script>
//import { RouterLink, RouterView } from 'vue-router'
//import RouterLink from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
//import AboutGilead from './pages/AboutGilead'
</script>

<template>
  <div id="mainContainer">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">The Gilead System</router-link> |
        <router-link to="/character-creation">Character Creation</router-link>
      </div>
    </header>

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

mainContainer {
  display: flex;
  flex-direction: column;
}

nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;

  justify-content: center;
}
nav a.router-link-exact-active {
  color: var(--color-text);
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
