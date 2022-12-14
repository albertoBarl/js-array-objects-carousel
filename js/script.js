//Creo array immagini
const imagesArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = "";

for (let i = 0; i < imagesArray.length; i++) {
  itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`;
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector(".big-show");
itemsSlider.innerHTML += itemsContent;

const items = document.getElementsByClassName("item");
let itemActive = 0;

items[itemActive].classList.add("active");

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName("circle");

circles[itemActive].classList.add("active");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// BOOTTONE "SUCCESSIVO"
next.addEventListener("click", nextImg);

// BOTTONE "PRECEDENTE"
prev.addEventListener("click", prevImg);

function nextImg() {
  if (itemActive < items.length - 1) {
    // RIMUOVO .ACTIVE AGLI ELEMENTI VISIBILI
    items[itemActive].classList.remove("active");
    circles[itemActive].classList.remove("active");

    itemActive++;

    // AGGIUNGO .ACTIVE ALL'ELEMENTO SUCCESSIVO
    items[itemActive].classList.add("active");
    circles[itemActive].classList.add("active");
  }

  if (itemActive === items.length - 1) {
    next.classList.add("hidden");
    prev.classList.remove("hidden");
  }
}

function prevImg() {
  if (itemActive > 0) {
    // RIMUOVO .ACTIVE AGLI ELEMENTI VISIBILI
    items[itemActive].classList.remove("active");
    circles[itemActive].classList.remove("active");

    itemActive--;

    // AGGIUNGO .ACTIVE ALL'ELEMENTO PRECEDENTE
    items[itemActive].classList.add("active");
    circles[itemActive].classList.add("active");
  }

  if (itemActive === 0) {
    prev.classList.add("hidden");
    next.classList.remove("hidden");
  }
}
