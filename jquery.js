$(document).ready(function(){  /* hace las acciones despues de que cargue la pagina */

    $(".feedback-oculto").hide()

    $("#boton-enviar").click(function(event){  /* Cuando se hace click en el boton se esconde el formulario */ 

        event.preventDefault(); /* para que no se recargue la pagina */ 

        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var email = $("#email").val();
        var artista = $("#artista").val();


        $("#nombre-placeholder").text(nombre);
        $("#apellido-placeholder").text(apellido);
        $("#email-placeholder").text(email);
        $("#artista-placeholder").text(artista);
    

        $(".formulario-sin-completar").hide()  /* Esto esconde el formulario */
        $(".feedback-oculto").show() /* esto muestra el feedback */


    });



});