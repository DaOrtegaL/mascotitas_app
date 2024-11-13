document
  .getElementById('registro')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const tipoContribuyente =
      document.getElementById('tipoContribuyente').value;
    const numeroIdentificacion =
      document.getElementById('numero-documento').value;
    const direccion = document.getElementById('inputAddress2').value;
    const informacionAdicional = document.getElementById(
      'Informacion-adicional',
    ).value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('inputPassword').value;

    if (
      document.getElementById('inputPassword').value ==
      document.getElementById('inputConfirmPassword').value
    ) {
      // Enviar la solicitud con la estructura requerida
      fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          tipo_contribuyente: tipoContribuyente,
          numero_identificacion: numeroIdentificacion,
          direccion: direccion,
          informacion_adicional: informacionAdicional,
          email: email,
          contrasena: contrasena,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (
            data.msg ===
            'Este correo ya se encuentra registrado, ¡Usuario ya existente!'
          ) {
            alert(
              'Error: Este correo ya se encuentra registrado, ¡Usuario ya existente!',
            );

            console.log('Respuesta del servidor:', data);
          } else {
            window.location.href = '/inicio-sesion';
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      alert('las contraseñas no coinciden');
    }
  });
