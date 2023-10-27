/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length === 0) {
      return undefined; // Manejo de arreglo vacío
    }
    return array[0];
  }





function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   // primero Verificamos si el arreglo no está vacío
   if (array.length > 0) {
      // Retornarndo el ultimo
      return array[array.length - 1];
   } else {
      // puede estár vacío (puedes retornar undefined o cualquier otro valor predeterminado)
      return undefined;
   }
}





function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   // es importante destacar que al Usar el método map para crear un nuevo arreglo con elementos incrementados en 1
   return array.map(function(numero) {
      return numero + 1;
   });
}




function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   // Usaremos  el método push para agregar el elemento.
   array.push(elemento);
   // Retornar el arreglo modificado 
   return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   // Usar el método unshift para agregar el elemento al comienzo esto simpliofica el codigo
   array.unshift(elemento);
   // Retornar el arreglo modificado
   return array;
}




function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   // Usaremos  el método join para concatenar.
   return palabras.join(' ');
}


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   // Usar el método includes para verificar si el elemento está en el arreglo
   return array.includes(elemento);
}


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // Usaremos  el método reduce para sumar.
   const suma = arrayOfNums.reduce(function(acumulador, numero) {
      return acumulador + numero;
   }, 0); // 0 es el valor inicial del acumulador

   return suma; // retornamos la constante suma
}



function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // Usar el método reduce para sumar todos los resultados y luego dividir por la cantidad de resultados
   if (resultadosTest.length === 0) {
      return 0; // En caso de que el arreglo esté vacío para evitar la división por 0
   }
   
   const suma = resultadosTest.reduce(function(acumulador, resultado) {
      return acumulador + resultado;
   }, 0); //  0 es el valor inicial del acumulador en el argumento numero 2 

   const promedio = suma / resultadosTest.length;
   return promedio;
}
function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   if (arrayOfNums.length === 0) {
      return undefined; // Manejar el caso en el que el arreglo esté vacío
   }
   
   return Math.max(...arrayOfNums);
}




function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   // Verificar si no se pasaron argumentos
   if (arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1) {
      // se pasó un argumento,solo para el retorno
      return arguments[0];
   } else {
      // Usar un bucle para multiplicar todos los argumentos
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
         producto *= arguments[i];
      }
      return producto;
   }
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   // Inicializar un contador
   let contador = 0;

   // Recorrer el arreglo y contar los elementos mayores que 18
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         contador++;
      }
   }

   return contador;
}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const dia = diasSemana[numeroDeDia - 1];
  
  if (dia === "Sábado" || dia === "Domingo") {
    return "Es fin de semana";
  } else {
    return "Es dia laboral";
  }
}


  
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   //function empiezaConNueve(num) {
    //  const numStr = num.toString();
    //  return numStr.startsWith('9');
    

const numStr = num.toString();
if (numStr.startsWith('9')) {
  return true;
} else {
  return false;
}
}


   
 

 
 //console.log(empiezaConNueve(98)); // Devuelve true
 //console.log(empiezaConNueve(123)); // Devuelve false

  


  
   
   
      
   

   



function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   // Verificar si el arreglo está vacío
   if (array.length === 0) {
      return true; // Si no hay elementos, se considera que son iguales
   }

   // Tomar el primer elemento como referencia
   const referencia = array[0];

   // Comparar todos los elementos con la referencia
   for (let i = 1; i < array.length; i++) {
      if (array[i] !== referencia) {
         return false; // Si se encuentra un elemento diferente, se retorna false
      }
   }

   return true; // Si se recorren todos los elementos y todos son iguales, se retorna true
}





function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
   const mesesEncontrados = [];

   for (const mes of array) {
      if (mesesBuscados.includes(mes)) {
         mesesEncontrados.push(mes);
      }
   }

   if (mesesEncontrados.length === mesesBuscados.length) {
      return mesesEncontrados;
   } else {
      return "No se encontraron los meses pedidos";
   }
}




function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const resultados = [];

   for (let i = 0; i <= 10; i++) {
      resultados.push(6 * i);
   }

   return resultados;
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   // Utiliza filter para obtener un nuevo arreglo con los valores mayores a 100
   const valoresMayoresACien = array.filter(function(valor) {
      return valor > 100;
   });

   return valoresMayoresACien;
}


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const resultados = [];

   for (let i = 0; i < 10; i++) {
      num += 2;
      resultados.push(num);

      if (num === i) {
         return "Se interrumpió la ejecución";
      }
   }

   return resultados;
}



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const resultados = [];

   for (let i = 0; i < 10; i++) {
      if (i === 5) {
         // Cuando i es igual a 5, no se suma el número y se continúa con la siguiente iteración
         continue;
      }

      num += 2;
      resultados.push(num);
   }

   return resultados;
}







/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
