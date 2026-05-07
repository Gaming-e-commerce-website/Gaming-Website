// ===== امسح session القديمة لما صفحة signin تتفتح =====
localStorage.removeItem("loggedInUser");

// ===== signin validation =====
const signinForm = document.querySelector(".login-box form");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
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

function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
        showError(emailError, "  Email is required.");
        return false;
    } else if (!emailRegex.test(value)) {
        showError(emailError, "  Please enter a valid email address (e.g. user@example.com).");
        return false;
    }
    clearError(emailError);
    return true;
}

function validatePassword() {
    const value = passwordInput.value;
    if (value === "") {
        showError(passError, "  Password is required.");
        return false;
    }
    clearError(passError);
    return true;
}

emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
emailInput.addEventListener("input", () => clearError(emailError));
passwordInput.addEventListener("input", () => clearError(passError));

signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    if (!isEmailValid || !isPasswordValid) return;

    const enteredEmail = emailInput.value.trim().toLowerCase();
    const enteredPassword = passwordInput.value;
    const registeredUsers = JSON.parse(localStorage.getItem("gamingUsers")) || [];
    const foundUser = registeredUsers.find((user) => user.email === enteredEmail);

    if (!foundUser) {
        submitError.textContent = "";
        showError(submitError, "  No account found with this email. Please ");
        const link = document.createElement("a");
        link.href = "signup.html";
        link.textContent = "Sign Up first.";
        link.style.color = "#414cde";
        link.style.fontWeight = "600";
        link.style.textDecoration = "underline";
        submitError.style.marginTop = "10px";
        submitError.appendChild(link);
        return;
    }

    if (foundUser.password !== enteredPassword) {
        showError(passError, "  Incorrect password. Please try again.");
        return;
    }

    clearError(submitError);
    submitError.textContent = `  Welcome back, ${foundUser.firstName}! Redirecting...`;
    submitError.style.color = "#38a169";
    submitError.style.fontSize = "14px";
    submitError.style.marginTop = "10px";
    submitError.style.textAlign = "center";

    // حفظ المستخدم في session
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 1800);
});