var React = require('react');
var $ = require("jquery");

module.exports = React.createClass({
	getInitialState: function(){
		var that = this;
		var courselist = $.post("http://192.168.10.60:1234/webservice/login.php", { username: "Ruben Hidalgo"}, function(){
			that.forceUpdate();
		}, "JSON");
		return {
			courses: courselist
		}
	},
    render: function() {
    		var that=this;
    	    var phpData = this.state.courses;
    	    if(phpData.readyState === 4) {
    	    	var obj = JSON.parse(phpData.responseText);
    	    	var test = obj.map(function(model){
    	    		return (
    	    			<div>
    	    				<div onClick={that.doThings(model)}>
    	    					<p>{model["course_name"]}</p>
    	    				</div>
    	    			</div>
    	    		);
    	    	})
    	    }
    	    else {
    	    	console.log("not ready", phpData);
    	    }
        return (
            <div>
                <h1> Welcome to my Course page everyone </h1> 
                <button onClick={this.pullPHP}>testing PHP</button>
                {test}
            </div>        
        );
    },
    pullPHP: function(){
    	var phpData = this.state.courses;
    		var obj = JSON.parse(phpData.responseText);
    		// console.log(obj);
    		for(var i=0;i<obj.length;i++){
    			var current = obj[i];
    			console.log(current["course_name"])
    		}
    },
    doThings: function(model){
    	return function(e) {
			e.preventDefault();
			var target = $(e.target);
			// console.log(target);
			console.log(model["course_id"]);
 		}
    }
})