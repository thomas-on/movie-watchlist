function titleStringFormatter(titleString) {
    return titleString.replaceAll(" ", "+")
}

function clearInput(searchInput) {
    searchInput.value = ""
}

function saveToLocalStorage(movieId, moviesArray) {
    let watchlist = getItemFromLocalStorage()
    //console.log(movieId)
    const targetMovieObj = moviesArray.filter(function(movie) {
        return movieId === movie.imdbID
    })[0]
    //console.log(targetMovieObj)
    
    
    //check if watchlist contains added movie object
    if (!watchlist.includes(targetMovieObj)) {
        watchlist.push(targetMovieObj)
    }
    //console.log(watchlist)
    
    //Set item to localStorage
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
}

function removeFromLocalStorage(movieId) {
    let watchlist = getItemFromLocalStorage()
    //console.log(movieId)
    let watchlistRemaining = watchlist.filter(function(movie) {
        return movieId !== movie.imdbID
    })
    //console.log(watchlistRemaining)
    localStorage.setItem("watchlist", JSON.stringify(watchlistRemaining))
}

function getItemFromLocalStorage() {
    // Parse in exisitng objects or empty object from localSotrage
    return JSON.parse(localStorage.getItem("watchlist") ||  "[]")
}
    

function renderFaultMessage(searchDisplay) {
    searchDisplay.innerHTML = `
        <h2 id="error-msg"> No results found. Please try another search.</h2>
        `
}

function renderNoWatchlistMessage(watchlistDisplay) {
    watchlistDisplay.innerHTML = `
        <h2 id="error-msg"> No movies added to watchlist. </h2>
        `
}


export { titleStringFormatter, clearInput, saveToLocalStorage, removeFromLocalStorage,getItemFromLocalStorage, renderFaultMessage, renderNoWatchlistMessage }