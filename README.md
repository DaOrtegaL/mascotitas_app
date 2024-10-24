# Mascotitas PetShop - Proyecto Frontend con Vite, Web Components y Sass

Este es un proyecto frontend desarrollado con **Vite**, usando **Vanilla JavaScript**, **Web Components** para componentes reutilizables, y **Sass** para estilos. También incluye **ESLint** y **Prettier** para mantener la calidad y consistencia del código.

## Estructura del Proyecto

mascotitas_petshop/
│
├── dist/                   # Carpeta generada para los archivos compilados (Producción)
├── node_modules/            # Dependencias instaladas por npm
├── src/                     # Carpeta principal del proyecto
│   ├── components/          # Archivos HTML de los componentes reutilizables
│   │   └── footer.html      # Componente de footer como archivo HTML externo
│   ├── js/                  # Archivos JavaScript
│   │   ├── main.js          # Archivo principal JS
│   │   └── my-component.js  # Definición de Web Components
│   ├── styles/              # Archivos Sass
│   │   └── styles.scss      # Archivo Sass principal
│   └── assets/              # Archivos estáticos (imágenes, fuentes, etc.)
├── .eslintrc.js             # Configuración de ESLint
├── .prettierrc              # Configuración de Prettier
├── index.html               # Página principal del proyecto
├── vite.config.js           # Configuración de Vite
├── package.json             # Configuración del proyecto y scripts npm
└── README.md                # Información del proyecto

Tecnologías Utilizadas
- Vite: Bundler de frontend ligero y rápido.
- Vanilla JavaScript: Usamos JavaScript nativo sin frameworks adicionales.
- Web Components: Componentes reutilizables y encapsulados.
- Sass: Preprocesador CSS para organizar mejor los estilos.
- ESLint: Herramienta para identificar y reportar patrones problemáticos en JavaScript.
- Prettier: Formateador de código para asegurar consistencia en el estilo.

Scripts Disponibles
En el archivo package.json, hay varios scripts disponibles que facilitan el desarrollo y la compilación del proyecto.

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src/**/*.js",
  "lint:fix": "eslint src/**/*.js --fix",
  "format": "prettier --write ."
}

## Instalación y Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/DaOrtegaL/mascotitas_app.git
   cd mascotitas_petshop

2. Instala las dependencias:

    npm install

3. Inicia el servidor de desarrollo:

    npm run dev

4. Compila el proyecto para producción:

    npm run build



