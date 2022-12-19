


const persona = {
    nombre: "tony",
    edad: 45,
    clave: "ironman"


}

//const {nombre, edad, clave } = persona


//console.log(nombre);
//console.log(edad);
//console.log(clave);


const useContext = ({clave, nombre, edad, rango= "capitan" }) => { 

    
    //console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123125,
            lng: 454363

        }
    }
}

const { nombreClave, anios, latlng: { lat, lng} } = useContext(persona);
console.log(nombreClave, anios,);
console.log(lat, lng);







