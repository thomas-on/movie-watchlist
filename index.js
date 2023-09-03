import { titleStringFormatter, clearInput,  saveToLocalStorage, 
renderFaultMessage } from '/utils.js'

const searchInput = document.getElementById("search-input")
const searchBar = document.getElementById("search-bar")
const searchDisplay = document.getElementById("search-display")

let moviesArray = []
let searchResultsHTML = ``

searchBar.addEventListener("submit", function(e) {
        e.preventDefault() // Prevent form resubmission which changes url string
        let urlTitleString = titleStringFormatter(searchInput.value)
        clearInput(searchInput)
    
        fetch("https://www.omdbapi.com/?apikey=396a425f&type=movie&s="+urlTitleString) 
            .then(res => res.json())
            .then(data => {
                searchResultsHTML = `` // clears the page for new search results

                if (data.Error == "Movie not found!") {
                    renderFaultMessage(searchDisplay)
                } else {
                    for (let item of data.Search) {
                        //console.log(item.imdbID)
                        getMovieDetails(item.imdbID)
                        }
                }
            }) 
})

function getMovieDetails(itemId) {
    fetch("https://www.omdbapi.com/?apikey=396a425f&type=movie&i="+itemId)
        .then(res => res.json())
        .then(data => {
            moviesArray.push(data)
            renderSearchResults(data)
        })
}

function renderSearchResults(data) {
    //console.log(data.Title)
    searchDisplay.innerHTML = ``
    searchResultsHTML += `
    <div id="search-result">
        <img src="${data.Poster}">
        <h3>${data.Title}</h3>
        <p id="rating">⭐${data.imdbRating}</p>
        <p id="runtime">${data.Runtime}</p>
        <p id="genre">${data.Genre}</p>
        <button id="add-to-watchlist" data-id="${data.imdbID}">Watchlist</button>
        <p id="plot">${data.Plot}</p>
    </div>
    <hr class="solid">
    `
    searchDisplay.innerHTML = searchResultsHTML
}

searchDisplay.addEventListener("click", function(event) {
    if (event.target.dataset.id) {
        //console.log(event.target.dataset.id)
        saveToLocalStorage(event.target.dataset.id, moviesArray)
    }
})




