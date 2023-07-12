// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}
// Ej array:
// ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex (arraytext, texto){
 
    for (let index = 0; index < arraytext.length; index++) { 
        if ( arraytext[index] == texto) 
        return index
    }
 }
console.log(findArrayIndex (['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "Ajolote"))

function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++) {
        let obj = array[i];
        if(obj === text){
            return i;
        }
    }
}
// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function removeItem (arraytext, text){
    let indice = findArrayIndex (arraytext, text)
    arraytext.splice (indice, 1) 
    return arraytext
}
console.log(removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "Mosquito"))
   