# Movie Watchlist

Consists of two pages - an index.html and a watchlist.html.
The index.html page is a search page where the user can search for movie title. API calls to IMDB API to get the search results were displayed on the page. A button to add movie to watchlist saves data to local storage.
The watchlist.html page list the items that have been added to the local storage. A remove button is also provided to allow users to remove items from the watchlist.

### CSS styling of the search page
A search bar as form element was created and display floated using relative positioning. Flexbox and css grid was used to position the respective elements on the page.

### Interacting with the IMDB API
Fetching the search requests and rendering
An event listener was on the form for listen to submission events which will trigger the fetch request to the API. The IMDB ID from the response is parsed into JavaScript and send as parameter to the getMovieDetails function, which fetches from the API movie details based on the IMDB ID.
Search results are stored in a template string and rendered using innerhtml on the search page.

### Add to watchlist
An event listener was created to listen to user adding movies to watchlist. To identify which movie has been added, the data label (IMDB ID) was used as unique movie ID for each movie clicked and this data was parsed as JSON string to be stored in local storage.
The movies added to the watchlist were retrieved from local storage and rendered as HTML to the watchlist page.

### Remove from watchlist
Similarly, an event listener was also used for the remove button, and using the IMDB ID data label as before, any remove button clicks on specific watchlist items will call the utility function removeFromLocalStorage(), which will then remove from local storage the concerned item. The remaining items on local storage will be passed to the renderWatchList() function which will render the display on the page.
