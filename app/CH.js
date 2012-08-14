// Define the namespacing object unless it's already defined
var CH = CH || {};

// Define the nested namespaces for the models, views.
CH.models = CH.models || {};
CH.views = CH.views || {};

// Define main application router
CH.router = Backbone.Router.extend({
	routes: {
		"" : "index"
	},

	index: function() {
		var m = new CH.models.ClimateHighlights();
		var v = new CH.views.ClimateHighlights({
			model: m
		});
		v.render();
	}

});