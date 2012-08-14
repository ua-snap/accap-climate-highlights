CH.views.ClimateHighlightsApp = Backbone.View.extend({
	el: '#climate_highlights',
	model: CH.models.ClimateHighlights,
	render: function() {
		// Static only, don't try and compile the template
		$(this.el).html( $('#template-climate_highlights').html() );
	}
});