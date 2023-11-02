
let destacado=document.getElementById("contenido-destacado")
let destacadoBotella=JSON.parse(localStorage.getItem("botellaDest"))
let destacadoTragos=JSON.parse(localStorage.getItem("tragoDest"))
console.log(destacadoBotella[0])
destacado.innerHTML=`<div class="col-md-6 col-sm-12 responsive-cel centrar-caja">
<div class="card d-flex centrado color-cambio text-light text-center mt-3 " style="width: 18rem;">
  <img src="../../IMAGENES/pro-1.png" class="card-img-top w-50" alt="...">
  <div class="card-body">
    <h5 class="card-title">${destacadoBotella[0].name}</h5>
    <p class="card-text ">$${destacadoBotella[0].price}</p>
    <a href="#" class="boton3">Ver Producto</a>
  </div>
</div>
</div>
<div class="col-md-6 col-sm-12 responsive-cel centrar-caja">
<div class="card d-flex centrado color-cambio text-light text-center mt-3" style="width: 18rem;">
  <img src="../../IMAGENES/pro-2.png" class="card-img-top w-50" alt="...">
  <div class="card-body">
    <h5 class="card-title">${destacadoTragos[0].name}</h5>
    <p class="card-text">Ingredientes: <br>${destacadoTragos[0].ingred.ingred1}<br>${destacadoTragos[0].ingred.ingred2}<br> ${destacadoTragos[0].ingred.ingred3}</p>
    <a href="#" class="boton3">Ver Producto</a>
  </div>
</div>
</div>


`
