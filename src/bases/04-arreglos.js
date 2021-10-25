

 // ARREGLOS  

 const arreglo = [1,2,3,4,5];


let arreglo2 = [...arreglo,6];

const arreglo3 = arreglo2.map(function(valor) {
   return  valor * 2;
}); // Map por definición crea un nuevo arreglo
 
console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );