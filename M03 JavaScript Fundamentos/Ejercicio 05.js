/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0) {
      return "Es positivo";
    } else if (num < 0) {
      return "Es negativo";
    } else {
      return false;
    }
  }


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
// Verificamos si el argumento "str" es una cadena de texto
if (typeof str === "string") {
   
   return str + "!";
 } else {
   
   return "Entrada no válida, se esperaba una cadena de texto.";
 }
}



function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   if (typeof nombre === "string" && typeof apellido === "string") {
      // Combinamos el nombre y el apellido con un espacio en medio
      return nombre + " " + apellido;
    } else {
      
      return "Por favor, ingrese un nombre y un apellido válidos.";
    }
  }


function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   if (typeof nombre === "string") {
      // Concatenamos el nombre con el mensaje de saludo
      return "Hola " + nombre + "!";
    } else {
      // Si el argumento no es una cadena de texto, puedes manejar este caso según tus necesidades
      return "Por favor, ingrese un nombre válido.";
   }
}


function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   if (typeof alto === "number" && typeof ancho === "number") {
      // Calculamos el área multiplicando la altura por el ancho
      return alto * ancho;
    } else {
      // Si alguno de los argumentos no es un número, puedes manejar este caso según tus necesidades
      return "Por favor, ingrese valores numéricos válidos para la altura y el ancho.";
    }
  } 


function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   // Verificamos que el argumento "lado" sea un número
  if (typeof lado === "number") {
   // Calculamos el perímetro multiplicando el lado por 4
   return lado * 4;
 } else {
   
   return "Por favor, ingrese un valor numérico válido para el lado del cuadrado.";
 }
}


function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   if (typeof base === "number" && typeof altura === "number") {
      // Calculamos el área del triángulo utilizando la fórmula
      var area = (base * altura) / 2;
      return area;
    } else {
      // Si alguno de los argumentos no es un número, puedes manejar este caso según tus necesidades
      return "Por favor, ingrese valores numéricos válidos para la base y la altura del triángulo.";
    }
  }




function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
      // Verificamos que el argumento "euro" sea un número
      if (typeof euro === "number") {
        // Calculamos el valor en dólares multiplicando la cantidad en euros por la tasa de cambio
        var tasaDeCambio = 1.20;
        var dolares = euro * tasaDeCambio;
        return dolares;
      } else {
        // Si el argumento no es un número, puedes manejar este caso según tus necesidades
        return "Por favor, ingrese una cantidad numérica en euros.";
      }
   
}

    



function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   
  if (typeof letra === "string" && letra.length === 1) {
    // Convertimos la letra a minúsculas para hacer una comparación sin distinción de mayúsculas y minúsculas
    letra = letra.toLowerCase();
    
    // Verificamos si la letra es una vocal
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  } else {
    return "Dato incorrecto";
  }
}










/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
