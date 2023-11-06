const usuario=JSON.parse(localStorage.getItem("usuario"))
if(usuario){
alert("hola")
}else{
    location.href="../../index.html"
}