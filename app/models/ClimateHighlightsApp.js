CH.models.ClimateHighlightsApp = Backbone.Model.extend({

	defaults: {
		"date":moment().format('YYYY-MM')
	},

	url: function() {

		if( CH.config.appModelUrl === undefined ) {
			throw('Cannot find service endpoing configuration.');
		}

		return CH.config.appModelUrl + CH.config.serviceEndpoint + '/' + this.get('date');

	},

	initialize: function(properties, options) {
	
		if( properties && properties.highlights ) {
			this.set({
				collection: new CH.collections.ClimateHighlights(properties.highlights)
			}, false);
		}
		
		this.on('change:date', this.fetch, this);

	}
	
});