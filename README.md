# require-source

  Create a module just by giving the js source code to a special require function

## Installation

    $ npm install require-source

## Example usage

```javascript

    var requireSource = require('require-source').require;

    //The requireSource function takes an id and the
    //module source code
    var logger = requireSource('logger', function() {
        var util = require('util');
        module.exports = function(log) {
            util.log(log);
        }
    });

    //should print 'hello' to the console
    logger('hello');

    //we can require the module later
    var myLogger = requireSource('logger');
    

    //We can create a module by giving its source code as a string
    //worldModule.world is equal to "world"
    var worldModule = requireSource('world', "module.exports.world='world'");
    
``` 

## Running Tests

To run the test suite first invoke the following command within the repo, installing the development dependencies:

    $ npm install

then run the tests:

    $ npm test

