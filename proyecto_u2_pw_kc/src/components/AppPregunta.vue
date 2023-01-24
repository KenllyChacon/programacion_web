<template>
  <Pregunta/>
</template>

<script>
import Pregunta from '/src/components/Pregunta.vue'
export default {
  name: 'AppPregunta',
  components: {
    Pregunta
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
