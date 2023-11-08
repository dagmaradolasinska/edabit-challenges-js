// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
	let array = [];
	for (const key in obj) {
		array.push([key, obj[key]]);
	};
	return array;
}