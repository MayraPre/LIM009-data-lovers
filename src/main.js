
const totalPokemons = POKEMON.pokemon;
const arrListaPokemones= pokemon.listaPokemons(totalPokemons);
const contenedor=document.getElementById("contenedor");
const mostrarPokemones=document.getElementById("mostrarPokemones");
const pokemonesFiltrados = document.getElementById("tiposPokemon");
const orden=document.getElementById("orden-pokemon");
const limpiar=document.getElementById("limpiar");
const promedio=document.getElementById("promedio");

//Imprimir lista de pokemones
const listaDePokemones = (data) => {
	let mostrar = '';
	for (let i = 0; i < data.length; i++) {
    box = `
    <div>
	<img  src="${ data[i].img}" />
	<p> Nombre : ${ data[i].name}</p>
	<p> Tipo : ${ data[i].type}</p>
	<p> Altura: ${ data[i].height}</p>
	<p> Peso: ${ data[i].weight}</p> 
	<p> Caramelos: ${ data[i].candy_count}</p>
	<p> Huevo: ${data[i].egg}</p>
	<p> Debilidades: ${data[i].weaknesses}</p>
	<p> Evolución: ${data[i].next_evolution}</p>
	</div>
`;
	mostrar += box;
	};
	contenedor.innerHTML = mostrar;
}

//Mostrar pokemones
mostrarPokemones.addEventListener("click", function(){
  listaDePokemones(arrListaPokemones)
});

//Mostrar los pokemones por orden A-Z Z-A
orden.addEventListener("change",()=>{
  const ordenando= pokemon.ordenPokemones(totalPokemons, orden.value);
	listaDePokemones(ordenando);
} );

//Filtrar pokemones por tipo
pokemonesFiltrados.addEventListener("change", () => {
	const filtrandoPokemones = pokemon.filtrarPokemones(totalPokemons, pokemonesFiltrados.value);
	listaDePokemones(filtrandoPokemones);
});

//limpiar la pantalla
limpiar.addEventListener("click",()=>{
  contenedor.innerHTML=" ";
})

//Promedio de avg
promedio.innerHTML=computeStats(totalPokemons);


