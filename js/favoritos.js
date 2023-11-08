const favoritobotella = JSON.parse(localStorage.getItem('favoritobotella')) || []
const favoritotragos = JSON.parse(localStorage.getItem('favoritotragos')) || []
const contenido = document.getElementById("contenedorTabla");
const contenidotrago=document.getElementById("contenido-segundatabla")

const borrarPro = (id) => {
    const confirmacion = confirm("¿Estás seguro de que quieres sacar este producto del favorito?");
    if (confirmacion) {
        const borrado = favoritobotella.filter((elemento) => elemento.id !== id);
        localStorage.setItem("favoritobotella", JSON.stringify(borrado));
        location.reload();
    }
}
const borrarProtrago = (id) => {
    const confirmacion = confirm("¿Estás seguro de que quieres sacar este producto del favorito?");
    if (confirmacion) {
        const borrado = favoritotragos.filter((elemento) => elemento.id !== id);
        localStorage.setItem("favoritotragos", JSON.stringify(borrado));
        location.reload();
    }
}

contenido.innerHTML = favoritobotella.map((product) =>

    `
    <tr>
      <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.licor}</td>

        <td>
          <button class="btn btn-danger" onclick="borrarPro(${product.id})">Eliminar</button>
        </td>
    </tr>
    `
).join("")

contenidotrago.innerHTML = favoritotragos.map((product) =>

    `
    <tr>
      <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.ingred.ingred1}</td>

        <td>
          <button class="btn btn-danger" onclick="borrarProtrago(${product.id})">Eliminar</button>
        </td>
    </tr>
    `
).join("")
