var ProductsRoute = Ember.Route.extend({
	model: function() {
		// melhor lugar para chamada ajax
		return this.store.find('parish');
	}
});

export default ProductsRoute;
