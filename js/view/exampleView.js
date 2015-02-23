//ExampleView Object constructor
var ExampleView = function (container,model) {
	this.container=container;
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmButton = container.find("#confirm");
	
	var totalCost = container.find("#totalCost");
	var dishName = container.find("#dishName");
	var dishPrice = container.find("#dishPrice");


	container.hide();
	

//	model.removeDishFromMenu(2);


	this.numberOfGuests.html(model.getNumberOfGuests);

	totalCost.html(model.getTotalMenuPrice());


	this.getNames = function(){
		var print = '';
		var chosenDishes = model.getFullMenu();
		if('starter' in chosenDishes){
			var starterid = chosenDishes.starter;
			var starter = model.getDish(starterid);
			var starterName = starter.name;
			print+= '<button id="removeStarter" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+starterName.substr(0, 30)+'<br />';
		}

		if('main' in chosenDishes){
			var mainid = chosenDishes.main;
			var main = model.getDish(mainid);
			print+= '<button id="removeMain" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+main.name.substr(0, 30)+'<br />';
		}

		if('dessert' in chosenDishes){
			var dessertid = chosenDishes.dessert;
			var dessert = model.getDish(dessertid);
			print+= '<button id="removeDessert" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+dessert.name.substr(0, 30)+'<br />';
		}

		return print;


	}

	dishName.html(this.getNames());

	this.removeStarter = container.find("#removeStarter");
	this.removeMain = container.find("#removeMain");
	this.removeDessert = container.find("#removeDessert");

	this.getPrice = function(){
		var print = '';
		var chosenDishes = model.getFullMenu();
		if('starter' in chosenDishes){
			var starterid = chosenDishes.starter;
			var starterPrice = model.getDishPrice(starterid)
			print+= starterPrice+'<br />';
		}

		if('main' in chosenDishes){
			var mainid = chosenDishes.main;
			var mainPrice = model.getDishPrice(mainid)
			print+= mainPrice+'<br />';
		}

		if('dessert' in chosenDishes){
			var dessertid = chosenDishes.dessert;
			var dessertPrice = model.getDishPrice(dessertid)
			print+= dessertPrice+'<br />';
		}
		return print;

	}

	dishPrice.html(this.getPrice());

	model.addObserver(this);
	// console.log(this.getNames());


	this.update = function (obj){
		this.numberOfGuests.html(model.getNumberOfGuests);
		totalCost.html(model.getTotalMenuPrice());
		dishName.html(this.getNames());
		dishPrice.html(this.getPrice());

		this.removeStarter = container.find("#removeStarter"); 
		this.removeMain = container.find("#removeMain");
		this.removeDessert = container.find("#removeDessert");

		console.log('Update method exampleview');
		// console.log(this.getNames());
	}




}