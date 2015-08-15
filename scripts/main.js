var React = require('react');
var Backbone = require("backbone");
Backbone.$ = require("jquery");

var HomePageComponent = require("./components/HomePageComponent");

var App = Backbone.Router.extend({
	routes: {
		"": "home",
		"home": "home"
	},

	home: function() {
		React.render(
			<HomePageComponent />,
			document.getElementById('container')
		);
	}
});

var myRouter = new App();

Backbone.history.start();