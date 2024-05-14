//EJERCICIOS DE DOM Y CADENAS
//1. Crea una variable con la frase Hola que tal, bienvenida a QA, y muestrala junto con:
//· Su longitud
//· La posición de la palabra QA
//· La primera letra de la frase.
//· La última letra de la frase.
//· Muestra la frase completa en mayúscula
//· Muestra la frase completa en minúscula
//· Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre
//· Crea una nueva palabra, con la misma frase quitando la palabra que tal.

//Crea una variable con la frase Hola que tal, bienvenida a QA
let fraseBienvenida = "Hola que tal, bienvenida a QA";

//· Su longitud
let fraseBienvenidaLongitud = fraseBienvenida.length;

//· La posición de la palabra QA
let fraseBienvenidaPosicionQA = fraseBienvenida.indexOf("QA");

//· La primera letra de la frase.
let fraseBienvenidaPrimeraLetra = fraseBienvenida[0];

//· La última letra de la frase.
let fraseBienvenidaUltimaLetra = fraseBienvenida[fraseBienvenidaLongitud - 1];

//· Muestra la frase completa en mayúscula
let fraseBienvenidaMayusculas = fraseBienvenida.toUpperCase();

//· Muestra la frase completa en minúscula
let fraseBienvenidaMinusculas = fraseBienvenida.toLowerCase();

//· Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre
let nombreEstudianteBienvenida = "Alice";
let fraseBienvenidaNombre = fraseBienvenida.replace("Hola", "Hola " + nombreEstudianteBienvenida);

//· Crea una nueva palabra, con la misma frase quitando la palabra que tal.
let fraseBienvenidaSinQueTal = fraseBienvenida.replace(" que tal","");

//Crear parrafos html para mostrar los resultados de cada operacion
let parrafo = document.getElementById("e1longitud");
parrafo.innerText = "La longitud de la frase " + fraseBienvenida + " es: " + fraseBienvenidaLongitud;

parrafo = document.getElementById("e1posicionQA");
parrafo.innerText = "La longitud de la frase " + fraseBienvenida + " es: " + fraseBienvenidaPosicionQA;

parrafo = document.getElementById("e1letraPrimera");
parrafo.innerText = "La longitud de la frase " + fraseBienvenida + " es: " + fraseBienvenidaPrimeraLetra;

parrafo = document.getElementById("e1letraUltima");
parrafo.innerText = "La longitud de la frase " + fraseBienvenida + " es: " + fraseBienvenidaUltimaLetra;

parrafo = document.getElementById("e1fraseMayuscula");
parrafo.innerText = "La longitud de la frase " + fraseBienvenida + " es: " + fraseBienvenidaMayusculas;

parrafo = document.getElementById("e1fraseMinuscula");
parrafo.innerText = "La longitud de la frase " + fraseBienvenida + " es: " + fraseBienvenidaMinusculas;

parrafo = document.getElementById("e1fraseNombre");
parrafo.innerText = "La longitud de la frase " + fraseBienvenida + " es: " + fraseBienvenidaNombre;

parrafo = document.getElementById("e1fraseSinQueTal");
parrafo.innerText = "OPCION1: La frase sin 'que tal' es: " + fraseBienvenidaSinQueTal;

//OPCION 2 PARA IMPRIMIR EL HTML
//IMPORTANTE, ESTE MODO VA A AGREGAR EL TEXTO SIEMPRE AL FINAL, EL ANTERIOR VA ESTARA DONDE TU ELIJAS
let divEjercicio1 = document.getElementById("contenidoEjercicios1");
let parrafoEjercicio1Cademas = document.createElement("p");
parrafoEjercicio1Cademas.innerText = "OPCION2: La frase sin 'que tal' es: " + fraseBienvenidaSinQueTal;
divEjercicio1.appendChild(parrafoEjercicio1Cademas);

//-----------------------------------------------------------------------------------------------------

//2.Crea una variable con una frase en la que te presentes y muestrala junto con:
//· Su longitud
//· La posición de tu nombre
//· La primera letra de la frase.
//· La última letra de la frase.
//· Muestra la frase completa en mayúscula
//· Muestra la frase completa en minúscula
//· Muestra la frase cambiando tu nombre por otro que elijas.
//· Crea una nueva palabra, con la misma frase quitando tu nombre.
let frasePresentacion = "Mi nombre es Alicia y estoy aprendiendo Javascript";
let frasePresentacionLongitud = frasePresentacion.length;
let frasePresentacionPosicionNombre = frasePresentacion.indexOf("Alicia");
let frasePresentacionPrimeraLetra = frasePresentacion[0];
let frasePresentacionUltimaLetra = frasePresentacion[frasePresentacionLongitud - 1];
let frasePresentacionMayusculas = frasePresentacion.toUpperCase();
let frasePresentacionMinusculas = frasePresentacion.toLowerCase();
let frasePresentacionNuevoNombre = frasePresentacion.replace("Alicia","Alice");
let frasePresentacionSinNombre = frasePresentacion.replace("Alicia ","");

//Imprimir todas las variables por pantalla
let divEjercicio2 = document.getElementById("contenidoEjercicios2");

//· Su longitud
let parrafoEjercicio2Longitud = document.createElement("p");
parrafoEjercicio2Longitud.innerText = "La longitud de la frase '" + frasePresentacion + "' es: " + frasePresentacionLongitud;
divEjercicio2.appendChild(parrafoEjercicio2Longitud);

//· La posición de tu nombre
let parrafoEjercicio2Posicion = document.createElement("p");
parrafoEjercicio2Posicion.innerText = "La posicion del nombre es: " + frasePresentacionPosicionNombre;
divEjercicio2.appendChild(parrafoEjercicio2Posicion);

//· La primera letra de la frase
let parrafoEjercicio2PrimeraLetra = document.createElement("p");
parrafoEjercicio2PrimeraLetra.innerText = "La primera letra de la frase es: " + frasePresentacionPrimeraLetra;
divEjercicio2.appendChild(parrafoEjercicio2PrimeraLetra);

//· La última letra de la frase
let parrafoEjercicio2ULtimaLetra = document.createElement("p");
parrafoEjercicio2ULtimaLetra.innerText = "La ultima letra de la frase es: " + frasePresentacionUltimaLetra;
divEjercicio2.appendChild(parrafoEjercicio2ULtimaLetra);

//· Muestra la frase completa en mayúscula
let parrafoEjercicio2Mayusculas = document.createElement("p");
parrafoEjercicio2Mayusculas.innerText = "La frase de presentación en mayúsculas es: " + frasePresentacionMayusculas;
divEjercicio2.appendChild(parrafoEjercicio2Mayusculas);

//· Muestra la frase completa en minúscula
let parrafoEjercicio2Minusculas = document.createElement("p");
parrafoEjercicio2Minusculas.innerText = "La frase de presentación en minúsculas es: " + frasePresentacionMinusculas;
divEjercicio2.appendChild(parrafoEjercicio2Minusculas);

//· Muestra la frase cambiando tu nombre por otro que elijas
let parrafoEjercicio2NuevoNombre = document.createElement("p");
parrafoEjercicio2NuevoNombre.innerText = "La frase cambiando el nombre es: " + frasePresentacionNuevoNombre;
divEjercicio2.appendChild(parrafoEjercicio2NuevoNombre);

//· Crea una nueva palabra, con la misma frase quitando tu nombre
let parrafoEjercicio2SinNombre = document.createElement("p");
parrafoEjercicio2SinNombre.innerText = "La frase quitando el nombre es: " + frasePresentacionSinNombre;
divEjercicio2.appendChild(parrafoEjercicio2SinNombre);

//-----------------------------------------------------------------------------------------------------

let divEjercicio3_4_5 = document.getElementById("contenidoEjercicios3_4_5");

//3. Crea una variable con tu nombre completo y muestralo por pantalla. 
//A continuación, quita los espacios de la variable y muestralo por pantalla.
let tituloEjercicio2NombreCompleto = document.createElement("h5");
tituloEjercicio2NombreCompleto.textContent = "EJERCICIO 3: Crea una variable con tu nombre completo y muestralo por pantalla. A continuación, quita los espacios de la variable y muestralo por pantalla.";
divEjercicio3_4_5.appendChild(tituloEjercicio2NombreCompleto);
//-------
let nombreCompletoCadenas = "Alicia Juste Gilabert";
let parrafoEjercicio2NombreCompleto = document.createElement("p");
parrafoEjercicio2NombreCompleto.textContent = "Mi nombre completo es: " + nombreCompletoCadenas;
divEjercicio3_4_5.appendChild(parrafoEjercicio2NombreCompleto);

let nombreCompletoSinEspacios = nombreCompletoCadenas.replaceAll(" ","");
let parrafoEjercicio2NombreCompletoSinEspacios = document.createElement("p");
parrafoEjercicio2NombreCompletoSinEspacios.textContent = "Mi nombre completo es: " + nombreCompletoSinEspacios;
divEjercicio3_4_5.appendChild(parrafoEjercicio2NombreCompletoSinEspacios);

//-----------------------------------------------------------------------------------------------------

//4. Crea una variable con una palabra en minuscula y muestralo por pantalla. 
//Cambia la primera letra a mayuscula y muestrala por pantalla.
let tituloEjercicio2PalabraMinusculas = document.createElement("h5");
tituloEjercicio2PalabraMinusculas.textContent = "EJERCICIO 4: Crea una variable con una palabra en minuscula y muestralo por pantalla. Cambia la primera letra a mayuscula y muestrala por pantalla.";
divEjercicio3_4_5.appendChild(tituloEjercicio2PalabraMinusculas);
//--------
let palabraEnMinusculas = "supercalifragilisticoexpialidoso";
let parrafoEjercicio2PalabraMinusculas = document.createElement("p");
parrafoEjercicio2PalabraMinusculas.textContent = "La palabra en minúsculas es: " + palabraEnMinusculas;
divEjercicio3_4_5.appendChild(parrafoEjercicio2PalabraMinusculas);

let parrafoEjercicio2PalabraMinusculas2 = document.createElement("p");
let palabraPrimeraEnMayusculas = palabraEnMinusculas.charAt(0).toUpperCase() + palabraEnMinusculas.slice(1);
parrafoEjercicio2PalabraMinusculas2.textContent = "La palabra con la primera letra en mayúsculas es: " + palabraPrimeraEnMayusculas
divEjercicio3_4_5.appendChild(parrafoEjercicio2PalabraMinusculas2);

//-----------------------------------------------------------------------------------------------------

//5. Crea una cadena con el texto Hola Mundo y muestralo por pantalla. 
//Reemplaza la palabra Hola por Adios y muestralo por pantalla
let tituloEjercicio2HolaMundo = document.createElement("h5");
tituloEjercicio2HolaMundo.textContent = "EJERCICIO 5: Crea una cadena con el texto Hola Mundo y muestralo por pantalla. Reemplaza la palabra Hola por Adios y muestralo por pantalla";
divEjercicio3_4_5.appendChild(tituloEjercicio2HolaMundo);
//--------
let textoHolaMundo = "Hola Mundo";
let parrafoEjercicio2HolaMundo = document.createElement("p");
parrafoEjercicio2HolaMundo.textContent = "El texto inicial es: " + textoHolaMundo;
divEjercicio3_4_5.appendChild(parrafoEjercicio2HolaMundo);

let textoAdiosMundo = textoHolaMundo.replace("Hola","Adios");
let parrafoEjercicio2AdiosMundo = document.createElement("p");
parrafoEjercicio2AdiosMundo.textContent = ("El texto final es: " + textoAdiosMundo);
divEjercicio3_4_5.appendChild(parrafoEjercicio2AdiosMundo);
