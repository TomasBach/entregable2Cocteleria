const categoria = location.search.split('=')[1]
let tragos=JSON.parse(localStorage.getItem("tragos"))
let botellas=JSON.parse(localStorage.getItem("botellas"))
let contenedor=document.getElementById("contenedor-cartas")
switch (categoria) {
    case "Tragos":
        contenedor.innerHTML=tragos.map((elemento)=>
        `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3 ">
                          <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
                            <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${elemento.name}</h5>
                              <p class="card-text ">Ingredientes: <br>${elemento.ingred.ingred1}<br>${elemento.ingred.ingred2}<br> ${elemento.ingred.ingred3}</p>
                              <a href="#" class="boton3">Ver Producto</a>
                            </div>
                          </div>
                        </div>
        `).join('')
      break;
    case "Vino":
        const vino=botellas.filter((elemento)=>elemento.licor==categoria)
        
    contenedor.innerHTML=  vino.map((elemento)=>
    `<div class="col-lg-4 col-md-6 col-sm-12 mt-3 ">
    <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
      <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
      <div class="card-body">
        <h5 class="card-title">${elemento.name}</h5>
        <p class="card-text ">${elemento.price}</p>
        <a href="#" class="boton3">Ver Producto</a>
      </div>
    </div>
  </div>
`).join('')
      break;
    case "Whisky":
        const whisky=botellas.filter((elemento)=>elemento.licor==categoria)
        
    contenedor.innerHTML=  whisky.map((elemento)=>
    `<div class="col-lg-4 col-md-6 col-sm-12 mt-3 ">
    <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
      <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
      <div class="card-body">
        <h5 class="card-title">${elemento.name}</h5>
        <p class="card-text ">${elemento.price}</p>
        <a href="#" class="boton3">Ver Producto</a>
      </div>
    </div>
  </div>
`).join('')
      
      break;
    case "Tequila":
        const tequila=botellas.filter((elemento)=>elemento.licor==categoria)
        
        contenedor.innerHTML=  tequila.map((elemento)=>
        `<div class="col-lg-4 col-md-6 col-sm-12 mt-3 ">
        <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
          <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
          <div class="card-body">
            <h5 class="card-title">${elemento.name}</h5>
            <p class="card-text ">${elemento.price}</p>
            <a href="#" class="boton3">Ver Producto</a>
          </div>
        </div>
      </div>
    `).join('')
    default:
        contenedor.innerHTML += tragos.map((elemento) => `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3 ">
          <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
            <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">${elemento.name}</h5>
              <p class="card-text ">Ingredientes: <br>${elemento.ingred.ingred1}<br>${elemento.ingred.ingred2}<br> ${elemento.ingred.ingred3}</p>
              <a href="#" class="boton3">Ver Producto</a>
            </div>
          </div>
        </div>
      `).join('');
      contenedor.innerHTML += botellas.map((elemento) => `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3 ">
          <div class="card d-flex centrado color-cambio text-light text-center " style="width: 18rem;">
            <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">${elemento.name}</h5>
              <p class="card-text ">${elemento.price}</p>
              <a href="#" class="boton3">Ver Producto</a>
            </div>
          </div>
        </div>
      `).join('');
        break;
  }
  