/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   return x === y;
}
console.log(sonIguales(5, 5)); // Devolverá true
console.log(sonIguales(5, 3)); // Devolverá false



function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   return str1.length === str2.length;
    
    
}

console.log(tienenMismaLongitud("hola", "adiós")); // Devolverá true porque ambos tienen 4 caracteres.
console.log(tienenMismaLongitud("hello", "world")); // Devolverá false porque uno tiene 5 caracteres y el otro 6.
console.log(tienenMismaLongitud("gato", "perro")); // Devolverá true porque ambos tienen 4 caracteres.

function menosQueNoventa(_num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:

}

function mayorQueCincuenta(_num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   _num > 50;

   
}
console.log(mayorQueCincuenta(60)); //  true
console.log(mayorQueCincuenta(40)); //  false
console.log(mayorQueCincuenta(50)); // false

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(7)); //  false
console.log(esPar(0)); //  true

function esImpar(num){
return num % 2 !== 0;


}

console.log(esImpar(4)); // false
console.log(esImpar(7)); // true
console.log(esImpar(0)); // false










/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar









