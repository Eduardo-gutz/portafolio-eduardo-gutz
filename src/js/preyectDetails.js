/* eslint-disable import/extensions */
import { prev, next } from './slider.js';

export default function initProyectDetails() {
  const projectCard = document.getElementById('project');
  const btnLeft = document.querySelector('#left');
  const btnRight = document.querySelector('#right');
  const buttonPage = document.querySelectorAll('.button__page');
  let { hash } = document.location;
  let index = hash[hash.length - 1];

  hash = '#index=2';

  const loadProject = (response) => {
    // projectCard.style.opacity = '0';
    const pro = response[index];

    projectCard.querySelector('.title').innerHTML = pro.name;

    const images = projectCard.querySelectorAll('.slider__img');
    images[1].src = `../images/${pro.images.desktop}`;
    images[2].src = `../images/${pro.images.tablet}`;
    images[0].src = `../images/${pro.images.mobile}`;
    projectCard.querySelector('.card__text').innerHTML = pro.description;

    // projectCard.style.opacity = '';
  };
  const getProyect = () => {
    fetch('../js/proyectos/proyectos.json')
      .then((response) => response.json())
      .then((response) => { loadProject(response); });
  };

  const loadPage = (event) => {
    index = event.target.textContent - 1;
    hash = `#index=${index}`;
    getProyect();
    buttonPage.forEach((page) => {
      page.classList.remove('button_active');
    });
    event.target.classList.add('button_active');
    document.location = `${document.location.pathname}${hash}`;
  };

  btnLeft.addEventListener('click', prev);
  btnRight.addEventListener('click', next);

  buttonPage.forEach((page) => {
    const button = page.textContent - 1;
    // eslint-disable-next-line eqeqeq
    if (button == index) {
      page.classList.add('button_active');
    }
    page.addEventListener('click', loadPage, false);
  });

  getProyect();
  // setInterval(next, 8000);
}
