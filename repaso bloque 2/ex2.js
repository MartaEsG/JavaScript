// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.




const users = [
    {   name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {   name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {   name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3',volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {   name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

var volumenes = [] ;

//Iterate through all users
for (const user of users){
    //iterates through all elements inside first level keys
    for (const key in user.favoritesSounds) {
        const element = user.favoritesSounds[key]
        if (typeof element.volume === "number")
        volumenes.push(element.volume)

    }
}

let total = 0;
// summing the volume values to total in each iteration 
for (let index = 0; index < volumenes.length; index++) {
    total += volumenes[index];
}


let media = (total / volumenes.length)
console.log (media)