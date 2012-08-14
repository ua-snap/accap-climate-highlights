CH.views.ClimateHighlightModal = Backbone.View.extend({
	
	el: "#climate_highlight_modal",
	model: CH.models.ClimateHighlight,
	render: function() {

		template = _.template($('#template-climate-highlight-modal').html());
		data = this.model.toJSON();
		data.title = CH.getTitleFromKind(data.kind) + ', ' + moment().format( 'MMMM YYYY', data.date);
		
		$(this.el).html(template(data));
		$(this.el).modal();

	},

	destroy: function() {
		$(this.el).modal('hide');
	}
});