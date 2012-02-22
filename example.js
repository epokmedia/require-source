var requireSource = require('./index').require;

var logger = requireSource(function() {
	var util = require('util');
	module.exports = function(log) {
		util.log(log);
	}
})

logger('hello world');