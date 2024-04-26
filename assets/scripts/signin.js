// signin.js file code:

const signinForm = document.getElementById("signin-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const address = document.getElementById("address");

signinForm.addEventListener("submit", (e) => {
    console.log("Sign in button pressed.");
    e.preventDefault(); // Prevent form submission

    signinFormValidation();
});

const signinFormValidation = () => {
    if (password.value !== confirmPassword.value) {
        console.log("Failure, passwords input are different");
        alert("As senhas precisam ser iguais!");
    } else {
        console.log("Success");
        makeUser();
    }
};

const makeUser = () => {
    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        address: address.value
    };

    localStorage.setItem("user", JSON.stringify(user));

    clearSignInInputs();
    
    window.location.href = "../../index.html";
};

const clearSignInInputs = () => {
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    address.value = "";
};