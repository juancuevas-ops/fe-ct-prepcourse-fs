/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
   }
   
  
    detalle() {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio,
    }
    }
  
  
  



function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   return new Persona(nombre, apellido, edad, domicilio);
}

// Ejemplo de uso:
//const nuevaPersona = crearInstanciaPersona('Juan', 'Pérez', 30, 'Calle Principal 123');
//console.log(nuevaPersona);


function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   // Definir la clase Persona
   // Definir la clase Persona
   class PersonaConMetodo extends Persona {
      datos() {
        return `${this.nombre}, ${this.edad} años`;
      }
   }
  
    //return PersonaConMetodo;
  







// Ejemplo de uso:
//const Persona = agregarMetodo(); // Obtiene la clase Persona
//const nuevaPersona = new Persona('Juan', 'Pérez', 30, 'Calle Principal 123');
//console.log(nuevaPersona.datos()); // Devuelve "Juan, 30 años"

     




// Ejemplo de uso:
//const Persona = agregarMetodo(); // Obtiene la clase Persona
//const nuevaPersona = new Persona('Juan', 'Pérez', 30, 'Calle Principal 123');
//console.log(nuevaPersona.datos()); // Devuelve "Juan, 30 años"




  
  
  // Ejemplo de uso:
 //const nuevaPersona = new Persona('Juan', 'Pérez', 30, 'Calle Principal 123');
 //console.log(nuevaPersona.datos()); // Devuelve "Juan, 30 años"


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
