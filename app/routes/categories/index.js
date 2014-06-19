var CategoriesIndexRoute = Ember.Route.extend({
	model: function() {
		// melhor lugar para chamada ajax
		return this.store.find('area');
	}
});

export default CategoriesIndexRoute;
