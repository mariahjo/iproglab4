var DishSelectView = function (container,model) {

	this.container=container;
	var main = container.find('#dishhead');
	var allDishes = container.find("#allDishes");
	container.hide();


	var hehe = '';
	var haha = model.getAllDishes('main');

	this.getDishes = function()
	{ 
		hehe += '<div class="row">'
		for(i=0;i<haha.length;i++)
		{
			var dish = haha[i];
			hehe += "<div class='col-md-2'><br /><h4>"
			hehe += "<center><img src=js/images/"+dish.image+' width=100%><br /><br/>';
			hehe += dish.name;
			hehe += "</h4></center>"
			hehe += "<p>"+dish.description.substr(0, 80)+'...</p></div>'

		}
		hehe += '</div>'
	return hehe
	};
	allDishes.html(this.getDishes());

}