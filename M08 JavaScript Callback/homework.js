/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   // Comprueba si el nombre es una cadena no vacía
  if (nombre.length > 0) {
   // Convierte la primera letra a mayúscula y el resto a minúsculas
   return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
 } else {
   // Si el nombre está vacío, devuelve una cadena vacía
   return "";
 }
}


function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // T// Invoca el callback sin retornar nada
  cb();
}




function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   // Invoca el callback pasando num1 y num2 como argumentos y retorna el resultado
  return cb(num1, num2);
}


function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   // Calcula la suma de los números en el arreglo
  const suma = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Llama al callback pasándole la suma como argumento
  cb(suma);
}


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      // Ejecuta el callback por cada elemento del arreglo
      cb(array[i]);
    }
  }


function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   const nuevoArreglo = [];

  for (let i = 0; i < array.length; i++) {
    // Ejecuta el callback por cada elemento del arreglo y guarda el resultado en el nuevo arreglo
    nuevoArreglo.push(cb(array[i]));
  }

  return nuevoArreglo;
}


function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const resultados = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    const elemento = arrayOfStrings[i];
    if (elemento.startsWith("a") || elemento.startsWith("A")) {
      resultados.push(elemento);
    }
  }

  return resultados;
}




/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
