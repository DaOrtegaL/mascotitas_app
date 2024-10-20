const renderProducts = (data) => {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = '';
  data.products.forEach((producto) => {
    const productCard = `
      <div class="productos__grid--card">
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
