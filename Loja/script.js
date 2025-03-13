// Seleciona elementos importantes
const btnDepartamentos = document.getElementById('btn-departamentos');
const sideDrawer = document.getElementById('side-drawer');

// Evento para abrir/fechar a gaveta lateral
btnDepartamentos.addEventListener('click', () => {
  sideDrawer.classList.toggle('open');
});
