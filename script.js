let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let index = 0;
let slide = document.getElementById("slide");

function showSlide(i) {
  if (i < 0) {
    index = images.length - 1;
  } else if (i >= images.length) {
    index = 0;
  }
  slide.src = images[index];
}

function nextSlide() {
  index++;
  showSlide(index);
}

function prevSlide() {
  index--;
  showSlide(index);
}