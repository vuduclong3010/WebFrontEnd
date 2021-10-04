let menu = document.querySelector('#icon-mobile');
let navbar = document.querySelector('.header-menu');
let mota = document.querySelectorAll('content-item___1H95n');
let clickmotas = document.querySelectorAll('list-sukien');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// Slick
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      "@2.00": {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
});

