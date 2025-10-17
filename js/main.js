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
function cargarVideos() {
  fetch('videos.json')
    .then(res => res.json())
    .then(data => {
      const contenedor = document.getElementById('videos-container');
      contenedor.innerHTML = '';

      for (const categoria in data) {
        const videos = data[categoria];

        // Crear subsección
        const subseccion = document.createElement('div');
        subseccion.className = 'video-subseccion';
        subseccion.innerHTML = `<h3>${formatearTitulo(categoria)}</h3>`;

        // Crear grid de videos
        const grid = document.createElement('div');
        grid.className = 'video-grid';

        videos.forEach(video => {
          const item = document.createElement('div');
          item.className = 'video-item';
          item.innerHTML = `
            <iframe src="${video.url}" title="${video.titulo}" allowfullscreen></iframe>
          `;
          grid.appendChild(item);
        });

        subseccion.appendChild(grid);
        contenedor.appendChild(subseccion);
      }
    })
    .catch(err => {
      console.error('Error al cargar los videos:', err);
    });
}

// Formatear título de categoría
function formatearTitulo(clave) {
  switch (clave) {
    case 'populares': return '🎬 Videos Populares';
    case 'recientes': return '🆕 Videos Recientes';
    case 'cortos': return '📱 Videos Cortos';
    default: return clave;
  }
}

// Llamar la función cuando se muestre la sección de videos
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.remove('activa');
  });

  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.add('activa');
    if (id === 'videos') cargarVideos();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  mostrarSeccion('inicio');
});
