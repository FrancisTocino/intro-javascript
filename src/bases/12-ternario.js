//Operador Condicional Ternario

const activo = true;

/* let mensaje = '';

if (activo) {
    mensaje = 'Activo';
}else {
    mensaje = 'Inactivo';
} */

// Forma reducida de hacer un If else
//const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';

// Para que el else te devuelva un null
//const mensaje = ( !activo ) ? 'Activo' : null;

// Para que el else te devuelva un false
const mensaje = ( activo ) && 'Activo';



console.log(mensaje);