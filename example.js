var requireSource = require('./index').require;

var logger = requireSource('logger', function() {
	var util = require('util');
	module.exports = function(log) {
		util.log(log);
	}
});

logger('hello world');


requireSource('logger')('hello world again !');