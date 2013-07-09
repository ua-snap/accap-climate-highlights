CH.models.ClimateHighlightsApp = Backbone.Model.extend({

	defaults: {
		"startDate":moment().format('YYYY-MM'),
		"endDate":moment().format('YYYY-MM'),
		"enableDateRange":false,
		"enableFilterByType":false,
		"highlightType":[
			'high-temperatures',
			'low-temperatures',
			'high-rain',
			'low-rain',
			'high-snow',
			'low-snow',
			'blizzard',
			'cyclone',
			'drought',
			'flooding',
			'icing',
			'lightning',
			'sea-ice-changes',
			'wildfire',
			'wind'
		]
	},

	url: function() {
		if(this.get('enableDateRange')) {
			return CH.config.appModelUrl + CH.config.serviceEndpoint + this.get('startDate') + '/' + this.get('endDate');
		} else {
			return CH.config.appModelUrl + CH.config.serviceEndpoint + this.get('startDate') + '/' + this.get('startDate');
		}

	},

	parse: function(response) {
		response.collection = new CH.collections.ClimateHighlights(response.highlights);
		return response;
	},

	initialize: function(properties, options) {
		if(properties && properties.highlights) {
			this.set(this.parse(properties), { silent: true });
		}
	}
	
});
