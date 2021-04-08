export default function activeModal(modal) {
  const m = modal;
  // eslint-disable-next-line no-bitwise
  if (modal.style.transform === 'translateX(100%)' | modal.style.transform === '') {
    m.style.display = 'flex'; // provicional retitar para produccion
    m.style.transform = 'translateX(0)';
  } else {
    m.style.transform = 'translateX(100%)';
    m.style.display = 'none';// provicional retirar para produccion
  }
}
