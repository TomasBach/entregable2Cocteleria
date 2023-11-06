const tBody = document.getElementById('tBodyUsuariosAdmin');
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
const buttonCreate = document.getElementById('idButtonCreate')

const inputMailNUsuario = document.getElementById('inputMailNUsuario')
const inputContNUsuario = document.getElementById('inputContNUsuario')
const inputRoleNUsuario = document.getElementById('inputRoleNUsuario')

const navbarAdminCantBot = document.getElementById('navbarAdminCantBot')

navbarAdminCantUsuarios.innerHTML = 
  `<p class="text-light">Actualmente hay: ${usuarios.length} usuario/s</p>`


  tBodyUsuariosAdmin.innerHTML = usuarios.map((usuario) =>
  `
    <div class="my-auto">
    <tr>
        <th scope="row" class="fs-5">${usuario.id}</th>
        <td product-id="${usuario.id}" class="fs-5"><b>${usuario.mail}</b></td>
        <td product-id="${usuario.id}" class="fs-5">${usuario.role}</td>
        <td>
        <button class="${usuario.deleted ? 'btn btn-outline-success' : 'btn btn-outline-danger'}" onclick="${usuario.deleted ? `habilitarUser(${usuario.id})` : ` borrarProd(${usuario.id})`}">${usuario.deleted ? 'Habilitar' : 'Deshabilitar'}</button>
            <button type="button" class="btn btn-outline-warning my-3" data-bs-toggle="modal" data-bs-target="#exampleModal-${usuario.id}">
              Editar
            </button>
            
            <div class="modal fade" id="exampleModal-${usuario.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${usuario.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel-${usuario.id}">Modificar Usuaio</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Nombre</label>
                      <input type="text" class="form-control inputMailUsuario"  aria-describedby="emailHelp" value="${usuario.mail}" name="mailUsuario">
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Role</label>
                    <select class="form-select inputRoleUsuario" name="roleUsuario" aria-label="Default select example">
                    <option disable>Role actual: ${usuario.role === 'user' ? 'Usuario' : 'Administrador'}</option>
                    <option value="user">Usuario</option>
                    <option  value="admin">Administrador</option>
                </select>
                  </div>
                    <button type="button" class="btn btn-primary" onclick="editarUsuario(${usuario.id})">Guardar Cambios</button>
                </form>
                </div>
                
                </div>
            </div>
            </div>
        </td>
    </tr>
    </div>
    `
).join('')

const inputMailUsuario= document.querySelectorAll(".inputMailUsuario")
const inputRoleUsuario = document.querySelectorAll(".inputRoleUsuario")

const dataForm = {
  mailUsuario: '',
  roleUsuario: '',

}

const formCreate = {
  mailNUsuario: '',
  contraseñaNUsuario: '',
  roleNUsuario: '',
}

const changeValues = (ev) => {
  const { name, value } = ev.target
  dataForm[name] = value
}
const createUsuForm = (ev) => {
  const { name, value } = ev.target
  formCreate[name] = value
}

const editarUsuario = (idUsuario) => {
  const { mailUsuario, roleUsuario } = dataForm

  const filterUsuario = usuarios.filter((usuario) => usuario.id === Number(idUsuario))
  const positionUsuario = usuarios.findIndex((usuario) => usuario.id === Number(idUsuario))

  if (filterUsuario.length > 0) {
    filterUsuario[0].mail = mailUsuario ? mailUsuario :  filterUsuario[0].mail
    filterUsuario[0].role = roleUsuario ? roleUsuario :  filterUsuario[0].role


      usuarios[positionUsuario] = filterUsuario[0]
      localStorage.setItem('usuarios', JSON.stringify(usuarios))
      location.reload()
  }
 }

 const sendFormCreate = (ev) => {
  const { mailNUsuario, contraseñaNUsuario, roleNUsuario } = formCreate

  if (!mailNUsuario && !contraseñaNUsuario && !roleNUsuario) {
    alert('el formulario esta vacio')
  } else {

    const newId = usuarios[usuarios.length - 1].id + 1

    const usuarioN = {
      id: newId,
      mail: mailNUsuario,
      contraseñaNUsuario: contraseñaNUsuario,
      role: roleNUsuario,
      deleted: false,
      login: false,
    }
    usuarios.push(usuarioN)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

  }
}
const borrarProd = (idUsuario) => {
  const confirmDeleted = confirm('Estas seguro de que quieres deshabilitar este usuario?')

  if (confirmDeleted) {
    const filterUsuarios = usuarios.filter((usuario) => usuario.id === idUsuario)
    filterUsuarios[0].deleted = true
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    location.reload()
  }
}

const habilitarUser = (idUsuario) => {
  const confirmDeleted = confirm('Estas seguro de que quieres habilitar a este usuario?')

  if (confirmDeleted) {
    const filterUsuarios = usuarios.filter((usuario) => usuario.idUsuario === idUsuario)
    filterUsuarios[0].deleted = false
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    location.reload()
  }
}

inputMailUsuario.forEach( element => {
  element.addEventListener('input', changeValues)
});
inputRoleUsuario.forEach(element => {
  element.addEventListener('input', changeValues)
});



inputMailNUsuario.addEventListener('input', createUsuForm)
inputContNUsuario.addEventListener('input', createUsuForm)
inputRoleNUsuario.addEventListener('input', createUsuForm)

buttonCreate.addEventListener('click', sendFormCreate)