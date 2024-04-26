const loginPage = document.getElementById('login-button');
const signInPage = document.getElementById('sign-in-button');

loginPage.addEventListener("click", () => {
    window.location.href = "pages/login/login.html";
});

signInPage.addEventListener("click", () => {
    window.location.href = 'pages/login/signin.html';
});