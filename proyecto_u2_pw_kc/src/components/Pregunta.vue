<template>
  <h1>Pregunta </h1>
  <img v-if="img" v-bind:src="img">
  <div class="fondo-dark"></div>

  <div class="container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta">
    <p>Recuerda termnar con un signo de interrogacion (?)</p>

    <div>
      <h2>{{ question }}</h2>
      <h1>{{respuesta}}</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: "Pregunta",
  data() {
    return {
      question: '',
      respuesta: null,
      img: null
    }
  },
  watch: {
    question(value, oldValue) {
      console.log(value)
      console.log(oldValue)
      if (!value.includes('?')) return
        console.log('Vamos a consumir el API')
      //Consumo del API
      this.consumirAPI()
    }
  },
  methods:{
    async consumirAPI() {
      this.respuesta='Pensando..'
      const {answer,forced,image} = await fetch('https://yesno.wtf/api').then(result => result.json())
      this.respuesta='Pensando...'
      console.log(answer)
      console.log(forced)
      console.log(image)
      this.respuesta=answer
      this.img = image
      console.log('image')
      console.log(image)
    }
  }

}
</script>

<style scoped>
img, .fondo-dark {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0px;
  top: 0px;
}

.fondo-dark {
  background-color: rgba(0, 0, 0, 0.5);
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1, h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}

.container {
  position: relative;
  z-index: 99;
}
</style>