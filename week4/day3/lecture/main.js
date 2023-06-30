console.log('Running')
let pokeList = document.querySelector('.ten-poke-list')
let pokeName = document.querySelector('#poke-of-the-day')
let pokeImg = document.querySelector('.poke-img')
pokeImg.addEventListener('click', changeSprite)
// we want to call the api with what the user searched for whenever they submit the form 

// we need to grab the form to add an event listener to it 
let form = document.querySelector('form')
form.addEventListener('submit', searchPoke)

// grab the input to get the value 
let input = document.querySelector('input')

// need a function to call the api when the form is submitted with the value of the input 
async function searchPoke(e){
    e.preventDefault()
    let searchQuery = input.value
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`);
    let poke = await response.json();
    // console.log(poke);
    pokeName.innerText = poke.name;
    // console.log(poke.sprites.front_shiny);
    pokeImg.src = poke.sprites.front_shiny;
}

async function changeSprite(){
    console.log(pokeName);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.innerText}`);
    let poke = await response.json();
    if(pokeImg.src === poke.sprites.front_shiny){
        pokeImg.src = poke.sprites.back_shiny;
    }else if(pokeImg.src === poke.sprites.back_shiny){
        console.log('here')
        pokeImg.src = poke.sprites.front_shiny;
    }

}



async function getTenPoke(){
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0') // fetching data
    let pokemon = await response.json() // convert to JSON 
    // console.log('POKEMON',  pokemon);
    for(let idx = 0; idx < pokemon.results.length; idx++){
        // console.log(pokemon.results[idx].name);
        // create a list item 
        let listItem = document.createElement('li')
        // put the name of the poke as the text for the list item 
        listItem.innerText = pokemon.results[idx].name
        // add the list item to the pokeList
        pokeList.appendChild(listItem)
    }
}
getTenPoke();