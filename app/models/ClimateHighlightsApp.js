CH.models.ClimateHighlightsApp = Backbone.Model.extend({

	defaults: {
		"date":moment().format('YYYY-MM'),
		"startDate":moment().format('YYYY-MM'),
		"endDate":moment().format('YYYY-MM')
	},

	url: function() {
		return CH.config.appModelUrl + CH.config.serviceEndpoint + this.get('startDate') + '/' + this.get('endDate');
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
