const togglePassword2 = document.getElementById('eyeIcon_2');
const passwordInput2 = document.getElementById('inputConfirmPassword');

togglePassword2.addEventListener('click', function () {
  // Alternar el tipo de input entre 'password' y 'text'
  const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput2.setAttribute('type', type);

  // Cambiar la imagen del icono según el tipo de input
  if (type === 'text') {
    togglePassword2.src = '../../public/images/icons/ocultar.png'; // Imagen para ocultar la contraseña
    togglePassword2.alt = 'Ocultar contraseña';
  } else {
    togglePassword2.src = '../../public/images/icons/mostrar.svg'; // Imagen para mostrar la contraseña
    togglePassword2.alt = 'Mostrar contraseña';
  }
});

const togglePassword = document.getElementById('eyeIcon');
const passwordInput = document.getElementById('inputPassword');

togglePassword.addEventListener('click', function () {
  // Alternar el tipo de input entre 'password' y 'text'
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Cambiar la imagen del icono según el tipo de input
  if (type === 'text') {
    togglePassword.src = '../../public/images/icons/ocultar.png'; // Imagen para ocultar la contraseña
    togglePassword.alt = 'Ocultar contraseña';
  } else {
    togglePassword.src = '../../public/images/icons/mostrar.svg'; // Imagen para mostrar la contraseña
    togglePassword.alt = 'Mostrar contraseña';
  }
});
