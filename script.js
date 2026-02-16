// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// SCROLL TO PROJECTS
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// SHOW EMAIL
function showEmail() {
    document.getElementById("email").innerText = "Email: your@email.com";
}

// ENGLISH APP INFO
function showEnglishAppInfo() {
    alert("English Learning App: Built with HTML, CSS, JavaScript, and deployable as an Android APK using WebView.");
}

// NO DODGES INFO
function showNoDodgesInfo() {
    alert("No Dodges: A browser game built with HTML, CSS, and JavaScript. Demonstrates interactive gameplay and DOM manipulation.");
}

// TYPING EFFECT
const text = "Building interactive web applications and deployable Android apps.";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}
window.onload = typeEffect;
