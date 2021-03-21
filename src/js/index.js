// import '../styles/reset.css';
// import '../styles/main.css';
// import '../styles/navbar.css';
// import '../styles/header.css';

// import '../images/ball.png';
// import '../images/easybank_ipad.png';
// import '../images/easybank_desktop.png';
// import '../images/easybank_mobile.png';
// import '../images/ellipse.png';
// import '../images/ellipse2.png';
// import '../images/facebook.svg';
// import '../images/faq_accordion_ mobile.png';
// import '../images/faq_accordion_desktop.png';
// import '../images/faq_accordion_ipad.png';
// import '../images/github.svg';
// import '../images/instagram.svg';
// import '../images/linkedin.svg';
// import '../images/menu-ham.svg';
// import '../images/page_spaceX.png';
// import '../images/profile_card_ mobile.png';
// import '../images/profile_card_desktop.png';
// import '../images/profile_card_ipad.png';
// import '../images/shorten-url_ mobile.png';
// import '../images/shorten-url_desktop.png';
// import '../images/shorten-url_ipad.png';

// eslint-disable-next-line import/extensions
import activeModal from './menuModal.js';

const name = document.location.pathname;
if (/proyect.html/.test(name)) {
  const slider = document.querySelector('#slider');
  const sliderImg = document.querySelectorAll('#slider > img');
  const sliderLastImg = sliderImg[sliderImg.length - 1];
  const btnLeft = document.querySelector('#left');
  const btnRight = document.querySelector('#right');

  slider.insertAdjacentElement('afterbegin', sliderLastImg);

  const next = () => {
    const FirstImg = document.querySelectorAll('#slider > img')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.insertAdjacentElement('beforeend', FirstImg);
      slider.style.marginLeft = '-100%';
    }, 500);
  };

  const prev = () => {
    const LastImg = document.querySelectorAll('#slider > img')[sliderImg.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.insertAdjacentElement('afterbegin', LastImg);
      slider.style.marginLeft = '-100%';
    }, 500);
  };

  btnLeft.addEventListener('click', next);
  btnRight.addEventListener('click', prev);
  // setInterval(next, 8000);
}
if (/index.html/.test(name)) {
  const exercises = document.querySelectorAll('.exercise__preview');
  const modalExercise = document.getElementById('modalExercise');
  const btnCloseModal = document.getElementById('closeModal');
  const frameExercise = document.getElementById('iframe');

  const closeModal = () => {
    modalExercise.style.opacity = '0';
    setTimeout(() => {
      modalExercise.style.display = 'none';
    }, 500);
  };

  const viewExercise = (exercise) => {
    frameExercise.src = `./exercises/${exercise}.html`;
    modalExercise.style.display = 'flex';
    setTimeout(() => {
      modalExercise.style.opacity = '1';
    }, 100);
  };

  exercises.forEach((ex) => ex.addEventListener('click', () => {
    viewExercise(ex.name);
  }));
  btnCloseModal.addEventListener('click', closeModal);
}

const modal = document.getElementById('nav-bar__modal');

document.getElementById('burger').addEventListener('click', () => {
  activeModal(modal);
});
