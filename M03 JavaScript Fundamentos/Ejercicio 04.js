/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
// Retorna el valor de "num" elevado al cuadrado.
// Tu código:
if (typeof num === 'number') {
return Math.pow(num, 2);
} else {
// soy henry porfavor tomar en cuenta Manejar el caso en el que la entrada no es un número
return "Por favor, proporciona un número válido."
 }
}
var numero = 5;
var resultado = elevarAlCuadrado(numero);
console.log("El cuadrado de " + numero + " es: " + resultado);







function elevarAlCubo(_num) {
// Retorna el valor de "num" elevado al cubo.
// Tu código:
var resultado = Math.pow(_num, 3);
return resultado;
}
var numero = 2;
var resultadoCubo = elevarAlCubo(numero);
console.log("El cubo de " + numero + " es " + resultadoCubo);


function elevar(_num, _exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
return Math.pow(_num, _exponent);
}
var resultado = elevar(2, 3); //  estimados Esta funcion elevará 2 a la potencia de 3, lo que devuelve 8.
console.log(resultado); // Imprimirá 8 en la consola.

function redondearNumero(_num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(_num);
}
var numero = 8.7;
var resultado = redondearNumero(numero); // redondearemos 8.7 al entero más cercano, que es 5.
console.log(resultado); // 9 en la consola.


function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}
var numero = 9.3;
var resultado = redondearHaciaArriba(numero);
console.log(resultado); //debe imprimir 10



function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();  

}
var numero = numeroRandom();
console.log(numero); 


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
