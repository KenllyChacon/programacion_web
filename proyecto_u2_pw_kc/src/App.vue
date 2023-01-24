<template>
<!--  <PokemonPage/>-->
  <Juego/>
</template>

<script>
// import PokemonPage from '/src/pages/PokemonPage.vue'
import Juego from '/src/components/Juego.vue'
export default {
  name: 'App',
  components: {
    // PokemonPage
    Juego
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
