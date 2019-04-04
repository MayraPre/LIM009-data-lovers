/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//Lista de pokemones y caracteristicas
const listaPokemons=(data)=>{
  let arraLista=[];
   for(let i=0; i<data.length;i++){
     arraLista.push({name: data[i].name, img: data[i].img, type: data[i].type,
       height:data[i].height,weight:data[i].weight, candy_count:data[i].candy_count,egg:data[i].egg,
       weaknesses:data[i].weaknesses,next_evolution:data[i].next_evolution})
      }return arraLista;
};

//funcion filtra los tipos de pokemones
const filtrarPokemones = (data, tipo) => {
	let arrayFiltra = [];
	arrayFiltra = data
		.filter((elemento) => {
			for (let i = 0; i < elemento.type.length; i++) {
				if (elemento.type[i] === tipo) {
					return 1;
				}
			}
		});
	return arrayFiltra;
}

//Funcion ordenar pokemones asc y desc
const ordenPokemones=(data,orden)=>{
  data.sort((a,b)=>{
    if(typeof a === 'string' && typeof b === 'string'){
      a = a.toLowerCase();
      b = b.toLowerCase();  
    }  
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else if (a.name === b.name) {
      return 0;
    }
  })
   if (orden === 'ordenaz') {
		 return data;
    }
  else if(orden==='ordenza')
     return data.reverse();
}

/* Ordenado ascendente */
//console.log(namePokemon.sort(sortArrs))

const computeStats=(data,tipo)=>{
   porcentaje=tipo.length/data.length;
   return porcentaje.toFixed(3);
}

window.pokemon = {listaPokemons, filtrarPokemones, ordenPokemones,computeStats};

