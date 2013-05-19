CH.views.ClimateHighlightsApp = Backbone.View.extend({

	el: '#climate_highlights',

	events: {
		"click button.previous" : "previousMonth",
		"click button.next" : "nextMonth",
		"focus #startmonth" : "startMonth",
		"focus #endmonth" : "endMonth"
	},

	initialize: function() {

		this.mapView = new CH.views.Map( { model: this.model } );
		this.listsView = new CH.views.ClimateHighlightsLists( { model: this.model } );
		this.navView = new CH.views.Navigation( { model: this.model } );
		this.previousMonth = _.debounce(this.previousMonth, 100, true);
		this.nextMonth = _.debounce(this.nextMonth, 100, true);

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
