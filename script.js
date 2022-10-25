//Grab access to body element
const pokeball = document.getElementById("pokeballImage")
const pokeballDiv = document.getElementById("pokeballDiv")
const classToAdd = document.querySelector("#pokeballImage.ballAnimation")
window.addEventListener("load", () => {
    pokeball.style.top = window.innerHeight / 2 + 100
    pokeball.classList.toggle("ballAnimationIn")
})

pokeball.addEventListener("click", (event) => {
    pokeball.classList.toggle("disabled")
    pokeball.src = "pokeball-open.png"
    pokeballDiv.classList.toggle("shrink")
    setTimeout(() => {
        pokeball.src = "pokeball.png"
        pokeballDiv.remove()
        setTimeout(() => {
            pokeball.classList.toggle("ballAnimationIn")
            pokeball.classList.toggle("ballAnimationOut")
        }, 200)
    }, 700)
})




const pokemonSearchBar = document.getElementById("pokemonSearchInput")
pokemonSearchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const mainContent = document.querySelector("#mainPokemonContentsDiv")
        const errorLabel = document.querySelector("#theErrorLabel")
        if(typeof(errorLabel) !== undefined && errorLabel !== null) {
            errorLabel.remove()
        }
        fetchPokemon(pokemonSearchBar.value)
    }
})

function handleError(error) {
    console.log("reached error function")
    const mainContent = document.querySelector("#mainPokemonContentsDiv")
    const newErrorLabel = document.createElement("h3")
    newErrorLabel.id = "theErrorLabel"
    newErrorLabel.classList.add("errorLabel")
    newErrorLabel.innerHTML = "There doesn't appear to be a pokemon by that name :(<br>Please Try Again"
    mainContent.appendChild(newErrorLabel)
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
