$(document).ready(function () {
	$("#back-arrow").hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	printNews();
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);
});

//funcion etapa 2
function printNews() {
	$('#news > p').text('NUEVAS RECETAS');
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
* Etapa 3
*/

function renderHighlightedRecipes(recipesArray) {
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted === true) {
			//pasa la data a la función renderRecipe
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	/*Paso 4*/
	$("#list-recipes").append(
		'<a class="item-recipe" href="#">' +
		'<span class="attribution">' +
		'<span class="title-recipe">' + recipe.title +
		'</span>' +
		'<span class="metadata-recipe">' +
		'<span class="author-recipe">' + recipe.source.name +
		'</span>' +
		'<span class="bookmarks-recipe">' +
		'<span class="icon-bookmark">' +
		'</span>' +
		'</span>' +
		'</span>' +
		'</span>' +
		'<img src= "img/recipes/320x350/' + recipe.name + '.jpg"/>' +
		'</a>'
	);
}

/* Paso 5 */
/*
* Función que se encarga de pintar todas las actividades
* ciclo for con each
*/

/*
var activitiesArray = activities;
function renderActivities(activitiesArray) {
	$.each(activitiesArray, function (ind, elem) {
		if (ind > 0){
			console.log("tiene tres" + elem);
			renderActivity(activitiesArray);
		} else {
			console.log("tiene cero");
			$('.wrapper-message').hide();
			//o remover? 
			//$('.wrapper-message').remove();
		}
	});
}
*/

var activitiesArray = activities;
function renderActivities(activitiesArray) {
	if (activitiesArray.length < 0) {
		console.log("tiene más de 0 objetos");
		renderActivity(recipe);
	} else {
		console.log(" 0 objetos");
		$('.wrapper-message').remove();
	}
}

/*
 $.each(activitiesArray, function (ind, elem) {
	   if (ind >= 0){
	   renderActivity(activitiesArray);
	   console.log("tiene " + ind + " objetos" + elem.recipeName);
	   } else {
		   console.log("no hay objetos");
		   $('.wrapper-message').hide();
		   //o remover?
		   //$('.wrapper-message').remove();
	   }
 });
}
/*
/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log(recipe);
}
