const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const catalogo = document.getElementById('catalogo');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const header = document.querySelector('.header'); // ✅ Header

const productos = {
  chompas: [
    { titulo: 'Chompa Azul', precio: '$25', imagen: 'img/camiseta_negra.jpeg', descripcion: 'Chompa cómoda de lana.', materiales: 'Lana, algodón' },
    { titulo: 'Chompa Roja', precio: '$30', imagen: 'img/chompa_roja.png', descripcion: 'Chompa ligera para el frío.', materiales: 'Algodón, poliéster' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_roja.png', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_roja.png', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_roja.png', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' }
  ],
  zapatos: [
    { titulo: 'Zapatos Negros', precio: '$45', imagen: 'img/zapatos_negros.png', descripcion: 'Zapatos elegantes para toda ocasión.', materiales: 'Cuero sintético' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_negra.jpeg', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_negra.jpeg', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_roja.png', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' }
  ],
  camisetas: [
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_roja.png', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_negra.jpeg', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_roja.png', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_negra.jpeg', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' }
  ],
  accesorios: [
    { titulo: 'Gorra Negra', precio: '$10', imagen: 'img/gorra_negra.png', descripcion: 'Gorra con diseño minimalista.', materiales: 'Poliéster' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_negra.jpeg', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_negra.jpeg', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' },
    { titulo: 'Camiseta Roja', precio: '$15', imagen: 'img/camiseta_roja.png', descripcion: 'Camiseta básica de algodón.', materiales: 'Algodón 100%' }
  ]
};

// Mostrar todos los productos
// Mostrar TODOS los productos con animación
function mostrarTodosLosProductos() {
  catalogo.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  catalogo.style.opacity = '0';
  catalogo.style.transform = 'translateY(20px) scale(0.98)';

  setTimeout(() => {
    catalogo.innerHTML = '';

    let delay = 0;
    Object.keys(productos).forEach(categoria => {
      productos[categoria].forEach(prod => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.style.animation = `fadeInUp 0.5s ease forwards`;
        div.style.animationDelay = `${delay * 0.07}s`;
        div.innerHTML = `
          <img src="${prod.imagen}" alt="${prod.titulo}">
          <h3>${prod.titulo}</h3>
          <p>${prod.precio}</p>
        `;
        div.addEventListener('click', () => abrirModal(prod));
        catalogo.appendChild(div);
        delay++;
      });
    });

    void catalogo.offsetWidth;
    catalogo.style.opacity = '1';
    catalogo.style.transform = 'translateY(0) scale(1)';
  }, 350);
}

function crearProducto(prod) {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.titulo}">
    <h3>${prod.titulo}</h3>
    <p>${prod.precio}</p>
  `;
  div.addEventListener('click', () => abrirModal(prod));
  catalogo.appendChild(div);
}

function mostrarProductos(categoria) {
  // 🔹 Aplica una transición de salida fluida
  catalogo.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  catalogo.style.opacity = '0';
  catalogo.style.transform = 'translateY(20px) scale(0.98)';

  // 🔹 Espera que la animación de salida termine antes de reemplazar el contenido
  setTimeout(() => {
    catalogo.innerHTML = '';

    // 🔹 Crea los nuevos productos
    productos[categoria].forEach((prod, i) => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.style.animation = `fadeInUp 0.5s ease forwards`;
      div.style.animationDelay = `${i * 0.07}s`; // ⚡ efecto escalonado
      div.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.titulo}">
        <h3>${prod.titulo}</h3>
        <p>${prod.precio}</p>
      `;
      div.addEventListener('click', () => abrirModal(prod));
      catalogo.appendChild(div);
    });

    // 🔹 Reinicia y aplica animación de entrada global
    void catalogo.offsetWidth; // fuerza reflow
    catalogo.style.opacity = '1';
    catalogo.style.transform = 'translateY(0) scale(1)';
  }, 350);
}

// === MENÚ FLOTANTE IZQUIERDO ===
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
  overlay.classList.add('active');
  menuToggle.classList.add('hidden');
  header.classList.add('hidden'); // 👈 Oculta el header
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('hidden');
  header.classList.remove('hidden'); // 👈 Muestra el header
});

// Selección de categoría
document.querySelectorAll('.menu li').forEach(item => {
  item.addEventListener('click', () => {
    const categoria = item.getAttribute('data-category');
    document.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
    item.classList.add('active');

    if (categoria === 'todos') mostrarTodosLosProductos();
    else mostrarProductos(categoria);

    menu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('hidden');
    header.classList.remove('hidden');
  });
});

// === MODAL ===
function abrirModal(prod) {
  // ✨ Animación suave
  modal.classList.add('show');
  overlay.classList.add('active');

  document.getElementById('modal-img').src = prod.imagen;
  document.getElementById('modal-title').textContent = prod.titulo;
  document.getElementById('modal-desc').textContent = prod.descripcion;
  document.getElementById('modal-materiales').textContent = prod.materiales;
  document.getElementById('modal-precio').textContent = prod.precio;
}

closeModal.addEventListener('click', cerrarModal);
window.addEventListener('click', e => {
  if (e.target === modal) cerrarModal();
});

function cerrarModal() {
  // ✨ Transición de salida suave
  modal.classList.remove('show');
  overlay.classList.remove('active');
  // Espera el fin de la transición antes de ocultar del todo
  setTimeout(() => {
    modal.style.display = '';
  }, 400);
}

// === CARGA INICIAL ===
// === CARGA INICIAL ===
window.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Oculta header y catálogo al cargar
  header.classList.add('hidden');
  catalogo.classList.remove('show');

  // 2️⃣ Crea los productos
  mostrarTodosLosProductos();

  // 3️⃣ Espera un instante y muestra ambos de forma sincronizada
  setTimeout(() => {
    header.classList.remove('hidden');
    catalogo.classList.add('show');
  }, 300); // puedes ajustar entre 150–300 ms según gusto
});