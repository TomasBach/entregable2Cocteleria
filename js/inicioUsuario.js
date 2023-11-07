const cerrar=document.getElementById("cerrarTodo")
let destacado = document.getElementById("contenido-destacado")
let destacadoBotella = JSON.parse(localStorage.getItem("botellaDest"))||[]
let destacadoTragos = JSON.parse(localStorage.getItem("tragoDest"))||[]
let categoriaVino = document.getElementById("categoria-vino")
let categoriaLicor = document.getElementById("categoria-licor")
let categoriaWhisky = document.getElementById("categoria-whisky")
let categoriaTragos = document.getElementById("categoria-tragos")

const paginavino = (event) => {
  event.preventDefault()
  location.href=`/html/USUARIO/productosUsuario.html?licor=Vino`
}


const paginatequila = (event) => {
  event.preventDefault()
  location.href=`/html/USUARIO/productosUsuario.html?licor=Tequila`
}

const paginawhisky = (event) => {
  event.preventDefault()
  location.href=`/html/USUARIO/productosUsuario.html?licor=Whisky`
}

const paginatragos = (event) => {
  event.preventDefault()
  location.href=`/html/USUARIO/productosUsuario.html?Tipo=Tragos`
}
categoriaVino.addEventListener("click", paginavino)
categoriaLicor.addEventListener("click", paginatequila)
categoriaWhisky.addEventListener("click", paginawhisky)
categoriaTragos.addEventListener("click", paginatragos)

destacado.innerHTML = `<div class="col-md-6 col-sm-12 responsive-cel centrar-caja">
<div class="card d-flex centrado color-cambio text-light text-center mt-3 " style="width: 18rem;">
  <img src="../..${destacadoBotella[0].img}" class="card-img-top w-50" alt="...">
  <div class="card-body">
    <h5 class="card-title">${destacadoBotella[0].name}</h5>
    <p class="card-text ">$${destacadoBotella[0].price}</p>
    <a href="#" class="boton3" onclick="irbotella(${destacadoBotella[0].id})">Ver Producto</a>
  </div>
</div>
</div>
<div class="col-md-6 col-sm-12 responsive-cel centrar-caja">
<div class="card d-flex centrado color-cambio text-light text-center mt-3" style="width: 18rem;">
  <img src="../..${destacadoTragos[0].img}" class="card-img-top w-50" alt="...">
  <div class="card-body">
    <h5 class="card-title">${destacadoTragos[0].name}</h5>
    <p class="card-text">Ingredientes: <br>${destacadoTragos[0].ingred.ingred1}<br>${destacadoTragos[0].ingred.ingred2}<br> ${destacadoTragos[0].ingred.ingred3}</p>
    <a href="#" class="boton3"  onclick="irvaso(${destacadoTragos[0].id})">Ver Producto</a>
  </div>
</div>
</div>
`
const irbotella=(id)=>{
  location.href=`/html/USUARIO/productoUsuario.html?botella=${id}`
  }
  const irvaso=(id)=>{
  location.href=`/html/USUARIO/productoUsuario.html?trago=${id}`
  }