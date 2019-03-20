/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

/*const idPokemon =()=>{
  let nom=[];
  for(var i=0; i<POKEMON.length;i++){
    console.log(i);
    nom.push( );
  }
<<<<<<< HEAD
  return 'idPokemon';
};
console.log(POKEMON.idPokemon=idPokemon);
*/
=======
  return array2d;
}
console.log(idPokemon(POKEMON));*/

function filterPokemon(arrayPokemones,paramFilter){
  let arrFiltrado=[];
  arrayPokemones.forEach(element=>{
    if (element.type.includes(paramFilter)){
      arrFiltrado.push(element)

      
    }
  })
} console.log(POKEMON.filterPokemon=filterPokemon);
>>>>>>> 4feeb8424663fed10d74abdf122a6bc537c4051a

/*const idPokemon =()=>{
  let id=[];
  for(var i=0; i<POKEMON.pokemon.length;i++){
    console.log(id);
  }return id;
}
POKEMON.idPokemon=idPokemon;*/
