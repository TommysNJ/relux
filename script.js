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
function mostrarTodosLosProductos() {
  catalogo.innerHTML = '';
  Object.keys(productos).forEach(categoria => {
    productos[categoria].forEach(prod => crearProducto(prod));
  });
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
  catalogo.innerHTML = '';
  productos[categoria].forEach(prod => crearProducto(prod));
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

// Modal
function abrirModal(prod) {
  modal.style.display = 'flex';
  overlay.classList.add('active');
  document.getElementById('modal-img').src = prod.imagen;
  document.getElementById('modal-title').textContent = prod.titulo;
  document.getElementById('modal-desc').textContent = prod.descripcion;
  document.getElementById('modal-materiales').textContent = prod.materiales;
  document.getElementById('modal-precio').textContent = prod.precio;
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.classList.remove('active');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    overlay.classList.remove('active');
  }
});

window.addEventListener('DOMContentLoaded', mostrarTodosLosProductos);

// === INICIO (PANTALLA DE PRESENTACIÓN) ===
const inicio = document.getElementById('inicio');
const btnEmpezar = document.getElementById('btn-empezar');

// Bloquea el scroll mientras está en la pantalla de inicio
document.body.style.overflow = "hidden";

btnEmpezar.addEventListener('click', () => {
  inicio.classList.add('oculto');

  // Restaura el scroll después de desaparecer
  setTimeout(() => {
    inicio.style.display = 'none';
    document.body.style.overflow = "auto";
  }, 600); // mismo tiempo que el fade-out
});