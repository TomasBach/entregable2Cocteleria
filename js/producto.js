const tipo = location.search.split('=')[0]
const id=location.search.split('=')[1]
let botellas=JSON.parse(localStorage.getItem("botellas"))
let trago=JSON.parse(localStorage.getItem("tragos"))
let contenedor=document.getElementById("contenedor-producto")

const favorites = JSON.parse(localStorage.getItem('favoritos')) || []

if(tipo=="?trago"){
    let filtradotragos=trago.filter((elemento)=>elemento.id==id)
    contenedor.innerHTML=filtradotragos.map((elemento)=>
    `<div class="col-lg-6 col-md-6 col-sm-6 col-12 producto-cajas imagen-cambio"><img src="../..${elemento.img}" alt="" "></div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-12 detalle-cajas ">
        <div class="row ">
            <div class="col-12 "> <h1 class="text-center titulo" >${elemento.name}</h1></div>
            <div class="col-12"> <div class="caja-parrafo"><p class="text-light mt-2 cambio-precio">Ingredientes : </p></div> 
                <p class="parrafo-cambio">${elemento.ingred.ingred1} <br> ${elemento.ingred.ingred2} <br> ${elemento.ingred.ingred3} <br> ${elemento.ingred.ingred4} <br> ${elemento.ingred.ingred5} </p>
                <div class="caja-boton"> <a class="boton-carro" onclick="favoritos(${elemento.id})">Agregar a favoritos</a></div>
              
            </div>
        </div>
    </div>`
    )
}else if(tipo=="?botella"){
let filtradoBotella=botellas.filter((elemento)=>elemento.id==id)
contenedor.innerHTML=filtradoBotella.map((elemento)=>
`<div class="col-lg-6 col-md-6 col-sm-6 col-12 producto-cajas"><img src="../..${elemento.img}" alt="" ></div>
<div class="col-lg-6 col-md-6 col-sm-6 col-12 detalle-cajas ">
    <div class="row ">
        <div class="col-12 "> <h1 class="text-center titulo" >${elemento.name}</h1></div>
        <div class="col-12"> <div class="caja-parrafo"><p class="text-light mt-2 cambio-precio">Precio : <p class="cambio-precio2 mt-2">$${elemento.price}</p></p></div> 
            <p class="parrafo-cambio">${elemento.descrp}</p>
            <div class="caja-boton"> <a class="boton-carro" onclick="carro(${elemento.id})">Agregar al carrito</a></div>
            <div class="caja-boton"> <a class="boton-carro mt-3" onclick="favoritos(${elemento.id})">Agregar a favoritos</a></div>
          
        </div>
    </div>
</div>`
)
}


const favoritos =(id)=>{
location.href=`/html/USUARIO/carritoUsuario.html?botella=${id}`
}

const carro = (id) =>{
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    if(carrito.length>0){
        console.log(id)
        const filtradoCarrito = carrito.filter((prod) => prod.id === id)
        console.log(filtradoCarrito)
        if(filtradoCarrito.length > 0){
            alert("este producto ya esta en el carrito")
        }else{
            const filtradoCarrito=botellas.filter((producto)=>producto.id==id)
            carrito.push(filtradoCarrito[0])
            localStorage.setItem("carrito",JSON.stringify(carrito))
            alert("se agrego el producto al carrito")
        }
    }else{
        const filtradoCarrito=botellas.filter((producto)=>producto.id==id)
        carrito.push(filtradoCarrito[0])
        localStorage.setItem("carrito",JSON.stringify(carrito))
        alert("se agrego el producto al carrito")
    }
}