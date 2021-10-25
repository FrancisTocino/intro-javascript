
// FUNCIONES EN JS 


const saludar = (nombre) => {
    return `Hola, ${nombre}`
}



const saludar2 = (nombre) =>  `Hola, ${nombre}`

const saludar3 = () =>  `Hola, Manolito`



console.log ( saludar ('Goku'));
console.log ( saludar2 ('Vegeta'));
console.log ( saludar3 ());

// Funciones que devuelven objetos

const getUser =() => ({ uid: 'eiee545', username: 'minombre',});


console.log (getUser());

function getUsauarioActivo ( nombre ) {
    return {
        uid: '121334',
        username: 'Laporta',
    }
};

const usuarioActivo = getUsauarioActivo ('Francis');
console.log (usuarioActivo);

// Equivale a lo de Arriba 

const getUsauarioActivo2 = (nombre) => ({
        uid: '121334',
        username: nombre,
    }) ;


const usuarioActivo2 = getUsauarioActivo2 ('Tocino');
console.log (usuarioActivo2);



