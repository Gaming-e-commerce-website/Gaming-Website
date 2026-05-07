//  Show Username After Login  
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let nameParagraph = document.querySelector('.name');
let accountLink = document.querySelector('.account a');

if (loggedInUser) {
    nameParagraph.textContent = loggedInUser.firstName;
    accountLink.href = "#";
} else {
    nameParagraph.textContent = '';
    accountLink.href = "../Pages/Signin.html";
}