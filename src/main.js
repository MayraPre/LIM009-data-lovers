/* Manejo del DOM */

const totalPokemons = POKEMON.pokemon;

const a= POKEMON.pokemon[0];
for(let i=0; i<totalPokemons.length;i++){
    const e=totalPokemons[0];
    console.log(e.name);
}


/*function filtrar(a){
    return a.type
}
const result = totalPokemons.filter(filtrar);
console.log(result[0].type);*/

/*function tipo(tipo){
    return `
    <h4> Tipo </h4>
    <ul class="tipo">
    ${tipo.map((tipo)=>`<li>${tipo}</li>`).join('')}
    </ul>
    `
}

function pokeTemplate(pok){
    return `
    <div class="Pokemon">
    <img class="pok-img" src="${pok.img}">
    <h2 class="pok-name">${pok.name}<h2>
    ${pok.type ? tipo(pok.type) : ''}
  </div>`
}

document.getElementById("app").innerHTML= 
   `<h1 class="app-title"> Pokemons (${totalPokemons.length} results)</h1>
   ${totalPokemons.map(pokeTemplate).join('')}
   <p class="footer">These ${totalPokemons.length}</p>
`
*/

/*const idPokemon = (totalPokemons)=>{
    var arr=[];
    var properties=Object.keys(totalPokemons);
    for(var i=0; i<properties.length;i++){
        arr.push(properties[0],totalPokemons[properties[0]]);
        console.log(arr);
}return arr;
}

/*
for(var i=0; i<2; i++){
   
}return */

/*const idPokemon = (POKEMON)=>{
  var array2d=[];
  var properties =Object.keys(POKEMON);
  for(var i=0; i<properties.length;i++){
    array2d.push([properties[0],POKEMON[properties[0]]]);
  }
  return array2d;
}
console.log(array2d);*/

