var requireSource = require('./requireSource').require;
var util = require('util');

var logger = requireSource(function() {
	var util = require('util');
	module.exports = function(log) {
		util.log(log);
	}
})

logger('hello world');