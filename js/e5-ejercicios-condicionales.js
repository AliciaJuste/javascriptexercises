//EJERCICIOS DE CONDICIONALES
//IMPRIMIR
function imprimir(mensaje, id) {
  let parrafo = document.getElementById(id);
  parrafo.innerText = mensaje;
}

/*1. Crea un formulario para que el usuario introduzca su edad y vea un mensaje indicando si es mayor de edad o no.
   - Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio.
   - Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es mayor de edad, 
     si su edad es igual o mayor a 18 años y un mensaje es menor de edad de lo contrario.*/
function esMayorDeEdad() {
  let edad = parseInt(document.getElementById("eje1Edad").value);
  const MAYOR_DE_EDAD = 18;

  if (edad < MAYOR_DE_EDAD) {
    mensaje = "Es menor de edad";
  }
  else {
    mensaje = "Es mayor de edad";
  }

  imprimir(mensaje, "eje1Resultado");
}

/*2. Crea un formulario que indique cual es el mayor de dos numeros.
   - Agrega dos elementos al formulario que reciban dos numeros enteros. Este campo no puede estar vacio.
   - Agrega un boton que al hacer click llame a una funcion que indique cual de los dos numeros es el mayor.*/
function cualEsElNumeroMayor() {
  let numero1 = parseInt(document.getElementById("eje2Numero1").value);
  let numero2 = parseInt(document.getElementById("eje2Numero2").value);
  let mensaje = "El número mayor es el ";

  if (numero1 > numero2) {
    mensaje = mensaje + numero1;
  }
  else if (numero2 > numero1) {
    mensaje = mensaje + numero2;
  }
  else {
    mensaje = "El número " + numero1 + " y el número " + numero2 + " son iguales!";
  }

  imprimir(mensaje, "eje2Resultado");
}

/*3. Crea un formulario para que el usuario introduzca su edad y vea un mensaje indicando si es mayor de edad o no.
   - Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio.
   - Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es mayor de edad, 
     si su edad es igual o mayor a 18 años y un mensaje es menor de edad de lo contrario.*/
function esMayorDeEdad2() {
  let edad = parseInt(document.getElementById("eje3Edad").value);
  const MAYOR_DE_EDAD = 18;

  if (edad >= MAYOR_DE_EDAD) {
    mensaje = "Es mayor de edad";
  }
  else {
    mensaje = "Es menor de edad";
  }

  imprimir(mensaje, "eje3Resultado");
}

/*4. Crea un formulario para que el usuario introduzca su nota y vea si esta aprobado o suspenso.
   - Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio y debe ser entre 0 y 10.
   - Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es mayor de edad, 
     si su edad es igual o mayor a 18 años y un mensaje es menor de edad de lo contrario.*/
function heAprobado() {
  let nota = parseFloat(document.getElementById("eje4Nota").value);

  if (nota >= 5) {
    mensaje = "Has aprobado!";
  }
  else {
    mensaje = "Ohhh has suspendido. Vuelve a intentarlo, tu puedes!";
  }

  imprimir(mensaje, "eje4Resultado");
}

/*5. Crea un formulario para que el usuario introduzca su nombre y le diga si es un nombre largo o corto.
   - Agrega un elemento al formulario para introducir un nombre. Este campo no puede estar vacio.
   - Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es un nombre largo, 
     si tiene mas de 10 caracteres o es un nombre corto si tiene menos de 10.*/
function esNombreLargo() {
  let nombre = document.getElementById("eje5Nombre").value;
  let longitudNombre = nombre.length;
  if (longitudNombre < 10) {
    mensaje = "Tu nombres es corto, tiene " + longitudNombre + " letras";
  }
  else {
    mensaje = "Tu nombre es largo, tiene " + longitudNombre + " letras";
  }

  imprimir(mensaje, "eje5Resultado");
}

/*6. Crea un formulario para ver la estacion del año segun el mes introducido.
   - Agrega un elemento select al formulario para seleccionar un mes. Este campo no puede estar vacio.
   - Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es mayor de edad, 
     si su edad es igual o mayor a 18 años y un mensaje es menor de edad de lo contrario.*/
function queEstacionEs() {
  mes = document.getElementById("eje6Mes").value;
  let mensaje = "La estación del año actual es ";

  if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    mensaje = mensaje + "la primavera";
  }
  else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    mensaje = mensaje + "el verano";
  }
  else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    mensaje = mensaje + "el otoño";
  }
  else {
    mensaje = mensaje + "el invierno";
  }
  imprimir(mensaje, "eje6Resultado");

}
/*7. Crea una calculadora.
   - Agrega un formulario donde el usuario pueda introducir dos numeros y seleccionar la operacion suma, resta, multiplicacion o division. 
     Los campos no pueden estar vacios.
   - Agrega un boton que al hacer click llame a una funcion que muestre el resultado de la operación seleccionada.*/
function calculadora2Numeros() {
  let numero1 = document.getElementById("eje7Number1").value;
  let numero2 = document.getElementById("eje7Number2").value;
  let selectOperacion = document.getElementById("eje7Operacion");
  let operacion = document.getElementById("eje7Operacion").value;
  let textoOperacion = selectOperacion.options[selectOperacion.selectedIndex].text;
  let resultado = 0;
  let mensaje = "El resultado de ";

  if (operacion === "+") {
    resultado = numero1 + numero2;
  } 
  else if (operacion === "-") {
    resultado = numero1 - numero2;
  }
  else if (operacion === "*") {
    resultado = numero1 * numero2;
  }
  else  {
      resultado = numero1 / numero2;
  }
  mensaje = "El resultado de " + textoOperacion + " " + numero1 + operacion + numero2 + " es " + parseFloat(resultado.toFixed(2));
  imprimir(mensaje, "eje7Resultado");
}

/*8. Crea un formulario que muestre el precio final segun el producto y la forma de pago elegida.
   - Agrega un formulario donde el usuario pueda elegir entre los siguientes productos: 1. Camiseta 10 euros, 2. 
     Sudadera 20 euros, 3. Bufanda 5 euros, este campo es obligatorio y solo puede elegir un producto. 
     Incluye también un elemento donde pueda introducir la cantidad, que es tambien obligatorio y debe ser mayor a 0.
   - Agrega un boton comprar que al hacer click muestre el precio total del producto elegido teniendo en cuenta la cantidad. 
     Por ejemplo si elige 2 camisetas, el precio final seria 20 euros.*/

/*9. Crea un formulario calcule el precio total de un hotel segun la habitacion y el numero de noches elegidas.
   - Agrega un formulario donde el usuario pueda elegir el tipo de habitacion: Suite: 100 euros, habitacion doble: 70 euros, habitacion individual: 50 euros. 
     Este campo es obligatorio. Otro campo para introducir el numero de noches que debe ser mayor a 0.
   - Agrega un boton que muestre el precio total. Si el usuario se queda por mas de 5 noches, se le aplica un descuento a la estancia del 20%.*/


/*10. Crea un formulario calcule el precio total del alquiler de un coche.
   - Agrega un formulario donde el usuario pueda elegir el tipo de coche: Deluxe: 100 euros, Standard: 70 euros. Basic: 50 euros. Este campo es obligatorio. 
     El usuario tambien debe poder elegir el numero de dias, este campo es obligatorio y debe ser mayor a 0. 
     El usuario debe introducir tambien su año de nacimiento, este campo es obligatorio.
     Y debe elegir el seguro: todo riesgo 20 euros por dia. Basico 5 euros por dia.
   - Agrega un boton que muestre el precio total. Teniendo en cuenta las siguientes reglas:
   - El usuario debe ser mayor de 25 años, sino mostrara un mensaje indicando que no puede alquilar el coche.
   - Si el coche se alquila por mas de 7 dias, se aplica un descuento del 10% al alquiler.
   - Si el usuario ha elegido el seguro basico, debe mostrar ademas del precio final, un mensaje indicando que debe dejar un deposito de 500 euros. */