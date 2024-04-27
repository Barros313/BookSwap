const configBackButton = document.getElementById('config-back-button');
const exitAccount = document.getElementById('exit-account');
const removeAccount = document.getElementById('remove-account');

configBackButton.addEventListener("click", () => {
    window.location.href = "home.html";
});


const removeUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
        localStorage.removeItem('user');
        backToLogin();
        return user;
    } else {
        return null; // No user found in local storage
    }
};

const backToLogin = () => {
    window.location.href = "../index.html";
};

exitAccount.addEventListener("click", backToLogin);
removeAccount.addEventListener("click", removeUser);