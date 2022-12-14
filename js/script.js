//Creo array immagini
const imagesArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = "";
for (let i = 0; i < imagesArray.length; i++) {
  itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`;
}

let itemsContentSmall = "";
for (let i = 0; i < imagesArray.length; i++) {
  itemsContentSmall += `<div class="item-small">
        <img src="./img/${imagesArray[i]}">
    </div>`;
}

//inseriamo le immagini nel div che le deve contenere
const bigShow = document.querySelector(".big-show");
bigShow.innerHTML += itemsContent;
const slideShow = document.querySelector(".slide-show");
slideShow.innerHTML += itemsContentSmall;

const items = document.getElementsByClassName("item");
let itemActive = 0;

items[itemActive].classList.add("active");

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

    itemActive++;

    // AGGIUNGO .ACTIVE ALL'ELEMENTO SUCCESSIVO
    items[itemActive].classList.add("active");
  }
  if (itemActive === items.length - 1) {
    next.classList.add("hidden");
    prev.classList.remove("hidden");
  } else {
    prev.classList.remove("hidden");
  }
}

function prevImg() {
  if (itemActive > 0) {
    // RIMUOVO .ACTIVE AGLI ELEMENTI VISIBILI
    items[itemActive].classList.remove("active");

    itemActive--;

    // AGGIUNGO .ACTIVE ALL'ELEMENTO PRECEDENTE
    items[itemActive].classList.add("active");
  }

  if (itemActive === 0) {
    prev.classList.add("hidden");
    next.classList.remove("hidden");
  } else {
    next.classList.remove("hidden");
  }
}
