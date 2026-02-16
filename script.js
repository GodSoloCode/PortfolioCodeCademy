// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Show message interaction
function showMessage() {
    document.getElementById("message").innerText =
        "I transitioned from professional teaching into front-end development and am building interactive web applications.";
}

// Project click interaction
function projectClick(card) {
    alert("You clicked: " + card.querySelector("h3").innerText);
}

// Show email interaction
function showEmail() {
    document.getElementById("email").innerText =
        "Email: your@email.com";
}
