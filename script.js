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
        "Email: 14shwb@gmail.com";

}

// PROJECT INFO BUTTON
function showProjectInfo() {

    alert(
        "This English Learning App was built using HTML, CSS, and JavaScript. It demonstrates DOM manipulation and interactive quiz logic."
    );

}

// TYPING EFFECT

const text =
    "Building interactive web applications and transitioning into professional front-end development.";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 40);

    }

}

window.onload = typeEffect;
