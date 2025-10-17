function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
    seccion.classList.remove('activa');
  });

  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.classList.add('activa');
  }
}

// Mostrar "inicio" al cargar
window.addEventListener('DOMContentLoaded', () => {
  mostrarSeccion('inicio');
});
