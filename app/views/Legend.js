CH.views.Legend = Backbone.View.extend({

	el: '#climate_highlights_nav',

	initialize: function() {

		_.bindAll(this);

	},

	render: function() {

		if(this.model.get('highlightType')) {
			var highlightType = this.model.get('highlightType');

			$('#climate_highlight_legend div').each(function() {
				if($(this).attr('id') == highlightType) {
					$(this).removeClass('disabled');
				} else {
					$(this).addClass('disabled');
				}
			});
		}

		return this;

	}
	
});
