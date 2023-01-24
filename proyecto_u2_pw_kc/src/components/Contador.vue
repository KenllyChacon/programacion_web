<template>
  <h1>Mi primer componente</h1>
  <h2>{{valorTitulo}}</h2>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <div>
    <button v-on:click="incrementar">+1</button>
    <button v-on:click="decrementar">-1</button>
  </div>
  <!--  <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>-->
</template>

<script>
export default {
  //Options API
  //1. Forma basica
  //Para poder utilizarlo afuera
  // props:['titulo','inicio'],

  //2. Forma correcta
  // props: {
  //   titulo: String,
  //   inicio: Number
  // },

  //forma avanzada
  props:{
    titulo: String,
    inicio:{
      type: Number,
      required: false,
      default: 67,
      validator(value){
        return value > 0
      }
    }
  },

  name: "Patito",
  data() {
    return {
      numero: this.inicio
    }
  },
  methods: {
    obtenerCuadrado() {
      console.log('Se calcula cuadrado')
      return this.numero * this.numero
    },
    incrementar() {
      this.numero++
/*      var cadena = 'Kenlly'
      cadena = cadena + 'Chacon'*/
      // this.numero = this.numero + 1
    },
    decrementar() {
      this.numero--
      // this.numero = this.numero -1
    }
  },
  // propiedad computada,
  computed: {
    obtenerCuadradoComputado() {
      console.log('Se calcula cuadrado Computado')
      return this.numero * this.numero
    },
    valorTitulo(){
      return this.titulo || 'valor por defecto...'
    }
  }

}
</script>

<style scoped>
button {
  background-color: #64B687;
  border-radius: 5px;
  border: 1px solid white;
  margin: 0px 5px;
  cursor: pointer;
  padding: 5px 20px;
}
button:hover{
  background-color: #5aa67b;
}
</style>