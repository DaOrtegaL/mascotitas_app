let productos = [];

async function getData() {
  const url = '/src/js/json/carrito-compra.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    productos = data.productos; // Asignar los productos obtenidos del JSON
    renderProductos(); // Llamar a la función para renderizar los productos
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

function renderProductos() {
  const carritoLista = document.querySelector('.carrito__lista--compra');
  carritoLista.innerHTML = ''; // Limpiar la lista antes de volver a renderizar

  let total = 0; // Variable para almacenar el total

  productos.forEach((producto) => {
    const itemHTML = `
      <li class="carrito__lista--items">
        <figure class="carrito__lista--items-img">
          <img src="${producto.imagen}" alt="imagen producto" />
          <figcaption class="carrito__lista--items-descripcion">
            <p class="carrito__lista--items-nombre">${producto.nombre}</p>
            <p class="carrito__lista--items-peso">${producto.peso}</p>
            <div class="carrito__lista--items-contador">
              <button class="decrementar">-</button>
              <span class="valor">${producto.cantidad}</span>
              <button class="incrementar">+</button>
            </div>
          </figcaption>
        </figure>
        <p class="carrito__lista--items-precio">precio: <span>$${producto.precio * producto.cantidad}</span></p>
      </li>
    `;
    carritoLista.innerHTML += itemHTML;

    // Sumar el precio del producto multiplicado por la cantidad
    total += producto.precio * producto.cantidad;
  });

  // Actualizar el total en el HTML
  document.querySelector(
    '.carrito__total--productos .card-lateral-izquierda',
  ).textContent = `${productos.length} productos`;
  document.querySelector(
    '.carrito__total--productos .card-lateral-derecha',
  ).textContent = `$${total.toLocaleString()}`;

  const envio =
    document.querySelector('.carrito__total--envio .card-lateral-derecha')
      .textContent === 'Gratis'
      ? 0
      : parseFloat(
          document
            .querySelector('.carrito__total--envio .card-lateral-derecha')
            .textContent.replace(/[$,.]/g, '')
            .trim(),
        );
  const TotalPrecio = total + envio;
  document.querySelector(
    '.carrito__total--total .card-lateral-derecha',
  ).textContent = `$${TotalPrecio.toLocaleString()}`;
}

// Event listeners para incrementar y decrementar cantidades
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('incrementar')) {
    const productoNombre = event.target
      .closest('li')
      .querySelector('.carrito__lista--items-nombre').textContent;
    const producto = productos.find((p) => p.nombre === productoNombre);
    producto.cantidad++;
    renderProductos();
  }

  if (event.target.classList.contains('decrementar')) {
    const productoNombre = event.target
      .closest('li')
      .querySelector('.carrito__lista--items-nombre').textContent;
    const producto = productos.find((p) => p.nombre === productoNombre);
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
    renderProductos();
  }
});

// Llamar a la función para obtener los datos
getData();
