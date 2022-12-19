

const saludar = function(nombre) {
    return `Hola ${nombre}`

}

const saludar2 = (nombre) => `Hola ${nombre}`;


console.log(saludar("Goku"));
console.log(saludar2("vegeta"));


//En este caso se debe poner ({}) para retornar de forma implicita un objeto (no se necesita un return)
const getUser = () => ({
    uid: "felipe",
    username: "felipe123 "
});

console.log(getUser);


//Tarea
//1.- transformar a una funcion de flecha
//2.- tiene que retornar un objeto implicito
//3.- pruebas

function getUsuarioActivo (nombre){ 
    return {
        user: "12345",
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo("Felipe")
console.log(usuarioActivo);


const obtenerUsuario = (nombre) => ({ user:"Felipe123", username: nombre})

console.log(obtenerUsuario("Felipe"));










