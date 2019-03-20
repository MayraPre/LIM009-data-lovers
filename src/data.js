/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

/*const idPokemon = (object)=>{
   
  var array2d=[];
  var properties =Object.keys(object);
  for(var i=0; i<properties.length;i++){
    array2d.push([properties[0],object[properties[0]]]);
  }
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

const namePokemon=()=>{
  
}