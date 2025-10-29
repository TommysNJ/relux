const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const catalogo = document.getElementById('catalogo');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const header = document.querySelector('.header'); // ✅ Header

// ===================== PRODUCTOS =====================
const productos = {
  chompas: [
    {
      marca: 'UrbanWear',
      modelo: 'Chompa Azul Clásica',
      precio: '$25',
      imagen: 'img/camiseta_negra.jpeg',
      descripcion: 'Chompa cómoda de lana ideal para el invierno.',
      materiales: 'Lana, algodón'
    },
    {
      marca: 'StyleZone',
      modelo: 'Chompa Roja Sport',
      precio: '$30',
      imagen: 'img/chompa_roja.png',
      descripcion: 'Chompa ligera y moderna para días fríos.',
      materiales: 'Algodón, poliéster'
    }
  ],
  zapatos: [
    {
      marca: 'ClassicStep',
      modelo: 'Zapatos Negros Elegance',
      precio: '$45',
      imagen: 'img/zapatos_negros.png',
      descripcion: 'Zapatos elegantes para toda ocasión.',
      materiales: 'Cuero sintético'
    }
  ],
  camisetas: [
    {
      marca: 'BasicLine',
      modelo: 'Camiseta Roja Soft',
      precio: '$15',
      imagen: 'img/camiseta_roja.png',
      descripcion: 'Camiseta básica de algodón suave.',
      materiales: 'Algodón 100%'
    },
    {
      marca: 'BasicLine',
      modelo: 'Camiseta Negra Premium',
      precio: '$18',
      imagen: 'img/camiseta_negra.jpeg',
      descripcion: 'Camiseta clásica negra con tela reforzada.',
      materiales: 'Algodón 100%'
    }
  ],
  accesorios: [
    {
      marca: 'UrbanFit',
      modelo: 'Gorra Negra Minimal',
      precio: '$10',
      imagen: 'img/gorra_negra.png',
      descripcion: 'Gorra con diseño minimalista y ajuste regulable.',
      materiales: 'Poliéster'
    }
  ]
};

// ===================== FUNCIONES DE CATÁLOGO =====================
function crearProducto(prod) {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.modelo}">
    <h3><strong>${prod.marca}</strong></h3>
    <p class="modelo">${prod.modelo}</p>
    <p class="precio">${prod.precio}</p>
  `;
  div.addEventListener('click', () => abrirModal(prod));
  catalogo.appendChild(div);
}

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
          <img src="${prod.imagen}" alt="${prod.modelo}">
          <h3><strong>${prod.marca}</strong></h3>
          <p class="modelo">${prod.modelo}</p>
          <p class="precio">${prod.precio}</p>
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

function mostrarProductos(categoria) {
  catalogo.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  catalogo.style.opacity = '0';
  catalogo.style.transform = 'translateY(20px) scale(0.98)';

  setTimeout(() => {
    catalogo.innerHTML = '';
    productos[categoria].forEach((prod, i) => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.style.animation = `fadeInUp 0.5s ease forwards`;
      div.style.animationDelay = `${i * 0.07}s`;
      div.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.modelo}">
        <h3><strong>${prod.marca}</strong></h3>
        <p class="modelo">${prod.modelo}</p>
        <p class="precio">${prod.precio}</p>
      `;
      div.addEventListener('click', () => abrirModal(prod));
      catalogo.appendChild(div);
    });

    void catalogo.offsetWidth;
    catalogo.style.opacity = '1';
    catalogo.style.transform = 'translateY(0) scale(1)';
  }, 350);
}

// ===================== MENÚ FLOTANTE =====================
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
  overlay.classList.add('active');
  menuToggle.classList.add('hidden');
  header.classList.add('hidden');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('hidden');
  header.classList.remove('hidden');
});

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

// ===================== MODAL =====================
function abrirModal(prod) {
  modal.classList.add('show');
  overlay.classList.add('active');

  document.getElementById('modal-img').src = prod.imagen;
  document.getElementById('modal-title').innerHTML = `<strong>${prod.marca}</strong> ${prod.modelo}`;
  document.getElementById('modal-precio').textContent = prod.precio;
  document.getElementById('modal-desc').textContent = prod.descripcion;
  document.getElementById('modal-materiales').textContent = `Materiales: ${prod.materiales}`;
}

closeModal.addEventListener('click', cerrarModal);
window.addEventListener('click', e => {
  if (e.target === modal) cerrarModal();
});

function cerrarModal() {
  modal.classList.remove('show');
  overlay.classList.remove('active');
  setTimeout(() => {
    modal.style.display = '';
  }, 400);
}

// ===================== CARGA INICIAL =====================
window.addEventListener('DOMContentLoaded', () => {
  header.classList.add('hidden');
  catalogo.classList.remove('show');
  mostrarTodosLosProductos();
  setTimeout(() => {
    header.classList.remove('hidden');
    catalogo.classList.add('show');
  }, 300);
});