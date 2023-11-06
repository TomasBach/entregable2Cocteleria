const usuariosLs = JSON.parse(localStorage.getItem('usuarios')) || []

if(usuariosLs.length === 0){
    const usuariosObj = [
    {
       id: 1,
       mail: "admin@cocteleria.com",
       contraseña:"administrador",
       login:false,
       role: "admin",
       deleted:false,
    },
    {
        id: 2,
        mail: "usuario@cocteleria.com",
        contraseña:"usuario",
        login:false,
        role: "user",
        deleted :false,
     },
   
]
localStorage.setItem('usuarios', JSON.stringify(usuariosObj))
}