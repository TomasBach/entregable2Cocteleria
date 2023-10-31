const tBody = document.getElementById('tBodyBotellasAdmin');
const botellas = JSON.parse(localStorage.getItem('botellas')) || []

tBodyBotellasAdmin.innerHTML = botellas.map((botella) =>
  `
    <div class="my-auto">
    <tr >
        <th scope="row" class="fs-5">${botella.id}</th>
        <td product-id="${botella.id}" class="fs-5"><b>${botella.name}</b></td>
        <td product-id="${botella.id}"><img src="${botella.img}" style="width:10vw; height:25vh;" alt="Imagen ilustrativa de la botella"></td>
        <td product-id="${botella.id}" class="fs-5">${botella.licor}</td>
        <td product-id="${botella.id}" class="fs-5">${botella.price}</td>
        <td product-id="${botella.id}" class="fs-5">${botella.descrp}</td>

        <td>
        <button class="btn btn-danger" onclick="borrarBotella(${botella.id})">Eliminar</button>

            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal-${botella.id}">
              Editar
            </button>
            
            <div class="modal fade" id="exampleModal-${botella.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${botella.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel-${botella.id}">${botella.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="inputNamebotella" aria-describedby="emailHelp" value="${botella.name}" name="namebotella">
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Imagen</label>
                    <input type="text" class="form-control" id="inputImgbotella" aria-describedby="emailHelp" value="Por ej: ${botella.img}" name="imagbotella">
                  </div>
                    <h5 class="text-center">Ingrese los ingredientes del botella </h5>
                    
                    
                    
                    <button type="button" class="btn btn-primary" onclick="editarbotella(${botella.id})">Guardar Cambios</button>
                </form>
                </div>
                
                </div>
            </div>
            </div>
            <button class="btn btn-success" onclick="botellaDestacado(${botella.id})">Destacar</button>
        </td>
    </tr>
    </div>
    `
).join('')

// const inputNameTrago = document.getElementById('inputNameTrago')
// const inputImgTrago = document.getElementById('inputImgTrago')
// const inputIngrediente1 = document.getElementById('inputIngrediente1')
// const inputIngrediente2 = document.getElementById('inputIngrediente2')
// const inputIngrediente3 = document.getElementById('inputIngrediente3')
// const inputIngrediente4 = document.getElementById('inputIngrediente4')
// const inputIngrediente5 = document.getElementById('inputIngrediente5')

// const dataForm = {
//   nameTrago: '',
//   imagTrago: '',
//   ingred: {
//     ingrediente1: '',
//     ingrediente2: '',
//     ingrediente3: '',
//     ingrediente4: '',
//     ingrediente5: ''
//   },
// }
// const changeValues = (ev) => {
//   const { name, value } = ev.target
//   dataForm[name] = value
// }

// const editarTrago = (idTrago) => {
//   const { nameTrago, imagTrago, ingred } = dataForm

//   const filterTrago = tragos.filter((trago) => trago.id === Number(idTrago))
//   const positionTrago = tragos.findIndex((trago) => trago.id === Number(idTrago))

//   if (filterTrago.length > 0) {
//     filterTrago[0].name = nameTrago ? nameTrago : filterTrago[0].name
//     filterTrago[0].imgTrago = imagTrago ? imagTrago : filterTrago[0].imgTrago
//     filterTrago[0].ingred.ingred1 = ingred.ingrediente1 ? ingred.ingrediente1 : filterTrago[0].ingred.ingred1
//     filterTrago[0].ingred.ingred2 = ingred.ingrediente2 ? ingred.ingrediente2 : filterTrago[0].ingred.ingred2
//     filterTrago[0].ingred.ingred3 = ingred.ingrediente3 ? ingred.ingrediente3 : filterTrago[0].ingred.ingred3
//     filterTrago[0].ingred.ingred4 = ingred.ingrediente4 ? ingred.ingrediente4 : filterTrago[0].ingred.ingred4
//     filterTrago[0].ingred.ingred5 = ingred.ingrediente5 ? ingred.ingrediente5 : filterTrago[0].ingred.ingred5
//     tragos[positionTrago] = filterTrago[0]

//     localStorage.setItem('tragos', JSON.stringify(tragos))
//   }
// }

// const borrarTrago = (idTrago) => {
//   const confirmDelete = confirm('Confirmas que quieres eliminar este trago?')

//   if (confirmDelete) {
//     const filterProd = tragos.filter((trago) => trago.id !== Number(idTrago))
//     localStorage.setItem('tragos', JSON.stringify(filterProd))
//     location.reload()
//   }
// }

// const tragoDestacado = (idTrago) => {
//   let tragoDest = JSON.parse(localStorage.getItem('tragoDest')) || []
//   if (tragoDest.length > 0) {
//     if (idTrago !== tragoDest[0].id) {
//       const confirmCambioDest = confirm('Estas seguro de que quieres reemplazar el trago destacado?')
//       if (confirmCambioDest) {
//         const tragFilter = tragos.filter((trago) => trago.id === idTrago)
//         localStorage.setItem('tragoDest', JSON.stringify(tragFilter))
//       }
//     } else { alert('este trago esta destacado') }
//   } else {
//     const tragFilter = tragos.filter((trago) => trago.id === idTrago)
//     tragoDest = tragFilter
//     tragoDest.push(tragoDest[0])
//     localStorage.setItem('tragoDest', JSON.stringify(tragoDest))
//   }
// }

// inputNameTrago.addEventListener('input', changeValues)
// inputImgTrago.addEventListener('input', changeValues)
// inputIngrediente1.addEventListener('input', changeValues)
// inputIngrediente2.addEventListener('input', changeValues)
// inputIngrediente3.addEventListener('input', changeValues)
// inputIngrediente4.addEventListener('input', changeValues)
// inputIngrediente5.addEventListener('input', changeValues)