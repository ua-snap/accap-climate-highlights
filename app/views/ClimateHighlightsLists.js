CH.views.ClimateHighlightsLists = Backbone.View.extend({

	el: '#climate_highlights_lists',

	// If any matching highlights meet the filter (daily/monthly), make an unordered list of
	// ClimateHighlightListItems and append them to this element.
	renderTitledFilteredList: function(filter, title) {
		var interval = this.model.get('collection').filter(function(ch) {
			return filter === ch.get('interval');
		});

		interval = _.sortBy(interval, function(ch) {
			return ch.attributes.summary;
		});

		if(interval) {
			$(this.el).append('<h3>'+title+'</h3>');
			var ul = $('<ul>', {
				'class':filter
			});

			_.each(interval, function(ch) {
				v = new CH.views.ClimateHighlightListItem({model:ch});
				ul.append( $(v.render().el) );
			}, this);
			$(this.el).append(ul);
		}
	},

	render: function() {

		$(this.el).empty();

		// guard in case the code somehow gets here with an empty or uninitialized collection
		if( undefined === this.model || this.model.get('collection') === undefined ) {
			throw("Model wasn't initialized correctly in ClimateHighlightLists section");
		}

		this.renderTitledFilteredList('daily', 'Daily Events');
		this.renderTitledFilteredList('multi-day', 'Multi-Day Events');
		this.renderTitledFilteredList('monthly', 'Monthly Events');

	}
});
