<template>
  <img alt="Vue logo" src="./assets/WrathAndGloryLogo.jpg">
  <WelcomePage msg="Wrath and Glory Character Builder"/>
</template>

<script>
import WelcomePage from './components/Welcome.vue'
export default {
  name: 'Wrath-and-Glory-Character-Creation',
  components: {WelcomePage},
  component: {
    //HelloWorld
    WelcomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
