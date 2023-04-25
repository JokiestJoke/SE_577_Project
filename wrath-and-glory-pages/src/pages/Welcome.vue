<template>
  <div class="welcome">
    <h1>{{ welcomeMessage }}</h1>
    <p>
      Welcome to the <b>Wrath & Glory </b><i>Character Builder</i>. <br> Whether you are new to <b>Wrath & Glory</b>, or
      role-playing, the "<b>Character Builder</b>"<br> will act as your one stop service for
      creating new campaign ready "Tier 1" character archetypes.
    </p>
  </div>
  <div class="buttonsPanel">
    <img src="../assets/aboutWarhammerLogo.jpg">
    <Button text="About the Gilead System" />

    <img src="../assets/CharacterCreationLogo.png">
    <Button text="Character Creation" />
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  name: 'WelcomePage',
  components: {Button},
  component: {
    Button
  },
  props: {
    welcomeMessage: String
  }
}
</script>
.aboutMeLogo {

}
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>