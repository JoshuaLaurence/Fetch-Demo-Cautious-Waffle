//Grab access to body element
const designPokemonLayout = require("./pokemonDesign")

async function fetchPokemon(pokemonID) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        const data = await response.json()
        designPokemonLayout(data)
    } catch (error) {
        return error
    }
}


fetchPokemon()
