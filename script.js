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
  nike: [
    { marca: 'Nike', modelo: 'Air Jordan 1 Retro OG x Travis Scott High "Mocha"', precio: '$160', imagen: 'img/air_jordan1_travis_mocha.png', materiales: `• Empeine/base en cuero blanco.\n• Overlays en ante / nobuck café “Mocha”.\n• Swoosh XL invertido en cuero negro.` },
    { marca: 'Nike', modelo: 'Air Jordan 1 Retro High "Obsidian / UNC"', precio: '$155', imagen: 'img/air_jordan1_obsidian_unc.png', materiales: `• Upper construido totalmente en cuero (blanco Sail + paneles Obsidian + detalles University Blue).` },
    { marca: 'Nike', modelo: 'Air Jordan 1 High OG Dior ("Air Dior")', precio: '$1500', imagen: 'img/air_jordan1_dior.png', materiales: `• Cuero/calfskin italiano gris y blanco de primera calidad, hecho en Italia, con bordes pintados a mano.\n• Swoosh en jacquard Dior Oblique.\n• Suela translúcida con branding Dior.` },
    { marca: 'Nike', modelo: 'Air Jordan 1 High OG "Hyper Royal"', precio: '$170', imagen: 'img/air_jordan1_hyper_royal.png', materiales: `• Base en cuero blanco.\n• Overlays en gamuza / ante azul desgastado (“fading blue suede”).\n• Acentos gris claro en Swoosh y cuello.` },
    { marca: 'Nike', modelo: 'Air Jordan 3 "J Balvin - Rio"', precio: '$230', imagen: 'img/air_jordan3_jbalvin_rio.png', materiales: `• Upper en cuero negro.\n• Overlays clásicos tipo “elephant print”.\n• Mediasuela con degradado Solar Flare / Crimson / Abyss.` },
    { marca: 'Nike', modelo: 'Air Jordan 3 "Black Cat"', precio: '$200', imagen: 'img/air_jordan3_blackcat.png', materiales: `• Capellada en nubuck negro / gamuza sintética negra.\n• Mudguard en charol negro.\n• Overlays elephant print gris oscuro.\n• Suela con unidad Air visible.` },
    { marca: 'Nike', modelo: 'Air Jordan 3 Retro SE "Muslin"', precio: '$210', imagen: 'img/air_jordan3_muslin.png', materiales: '' },
    { marca: 'Nike', modelo: 'Air Jordan 4 Retro "Military Black"', precio: '$220', imagen: 'img/air_jordan4_military_black.png', materiales: '' },
    { marca: 'Nike', modelo: 'Air Jordan 4 Retro "Red Cement"', precio: '$230', imagen: 'img/air_jordan4_red_cement.png', materiales: '' },
    { marca: 'Nike', modelo: 'Air Jordan 4 Retro "Seafoam"', precio: '$230', imagen: 'img/air_jordan4_seafoam.png', materiales: '' },
    { marca: 'Nike', modelo: 'Nike Calm (Sandalia / Slide)', precio: '$50', imagen: 'img/nike_calm_slide.png', materiales: `• Construida en una sola pieza de espuma sintética suave.\n• Suela de goma resistente al agua.\n• Plantilla texturizada moldeada.` },
    { marca: 'Nike', modelo: 'Nike Air Max Plus (TN)', precio: '$190', imagen: 'img/nike_air_max_plus.png', materiales: `• Upper sintético con malla aireada (mesh).\n• Jaula y refuerzos en TPU.\n• Entresuela con unidades Air visibles.\n• Suela de goma.` },
    { marca: 'Nike', modelo: 'Nike Blazer Mid ’77 Vintage', precio: '$120', imagen: 'img/nike_blazer_mid77.png', materiales: `• Upper principalmente de cuero.\n• Refuerzos en ante (suede).\n• Lengua con espuma expuesta.\n• Suela de goma vulcanizada.` },
    { marca: 'Nike', modelo: 'Nike Air Max 90', precio: '$140', imagen: 'img/nike_air_max_90.png', materiales: `• Paneles de malla, ante y cuero.\n• Unidad Air Max visible.\n• Suela waffle de goma.` },
    { marca: 'Nike', modelo: 'Nike Shox TL "Fade Metallic Silver"', precio: '$210', imagen: 'img/nike_shox_tl.png', materiales: `• Upper de malla transpirable + refuerzos sintéticos.\n• Amortiguación Shox de longitud completa.\n• Suela de goma.` },
    { marca: 'Nike', modelo: 'Nike Air Max DN', precio: '$130', imagen: 'img/nike_air_max_dn.png', materiales: '' },
    { marca: 'Nike', modelo: 'Nike Air Zoom Vomero 5', precio: '$150', imagen: 'img/nike_vomero5.png', materiales: '' },
    { marca: 'Nike', modelo: 'Nike Court Vision Low', precio: '$90', imagen: 'img/nike_court_vision.png', materiales: '' },
    { marca: 'Nike', modelo: 'Air Force 1 Low "Drake NOCTA - Certified Lover Boy"', precio: '$180', imagen: 'img/air_force1_drake_nocta.png', materiales: `• Cuero granuloso blanco.\n• Entresuela con unidad Air.\n• Suela AF1 clásica.` },
    { marca: 'Nike', modelo: 'Air Force 1 Low "Panda"', precio: '$130', imagen: 'img/air_force1_panda.png', materiales: `• Paneles blanco/negro tipo “Panda”.\n• Entresuela de espuma.\n• Suela cupsole de goma.` },
    { marca: 'Nike', modelo: 'Air Force 1 (Triple Black)', precio: '$120', imagen: 'img/air_force1_black.png', materiales: `• Upper en cuero suave.\n• Entresuela Air.\n• Suela con patrón pivot.` },
    { marca: 'Nike', modelo: 'Air Force 1 (White Classic)', precio: '$120', imagen: 'img/air_force1_white.png', materiales: `• Upper de cuero liso.\n• Entresuela de espuma.\n• Suela de goma.` },
    { marca: 'Nike', modelo: 'Air Force 1 Low Off-White Verde ("Brooklyn")', precio: '$900', imagen: 'img/air_force1_offwhite_green.png', materiales: `• Cuero liso verde intenso.\n• Swoosh metálico plateado.\n• Suela con “AIR”.` },
    { marca: 'Nike', modelo: 'Air Force 1 Low Off-White Amarilla ("University Gold")', precio: '$950', imagen: 'img/air_force1_offwhite_yellow.png', materiales: `• Capellada de cuero amarillo dorado.\n• Swoosh metálico.\n• Entresuela con Air.` },
    { marca: 'Nike', modelo: 'Air Force 1 Low Off-White Azul ("University Blue")', precio: '$900', imagen: 'img/air_force1_offwhite_blue.png', materiales: `• Upper azul liso.\n• Swoosh plateado.\n• Suela de goma.` },
    { marca: 'Nike', modelo: 'Air Force 1 ’07', precio: '$100', imagen: 'img/air_force107.png', materiales: `• Upper de cuero.\n• Entresuela Air.\n• Suela de goma.` },
    { marca: 'Nike', modelo: 'Air Jordan 1 Low Travis Scott x Fragment', precio: '$750', imagen: 'img/air_jordan1_low_travis_fragment.png', materiales: `• Cuero blanco y azul royal.\n• Swoosh invertido.\n• Suela de goma.` },
    { marca: 'Nike', modelo: 'StrangeLove x Nike SB Dunk Low "Valentine’s Day"', precio: '$400', imagen: 'img/strangelove_sb_dunk.png', materiales: `• Terciopelo blanco y rosa.\n• Overlays de ante rosa.\n• Suela rosada translúcida.` },
    { marca: 'Nike', modelo: 'Nike Dunk Low Retro', precio: '$120', imagen: 'img/nike_dunk_low_retro.png', materiales: `• Upper en cuero bicolor.\n• Entresuela de espuma.\n• Suela de goma.` },
    { marca: 'Nike', modelo: 'Nike Dunk Low Next Nature', precio: '$120', imagen: 'img/nike_dunk_low_nextnature.png', materiales: '' },
    { marca: 'Nike', modelo: 'Nike Dunk Low "Coast" / UCLA', precio: '$135', imagen: 'img/nike_dunk_low_coast.png', materiales: `• Base blanca.\n• Overlays azul “Coast”.\n• Branding amarillo.` },
    { marca: 'Nike', modelo: 'Nike SB Dunk "Bear" (Grateful Dead Bears)', precio: '$600', imagen: 'img/nike_sb_dunk_bear.png', materiales: `• Peluche/faux fur neón.\n• Overlays de ante premium.\n• Lengua con bolsillo oculto.` },
  ],

  adidas: [
    { marca: 'Adidas', modelo: 'Campus Light x Bad Bunny', precio: '$180', imagen: 'img/adidas_campus_light_badbunny.png', materiales: `• Ante grueso tono crema.\n• Collar acolchado.\n• Guardabarros TPU.\n• Suela goma.` },
    { marca: 'Adidas', modelo: 'Forum Buckle Low "White" x Bad Bunny', precio: '$200', imagen: 'img/adidas_forum_badbunny.png', materiales: `• Cuero off-white.\n• Overlays en suede.\n• Correa ajustable.\n• Suela translúcida.` },
    { marca: 'Adidas', modelo: 'Samba OG "White / Black"', precio: '$130', imagen: 'img/adidas_samba_og.png', materiales: `• Cuero blanco full-grain.\n• Refuerzo de ante.\n• Forro sintético.\n• Suela tipo gum.` },
    { marca: 'Adidas', modelo: 'Yeezy 700 V3', precio: '$220', imagen: 'img/yeezy_700_v3.png', materiales: `• Malla monofilamento + cage RPU.\n• Bota interior tipo calcetín.\n• Puntera reforzada en goma.\n• Mediasuela EVA encapsulada en PU + suela espiga.` },
    { marca: 'Adidas', modelo: 'Gazelle / Gazelle Indoor', precio: '$110', imagen: 'img/adidas_gazelle.png', materiales: `• Upper de ante suave.\n• 3 stripes en cuero sintético.\n• Suela goma translúcida.` },
    { marca: 'Adidas', modelo: 'Superstar Foundation', precio: '$100', imagen: 'img/adidas_superstar.png', materiales: '' },
    { marca: 'Adidas', modelo: 'Stan Smith', precio: '$90', imagen: 'img/adidas_stansmith.png', materiales: '' },
    { marca: 'Adidas', modelo: 'Forum Low CL', precio: '$120', imagen: 'img/adidas_forum_low_cl.png', materiales: '' }
  ],

  newbalance: [
    { marca: 'New Balance', modelo: 'New Balance 550', precio: '$140', imagen: 'img/newbalance_550.png', materiales: `• Upper en cuero/malla perforada.\n• Cuello acolchado.\n• Mediasuela EVA.\n• Suela de goma.` },
    { marca: 'New Balance', modelo: 'New Balance 9060 "Sea Salt Raincloud"', precio: '$160', imagen: 'img/newbalance_9060.png', materiales: `• Malla + ante pigskin.\n• Tecnología ABZORB + SBS.\n• Suela patrón NB 860.` },
    { marca: 'New Balance', modelo: 'New Balance 327', precio: '$120', imagen: 'img/newbalance_327.png', materiales: '' },
    { marca: 'New Balance', modelo: 'New Balance 574', precio: '$110', imagen: 'img/newbalance_574.png', materiales: '' },
    { marca: 'New Balance', modelo: 'New Balance 990v6', precio: '$190', imagen: 'img/newbalance_990v6.png', materiales: '' }
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

  // ✅ Solo esta parte cambia (formato más limpio para materiales)
  const materialesFormateados = prod.materiales
    .split('•')
    .filter(m => m.trim() !== '')
    .map(m => `• ${m.trim()}`)
    .join('<br>');

  document.getElementById('modal-materiales').innerHTML = `
    <div style="text-align:center; margin-bottom:6px;">
      <strong>Materiales:</strong>
    </div>
    <div style="text-align:justify; line-height:1.5;">
      ${materialesFormateados}
    </div>
  `;
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