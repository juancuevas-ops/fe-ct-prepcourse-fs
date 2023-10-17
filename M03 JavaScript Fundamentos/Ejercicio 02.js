/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString() {
   // Debe retornar un string.
   // Tu código:
   return ("¡Hola, esto es  un string!");
}

// Ejemplo 
//const miString = devolverString();
//console.log(miString);



// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:

   return x + y;
}
   //const resultado = suma(5,3);
   //console.log(resultado);


function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
   
   
}
  //const Resultado = resta(5,3);
  //console.log(Resultado);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
  // x =  6                     
  // y = 2
  // console.log(divide);


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
 //const res= multiplica(5*2);
 //console.log(res);



function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y;
}

// Ejemplo 
//const resultado2 = obtenerResto(10, 3); // Obtiene el resto de la división de 10 entre 3
//console.log(resultado2); 


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
