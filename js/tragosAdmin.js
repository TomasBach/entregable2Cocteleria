const tBody = document.getElementById('tBodyTragosAdmin');
const tragos = JSON.parse(localStorage.getItem('tragos')) || []

const buttonCreate = document.getElementById('idButtonCreate')

const inputNameNTrago = document.getElementById('inputNameNTrago')
const inputImgNTrago = document.getElementById('inputImgNTrago')
const inputIngred1NTrago = document.getElementById('inputIngred1NTrago')
const inputIngred2NTrago = document.getElementById('inputIngred2NTrago')
const inputIngred3NTrago = document.getElementById('inputIngred3NTrago')
const inputIngred4NTrago = document.getElementById('inputIngred4NTrago')
const inputIngred5NTrago = document.getElementById('inputIngred5NTrago')

const navbarAdminCantTrago = document.getElementById('navbarAdminCantTrago')

navbarAdminCantTrago.innerHTML = 
  `<p class="text-light">Actualmente hay: ${tragos.length} Trago/s</p>`


tBodyTragosAdmin.innerHTML = tragos.map((trago) =>
  `
    <div class="my-auto">
    <tr >
        <th scope="row" class="fs-5">${trago.id}</th>
        <td product-id="${trago.id}" class="fs-5"><b>${trago.name}</b></td>
        <td product-id="${trago.id}"><img src="${trago.img}" class="img-tabla-admin" alt="Imagen ilustrativa del trago"></td>
        <td product-id="${trago.id}">
         <ul class="lista-ingredientes mt-3 fs-5">
            <li>${trago.ingred.ingred1} </li>
            <li>${trago.ingred.ingred2} </li>
            <li>${trago.ingred.ingred3} </li>
            <li>${trago.ingred.ingred4} </li>
            <li>${trago.ingred.ingred5} </li>
         </ul>
        </td>

        <td>
        <button class="btn btn-outline-danger" onclick="borrarTrago(${trago.id})">Eliminar</button>

            <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal-${trago.id}">
              Editar
            </button>
            
            <div class="modal fade" id="exampleModal-${trago.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${trago.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel-${trago.id}">${trago.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Nombre</label>
                      <input type="text" class="form-control inputNameTrago" maxlength="50" minlength="5"  aria-describedby="emailHelp" value="${trago.name}" name="nameTrago">
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Imagen</label>
                    <input type="text" class="form-control inputImgTrago"  aria-describedby="emailHelp" maxlength="50" minlength="5" value="Por ej: ${trago.img}" name="imagTrago">
                  </div>
                    <h5 class="text-center">Ingrese los ingredientes del trago </h5>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Ingrediente 1</label>
                      <input type="text" class="form-control inputIngred1" aria-describedby="emailHelp" maxlength="50" minlength="5" value="${trago.ingred.ingred1}" name="ingrediente1">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Ingrediente 2</label>
                      <input type="text" class="form-control inputIngred2"  aria-describedby="emailHelp" maxlength="50" minlength="5" value="${trago.ingred.ingred2}" name="ingrediente2">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Ingrediente 3</label>
                      <input type="text" class="form-control inputIngred3" aria-describedby="emailHelp" maxlength="50" minlength="5" value="${trago.ingred.ingred3}" name="ingrediente3">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Ingrediente 4</label>
                      <input type="text" class="form-control inputIngred4" aria-describedby="emailHelp" maxlength="50" minlength="5" value="${trago.ingred.ingred4}" name="ingrediente4">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Ingrediente 5</label>
                      <input type="text" class="form-control inputIngred5" aria-describedby="emailHelp" maxlength="50" minlength="5" value="${trago.ingred.ingred5}" name="ingrediente5">
                    </div>
                    
                    
                    <button type="button" class="btn btn-primary" onclick="editarTrago(${trago.id})">Guardar Cambios</button>
                </form>
                </div>
                
                </div>
            </div>
            </div>
            <button class="btn btn-outline-success" onclick="tragoDestacado(${trago.id})">Destacar</button>
        </td>
    </tr>
    </div>
    `
).join('')

const inputNameTrago= document.querySelectorAll(".inputNameTrago")
const inputImgTrago = document.querySelectorAll(".inputImgTrago")
const inputIngrediente1 = document.querySelectorAll(".inputIngred1")
const inputIngrediente2 = document.querySelectorAll(".inputIngred2")
const inputIngrediente3 = document.querySelectorAll(".inputIngred3")
const inputIngrediente4 = document.querySelectorAll(".inputIngred4")
const inputIngrediente5 = document.querySelectorAll(".inputIngred5")

const dataForm = {
  nameTrago: '',
  imagTrago: '',
  ingrediente1: '',
  ingrediente2: '',
  ingrediente3: '',
  ingrediente4: '',
  ingrediente5: ''

}
const formCreate = {
  nameNTrago: '',
  imgNTrago: '',
  ingred1NTrago: '',
  ingred2NTrago: '',
  ingred3NTrago: '',
  ingred4NTrago: '',
  ingred5NTrago: '',
}
const changeValues = (ev) => {
  const { name, value } = ev.target
  dataForm[name] = value
}
const createBotForm = (ev) => {
  const { name, value } = ev.target
  formCreate[name] = value
}

const editarTrago = (idTrago) => {
  const { nameTrago, imagTrago, ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5 } = dataForm


  const positionTrago = tragos.findIndex((trago) => trago.id === Number(idTrago))
  const filterTrago = tragos.filter((trago) => trago.id === Number(idTrago))
  if (filterTrago.length > 0) {
    filterTrago[0].name = nameTrago ? nameTrago : filterTrago[0].name
    filterTrago[0].img = imagTrago ? imagTrago : filterTrago[0].img
    filterTrago[0].ingred.ingred1 = ingrediente1 ? ingrediente1 : filterTrago[0].ingred.ingred1
    filterTrago[0].ingred.ingred2 = ingrediente2 ? ingrediente2 : filterTrago[0].ingred.ingred2
    filterTrago[0].ingred.ingred3 = ingrediente3 ? ingrediente3 : filterTrago[0].ingred.ingred3
    filterTrago[0].ingred.ingred4 = ingrediente4 ? ingrediente4 : filterTrago[0].ingred.ingred4
    filterTrago[0].ingred.ingred5 = ingrediente5 ? ingrediente5 : filterTrago[0].ingred.ingred5
    tragos[positionTrago] = filterTrago[0]
    localStorage.setItem('tragos', JSON.stringify(tragos))
    location.reload()
  }
}

const sendFormCreate = (ev) => {
  const { nameNTrago, imgNTrago, ingred1NTrago, ingred2NTrago, ingred3NTrago, ingred4NTrago, ingred5NTrago} = formCreate

  if (!nameNTrago && !imgNTrago && !ingred1NTrago && !ingred2NTrago && !ingred3NTrago && !ingred4NTrago && !ingred5NTrago) {
    alert('el formulario esta vacio')
  } else {

    const newId = tragos[tragos.length - 1].id + 1

    const tragosN = {
      id: newId,
      name: nameNTrago,
      img: imgNTrago,
      ingred:{
        ingred1: ingred1NTrago,
        ingred2: ingred2NTrago,
        ingred3: ingred3NTrago,
        ingred4: ingred4NTrago,
        ingred5: ingred5NTrago,
      }
    }
    tragos.push(tragosN)
    localStorage.setItem('tragos', JSON.stringify(tragos))
    location.reload()
  }
}
const borrarTrago = (idTrago) => {
  const confirmDelete = confirm('Confirmas que quieres eliminar este trago?')

  if (confirmDelete) {
    const filterProd = tragos.filter((trago) => trago.id !== Number(idTrago))
    localStorage.setItem('tragos', JSON.stringify(filterProd))
    location.reload()
  }
}
const tragoDestacado = (idTrago) => {
  let tragoDest = JSON.parse(localStorage.getItem('tragoDest')) || []
  if (tragoDest.length > 0) {
    if (idTrago !== tragoDest[0].id) {
    const confirmCambioDest = confirm('Estas seguro de que quieres reemplazar el trago destacado?')  
    if (confirmCambioDest) {
        const tragFilter = tragos.filter((trago) => trago.id === idTrago)
        tragoDest = tragFilter
        localStorage.setItem('tragoDest', JSON.stringify(tragoDest))
      }
    } else { alert('este trago esta destacado') }
  } else {
    const tragFilter = tragos.filter((trago) => trago.id === idTrago)
    tragoDest.push(tragFilter[0])
    localStorage.setItem('tragoDest', JSON.stringify(tragoDest))
  }
}

inputNameTrago.forEach( element => {
  element.addEventListener('input', changeValues)
});
inputImgTrago.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputIngrediente1.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputIngrediente2.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputIngrediente3.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputIngrediente4.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputIngrediente5.forEach(element => {
  element.addEventListener('input', changeValues)
});


inputNameNTrago.addEventListener('input', createBotForm)
inputImgNTrago.addEventListener('input', createBotForm)
inputIngred1NTrago.addEventListener('input', createBotForm)
inputIngred2NTrago.addEventListener('input', createBotForm)
inputIngred3NTrago.addEventListener('input', createBotForm)
inputIngred4NTrago.addEventListener('input', createBotForm)
inputIngred5NTrago.addEventListener('input', createBotForm)

buttonCreate.addEventListener('click', sendFormCreate)