

const persona = {
    nombre: "tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "new york",
        zip: "4545345",
        lat: "3545345",
        lng: "675567"
    }


}

// crea copia del objeto 
const persona2 = { ...persona };

console.log(persona);

console.table(persona2);