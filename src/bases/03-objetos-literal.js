
 // Objetos Literales

 const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 525214,
        lat : 14.3232323,
        lng : 14.25365,
    },
 };

console.log( persona );

 // clonar un Objeto 

 const persona2 = {...persona};

 persona2.nombre = 'Peter';

 console.log( persona2 );


