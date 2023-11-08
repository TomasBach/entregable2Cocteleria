const inputUsuario = document.getElementById('idUsuario');
const inputContra = document.getElementById('idContrasena');
const botonIniciar = document.getElementById('botonIniciar');
const incorrectocontraseña=document.getElementById("idusuario")
const blanco=document.getElementById("idblanco")

const objForm = {
  email: '',
  contrasena: '',
};

const formValues = (ev) => {
  const { name, value } = ev.target;
  objForm[name] = value;
};

const validateForm = () => {
  const {email, contrasena } = objForm;

  if (email.trim() === '' || contrasena.trim() === '') {
    blanco.classList.remove("cambio-display")
    return false;
  }else{
    blanco.classList.add("cambio-display")
  }

  return true;
};

const sendForm = (ev) => {
  ev.preventDefault();

  if (validateForm()) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExist = usuarios.filter((usuarioLS) => usuarioLS.mail === objForm.email);

    if (usuarioExist.length === 0) {
      incorrectocontraseña.classList.remove("cambio-display")

    } else if (usuarioExist[0].contraseña === objForm.contrasena && usuarioExist[0].deleted == false) {
      incorrectocontraseña.classList.add("cambio-display")

      usuarioExist[0].login = true;
     
      localStorage.setItem('usuario', JSON.stringify(usuarioExist));

      if (usuarioExist[0].role === 'admin') {
        location.href = './ADMIN/inicioAdmin.html';
      } else {
        location.href = './USUARIO/inicioUsuario.html';
      }
    } else {
      incorrectocontraseña.classList.remove("cambio-display")
    }
  }
};

inputUsuario.addEventListener('input', formValues);
inputContra.addEventListener('input', formValues);
botonIniciar.addEventListener('click', sendForm);