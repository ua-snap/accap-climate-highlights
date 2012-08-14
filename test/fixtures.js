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
	"lat":"58.6883",
	"lon":"156.6614",
	"summary":"daily highlight 2 in king salmon",
	"description":"<p>full HTML description of daily highlight #2 in <blink>king salmon</blink></p>",
	"kind":"high temperatures"
};

ch.fixtures.models.monthly1 = {
	"date": "2012-8",
	"interval":"monthly",
	"lat":"64.8378",
	"lon":"147.7164",
	"summary":"monthly highlight 1 in fbx",
	"description":"<p>full HTML description of first monthly highlight in fbx</p>",
	"kind":"high temperatures"
};

ch.fixtures.models.daily2 = {
	"date": "2012-8",
	"interval":"daily",
	"lat":"",
	"lon":"",
	"summary":"monthly highlight 2",
	"description":"<p>full HTML description of monthly highlight #2</p>",
	"kind":"high temperatures"
};
