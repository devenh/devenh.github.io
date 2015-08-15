var React = require('react');
var Backbone = require("backbone");
Backbone.$ = require("jquery");

var App = Backbone.Router.extend({
	routes: {
		"": "home",
		"home": "home"
	},

	home: function() {
		React.render(
			<div>
				<h1>Home Page</h1>
				<h3> Testing router </h3>
			</div>,
			document.getElementById('container')
		);
	}
});

var myRouter = new App();

Backbone.history.start();