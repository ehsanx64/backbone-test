var p = new People;
p.add(new Person({
	name: 'Ivan',
	age: 32,
	sex: 'Male'
}));

p.add(new Person({
	name: 'Jack',
	age: 23,
	sex: 'Male'
}));

p.add(new Person({
	name: 'Georgina',
	age: 18,
	sex: 'Female'
}));

// p.add(new Person({
// 	name: 'Rosie',
// 	age: 48,
// 	sex: 'Female'
// }));

// var PersonView = Backbone.View.extend({
	// template: _.template($('#people-list-item-tpl').html()),
	// initialize: function () {
	// },

	// render: function () {
	// 	return this.template((this.model.attributes));
	// }
// });

// var PeopleView = Backbone.View.extend({
// 	el: '#people-list-wrapper',
//
// 	initialize: function () {
// 		this.render();
// 	},

	// render: function () {
	// 	this.$el.html('');
	// 	var that = this;

		// If there are persons to list first create the wrapper node
		// if (p.length > 0) {
		// 	this.$el.html(_.template($('#people-list-tpl').html()));
		// 	var tgt = $('#people-list');
        //
			// p.each(function (person) {
			// 	var person = new PersonView({
			// 		model: person
			// 	});
			// 	tgt.append(person.render());
			// });
		// } else {
		// 	var error = _.template($('#empty-people-list-tpl').html());
		// 	this.$el.html(error({ message: 'Empty List' }));
		// }
	// }
// });
//
//
// var pv = new PeopleView;
//
