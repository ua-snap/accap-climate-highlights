CH.views.ClimateHighlightsApp = Backbone.View.extend({

	el: '#climate_highlights',

	events: {
		"focus #start-month" : "startMonth",
		"focus #end-month" : "endMonth"
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

	startMonth: function(e) {
		if(!!$(e.currentTarget).val() && moment( this.model.get('startDate'), 'YYYY-MM').format('YYYY-MM') != moment( $(e.currentTarget).val(), 'YYYY-MM').format('YYYY-MM')) {
			this.model.set({
				'startDate' : moment( $(e.currentTarget).val(), 'YYYY-MM').format('YYYY-MM')
			});
			this.refresh();
		}
	},

	endMonth: function(e) {
		if(!!$(e.currentTarget).val() && moment( this.model.get('endDate'), 'YYYY-MM').format('YYYY-MM') != moment( $(e.currentTarget).val(), 'YYYY-MM').format('YYYY-MM')) {
			this.model.set({
				'endDate' : moment( $(e.currentTarget).val(), 'YYYY-MM').format('YYYY-MM')
			});
			this.refresh();
		}
	},

	refresh: function() {
		this.model.fetch({
			success: $.proxy(function(model, xhr) {
				this.render();
			}, this)
		}, { silent: true });
	}
	
});
