console.log('Running');
let pokeList = document.querySelector('.ten-poke-list');


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