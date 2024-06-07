//VARIABLES GLOBALES: ESTAN FUERA DE LA FUNCION, Y PUEDE USARSE DENTRO DE CUALQUIER FUNCION QUE ESTE EN EL MISMO FICHERO JS
let listaCompra = ["tomates","huevos","queso", "fresas", "zanahorias","atun"];


function imprimir(mensaje,id){
    document.getElementById(id).innerText = mensaje;
}


//EJEMPLO 1: CREAR UN ARRAY
//El array puede tener tanto texto, como numeros. Cada elemento va separado por una coma. El texto debe estar entre comillas, y los numeros sin comillas.
function mostrarLista() {
    mensaje = "La lista de la compra es " + listaCompra;
    imprimir(mensaje,"e1listaresultado");
}

//EJEMPLO 2: MOSTRAR INFORMACION DE LA LISTA
function mostrarInfoLista () {
    let primerProducto = listaCompra[0]; //MOSTRAR PRIMER ELMENTO DE LA LISTA
    let longitudLista = listaCompra.length; //MOSTRAR SU LONGITUD
    let ultimoProducto = listaCompra[longitudLista - 1]; //MOSTRAR EL ULTIMO ELEMENTO
    let mensaje = " El primer elemento de la lista es " + primerProducto + " el ultimo elemento de la lista es " + ultimoProducto + " la longitud de la lista es " + longitudLista;
    imprimir(mensaje,"e2listainfo");
}

//EJEMPLO 3: CAMBIAR VALOR DE UN ELEMENTO DE LA LISTA
//Se modifica el elemento de la posicion que le indiques. Recuerda que la posicion de la lista empieza en 0 y no en 1.
function modificarLista(){
    let posicionAModificar = parseInt(document.getElementById("e3posicion").value);
    let nuevoValor = document.getElementById("e3nuevovalor").value;
    listaCompra[posicionAModificar-1] = nuevoValor;
    mostrarLista();
}

//EJEMPLO 4: AGREGAR ELEMENTO A UNA LISTA. SE AGREGA SIEMPRE AL FINAL DE LISTA
//Se agrega con push y se agrega al final de la lista. 
//Si quieres agregarlo al principio de la lista usa unshift en lugar de push
function agregar () {
    let nuevoProducto = document.getElementById("e4elementonuevolista").value;
    listaCompra.push(nuevoProducto);
    mostrarLista();
}

//EJEMPLO 5: ELIMINAR ELEMENTO DE LA LISTA. SE ELIMINA EL ULTIMO ELEMENTO.
//pop elimina el ultimo elemento.
//si quieres eliminar el primero puedes usar shift en lugar de pop
function eliminarUltimoElemento () {
    let elementoEliminado = listaCompra.pop();
    let mensaje = "El elemento eliminado es " + elementoEliminado;
    imprimir(mensaje,"e5elementoEliminado");
    mostrarLista();

}

//EJEMPLO 6: ELIMINAR UN ELEMENTO DE LA LISTA EN UNA POSICION CONCRETA
//slice(posicion,numero de elementos a eliminar) recordar que la posicion empieza en 0.
function eliminarPosicionElegida(){
    let posicion = parseInt(document.getElementById("e6posicion").value);
    listaCompra.splice(posicion-1,1);
    mostrarLista();
}

//EJEMPLO 7: ORDENAR LA LISTA DE FORMA ALFABETICA.
//Importante que todas esten en mayusculas o minusculas para que el orden sea correcto porque usa el orden assci y no el alfabetico.
//.sort() de la a a la z, y .sort().resverse() de la z a la a
//arr.sort((a, b) => a - b); Ordenar de forma ascendente un array de numeros. Descendente arr.sort((a, b) => a - b).reverse
function ordenarLista(){
    listaCompra.sort().reverse();
    mostrarLista();
}

//EJEMPLO 8: OBTENER LA POSICION DE UN ELEMENTO DE LA LISTA
//DA LA POSICION INDEXOF de un elemento de la lista, empezando por 0. Si no lo encuentra devuelve la posicion -1
function verPosicionElemento() {
    let elemento = document.getElementById("e8elementoabuscar").value;
    let posicionElemento = listaCompra.indexOf(elemento);
    let mensaje = ""
    if(posicionElemento === -1){
        mensaje = "El elemento no se encuentra en la lista";
       

    }else {
        mensaje = "El elemento " + elemento + " esta en la posicion con indice " + posicionElemento;
    }
    imprimir(mensaje,"e8resultado");

}

let listaAlumnos = ["Sandra", "Jose", "Rebeca", "Sonia", "Camila", "Rocio", "Alicia", "Reyes", "Mónica", "Cristina"];
// EJERCICIOS
/*1. Agrega un boton mostrar alumnos, que al pulsarlo muestre una lista con los nombres de 10 alumnos. */
function mostrarListaAlumnos(listado, idResultado) {
    let mensaje = "\nLos alumnos son: " + listado;
    imprimir(mensaje, idResultado);
}

/*2. Muestra el nombre del alumno de la posicion que elijas. Para ello:
    Agrega un campo para elegir el alumno que quieren mostrar, no puede estar vacio y debe ser entre 1 y 10.
    Agrega un boton mostrar alumno, que muestre el nombre del alumno elegido. */
function alumnoSeleccionado() {
    let posicionAlumno = parseInt(document.getElementById("eje2PosicionAlumno").value);
    let mensaje = "";

    mensaje = "El alumno en la posición " + posicionAlumno + " es " + listaAlumnos[posicionAlumno-1];
    imprimir(mensaje, "eje2Resultado");
}           

/*3. Agrega un boton mostrar alumnos ordenados, que muestre los alumnos ordenados por nombre. */
function alumnosOrdenados(){
    let listaOrdenada = listaAlumnos.slice();
    listaOrdenada.sort();
    mostrarListaAlumnos(listaOrdenada,"eje3Resultado");
}

/*4. Agrega una nueva opcion para agregar un nuevo alumno. Para ello:
    - Agrega un campo para introducir el nombre del alumno. No puede estar vacio y debe tener maximo 30 caracteres.
    - Agrega un boton agregar, que al pulsarlo agrege al nuevo alumno a la lista y muestre la lista de alumnos actualizada. 
*/
function agregarAlumno() {
    let nuevoAlumno = document.getElementById("eje4NuevoAlumno").value;
    let listaNueva = listaAlumnos.slice();
    listaNueva.push(nuevoAlumno);
    mostrarListaAlumnos(listaNueva,"eje4Resultado");
}      

/*5. Agrega una opcion para eliminar un alumno de una posicion elegida.
    - Agrega un campo para introducir la posicion del alumno a eliminar. Debe ser un numero entre 1 y 500.
    - Agrega un boton eliminar, que al pulsarlo, elimine el alumno de la posicion introducida y muestre la
      lista de alumnos actualizada. Agrega una comprobacion para mostrar un mensaje de error si la posicion
      introducida es mayor a la longitud total de la lista. 
*/
function eliminarAlumnoPosicion(){
    let posicionAlumno = parseInt(document.getElementById("eje5PosicionAlumno").value);
    let longitudLista = listaAlumnos.length;
    let mensaje = "";

    if (posicionAlumno > longitudLista) {
        imprimir(mensaje, "eje5Resultado");
    }
    else {
        let listaModificada = listaAlumnos.slice();
        listaModificada[posicionAlumno-1].pop;
        mostarListaAlumnos(listaModificada, "eje5Resultado");
    }


}