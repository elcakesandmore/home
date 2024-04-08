// open search Input
searchInput = document.getElementById("search");
searchIcon = document.getElementById("search-click");
// Show and close Search Input if Empty
function showSearchInput(){
    if (searchInput.value === "" && searchInput.style.display === "inline"){
        searchInput.style.display = "none";
    }else{
        searchInput.style.display = "inline";;
    }
}

