/*
function encender(){
  document.getElementById('img').src='/img/focoE.png'
}

function apagar(){
  document.getElementById('img').src='/img/focoA.png'
}
*/
/*contains
include*/
function foco(){
  var e = document.getElementById('img').src
  e.includes('/img/focoA')
  if(e === '/img/focoA'){
    document.getElementById('img').src='/img/focoE.png'
  }else{
    document.getElementById('img').src='/img/focoA.png'
  }
}
