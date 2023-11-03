/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona.
   constructor(nombre, apellido, edad, domicilio) {
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad = edad;
     this.domicilio = domicilio;
   }
 
   detalle() {
     return {
       nombre: this.nombre,
       apellido: this.apellido,
       edad: this.edad,
       domicilio: this.domicilio,
     };
   }
}
 
 function agregarMetodo() {
   class PersonaConMetodo extends Persona {
     datos() {
       return `${this.nombre}, ${this.edad} años`;
     }
   }
 
   return PersonaConMetodo;
 }
 
 function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   return new Persona(nombre, apellido, edad, domicilio);
 }

 describe('crearInstanciaPersona(nombre, apellido, edad, domicilio)', function () {
   it('Debería crear una instancia de Persona y tener propiedades correctas', function () {
     const persona = crearInstanciaPersona('Juan', 'Pérez', 22, 'Saavedra 123');
     expect(persona.nombre).toBe('Juan');
     expect(persona.edad).toBe(22);
     expect(persona.apellido).toBe('Pérez');
     expect(persona.domicilio).toBe('Saavedra 123');
   });
 });
 
 describe('agregarMetodo()', function () {
   it('Debería agregar el método "datos" a la clase Persona', function () {
     const PersonaConMetodo = agregarMetodo();
     const persona = new PersonaConMetodo('Juan', 'Pérez', 22, 'Saavedra 123');
     expect(persona.datos()).toBe('Juan, 22 años');
   });
 }



 
  









     







/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};

