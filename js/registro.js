const inputUsuario = document.getElementById('idUsuario');
const inputCorreo = document.getElementById('idCorreo');
const inputContra = document.getElementById('idContra');
const inputRContra = document.getElementById('idRContra');
const botonReg = document.getElementById('botonReg');
const usuarioPrimero=document.getElementById("id-usuario")
const usuarioSegundo=document.getElementById("id-usuario2")
const correvalido=document.getElementById("id-correo")
const contraseñavalida=document.getElementById("id-contraseña")
const contraseñavalidasegunda=document.getElementById("id-contraseña2")

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
  usuarioSegundo.classList.add("cambio-display")
  if (usuario.length < 6) {
    usuarioPrimero.classList.remove("cambio-display")
    return false;
  }else{
    usuarioPrimero.classList.add("cambio-display")
  }

  if (!validateEmail(correo)) {
    correvalido.classList.remove("cambio-display")
    return false;
  }else{
    correvalido.classList.add("cambio-display")
  }

  if (contrasena.length < 8 || !/\d/.test(contrasena)) {
    contraseñavalida.classList.remove("cambio-display")
    return false;
  }else{
    contraseñavalida.classList.add("cambio-display")
  }

  if (contrasena !== rContrasena) {
    contraseñavalidasegunda.classList.remove("cambio-display")
    return false;
  }else{
    contraseñavalidasegunda.classList.add("cambio-display")
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
          return usuarioSegundo.classList.remove("cambio-display")
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
      }
      
    }
  }
};

inputUsuario.addEventListener('input', formValues);
inputCorreo.addEventListener('input', formValues);
inputContra.addEventListener('input', formValues);
inputRContra.addEventListener('input', formValues);
botonReg.addEventListener('click', sendForm);