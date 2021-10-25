// PROMESAS

import {getHeroById} from './bases/08-imp-exp';

/* const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
        //console.log ('... Despues de Tres segundos')

        const heroe = getHeroById(2);
        //console.log (heroe);
        //resolve(heroe);
        reject ('No se pudo encontrar el Heroe');
    }, 3000);

});

promesa.then( (heroe) => {
                console.log ('Heroe: ', heroe);
            })
        .catch( (error) => {
            console.warn (error)
        });
*/


const getHeroeByIdAsync = (id) => {

   return  new Promise( (resolve, reject) => {

        setTimeout( () => {
            //console.log ('... Despues de Tres segundos')
    
            const heroe = getHeroById(id);
            //console.log (heroe);
            if (heroe)
                resolve(heroe);
            else
                reject ('No se pudo encontrar el Heroe');
        }, 3000);
    
    });



}

getHeroeByIdAsync (50)
        .then ((heroe) => {
            console.log ('El heroe es: ', heroe);
        })
        .catch ((error) => {
            console.warn (error);
        });