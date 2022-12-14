// array of images
const imagesArray = [
  {
    images: "01.webp",
    title: "Spiderman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam alias perferendis tempore possimus vel exercitationem qui.",
  },
  {
    images: "02.webp",
    title: "Ratchet and Clank",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam alias perferendis tempore possimus vel exercitationem qui.",
  },
  {
    images: "03.webp",
    title: "Fortnite",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam alias perferendis tempore possimus vel exercitationem qui.",
  },
  {
    images: "04.webp",
    title: "Il Gatto con gli Stivali",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam alias perferendis tempore possimus vel exercitationem qui.",
  },
  {
    images: "05.webp",
    title: "The Avengers",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam alias perferendis tempore possimus vel exercitationem qui.",
  },
];

// big-show
let itemsContent = "";
for (let i = 0; i < imagesArray.length; i++) {
  itemsContent += `<div class="item position-relative">
        <img src="./img/${imagesArray[i].images}">
        <p class="position-absolute bottom-0 end-0 text-white text-end m-4"><span class="fs-3">${imagesArray[i].title}</span><br>${imagesArray[i].description}</p>
    </div>`;
}

// slide-show
let itemsContentSmall = "";
for (let i = 0; i < imagesArray.length; i++) {
  itemsContentSmall += `<div class="item-small">
  <img src="./img/${imagesArray[i].images}">
    </div>`;
}

//inserted images
const bigShow = document.querySelector(".big-show");
bigShow.innerHTML += itemsContent;
const slideShow = document.querySelector(".slide-show");
slideShow.innerHTML += itemsContentSmall;

const items = document.getElementsByClassName("item");
let itemActive = 0;
items[itemActive].classList.add("d-block");

const smallItems = document.getElementsByClassName("item-small");
smallItems[itemActive].classList.add("enfa-images");

function nextImg() {
  if (itemActive < items.length - 1) {
    // RIMUOVO .ACTIVE AGLI ELEMENTI VISIBILI
    items[itemActive].classList.remove("d-block");
    smallItems[itemActive].classList.remove("enfa-images");

    itemActive++;

    // AGGIUNGO .ACTIVE ALL'ELEMENTO SUCCESSIVO
    items[itemActive].classList.add("d-block");
    smallItems[itemActive].classList.add("enfa-images");
  }
  if (itemActive === items.length - 1) {
    next.classList.add("d-none");
    prev.classList.remove("d-none");
  } else {
    prev.classList.remove("d-none");
  }
}

function prevImg() {
  if (itemActive > 0) {
    // RIMUOVO .ACTIVE AGLI ELEMENTI VISIBILI
    items[itemActive].classList.remove("d-block");
    smallItems[itemActive].classList.remove("enfa-images");

    itemActive--;

    // AGGIUNGO .ACTIVE ALL'ELEMENTO PRECEDENTE
    items[itemActive].classList.add("d-block");
    smallItems[itemActive].classList.add("enfa-images");
  }

  if (itemActive === 0) {
    prev.classList.add("d-none");
    next.classList.remove("d-none");
  } else {
    next.classList.remove("d-none");
  }
}

// BOOTTONE "SUCCESSIVO"
const next = document.querySelector(".next");
next.addEventListener("click", nextImg);

// BOTTONE "PRECEDENTE"
const prev = document.querySelector(".prev");
prev.addEventListener("click", prevImg);
