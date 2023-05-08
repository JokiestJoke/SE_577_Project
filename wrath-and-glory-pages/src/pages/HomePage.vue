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
import { onMounted, ref } from 'vue';
import {StudentApiInterface} from './ApiInterfaces.ts';
import axios from 'axios';

//Most code goes here
let studentData = ref<StudentApiInterface>([])

onMounted(async () => {
  console.log("Page 1 mounted")

  //this is where to go and get the student data
  let allStudentsURI = 'http://localhost:9500/students'

  //Use axios to load the student data - readup on await to make
  //async calls easier
  let studentAPI = await axios.get<StudentApiInterface>(allStudentsURI)

  //if OK, set the studentData variable, so that we can render in the ui
  if(studentAPI.status == 200){
    studentData.value = studentAPI.data
  }
})
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