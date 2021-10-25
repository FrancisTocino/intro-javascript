
// DESTRUCTURACIÓN DE OBJETOS

const persona = {
    nombre: 'Francis',
    apellido: 'Tocino',
    zip: '124578',
    latylong: {
        lat: 14.142541,
        long: 14.12457,
    }
}


const { nombre:name, apellido:apell, latylong } = persona;

console.log (name, apell);
console.log (latylong);

const retornaPersona = ( {apellido, zip, edad=45}) => {

    console.log ( apellido, zip, edad );

}

retornaPersona ( persona );


const retornaAvenger = ( {apellido, zip, latylong}) => {

    return {
        apellido, 
        zip,
        latylong,
    };

}

const {apellido, zip, latylong:{lat:latiti, long:longiti}} = retornaAvenger ( persona );

console.log ( apellido, zip, latiti,longiti);