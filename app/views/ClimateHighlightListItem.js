CH.views.ClimateHighlightListItem = Backbone.View.extend({
	tagName: "li",

	events: {
		"click" : "showModal"
	},

	showModal: function(e) {

		modal = new CH.views.ClimateHighlightModal( { model: this.model } );
		modal.render();
		
	},

	render: function() {

		template = _.template($('#template-climate-highlight-list-item').html());
		data = this.model.toJSON();

		$(this.el).append(template(data)).addClass(data.kind);

		return this;

	}
});
