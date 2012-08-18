CH.views.ClimateHighlightsApp = Backbone.View.extend({

	el: '#climate_highlights',

	events: {
		"click button.previous" : "previousMonth",
		"click button.next" : "nextMonth"
	},

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
	},

	previousMonth: function() {
		this.model.set({
			'date' : moment( this.model.get('date'), 'YYYY-MM').subtract('months', 1).format('YYYY-MM')
		});
		this.refresh();
	},

	nextMonth: function() {
		this.model.set({
			'date' : moment( this.model.get('date'), 'YYYY-MM').add('months', 1).format('YYYY-MM')
		});
		this.refresh();
	},

	refresh: function() {
		this.model.fetch({
			success: $.proxy(function(model, xhr) {
				this.render();
			}, this)
		}, { silent: true });
	}
	
});