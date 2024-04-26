const loginButton = document.getElementById('login-button');
const emailLogin = document.getElementById('email');
const passwordLogin = document.getElementById('password');
const loginForm = document.getElementById('default-login');

const googleIcon = document.getElementById("google-icon");
const instagramIcon = document.getElementById("instagram-icon");
const facebookIcon = document.getElementById("facebook-icon");

let redirectToHome = () => {
    window.location.href = "../home.html";
};

googleIcon.addEventListener("click", redirectToHome);
instagramIcon.addEventListener("click", redirectToHome);
facebookIcon.addEventListener("click", redirectToHome);

const user = JSON.parse(localStorage.getItem('user'));

loginForm.addEventListener("submit", (e) => {
    console.log("Login button pressed.");

    e.preventDefault();

    validateLogin();
});

const validateLogin = () => {
    let isValid = user.email === emailLogin.value && user.password === passwordLogin.value;

    if (isValid) {
        console.log("Validated");

        clearLoginInputs();
        redirectToHome();

    } else {
        alert("Email ou senha incorretos.");
    }
}

const clearLoginInputs = () => {
    emailLogin.value = "";
    passwordLogin.value = "";
}