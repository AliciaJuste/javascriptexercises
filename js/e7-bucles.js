function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function mostrarLista() {
    mensaje = "La lista de la compra es " + listaCompra;
    imprimir(mensaje,"e1listaresultado");
}

//EJEMPLO 1: FOR. Mostrar el mismo mensaje 100 veces
//1. Iniciamos el contador a 0. 2. Definimos el numero de repeticiones. 3. Incrementamos con i++ para que el contandor vaya avanzando
function mostrarFrase() {
    let mensaje = "Hello world ";
    let mensajeFinal = "";
    let repeticiones = 100;

    for (let i = 0; i < repeticiones; i++) {
        //+= significa que se agrega texto al final, no se sustituye como el =
        mensajeFinal += i + mensaje;
    }

    imprimir(mensajeFinal, "e1solucion");

}

//EJEMPLO 2: FOR
//Mostrar la tabla de multiplicar
function mostrarTabla() {
    let numero = parseInt(document.getElementById("e2tablamultiplicar").value); //cogemos el numero introducido en el formulario
    let repeticiones = 11; //repetimos el bucle de 0 a 10
    let mensaje = "";
    for (let i = 0; i < repeticiones; i++) {
        let resultado = numero * i; //multiplicamos el numero introducido por el valor de i, que sera 0,1,2,3....
        mensaje += "Tabla de multiplicar" + numero + "x" + i + "=" + resultado + "\n"; //agregamos el resultado al mensaje
    }
    imprimir(mensaje, "e2solucion"); //lo mostramos en el html
}

//EJERCICIOS ***********************************************************
/*1.Ejercicio 1: Sumar números
    Muestra la suma de todos los numeros desde el 0 hasta el introducido por el usuario.
    a) Agrega un campo para introducir un numero mayor que 0.
    b) Agrega un boton que al pulsarlo muestre la suma de todos los numeros desde el 1 
    hasta el numero indicado
*/
function sumarNumeros(numeroFinalId, parrafoResultadoId) {
    let numeroFinal = parseInt(document.getElementById(numeroFinalId).value);
    let sumaTotal = 0;
    let mensaje = "";

    if (numeroFinal > 0) {
        for (i = 1; i <= numeroFinal; i++) {
            sumaTotal += i;
        }
        mensaje = "La suma total desde del 1 al " + numeroFinal + " es " + sumaTotal;
    }
    else {
        mensaje = "Suma no realizada porque el número introducido no es válido";
    }
    imprimir(mensaje, parrafoResultadoId);

}

/*Ejercicio 2: Montrar N veces una palabra</h4>
            <h6>2. Muestra una palabra el numero de veces que indique el usuario.
                a. Agrega un campo para introducir una palabra. Este campo no puede estar vacio.
                A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra.
                Debe ser mayor a 0.
                b. Agrega un boton que al pulsarlo muestre la palabra en mayusculas el numero de veces indicado por el
                usuario.
*/
function mostrarPalabraNVeces(palabraRepetirId, repeticionesId, parrafoResultadoId) {
    let palabraMayusculas = document.getElementById(palabraRepetirId).value.toUpperCase();
    let repeticiones = parseInt(document.getElementById(repeticionesId).value);
    let mensaje = "";

    if (repeticiones > 0) {
        for (i = 1; i <= repeticiones; i++) {
            mensaje += palabraMayusculas + " ";
        }
    } else {
        mensaje = "Número de repeticiones erróneo";
    }

    imprimir(mensaje, parrafoResultadoId);

}

/*Ejercicio 3: Muestra FLOR N Veces
    Muestra AMAPOLA o MARGARITA el numero de veces que indique el usuario, segun la palabra introducida:
    a. Agrega un campo para introducir una palabra. Este campo no puede estar vacio.
    A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra.
    Debe ser mayor a 0.
    b. Agrega un boton que al pulsarlo muestre el numero de veces indicado, la palabra AMAPOLA,
    si la palabra introducida por el usuario empieza por VOCAL,
    que muestre la palabra MARGARITA en cualquier otro caso.
*/
function mostrarFloresNVeces(palabraId, repeticionesId, parrafoResultadoId) {
    let palabra = document.getElementById(palabraId).value;
    let repeticiones = parseInt(document.getElementById(repeticionesId).value);
    let primerCaracter = palabra.charAt(0).toLowerCase();
    let vocales = ["a", "e", "i", "o", "u"];
    let palabraRepetir = "";
    let mensaje = "";
    const flor1 = "AMAPOLA";
    const flor2 = "MARGARITA";

    if (repeticiones > 0) {
        if (vocales.includes(primerCaracter)) {
            palabraRepetir = flor1;
        } else {
            palabraRepetir = flor2;
        }
        for (i = 1; i <= repeticiones; i++) {
            mensaje += palabraRepetir + " ";
        }
    } else {
        mensaje = "Número de repeticiones erróneo";
    }

    imprimir(mensaje, parrafoResultadoId);

}

/*Ejercicio 4: Listado de números pares</h4>
  Muestra todos los numeros pares desde el 0 hasta el indicado por el usuario.
  a. Agrega un campo para introducir un numero. Este campo no puede estar vacio.
  b. Agrega un boton que al pulsarlo muestre todos los numeros pares, desde el 0 hasta el indicado. 
  Nota: Un numero es par si el resto de la division entre 2 es 0. 
  Para saber el resto de una division, puedes usar el operador %. 
*/
function mostarListadoPares(numeroFinalId, parrafoResultadoId) {
    let numeroFinal = parseInt(document.getElementById(numeroFinalId).value);
    let mensaje = "El listado de numeros pares desde el 0 hasta el " + numeroFinal + " es: \n";

    for (i = 0; i <= numeroFinal; i++) {
        if (i % 2 === 0) { //numero par
            mensaje += i + " ";
        }
    }
    imprimir(mensaje, parrafoResultadoId);
}

/*Ejercicio 5: Listado de nombres en mayúsculas</h4>
  Muestra todos los nombres de una lista en mayusculas.
  a. Agrega un nuevo campo para agregar nombres a una lista. 
     Debe ser obligatorio y tener minimo 3 caracteres.
  b. Agrega un boton que al pulsarlo agrege el nombre introducido en el formulario a una lista
     y la muestre por pantalla.
  c. Agrega un boton que al pulsarlo muestre la lista completa en mayusculas.
  d. Agrega un nuevo boton que al pulsarlo muestre los nombres de la lista que empiecen por la letra A.
*/
let listadoNombres =[];

function agregarNombreListado(nombreId, parrafoResultadoId) {
    let nombre = document.getElementById(nombreId).value;

    if (nombre != "") {
        listadoNombres.push(nombre);
        imprimir(listadoNombres, parrafoResultadoId);
        document.getElementById(nombreId).value = "";
    }
}

function mostrarListadoEnMayusculas(parrafoResultadoId) {
    let mensaje ="Listado de nombres en Mayusculas:\n";

    for (i = 0; i < listadoNombres.length; i++) {
        mensaje += listadoNombres[i].toUpperCase();
        if ( i < listadoNombres.length-1) {
            mensaje += ", ";
        }
        
    }
    imprimir(mensaje, parrafoResultadoId);
}

function mostrarListadoLetraA(parrafoResultadoId) {
    let mensaje = "Listado de nombres que empiezan por la letra A:\n";
    for (i = 0; i < listadoNombres.length; i++) {
        if (listadoNombres[i][0] === "a" || listadoNombres[i][0] === "A") {
            mensaje += listadoNombres[i];
            if ( i < listadoNombres.length-1) {
                mensaje += ", ";
            }
        }
    }
    imprimir(mensaje, parrafoResultadoId);

}

/*Ejercicio 6: Sumar todos los números</h4>
    Crea un programa para sumar todos los numeros de una lista.
    a. Agrega un nuevo campo para agregar notas a una lista. Este campo debe ser numerico, 
    y acepta numeros del 1 al 10 con decimales.
    b. Agrega un boton agregar, que al pulsarlo agrege la nota introducida a la lista y la muestre.
    c. Agrega un boton que al pulsarlo muestre la suma total de todos los numeros de la lista, 
       o 0 si esta la lista vacia.
    d. Agrega un boton que muestre la nota media de la lista.
    e. Agrega un boton para indicar si el usuario ha aprobado o no. 
       El usuario esta aprobado si su nota media es igual o mayor a 5.
*/
let listaNotas = [];

function agregarNotaLista(notaId, parrafoResultadoId) {
    let nota = parseFloat(document.getElementById(notaId).value);

    if (nota != 0) {
        listaNotas.push(nota);
        imprimir(listaNotas, parrafoResultadoId);
        document.getElementById(notaId).value = "";
    }
}

function sumaTotalLista(parrafoResultadoId) {
    let mensaje = "";
    let sumaNotasTotal = 0;

    for (i = 0; i < listaNotas.length; i++) {
        sumaNotasTotal += listaNotas[i];
    }
    sumaNotasTotal = parseFloat(sumaNotasTotal.toFixed(2));

    mensaje = "La suma total de las notas es: " + sumaNotasTotal;
    imprimir(mensaje, parrafoResultadoId);

    return sumaNotasTotal;
}

function notaMediaLista(parrafoResultadoId) {
    let mensaje = "";
    let notaMedia = 0;

    notaMedia = sumaTotalLista(parrafoResultadoId) / listaNotas.length;
    notaMedia = parseFloat(notaMedia.toFixed(2));
    mensaje = "La nota media es: " + notaMedia;

    imprimir(mensaje, parrafoResultadoId);

    return notaMedia;
}

function hasAprobado (parrafoResultadoId) {
    let mensaje = "";
    let notaMedia = 0;

    notaMedia = notaMediaLista(parrafoResultadoId);

    if (notaMedia >= 5) {
        mensaje = "Felicidades, has aprobado con un " + notaMedia;
    } else {
        mensaje = "Lo siento, has suspendido con un " + notaMedia;
    }

    imprimir(mensaje, parrafoResultadoId);
}