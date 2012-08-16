CH.views.ClimateHighlightsApp = Backbone.View.extend({

	el: '#climate_highlights',

	initialize: function() {
		this.mapView = new CH.views.Map( { model: this.model } );
		this.listsView = new CH.views.ClimateHighlightsLists( { model: this.model } );
		this.navView = new CH.views.Navigation( { model: this.model } );

		// needed when render() is called through an event callback elsewhere
		_.bindAll(this);

	},

	render: function() {
		this.mapView.render();
		this.listsView.render();
		this.navView.render();
	}
	
});