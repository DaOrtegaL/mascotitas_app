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

const fetchProducts = async () => {
  try {
    const apiURL = import.meta.env.VITE_API_URL;
    //Reemplazar apiURL en .env con la URL correcta
    console.log('URL', `${apiURL}/productos-mas-vendidos`);
    const response = await fetch(`${apiURL}/productos-mas-vendidos`);
    const data = await response.json();

    // Renderizar productos y paginación
    renderProducts(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Llamar la función para obtener los productos de la página 1 al cargar la página
fetchProducts();
