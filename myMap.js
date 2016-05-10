// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

// function myMap(arr, callback) {

//  CODE INSIDE HERE   //
function myMap(array , callback) {
	for(var i = 0; i < array.length; i++) {
		var Value = callback(array[i]);
		return callback;
	}
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
