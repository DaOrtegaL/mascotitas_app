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
          * {
    box-sizing: border-box;
    margin: 0;
}

.footer {
    min-height: 450px;
    min-width: 100%;
    background-image: url(/public/images/footer_background.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
    
    align-items: flex-start;
    display: flex;
    flex-flow: row wrap;
    text-decoration: none;
    
   
  }
  .footer__logo {
    display: flex;
    flex-direction: column;
    margin-top: 132px;
    margin-left: 89px;
    gap: 10px;  
    
  }

  .footer__perros ul, .footer__gatos ul, .footer__tiendaOnline ul, .footer__enlaces ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }
  
  .footer__perros a, .footer__gatos a, .footer__tiendaOnline a, .footer__enlaces a {
 
    text-decoration: none;
    color: black;
    
  }

  
  .footer ul {
    list-style: none;
    padding: 0;
    margin-top: 94px; /* Espacio de 94px en la parte superior de cada lista */
  }
  
 
  
  .footer__gatos,
  .footer__tiendaOnline,
  .footer__enlaces,
  .footer__perros {
    display: flex;
    align-items: flex-start;
    padding-right: 50px;
    
  }
  .footer__perros {
       
    padding-left: 170px;
    
  }
  .footer__redes{
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
.bar{
    padding-left: 20px;
    color: white;
    min-height: 99px;
    display: flex;
    flex-flow: row wrap;
    gap: 45px;
    align-items: center;
    background-color: #999999;

}
.bar__texto{
    padding-right: 15px;
}
        </style>
        <section class="footer">
        <div class="footer__logo">
          <img src="/public/images/footer_logo.png" alt="Logo Footer" />
          <p>Calle 33 sur # 50a 12</p>
          <h4>Síguenos:</h4>
            <div class="footer__redes">
                <a href="#" class="footer__IG"
                    ><img src="/public/images/footer_instagram.png" alt="Instagram logo"
                /></a>
                <a href="#" class="footer__X"
                    ><img src="/public/images/X_footer.png" alt="X logo"
                /></a>
                <a href="#" class="footer__facebook"
                    ><img src="/public/images/facebook_footer.png" alt="Instagram logo"
                /></a>
            </div>
        </div>
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
      `;

    // Clonamos el template y lo añadimos al shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Definir el nuevo componente con un nombre personalizado
customElements.define('footer-mascotitas', Footer);
