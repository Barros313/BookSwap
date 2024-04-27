const searchBackButton = document.getElementById('search-back-button');
const text = document.getElementById('text');

const searchValue = JSON.parse(localStorage.getItem("search-value"));

text.innerHTML = "Resultados para a pesquisa " + searchValue;

searchBackButton.addEventListener("click", () => {
    window.location.href = "home.html";
});

