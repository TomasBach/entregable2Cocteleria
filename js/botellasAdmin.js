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
                      <input type="text" class="form-control "  aria-describedby="emailHelp" value="${botella.name}" name="namebotella">
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Imagen</label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" value="Por ej: ${botella.img}" name="imagbotella">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Precio</label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" value="$${botella.price}" name="pricbotella">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Descripcion</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" value=" ${botella.descrp}" name="descrpbotella">
                  </div>
                  <div class="mb-3">
                  <select class="form-select" aria-label="Default select example">
                  <option selected>Actualmente: ${botella.licor}</option>
                  <option id='${botella.id}-option1' value="Tequila">Tequila</option>
                  <option id='${botella.id}-option2' value="Vino">Vino</option>
                  <option id='${botella.id}-option3' value="Whisky">Whisky</option>
                </select>
                </div>
                    <button type="button" class="btn btn-primary" onclick="editarbotella(${botella.id})">Guardar Cambios</button>
                </form>
                </div>
                
                </div>
            </div>
            </div>
            <button class="btn btn-success" onclick="botellaDestacada(${botella.id})">Destacar</button>
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

const borrarBotella = (idBotella) => {
  const confirmDelete = confirm('Confirmas que quieres eliminar esta botella?')

  if (confirmDelete) {
    const filterBot = botellas.filter((botella) => botella.id !== Number(idBotella))
    localStorage.setItem('botella', JSON.stringify(filterBot))
    location.reload()
  }
}

const botellaDestacada = (idBotella) => {
  let botellaDest = JSON.parse(localStorage.getItem('botellaDest')) || []
  if (botellaDest.length > 0) {
    if (idBotella !== botellaDest[0].id) {
      const confirmCambioDest = confirm('Estas seguro de que quieres reemplazar la botella destacada?')
      if (confirmCambioDest) {
        const botFilter = botellas.filter((botella) => botella.id === idBotella)
        botellaDest = botFilter
        localStorage.setItem('botellaDest', JSON.stringify(botFilter))
      }
    } else { alert('esta botella esta destacada') }
  } else {
    const botFilter = botellas.filter((botella) => botella.id === idBotella)
    botellaDest.push(botFilter[0])
    localStorage.setItem('botellaDest', JSON.stringify(botellaDest))
  }
}

// inputNameTrago.addEventListener('input', changeValues)
// inputImgTrago.addEventListener('input', changeValues)
// inputIngrediente1.addEventListener('input', changeValues)
// inputIngrediente2.addEventListener('input', changeValues)
// inputIngrediente3.addEventListener('input', changeValues)
// inputIngrediente4.addEventListener('input', changeValues)
// inputIngrediente5.addEventListener('input', changeValues)