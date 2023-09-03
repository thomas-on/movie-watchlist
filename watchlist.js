import { removeFromLocalStorage, getItemFromLocalStorage, 
renderNoWatchlistMessage } from '/utils.js'
 
const watchlistDisplay = document.getElementById("watchlist-display")

let watchlist = getItemFromLocalStorage()

renderWatchList(watchlist)

document.addEventListener("click", function(event) {
    //console.log(event.target.dataset.id)
    if (event.target.dataset.id) {
         removeFromLocalStorage(event.target.dataset.id)
         renderWatchList(getItemFromLocalStorage())
    }
})

function renderWatchList(watchlist) {
    //console.log(watchlist)
    watchlistDisplay.innerHTML = ``
    if (watchlist.length === 0) {
        renderNoWatchlistMessage(watchlistDisplay)
    } else {
        for (let movie of watchlist){
            watchlistDisplay.innerHTML += `
                <div id="watch-result">
                    <img src="${movie.Poster}">
                    <h3>${movie.Title}</h3>
                    <p id="rating">⭐${movie.imdbRating}</p>
                    <p id="runtime">${movie.Runtime}</p>
                    <p id="genre">${movie.Genre}</p>
                    <button id="remove-from-watchlist" data-id="${movie.imdbID}">Remove</button>
                    <p id="plot">${movie.Plot}</p>
                </div>
                <hr class="solid">
                `
            }
    }
}


