// Toggle menu (mobile)
document.getElementById("menuBtn").onclick = function () {
    let nav = document.getElementById("navLinks");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
};

// Button action
function showAlert() {
    alert("Welcome to Smart Home Showcase!");
}