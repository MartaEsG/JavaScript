// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.

// Sugerencia de array:
// ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap (arraytext, index1, index2 ){
    var indicecopia1 = arraytext[index1];
    var indicecopia2 = arraytext [index2]

    arraytext [index2] = indicecopia1;
    arraytext [index1] = indicecopia2;
    return arraytext;
}
console.log (swap (['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 1, 2))