const categoria = location.search.split('=')[1]
let tragos = JSON.parse(localStorage.getItem("tragos"))
let botellas = JSON.parse(localStorage.getItem("botellas"))
let contenedor = document.getElementById("contenedor-cartas")
let inputCambio = document.getElementById("input-cambio")
const productos = botellas.concat(tragos)



switch (categoria) {
    case "Tragos":
        contenedor.innerHTML = tragos.map((elemento) =>
            `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
                          <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
                            <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${elemento.name}</h5>
                              <p class="card-text ">Ingredientes: <br>${elemento.ingred.ingred1}<br>${elemento.ingred.ingred2}<br> ${elemento.ingred.ingred3}</p>
                              <a href="#" class="boton3" onclick="cambioTrago(${elemento.id})">Ver Producto</a>
                            </div>
                          </div>
                        </div>
                        
        `).join('')

        const eventosInput = (ev) => {
            const filtroTragos=tragos.filter((elemento)=> elemento.name.toLowerCase().includes(ev.target.value.toLowerCase()))   
            contenedor.innerHTML=filtroTragos.map((trago)=>`
            <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
            <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
              <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
              <div class="card-body">
                <h5 class="card-title">${trago.name}</h5>
                <p class="card-text ">Ingredientes: <br>${trago.ingred.ingred1}<br>${trago.ingred.ingred2}<br> ${trago.ingred.ingred3}</p>
                <a href="#" class="boton3" onclick="cambioTrago(${trago.id})">Ver Producto</a>
              </div>
            </div>
          </div>
          `).join('')
        }


        inputCambio.addEventListener("input", eventosInput)
        break;
    case "Vino":
        const vino = botellas.filter((elemento) => elemento.licor == categoria)
        contenedor.innerHTML = vino.map((elemento) =>
            `<div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
    <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
      <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
      <div class="card-body">
        <h5 class="card-title">${elemento.name}</h5>
        <p class="card-text ">${elemento.price}</p>
        <a href="#" class="boton3" onclick="cambioBotella(${elemento.id})">Ver Producto</a>
      </div>
    </div>
  </div>
`).join('')
        const eventosInput4 = (ev) => {
            const filtroTragos=vino.filter((elemento)=> elemento.name.toLowerCase().includes(ev.target.value.toLowerCase()))       
            contenedor.innerHTML=filtroTragos.map((botella)=>`
            <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
            <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
              <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
              <div class="card-body">
                <h5 class="card-title">${botella.name}</h5>
                <p class="card-text ">${botella.price}</p>
                <a href="#" class="boton3" onclick="cambioBotella(${botella.id})">Ver Producto</a>
              </div>
            </div>
          </div>
          `).join('')
        }


        inputCambio.addEventListener("input", eventosInput4)
        break;
    case "Whisky":
        const whisky = botellas.filter((elemento) => elemento.licor == categoria)

        contenedor.innerHTML = whisky.map((elemento) =>
            `<div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
    <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
      <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
      <div class="card-body">
        <h5 class="card-title">${elemento.name}</h5>
        <p class="card-text ">${elemento.price}</p>
        <a href="#" class="boton3" onclick="cambioBotella(${elemento.id})">Ver Producto</a>
      </div>
    </div>
  </div>
  
`).join('')

        const eventosInput2 = (ev) => {
            const filtroTragos=whisky.filter((elemento)=> elemento.name.toLowerCase().includes(ev.target.value.toLowerCase()))       
            contenedor.innerHTML=filtroTragos.map((botella)=>`
            <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
            <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
              <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
              <div class="card-body">
                <h5 class="card-title">${botella.name}</h5>
                <p class="card-text ">${botella.price}</p>
                <a href="#" class="boton3" onclick="cambioBotella(${botella.id})">Ver Producto</a>
              </div>
            </div>
          </div>
          `).join('')
        }


        inputCambio.addEventListener("input", eventosInput2)

        break;
    case "Tequila":
        const tequila = botellas.filter((elemento) => elemento.licor == categoria)

        contenedor.innerHTML = tequila.map((elemento) =>
            `<div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
        <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
          <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
          <div class="card-body">
            <h5 class="card-title">${elemento.name}</h5>
            <p class="card-text ">${elemento.price}</p>
            <a href="#" class="boton3" onclick="cambioBotella(${elemento.id})">Ver Producto</a>
          </div>
        </div>
      </div>
    `).join('')
        const eventosInput5 = (ev) => {
            const filtroTragos=tequila.filter((elemento)=> elemento.name.toLowerCase().includes(ev.target.value.toLowerCase()))       
            contenedor.innerHTML=filtroTragos.map((botella)=>`
            <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
            <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
              <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
              <div class="card-body">
                <h5 class="card-title">${botella.name}</h5>
                <p class="card-text ">${botella.price}</p>
                <a href="#" class="boton3" onclick="cambioBotella(${botella.id})">Ver Producto</a>
              </div>
            </div>
          </div>
          `).join('')
        }


        inputCambio.addEventListener("input", eventosInput5)
        break;
    default:
        contenedor.innerHTML += tragos.map((elemento) => `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
          <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
            <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">${elemento.name}</h5>
              <p class="card-text ">Ingredientes: <br>${elemento.ingred.ingred1}<br>${elemento.ingred.ingred2}<br> ${elemento.ingred.ingred3}</p>
              <a href="#" class="boton3" onclick="cambioTrago(${elemento.id})">Ver Producto</a>
            </div>
          </div>
        </div>
        
      `).join('');
        contenedor.innerHTML += botellas.map((elemento) => `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
          <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
            <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">${elemento.name}</h5>
              <p class="card-text ">${elemento.price}</p>
              <a href="#" class="boton3" onclick="cambioBotella(${elemento.id})">Ver Producto</a>
            </div>
          </div>
        </div>
      `).join('');
        const eventosInput3 = (ev) => {
            const filtroproductos=productos.filter((elemento)=> elemento.name.toLowerCase().includes(ev.target.value.toLowerCase()))       
            contenedor.innerHTML=filtroproductos.map((botella)=>        
            `
            <div class="col-lg-4 col-md-6 col-sm-12 mt-4 ">
            <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
              <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
              <div class="card-body">
                <h5 class="card-title">${botella.name}</h5>
                <p class="card-text ">${botella.price ? botella.price : `Ingredientes: <br>${botella.ingred.ingred1}<br>${botella.ingred.ingred2}<br> ${botella.ingred.ingred3}`}</p>
                <a href="#" class="boton3" onclick="${botella.price ? `cambioBotella(${botella.id})` : `cambioTrago(${botella.id})`}">Ver Producto</a>
              </div>
            </div>
          </div>
          `).join('')
        }


        inputCambio.addEventListener("input", eventosInput3)
        break;


}



const cambioBotella =(id)=>{
 location.href=`/html/USUARIO/productoUsuario.html?botella=${id}`
}

const cambioTrago =(id)=>{
  location.href=`/html/USUARIO/productoUsuario.html?trago=${id}`
 }