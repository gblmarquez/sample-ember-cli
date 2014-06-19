var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {

	/*this.resource('categories', {'path': '/categories'}, function() {
		this.route('index', {path: '/'});
	});*/

	this.resource('categories',function(){
	    this.resource('category',{path:'/:category_id'}, function(){
	        this.route('index');
	    });
	});

	this.resource('products',function(){
	    this.resource('product',{path:'/:product_id'},function(){
	        this.route('index');
	    });
	});

});

export default Router;
