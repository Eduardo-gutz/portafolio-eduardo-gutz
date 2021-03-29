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

import activeModal from './menuModal.js';
import initProyectDetails from './preyectDetails.js';
import sendMail from './contact.js';

const name = document.location.pathname;

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
const modal = document.getElementById('nav-bar__modal');

document.getElementById('burger').addEventListener('click', () => {
  activeModal(modal);
});
