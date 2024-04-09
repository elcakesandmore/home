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

// open and close menu on Mobile
menuIcon = document.getElementById("menu-icon");
menuList = document.getElementById("menu-list");

function showMenuList(){
    if (menuList.style.display === "flex"){
        menuList.style.display = "none";
        menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }else{
        menuList.style.display = "flex";
        menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
}