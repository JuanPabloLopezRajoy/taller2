console.log("hola mundo");

//Paso 1: Guardo los elementos del formulario en variables

var input_nombre = document.getElementById("nombre"); // #nombre seria en css
var input_apellido = document.getElementById("apellido");
var input_email = document.getElementById("email");
var input_artista = document.getElementById("artista");
var input_submit = document.getElementById("boton-enviar");


console.log(input_nombre);
console.log(input_apellido);
console.log(input_artista);
console.log(input_submit);

// Paso 2: Creo una funcion que se ejecuta cuando se envia el formulario

input_submit.addEventListener("click", function(event) {
console.log("Hemos hecho click!!");
console.log("!!");
});

function enviarFormulario(event){
    event.preventDefault();
    console.log("Hemos hecho click!");
    console.log("!!");

// Paso 3: Obtener los valores de los inputs
var valor_nombre = input_nombre.value;
var valor_apellido = input_apellido.value;
var valor_email = input_email.value;
var valor_artista = input_artista.value;

console.log(valor_nombre);
console.log(valor_apellido);
console.log(valor_email);
console.log(valor_artista);


// Paso 4: Obtener los placeholders (algo que esta puesto ahi para luego reemplazarlo por otra cosa)
var placeholder_nombre = document.getElementById("nombre-placeholder");
var placeholder_apellido = document.getElementById("apellido-placeholder");
var placeholder_email = document.getElementById("email-placeholder");
var placeholder_artista = document.getElementById("artista-placeholder");


// Paso 5: Cambiar el contenido de los placeholders
placeholder_nombre.innerHTML = valor_nombre;
placeholder_apellido.innerHTML = valor_apellido;
placeholder_email.innerHTML = valor_email;
placeholder_artista.innerHTML = valor_artista;


// Paso 6: Mostrar el feedback
elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.remove("oculto");

// Paso 7: Ocultar el formulario
elemento_formulario = document.getElementById("formulario");
elemento_formulario.classList.add("oculto");



}