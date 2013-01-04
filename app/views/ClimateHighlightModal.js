CH.views.ClimateHighlightModal = Backbone.View.extend({
	
	el: "#climate_highlight_modal",
	model: CH.models.ClimateHighlight,
	render: function() {

		template = _.template($('#template-climate-highlight-modal').html());
		data = this.model.toJSON();
		data.title = CH.getTitleFromKind(data.kind) + ', ' + moment(data.date, 'YYYY-MM').format('MMMM YYYY');
		
		$(this.el).html(template(data));
		$(this.el).modal();

	},

	destroy: function() {
		$(this.el).modal('hide');
	}
});