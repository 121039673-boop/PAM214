const personas = [
    { nombre: "Ana" , edad: 22 },
    { nombre: "Luis" , edad: 35 },
    { nombre: "Maria" , edad: 28 }
];

//Find
const NomLuis = personas.find(persona => persona.nombre === "Luis");
console.log(NomLuis);

//For each
personas.forEach(function(persona){console.log(persona.nombre)});

//Reduce
const Edades = personas.reduce((total, persona)=> total+ persona.edad, 0);
console.log(Edades);