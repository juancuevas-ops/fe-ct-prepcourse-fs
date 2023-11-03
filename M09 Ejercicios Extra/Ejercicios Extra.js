/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const resultado = [];

  for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      resultado.push([clave, objeto[clave]]);
    }
  }

  return resultado;
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const result = {};

  // Elimina espacios y convierte el string a minúsculas para tratar todas las letras de forma uniforme
  const cleanString = string.replace(/\s/g, '').toLowerCase();

  // Itera sobre cada letra en el string
  for (let i = 0; i < cleanString.length; i++) {
    const letra = cleanString[i];
    // Si la letra ya existe en el objeto, incrementa su conteo; de lo contrario, inicializa en 1
    if (result[letra]) {
      result[letra]++;
    } else {
      result[letra] = 1;
    }
  }

  // Ordena el objeto por las claves (letras) en orden alfabético
  const orderedResult = {};
  Object.keys(result).sort().forEach(function (key) {
    orderedResult[key] = result[key];
  });

  return orderedResult;
}



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = "";
   let minusculas = "";
 
   for (let i = 0; i < string.length; i++) {
     if (string[i] === string[i].toUpperCase()) {
       mayusculas += string[i];
     } else {
       minusculas += string[i];
     }
   }
 
   return mayusculas + minusculas;
 }


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   //// Dividir la frase en palabras
  const palabras = frase.split(" ");

  // Invertir cada palabra y almacenarlas en un nuevo arreglo
  const palabrasInvertidas = palabras.map(function (palabra) {
    return palabra.split("").reverse().join("");
  });

  // Unir las palabras invertidas en el orden original
  const resultado = palabrasInvertidas.join(" ");

  return resultado;
} 



function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
    // Convierte el número en una cadena de caracteres
  const numeroStr = numero.toString();

  // Invierte la cadena
  const numeroInvertido = numeroStr.split('').reverse().join('');

  // Compara la cadena original con la invertida
  if (numeroStr === numeroInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   // Utiliza la función replace para reemplazar las letras "a", "b" y "c" con una cadena vacía
  const resultado = string.replace(/[abcABC]/g, '');
  return resultado;
}



function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   const resultado = arrayOfStrings.sort(function (a, b) {
      return a.length - b.length;
    });
    return resultado;
  }


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const resultado = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      resultado.push(array1[i]);
    }
  }

  return resultado;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
