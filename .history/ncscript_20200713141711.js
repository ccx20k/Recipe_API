$(document).ready(function() {
	console.log("Lets Eat!");
});

var authKey = "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae";

var queryIngredient = "";
var numRecipes = 0;
var title = "";
var summary = "";
var extendedIngredients = "";
var sourceURL = "";



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


