$(document).ready(function () {
	$("#back-arrow").remove();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	printNews();
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);
});

/*
*Etapa 2
*/
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
/*
* Etapa 4
*/
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

/*
* Etapa 5
* Función que se encarga de pintar todas las actividades
*/

var activitiesArray = activities;
function renderActivities(activitiesArray) {
	if (activitiesArray.length === 0) {
		console.log(" 0 objetos");
		console.log(activitiesArray);
	} else {
		for (var i = 0; i < activitiesArray.length; i++) {
				$('.wrapper-message').remove();
				renderActivity(activitiesArray[i]);
		}
	}
}

/*
* Etapa 6
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log(recipe);
	$('.list-activities').append(
		'<a href="#" class="item-activity">' +
		'<span class="attribution">' +
		'<span class="avatar">' +
		'<img src="' + recipe.userAvatar + '" class="image-avatar">' +
		'</span>' +
		'<span class="meta">' +
		'<span class="author">' + recipe.userName +
		'</span>made' +
		'<span class="recipe">' + recipe.recipeName +
		'</span>: ' + recipe.text +
		'<span class="location">&mdash;' + recipe.place +
		'</span>' +
		'</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(' + recipe.image + ');">' +
		'</div>' +
		'</a >'
	);
}
