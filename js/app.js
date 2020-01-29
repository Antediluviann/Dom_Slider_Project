// IMG CREATION

var images = ["img/img.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];

var img = document.querySelectorAll(".slider img");

var thumbnails = document.querySelectorAll(".thumbnails img");

img.forEach(function(e, i) {

  e.setAttribute("src", images[i]);

});

thumbnails.forEach(function(e, i) {

  e.setAttribute("src", images[i]);

});

// SWITCHING IMAGES

// function switchSlides() {
//   var imgSlide = document.querySelectorAll(".slider img");

//   var selectedImg = imgSlide[0];
//   imgSlide[imgSlide.length - 1].after(selectedImg);

//   var nextImgSrc = imgSlide[1].getAttribute("src");

//   thumbnails.forEach(function(e, i) {
//     if (nextImgSrc == e.getAttribute("src")) {
//       e.classList.add("active");
//     } else {
//       e.classList.remove("active");
//     }
//   });
// }

// setInterval(switchSlides, 5000);

// SLIDING IMAGES

var slider = document.querySelector(".slider");
var rightArrow = document.querySelector("i:last-child");
var leftArrow = document.querySelector("i:first-child");

var size = img[0].clientWidth;
var counter = 0;

function left() {
  slider.style.transform = "translateX(" - size + "px)";
  var imgSlide = document.querySelectorAll(".slider img");
  imgSlide[imgSlide.length - 1].after(imgSlide[0]);
}

function right() {
  slider.style.transform = "translateX(" - size + "px)";
  var imgSlide = document.querySelectorAll(".slider img");
  imgSlide[0].before(imgSlide[imgSlide.length - 1]);
}

function activeThumbnail() {
  thumbnails[counter].style.borderBottom = "none";

  if (counter < thumbnails.length - 1) {
    counter++;
  } else counter = 0;

  thumbnails[counter].style.borderBottom = "1px solid #fff";
  // console.log(thumbnails[0]);
}

function nonActiveThumbnail() {
  thumbnails[counter].style.borderBottom = "none";

  if (counter > 0) {
    counter--;
  } else counter = thumbnails.length - 1;

  thumbnails[counter].style.borderBottom = "1px solid #fff";;
}

function active() {
  thumbnails[0].style.borderBottom = "1px solid #fff";
  // console.log(thumbnails[0]);
}

active();

rightArrow.addEventListener("click", left);
rightArrow.addEventListener("click", activeThumbnail);

leftArrow.addEventListener("click", right);
leftArrow.addEventListener("click", nonActiveThumbnail);

setInterval(left, 5000);
setInterval(activeThumbnail, 5000);

