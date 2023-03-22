import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

// Creando direcciones
const direccion1 = new Direccion('Calle A', 1, '1', 'A', '12345', 'Poblacion1', 'Provincia1');
const direccion2 = new Direccion('Calle B', 2, '2', 'B', '23456', 'Poblacion2', 'Provincia2');
const direccion3 = new Direccion('Calle C', 3, '3', 'C', '34567', 'Poblacion3', 'Provincia3');

// Creando teléfonos
const telefono1 = new Telefono('Móvil', '111111111');
const telefono2 = new Telefono('Fijo', '222222222');
const telefono3 = new Telefono('Fijo', '333333333');

// Creando los mails
const mail1 = new Mail('Personal', 'patata@gmail.com');
const mail2 = new Mail('Trabajo', 'pimiento@empresa.com');
const mail3 = new Mail('Personal', 'naranja@hotmail.com');

// Creando las personas
const persona1 = new Persona('Juan', 'Pérez', 30, '12345678', "12/05", 'Azul', 'Hombre', [direccion1], [mail1], [telefono1], 'Nota 1');
const persona2 = new Persona('Pepe', 'Álvarez', 80, '87654321', "01/01", 'Verde', 'Hombre', [direccion2], [mail2], [telefono2], 'Nota 2');
const persona3 = new Persona('Manuela', 'García', 65, '12354887', "12/05", 'Rojo', 'Mujer', [direccion3], [mail3], [telefono3], 'Nota 3');

console.log("Persona1: ", persona1)
console.log("Persona2: ", persona2)
console.log("Persona3: ", persona3)

const personas = [persona1,persona2,persona3]

personas.forEach(persona => {
    if(persona.buscarDni("12345678")){
        persona.agregarDireccion(new Direccion("Calle D",1,"1","B","54654","Poblacion4","Provincia4"))
        persona.agregarMail(new Mail("Trabajo","banana@empresa.net"))
        persona.agregarTelefono(new Telefono("Movil","000000000"))
    }
});

console.log("Después de añadir datos")
console.log("Persona1: %v", persona1)
console.log("Persona2: %v", persona2)
console.log("Persona3: %v", persona3)


