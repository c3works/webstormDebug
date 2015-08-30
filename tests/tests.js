/***
 *
 **** For Mocha Testing
 *
 */

var should = require('should');
var assert = require('assert');
var threeSeconds = require('seconds');

describe('testFramework', function () {

    it('should have mocha installed and running.', function () {

        assert.equal(true, true);

    });

    it('should have the library installed and running for fluent testing.', function () {

        true.should.eql(true);

    });


});
