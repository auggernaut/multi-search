const params = new URLSearchParams(window.location.search);
updateSearch(params.get("q"))

var input = document.getElementById("searchInput");
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        updateSearch(input.value)
    }
});

function updateSearch(searchString){
    document.getElementById("googleFrame").src = 'https://www.google.com/search?q=' + searchString;
    document.getElementById("braveFrame").src = 'https://search.brave.com/search?q=' + searchString;
    document.getElementById("ddGoFrame").src = 'https://duckduckgo.com/?q=' + searchString;
}
