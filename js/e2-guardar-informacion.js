document.write("<h2><u>EJERCICIO 2: VARIABLES</u></h2>");
//Indice página
document.write("<h4 id = \"indice\">INDICE</h4>");
document.write("<h5><b>Ejemplos</b></h5>");
document.write("<ol><li><a href = \"#ejemplo1\">Iniciar la variable ciudad</a></li>");
document.write("<li><a href = \"#ejemplo2\">Iniciar la variable edad</a></li></ol>");
document.write("<h5><b>Ejercicios</b></h5>");
document.write("<ol><li><a href = \"#ejercicio1\">Asignar datos personas y modificarlos</a></li>");
document.write("<li><a href = \"#ejercicio2\">Asignar datos peliculas y modificarlos</a></li>");
document.write("<li><a href = \"#ejercicio3\">Asignar datos canciones y modificarlos</a></li>");
document.write("<li><a href = \"#ejercicio4\">Asignar datos libros y modificarlos</a></li>");
document.write("<li><a href = \"#ejercicio5\">Asignar datos deportes y modificarlos</a></li>");
document.write("<li><a href = \"#ejercicio6\">Asignar datos viajes y modificarlos</a></li></ol>");
document.write("<hr>");


/* EJEMPLOS ********************************************************************************/

//Nombre de variable recomendado comenzar en minúsculas y usar camel Case en vez de espacios
//Declarar una variable
let miNombre;

//Crear una variable y luego asignar valor
document.write("<h5 id = \"ejemplo1\">EJEMPLO 1: INICIAR LA VARIABLE CIUDAD</h5>");
let miCiudad;
miCiudad = "Malaga";
document.write("La variable ciudad tiene el valor: " + miCiudad + "<br><br>");

//Declarar variable y asignar valor en una sentencia
document.write("<h5>EJEMPLO 2: INICIAR LA VARIABLE EDAD</h5>");
let miEdad = 53;
document.write("La variable edad tiene el valor: " + miEdad + "<br>");
miEdad = 54;
document.write("La variable edad cambia el valor: " + miEdad + "<br>");

//TIPOS DE VARIABLES
//Numero
let numero = 5;
let  numeroDec = 3.3;

//String, cadenas. Pueden usarse comillas dobles o simples
let saludo = "Buenos dias";
let despedida = 'Que te vaya bonito';
document.write(saludo + " Erika! " + despedida + "<br>");

//boolean
let estaSoleado = false;
let esJueves = true;
document.write("Hoy esta soleado? " + estaSoleado + "<br>");
document.write("Hoy es Jueves? " + esJueves + "<br>");
document.write("<hr>");

/* EJERCICIOS ********************************************************************************/

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
document.write("<h4 id = \"ejercicio1\">EJERCICIO 1: ASIGNAR VALORES A VARIABLES CON DATOS DE PERSONAS Y CAMBIARSELOS <a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h4>");
let nombre, apellidos, edad, altura, ciudad, gustaPlaya, gustaMonte, gustaChocolate, tienesMascota;
nombre = "Alicia";
apellidos = "Juste Gilabert";
edad = 53;
altura = 1.645;
ciudad = "Vilanova i la Geltrú";
gustaPlaya = false;
gustaMonte = true;
gustaChocolate = true;
tienesMascota = true;

document.write("<p>1. Información sobre : <b>" + nombre + " " + apellidos + "</b><br></p>");
document.write("<p>· Edad = " + edad + " años" + "<br></p>");
document.write("<p>· Altura = " + altura + " cm" + "<br></p>");
document.write("<p>· Ciudad = " + ciudad + "<br></p>");
document.write("<p>· ¿Te gusta la playa? = " + (gustaPlaya ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Te gusta la montaña? = " + (gustaMonte ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Te gusta el chocolate? = " + (gustaChocolate ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Tienes mascota? = " + (tienesMascota ? "SI" : "NO") + "<br><br></p>");

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
document.write("<p>2. Información sobre : <b>" + nombre + " " + apellidos + "</b><br></p>");
document.write("<p>· Edad = " + edad + " años" + "<br></p>");
document.write("<p>· Altura = " + altura + " cm" + "<br></p>");
document.write("<p>· Ciudad = " + ciudad);
document.write("<p>· ¿Te gusta la playa? = " + (gustaPlaya ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Te gusta la montaña? = " + (gustaMonte ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Te gusta la chocolate? = " + (gustaChocolate ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Tienes mascota? = " + (tienesMascota ? "SI" : "NO") + "<br></p>");
document.write("<hr>");


/*Ejercicio 2: Declara variables para guardar la siguiente información sobre una película, 
  asígnale los valores de tu película favorita y muéstrala en tu página. 
  A continuación cambia el valor de título y género de la película a inglés y muestralo en tu página.
  · Título de la película
  · Director de la película
  · Año de lanzamiento
  · Género
  · Duración en minutos
  · ¿Tiene premios? (verdadero o falso)*/
document.write("<h4 id = \"ejercicio2\">EJERCICIO 2: ASIGNAR VALORES A VARIABLES CON DATOS DE PELICULAS Y CAMBIARSELOS <a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h4>");
document.write
let titulo, director, any, genero, duracion, tienePremios;
titulo = "Más allá de los sueños";
director = "Vincent Ward";
any = 1998;
genero = "Drama y fantasía";
duracion = 106;
tienePremios = true;
  
document.write("<p>1. Informacion sobre la pelicula : <b>" + titulo + "</b><br></p>");
document.write("<p>· Director = " + director + "<br></p>");
document.write("<p>· Año de lanzamiento = " + any + "<br></p>");
document.write("<p>· Género = " + genero + "<br></p>");
document.write("<p>· Duración = " + duracion + " minutos" + "<br></p>");
document.write("<p>· ¿Tiene premios? = " + (tienePremios ? "SI" : "NO") + "<br><br><p>");

titulo = "What dreams may come";
genero = "Fantasy drama";
document.write("<p>· Título en inglés : " + titulo + "<br></p>");
document.write("<p>· Género en inglés : " + genero + "<br></p>");
document.write("<hr>");

/*Ejercicio 3: Declara variables para guardar la siguiente información sobre una canción. 
  Asigna los valores de tu canción favorita y muéstrala en tu página. 
  A continuación cambia todos los valores por el de la canción favorita de alguien que conozcas y muestrala en tu página.
  · Título de la canción
 · Artista
 · Álbum
 · Año de lanzamiento
 · Duración
 · ¿Tiene videoclip? (verdadero o falso) */

document.write("<h4 id = \"ejercicio3\">EJERCICIO 3: ASIGNAR VALORES A VARIABLES CON DATOS DE CANCIONES Y CAMBIARSELOS <a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h4>");
let tituloCancion, artistaCancion, albumCancion, anyCancion, duracionCancion;
tituloCancion = "Under Presure";
artistaCancion = "Queen & David Bowie";
albumCancion = "Hot Space";
anyCancion = 1981;
duracionCancion = 4.08;
tieneVideoclip = true;

document.write("<p>1. Información sobre la canción: <b>" + tituloCancion + "</b><br></p>");
document.write("<p>· Artista = " + artistaCancion + "<br></p>");
document.write("<p>· Album = " + albumCancion + "<br></p>");
document.write("<p>· Año de lanzamiento = " + anyCancion + "<br></p>");
document.write("<p>· Duración = " + duracionCancion + "<br></p>");
document.write("<p>· ¿Tiene videoclip? = " + (tieneVideoclip ? "SI" : "NO") + "<br><br></p>");

//Cambiar valores y volverlos a mostrar por pantalla
tituloCancion = "Adivino";
artistaCancion = "Myke Towers & Bad Bunny";
albumCancion = "Black Panther";
anyCancion = 2024;
duracionCancion = 4.38;
tieneVideoclip = true;

document.write("<p>2. Informacion sobre la canción: <b>" + tituloCancion + "</b><br></p>");
document.write("<p>· Artista = " + artistaCancion + "<br></p>");
document.write("<p>· Artista = " + albumCancion + "<br></p>");
document.write("<p>· Artista = " + anyCancion + "<br></p>");
document.write("<p>· Artista = " + duracionCancion + "<br></p>");
document.write("<p>· ¿Tiene videoclip? = " + (tieneVideoclip ? "SI" : "NO") + "<br></p>");
document.write("<hr>");

/*Ejercicio 4: Declara variables para guardar la siguiente información sobre un libro. 
  Asigna los valores de tu libro favorito y muéstrala en tu página. 
  A continuación cambia los valores de las variables por el del libro favorito de alguien que conozcas.
  · Título del libro
  · Auto
  · Género literario
  · Año de publicación
  · Número de páginas
  · ¿Tiene película? (verdadero o falso)
*/
document.write("<h4 id = \"ejercicio4\">EJERCICIO 4: ASIGNAR VALORES A VARIABLES CON DATOS DE LIBROS Y CAMBIARSELOS <a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h4>");
let tituloLibro, autorLibro, generoLibro, AnyLibro, numPaginas, tienePelicula;
tituloLibro = "El señor de los anillos";
autorLibro = "J.R.R.Tolkien";
generoLibro = "Fantasía épica";
anyLibro = 1954;
numPaginas = 1392;
tienePelicula = true;

document.write("<p>1. Informacion sobre el libro: <b>" + tituloLibro + "</b><br></p>");
document.write("<p>· Autor = " + autorLibro + "<br></p>");
document.write("<p>· Género = " + generoLibro + "<br></p>");
document.write("<p>· Año de publicación = " + anyLibro + "<br></p>");
document.write("<p>· Número de Páginas = " + numPaginas + "<br></p>");
document.write("<p>· ¿Tiene película? = " + (tienePelicula ? "SI" : "NO") + "<br><br></p>");

//Cambiar valores y volverlos a mostrar por pantalla
tituloLibro = "Los pilares de la tierra";
autorLibro = "Ken Follett";
generoLibro = "Novela histórica";
anyLibro = 1989;
numPaginas = 1068;
tienePelicula = true;

document.write("<p>2. Informacion sobre el libro: <b>" + tituloLibro + "</b><br></p>");
document.write("<p>· Autor = " + autorLibro + "<br></p>");
document.write("<p>· Género = " + generoLibro + "<br></p>");
document.write("<p>· Año de publicación = " + anyLibro + "<br></p>");
document.write("<p>· Número de Páginas = " + numPaginas + "<br></p>");
document.write("<p>· ¿Tiene película? = " + (tienePelicula ? "SI" : "NO") + "<br></p>");
document.write("<hr>");

/* Ejercicio 5: Declara variables para guardar la siguiente información sobre un deporte. 
   Dale los valores de tu deporte favorito y muéstrala en tu página. 
   A continuación cambia los valores de las variables para mostrar del deporte Natación.
   · Nombre del deporte
   · Lugar de origen
   · Popularidad (en una escala del 1 al 10)
   · Equipamiento necesario
   · ¿Es un deporte de equipo? (verdadero o falso)
   · ¿Se practica en exteriores? (verdadero o falso)
*/
document.write("<h4 id = \"ejercicio5\">EJERCICIO 5: ASIGNAR VALORES A VARIABLES CON DATOS DE DEPORTES Y CAMBIARSELOS <a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h4>");
let nombreDeporte, lugarDeporte, popularidadDeporte, equipamientoDeporte, esDeporteEquipo, esDeporteExterior;
nombreDeporte = "Voleibol";
lugarDeporte = "Estados Unidos";
popularidadDeporte = 8;
equipamientoDeporte = "Red y pelota";
esDeporteEquipo = true;
esDeporteExterior = true;

document.write("<p>1. Informacion sobre el deporte: <b>" + nombreDeporte + "</b><br></p>");
document.write("<p>· Lugar de origen = " + lugarDeporte + "<br></p>");
document.write("<p>· Popularidad = " + popularidadDeporte + "<br></p>");
document.write("<p>· Equipamiento necesario = " + equipamientoDeporte + "<br></p>");
document.write("<p>· ¿Es un deporte de equipo? = " + esDeporteEquipo + "<br></p>");
document.write("<p>· ¿Se práctica en exteriores? = " + (esDeporteExterior ? "SI" : "NO") + "<br><br></p>");

//Cambiar valores y volverlos a mostrar por pantalla
nombreDeporte = "Natación";
lugarDeporte = "Gran Bretaña";
popularidadDeporte = 9;
equipamientoDeporte = "Bañador, gorro y gafas";
esDeporteEquipo = true;
esDeporteExterior = true;

document.write("<p>2. Informacion sobre el deporte: <b>" + nombreDeporte + "</b><br></p>");
document.write("<p>· Lugar de origen = " + lugarDeporte + "<br></p>");
document.write("<p>· Popularidad = " + popularidadDeporte + "<br></p>");
document.write("<p>· Equipamiento necesario = " + equipamientoDeporte + "<br></p>");
document.write("<p>· ¿Es un deporte de equipo? = " + esDeporteEquipo + "<br></p>");
document.write("<p>· ¿Se práctica en exteriores? = " + (esDeporteExterior ? "SI" : "NO") + "<br></p>");
document.write("<hr>");

/*Ejercicio 6: Declara variables para guardar la siguiente información sobre viajes. 
  Asigna la información de tu destino de viaje favorito y muéstrala en tu página. 
  A continuación cambia los valores de las variables para mostrar sobre el destino Málaga. 
  · Nombre del destino
  · País
  · Clima predominante
  · Población
  · Principales atracciones turísticas
  · ¿Es un destino costero? (verdadero o falso)
  · ¿Es un destino urbano? (verdadero o falso)*/
document.write("<h4 id = \"ejercicio6\">EJERCICIO 6: ASIGNAR VALORES A VARIABLES CON DATOS DE VIAJES Y CAMBIARSELOS <a href = \"#indice\" style=\"text-decoration: none;\">&#11014;</a></h4>");
let nombreDestino, paisDestino, climaDestino, poblacionDestino, atraccionesDestino, esDestinoCostero, esDestinoUrbano;
nombreDestino = "Isla de Skye"
paisDestino = "Escocia";
climaDestino = "Templado y muy variable";
poblacionDestino = "Portree";
atraccionesDestino = "Castillo de Eilean Donan, Fairy Pools, Cuillin Hills, Portree";
esDestinoCostero = true;
esDestinoUrbano = false;
  
document.write("<p>1. Informacion sobre el destino: <b>" + nombreDestino + "</b><br></p>");
document.write("<p>· País destino = " + paisDestino + "<br></p>");
document.write("<p>· Clima predominante = " + climaDestino + "<br></p>");
document.write("<p>· Población = " + poblacionDestino + "<br></p>");
document.write("<p>· ¿Es un destino costero? = " + (esDestinoCostero ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Es un destino urbano? = " + (esDestinoUrbano ? "SI" : "NO") + "<br><br></p>");

  //Cambiar valores y volverlos a mostrar por pantalla
nombreDestino = "Costa de Málaga"
paisDestino = "España";
climaDestino = "Mediterráneo";
poblacionDestino = "Málaga";
atraccionesDestino = "La Alcazaba, Calle Larios, Museo Picasso, Castillo Gibralfaro, Catedral de Málaga";
esDestinoCostero = true;
esDestinoUrbano = true;
  
document.write("<p>1. Informacion sobre el destino: <b>" + nombreDestino + "</b><br></p>");
document.write("<p>· País destino = " + paisDestino + "<br></p>");
document.write("<p>· Clima predominante = " + climaDestino + "<br></p>");
document.write("<p>· Población = " + poblacionDestino + "<br></p>");
document.write("<p>· ¿Es un destino costero? = " + (esDestinoCostero ? "SI" : "NO") + "<br></p>");
document.write("<p>· ¿Es un destino urbano? = " + (esDestinoUrbano ? "SI" : "NO") + "<br><br></p>");