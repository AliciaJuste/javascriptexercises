document.write("<h2>EJERCICIO 2: VARIABLES</h2>");
//Nombre de variable recomendado comenzar en minúsculas y usar camel Case en vez de espacios
//Declarar una variable
let miNombre;

//Crear una variable y luego asignar valor
document.write("<h4>EJEMPLO 1: INICIAR LA VARIABLE CIUDAD</h4>");
let ciudad;
ciudad = "Malaga";
document.write("La variable ciudad tiene el valor: " + ciudad + "</br></br>");

//Declarar variable y asignar valor en una sentencia
document.write("<h4>EJEMPLO 2: INICIAR LA VARIABLE EDAD</h4>");
let edad = 53;
document.write("La variable edad tiene el valor: " + edad + "</br>");
edad = 54;
document.write("La variable edad cambia el valor: " + edad + "</br>");

//TIPOS DE VARIABLES
//Numero
let numero = 5;
let  numeroDec = 3.3;

//String, cadenas. Pueden usarse comillas dobles o simples
let saludo = "Buenos dias";
let despedida = 'Que te vaya bonito';
document.write(saludo + " Erika! " + despedida + "</br>");

//boolean
let estaSoleado = false;
let esJueves = true;
document.write("Hoy esta soleado? " + estaSoleado + "</br>");
document.write("Hoy es Jueves? " + esJueves + "</br>");

/*Ejercicio 1: Declara variables del tipo que necesites para guardar la siguiente información sobre una persona. 
  Asignarle como valor información sobre ti y muestralo en tu página.. 
  A continuación cambia los valores con información de alguien que conozcas y muestralo en tu página..
    · Nombre
    · Apellidos
    · Edad
    · Altura
    · Ciudad
    · Te gusta la playa (verdadero o falso)
    · Te gusta la montaña (verdadero o falso)
    · Te gusta el chocolate (verdadero o falso)
    · Tienes mascota (verdadero o falso)
*/
document.write("<h4>EJERCICIO 1: ASIGNAR VALORES A VARIABLES Y CAMBIARSELOS</h4>");
let nombre, apellidos, edad, altura, ciudad, gusstaPlaya, gustaMonte, gustaChocolate, tienesMascota 
nombre = "Alicia";
apellidos = "Juste Gilabert";
edad = 53;
altura = 1.645;
ciudad = "Vilanova i la Geltrú";
gustaPlaya = "false";
gustaMonte = "true";
gustaChocolate = "true";
tienesMascota = "true";
document.write("1. Informacion sobre : </b>" + nombre + " " + apellidos "</b>");
document.write("   · Edad = " + edad + " años");
document.write("   · Altura = " + altura + " cm");
document.write("   · Ciudad = " + ciudad);
document.write("   · ¿Te gusta la playa? = " + (gustaPlaya ? "SI" : "NO"));
document.write("   · ¿Te gusta la montaña? = " + (gustaMonte ? "SI" : "NO"));
document.write("   · ¿Te gusta la chocolate? = " + (gustaChocolate ? "SI" : "NO"));
document.write("   · ¿Tienes mascota? = " + (tienesMascota ? "SI" : "NO"));

//Cambiar valores y volverlos a mostrar por pantalla
nombre = "Yerai";
apellidos = "Valverde Ramirez";
edad = 21;
altura = 1.85;
ciudad = "Barcelona";
gustaPlaya = "true";
gustaMonte = "false";
gustaChocolate = "true";
tienesMascota = "false";
document.write("1. Informacion sobre : </b>" + nombre + " " + apellidos "</b>");
document.write("   · Edad = " + edad + " años");
document.write("   · Altura = " + altura + " cm");
document.write("   · Ciudad = " + ciudad);
document.write("   · ¿Te gusta la playa? = " + (gustaPlaya ? "SI" : "NO"));
document.write("   · ¿Te gusta la montaña? = " + (gustaMonte ? "SI" : "NO"));
document.write("   · ¿Te gusta la chocolate? = " + (gustaChocolate ? "SI" : "NO"));
document.write("   · ¿Tienes mascota? = " + (tienesMascota ? "SI" : "NO"));


document.write("FIN!!!");