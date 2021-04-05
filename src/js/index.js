/* eslint-disable import/extensions */
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
// import '../images/icons/facebook.svg';
// import '../images/faq_accordion_mobile.png';
// import '../images/faq_accordion_desktop.png';
// import '../images/faq_accordion_ipad.png';
// import '../images/icons/github.svg';
// import '../images/icons/instagram.svg';
// import '../images/icons/linkedin.svg';
// import '../images/icons/menu-ham.svg';
// import '../images/page_spaceX.png';
// import '../images/profile_card_mobile.png';
// import '../images/profile_card_desktop.png';
// import '../images/profile_card_ipad.png';
// import '../images/shorten-url_mobile.png';
// import '../images/shorten-url_desktop.png';
// import '../images/shorten-url_ipad.png';

import activeModal from './menuModal.js';
import initProyectDetails from './preyectDetails.js';

const name = document.location.pathname;
const modal = document.getElementById('nav-bar__modal');
const tooltip = document.getElementById('tooltip');

function copied(event) {
  event.preventDefault();

  const aux = document.createElement('input'); // create auxiliar input for copy content
  aux.value = this.textContent;
  document.body.appendChild(aux); // add input hidden
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux); // delete auxiliar input

  tooltip.textContent = `${this.id} copiado!`;
  tooltip.style.display = 'block';
  setTimeout(() => { tooltip.style.opacity = '1'; }, 10);
  setTimeout(() => {
    tooltip.style.opacity = '0';
    setTimeout(() => { tooltip.style.display = 'none'; }, 300);
}, 3000);
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
if (/project.html/.test(name)) {
  initProyectDetails();
  // setInterval(next, 8000);
}
if (/contacto.html/.test(name)) {
}

document.getElementById('burger').addEventListener('click', () => {
  activeModal(modal);
});
document.getElementById('number').addEventListener('click', copied);
document.getElementById('email').addEventListener('click', copied);
