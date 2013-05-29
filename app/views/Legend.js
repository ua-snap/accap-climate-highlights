CH.views.Legend = Backbone.View.extend({

	el: '#climate_highlights_nav',

	initialize: function() {

		_.bindAll(this);

	},

	render: function() {

		if(this.model.get('highlightType') != '') {
			var highlightType = this.model.get('highlightType').slice(0);

			$('#climate_highlight_legend div').each(function() {
				if($.inArray($(this).attr('id'), highlightType) > -1) {
					$(this).removeClass('disabled');
				} else {
					$(this).addClass('disabled');
				}
			});
		}

		return this;

	}
	
});
