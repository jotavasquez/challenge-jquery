$(document).ready(function () {
    //Etapa 7
    console.log("hola, estoy listo para ser cargado");
    $("#menu-bars").remove();

    //Función para el boton recipe, quita la clase make
    $('.js-show-recipe').click(function () {
        console.log("mostrar receta");
        $('#cont').removeClass('make');
    })

    //Función para el boton make it, muestra la clase make
    $('.js-show-make').click(function () {
        console.log("mostrar instrucciones");
        $('#cont').addClass('make');
    })
});
