export default function activeModal(modal) {
  const m = modal;
  // eslint-disable-next-line no-bitwise
  if (m.style.transform === 'translateX(100%)' | modal.style.transform === '') {
    m.style.transform = 'translateX(0)';
  } else {
    m.style.transform = 'translateX(100%)';
  }
}
