<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else>
    <h1>!Quien es este pokemon!</h1>
    <PokemonImg :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrarPokemon"/>
    <!--    $event representa al objeto enviado en la segunda posicion del evento hijo validarRespuesta-->
    <PokemonOpts :pokemons="pokemonArr" @selectionPokemon="validarRespuesta($event)"/>
  </div>
  <div id="mensaje">
    <div v-if="mensajeGanar">
      <h2>Ganastes</h2>
      <buttonon v-on:click="reiniciar">Reiniciar</buttonon>
    </div>
    <div v-if="mensajePerder">
      <h2>Perdistes, el pokemon correcto era: {{pokemonCorrecto.nombre}}</h2>
      <buttonon v-on:click="reiniciar">Reiniciar</buttonon>
    </div>
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
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      mostrarPokemon: false,

      mensajeGanar: false,
      mensajePerder: false
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
    },
    validarRespuesta(pokemonSeleccionadoHijo) {
      console.log('Prueba evento')
      console.log(pokemonSeleccionadoHijo)
      this.mostrarPokemon = true
      const idSeleccionado = pokemonSeleccionadoHijo.idPoke
      console.log('Respuesta')
      console.log(idSeleccionado)
      console.log(this.pokemonCorrecto.id)
      if (idSeleccionado === this.pokemonCorrecto.id) {

        this.mensajeGanar = true
      } else {
        this.mensajePerder = true
      }

    },
    reiniciar() {
      this.pokemonArr = []
      this.cargaPokemonInicial()
      this.pokemonCorrecto = null
      this.mostrarPokemon = false
      this.mensajeGanar = false
      this.mensajePerder = false
    }
  }
}
</script>

<style scoped>

</style>
