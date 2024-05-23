//EJERCICIOS DE FORMULARIOS HTML5 Y BOOTSTRAP
//IMPRIMIR
function imprimir(mensaje,id) {
  let parrafo = document.getElementById(id);
  parrafo.innerText = mensaje;
}
/*1. Crea un formulario para introducir nombre, ciudad y fecha de nacimiento. 
- Agrega validación con Boostrap. Todos los campos son obligatorios. 
  El nombre y la ciudad debe tener entre 3 y 30 caracteres. 
  La fecha de nacimiento tiene que estar entre 1900 y 2024. 
- Agrega un boton que al hacer click llame a una función que muestre un mensaje de bienvenida con los datos introducidos.*/
function mensajeBienvenida(idNombre, idCiudad, idFecha) {
    let saludo = "Hola";
    let divContenido = document.getElementById("ejercicio1Formularios");
    let parrafo = saludo + " " + document.getElementById(idNombre).value + " de " + document.getElementById(idCiudad).value + " nacido/a en " + document.getElementById(idFecha).valu
    divContenido.appendChild(parrafo);
}
/*2. Crea un formulario para introducir dos numeros. 
- Agrega validación con Boostrap. Todos los campos son obligatorios. Solo admite numeros de cualquier tipo.
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con el resultado de la suma, 
  la resta, la multiplicación y la división de esos dos números.
*/
function hacerOperaciones(idNumero1, idNumero2) {
  let numero1 = parseFloat(document.getElementById(idNumero1).value);
  let numero2 = parseFloat(document.getElementById(idNumero2).value);
  let suma = numero1 + numero2;
  let resta = numero1 - numero2;
  let multiplicacion = numero1 * numero2;
  let division = numero1 / numero2;

  let divContenido = document.getElementById("ejercicio2Formularios");
  let titulo = document.createElement("h6");
  titulo.textContent = "RESULTADO";
  divContenido.appendChild(titulo);

  let parrafo0 = document.createElement("p");
  parrafo0.textContent = "Dados los números " + numero1 + " y " + numero2 + " :";
  divContenido.appendChild(parrafo0);

  let parrafo1 = document.createElement("p");
  parrafo1.textContent = "La suma de estos números es: " + suma;
  divContenido.appendChild(parrafo1);

  let parrafo2 = document.createElement("p");
  parrafo2.textContent = "La resta de estos números es: " + resta;
  divContenido.appendChild(parrafo2);

  let parrafo3 = document.createElement("p");
  parrafo3.textContent = "La multiplicación de estos números es: " + multiplicacion;
  divContenido.appendChild(parrafo3);

  let parrafo4 = document.createElement("p");
  parrafo4.textContent = "La división de estos números es: " + division;
  divContenido.appendChild(parrafo4);
}

/*3. Crea un formulario para convertir monedas. El usuario debe introducir una catidad en euros. 
- Agrega validación con boostrap, el campo es obligatorio, debe ser un número positivo. 
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con la cantidad en dólares y en libras.*/
function cambioEuros(idImporteEuros) {
  let importeEuros = parseFloat(document.getElementById(idImporteEuros).value);
  let cambioDolares =  1.0789;
  let cambioLibras = 0.8591;
  let cambioEurosDolares = importeEuros * cambioDolares;
  let cambioEurosLibras = importeEuros * cambioLibras;
  
  let mensaje = "RESULTADO\nEl cambio a dólares es: " + cambioEurosDolares + "\nEl cambio a libras es: " + cambioEurosLibras;
  imprimir(mensaje,"eje3FormulariosResultado");

}

/*4. Crea un formulario para calcular precio total de un producto. 
- El usuario debe introducir el nombre del producto, el precio y la cantidad. 
  Agrega validación Boostrap. Todos los campos son obligatorios. 
  El nombre debe tener entre 3 y 20 caracteres. 
  El precio no puede ser negativo. 
  La cantidad no puede ser negativa. 
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con el nombre del producto, 
  su cantidad, su precio y el precio total.*/
  function datosProducto(idNombreProducto, idPrecioProducto, idCantidadProducto) {
    let nombreProducto = document.getElementById(idNombreProducto).value;
    let precioProducto = document.getElementById(idPrecioProducto).value;
    let cantidadProducto = document.getElementById(idCantidadProducto).value;
    
    let mensaje ="Nombre del producto: " + nombreProducto + "\nPrecio: " + precioProducto + "\nCantidad: " + cantidadProducto;
    imprimir(mensaje,"eje4FormulariosResultado");
  }

/*5. Crea un formulario para elegir la talla y el color de una camiseta. 
- El usuario debe elegir de un select el color entre 5 colores posibles, y la talla de la XS a la XXL. 
  Agrega validación Boostrap. Todos los campos son obligatorios. 
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con la talla 
  y el color de la camiseta elegidos.*/
function datosCamiseta(idTallaCamiseta, idColorCamiseta) {
  let tallaCamiseta = document.getElementById(idTallaCamiseta).value;
  let colorCamiseta = document.getElementById(idColorCamiseta).value;

  let mensaje = "RESULTADO\nLa camiseta es de talla " + tallaCamiseta + " y de color " + colorCamiseta;
  imprimir(mensaje,"eje5FormulariosResultado");
  //mostrarModal("Titulo del modal",tallaCamiseta,colorCamiseta);
}

/*6. Crea un formulario para introducir la edad del usuario.
- La edad debe ser un numero positivo y es obligatorio. Agrega validación Boostrap.
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con la edad en dias, 
  la edad en minutos y la edad en segundos.*/
function calculoEdad(idEdad) {
  let edadAnyos = parseInt(document.getElementById(idEdad).value);
  const DIAS_ANYO = 365;
  const HORAS_DIA = 24;
  const MINUTOS_HORA = 60;
  let edadDias = edadAnyos * DIAS_ANYO;
  let edadMinutos = edadDias * HORAS_DIA * MINUTOS_HORA;
  let edadSegundos = edadMinutos * MINUTOS_HORA;
  let mensaje = "RESULTADO\nHas vivido " + edadDias + " días\nHas vivido " + edadMinutos + " minutos\nHas vivido " + edadSegundos + " segundos";
  imprimir(mensaje,"eje6FormulariosResultado");
}

/*7. Crea un formulario para mostrar información sobre un texto.
- Crea un elemento textArea que reciba un texto de longitud entre 10 y 100 caracteres. 
  Debe ser obligatorio. Agrega validación Boostrap.
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con el texto completo en mayusculas, 
  la primera letra del texto, la última letra y su longitud.*/
  function operacionesTextArea(idTextArea){
    let textArea = document.getElementById(idTextArea).value;
    let texAreaMayusculas = textArea.toUpperCase();
    let textAreaPrimeraLetra = textArea.charAt(0);
    let textAreaUltimaLetra = textArea.charAt(textArea.length -1);
    let textAreaLongitud = textArea.length;
    let mensaje = "RESULTADO\nEl texto en mayúsculas es: " + texAreaMayusculas + "\nLa primera letra es: " + textAreaPrimeraLetra + "\nLa ultima letra es: " + textAreaUltimaLetra + "\nLa longitud del texto es " + textAreaLongitud;
    imprimir(mensaje,"eje7FormulariosResultado");
  }

/* 8. Crea un formulario para calcular la nota media.
- Agrega 3 elementos que reciban numeros entre 0 y 10 y que no pueden estar vacío. 
  Agrega validación Boostrap.
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con la media de los tres números.*/
function calculoNotaMedia(idNumero1, idNumero2, idNumero3) {
  let numero1 = parseFloat(document.getElementById(idNumero1).value);
  let numero2 = parseFloat(document.getElementById(idNumero2).value);
  let numero3 = parseFloat(document.getElementById(idNumero3).value);

  let mediaAritmetica = (numero1 + numero2 + numero3) / 3;

  let mensaje ="RESULLTADO\nLa media aritmética de los números " + numero1 + ", " + numero2 + " y " + numero3 + " es " + mediaAritmetica;
  imprimir(mensaje, "eje8FormulariosResultado");
}

/*9. Crea un formulario para que el usuario pueda seleccionar una cantidad de camisetas, 
  que puede ser vacio, 1,2 o 3, una cantidad de zapatos también entre vacio, 1,2 o 3 y una cantidad de sombreros, 
  que puede ser vacio, 1,2, o 3.
- Agrega 1 elemento para seleccionar la cantidad de cada producto. El elemento select puede estar vacio.
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con el nombre de cada producto y su cantidad. 
  Si ha dejado vacio, no mostrará nada en su cantidad.*/
function cantidadesProductos(producto1, idCantidadProducto1, producto2, idCantidadProducto2){
  let cantidadProducto1 = parseFloat(document.getElementById(idCantidadProducto1).value);
  let cantidadProducto2 = parseFloat(document.getElementById(idCantidadProducto2).value);
    let mensaje = "RESULTADO\nProductos pedidos:\n" + producto1 + " = " + (cantidadProducto1==0?"":cantidadProducto1) + "\n" + producto2 + " = " + (cantidadProducto2==0?"":cantidadProducto2);
  imprimir(mensaje, "eje9FormulariosResultado");
}
/*10. Crea un formulario para que el usuario pueda introducir el nombre de su mascota, y seleccionar el tipo: 
  perro, gato, tortuga, pajaro.
- Agrega 1 elemento agregar el nombre de la mascota y el tipo. 
  Ambos pueden estar vacios (el usuario puede no tener mascota, o no ser de ninguno de esos tipos)
- Agrega un boton que al hacer click llame a una función que muestre un mensaje con los datos de la mascota, 
  es decir, nombre y tipo.*/
  function tuMascota(idNombreMascota, idTipoMascota) {
    let nombreMascota = document.getElementById(idNombreMascota).value;
    let tipoMascota = document.getElementById(idTipoMascota).value;
    let mensaje = "RESULTADO\nTu mascota se llama " + nombreMascota;
    
    if (tipoMascota === "") {
      mensaje += " y es un " + tipoMascota;
    }
    
    imprimir(mensaje, "eje10FormulariosResultado");
  }