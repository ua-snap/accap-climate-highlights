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

ch.fixtures.julyHighlights = [

{
	"date": "2012-7",
	"interval":"daily",
	"lat":"71.3",
	"lon":"-156.7",
	"summary":"High precipitation in Barrow",
	"description":"<p>On August 19, Barrow received a record high rainfall of 0.76in/1.9cm, breaking the old record of 0.38in/1cm, set in 1921 and again in 2008.</p>",
	"kind":"high-rain"
},{
	"date": "2012-7",
	"interval":"daily",
	"lat":"60.8",
	"lon":"-161.8",
	"summary":"High precipitation in Bethel",
	"description":"<p>On August 28, Bethel received a record high rainfall of 1.24in/3.1cm, breaking the old record, 0.69in/1.8cm set in 1996.</p>",
	"kind":"high-rain"
},{
	"date": "2012-7",
	"interval":"daily",
	"lat":"58.6",
	"lon":"-156.6",
	"summary":"High precipitaiton in King Salmon",
	"description":"<p>On August 25, King Salmon received a record high rainfall of 0.67in/1.7cm, breaking the old record, 0.57in/1.4cm, set in 1955.</p>",
	"kind":"high-rain"
},{
	"date": "2012-7",
	"interval":"daily",
	"lat":"66.9",
	"lon":"-162.6",
	"summary":"High precipitation in Kotzebue",
	"description":"<p>On August 16, Kotzebue received a record high rainfall of 0.61in/1.5cm, breaking the previous record, 0.51in/1.3cm, set in 1951.</p>",
	"kind":"high-rain"
},{
	"date": "2012-7",
	"interval":"daily",
	"lat":"57.2",
	"lon":"-170.3",
	"summary":"Record temperatures in St. Paul",
	"description":"<p>St. Paul Island set two new temperature records in August.</p><ul><li>On August 12, St. Paul Island had a record high temperature of 62&deg;F/17&deg;C, breaking the old record, 57&deg;F/14&deg;C, set in 2005.</li><li>On August 15, St. Paul Island had a record low temperature of 32&deg;F/0&deg;C, breaking the old record, 35&deg;F/2&deg;C, set in 1956.</li>",
	"kind":"high-temperatures"
},{
	"date": "2012-7",
	"interval":"monthly",
	"lat":"",
	"lon":"",
	"summary":"High precipitation statewide",
	"description":"<p>Precipitation varied in the southeast, the coastal locations exceeding normal precipitation amounts, while just a little farther inland, precipitation fell below normal. The rest of Alaska had greater than normal precipitation with a few exceptions noted below.</p><ul><li>Anchorage precipitation (3.02in/7.7cm) was 78% above normal.</li> <li>Barrow precipitation (1.64in/4.2cm) was 89% above normal.</li> <li>Fairbanks precipitation (3.11in/7.9cm) was 76% above normal.</li> <li>King Salmon precipitation (3.30in/8.4cm) was 53% above normal, recording its 5th wettest August on record.</li> <li>Northway recorded their 2nd wettest August (6.12in/15.5cm) since 1942.</li> <li>Juneau precipitation (3.46in/8.8cm) was 84% below normal.</li> <li>Big Delta precipitation (1.79in/4.5cm) was 65% below normal.</li> <li>Ketchikan precipitation (2.77in/7cm) was 56% below normal.</li></ul>",
	"kind":"high-rain"
},{
	"date": "2012-7",
	"interval":"monthly",
	"lat":"64.8",
	"lon":"-141.2",
	"summary": "Flooding, high precipitation in Eagle",
	"description":"<p>Heavy rains caused flooding and washouts that closed the section of road between Chicken and Eagle, and the portions of the Top of the World Highway extending to the Canadian border, on August 12th. Three days later, the road to the Canadian border had been reopened, only to be washed out again when the area was hit with more heavy rains. The DOT worked around the clock to again reopen this stretch of highway. At the same time, the DOT was doing emergency reconstruction on the Taylor Highway, between Chicken and the Top of the World Highway, but the stretch beyond that junction to Eagle (from 95 mile to 160 mile), remained closed until August 4th when convoys were established by the DOT.</p><div><img src='img/highlights/State_of_Alaska_Taylor_Hwy.jpeg'/></div><div>Courtesy of the State of Alaska</div>",
	"kind":"flooding"
},{
	"date": "2012-7",
	"interval":"monthly",
	"lat":"",
	"lon":"",
	"summary":"Cool temperatures across most of Alaska",
	"description":"<p>Below normal temperatures were prevalent across Alaska in August, with very few locations reporting in at above normal.</p> <ul><li>Anchorage averaged 56.5&deg;F/13.6&deg;C, 2.1&deg;F below the long term average temperature.</li> <li>King Salmon averaged 51.6&deg;F/10.9&deg;C, 2.1&deg;F below the long term average temperature, making this their 3rd coolest August on record.</li> <li>The deviation below average temperatures for Juneau was -2.0&deg;F, Fairbanks was -0.4&deg;F, Big Delta was -0.3&deg;F and Nome was -0.1&deg;F.</li> <li>Ketchikan recorded an above average temperature deviation of +2.3&deg;F and Barrow +1.6&deg;F</li></ul>",
	"kind":"low-temperatures"
},{
	"date": "2012-7",
	"interval":"monthly",
	"lat":"70",
	"lon":"-169.4",
	"summary":"Arctic sea ice loss and extent below normal",
	"description":"<p>The <a href='http://nsidc.org/arcticseaicenews/2010/07/a-change-in-atmospheric-circulation/'>overview from the National Snow and Ice Data Center</a> reported a below normal rate of Arctic sea ice loss in the first half of August, declining at an average rate of 23,400 mi2/60,606 km2 per day, 8,690 mi2/22,507 km2 less than the average rate.</p> <p>Ice extent still remained lower than normal however, in all areas of the Arctic with open water developing along the coasts of northwest Canada, Alaska and Siberia. The break down of the dipole pressure anomaly in early August brought cool, cloudy conditions in over the Arctic Ocean and began a cyclonic pattern of sea ice motion, spreading the existing ice over a larger area. In a related report, this has been impeding the movement of cargo ships as they attempt to move supplies in the arctic coastal area of Alaska.</p> <div><img src='img/highlights/August_2010_Sea_Ice.png'/></div><div>Courtesy of the State of Alaska</div>",
	"kind":"sea-ice-changes"
}

];

ch.fixtures.models.july2010 = {
	"id" : "2010-07",
	"previousCount" : 0,
	"nextCount" : 0,
	"highlights" : ch.fixtures.julyHighlights
};
