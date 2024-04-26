const loginButton = document.getElementById('login-button');
const emailLogin = document.getElementById('email');
const passwordLogin = document.getElementById('password');

const googleIcon = document.getElementById("google-icon");
const instagramIcon = document.getElementById("instagram-icon");
const facebookIcon = document.getElementById("facebook-icon");

let redirectToHome = () => {
    window.location.href = "../home.html";
};

googleIcon.addEventListener("click", redirectToHome);
instagramIcon.addEventListener("click", redirectToHome);
facebookIcon.addEventListener("click", redirectToHome);
loginButton.addEventListener("click", redirectToHome);