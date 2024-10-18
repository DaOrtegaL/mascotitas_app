class Footer extends HTMLElement {
  constructor() {
    super();
    // Creamos un shadow DOM para encapsular el componente
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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


.footer {
  display: flex;
  gap: 10px; /* Espacio entre columnas */
  background-image: url(/public/images/footer_background.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 450px;
  max-width: auto;
  align-items: center;
  justify-content: space-between;
  padding:0 4rem;
  /* padding: 40px; Espaciado interno del footer */
}

.footer__listas{
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 para listas */
  gap: 5px; /* Espacio entre columnas */
  align-items: flex-start;
  
}

.footer__logo {
  text-align: flex-start;

  
  /* margin-top: 132px;
  margin-left: 89px; */
}

.footer__logo .footer__logo--img {
  min-width: 192px; /* Tamaño responsivo */
  margin-bottom: 10px;
}

.footer__redes {
  display: flex;
  justify-content: flex-start;
  gap: 10px; /* Espaciado entre íconos de redes sociales */
  
}

.footer__perros ul li a, 
.footer__gatos ul li a,
.footer__tiendaOnline ul li a,
.footer__enlaces ul li a{
  list-style-type: none;
  text-decoration: none;
  color: inherit;
  padding: 0%;
  min-width: 138px;
  color: var(--marron-tierra);
}
.footer__perros ul li, 
.footer__gatos ul li,
.footer__tiendaOnline ul li,
.footer__enlaces ul li{
  list-style-type: none;
  padding: 0%;
 
}
.footer__listas div ul{
  padding: 0%;
}

.footer__perros  li, 
.footer__gatos  li,
.footer__tiendaOnline  li,
.footer p,
.footer__enlaces li {
  margin-bottom: 10px; /* Espaciado entre los elementos de la lista */
  font-size: 14px; /* Tamaño de fuente */
  color: #333; 
}



.bar{
  background-color: #999999;
  min-height: 99px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: var(--blanco-crema);

}

.bar img{
  max-height: 39px;
}
@media (min-width: 1400px){



  
}

@media (max-width: 990px) {
  .footer {
    height: auto;
    
  }
  .footer__listas{
    grid-template-columns: repeat(2, 1fr) ;/* dos columnas en pantallas medianas */
  }
  .footer__logo{
    margin-left: 0;
  }
  .footer__logo img{
    min-width: 60%;
    
  }
  .bar{
    height: auto;
    flex-flow: row wrap;
    gap: 15px;
  }
}
</style>
<footer>
  <section class="footer">
    <div class="footer__logo">
      <img class="footer__logo--img" src="/public/images/footer_logo.png" alt="Logo Footer" />
      <p>Calle 33 sur # 50a 12</p>
      <h4>Síguenos:</h4>
      <div class="footer__redes">
        <a href="#" class="footer__IG"><img src="/public/images/footer_instagram.png" alt="Instagram logo" /></a>
        <a href="#" class="footer__X"><img src="/public/images/X_footer.png" alt="X logo" /></a>
        <a href="#" class="footer__facebook"><img src="/public/images/facebook_footer.png" alt="Instagram logo" /></a>
      </div>
    </div>
    <div class="footer__listas">
      <div class="footer__perros">
        <ul>
          <li><b>Productos para perros</b></li>
          <br />
          <li><a href="#">Alimento</a></li>
          <li><a href="#">Accesorios</a></li>
          <li><a href="#">Cuidado e higiene </a></li>
          <li><a href="#">Limpieza</a></li>
          <li><a href="#">Snacks</a></li>
          <li><a href="#">Juguetes</a></li>
          <li><a href="#">Comederos y bebederos</a></li>
        </ul>
      </div>
      <div class="footer__gatos">
        <ul>
          <li><b>Productos para gatos</b></li>
          <br />
          <li><a href="#">Alimento</a></li>
          <li><a href="#">Accesorios</a></li>
          <li><a href="#">Cuidado e higiene</a></li>
          <li><a href="#">Limpieza</a></li>
          <li><a href="#">Snacks</a></li>
          <li><a href="#">Juguetes</a></li>
          <li><a href="#">Comederos y bebederos</a></li>
          <li><a href="#">Gimnasios</a></li>
        </ul>
      </div>
      <div class="footer__tiendaOnline">
        <ul>
          <li><b>Tienda online</b></li>
          <br />
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Formas de entrega</a></li>
          <li><a href="#">Envío programado</a></li>
          <li><a href="#">Recoge en tienda</a></li>
        </ul>
      </div>
      <div class="footer__enlaces">
        <ul>
          <li><b>Enlaces de interés</b></li>
          <br />
          <li><a href="#">Aviso de privacidad</a></li>
          <li><a href="#">Politicas de envío</a></li>
          <li><a href="#">Cambios y devoluciones</a></li>
          <li><a href="#">Garantía de productos</a></li>
          <li><a href="#">Preguntas frecuentes</a></li>
        </ul>
      </div>
    </div>
  </section>
  <section class="bar">
    <p>© 2024 Mascotitas pet shop | Todos los derechos reservados.</p>
    <p class="bar__texto">Paga de forma segura</p>
    <img src="/public/images/visa_footer.png" alt="Visa logo">
    <img src="/public/images/mastercard_footer.png" alt="Mastercard logo">
    <img src="/public/images/americanxpress_footer.png" alt="American Express logo">
    <img src="/public/images/pse_footer.png" alt="pse logo">
    <img src="/public/images/nequi_footer.png" alt="nequi logo">
  </section>
</footer>        
      `;

    // Clonamos el template y lo añadimos al shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Definir el nuevo componente con un nombre personalizado
customElements.define('footer-mascotitas', Footer);
