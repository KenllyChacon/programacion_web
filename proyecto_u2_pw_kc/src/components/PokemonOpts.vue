<template>
  <div class="options-container">
    <ul>
      <li v-for="poke in pokemons" :key="poke.id">{{poke.nombre}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonOpts",
  props:{
    pokemons:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
li{
  background-color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  width: 250px;
  margin-top: 10px;
  cursor: pointer;
}
.options-container{
  justify-content: center;
  display: flex;
}
</style>