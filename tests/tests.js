/***
 *
 **** For Mocha Testing
 *
 */

var should = require('should');
var assert = require('assert');
var threeSeconds = require('seconds');


describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});


//describe('User', function() {
//    describe('#save()', function() {
//        it('should save without error', function(done) {
//            var user = {name: "Fred"};
//
//            setTimeout(function(){
//
//                console.log("%c the user's name is: " + user.name, "color: #00F");
//                done();
//
//            }, 2000);
//
//
//        });
//    });
//});



describe('testFramework', function () {

    it('should have mocha installed and running.', function () {

        assert.equal(true, true);

    });

    it('should have the library installed and running for fluent testing.', function () {

        true.should.eql(true);

    });


});

describe('Asyncronous testing', function () {

    var result = false;

    beforeEach(function (done) {
        setTimeout(function () {

            var somethingHere = 4;
            var somethingElse = "Some string thing";

            result = true;
            //complete before the async beforeEach
            done();

        }, 2000);
    });

    it('should NOT be so hard so this makes it easier', function (done) {
        result.should.eql(true);
        done();

    })

});
