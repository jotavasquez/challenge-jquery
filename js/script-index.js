$(document).ready( function(){
	$("#back-arrow").remove();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	printNews();
	renderHighlightedRecipes(recipesArray);
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
			if (recipesArray[i].highlighted === true){
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
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log('Activities: ', activitiesArray);
}