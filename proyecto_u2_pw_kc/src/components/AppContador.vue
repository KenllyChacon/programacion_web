<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Este es el componente principal!!!</h1>
  <Contador titulo="Estudiante" v-bind:inicio="1"/>
  <Contador titulo="Profesor" v-bind:inicio="2"/>
</template>

<script>

import Contador from './components/Contador.vue'
export default {

  name: 'AppContador',
  components: {
    Contador
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
