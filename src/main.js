/* Manejo del DOM */

const totalPokemons = POKEMON.pokemon;

/* lista de nombres
for(let x=0; x<2;x++){
  console.log(totalPokemons[x].name);
}*/

/*listado de nombres de la A-Z
const arr=[];
for(let x=0; x<totalPokemons.length;x++){
  arr.push(totalPokemons[x].name);
}
console.log(arr.sort());*/

/*for(let i=0; i<totalPokemons.length;i++){
    const e=totalPokemons[0];
    console.log(e.next_evolution);
}*/

/*function filtrar(a){
    return a.type
}
const result = totalPokemons.filter(filtrar);
console.log(result[0].type);*/


const arrname=[];
for(let x=0; x<totalPokemons.length;x++){
  arrname.push(totalPokemons[x].next_evolution);
}
//console.log(arrname);

const a=arrname.forEach(function(element) {
  console.log(element);
});

const box= document.getElementById('app')
const addPokemon=(pokemones)=>{
  for(let i=0; i<pokemones.length;i++){
    box.innerHTML+=`
    <div>
       <p>${pokemones[i].name}</p>
       <figure>
       <img src="${pokemones[i].img}" alt="Foto" class="img-perfil">
       </figure>
       <p>${pokemones[i].type}</p>
       
    </div>
    `;
  }
}
addPokemon(totalPokemons);

