$(document).ready(function () {
    //Etapa 7
    console.log("hola, estoy listo para ser cargado");
    $("#menu-bars").remove();

    //Función para el boton recipe, quita la clase make
    $('.js-show-recipe').click(function () {
        //Etapa 8
        console.log("mostrar receta");
        $('#cont').removeClass('make');
        //Etapa 9
        $(this).addClass('active');
        $('.js-show-make').removeClass('active');
    })

    //Función para el boton make it, muestra la clase make
    $('.js-show-make').click(function () {
        //Etapa 8
        console.log("mostrar instrucciones");
        $('#cont').addClass('make');
        //Etapa 9
        $(this).addClass('active');
        $('.js-show-recipe').removeClass('active');
    })
});
