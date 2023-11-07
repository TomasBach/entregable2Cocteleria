const inputUsuario = document.getElementById('idUsuario');
const inputCorreo = document.getElementById('idCorreo');
const inputContra = document.getElementById('idContra');
const inputRContra = document.getElementById('idRContra');
const botonReg = document.getElementById('botonReg');

const objForm = {
  usuario: '',
  correo: '',
  contrasena: '',
  rContrasena: '',
};

const formValues = (ev) => {
  const { name, value } = ev.target;
  objForm[name] = value;
};

const validateForm = () => {
  const { usuario, correo, contrasena, rContrasena } = objForm;

  if (usuario.length < 6) {
    alert('El usuario debe tener al menos 6 caracteres.');
    return false;
  }

  if (!validateEmail(correo)) {
    alert('Por favor, ingresa una dirección de correo válida.');
    return false;
  }

  if (contrasena.length < 8 || !/\d/.test(contrasena)) {
    alert('La contraseña debe tener al menos 8 caracteres y al menos un número.');
    return false;
  }

  if (contrasena !== rContrasena) {
    alert('Las contraseñas no coinciden.');
    return false;
  }

  return true;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sendForm = (ev) => {
  ev.preventDefault();

  if (validateForm()) {
    // Resto del código para enviar el formulario
    const { usuario, correo, contrasena, rContrasena } = objForm;

    if (usuario && correo && contrasena && rContrasena) {
      if (contrasena === rContrasena) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExist = usuarios.filter((usuarioLS) => usuarioLS.usuario === usuario);
        if (usuarioExist.length > 0) {
          return alert('El usuario ya existe');
        }

        const nuevoUsuario = {
          id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
          usuario,
          correo,
          contrasena,
          rol: 'usuario',
          login: true,
        };

        usuarios.push(nuevoUsuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
        setTimeout(() => {
          location.href = './USUARIO/inicioUsuario.html';
        }, 1000);
      } else {
        alert('Las contraseñas no coinciden');
      }
    }
  }
};

inputUsuario.addEventListener('input', formValues);
inputCorreo.addEventListener('input', formValues);
inputContra.addEventListener('input', formValues);
inputRContra.addEventListener('input', formValues);
botonReg.addEventListener('click', sendForm);
