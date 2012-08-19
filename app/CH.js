// Define the namespacing object unless it's already defined
var CH = CH || {};

// Define the nested namespaces for the models, views, collections.
CH.models = CH.models || {};
CH.views = CH.views || {};
CH.collections = CH.collections || {};

// This will be embedded in the page generated by Drupal, so the user can set configurations
// through the Drupal interface.  For testing, this can be specified in the SpecRunner.
CH.config = CH.config || {};

// How much time to wait for async events that may fail?  If you know they'll fail (i.e. no internet connection)
// for testing, set this to 1.
CH.config.asyncTimeout = 5000;

// This must be defined in code generated by Drupal, because it's host-specific,
// just noting it here to make it clear that it's related to this code.
CH.config.appModelUrl = CH.config.appModelUrl || '';

// Absolute image base path will be set by Drupal, and used to reference images that
// the Google Maps need to display.  Again, only specified here for awareness.
CH.config.imageUrl = CH.config.imageUrl || '';

// URL Endpoint is between the baseURL of the Drupal instance and the param that will be
// used to fetch data -- either override with what Drupal generates, or set a default.
CH.config.serviceEndpoint = CH.config.serviceEndpoint || '';

// Define main application router
CH.router = Backbone.Router.extend({
	routes: {
		"" : "index",
		"date/:date" : "date"
	},

	initialize: function(appModel) {

		this.appModel = appModel || new CH.models.ClimateHighlightsApp();
		this.appView = new CH.views.ClimateHighlightsApp({
			model: this.appModel
		});

	},

	index: function() {
		this.appModel.fetch({
			success: $.proxy(function(model, response) {
				this.appView.render();
			}, this)
		}, { silent: true });
	},

	date: function(date) {
		if( false === moment(date).isValid() ) {
			date = moment().format('YYYY-MM');
		}
		this.appModel.set({'date':date});
	}

});

// Utility belt functions
CH.getTitleFromKind = function(kind) {
	switch(kind) {
		case 'high-temperatures': return 'High Temperatures';
		case 'low-temperatures': return 'Low Temperatures';
		case 'high-rain': return 'High Rain';
		case 'low-rain': return 'Low Rain';
		case 'high-snow': return 'High Snow';
		case 'low-snow': return 'Low Snow';
		case 'blizzard': return 'Blizzard';
		case 'cyclone': return 'Cyclone';
		case 'drought': return 'Drought';
		case 'flooding': return 'Flooding';
		case 'icing': return 'Icing';
		case 'lightning': return 'Lightning';
		case 'sea-ice-changes': return 'Sea Ice Changes';
		case 'wildfire': return 'Wildfire';
		case 'wind': return 'Wind';
	}
};
