let mascota = {
    nombre: "Nevado",
    tipo: "Perro",
    edad: 12,
    ciudadesDondeHaVivido: ["Malaga", "Sevilla", "Madrid"],
};

//Lista de mascotas
let mascotas = [];

//imprimir
function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//Creamos un objeto mascota
function mostrarMascota() {
    let mensaje =
        "El nombre de la mascota es " +
        mascota.nombre +
        " es un " +
        mascota.tipo +
        " su edad es " +
        mascota.edad +
        " y ha vivido en " +
        mascota.ciudadesDondeHaVivido +
        " y su propietario es " +
        mascota.propietario;
    imprimir(mensaje, "e1objetos");
}

//muestro la informacion elegida del objeto mascota
function mostrarPropiedadMascota() {
    let propiedadAmostrar = document.getElementById("e2infomascota").value;
    let mensaje = propiedadAmostrar + ": " + mascota[propiedadAmostrar];
    imprimir(mensaje, "e2objetos");
}

//cambiar elementos de un objeto. Cambiar nombre
function cambiarNombreMascota() {
    let nuevoNombre = document.getElementById("e3nombremascota").value;
    mascota.nombre = nuevoNombre;
    mostrarMascota();
}
//agregar nuevas propiedades a un objeto
function agregarPropietario() {
    let nombrePropietario = document.getElementById("e4nuevoPropietario").value;
    mascota["propietario"] = nombrePropietario;
    mostrarMascota();
}

//imprimir un array de objetos
function imprimirListaMascotas() {
    let mensaje = "";
    for (i = 0; i < mascotas.length; i++) {
        mensaje += "Mascota numero" + i;
        mensaje += " Nombre:" + mascotas[i].nombre;
        mensaje += "Edad: " + mascotas[i].edad;
        mensaje += "Tipo: " + mascotas[i].tipo;
    }
    imprimir(mensaje, "e5objetos");
}

//agregar una nueva mascota a la lista
function agregarNuevaMascota() {
    let miMascota = {};
    miMascota.nombre = document.getElementById("e5nombremascota").value;
    miMascota.edad = parseInt(document.getElementById("e5edadmascota").value);
    miMascota.tipo = document.getElementById("e5tipomascota").value;

    mascotas.push(miMascota);
    imprimirListaMascotas();
}

/* VIAJES --------------------------------------------------------------------------------------------------*/

// Objeto "viaje"
let viaje = [
    {
    destino: "Barcelona",
    precio: 1000,
    duracion: 10,
    ciudades: ["Vilanova", "Sant Pere de Ribes", "Vilafranca"],
    viajeros: [] //array de viajeros
}
];

let viajero = {
    nombre: "",
    tipo: "",
    descuento: ""
};

//Lista de viajes
let viajes = [viaje]; //Inicializamos la lista de viajes con un objeto de ejemplo

//imprimir datos viaje
function imprimirViaje(viajeId, parrafoResultadoId) {
    let mensaje = "";
    // Crear el mensaje con la información del viaje
    mensaje += "Destino: " + viajeId.destino + "\n";
    mensaje += "Precio: " + viajeId.precio + "\n";
    mensaje += "Duración: " + viajeId.duracion + "\n";
    mensaje += "Ciudades: " + viajeId.ciudades.join(", ") + "\n";
    mensaje += "Viajeros " +

    // Mostrar el mensaje
    imprimir(mensaje, parrafoResultadoId);
}


function imprimirViajeros(viaje, parrafoResultadoId) {
    let mensaje = "Listado de viajeros\n";
    mensaje += "Este viaje tiene " +  viaje.viajeros.length + " viajeros\n";
    for (i = 0; i < viaje.viajeros.length; i++) {
        mensaje += (i+1) + ". "
        mensaje += "Nombre: " + viaje.viajeros[i].nombre + " "; 
        mensaje += "Tipo: " + viaje.viajeros[i].tipo + " ";
        mensaje += "Descuento:" + viaje.viajeros[i].descuento + "\n";
    }
    imprimir(mensaje, parrafoResultadoId);
}

//imprimir un array de objetos
function imprimirListaViaje(parrafoResultadoId) {
    let mensaje = "";

    for (i = 0; i < viajes.length; i++) {
        mensaje += "Destino: " + viajes[i].destino;
        mensaje += "\nPrecio: " + viajes[i].precio;
        mensaje += "\nEdad: " + viajes[i].duracion;
        mensaje += "\nTipo: " + viajes[i].ciudades;
        mensaje += "\nDescripción " + viajes[i].descripcion;
    }

    imprimir(mensaje, parrafoResultadoId);
}

function actualizarListaViajes(selectDestinoId) {
    let select = document.getElementById(selectDestinoId);
    select.innerHTML = "";

    viajes.forEach((viaje, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = viaje.destino;
        select.add(option);
    });
}

function reiniciarFormulario(formularioID) {
    let form = document.getElementById(formularioID);
    form.reset();
}

/*1. EJERCICIO: Añadir un viaje
  Crea un nuevo objeto, llamado viaje, que contenga las siguientes propiedades: 
  destino, precio, duracion en dias y lista de ciudades a visitar. 
  Agrega un boton a tu pagina, llamado mostrar info de viaje, que muestre toda la informacion del viaje.
*/
function agregarViaje(parrafoResultadoId) {
    //Obtener los valores de los inputs
    let destino = document.getElementById("eje1DestinoViaje").value;
    let precio = parseFloat(document.getElementById("eje1PrecioViaje").value);
    let duracion = parseInt(document.getElementById("eje1DuracionViaje").value);
    let ciudades = document.getElementById("eje1CiudadesViaje").value.split(",");
    let mensaje = "";

    let nuevoViaje = {
        destino: destino,
        precio: precio,
        duracion: duracion,
        ciudades: ciudades,
        viajeros: []
    };
   
    //Agregar el nuevo viaje a la lista de viajes
    viajes.push(nuevoViaje);
    actualizarListaViajes("e2SeleccionaViaje");
    actualizarListaViajes("e4SeleccionaViaje");

    // Mostrar el mensaje
    imprimirViaje(nuevoViaje, parrafoResultadoId);

    reiniciarFormulario("eje1ObjetosForm");
}

/* EJERCICIO 2: Modificar viaje
   Agrega a un formulario para modificar el viaje anterior. 
   Para ello agrega un select donde el usuario pueda elegir la propiedad a modificar 
   destino, precio, duracion, lista de ciudades) y un campo donde pueda introducir 
   el nuevo valor. Agrega un boton modificar viaje, que actualice el objeto anterior con la 
   nueva informacion y lo muestre por pantalla.
*/
function cargarDatosViaje(selectViajeId) {
    let destinoSeleccionado = document.getElementById(selectViajeId);
    let index = destinoSeleccionado.value;

    if (index !== "") {
        let viajeSeleccionado = viajes[index];

        document.getElementById("eje2PrecioViaje").value = viajeSeleccionado.precio;
        document.getElementById("eje2DuracionViaje").value = viajeSeleccionado.duracion;
        document.getElementById("eje2CiudadesViaje").value = viajeSeleccionado.ciudades.join(", ");
    } else {
        // Limpiar el formulario si no se ha seleccionado un destino
        document.getElementById("eje2PrecioViaje").value = "";
        document.getElementById("eje2DuracionViaje").value = "";
        document.getElementById("eje2CiudadesViaje").value = "";
    }
}

// Actualizar los datos del viaje
function modificarViaje(selectViajeId, parrafoResultadoId) {
    let destinoSeleccionado = document.getElementById(selectViajeId);
    let index = destinoSeleccionado.value;

    if (index != "") {
        //Actualizar varlores del destino seleccionado
        viajes[index].precio = parseFloat(document.getElementById("eje2PrecioViaje").value);
        viajes[index].duracion = parseInt(document.getElementById("eje2DuracionViaje").value);
        viajes[index].ciudades = document.getElementById("eje2CiudadesViaje").value.split(",");

        // Mostrar el mensaje
        imprimirViaje(viajes[index], parrafoResultadoId);

        reiniciarFormulario("eje2DatosForm");
    }
}

// Actualizar la lista de viajes inicialmente
//actualizarListaViajes("e2SeleccionaViaje");

/*EJERCICIO 3: Añadir descripción al viaje 
    Agrega un formulario en el que el usuario pueda introducir una descripcion del viaje. 
    Agrega un boton que al pulsarlo agrege la descripcion introducida al objeto viaje 
    y muestre la informacion del viaje actualizada.
*/
function agregarDescripcion(parrafoResultadoId) {
    let desripcionViaje = document.getElementById("eje3DescripcionViaje").value;

    viaje.descripcion = desripcionViaje;

    imprimirViaje(viaje, parrafoResultadoId);

}

/*EJERCICIO 4:
    Agrega un formulario para agregar viajeros del viaje, 
    puede agregar todos los que quiera a una lista. 
    Para ello crea un formulario en el que introduzca el nombre del viajero, 
    seleccione el tipo (adulto o niño), y seleccione los descuentos: estudiante, jubilado o ninguno. 
    Cuando el usuario pulse el boton agregar, 
    se mostrará la lista con toda la información de los viajeros agregados. 
*/
function agregarViajero(viajeId, parrafoResultadoId) {
    let viajeIndex = document.getElementById(viajeId).value;

    if (viajeIndex != "") {
    let nombreViajero = document.getElementById("eje4NombreViajero").value;
    let tipoViajero = document.getElementById("eje4TipoViajero").value;
    let descuentoViajero = document.getElementById("eje4DescuentoViajero").value;

    let nuevoViajero = {
        nombre: nombreViajero,
        tipo: tipoViajero,
        descuento: descuentoViajero
    };

    viajes[viajeIndex].viajeros.push(nuevoViajero);
    imprimirViajeros(viajes[viajeIndex], parrafoResultadoId);
}
}
/*EJERCICIO 5: Agrega al formulario un boton para mostrar el precio que debe pagar cada viajero por el viaje. El precio del viaje para los niños es un 25% más barato. Para estudiante se aplica un descuento del 5%, para jubilados un descuento del 10%. El precio a pagar del viaje se debe agregar como una propiedad mas de cada viajero.
Agrega un boton al formulario para mostrar el precio total del viaje. Este precio será la suma del precio pagado por cada viajero.
*/
