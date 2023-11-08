const carritoLocalSt = JSON.parse(localStorage.getItem('carrito')) || [];
const contenido = document.getElementById("contenedorTabla");

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
    const precio = parseFloat(document.querySelector(`[product-id="${id}"]`).textContent.replace('$', ''));
    const totalId = document.querySelector(`[data-product-id="${id}"]`);
    const total = value * precio;
    totalId.innerHTML = `$${total.toFixed(2)}`;
};

contenido.innerHTML = carritoLocalSt.map((product) =>
    `
    <tr>
      <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.licor}</td>
        <td product-id="${product.id}">$${product.price}</td>
        <td>
         <input type="number" class="form-control w-25" value="1" id="${product.id}" name="count">
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


