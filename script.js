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
        const errorContent = document.querySelector("#errorDiv")
        if(typeof(errorContent) !== undefined && errorContent !== null) {
            errorContent.remove()
        }

        console.log("Items changing")
        if (mainContent.children !== undefined) {
            for (let child of mainContent.children) {
                child.classList.add("makeDisappear")
            }
            fetchPokemon(pokemonSearchBar.value)
            setTimeout(() => {
                for (let child in mainContent.children) {
                    child.remove()
                }
            }, 2000)
        } else {
            fetchPokemon(pokemonSearchBar.value)
        }
    }
})

function handleError(error) {
    console.log("reached error function")
    const mainContent = document.querySelector("#mainPokemonContentsDiv")
    const errorContent = document.createElement("div")
    errorContent.id = "errorDiv"
    const newErrorLabel = document.createElement("h3")
    const newErrorImage = document.createElement("img")
    newErrorImage.id = "theErrorImage"
    const randomID = Math.floor(Math.random() * 3)
    console.log(randomID)
    newErrorImage.src = `./sadPokemonImages/sadPokemon${randomID}.png`

    newErrorLabel.id = "theErrorLabel"
    newErrorLabel.classList.add("errorLabel")
    newErrorImage.classList.add("errorImage")
    newErrorLabel.innerHTML = "There doesn't appear to be a pokemon by that name :(<br>Please Try Again"
    errorContent.appendChild(newErrorLabel)
    errorContent.appendChild(newErrorImage)

    mainContent.appendChild(errorContent)
}

function fetchPokemon(pokemonID) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID.toLowerCase()}`)
    .then(response => response.json())
    .then(data => designPokemonLayout(data))
    .catch(error => handleError(error))
}
