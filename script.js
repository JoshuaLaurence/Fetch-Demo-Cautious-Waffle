//Grab access to body element
const pokeball = document.getElementById("pokeballImage")
const pokeballDiv = document.getElementById("pokeballDiv")
const classToAdd = document.querySelector(".ballAnimation")
window.addEventListener("load", () => {
    pokeball.style.top = window.innerHeight / 2 + 100
    pokeball.classList.toggle("ballAnimation")
})

pokeball.addEventListener("click", (event) => {
    pokeball.classList.toggle("disabled")
    pokeball.src = "pokeball-open.png"
    pokeballDiv.classList.toggle("shrink")
    setTimeout(() => {
        pokeball.src = "pokeball.png"
        pokeball.classList.toggle("ballAnimation")
    }, 700)
})


const pokemonSearchBar = document.getElementById("pokemonSearchInput")

pokemonSearchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchPokemon(pokemonSearchBar.value)
    }
})

function handleError(error) {

}

async function fetchPokemon(pokemonID) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID.toLowerCase()}`)
        const data = await response.json()
        console.log(data.forms[0].name)
        designPokemonLayout(data)
    } catch (error) {
        handleError(error)
    }
}


fetchPokemon()
