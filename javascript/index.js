import "./configGsap.js"
import "./carousel.js"
import "./menu.js";
import "./changeBackgroundColor.js"
import "./animationIntoTitle.js"
import "./codeShery.js"
import "./certificationsAnimation.js"
import "./titleCertifications.js"

const parrafo = document.querySelector(".home_textCircle");

parrafo.innerHTML = parrafo.textContent.split("").map((char, i)=>
    `<span class="home_textCircle-letter" style="transform:rotate(${i * 15.8}deg)">${char}</span>`
).join("");