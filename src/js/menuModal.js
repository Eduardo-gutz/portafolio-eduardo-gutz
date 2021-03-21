export default function activeModal(modal) {
  // eslint-disable-next-line no-bitwise
  if (modal.style.transform === 'translateX(100%)' | modal.style.transform === '') {
    modal.style.display = 'flex'; //provicional retitar para produccion
    modal.style.transform = 'translateX(0)';
  } else {
    modal.style.transform = 'translateX(100%)';
    modal.style.display = 'none';// provicional retirar para produccion
  }
}
