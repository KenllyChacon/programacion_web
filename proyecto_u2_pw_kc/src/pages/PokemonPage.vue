<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-if="pokemonCorrecto">
    <h1>!Quien es este pokemon!</h1>
    <PokemonImg :idPokemon="pokemonCorrecto.id" :mostrarPokemon="false"/>
    <PokemonOpts :pokemons="pokemonArr"/>
  </div>
</template>

<script>
import PokemonImg from "/src/components/PokemonImg.vue"
import PokemonOpts from "/src/components/PokemonOpts.vue"
import obtenerPokemonsFachada from "/src/js/obtenerPokemons.js"

export default {
  name: "PokemonPage",
  components: {
    PokemonImg,
    PokemonOpts,
    mostrarPokemon:false
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null
    }
  },
  mounted() {
    this.cargaPokemonInicial()
  },
  methods: {
    async cargaPokemonInicial() {
      console.log("mounted")
      const vec = await obtenerPokemonsFachada()
      console.log("Desde pagina princiapl")
      console.log(vec)
      this.pokemonArr = vec

      const numero = Math.floor(Math.random() * 4)
      console.log(numero)

      this.pokemonCorrecto = this.pokemonArr[numero]
    }
  }
}
</script>

<style scoped>

</style>
