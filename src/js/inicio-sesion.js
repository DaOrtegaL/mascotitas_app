document.getElementById('login').addEventListener('submit', function (event) {
  event.preventDefault();

  // Captura los valores de los campos del formulario
  const email = document.getElementById('email-login').value;
  const contrasena = document.getElementById('password-login').value;

  // Enviar la solicitud con la estructura requerida
  fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      contrasena: contrasena,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Respuesta del servidor:', data);

      // Guarda el token en localStorage si existe
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        window.location.href = '/'; // Redirige si es necesario
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
