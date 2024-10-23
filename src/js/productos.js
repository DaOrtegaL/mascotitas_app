const renderProducts = (data) => {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = '';
  data.products.forEach((producto) => {
    const productCard = `
      <div class="card">
        <div class="image_container">
          <img src="/public/images/productos/${producto.image}" alt="${producto.name}" class="card-image">
        </div>
        <div class="info">
          <div class="text-container">
            <h3 class="title">${producto.name}</h3>
            <p class="description">${producto.description}</p>
          </div>
          <div class="price-container">
            <span class="price">${producto.price}</span>
            <button class="add-to-cart">
              <img src="/public/images/icons/carrito-agregar.png" alt="Carrito" width="42px" heigth="41px">
            </button>
          </div>
        </div>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });
};

const renderPagination = (data) => {
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(data.totalProducts / data.limit); // Calcular total de páginas
  const currentPage = data.page;

  // Botón de "Anterior"
  const prevButton = `<button class="productos__pagination--anterior page-button prev" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">Anterior</button>`;
  paginationContainer.innerHTML += prevButton;

  // Botones de paginación para cada página
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = `<button class="productos__pagination--numero page-button ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    paginationContainer.innerHTML += pageButton;
  }

  // Botón de "Siguiente"
  const nextButton = `<button class="productos__pagination--siguiente page-button next" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">Siguiente</button>`;
  paginationContainer.innerHTML += nextButton;

  // Añadir listeners a los botones de paginación, "Anterior" y "Siguiente"
  document.querySelectorAll('.page-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const page = e.target.getAttribute('data-page');
      fetchProducts(page); // Función que obtiene los productos de la API
    });
  });
};

const fetchProducts = async (page = 1) => {
  try {
    const apiURL = import.meta.env.VITE_API_URL;
    //Reemplazar apiURL en .env con la URL correcta
    console.log('URL', `${apiURL}/products?page=${page}&limit=12`);
    const response = await fetch(`${apiURL}/products?page=${page}&limit=12`);
    const data = await response.json();

    // Renderizar productos y paginación
    renderProducts(data);
    renderPagination(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Llamar la función para obtener los productos de la página 1 al cargar la página
fetchProducts();

document.querySelectorAll('.accordion-button').forEach((button) => {
  button.addEventListener('click', function () {
    const svgIcon = this.querySelector('.expand-icon');
    const tituloSubCategoria = this.querySelector('.titulo-icon');
    const tituloIcono = this.querySelector('.icono-titulo');

    if (this.classList.contains('collapsed')) {
      // Cambiar el ícono si el acordeón está colapsado
      svgIcon.innerHTML = '';
      tituloIcono.src = `/public/images/icons/${tituloIcono.id}-marron.svg`;
      tituloSubCategoria.style.color = 'var(--marron-tierra)';
      svgIcon.innerHTML = `<svg width="17" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9801 10.9362C10.5575 10.9371 10.1479 10.7896 9.82247 10.5194L0.778436 3.26936C0.409047 2.9617 0.176752 2.51961 0.132654 2.04034C0.0885558 1.56107 0.236266 1.08387 0.543291 0.713729C0.850315 0.343586 1.2915 0.110818 1.7698 0.0666296C2.2481 0.0224413 2.72432 0.170452 3.09371 0.478104L10.9801 6.7856L18.8665 0.768105C19.0515 0.617548 19.2644 0.505116 19.4929 0.437271C19.7215 0.369426 19.9611 0.347506 20.1981 0.37277C20.4351 0.398035 20.6648 0.469986 20.874 0.584488C21.0831 0.698991 21.2677 0.853787 21.4169 1.03998C21.5826 1.22634 21.708 1.44498 21.7854 1.68219C21.8628 1.9194 21.8905 2.17007 21.8667 2.41849C21.843 2.66692 21.7683 2.90775 21.6473 3.1259C21.5263 3.34404 21.3617 3.5348 21.1637 3.68623L12.1197 10.6281C11.7849 10.8556 11.3837 10.9641 10.9801 10.9362Z" fill="#593D2D"/>
</svg>`;
    } else {
      // Cambiar el ícono si el acordeón está expandido
      svgIcon.innerHTML = '';
      tituloIcono.src = `/public/images/icons/${tituloIcono.id}-naranja.svg`;
      tituloSubCategoria.style.color = 'var(--naranja-vivo)';
      svgIcon.innerHTML = `<svg width="19" height="11" viewBox="0 0 13 7" xmlns="http://www.w3.org/2000/svg">
<path  d="M6.48902 0.500701C6.25585 0.500245 6.02987 0.581619 5.85033 0.7307L0.860516 4.7307C0.656716 4.90044 0.528553 5.14435 0.504223 5.40878C0.479893 5.6732 0.561388 5.93648 0.730781 6.1407C0.900174 6.34492 1.14359 6.47334 1.40748 6.49772C1.67136 6.5221 1.93411 6.44044 2.13791 6.2707L6.48902 2.7907L10.8401 6.1107C10.9422 6.19377 11.0597 6.2558 11.1858 6.29323C11.3118 6.33066 11.4441 6.34276 11.5748 6.32882C11.7056 6.31488 11.8323 6.27518 11.9477 6.21201C12.0631 6.14883 12.1649 6.06343 12.2473 5.9607C12.3387 5.85788 12.4079 5.73725 12.4506 5.60638C12.4933 5.47551 12.5086 5.33721 12.4954 5.20014C12.4823 5.06308 12.4411 4.93021 12.3744 4.80985C12.3076 4.68949 12.2168 4.58425 12.1075 4.5007L7.11774 0.670701C6.93303 0.545185 6.71167 0.48533 6.48902 0.500701Z" fill="#F05A25"/>
</svg>`;
    }
  });
});
