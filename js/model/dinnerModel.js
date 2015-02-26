//DinnerModel Object constructor
var DinnerModel = function() {

	var guestNumb = 4;
	var chosenDishes = new Object();
	var observers = [];

	this.addObserver = function(observer) {
		observers.push(observer);
	}
	var notifyObservers = function(obj) {
		for (i=0;i<observers.length;i++){
				observers[i].update();
			}
	}

	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu


	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		guestNumb = num;
		console.log(guestNumb)
		notifyObservers();
	}
	


	// Should return 
	this.getNumberOfGuests = function() {
		//TODO Lab 2
		return guestNumb;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 2
		var id = chosenDishes[type];
		var dish = this.getDish(id);

		return dish;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 2
		return chosenDishes;
	}

	this.getDishPrice = function(id) {

		var dishPrice = 4;
	
		return dishPrice*guestNumb;
	}



	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		var price = 5;
	

		return price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
		//var dish = this.getDish(id);
		//var dishType = dish.type;
		//chosenDishes[dishType] = id;
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
	/*var dish = this.getDish(id);
	var type = dish.type; 
	console.log("removeDishFromMenu in dinnerModel");
	if(chosenDishes[type] === id) {
		delete chosenDishes[type];
		notifyObservers();
		}*/

	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {

		var apiKey = "dvx9OuKF2BU1lD00NOiDg87Wmzg7XlZx";
		var type = type;
		var url = "http://api.bigoven.com/recipes?api_key="+apiKey+"&pg=2&rpp=5&any_kw="+type;
		$.ajax({
        type: "GET",
        dataType: 'json',
        cache: false,
        url: url,
        success: function (data) {
            var selectedRecipes = data.Results;
            console.log(selectedRecipes);
            return selectedRecipes;


            }
         });
       }
        

	//function that returns a dish of specific ID
	this.getDish = function (id) {

		var apiKey = "dvx9OuKF2BU1lD00NOiDg87Wmzg7XlZx";
		var recipeID = id;
		var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
		$.ajax({
        type: "GET",
        dataType: 'json',
        cache: false,
        url: url,
        success: function (data) {
            this.selectedRecipe = data;

            }
         });

		return this.selectedRecipe;
       }
        

}