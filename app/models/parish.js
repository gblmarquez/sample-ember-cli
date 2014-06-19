var attr = DS.attr;

export default DS.Model.extend({
	name: attr("string"),
	area_id: DS.belongsTo('area')
});