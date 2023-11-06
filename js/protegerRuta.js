
const usuario=JSON.parse(localStorage.getItem("usuario"))
if(usuario){
if(usuario[0].role=="user" && window.location.pathname!=="/html/USUARIO/inicioUsuario.html"){
    console.log(window.location.pathname)
location.href="../USUARIO/inicioUsuario.html"
}else if(usuario[0].role=="admin" && window.location.pathname!=="/html/ADMIN/inicioAdmin.html"){
    location.href="../ADMIN/inicioAdmin.html"
}
}else{
    location.href="../inicioSesion.html"
}


