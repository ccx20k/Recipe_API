$(document).ready(function() {
	console.log("Lets Eat!");
});

var title = "";
var summary = "";
var extendedIngredients = "";
var instructions = "";
var sourceURL = "";
var image = "";

function updatePage(recipeObj) {

	clear()

var numRecipes = "";

for (var i=0; i < numRecipes; i++) {
	title = recipeObj.items.result[i].title;
	summary = recipeObj.items.result[i].summary;
	extendedIngredients = recipeObj.items.result[i].extendedIngredients;
	instructions = recipeObj.items.result[i].instructions;
	sourceURL = recipeObj.items.result[i].sourceURL;
	image = recipeObj.items.result[i].label

	

} 
}

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});