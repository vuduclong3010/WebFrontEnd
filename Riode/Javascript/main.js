let menu = document.querySelector('#icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    header.classList.toggle('activer-header');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    header.classList.remove('activer-header');
}


// Swiper slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
      0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
      375: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      },
      768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      },
      950: {
      slidesPerView: 5,
      slidesPerGroup: 0,
      },
  },
});


let click = document.querySelector('.btn-play');
let iframe = document.querySelector('.video-show');

console.log(click);
click.onclick = () =>{
  console.log(iframe);
  iframe.classList.add('activer1');
}

iframe.onclick = () =>{
  iframe.classList.remove('activer1');
}

