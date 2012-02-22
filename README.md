# require-source

  Create a module just by giving the js source code to a special require function

## Installation

    $ npm install require-source

## Example usage

    var requireSource = require('require-source').require;

    var logger = requireSource(function() {
        var util = require('util');
        module.exports = function(log) {
            util.log(log);
        }
    });

    //should print 'hello world to the console' 
    logger('hello world');

## Running Tests

To run the test suite first invoke the following command within the repo, installing the development dependencies:

    $ npm install

then run the tests:

    $ npm test

