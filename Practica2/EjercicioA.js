const persona = {
    nombre: "Valeria",
    edad: 22,
    direccion: {
        ciudad:"Qro",
        pais: "MX"
    }
};

//Destructuración 

const {nombre, edad, direccion: {ciudad}} = persona;

//Impresión del mensaje 
console.log("Mi nombre es " + nombre +", tengo " + edad + " años y vivo en " + ciudad);
