$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	model.addDishToMenu(200);
	model.addDishToMenu(3);
	model.addDishToMenu(101);

	
	//And create the needed controllers and views
    var mainController = new MainController(model);


});