const inputUsuario = document.getElementById('idUsuario');
const inputContra = document.getElementById('idContrasena');
const botonIniciar = document.getElementById('botonIniciar');

const objForm = {
  usuario: '',
  contrasena: '',
};

const formValues = (ev) => {
  const { name, value } = ev.target;
  objForm[name] = value;
};

const validateForm = () => {
  const { usuario, contrasena } = objForm;

  if (usuario.trim() === '' || contrasena.trim() === '') {
    alert('Por favor, completa todos los campos.');
    return false;
  }

  return true;
};

const sendForm = (ev) => {
  ev.preventDefault();

  if (validateForm()) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExist = usuarios.filter((usuarioLS) => usuarioLS.usuario === objForm.usuario);

    if (usuarioExist.length === 0) {
      alert('El usuario no existe');
    } else if (usuarioExist[0].contrasena === objForm.contrasena) {
      usuarioExist[0].login = true;
      console.log(objForm);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      if (usuarioExist[0].rol === 'admin') {
        location.href = './ADMIN/inicioAdmin.html';
      } else {
        location.href = './USUARIO/inicioUsuario.html';
      }
    } else {
      alert('Usuario y/o contraseña incorrectos');
    }
  }
};

inputUsuario.addEventListener('input', formValues);
inputContra.addEventListener('input', formValues);
botonIniciar.addEventListener('click', sendForm);
