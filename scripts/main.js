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
var ShowQuestionsComponent = require("./components/ShowQuestions");

var App = Backbone.Router.extend({
	routes: {
		"" : "home",
		"home" : "home",
		"login": "login",
		"registration": "registration",
		"courselist": "courseList",
		"courselessons": "courseLessons",
		"lessondetails": "lessonDetails",
		"showquestions/:courseId": "showQuestions"
	},
	home: function() {
		React.render(
			<HomePageComponent />,
			document.getElementById('containerDos')
		);

	},
	login: function() {
		React.render(
			<LoginComponent />,
			document.getElementById('containerDos')
		);
	},
	registration: function() {
		React.render(
			<RegisterComponent />,
			document.getElementById('containerDos')
		);
	},
	courseList: function() {
		React.render(
			<CourseListComponent />,
			document.getElementById('containerDos')
		);
	},
	courseLessons: function() {
		React.render(
			<CourseLessonsComponent />,
			document.getElementById('containerDos')
		);
	},
	lessonDetails: function() {
		React.render(
			<LessonDetailsComponent />,
			document.getElementById('containerDos')
		);
	},
	showQuestions: function(courseId){
		React.render(
			<ShowQuestionsComponent />,
			document.getElementById('containerDos')
		);
	}
});

React.render(<NavBarComponent />, document.getElementById("nav"));

var myRouter = new App();

Backbone.history.start();