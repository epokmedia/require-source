var Module = require('module');

var moduleCache = {};

module.exports.require = function(id, source) {

	if (!id || typeof id !== 'string' || id.length == 0) {
		throw new Error('id is required to require or define a source module');
	}

	var m;

	if (source) {
		if (typeof source === 'function') {
			source = '(' + source.toString() + ')()';
		} else if (typeof source !== "string") {
			source = source.toString();
		}

		m = new Module(id, module);
		m._compile(source, __filename);

		moduleCache[id] = m;

	} else if (moduleCache[id]) {

		m = moduleCache[id];

	} else {
		var err = new Error("Cannot define or find source module '" + id + "'");
    	err.code = 'SOURCE_MODULE_NOT_FOUND';

		throw err;
	}

	return m.exports;

}