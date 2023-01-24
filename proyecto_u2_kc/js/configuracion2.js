const numeros = [1, 2, 3, 4, 5]
console.log(numeros)

const frases = [{texto: 'De tal palo tal astilla1', autor: 'Pepito Perez1'},
  {texto: 'De tal palo tal astilla2', autor: 'Pepito Perez2'},
  {texto: 'De tal palo tal astilla3', autor: 'Pepito Perez3'},
  {texto: 'De tal palo tal astilla4', autor: 'Pepito Perez4'},
  {texto: 'De tal palo tal astilla5', autor: 'Pepito Perez5'},
  {texto: 'De tal palo tal astilla6', autor: 'Pepito Perez6'},
  {texto: 'De tal palo tal astilla7', autor: 'Pepito Perez7'},
  {texto: 'De tal palo tal astilla8', autor: 'Pepito Perez8'}
]

console.log(frases)

console.log(Vue)
const app = Vue.createApp({
  data(){
    return{
      arreglo: frases,
      // fraseNueva : 'Ingrese'
      fraseNueva : null
    }
  },
  methods:{
    agregarFrase(charCode){
      console.log('Mensaje')
      console.log(charCode)

      if(charCode !== 13) return //13 es el enter

      const fraseObjetoNueva = {
        texto: this.fraseNueva,
        autor: 'Kenlly'
      }

      this.arreglo.unshift(fraseObjetoNueva)
    },
    agregarFraseModificador(event){
      console.log(' desestructurado')
      console.log(event.charCode)

      const fraseObjetoNueva = {
        texto: this.fraseNueva,
        // autor: 'Kenlly'
      }

      this.arreglo.unshift(fraseObjetoNueva)
    }
  }
})

app.mount('#myApp2')
