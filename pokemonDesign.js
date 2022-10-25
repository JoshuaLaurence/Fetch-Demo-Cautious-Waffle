function designPokemonLayout(data) {
    //Sorting Data
    console.log(data)
    const pokemonTitle = data.forms[0].name
    const listOfAbilites = retrieveAbilities(data.abilities)
    const listOfGamesFeatured = retrieveListOfGames(data.game_indices)
    const listOfMoves = retrieveMoves(data.moves)
    const statistics = retrieveStatistics(data.stats)
    const types = retrieveTypes(data.types)
    const sprites = [data.sprites.back_default, data.sprites.front_default]

    const player = document.createElement("img")
    player.id = "player"
    const mainContent = document.getElementById("mainPokemonContentsDiv")
    player.src = "player.png"

    const sprite = document.createElement("img")
    sprite.id = "sprite"
    sprite.src = data.sprites.other["official-artwork"].front_default

    mainContent.appendChild(player)
    mainContent.appendChild(sprite)
    setTimeout(() => {
        sprite.classList.toggle("moveSprite")
        player.classList.toggle("movePlayer")
    }, 50)
    //Setting up the HTML elements


}

function retrieveTypes(types) {
    const tempArray = []
    for (let i = 0; i < types.length; i++) {
        tempArray.push(types[i].type.name)
    }
    return tempArray
}
function retrieveAbilities(abilities) {
    const tempArray = []
    for (let i = 0; i < abilities.length; i++) {
        tempArray.push(abilities[i].name)
    }
    return tempArray
}
function retrieveListOfGames(games) {
    const tempArray = []
    for (let i = 0; i < games.length; i++) {
        tempArray.push(games[i].version.name)
    }
    return tempArray
}
function retrieveMoves(moves) {
    const tempArray = []
    for (let i = 0; i < moves.length; i++) {
        tempArray.push(moves[i].move.name)
    }
    return tempArray
}
function retrieveStatistics(stats) {
    const tempArray = []
    for (let i = 0; i < stats.length; i++) {
        const statName = stats[i].stat.name
        tempArray.push({
            statName: stats[i].base_stat
        })
    }
    return tempArray
}
