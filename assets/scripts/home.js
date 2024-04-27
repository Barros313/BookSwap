const homeNavbar = document.getElementById('navbar-home');
const publishNavbar = document.getElementById('navbar-publish');
const chatNavbar = document.getElementById('navbar-chat');
const profileNavbar = document.getElementById('navbar-profile');
const configNavbar = document.getElementById('navbar-config');
const searchHeader = document.getElementById('header-search-button');

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

searchHeader.addEventListener("click", () => {
    window.location.href = "search.html";  
})