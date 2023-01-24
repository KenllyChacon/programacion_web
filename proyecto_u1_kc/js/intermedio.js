function prueba(){
  // var val const
  let valor='Valor';
  let valorSRC=document.getElementById('img1').src;
  console.log(valorSRC)
  const IVA=12;
  console.log(valor)
  console.log(IVA)

  if(valorSRC.includes('dofus.jpg')){

  }

  let dias=["Lunes","Martes","Miercoles"]
  dias.push("Jueves")
  console.log(dias)

  // desestructuracion
  const diasCompletos=["Lunes","Martes","Miercoles","Jueves","viernes","Sabado","Domingo"]
  const [dia1,dia2,dia3,dia4,dia5,dia6,dia7,dia8] = diasCompletos;
  console.log(dia5)
  console.log(dia8)

  const [d1,d2]=["Lunes","Martes","Miercoles","Jueves","viernes","Sabado","Domingo"]
  console.log(d1)
  console.log(d2)

  // Manejo de objetos
  const kenlly={
    cedula: "1725646549",
    nombre: "Kenlly",
    apellido: "Chacon",
    edad: 33,
    ciudad: "Quito"
  }

  console.log(kenlly)

  // objetos compuestos
  const persona={
    cedula: "1725646549",
    nombre: "Kenlly",
    apellido: "Chacon",
    edad: 33,
    ciudad: "Quito",
    direccion:{
      calle: "Av. America",
      numero: "Oe3-56",
      referencia:"Frente a la UCE"
    },
    materia:{
      nombre:"PWEB",
      creditos:6,

    }
  }
  console.log(persona)

  // Desestructuracion de objetos
  const{cedula,ciudad}=kenlly
  console.log(cedula)
  console.log(ciudad)

  const{materia} = persona
  console.log(materia)

  const{nombre} = materia
  console.log(nombre)

  const {edad,ciudad1,hobby }={
    cedula: "1725646549",
    nombre: "Kenlly",
    apellido: "Chacon",
    edad: 33,
    ciudad: "Quito"
  }
  console.log(edad)
  console.log(ciudad1)
  console.log(hobby)

  let val = this.funcion2()
  console.log(val)
}

function funcion2(){
  console.log("Segunda funcion")
  return 'valor'
}
