// Define the namespacing object unless it's already defined
var CH = CH || {};

// Define the nested namespaces for the models, views, collections.
CH.models = CH.models || {};
CH.views = CH.views || {};
CH.collections = CH.collections || {};

// Define main application router
CH.router = Backbone.Router.extend({
	routes: {
		"" : "index"
	},

	index: function() {
		var m = new CH.models.ClimateHighlightsApp(ch.fixtures.models.august2012);
		var v = new CH.views.ClimateHighlightsApp({
			model: m
		});
		v.render();

		$(function() {
			var mm = new CH.views.Map({ model: m });
			mm.render();
		});
	}

});

// Utility belt functions
CH.getTitleFromKind = function(kind) {
	switch(kind) {
		case 'high-temperatures': return 'High Temperatures';
	}
};