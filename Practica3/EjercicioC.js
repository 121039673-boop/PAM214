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
    try {
        const datos = await obtenerDatos();
        console.log("Datos recibidos:", datos);
    } catch (error) {
        console.log("Error:", error);
    }
}


//Usa la funcion async
obtenerDatos();
