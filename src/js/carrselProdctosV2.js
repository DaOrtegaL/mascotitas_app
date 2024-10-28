document.addEventListener('DOMContentLoaded', async () => {
  const productsContainer = document.getElementById('products-container');
  let productos = [];

  async function getData() {
    const url = '/src/js/json/productos-recomendados.json'; // Asegúrate de que esta ruta sea correcta
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      productos = data['productos-recomendados']; // Cambiado para acceder a la propiedad correcta
      renderProductos();
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  function renderProductos() {
    productsContainer.innerHTML = ''; // Limpia el contenedor antes de renderizar
    productos.forEach((producto) => {
      const productCard = `
              <div class="carousel__slide">
                <div class="card">
                  <div class="card__image-container">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="card__image">
                  </div>
                  <div class="card__info">
                    <div class="card__text-container">
                      <h3 class="card__title">${producto.nombre}</h3>
                      <p class="card__description">Peso: ${producto.peso}</p>
                    </div>
                    <div class="card__price-container">
                      <span class="card__price">$${producto.precio}</span>
                      <button class="card__add-to-cart">
                        <img src="/public/images/icons/carrito-agregar.png" alt="Carrito" width="42px" height="41px">
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
      productsContainer.innerHTML += productCard; // Agrega cada tarjeta de producto al contenedor
    });

    initCarousel(); // Inicializa el carrusel después de cargar los productos
  }

  function initCarousel() {
    // eslint-disable-next-line no-undef, no-unused-vars
    const slider = tns({
      container: '#products-container',
      items: 3,
      slideBy: 'page',
      loop: false,
      controls: false,
      nav: false,
      // eslint-disable-next-line no-dupe-keys
      controls: true,
    });
  }

  // Llamar a la función para obtener los datos
  getData();
});
