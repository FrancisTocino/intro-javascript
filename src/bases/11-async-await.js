// Async Await


// async Convierte la función de  normal a Promesa
// Así puedes manejarla como una promesa con el then y el catch
const getImage = async() => {  

    try {
        const apiKey = 'ebqjT9070E8MPmX1ITJFdZT5OFM9iI0m';

        // await lo que hace es que no siga con el código   hasta que
        // se resuelva la petición y pasa el fetch a tipo response y ya
        // puedes utilizar .json() que es un método del tipo response
        const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        //Extraigo la rama data del completo de json
        const {data} = await resp.json();
    
        console.log (data); 
    
        //Extraigo la url de lo que queda del json
        const { url } = data.images.original;
        console.log (url);
    
        //Creo el HTML para verlo
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {

        // Manejo del Error
        console.log(error);
        
    }

}

getImage();
