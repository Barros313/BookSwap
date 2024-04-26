const loginButton = document.getElementById('login-button');
const signInButton = document.getElementById('sign-in-button');

loginButton.addEventListener("click", () => {
    window.location.href = "pages/login/login.html";
});

signInButton.addEventListener("click", () => {
    window.location.href = 'pages/login/signin.html';
});