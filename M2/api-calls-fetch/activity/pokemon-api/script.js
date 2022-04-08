const colors = {
  fire: '#e77a4a',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#8d8393',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const poke_container = document.querySelector('.pokemon');
const pokeTypes = Object.keys(colors);

function getPokemonByID(id) {
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json)
    .then((result) => {
      createPokemonCard(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createPokemonCard(data) {
  const pokeList = document.createElement('div');
  pokeList.classList.add('pokemon');

  const findType = data.types.map((type) => type.type.name);
  const type = pokeTypes.find((type) => findType.indexOf(type) > -1);
  const name = data.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = colors[type];

  pokemonList.style.backgroundColor = color;

  const pokeInnerHTML = `
    <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" />
    </div>
    <div class="info">
      <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;
  pokemonList.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonList);
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const form = document.querySelector('form');
  // const btn = document.querySelector('button');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { id } = e.target;
    // const pokeID = document.getElementById('pokemon-id').value;
    // console.log(pokeID);
    getPokemonByID(id.value);
    form.reset();
  });
});
