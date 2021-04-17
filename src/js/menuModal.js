export default function activeModal(modal) {
  // detecta el estado del menu (activo/inactivo) y lo cambia
  const m = modal;
  // eslint-disable-next-line no-bitwise
  if (m.style.transform === 'translateX(100%)' | modal.style.transform === '') {
    m.style.transform = 'translateX(0)';
    return true;
  } else {
    m.style.transform = 'translateX(100%)';
    return false;
  }
}

export function closeModal(modal) {
  // cierra el modal si esta activo si esta inactivo no hace nada
  const m = modal;
  if (m.style.transform === 'translateX(0px)') {
    m.style.transform = 'translateX(100%)';
  }
}
