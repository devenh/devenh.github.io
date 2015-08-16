var React = require('react');
var jquery = require("jquery");

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <h1> Login Page </h1>
                <input ref="username" type="text" />
                <input type="text" />
                <button onClick={this.sendUser}>Send User</button>
                <a onClick={this.cmon} href="#">Go Homeeee</a>
            </div>        
        );
    },
    sendUser: function(e){
    	console.log("function ran...");
    	
    	var obj = {
    		username: this.refs.username.getDOMNode().value
    	}
    	console.log(obj);
		$.post("http://192.168.10.60:1234/webservice/login.php", obj, function(data){
    		console.log(data.message);
    	});

    },
    cmon: function(e){
        window.location.reload();
    }
})