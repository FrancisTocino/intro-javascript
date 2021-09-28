
// IMPORT EXPORT Y 
//FUNCIONES PROPIEDADES DELOS ARRAYS


//Forma de importar un export default (heroes)
// y Forma de importar un export ordinario (owners)
import heroes, { owners }   from './data/heroes';

//console.log ( heroes );
console.log ( owners );

// Propiedad find() para encontrar elementos 
//dentro arrays de objetos
export const getHeroById = (id) => {
    const found = heroes.find(element => element.id === id);
    return found;
}
//console.log ( getHeroById(2));


// Propiedad filter() para encontrar 
// los elementos que cumplen una condición
export const getHeroeByOwner = (owner) => {
    const found = heroes.filter(element => element.owner === owner);
    return found;
};
//console.log( getHeroeByOwner('DC'));

