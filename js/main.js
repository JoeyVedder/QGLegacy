// DOM Elements
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const signInModal = document.getElementById("signInModal");
const signUpModal = document.getElementById("signUpModal");
const closeButtons = document.querySelectorAll(".close");

// Open modals
signInBtn.addEventListener("click", () => {
    signInModal.style.display = "flex";
});

signUpBtn.addEventListener("click", () => {
    signUpModal.style.display = "flex";
});

// Close modals
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
    });
});

// Close modals on outside click
window.addEventListener("click", (event) => {
    if (event.target === signInModal || event.target === signUpModal) {
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
    }
});
