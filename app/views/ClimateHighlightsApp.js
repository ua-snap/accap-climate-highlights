CH.views.ClimateHighlightsApp = Backbone.View.extend({

	el: '#climate_highlights',

	events: {
		"click #climate_highlight_legend div" : "filterHighlightType",
		"focus #start-month" : "startMonth",
		"focus #end-month" : "endMonth",
		"click #show-date-range:checkbox" : "showDateRange"
	},

	initialize: function() {

		this.mapView = new CH.views.Map( { model: this.model } );
		this.listsView = new CH.views.ClimateHighlightsLists( { model: this.model } );
		this.navView = new CH.views.Navigation( { model: this.model } );
		this.legendView = new CH.views.Legend( { model: this.model } );

		// needed when render() is called through an event callback elsewhere
		_.bindAll(this);

	},

	render: function() {
		this.mapView.render();
		this.listsView.render();
		this.navView.render();
		this.legendView.render();
	},

	filterHighlightType: function(e) {
		// If user has already enabled "Filter by Type" by clicking an
		// icon, allow more types to be enabled one by one. Else, set
		// the first icon they click to be the only filter enabled.
		if(this.model.get('enableFilterByType')) {

			// If the user has clicked a disabled filter, enable it.
			// Else, the filter needs to be disabled.
			if($(e.currentTarget).hasClass('disabled')) {
				// Add clicked highlight type filter to array.
				this.model.set({
					"highlightType" : this.model.get('highlightType').slice(0).concat($(e.currentTarget).attr('id'))
				});
			} else {
				// Copy the highlight type filters array.
				var highlightType = this.model.get('highlightType').slice(0);

				// Remove clicked highlight type from array.
				var highlightTypeIndex = highlightType.indexOf($(e.currentTarget).attr('id'));
				highlightType.splice(highlightTypeIndex, 1);

				if(highlightTypeIndex > -1) {
					this.model.set({
						"highlightType" : highlightType
					});
				}
			}
		} else {
			this.model.set({
				"highlightType" : [$(e.currentTarget).attr('id')],
				"enableFilterByType" : true
			});
		}

		this.legendView.render();
		this.listsView.render();
		this.mapView.render();
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

	showDateRange: function(e) {
		this.model.set({
			'enableDateRange' : e.currentTarget.checked
		});

		this.refresh();
	},

	refresh: function() {
		if(this.model.get('enableDateRange')) {
			Backbone.history.navigate("#date/" + this.model.get('startDate') + "/" + this.model.get('endDate'), true);
		} else {
			Backbone.history.navigate("#date/" + this.model.get('startDate'), true);
		}
	}
	
});
