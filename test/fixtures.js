// Fixtures for testing Climate Highlights.

var ch = ch || {};
ch.fixtures = {};

ch.fixtures.models = {};

ch.fixtures.models.daily1 = {
	"date": "2012-8",
	"interval":"daily",
	"lat":"",
	"lon":"",
	"summary":"daily highlight 1",
	"description":"<p>full HTML description of first daily highlight</p>",
	"kind":"high-temperatures"
};

ch.fixtures.models.daily2 = {
	"date": "2012-8",
	"interval":"daily",
	"lat":"52.6883",
	"lon":"-166.6614",
	"summary":"daily highlight 2 in king salmon",
	"description":"<p>full HTML description of daily highlight #2 in <b>king salmon</b></p>",
	"kind":"high-snow"
};

ch.fixtures.models.monthly1 = {
	"date": "2012-8",
	"interval":"monthly",
	"lat":"64.8378",
	"lon":"-147.7164",
	"summary":"monthly highlight 1 in fbx",
	"description":"<p>full HTML description of first monthly highlight in fbx</p>",
	"kind":"wind"
};

ch.fixtures.models.monthly2 = {
	"date": "2012-8",
	"interval":"monthly",
	"lat":"64.9",
	"lon":"-149",
	"summary":"monthly highlight 2",
	"description":"<p>full HTML description of monthly highlight #2</p>",
	"kind":"high-temperatures"
};

ch.fixtures.arrayOfHighlights = [
	ch.fixtures.models.daily1,
	ch.fixtures.models.daily2,
	ch.fixtures.models.monthly1,
	ch.fixtures.models.monthly2
];

ch.fixtures.models.august2012 = {
	"id" : "2012-08",
	"previousCount" : 5,
	"nextCount" : 2,
	"highlights" : ch.fixtures.arrayOfHighlights
};

ch.fixtures.serverResponses = {};

ch.fixtures.serverResponses.getAugust2012 = [
	'200',
	{
		"Content-Type" : "application/json"
	},
	JSON.stringify(ch.fixtures.models.august2012)
];