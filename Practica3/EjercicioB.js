
function verificarUsuario(usuario){
    //Retorna una promesa aqui
}

//Usa .then() y .catch() para manejar el resultado
verificarUsuario("admin")
.then(res => console.log(res)) //Acceso concedido
.catch(err => console.error(err)); //Acceso denegado

verificarUsuario("Valeria")
.then(res => console.log(res))
.catch(err => console.error(err)); //Acceso denegado
