<template>
  <h1>Juego</h1>

  <div v-if="mostrarJuego">
    <div id="contenedor-juego" v-if="banderaJuego">
      <p>Puntaje: {{ puntaje }}</p>
      <p>Intento: {{ intento }}</p>
    </div>

    <div v-if="mostrarInicio">
      <img src="../img/negro.png" alt="N">
      <img src="../img/negro.png" alt="N">
      <img src="../img/negro.png" alt="N">
    </div>
    <div v-if="!mostrarInicio">
      <img :src="this.poke1.ruta" alt="N">
      <img :src="this.poke2.ruta" alt="N">
      <img :src="this.poke3.ruta" alt="N">
    </div>
    <div>
      <p>{{ pokemonTexto1 }}</p>
      <p>{{ pokemonTexto2 }}</p>
      <p>{{ pokemonTexto3 }}</p>
    </div>

    <button v-on:click="jugar()">Jugar</button>
  </div>
  <div id="mostrarGanador" v-if="mostrarGanador">
    <h1>Puntaje: {{puntaje}}</h1>
    <img src="../img/congratulations.gif" alt="N">
    <h1>Felicitaciones has ganado un premio de $10.000.00</h1>
    <button v-on:click="nuevoJuego()">Nuevo Juego</button>
  </div>
  <div id="mostrarPerdedor" v-if="mostrarPerdedor">
    <h1>Haz utilizado tus 5 intentos</h1>
    <h1>El juego ha terminado, intentalo nuevamente</h1>
    <button v-on:click="nuevoJuego()">Nuevo Juego</button>
  </div>

</template>

<script>
export default {
  name: "Juego",
  data() {
    return {
      puntaje: 0,
      intento: 0,
      banderaJuego: true,

      pokemonTexto1: "XXXXXXXXXX",
      pokemonTexto2: "XXXXXXXXXX",
      pokemonTexto3: "XXXXXXXXXX",

      poke1: null,
      poke2: null,
      poke3: null,

      mostrarInicio: true,
      mostrarJuego: true,
      mostrarGanador: false,
      mostrarPerdedor: false
    }
  },
  methods: {
    async jugar() {
      const numAle1 = this.obtenerAleatorio(3);
      const numAle2 = this.obtenerAleatorio(3);
      const numAle3 = this.obtenerAleatorio(3);

      const vectorPlantilla = await this.construirPokemons()


      this.poke1 = vectorPlantilla[numAle1]
      this.poke2 = vectorPlantilla[numAle2]
      this.poke3 = vectorPlantilla[numAle3]

      this.pokemonTexto1 = this.poke1.nombre
      this.pokemonTexto2 = this.poke2.nombre
      this.pokemonTexto3 = this.poke3.nombre

      this.mostrarInicio = false
      this.intento++

      this.controlIntentos()

    },
    controlIntentos() {
      this.aumentarPuntaje()
      if (this.intento === 6 && this.puntaje>9) {
        this.mostrarJuego = false
        this.mostrarGanador = true
      }else if (this.intento === 6 && this.puntaje<10){
        this.mostrarJuego = false
        this.mostrarPerdedor = true
      }

    },
    aumentarPuntaje() {
      if (this.pokemonTexto1 === this.pokemonTexto2 && this.pokemonTexto1 === this.pokemonTexto3) {
        this.puntaje = this.puntaje + 5
      } else if (this.pokemonTexto1 === this.pokemonTexto2 || this.pokemonTexto1 === this.pokemonTexto3 || this.pokemonTexto2 === this.pokemonTexto3) {
        this.puntaje = this.puntaje + 2
      }
    },
    obtenerAleatorio(tope) {
      return Math.floor(Math.random() * tope) + 1
    },
    async consumirAPI(id) {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(r => r.json())
      return data
    },
    definirPokemons() {
      const vectorIdPokemons = [2, 6, 80, 15]
      return vectorIdPokemons
    },
    async construirPokemons() {
      const vectorObjetoPoke = []
      const vector = this.definirPokemons()
      for (let i = 0; i < 4; i++) {
        const idPokemon = vector[i]
        const objp = await this.construirObjetoPokemonImg(idPokemon)
        vectorObjetoPoke.unshift(objp)
      }
      return vectorObjetoPoke
    },
    async construirObjetoPokemonImg(id) {
      const {name} = await this.consumirAPI(id)
      const objetoPoke = {
        ruta: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg',
        nombre: name
      }
      return objetoPoke
    },
    nuevoJuego() {
      this.mostrarJuego = true
      this.mostrarPerdedor = false
      this.mostrarGanador = false
      this.mostrarInicio = true
      this.pokemonTexto1 = "XXXXXXXXXX"
      this.pokemonTexto2 = "XXXXXXXXXX"
      this.pokemonTexto3 = "XXXXXXXXXX"
      this.puntaje = 0
      this.intento = 0
    }
  }
}
</script>

<style scoped>

#mostrarGanador{
  color: blue;
}

#mostrarPerdedor{
  color:red;
}

img {
  margin: 0px 50px;
  width: 300px;
  height: 350px;

}

p {
  display: inline;
  margin: 0px 50px;
}

button {
  margin-top: 90px;
}
</style>