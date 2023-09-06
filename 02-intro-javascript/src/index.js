/* eslint-disable react-hooks/rules-of-hooks */

const persona = {
    nombre: "tony",
    edad: 45,
    clave: "ironman"


}

const useContext = ({clave, nombre, edad, rango= "capitan" }) => { 
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123125,
            lng: 454363

        }
    }
}

const {nombreClave, anios } = useContext(persona);
console.log(useContext);
console.log(nombreClave, anios);







