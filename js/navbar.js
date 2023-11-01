let cerrado = document.getElementById("Boton-cerrar");
let navMenu=document.getElementById("nav-menu")
let abrir= document.getElementById("boton-Abrir")
let dropdownMobile=document.getElementById("boton-dropdown-mobile")
let dropdownMobileid=document.getElementById("dropdown-id")
let dropdownMobile2=document.getElementById("boton-dropdown-mobile2")
let dropdownMobileid2=document.getElementById("dropdown-id2")
const botoncerrar = (event) => {
    event.preventDefault()
   navMenu.classList.remove("nav-aparecer")
 
}
const botonabrir = (event)=>{
    event.preventDefault()
    navMenu.classList.add("nav-aparecer")
}

const botonDropdown=(event)=>{
    event.preventDefault()
    dropdownMobile.classList.toggle("cambio-flecha")
    if(dropdownMobileid.classList.contains("show-lista")){
        dropdownMobileid.classList.remove("show-lista")
    }else{
        dropdownMobileid.classList.add("show-lista")
    }

}
const botonDropdown2=(event)=>{
    event.preventDefault()
    dropdownMobile2.classList.toggle("cambio-flecha")
    if(dropdownMobileid2.classList.contains("show-lista2")){
        dropdownMobileid2.classList.remove("show-lista2")
    }else{
        dropdownMobileid2.classList.add("show-lista2")
    }

}

cerrado.addEventListener("click", botoncerrar);
abrir.addEventListener("click", botonabrir)
dropdownMobile.addEventListener("click",botonDropdown)
dropdownMobile2.addEventListener("click",botonDropdown2)
