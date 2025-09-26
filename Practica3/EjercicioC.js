function simularPeticionAPI(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Datos recibidos correctamente");
        },5000);
    });
}

async function obtenerDatos(){
    //Usa await para esperar la promesa de simularPeticion
    //Imprime el resultado
  let resultado = await simularPeticionAPI();
  console.log(resultado);
}

//Usa la funcion async
obtenerDatos();
