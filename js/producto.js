const tipo = location.search.split('=')[0]
const id=location.search.split('=')[1]
let botellas=JSON.parse(localStorage.getItem("botellas"))
let trago=JSON.parse(localStorage.getItem("tragos"))
let contenedor=document.getElementById("contenedor-producto")
if(tipo=="?trago"){
    let filtradotragos=trago.filter((elemento)=>elemento.id==id)
    contenedor.innerHTML=filtradotragos.map((elemento)=>
    `<div class="col-lg-6 col-md-6 col-sm-6 col-12 producto-cajas"><img src="../../IMAGENES/pro-1.png" alt="" width="170px"></div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-12 detalle-cajas ">
        <div class="row ">
            <div class="col-12 "> <h1 class="text-center titulo" >${elemento.name}</h1></div>
            <div class="col-12"> <div class="caja-parrafo"><p class="text-light mt-2 cambio-precio">Ingredientes : </p></div> 
                <p class="parrafo-cambio">${elemento.ingred.ingred1} <br> ${elemento.ingred.ingred2} <br> ${elemento.ingred.ingred3} <br> ${elemento.ingred.ingred4} <br> ${elemento.ingred.ingred5} </p>
                <div class="caja-boton"> <a class="boton-carro" href="">Agregar a favoritos</a></div>
              
            </div>
        </div>
    </div>`
    )
}else if(tipo=="?botella"){
let filtradoBotella=botellas.filter((elemento)=>elemento.id==id)
contenedor.innerHTML=filtradoBotella.map((elemento)=>
`<div class="col-lg-6 col-md-6 col-sm-6 col-12 producto-cajas"><img src="../../IMAGENES/pro-1.png" alt="" width="170px"></div>
<div class="col-lg-6 col-md-6 col-sm-6 col-12 detalle-cajas ">
    <div class="row ">
        <div class="col-12 "> <h1 class="text-center titulo" >${elemento.name}</h1></div>
        <div class="col-12"> <div class="caja-parrafo"><p class="text-light mt-2 cambio-precio">Precio : <p class="cambio-precio2 mt-2">$${elemento.price}</p></p></div> 
            <p class="parrafo-cambio">${elemento.descrp}</p>
            <div class="caja-boton"> <a class="boton-carro" href="">Agregar al carrito</a></div>
          
        </div>
    </div>
</div>`
)
}