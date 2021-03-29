const slider = document.querySelector('#slider');
const sliderImg = document.querySelectorAll('.slider__img');
const sliderLastImg = sliderImg[sliderImg.length - 1];

if (slider) {
  slider.insertAdjacentElement('afterbegin', sliderLastImg);
}

export const next = () => {
  const FirstImg = document.querySelectorAll('#slider > img')[0];
  slider.style.marginLeft = '-200%';
  slider.style.transition = 'all 0.5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', FirstImg);
    slider.style.marginLeft = '-100%';
  }, 500);
};

export const prev = () => {
  const LastImg = document.querySelectorAll('#slider > img')[sliderImg.length - 1];
  slider.style.marginLeft = '0';
  slider.style.transition = 'all 0.5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', LastImg);
    slider.style.marginLeft = '-100%';
  }, 500);
};
