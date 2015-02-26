var DishSelectView = function (container,model) {


	this.container=container;
	var main = container.find('#dishhead');
	var allDishes = container.find("#allDishes");
	container.hide();

	
	var hehe = '';
	var haha = model.getAllDishes('main');
	console.log(haha)

	this.getDishes = function()
	{ 
		hehe += '<div class="row">'
		for(i=0;i<haha.length;i++)
		{
			var dish = haha[i];
			hehe += "<div class='col-md-2'><br /><h4>"
			hehe += "<center><img src="+dish.ImageURL+' width=100%><br /><br/>';
			hehe += dish.Title;
			hehe += "</h4></center>"
			hehe += '</div>'

		}
		hehe += '</div>'
	return hehe
	};
	allDishes.html(this.getDishes());

}