/* eslint-disable import/extensions */
import '../styles/main.css';

import '../images/ball.png';
import '../images/easybank_desktop.jpg';
import '../images/easybank_ipad.jpg';
import '../images/easybank_mobile.jpg';
import '../images/ellipse.png';
import '../images/faq_accordion_desktop.jpg';
import '../images/faq_accordion_ipad.jpg';
import '../images/faq_accordion_mobile.jpg';
import '../images/profile_card_desktop.jpg';
import '../images/profile_card_ipad.jpg';
import '../images/profile_card_mobile.jpg';
import '../images/shorten-url_desktop.jpg';
import '../images/shorten-url_ipad.jpg';
import '../images/shorten-url_mobile.jpg';

import '../images/icons/desktopicons.svg';
import '../images/icons/facebook.svg';
import '../images/icons/github.svg';
import '../images/icons/instagram.svg';
import '../images/icons/left.svg';
import '../images/icons/linkedin.svg';
import '../images/icons/menu-ham.svg';
import '../images/icons/mobileicons.svg';
import '../images/icons/right.svg';
import '../images/icons/tableticons.svg';

import activeModal from './menuModal.js';
import initProyectDetails from './preyectDetails.js';

const json = require('./proyectos/proyectos.json');

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

if (name === '/') {
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
  initProyectDetails(json);
  // setInterval(next, 8000);
}

document.getElementById('burger').addEventListener('click', () => {
  activeModal(modal);
});
document.getElementById('Numero').addEventListener('click', copied);
document.getElementById('E-mail').addEventListener('click', copied);
