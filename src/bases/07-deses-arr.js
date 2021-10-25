
// DESTRUCTURACIÓN DE ARREGLOS

const personajes = ['Goku', 'Vegeta', 'Trunks'];


console.log (personajes);


console.log (personajes[0]);
console.log (personajes[1]);
console.log (personajes[2]);

const [p1, p2, p3] = personajes;

console.log ( p1, p2, p3 );

const [,, p3_2] = personajes;

console.log ( p3_2 );


const retornaArreglo = () =>{
    return ['ABC', 12345]
}

const [ , d2 ] = retornaArreglo ();
console.log ( d2 );


//Tarea
const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Garibola')}]
}

const arr = useState ( 'Goku' );
console.log (arr);


const [nombre, setNombre] = useState ( 'Goku' );

console.log ( 'nombre: '+ nombre );
setNombre() ;
