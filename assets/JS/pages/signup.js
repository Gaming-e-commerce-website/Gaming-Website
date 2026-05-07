// sign up validation

const signupForm = document.querySelector(".login-box form");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const firstNameError = document.querySelector(".firstnameerror");
const lastNameError = document.querySelector(".lastnameerror");
const emailError = document.querySelector(".emailerror");
const passError = document.querySelector(".passerror");
const submitError = document.querySelector(".submiterror");

function showError(div, message) {
    div.textContent = message;
    div.style.color = "#e53e3e";
    div.style.fontSize = "13px";
    div.style.marginTop = "-22px";
    div.style.marginBottom = "12px";
}

function clearError(div) {
    div.textContent = "";
}

function validateFirstName() {
    const value = firstNameInput.value.trim();
    if (value === "") {
        showError(firstNameError, "First name is required.");
        return false;
    } else if (value.length < 2) {
        showError(firstNameError, "First name must be at least 2 characters.");
        return false;
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
        showError(firstNameError, "First name must contain letters only.");
        return false;
    }
    clearError(firstNameError);
    return true;
}

function validateLastName() {
    const value = lastNameInput.value.trim();
    if (value === "") {
        showError(lastNameError, "Last name is required.");
        return false;
    } else if (value.length < 2) {
        showError(lastNameError, "Last name must be at least 2 characters.");
        return false;
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
        showError(lastNameError, "Last name must contain letters only.");
        return false;
    }
    clearError(lastNameError);
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
        showError(emailError, "Email is required.");
        return false;
    } else if (!emailRegex.test(value)) {
        showError(emailError, "Please enter a valid email address (e.g. user@example.com).");
        return false;
    }
    clearError(emailError);
    return true;
}

function validatePassword() {
    const value = passwordInput.value;
    if (value === "") {
        showError(passError, "Password is required.");
        return false;
    } else if (value.length < 6) {
        showError(passError, "Password must be at least 6 characters.");
        return false;
    } else if (!/[A-Z]/.test(value)) {
        showError(passError, "Password must contain at least one uppercase letter.");
        return false;
    } else if (!/[0-9]/.test(value)) {
        showError(passError, "Password must contain at least one number.");
        return false;
    }
    clearError(passError);
    return true;
}

firstNameInput.addEventListener("blur", validateFirstName);
lastNameInput.addEventListener("blur", validateLastName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

firstNameInput.addEventListener("input", () => clearError(firstNameError));
lastNameInput.addEventListener("input", () => clearError(lastNameError));
emailInput.addEventListener("input", () => clearError(emailError));
passwordInput.addEventListener("input", () => clearError(passError));

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPasswordValid) {
        return;
    }

    const email = emailInput.value.trim().toLowerCase();

    const existingUsers = JSON.parse(localStorage.getItem("gamingUsers")) || [];
    const alreadyExists = existingUsers.find((user) => user.email === email);

    if (alreadyExists) {
        showError(submitError, "This email is already registered. Please sign in.");
        return;
    }

    const newUser = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: email,
        password: passwordInput.value,
    };

    existingUsers.push(newUser);
    localStorage.setItem("gamingUsers", JSON.stringify(existingUsers));

    clearError(submitError);
    submitError.textContent = "Account created successfully! Redirecting to login...";
    submitError.style.color = "#38a169";
    submitError.style.fontSize = "14px";
    submitError.style.marginTop = "10px";
    submitError.style.textAlign = "center";

    setTimeout(() => {
        window.location.href = "Signin.html";
    }, 1800);
});