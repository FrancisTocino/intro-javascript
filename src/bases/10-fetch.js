// FETCH API

const apiKey = 'ebqjT9070E8MPmX1ITJFdZT5OFM9iI0m';

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Como fetch devuelve una Promesa,.. Puedo hacer... una promesas encadenadas
// y se ecrbe así

peticion
    .then( resp => resp.json() ) //1º Me traigo todo el Json
    .then ( ( { data} ) => {      // Luego busco hasta la rama que me interesa
        const { url } = data.images.original;

        console.log (url);

        //Creo el HTML para verlo
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);


    })
    .catch ( console.warn );