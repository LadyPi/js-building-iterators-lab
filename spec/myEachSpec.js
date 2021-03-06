/* This is the test file for myEach function
 *    PLEASE DO NOT EDIT THIS FILE
 * To run these tests do `mocha spec/test-myEach.js`
*/

var mocha = require('mocha');
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

var expect = chai.expect;
chai.config.includeStack = false; // turn off stack trace
chai.config.showDiff = true; // turn on reporter diff display

var myEach = require('../myEach');

describe('myEach', function() {
  // sample data
  beforeEach(function() {
    testArr = [0, 1, 100, 1000];
  });

  it("takes a function as the second argument and calls that function (callback)", function testCallback() {
    function spyOnMe() {}
    var spy = chai.spy(spyOnMe);
    myEach(testArr, spy);
    expect(spy).to.have.been.called();
  });

  it("passes each value in the array to the callback", function testEachItem(){
    var resultingArray = [];
    myEach(testArr, function(item) {
      resultingArray.push(item);
    });
    // compare elements in the result to expected array
    console.log('       results: ', resultingArray);
    expect(resultingArray).to.have.members([0, 1, 100, 1000]);
  });

  it("passes each value in the array to the callback, even non-integers", function testArrayPassing() {
    var resultingArray = [];
    var complexTestArr = ['snoopy', 32, {k: 'val'}, [2,3] ];
    myEach(complexTestArr, function(item) {
      resultingArray.push(item);
    });

    console.log('       results: ', resultingArray);
    expect(resultingArray).to.have.members(complexTestArr);
  });


  it("passes each index in the array to the callback as argument 2", function testEachIndex() {
    var resultingArray = [];
    myEach(testArr, function(_item, index) {
      resultingArray.push(index);
    });
    // compare elements in the result to expected array
    console.log('       results: ', resultingArray);
    expect(resultingArray).to.have.members([0, 1, 2, 3]);
  });


  it("passes the entire array to the callback as the 3rd argument", function testArrayPassing() {
    var resultingArray = [];
    myEach(testArr, function(_item, _index, arr) {
      console.log('       results: ', arr);
      // each time the callback is called verify that the array is as expected
      // until the callback is called though, this test will still pass
      expect(arr).to.have.members([0,1,100,1000]);
    });
  });

  it("returns undefined", function() {
    var results = myEach(testArr, function(){});
    expect(results).to.be.a("undefined");
  });


  // edge cases
  it("doesn't alter the original array", function testAlterations() {
    var resultingArray = [];
    myEach(testArr, function(_item, _index, _arr) {
      resultingArray.push('nothing');
    });
    // compare elements in the result to expected array
    console.log('       results: ', testArr);
    expect(testArr).to.have.members([0, 1, 100, 1000]);
  });


  it("works with arrays of length 0", function testArrayL0() {
    var resultingArray = [];
    myEach([], function(item) {
      resultingArray.push(item);
    });
    // compare elements in the result to expected array
    console.log('       results: ', resultingArray);
    expect(resultingArray.length).to.equal(0);

  });


  it("works with arrays of length 1", function testArrayL1() {
    var resultingArray = [];
    myEach([13], function(item) {
      resultingArray.push(item);
    });
    // compare elements in the result to expected array
    console.log('       results: ', resultingArray);
    expect(resultingArray.length).to.equal(1);
  });

});
