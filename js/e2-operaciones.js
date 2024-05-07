//EJEMPLOS DE OPERACIONES//SUMAN DOS NUMEROS
document.write("<h2><u>EJERCICIO 3: OPERACIONES</u></h2>");
//Indice página
document.write("<h4 id = \"indice\">INDICE</h4>");
document.write("<h5><b>Ejemplos</b></h5>");
document.write("<ol><li><a href = \"#ejemplos\">Sumar / Restar / Multiplicar / Dividir</a></li></ol>");
document.write("<h5><b>Ejercicios</b></h5>");
document.write("<ol start='0'>");
document.write("<li><a href='#ejercicio0'>Crear variables frutas y hacer operaciones</a></li>");
document.write("<li><a href='#ejercicio1'>Crea variables para guardar las notas de un alumno</a></li>");
document.write("<li><a href='#ejercicio2'>Calcula el área de un cuadrado</a></li>");
document.write("<li><a href='#ejercicio3'>Encuentra el área de un rectángulo</a></li>");
document.write("<li><a href='#ejercicio4'>Determina el área de un triángulo</a></li>");
document.write("<li><a href='#ejercicio5'>Calcula el área de un círculo</a></li>");
document.write("<li><a href='#ejercicio6'>Encuentra el área de un trapecio</a></li>");
document.write("<li><a href='#ejercicio7'>Determina el área de un rombo</a></li>");
document.write("<li><a href='#ejercicio8'>Calcula el área de un paralelogramo</a></li>");
document.write("<li><a href='#ejercicio9'>Encuentra el área de un pentágono regularmo</a></li>");
document.write("</ol>");

document.write("<hr>");

document.write("<h4 id = \"ejemplos\">EJEMPLOS: Sumar/Restar/Multiplicar/Dividir</h4>");
//Sumar el precio de tomates y manzanas
let precioTomates = 2.8;
let precioManzanas = 1.5;
let precioTotal;

precioTotal = precioTomates + precioManzanas;

document.write("Sumar dos numeros: La suma del precio de los tomates " + precioTomates);
document.write(" mas el precio de las manzanas " + precioManzanas);
document.write(" es en total: " + precioTotal);
document.write("<br/>");

//RESTAR DOS NUMERO
//Restarle a los tomates el descuento
let descuento = 1;
let precioTomatesDescuento;

precioTomatesDescuento = precioTomates - descuento;
document.write("Restar dos numeros: La resta del precio de los tomates tomates " + precioTomates);
document.write(" menos el descuento " + descuento);
document.write(" seria: " + precioTomatesDescuento);
document.write("<br/>");

//MULTIPLICAR DOS NUMEROS
//Calcular el precio de 5 kilos de manzanas.
let kilosManzanas = 5;
let precioMultiplicacion;

precioMultiplicacion = kilosManzanas * precioManzanas;
document.write("Multiplicar dos numeros: El precio total de " + kilosManzanas + " kilos de manzanas ");
document.write(" a un precio de " + precioManzanas);
document.write(" seria en total: " + precioMultiplicacion);
document.write("<br/>");

//DIVIDIR DOS NUMEROS
//Calcular la mitad del precio de las manzanas.
let mitad = 2;
let mitadPrecio = precioManzanas / mitad;

document.write("Dividir dos numeros: El resultado de dividir el precio de las manzanas " + precioManzanas );
document.write(" entre " + mitad);
document.write(" seria en total: " + mitadPrecio);
document.write("<br/>");

//COMBINAR VARIAS OPERACIONES
//Usar parentesis en las operaciones que querais hacer primero.
let notaExamen1 = 5.6;
let notaExamen2 = 8.2;
let notaExamen3 = 6.5;
let totalExamenes = 3;
let notaMedia;

notaMedia = (notaExamen1 + notaExamen2 + notaExamen3)/totalExamenes;
document.write("Combinar varias operaciones: La media de los examenes " + notaExamen1 + " " + notaExamen2 + " " + notaExamen3 );
document.write(" seria en total: " + notaMedia);
document.write("<br/>");

//OPERADORES INCREMENTO Y DECREMENTO
//++ suma uno cada vez que se usa, y el -- resta uno cada vez que se usa.
let numeroIntentos = 5;
document.write("El numero de intentos es " + numeroIntentos);
document.write("<br/>");
numeroIntentos++;
numeroIntentos++;
document.write("El numero de intentos incrementado es " + numeroIntentos);
document.write("<br/>");
numeroIntentos--;
document.write("El numero de intentos decrementado es " + numeroIntentos);
document.write("<br/><br/>");
document.write("<hr>");