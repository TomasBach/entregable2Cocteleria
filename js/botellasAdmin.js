const tBody = document.getElementById('tBodyBotellasAdmin');
const botellas = JSON.parse(localStorage.getItem('botellas')) || []
const buttonCreate = document.getElementById('idButtonCreate')

const inputNameNBotella = document.getElementById('inputNameNBotella')
const inputImgNBotella = document.getElementById('inputImgNBotella')
const inputPriceNBotella = document.getElementById('inputPriceNBotella')
const inputDescrpNBotella = document.getElementById('inputDescrpNBotella')
const inputLicorNBotella = document.getElementById('inputLicorNBotella')

const navbarAdminCantBot = document.getElementById('navbarAdminCantBot')

navbarAdminCantBot.innerHTML = 
  `<p class="text-light">Actualmente hay: ${botellas.length} botella/s</p>`


tBodyBotellasAdmin.innerHTML = botellas.map((botella) =>
  `
    <div class="my-auto">
    <tr >
        <th scope="row" class="fs-5">${botella.id}</th>
        <td product-id="${botella.id}" class="fs-5"><b>${botella.name}</b></td>
        <td product-id="${botella.id}"><img src="${botella.img}" class="img-tabla-admin" alt="Imagen ilustrativa de la botella"></td>
        <td product-id="${botella.id}" class="fs-5">${botella.licor}</td>
        <td product-id="${botella.id}" class="fs-5">${botella.price}</td>
        <td product-id="${botella.id}" class="fs-5">${botella.descrp}</td>

        <td>
        <button class="btn btn-outline-danger" onclick="borrarBotella(${botella.id})">Eliminar</button>

            <button type="button" class="btn btn-outline-warning my-3" data-bs-toggle="modal" data-bs-target="#exampleModal-${botella.id}">
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
                      <input type="text" class="form-control inputNameBotella"  aria-describedby="emailHelp" value="${botella.name}" name="nameBotella">
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Imagen</label>
                    <input type="text" class="form-control inputImgBotella"  aria-describedby="emailHelp" value="Por ej: ${botella.img}" name="imagBotella">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Precio</label>
                    <input type="text" class="form-control inputPriceBotella"  aria-describedby="emailHelp" value="$${botella.price}" name="priceBotella">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Descripcion</label>
                    <input type="text" class="form-control inputDescrpBotella"  aria-describedby="emailHelp"  value="${botella.descrp}" name="descrpBotella">
                    
                  </div>
                  <div class="mb-3">
                  
                  <label for="" class="form-label">Licor</label>
                  <select class="form-select inputLicorBotella" name="licorBotella" aria-label="Default select example">
                  <option disable>Licor actual: ${botella.licor}</option>
                  <option value="Tequila">Tequila</option>
                  <option value="Vino">Vino</option>
                  <option value="Whisky">Whisky</option>
                </select>
                </div>
                    <button type="button" class="btn btn-primary" onclick="editarBotella(${botella.id})">Guardar Cambios</button>
                </form>
                </div>
                
                </div>
            </div>
            </div>
            <button class="btn btn-outline-success" onclick="botellaDestacada(${botella.id})">Destacar</button>
        </td>
    </tr>
    </div>
    `
).join('')

const inputNameBotella= document.querySelectorAll(".inputNameBotella")
const inputImgBotella = document.querySelectorAll(".inputImgBotella")
const inputPriceBotella = document.querySelectorAll(".inputPriceBotella")
const inputDescrpBotella = document.querySelectorAll(".inputDescrpBotella")
const inputLicorBotella = document.querySelectorAll(".inputLicorBotella")

const dataForm = {
  nameBotella: '',
  imagBotella: '',
  priceBotella: '',
  descrpBotella: '',
  licorBotella: '',
}
const formCreate = {
  nameNBotella: '',
  imgNBotella: '',
  priceNBotella: '',
  descrpNBotella: '',
  licorNBotella: '',
}

const changeValues = (ev) => {
  const { name, value } = ev.target
  dataForm[name] = value
}
const createBotForm = (ev) => {
  const { name, value } = ev.target
  formCreate[name] = value
}

const editarBotella = (idBotella) => {
  const botellaDest = JSON.parse(localStorage.getItem('botellaDest'))
  const { nameBotella, imagBotella, priceBotella, descrpBotella, licorBotella } = dataForm

  const filterBotella = botellas.filter((botella) => botella.id === Number(idBotella))
  const positionBotella = botellas.findIndex((botella) => botella.id === Number(idBotella))

  if (filterBotella.length > 0) {
    filterBotella[0].name = nameBotella ? nameBotella :  filterBotella[0].name
    filterBotella[0].img = imagBotella ? imagBotella :  filterBotella[0].img
    filterBotella[0].descrp = descrpBotella ? descrpBotella : filterBotella[0].descrp
    filterBotella[0].price = priceBotella ? priceBotella : filterBotella[0].price
    filterBotella[0].licor = licorBotella ? licorBotella : filterBotella[0].licor

      botellas[positionBotella] = filterBotella[0]
      localStorage.setItem('botellas', JSON.stringify(botellas))
      location.reload()
  }
 }

 const sendFormCreate = (ev) => {
  const { nameNBotella, descrpNBotella, licorNBotella, priceNBotella, imgNBotella } = formCreate

  if (!nameNBotella && !descrpNBotella && !licorNBotella && !priceNBotella && !imgNBotella) {
    alert('el formulario esta vacio')
  } else {

    const newId = botellas[botellas.length - 1].id + 1

    const botellaN = {
      id: newId,
      name: nameNBotella,
      descrp: descrpNBotella,
      licor: licorNBotella,
      price: priceNBotella,
      img: imgNBotella,
    }
    botellas.push(botellaN)
    localStorage.setItem('botellas', JSON.stringify(botellas))
    location.reload()
  }
}
const borrarBotella = (idBotella) => {
  const confirmDelete = confirm('Confirmas que quieres eliminar esta botella?')

  if (confirmDelete) {
    const filterBot = botellas.filter((botella) => botella.id !== Number(idBotella))
    localStorage.setItem('botellas', JSON.stringify(filterBot))
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

inputNameBotella.forEach( element => {
  element.addEventListener('input', changeValues)
});
inputImgBotella.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputPriceBotella.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputDescrpBotella.forEach(element => {
  element.addEventListener('input', changeValues)
});
inputLicorBotella.forEach(element => {
  element.addEventListener('input', changeValues)
});


inputNameNBotella.addEventListener('input', createBotForm)
inputImgNBotella.addEventListener('input', createBotForm)
inputPriceNBotella.addEventListener('input', createBotForm)
inputDescrpNBotella.addEventListener('input', createBotForm)
inputLicorNBotella.addEventListener('input', createBotForm)

buttonCreate.addEventListener('click', sendFormCreate)
