// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

// function myMap(arr, callback) {

//  CODE INSIDE HERE   //
function myMap(arr , callback) {
	var newArray = [];
	for(var i = 0; i < arr.length; i++) {
		newArray.push(callback(arr[i], i, arr));
	}
	return newArray;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
