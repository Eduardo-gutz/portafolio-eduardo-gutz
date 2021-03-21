const slider = document.querySelector('#slider');
let sliderImg = document.querySelectorAll('#silder > img');
let sliderLastImg = sliderImg[sliderImg.length - 1];

console.log(sliderLastImg);

const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

slider.insertAdjacentElement('afterbegin', sliderLastImg);
