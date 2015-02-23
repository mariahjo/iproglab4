var MainController = function(model) {
 

var exampleView = new ExampleView($("#exampleView"),model);
var exampleViewController = new ExampleViewController(exampleView,model);

var dishSelectView = new DishSelectView($("#dishSelectView"),model);
var singleDishView = new SingleDishView($("#singleDishView"),model);

var menuOverView = new MenuOverView($("#menuOverView"),model);
var menuOverViewController = new MenuOverViewController(menuOverView,model);

var printPageView = new PrintPageView($("#printPageView"),model);
var printPageViewController = new PrintPageViewController (printPageView, model);

var searchMenuView = new SearchMenuView($("#searchMenuView"),model);

var startView = new StartView($("#startView"),model);
var startController = new StartController (startView, model);

}

