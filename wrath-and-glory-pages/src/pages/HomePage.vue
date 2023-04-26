<template>
  <div class="home">

    <b3>
      <i>
        Free Character Builder Tool!
      </i>

    </b3>

    <p>
      Everyone knows that character creation takes a long time! Why waste valuable time,
      when the emperor needs your service now? Whether you are new to <b>Wrath & Glory</b>,
      and or role-playing, the "<b>Character Builder</b>" will act as your one stop service for
      creating new campaign ready "Tier 1" character archetypes with new player assistance.
    </p>
  </div>

  <Button text ="Get Started for Free" />
</template>

<script lang="js">
import Button from "../components/Button"
  export default {
    name: 'HomePage',
    components: {Button},
  };
</script>

<script setup lang="js">
//Most code goes here
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

b3 {
  font-size: 48px;
}
Button{
  height: 75px;
  width: 300px;
}

</style>