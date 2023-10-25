/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
// Retorna el valor de "num" elevado al cuadrado.
// Tu código:

   return Math.pow(num, 2);

}









function elevarAlCubo(_num) {
// Retorna el valor de "num" elevado al cubo.
// Tu código:

   return (_num ** 3);
   

}




function elevar(_num, _exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
return Math.pow(_num, _exponent);
}


function redondearNumero(_num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(_num);
}



function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}




function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();  

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
