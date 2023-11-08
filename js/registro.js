
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
  mail: '',
  contraseña: '',
  rContrasena: '',
};

const formValues = (ev) => {
  const { name, value } = ev.target;
  objForm[name] = value;
};

const validateForm = () => {
  const {mail, contraseña, rContrasena } = objForm;
  usuarioSegundo.classList.add("cambio-display")


  if (!validateEmail(mail)) {
    correvalido.classList.remove("cambio-display")
    return false;
  }else{
    correvalido.classList.add("cambio-display")
  }

  if (contraseña.length < 8 || !/\d/.test(contraseña)) {
    contraseñavalida.classList.remove("cambio-display")
    return false;
  }else{
    contraseñavalida.classList.add("cambio-display")
  }

  if (contraseña !== rContrasena) {
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

    const {mail, contraseña, rContrasena } = objForm;

    if (mail && contraseña && rContrasena) {
      if (contraseña === rContrasena) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExist = usuarios.filter((usuarioLS) => usuarioLS.mail === mail);
        if (usuarioExist.length > 0) {
          return usuarioSegundo.classList.remove("cambio-display")
        }

     
        const nuevoUsuario = {
          id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
          mail,
          contraseña,
          role: 'user',
          login: true,
          deleted: false,
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

inputCorreo.addEventListener('input', formValues);
inputContra.addEventListener('input', formValues);
inputRContra.addEventListener('input', formValues);
botonReg.addEventListener('click', sendForm);