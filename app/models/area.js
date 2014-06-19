var attr = DS.attr;

export default DS.Model.extend({
	name: attr("string"),
	parishes: DS.hasMany("parish", {async: true})
});