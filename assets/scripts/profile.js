const profileBackButton = document.getElementById('profile-back-button');
const profileName = document.getElementById('profile-name');
const profileMail = document.getElementById('profile-mail');

profileBackButton.addEventListener("click", () => {
    window.location.href = "home.html";
});p

const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

profileName.innerHTML = user.username;
profileMail.innerHTML = user.email;
