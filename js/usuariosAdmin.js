const usuariosLs = JSON.parse(localStorage.getItem('usuarios')) || []

if(usuariosLs.length === 0){
    const usuariosObj = [
    {
       id: 1,
       mail: "admin@cocteleria.com",
       contraseña:"administrador",
       login:false,
       role: "admin",
       delete:false,
    },
   
]
localStorage.setItem('usuarios', JSON.stringify(usuariosObj))
}