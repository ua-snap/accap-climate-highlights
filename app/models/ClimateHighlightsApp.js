CH.models.ClimateHighlightsApp = Backbone.Model.extend({

	defaults: {
		"date":moment().format('YYYY-MM-DD')
	},

	initialize: function(properties, options) {
		console.log(properties);
		if(properties.highlights) {
			this.set({
				collection: new CH.collections.ClimateHighlights(properties.highlights)
			});
		}
	}
	
});