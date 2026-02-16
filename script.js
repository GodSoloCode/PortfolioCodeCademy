// DARK MODE

function toggleDarkMode() {

    document.body.classList.toggle("dark");

}

// SCROLL TO PROJECTS

function scrollToProjects() {

    document.getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });

}

// SHOW EMAIL

function showEmail() {

    document.getElementById("email").innerText =
        "Email: your@email.com";

}

// PROJECT INFO

function showProjectInfo() {

    alert(
        "This English Learning App was built using HTML, CSS, JavaScript, and deployed as an Android APK using WebView."
    );

}

// TYPING EFFECT

const text =
    "Building interactive web applications and deployable Android apps.";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 40);

    }

}

window.onload = typeEffect;
