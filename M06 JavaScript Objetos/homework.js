/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   // Crear un nuevo objeto con las propiedades "nombre" y "edad"
   var gato = {
      nombre: nombre,
      edad: edad,
   };
   
   // Agregar una propiedad "meow" como una función que retorna "Meow!"
   gato.meow = function() {
      return "Meow!";
   };
   
   // Retornar el objeto gato
   return gato;
}


function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   // Crear un nuevo objeto con las propiedades "nombre", "email" y "password"
   var usuario = {
      nombre: nombre,
      email: email,
      password: password
   };
   
   // Retornar el objeto usuario
   return usuario;
}





function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   // Agregar la propiedad al objeto con el valor null
   objeto[propiedad] = null;
   
   // Retornar el objeto modificado
   return objeto;
}



function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   // Verificar si el método existe en el objeto antes de invocarlo
   if (objeto[metodo] && typeof objeto[metodo] === "function") {
      objeto[metodo](); // Invocar el método
  } else {
      console.log("El método no existe o no es una función.");
  }
}



function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   
      // Verificar si la propiedad "numeroMisterioso" existe en el objeto
      if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
          // Multiplicar el número por 5 y retornar el resultado
          return objetoMisterioso.numeroMisterioso * 5;
      } else {
          console.log("La propiedad 'numeroMisterioso' no existe en el objeto.");
      }
   }



function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   /// Verificar si la propiedad existe en el objeto antes de eliminarla
   if (objeto.hasOwnProperty(propiedad)) {
      delete objeto[propiedad]; // Eliminar la propiedad
  }
  // Retornar el objeto modificado (incluso si la propiedad no existía)
  return objeto;
}





function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Verificar si la propiedad "email" tiene un valor definido
   if (objetoUsuario.email !== undefined && objetoUsuario.email !== null) {
      return true;
  } else {
      return false;
  }
}




function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return propiedad in objeto;
}


function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si la propiedad "password" coincide con el parámetro "password"
   if (objetoUsuario.password === password) {
      return true;
  } else {
      return false;
  }
}


function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   // Actualizar la propiedad "password" con la nueva contraseña
   objetoUsuario.password = nuevaPassword;
   
   // Retornar el objeto actualizado
   return objetoUsuario;
}


function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   // Verificar si la propiedad "amigos" es un arreglo, si no, inicializarla como un arreglo vacío
   if (!Array.isArray(objetoUsuario.amigos)) {
      objetoUsuario.amigos = [];
  }
  
  // Agregar el nuevo amigo al final del arreglo
  objetoUsuario.amigos.push(nuevoAmigo);
  
  // Retornar el objeto actualizado
  return objetoUsuario;
}


function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   // Recorrer el arreglo de usuarios
   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
      // Establecer la propiedad "esPremium" como true en cada usuario
      objetoMuchosUsuarios[i].esPremium = true;
  }
  
  // Retornar el arreglo modificado
  return objetoMuchosUsuarios;
}



function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   if (Array.isArray(objetoUsuario.posts)) {
      // Inicializar una variable para llevar el conteo de los likes
      var sumaLikes = 0;

      // Recorrer el arreglo de posts y sumar los likes
      for (var i = 0; i < objetoUsuario.posts.length; i++) {
          sumaLikes += objetoUsuario.posts[i].likes;
      }

      // Retornar la suma de likes
      return sumaLikes;
  } else {
      console.log("La propiedad 'posts' no es un arreglo.");
      return 0; // Retorna 0 si no hay posts o si 'posts' no es un arreglo
  }
}

//function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8

  // Agregar un método "calcularPrecioDescuento" 
  //objetoProducto.calcularPrecioDescuento = function() {
      // Calcular el precio final aplicando el descuento
      //var precioConDescuento = objetoProducto.precio - (objetoProducto.precio * objetoProducto.porcentajeDeDescuento);
      //return precioConDescuento;
  //};
  
  // Llamar al método "calcularPrecioDescuento" y retornar el resultado
 // return objetoProducto.calcularPrecioDescuento();


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   if (
      objetoProducto.hasOwnProperty("precio") &&
      objetoProducto.hasOwnProperty("porcentajeDeDescuento")
  ) {
      // Agregar un método "calcularPrecioDescuento" al objetoProducto
      objetoProducto.calcularPrecioDescuento = function () {
          // Calcular el precio final aplicando el descuento
          var precioConDescuento = objetoProducto.precio - (objetoProducto.precio * objetoProducto.porcentajeDeDescuento);
          return precioConDescuento;
      };
  } else {
      console.log("El objetoProducto debe tener las propiedades 'precio' y 'porcentajeDeDescuento' para calcular el descuento.");
  }
  return objetoProducto;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
