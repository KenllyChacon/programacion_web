console.log(Vue)

//OPTIONS API
const app = Vue.createApp({
  /* Se declaran conjunto de obciones se llama OPTIONS API
  template: ` template: es una opcion
    <h2>Hola MUNDO!!!</h2>
    <h2>Hola MUNDO!!!</h2>
    <p>{{1+1}}</p>
    `*/
  data() {
    //propiedades reactivas
    return {
      mensaje: 'Hola mundo',
      nombre: 'Kenlly',
      apellido: 'Chacon'
    }
  },
  methods: {
    cambiarNombre(event) {
      console.log(event)
      console.log("Cambiar Nombre")
      this.nombre = 'Daniel '
    },
    cambiarApellido() {
      this.apellido = 'Teran'
    }
  }
})

app.mount('#myApp')
