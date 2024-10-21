class ProductosSimilares extends HTMLElement {
  constructor() {
    super();
    // Creamos un shadow DOM para encapsular el componente
    this.attachShadow({ mode: 'open' });
    this.products = [];
    this.currentIndex = 0;
    this.pageSize = 4;
  }

  async connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  
  :root{
    --salmon-claro: #F2A172;
    --naranja-vivo: #F05A25;
    --marron-tierra: #593D2D;
    --blanco-crema: #FFF3EC;
    --blanco: #FFFFFF;
    --negro: #000000;
  }
  
  .finalizar-compra__productos-similares {
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow:hidden;
}
.finalizar-compra__productos-similares--prev {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  background-image: url("/public/images/icons/arrow_left_salmon.svg");
  background-color: var(--blanco);
  cursor: pointer;
  transition: all 0.3s ease;
}
.finalizar-compra__productos-similares--prev:hover {
  background-color: var(--blanco);
  background-image: url("/public/images/icons/arrow_left_blanco.svg");
}
.finalizar-compra__productos-similares--next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
  background-image: url("/public/images/icons/arrow_right_salmon.svg");
  background-color: var(--blanco);
  transition: all 0.3s ease;
}
.finalizar-compra__productos-similares--next:hover {
  background-color: var(--blanco);
  background-image: url("/public/images/icons/arrow_right_blanco.svg");
}
.finalizar-compra__products-container {
  display: flex;
  flex-direction: row;
  gap: 28px;
  width: calc(240px * 4 + 28px * 3);
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
}
.finalizar-compra__products-container .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  border: 1px solid var(--salmon-claro);
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 240px;
}
.finalizar-compra__products-container .card:hover {
  box-shadow: 0 4px 4px rgb(240, 90, 37);
  background-color: var(--blanco-crema);
  cursor: pointer;
}
.finalizar-compra__products-container .card:hover .info .price-container .add-to-cart {
  background-color: var(--blanco-crema);
}
.finalizar-compra__products-container .card .image_container {
  min-height: 357px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.finalizar-compra__products-container .card h3,
.finalizar-compra__products-container .card p {
  color: var(--marron-tierra);
  text-align: start;
  font-size: 16px;
}
.finalizar-compra__products-container .card .info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.finalizar-compra__products-container .card .info .text-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 4px;
  white-space: pre-line;
}
.finalizar-compra__products-container .card .info .price-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--naranja-vivo);
  margin-top: 4px;
}
.finalizar-compra__products-container .card .info .price-container .price {
  font-weight: 500;
  font-size: 16px;
}
.finalizar-compra__products-container .card .info .price-container .add-to-cart {
  background-color: var(--blanco);
  border: 0;
  padding: 0;
  cursor: pointer;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  gap: 20px;
  padding: 30px 0px;
  border-top: 1px var(--salmon-claro) solid;
}
.titulo{
  color: var(--naranja-vivo);
  font-size: 32px;
  font-weight: 600;
}

</style>
<div class="container">
  <h2 class="titulo">Productos similares</h2>
  <div class="finalizar-compra__productos-similares">
    <button id="prev" class="finalizar-compra__productos-similares--prev"></button>
    <div
        id="products-container"
        class="finalizar-compra__products-container"
    >
    </div>
    <button id="next" class="finalizar-compra__productos-similares--next"></button>
  </div>
</div>  
        `;

    // Clonamos el template y lo añadimos al shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    await this.fetchProducts();

    // Añadir los eventListeners para los botones
    this.shadowRoot
      .querySelector('#next')
      .addEventListener('click', () => this.nextProduct());
    this.shadowRoot
      .querySelector('#prev')
      .addEventListener('click', () => this.prevProduct());
  }

  async fetchProducts() {
    try {
      const apiURL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiURL}/productos-similares`);
      const data = await response.json();
      this.products = data.products || [];
      console.log('products', data.products);
      this.renderProducts();
    } catch (error) {
      console.error('Error fetching similar products:', error);
    }
  }

  renderProducts() {
    const productsContainer = this.shadowRoot.querySelector(
      '#products-container',
    );
    if (!productsContainer) {
      console.error('products-container not found!');
      return;
    }

    // Limpiar el contenido antes de volver a agregar productos
    productsContainer.innerHTML = '';

    // Mostrar cuatro productos a partir del currentIndex
    for (let i = 0; i < this.pageSize; i++) {
      const index = (this.currentIndex + i) % this.products.length; // Índice ciclado
      const producto = this.products[index];

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
    }
  }

  nextProduct() {
    // Avanzar el índice en uno, pero ciclar al principio si llega al final
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
    this.renderProducts();
  }

  prevProduct() {
    // Retroceder el índice en uno, pero ciclar al final si llega al principio
    this.currentIndex =
      (this.currentIndex - 1 + this.products.length) % this.products.length;
    this.renderProducts();
  }
}

// Definir el nuevo componente con un nombre personalizado
customElements.define('productos-similares', ProductosSimilares);
