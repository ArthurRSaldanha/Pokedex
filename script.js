const pokemonId = document.getElementById('pokemonSearch');
const searchPokemonButton = document.getElementById('searchButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonNumber = document.getElementById('pokemonNumber');
const pokemonName = document.getElementById('pokemonName');
let count = 0;

searchPokemonButton.addEventListener('click', (event) => {
    event.preventDefault();
    getPokemon(pokemonId.value.toLowerCase());
    pokemonId.value = '';
});

async function getPokemon(pokemon){
    pokemonName.innerHTML = 'loading...';
    try{

        let pokemonSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        let response = await pokemonSearch.json();
        
        pokemonImage.style.display = 'block';
        pokemonImage.src = response['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        pokemonNumber.innerHTML = `${response.id}- `;

        pokemonName.innerHTML = response.name;

        count = response.id;
    }catch(erro){
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found :(';
        pokemonNumber.innerHTML = '';
    }
}
 
prevButton.addEventListener('click', () => {
    if(count > 1){
        count--;
        getPokemon(count);
    }
})


nextButton.addEventListener('click', () => {
    count++;
    getPokemon(count);
})

getPokemon('1');


//linha de teste
