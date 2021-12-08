const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");
let number = document.querySelector(".navigation h1 span");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
let num = 1;

next.addEventListener("click", function () {
  counter++;
  num++;
  slide();
});

prev.addEventListener("click", function () {
  counter--;
  num--;
  slide();
});

function slide() {
  if (counter > 0) {
    prev.style.display = "inline";
  } else {
    prev.style.display = "none";
  }

  if (counter === slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "inline";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  number.innerHTML = num;
}

prev.style.display = "none";
