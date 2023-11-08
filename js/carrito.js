const carritoLocalSt = JSON.parse(localStorage.getItem('carrito')) || [];
const contenido = document.getElementById("contenedorTabla");
const contenidototal =document.getElementById("contenido-total")
const calcularTotal = () => {
    let totalCarrito = 0;
    carritoLocalSt.forEach((product) => {
        const cantidad = parseInt(document.getElementById(product.id).value);
        totalCarrito += product.price * cantidad;
    });
    contenidototal.innerHTML = `<h1> TOTAL : $${isNaN(totalCarrito) ? '0.00' : totalCarrito.toFixed(2)} </h1> <button onclick="mandar404()" class="btn btn-warning"> Comprar </button>`;

};
const mandar404=()=>{
    location.href="https://www.mercadopago.com.ar/home"
}
const borrarPro = (id) => {
    const confirmacion = confirm("¿Estás seguro de que quieres sacar este producto del carrito?");
    if (confirmacion) {
        const borrado = carritoLocalSt.filter((elemento) => elemento.id !== id);
        localStorage.setItem("carrito", JSON.stringify(borrado));
        location.reload();
    }
}

const cambioValor = (ev) => {
    const { id, value } = ev.target;
    let cantidad = parseInt(value);
    
    if (cantidad < 0) {
        cantidad = 0;
    }
    const precio = parseFloat(document.querySelector(`[product-id="${id}"]`).textContent.replace('$', ''));
    const totalId = document.querySelector(`[data-product-id="${id}"]`);
    const total = value * precio;
   
    totalId.innerHTML = `$${total.toFixed(2)}`;
    calcularTotal()
};

contenido.innerHTML = carritoLocalSt.map((product) =>

    `
    <tr>
      <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.licor}</td>
        <td product-id="${product.id}">$${product.price}</td>
        <td>
         <input type="number" class="form-control w-25" value="1" id="${product.id}" min="0" name="count">
        </td>
        <td class="total" data-product-id="${product.id}">
          $${product.price}
        </td>
        <td>
          <button class="btn btn-danger" onclick="borrarPro(${product.id})">Eliminar</button>
        </td>
    </tr>
    `
).join("");


const input = document.querySelectorAll("input");

input.forEach((elemento) =>
    elemento.addEventListener("input", cambioValor)
);


