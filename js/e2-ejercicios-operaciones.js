//EJERCICIOS DE OPERACIONES
document.write("<h4 id = \"ejercicios3\">EJERCICIOS</h4>");
document.write("<h5 id = \"ejercicio3_0\">0. Crear variables frutas y hacer operaciones<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
//Crea variables para guardar el nombre de los siguientes productos 
// junto con sus precios por kilo y muestralos en tu pagina. 

let precioManzana = 2.5;
let precioPera = 1.5;
let precioPlatano = 1.8;

let precio1kgManzana_1kgPera = precioManzana + precioPera;
let precio1kgPlatano_1kgPera = precioPlatano + precioPera;
let precio2kgPeras = precioPera * 2;
let precio3kgPlatanos = precioPlatano * 3;
let precio2kgManzanas_3kgPeras = (precioManzana * 2) + (precioPera * 3);
let precio1ymediokgPlatanos_2kgPeras_3kgManzanas = (precioPlatano * 1.5) + (precioPera * 2) + (precioManzana * 3);

document.write("El precio de la manzana es: " + precioManzana +"€/kg<br>");
document.write("El precio de la pera es: " + precioPera +"€/kg<br>");
document.write("El precio de la platano es: " + precioPlatano +"€/kg<br><br>");

document.write("Precio total de 1 kilo de manzana y 1 kilo de pera: " + precio1kgManzana_1kgPera + "<br>");
document.write("Precio total de 1 kilo de platano y 1 kilo de pera:" + precio1kgPlatano_1kgPera + "<br>");
document.write("Precio total de 2 kilos de peras: " + precio2kgPeras + "<br>");
document.write("Precio total de 3 kilos de platanos: " + precio3kgPlatanos + "<br>");

document.write("Precio total de 2 kilos de manzana y 3 kilos de peras: " + precio2kgManzanas_3kgPeras + "<br>");
document.write("Precio total de 1,5 kilos de platano, 2 kilos de peras, 3 kilos de manzana: " +  + "<br>");
document.write("Precio total de 2,5 kilos de peras, 3,5 kilos de platano: " + precio1ymediokgPlatanos_2kgPeras_3kgManzanas + "<br>");
document.write("<hr>");


//1. Crea variables para guardar las notas de un alumno: 7.5, 10.5, 8, 9.5, 7 y muestra su nota media.
document.write("<h5 id = \"#ejercicio3_1\">1. Crea variables para guardar las notas de un alumno<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
const nota1 = 7.5;
const nota2 = 10.5;
const nota3 = 8;
const nota4 = 9.5;
const nota5 = 7;

// Calculando la nota media
let notaMediaAlumno = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

document.write("La nota media es: " + notaMediaAlumno + "<br><br>");


//2. Calcula el área de un cuadrado con lado de longitud 5 cm.
document.write("<h5 id = \"#ejercicio3_2\">2. Calcula el área de un cuadrado<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
let ladoCuadrado = 5;
let areaCuadrado = ladoCuadrado * ladoCuadrado;
document.write("El área del cuadrado es: " + areaCuadrado + "<br><br>");


//3. Encuentra el área de un rectángulo con dimensiones de 8 cm de largo y 6 cm de ancho.
document.write("<h5 id = \"#ejercicio3_3\">3. Encuentra el área de un rectángulo<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
let largoRectangulo = 8;
let anchoRectangulo = 6;
let areaRectangulo = largoRectangulo * anchoRectangulo;
document.write("El área del rectángulo es: " + areaRectangulo + "<br><br>");


//4. Determina el área de un triángulo con base de 10 metros y altura de 8 metros.
document.write("<h5 id = \"#ejercicio3_4\">4.Determina el área de un triángulo<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
let baseTriangulo = 10;
let alturaTriangulo = 8;
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
document.write("El área del triángulo es: " + areaTriangulo + "<br><br>");

//5. Calcula el área de un círculo con radio de 4 centímetros
document.write("<h5 id = \"#ejercicio3_5\">5.Calcula el área de un círculo<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
let radioCirculo = 4;
const PI = 3.1416;
let areaCirculo = PI * (radioCirculo **2);
document.write("El área del círculo es: " + areaCirculo + "<br><br>");

//6. Encuentra el área de un trapecio con bases de longitudes 6 cm y 10 cm, y altura de 8 cm.
document.write("<h5 id = \"#ejercicio3_6\">6.Encuentra el área de un trapecio<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
let baseMenor = 6;
let baseMayor = 10
let alturaTrapecio = 8;
let areaTrapecio = ((baseMenor + baseMayor) / 2) * alturaTrapecio;
document.write("El área del trapecio es: " + areaTrapecio + "<br><br>");

//7.Determina el área de un rombo con diagonales de longitudes 12 cm y 16 cm.
document.write("<h5 id = \"#ejercicio3_7\">7.Determina el área de un rombo<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
let diagonalMenorRombo = 12;
let diagonalMayorRombo = 16;
let areaRombo = (diagonalMenorRombo * diagonalMayorRombo) / 2;
document.write("El área del rombo es: " + areaRombo + "<br><br>");

//8. Calcula el área de un paralelogramo con base de 7 metros y altura de 9 metros.
document.write("<h5 id = \"#ejercicio3_8\">8.Calcula el área de un paralelogramo<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");

let baseParalelogramo = 7;
let alturaParalelogramo = 9;
let areaParalelogramo = baseParalelogramo * alturaParalelogramo;
document.write("El área del paralelogramo es: " + areaParalelogramo + "<br><br>");

//9. Encuentra el área de un pentágono regular con lado de 6 centímetros.*
document.write("<h5 id = \"#ejercicio3_9\">9.Encuentra el área de un trapecio<a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h5>");
let ladoPentagono = 6;
let perimetroPentagono = ladoPentagono * 5;
let apotemaPentagono = ladoPentagono / (2 * Math.tan(Math.PI / 5));
let areaPentagono = (perimetroPentagono * apotemaPentagono) / 2;
document.write("El área del pentágono es: " + areaPentagono + "<br><br>");