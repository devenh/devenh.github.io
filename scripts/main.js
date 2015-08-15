var React = require('react');
var Backbone = require("backbone");
Backbone.$ = require("jquery");

var NavBarComponent = require("./components/NavBarComponent");
var HomePageComponent = require("./components/HomePageComponent");
var LoginComponent = require("./components/LoginComponent");
var RegisterComponent = require("./components/RegisterComponent");
var CourseListComponent = require("./components/CourseListComponent");
var CourseLessonsComponent = require("./components/CourseLessonsComponent");
var LessonDetailsComponent = require("./components/LessonDetailsComponent");

var App = Backbone.Router.extend({
	routes: {
		"": "home",
		"home": "home",
		"login": "login",
		"registration": "registration",
		"courselist": "courseList",
		"courselessons": "courseLessons",
		"lessondetails": "lessonDetails"
	},

	home: function() {
		React.render(
			<HomePageComponent />,
			document.getElementById('container')
		);
	},
	login: function() {
		React.render(
			<LoginComponent />,
			document.getElementById('container')
		);
	},
	registration: function() {
		React.render(
			<RegisterComponent />,
			document.getElementById('container')
		);
	},
	courseList: function() {
		React.render(
			<CourseListComponent />,
			document.getElementById('container')
		);
	},
	courseLessons: function() {
		React.render(
			<CourseLessonsComponent />,
			document.getElementById('container')
		);
	},
	lessonDetails: function() {
		React.render(
			<LessonDetailsComponent />,
			document.getElementById('container')
		);
	}
});

React.render(<NavBarComponent />, document.getElementById("nav"));

var myRouter = new App();

Backbone.history.start();