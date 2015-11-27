"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>React.js Boilerplate</h1>
				<p>Made by Patrick T. Nguyen</p>
				<p>Github: @superpatricko</p>
				<p>React, React Router, and (maybe) Flux for ultra responsive web apps!</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
});

module.exports = Home;