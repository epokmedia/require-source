var Module = require('module');

module.exports.require = function(source) {

	if (typeof source === 'function') {
		source = '(' + source.toString() + ')()';
	} else if (typeof source !== "string") {
		source = source.toString();
	}

	var newModule = new Module(module.id, module);
	newModule._compile(source, __filename);

	return newModule.exports;

}