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
}

function redondearNumero(_num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
