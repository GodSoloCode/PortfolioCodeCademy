const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".game-container");

yesBtn.addEventListener("click", () => {
    alert("You clicked YES! 🎉");
});

// Make the NO button dodge the mouse
noBtn.addEventListener("mouseenter", () => {
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = containerRect.width - btnWidth - 20;
    const maxY = containerRect.height - btnHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
