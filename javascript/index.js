const parrafo = document.querySelector(".home_textCircle");

parrafo.innerHTML = parrafo.textContent.split("").map((char, i)=>
    `<span class="home_textCircle-letter" style="transform:rotate(${i * 15.8}deg)">${char}</span>`
).join("");