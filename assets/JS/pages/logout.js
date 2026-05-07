


const logoutBtn = document.querySelector(".fa-arrow-right-from-bracket").parentElement;

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("gamingCart");

    nameParagraph.textContent = "";
    accountLink.href = "Pages/Signin.html";

    const toast = document.createElement("div");
    toast.innerHTML = `
        <div>
            <p style="margin:0; font-size:15px; font-weight:500;">Logged out successfully</p>
            <p style="margin:4px 0 0; font-size:12px; opacity:0.85;">See you again soon!</p>
        </div>
    `;
    Object.assign(toast.style, {
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%) translateY(-20px)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 20px",
        borderRadius: "12px",
        background: "linear-gradient(93.25deg, #0098ff 4.45%, #7c34c8 93.88%)",
        color: "#fff",
        fontWeight: "500",
        boxShadow: "0 4px 20px rgba(0,152,255,0.25)",
        minWidth: "280px",
        opacity: "0",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        zIndex: "9999",
        fontFamily: "sans-serif"
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    }, 10);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(-20px)";
        setTimeout(() => {
            document.body.removeChild(toast);
            window.location.href = "/index.html";
        }, 400);
    }, 2500);
});