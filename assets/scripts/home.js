const homeNavbar = document.getElementById('navbar-home');
const publishNavbar = document.getElementById('navbar-publish');
const profileNavbar = document.getElementById('navbar-profile');
const configNavbar = document.getElementById('navbar-config');
const searchHeader = document.getElementById('header-search-button');
const searchInput = document.getElementById('search-input');

homeNavbar.addEventListener("click", () => {
    window.location.href = "home.html";
});

publishNavbar.addEventListener("click", () => {
    window.location.href = "publish.html";
});

profileNavbar.addEventListener("click", () => {
    window.location.href = "profile.html";
});

configNavbar.addEventListener("click", () => {
    window.location.href = "config.html";
});

const validSearch = () => {
    if (searchInput.value === null) {
        alert("Digite um valor para pesquisar.");
    } else {
        const searchValue = searchInput.value;

        localStorage.setItem("search-value", JSON.stringify(searchValue));

        searchValue.value = "";

        window.location.href = "search.html";
    }
};

searchHeader.addEventListener("click", validSearch);