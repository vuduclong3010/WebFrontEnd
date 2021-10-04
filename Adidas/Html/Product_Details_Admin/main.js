const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const img = $('.tab-img');
const imgs = $$('.click-imgs');

console.log(imgs);

img.src = document.querySelector('.active').src;

imgs.forEach(function(img_click) {
    img_click.onclick = function() {
        img.src = this.src;
    }
});