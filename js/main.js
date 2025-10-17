// Selección del contenedor principal
const content = document.getElementById('content');
const links = document.querySelectorAll('nav a');

// Contenido de cada sección
const sections = {
  inicio: `
    <h2>Bienvenido</h2>
    <p>Esta es la página principal de nuestro proyecto web.</p>
  `,
  videos: `
    <h2>Videos</h2>
    <video controls width="400">
      <source src="assets/videos/ejemplo.mp4" type="video/mp4">
      Tu navegador no soporta videos.
    </video>
  `,
  tienda: `
    <h2>Tienda Virtual</h2>
    <div class="productos">
      <div class="producto">
        <img src="assets/img/producto1.jpg" alt="Producto 1">
        <h3>Producto 1</h3>
        <p>$50.000</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  `,
  donaciones: `
    <h2>Apoya nuestro proyecto</h2>
    <p>Si deseas contribuir, puedes hacerlo mediante:</p>
    <button onclick="window.open('https://paypal.me/tucuenta','_blank')">Donar vía PayPal</button>
  `,
  blog: `
    <h2>Blog</h2>
    <article>
      <h3>Primer artículo</h3>
      <p>Contenido de ejemplo del blog...</p>
    </article>
  `,
  info: `
    <h2>Sobre nosotros</h2>
    <p>Somos un proyecto dedicado a compartir contenido útil, educativo y entretenido.</p>
  `
};

// Cargar la sección inicial
content.innerHTML = sections.inicio;

// Escuchar clics del menú
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    content.innerHTML = sections[section] || "<p>Sección no encontrada</p>";
  });
});
