

const nombre = "Felipe";
const apellido = "Hernandez"    


//const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = `${nombre} ${apellido}

${ 1 + 1 }`

console.log(nombreCompleto);

function getSaludo (nombreCompleto) {
    return "Hola" + " " + nombreCompleto;
 }

console.log(` Este es un texto : ${getSaludo(nombreCompleto)}`);

