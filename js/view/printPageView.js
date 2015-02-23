var PrintPageView = function (container,model) {


	this.container=container;
	var sub = container.find("#sub");
	var food= container.find("#foodOverview");
	var printFood= container.find("#printFood");

	container.hide();
	var print = '';
	print += '<br /><h2>My Dinner: '+model.getNumberOfGuests()+' people</h2><span id=back-button><input class="btn btn-lg" type="submit" value="Go back and edit dinner"></span>'
	sub.html(print);
	this.backButton= container.find("#back-button");



	var print2='';
	var chosenDishes = model.getFullMenu();
	var menu=[];
	if('starter' in chosenDishes){
		menu.push(model.getSelectedDish('starter'));
	}

	if('main' in chosenDishes){
		menu.push(model.getSelectedDish('main'));
	}

	if('dessert' in chosenDishes){
		menu.push(model.getSelectedDish('dessert'));
	}


	this.foodPrint = function()
	{
		for(i=0;i<menu.length;i++)
		{
			var dish= menu[i];
			print2+='<div class=row id="foodRow">';
			print2+="<div class=col-md-2 id='imageCol'><img src=js/images/"+dish.image+" width=100%><br /></div>";
			print2+='<div class=col-md-4>';
			print2+='<h3>'+dish.name+'</h3>'
			var ingredients = dish.ingredients;
			
			for(j=0;j<ingredients.length;j++)
				{
					var ingredient = ingredients[j];
					print2+= ingredient.quantity+' ';
					print2+= ingredient.unit+' ';
					print2+= ingredient.name+'<br/>';

				}
				
			print2+='</div>'
			print2+='<div class=col-md-6><h4>Preperation</h4><br/>'+ dish.description+'</div></div>'


		}
	return print2;

	}
	printFood.html(this.foodPrint());
}


 
