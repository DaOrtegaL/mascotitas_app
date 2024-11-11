document.addEventListener('DOMContentLoaded', async () => {
  const productsContainer = document.getElementById('products-container');
  
  if (!productsContainer) {
    console.error("El contenedor de productos no se encontró en el DOM.");
    return; // Salimos si no se encuentra el contenedor
  }

  let productos = [];

  async function getData() {
    const url = '/src/js/json/productos-recomendados.json';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      productos = data['productos-recomendados'];

      if (Array.isArray(productos) && productos.length > 0) {
        renderProductos();
        initCarousel(); // Iniciamos el carrusel después de renderizar
      } else {
        console.error("No se encontraron productos en la respuesta de la API.");
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  function renderProductos() {
    productsContainer.innerHTML = '';
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
        </div>`;
      
      productsContainer.innerHTML += productCard;
    });
  }

  function initCarousel() {
    if (typeof tns === "function") {
      tns({
        container: '#products-container',
        items: 1,
        loop: true,
        autoplay: true,
        controls: true,
        nav: false,
        responsive: {
          750: { items: 2 },
          900: { items: 3 },
          1190: { items: 4 },
        },
      });
    } else {
      console.error("La función `tns` no está definida. Asegúrate de que tiny-slider esté correctamente incluido.");
    }
  }

  getData();
});
