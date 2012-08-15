CH.views.ClimateHighlightsLists = Backbone.View.extend({

	el: '#climate_highlights_lists',

	render: function() {

		$(this.el).empty();

		var daily = this.collection.filter(function(ch) {
			return 'daily' === ch.get('interval');
		});

		if(daily) {
			$(this.el).append('<h3>Daily Events</h3>');
			var ul = $('<ul>', {
				'class':'daily'
			});
			_.each(daily, function(ch) {
				v = new CH.views.ClimateHighlightListItem({model:ch});
				ul.append( $(v.render().el) );
			}, this);
			$(this.el).append(ul);
		}

		var monthly = this.collection.filter(function(ch) {
			return 'monthly' === ch.get('interval');
		});

		if(monthly) {
			$(this.el).append('<h3>Monthly Events</h3>');
			var ul = $('<ul>', {
				'class':'monthly'
			});
			_.each(monthly, function(ch) {
				v = new CH.views.ClimateHighlightListItem({model:ch});
				ul.append( $(v.render().el) );
			}, this);
			$(this.el).append(ul);
		}
	}
});